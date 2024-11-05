# app/controllers/debug_controller.rb
class DebugController < ApplicationController
  def check_user
    email = params[:email]
    user = User.find_by(email: email)
    
    if user
      render json: {
        exists: true,
        email: user.email,
        encrypted_password_present: user.encrypted_password.present?,
        # Don't include actual password hash in production!
        password_hash_start: user.encrypted_password&.first(10)
      }
    else
      render json: { exists: false }
    end
  end
end