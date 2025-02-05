# app/controllers/api/v1/measurements_controller.rb
module Api
  module V1
    class MeasurementsController < BaseController
      include MeasurementController
      include MeasurementErrorHandler

      def index
        @measurements = Rails.cache.fetch(cache_key, expires_in: 15.minutes) do
          current_user.measurements
                     .with_complete_data
                     .by_type(measurement_type)
                     .page(params[:page])
                     .per(params[:per_page] || 10)
        end
        render_success(@measurements, meta: pagination_meta)
      end

      def show
        measurement = current_user.measurements.find(params[:id])
        render_success(measurement)
      end

      def create
        @measurement = current_user.measurements.build(measurement_params)
        
        if @measurement.save
          MeasurementAnalysisJob.perform_later(@measurement.id)
          render_success(@measurement, status: :created)
        else
          render_error('Validation failed', errors: @measurement.errors)
        end
      end

      def bulk_create
        @measurements = current_user.measurements.build(bulk_measurement_params)
        
        ActiveRecord::Base.transaction do
          if @measurements.all?(&:valid?)
            @measurements.each(&:save!)
            render_success(@measurements, status: :created)
          else
            errors = @measurements.map { |m| m.errors.full_messages }.flatten
            render_error('Validation failed', errors: errors)
          end
        end
      end

      def update
        measurement = current_user.measurements.find(params[:id])
        
        if measurement.update(measurement_params)
          render_success(measurement)
        else
          render_error('Update failed', errors: measurement.errors)
        end
      end

      def destroy
        measurement = current_user.measurements.find(params[:id])
        measurement.destroy
        head :no_content
      end

      def recent_by_type
        @measurements = current_user.measurements
                                  .by_type(params[:type])
                                  .recent
                                  .limit(5)
        meta = {
          measurement_type: params[:type],
          total_count: @measurements.count
        }
        render_success(@measurements, meta: meta)
      end

      def stats_by_type
        @measurements = current_user.measurements
                                  .by_type(params[:type])
        
        stats = {
          total_count: @measurements.count,
          last_measurement: @measurements.recent.first,
          measurement_dates: @measurements.pluck(:created_at),
          type: params[:type]
        }
        
        render_success(stats)
      end

      private

      def cache_key
        "measurements/#{current_user.id}/#{params[:type]}/page-#{params[:page]}"
      end

      def pagination_meta
        {
          total_count: @measurements.total_count,
          total_pages: @measurements.total_pages,
          current_page: @measurements.current_page,
          per_page: @measurements.limit_value
        }
      end

      def measurement_type
        params[:measurement][:measurement_type] || 'clothing'
      end

      def measurement_params
        params.require(:measurement).permit(
          *base_measurement_params,
          *clothing_params,
          *eyewear_params,
          *footwear_params,
          *accessory_params
        )
      end

      def bulk_measurement_params
        params.require(:measurements).map do |measurement|
          measurement.permit(
            *base_measurement_params,
            *clothing_params,
            *eyewear_params,
            *footwear_params,
            *accessory_params
          )
        end
      end

      def base_measurement_params
        [:measurement_type, :height, :weight]
      end

      def clothing_params
        [
          # Add clothing-specific measurement fields here
        ]
      end

      def eyewear_params
        [
          :face_width,
          :temple_length,
          :bridge_width,
          :face_shape
        ]
      end

      def footwear_params
        [
          :foot_length,
          :foot_width,
          :arch_height,
          :arch_type
        ]
      end

      def accessory_params
        [
          :wrist_circumference,
          :wrist_width
        ]
      end
    end
  end
end