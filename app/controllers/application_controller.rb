class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  include ActionController::RequestForgeryProtection

  respond_to :json
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
    devise_parameter_sanitizer.permit(:account_update, keys: [:name])
  end

  private

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