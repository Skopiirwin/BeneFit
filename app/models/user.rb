# app/models/user.rb
class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  before_create :initialize_jti
         
  validates :email, presence: true, 
                   uniqueness: { case_sensitive: false },
                   format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :name, presence: true, length: { minimum: 2 }

  has_many :measurements, dependent: :destroy
  has_many :user_measurements, dependent: :destroy

  def generate_jwt
    JWT.encode({
      id: id,
      email: email,
      jti: jti,
      exp: 24.hours.from_now.to_i
    }, Rails.application.credentials.secret_key_base)
  end

  private

  def initialize_jti
    self.jti ||= SecureRandom.uuid
  end
end