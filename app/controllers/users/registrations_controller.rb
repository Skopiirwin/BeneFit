# app/controllers/users/registrations_controller.rb
module Users
  class RegistrationsController < DeviseTokenAuth::RegistrationsController
    protect_from_forgery with: :null_session
    skip_before_action :verify_authenticity_token
    
    def create
      build_resource

      if @resource.save
        # Skip confirmation since we disabled it
        @resource.skip_confirmation! if @resource.respond_to?(:skip_confirmation!)
        @resource.save!

        # Generate token hash
        client_id = SecureRandom.urlsafe_base64(nil, false)
        token     = SecureRandom.urlsafe_base64(nil, false)
        expiry    = (Time.now + DeviseTokenAuth.token_lifespan).to_i

        # Store token hash in user's tokens
        @resource.tokens[client_id] = {
          token: BCrypt::Password.create(token),
          expiry: expiry
        }
        @resource.save!

        # Set auth headers
        response.headers.merge!({
          'access-token' => token,
          'token-type'   => 'Bearer',
          'client'       => client_id,
          'expiry'       => expiry.to_s,
          'uid'          => @resource.uid
        })

        render json: {
          status: 'success',
          data: {
            id: @resource.id,
            email: @resource.email,
            name: @resource.name,
            provider: @resource.provider,
            uid: @resource.uid,
            created_at: @resource.created_at,
            allow_password_change: false
          }
        }
      else
        render json: {
          status: 'error',
          errors: @resource.errors.full_messages
        }, status: :unprocessable_entity
      end
    end

    private

    def build_resource
      @resource = User.new(sign_up_params)
      @resource.provider = 'email'
      @resource.uid = sign_up_params[:email]
      @resource.tokens ||= {} # Initialize tokens hash if nil
      @resource
    end

    def sign_up_params
      params.require(:user).permit(:email, :password, :password_confirmation, :name)
    end

    def account_update_params
      params.require(:user).permit(:email, :name, :password, :password_confirmation)
    end
  end
end