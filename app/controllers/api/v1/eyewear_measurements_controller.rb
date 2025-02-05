# app/controllers/api/v1/eyewear_measurements_controller.rb
module Api
  module V1
    class EyewearMeasurementsController < BaseController
      include MeasurementController

      private

      def measurement_type
        'eyewear'
      end

      def measurement_params
        params.require(:measurement).permit(
          :face_width,
          :temple_length,
          :bridge_width,
          :face_shape,
          # Include common measurements
          :height,
          :weight
        )
      end
    end
  end
end