# app/controllers/concerns/measurement_error_handler.rb
module MeasurementErrorHandler
  extend ActiveSupport::Concern

  included do
    rescue_from Measurement::ValidationError, with: :handle_validation_error
    rescue_from Measurement::MeasurementTypeError, with: :handle_type_error
    rescue_from Measurement::CalibrationError, with: :handle_calibration_error
  end

  private

  def handle_validation_error(error)
    render json: {
      error: 'Validation Error',
      message: error.message,
      details: error.details
    }, status: :unprocessable_entity
  end

  def handle_type_error(error)
    render json: {
      error: 'Measurement Type Error',
      message: error.message
    }, status: :bad_request
  end

  def handle_calibration_error(error)
    render json: {
      error: 'Calibration Error',
      message: error.message,
      required_action: 'Please recalibrate your measurements'
    }, status: :unprocessable_entity
  end
end