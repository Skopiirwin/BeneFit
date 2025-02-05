# Configure Redis for throttling
if defined?(Redis)
  Rack::Attack.cache.store = Redis.new(url: ENV.fetch("REDIS_URL", "redis://localhost:6379/0"))
else
  Rack::Attack.cache.store = ActiveSupport::Cache::MemoryStore.new
end

class Rack::Attack
  Rack::Attack.enabled = Rails.env.production?

  # Throttle all requests by IP (60rpm)
  Rack::Attack.throttle('req/ip', limit: 300, period: 5.minutes) do |req|
    req.ip
  end

  # Throttle POST requests to /api/v1/measurements by IP address
  Rack::Attack.throttle('measurements/ip', limit: 20, period: 1.hour) do |req|
    if req.path.start_with?('/api/v1/measurements') && req.post?
      req.ip
    end
  end

  # Throttle login attempts for a given email parameter
  Rack::Attack.throttle('limit logins per email', limit: 5, period: 20.seconds) do |req|
    if req.path == '/api/auth/sign_in' && req.post?
      req.params['email'].to_s.downcase.gsub(/\s+/, '')
    end
  end

  # Block suspicious requests
  Rack::Attack.blocklist('block suspicious requests') do |req|
    Rack::Attack::Allow2Ban.filter(req.ip, maxretry: 5, findtime: 1.hour, bantime: 1.hour) do
      req.path.include?('wp-admin') ||
      req.path.include?('wp-login') ||
      req.path.include?('.php')
    end
  end

  # Custom throttle response
  Rack::Attack.throttled_responder = lambda do |env|
    now = Time.now
    match_data = env['rack.attack.match_data']
    headers = {
      'Content-Type' => 'application/json',
      'X-RateLimit-Limit' => match_data[:limit].to_s,
      'X-RateLimit-Remaining' => '0',
      'X-RateLimit-Reset' => (now + (match_data[:period] - now.to_i % match_data[:period])).to_s
    }

    [ 429, headers, [{ error: "Too many requests. Please try again later." }.to_json]]
  end
end