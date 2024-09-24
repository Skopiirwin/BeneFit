class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  def index
    render json: { message: "Welcome to the BeneFit API" }
  end
end
