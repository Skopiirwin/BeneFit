module Api
  module V1
    class BaseController < ApplicationController
      before_action :authenticate_user!
      
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
  end
end