# app/controllers/concerns/api_response_formatter.rb
module ApiResponseFormatter
  extend ActiveSupport::Concern

  included do
    before_action :set_default_format
  end

  private

  def set_default_format
    request.format = :json unless params[:format]
  end

  def render_success(data, status: :ok, meta: {})
    render json: {
      status: 'success',
      data: data,
      meta: meta
    }, status: status
  end

  def render_error(message, status: :unprocessable_entity, errors: nil)
    error_response = {
      status: 'error',
      message: message
    }
    error_response[:errors] = errors if errors.present?
    
    render json: error_response, status: status
  end
end