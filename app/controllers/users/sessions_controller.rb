# app/controllers/users/sessions_controller.rb
module Users
  class SessionsController < Devise::SessionsController
    skip_before_action :verify_authenticity_token
    respond_to :json
    before_action :configure_permitted_parameters

    def create
      user = User.find_by(email: sign_in_params[:email])
      if user&.valid_password?(sign_in_params[:password])
        sign_in(user)
        token = user.generate_jwt
        response.headers.merge!({
          'Authorization' => "Bearer #{token}",
          'access-token' => token,
          'client' => user.jti,
          'uid' => user.email
        })
        render json: {
          status: { code: 200, message: 'Logged in successfully.' },
          data: {
            user: {
              id: user.id,
              email: user.email,
              name: user.name
            },
            token: token
          }
        }
      else
        render json: {
          status: { code: 401, message: "Invalid email or password." }
        }, status: :unauthorized
      end
    end

    def destroy
      sign_out(current_user)
      render json: {
        status: { code: 200, message: 'Logged out successfully.' }
      }
    end

    private

    def sign_in_params
      params.require(:user).permit(:email, :password)
    rescue ActionController::ParameterMissing
      {}
    end

    def respond_to_on_destroy
      head :no_content
    end

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_in, keys: [:email, :password])
    end
  end
end