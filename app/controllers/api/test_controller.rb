module Api
  class TestController < ApplicationController
    def check_auth
      render json: { message: 'Authentication system is working' }
    end
  end
end