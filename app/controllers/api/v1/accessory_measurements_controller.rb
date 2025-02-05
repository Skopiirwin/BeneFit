# app/controllers/api/v1/accessory_measurements_controller.rb
module Api
  module V1
    class AccessoryMeasurementsController < BaseController
      include MeasurementController

      private

      def measurement_type
        'accessory'
      end

      def measurement_params
        params.require(:measurement).permit(
          :wrist_circumference,
          :wrist_width,
          # Include common measurements
          :height,
          :weight
        )
      end
    end
  end
end