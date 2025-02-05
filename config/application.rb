require_relative "boot"
require "rails/all"
require "devise"

Bundler.require(*Rails.groups)

module BeneFit
  class Application < Rails::Application
    config.load_defaults 7.2
    config.autoload_lib(ignore: %w[assets tasks])
    
    # Configure CORS properly
    config.action_controller.forgery_protection_origin_check = false
    
    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore
    config.middleware.use Rack::MethodOverride
    config.middleware.use ActionDispatch::Flash

    config.api_only = false

    # Handle CORS
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'http://localhost:8080'
        resource '*',
          headers: :any,
          methods: [:get, :post, :put, :patch, :delete, :options, :head],
          expose: ['access-token', 'expiry', 'token-type', 'uid', 'client'],
          credentials: true,
          max_age: 0
      end
    end
  end
end