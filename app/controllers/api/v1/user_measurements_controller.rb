# app/controllers/api/v1/user_measurements_controller.rb
module Api
  module V1
    class UserMeasurementsController < ApplicationController
      before_action :authenticate_user!
      before_action :set_user_measurement, only: [:show, :update, :destroy]

      def index
        @user_measurements = Rails.cache.fetch("user_#{current_user.id}_measurements", expires_in: 1.hour) do
          current_user.user_measurements.order(created_at: :desc).to_a
        end
        render json: @user_measurements
      end

      def recent
        @measurements = current_user.user_measurements
                                  .order(created_at: :desc)
                                  .limit(5)
        render json: {
          measurements: ActiveModel::SerializableResource.new(@measurements, each_serializer: UserMeasurementSerializer),
          stats: calculate_stats
        }
      end

      def show
        render json: @user_measurement
      end

      def create
        @user_measurement = current_user.user_measurements.build(user_measurement_params)

        if @user_measurement.save
          Rails.cache.delete("user_#{current_user.id}_measurements")
          render json: @user_measurement, status: :created
        else
          render json: @user_measurement.errors, status: :unprocessable_entity
        end
      end

      def update
        if @user_measurement.update(user_measurement_params)
          Rails.cache.delete("user_#{current_user.id}_measurements")
          render json: @user_measurement
        else
          render json: @user_measurement.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @user_measurement.destroy
        Rails.cache.delete("user_#{current_user.id}_measurements")
        head :no_content
      end

      private

      def calculate_stats
        measurements = current_user.user_measurements
        last_measurement = measurements.order(created_at: :desc).first

        {
          total_measurements: measurements.count,
          last_updated: last_measurement&.created_at&.strftime("%B %d, %Y"),
          profile_completion: calculate_profile_completion
        }
      end

      def calculate_profile_completion
        required_fields = [:height, :weight, :chest, :waist, :hips, :inseam]
        last_measurement = current_user.user_measurements.order(created_at: :desc).first
        
        return 0 unless last_measurement

        filled_fields = required_fields.count { |field| last_measurement.send(field).present? }
        ((filled_fields.to_f / required_fields.length) * 100).round
      end

      def set_user_measurement
        @user_measurement = current_user.user_measurements.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        render json: { error: 'Measurement not found' }, status: :not_found
      end

      def user_measurement_params
        params.require(:user_measurement).permit(:height, :weight, :chest, :waist, :hips, :inseam)
      end
    end
  end
end