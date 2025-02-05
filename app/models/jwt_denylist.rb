class JwtDenylist < ApplicationRecord
  include Devise::JWT::RevocationStrategies::Denylist

  self.table_name = 'jwt_denylist'
  
  # Specify JWT token column
  def self.jwt_revoked?(payload, user)
    exists?(jti: payload['jti'])
  end

  def self.revoke_jwt(payload, user)
    create!(
      jti: payload['jti'],
      exp: Time.at(payload['exp'].to_i)
    )
  end
end