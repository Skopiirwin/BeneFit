require_relative "boot"
require "rails/all"
Bundler.require(*Rails.groups)

module BeneFit
  class Application < Rails::Application
    config.load_defaults 7.2
    config.autoload_lib(ignore: %w[assets tasks])
    
    # CORS Configuration
    config.middleware.use Rack::Cors do
      allow do
        origins 'http://localhost:8080'
        resource '*',
          headers: :any,
          expose: ['access-token', 'expiry', 'token-type', 'uid', 'client'],
          methods: [:get, :post, :options, :delete, :put, :patch],
          credentials: true
      end
    end

    # Security configurations
    config.action_controller.forgery_protection_origin_check = false
    
    # Session configuration
    config.session_store :cookie_store, 
                        key: '_benefit_session', 
                        same_site: :none, 
                        secure: Rails.env.production?
                        
    config.action_dispatch.cookies_same_site_protection = :none

    # Add default headers
    config.action_dispatch.default_headers = {
      'Access-Control-Allow-Credentials' => 'true',
      'Access-Control-Allow-Headers' => 'accept, content-type, authorization, uid, client, access-token',
      'Access-Control-Expose-Headers' => 'access-token, client, expiry, token-type, uid'
    }
  end
end