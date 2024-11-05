# app/controllers/users/sessions_controller.rb
module Users
  class SessionsController < DeviseTokenAuth::SessionsController
    protect_from_forgery with: :null_session
    skip_before_action :verify_authenticity_token
    
    def create
      email = params.dig(:user, :email)&.downcase || 
              params.dig(:session, :user, :email)&.downcase
      
      Rails.logger.debug "Auth attempt for email: #{email}"
      
      @resource = User.find_by(email: email)
      
      if @resource
        Rails.logger.debug "Found user with id: #{@resource.id}"
        Rails.logger.debug "Has encrypted password: #{@resource.encrypted_password.present?}"
        password = params.dig(:user, :password) || params.dig(:session, :user, :password)
        is_valid = @resource.valid_password?(password)
        Rails.logger.debug "Password valid?: #{is_valid}"
      else
        Rails.logger.debug "No user found with email: #{email}"
      end

      if @resource&.valid_password?(params.dig(:user, :password) || params.dig(:session, :user, :password))
        @client_id = SecureRandom.urlsafe_base64(nil, false)
        token     = SecureRandom.urlsafe_base64(nil, false)
        expiry    = (Time.now + DeviseTokenAuth.token_lifespan).to_i

        @resource.tokens[@client_id] = {
          token: BCrypt::Password.create(token),
          expiry: expiry
        }
        
        @resource.save!

        sign_in(:user, @resource, store: false)
        
        @resource.update!(
          sign_in_count: @resource.sign_in_count.to_i + 1,
          current_sign_in_at: Time.current,
          last_sign_in_at: @resource.current_sign_in_at,
          current_sign_in_ip: request.remote_ip,
          last_sign_in_ip: @resource.current_sign_in_ip
        )

        response.headers.merge!({
          'access-token' => token,
          'token-type'   => 'Bearer',
          'client'       => @client_id,
          'expiry'       => expiry.to_s,
          'uid'          => @resource.uid
        })

        render json: {
          status: 'success',
          data: {
            user: @resource.as_json(except: [:tokens, :created_at, :updated_at]),
            message: 'Signed in successfully'
          }
        }
      else
        render json: {
          status: 'error',
          errors: ['Invalid login credentials']
        }, status: :unauthorized
      end
    end

    private

    def resource_params
      params.require(:user).permit(:email, :password, :name)
    end
  end
end