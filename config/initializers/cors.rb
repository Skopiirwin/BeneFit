Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:8080'
    
    resource '*',
      headers: :any,
      expose: [
        'access-token', 
        'expiry', 
        'token-type', 
        'uid', 
        'client',
        'Authorization'
      ],
      methods: [:get, :post, :put, :patch, :delete, :options],
      credentials: true,
      max_age: 86400
  end
end