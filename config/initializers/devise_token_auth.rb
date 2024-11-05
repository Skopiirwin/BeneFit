DeviseTokenAuth.setup do |config|
  # Don't change tokens on each request - this can cause issues with concurrent requests
  config.change_headers_on_each_request = false

  # Token lifespan
  config.token_lifespan = 2.weeks

  # Token cost
  config.token_cost = Rails.env.test? ? 4 : 10

  # Maximum number of concurrent devices
  config.max_number_of_devices = 10

  # Batch request window
  config.batch_request_buffer_throttle = 5.seconds

  # Check current password before updates
  config.check_current_password_before_update = :password

  # Disable email confirmation (this is the correct way)
  config.send_confirmation_email = false

  # Standard header names
  config.headers_names = {
    'access-token' => 'access-token',
    'client' => 'client',
    'expiry' => 'expiry',
    'uid' => 'uid',
    'token-type' => 'Bearer'
  }

  # Don't use standard Devise authentication
  config.enable_standard_devise_support = false
  
  # Set to nil to allow registration without confirm_success_url
  config.default_confirm_success_url = nil
  config.default_password_reset_url = nil
  config.redirect_whitelist = nil
end