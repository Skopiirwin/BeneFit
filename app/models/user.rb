class User < ApplicationRecord
  # Include devise token auth concerns
  include DeviseTokenAuth::Concerns::User
  
  # Add token serialization with proper coder for Rails 7
  serialize :tokens, coder: JSON

  # Include devise modules
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :trackable  # Removed :confirmable

  # Validations
  validates :email, presence: true, 
                   uniqueness: { case_sensitive: false },
                   format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :name, presence: true
  validates :password, presence: true, 
                      length: { minimum: 6 },
                      if: :password_required?
  validates :password_confirmation, presence: true,
                                  if: :password_required?

  # Initialize tokens hash
  after_initialize :set_default_tokens, if: :new_record?

  def as_json(options = {})
    options = {
      except: [:encrypted_password, :tokens, :created_at, :updated_at],
      methods: [:uid, :provider]
    }.merge(options)
    
    super(options)
  end

  protected

  def confirmation_required?
    false
  end

  def password_required?
    !persisted? || !password.nil? || !password_confirmation.nil?
  end

  def active_for_authentication?
    super && !disabled?
  end

  private

  def disabled?
    false
  end

  def set_default_tokens
    self.tokens ||= {}
  end
end