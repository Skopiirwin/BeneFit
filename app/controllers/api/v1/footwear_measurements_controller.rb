# app/controllers/api/v1/footwear_measurements_controller.rb
module Api
  module V1
    class FootwearMeasurementsController < BaseController
      include MeasurementController

      private

      def measurement_type
        'footwear'
      end

      def measurement_params
        params.require(:measurement).permit(
          :foot_length,
          :foot_width,
          :arch_height,
          :arch_type,
          # Include common measurements
          :height,
          :weight
        )
      end
    end
  end
end
