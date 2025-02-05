module Users
  class RegistrationsController < Devise::RegistrationsController
    skip_before_action :verify_authenticity_token
    respond_to :json

    def create
      build_resource(sign_up_params)

      if resource.save
        sign_in(resource)
        render json: {
          status: { code: 200, message: 'Signed up successfully.' },
          data: {
            user: {
              id: resource.id,
              email: resource.email,
              name: resource.name
            }
          }
        }
      else
        clean_up_passwords resource
        render json: {
          status: { 
            code: 422, 
            message: "Sign up failed.",
            errors: resource.errors.full_messages 
          }
        }, status: :unprocessable_entity
      end
    end

    private

    def sign_up_params
      params.require(:user).require(:user).permit(:email, :password, :password_confirmation, :name)
    rescue ActionController::ParameterMissing
      params.require(:user).permit(:email, :password, :password_confirmation, :name)
    end

    def account_update_params
      params.require(:user).permit(:email, :password, :password_confirmation, :name, :current_password)
    end
  end
end