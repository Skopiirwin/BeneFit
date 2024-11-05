class Api::V1::ClothingItemsController < ApplicationController
  before_action :set_clothing_item, only: [:show, :recommend_size]

  def index
    @clothing_items = ClothingItem.all
    render json: @clothing_items
  end

  def show
    render json: @clothing_item
  end

  def recommend_size
    user_measurement = current_user.user_measurements.last
    if user_measurement
      recommended_size = @clothing_item.recommend_size(user_measurement)
      render json: { recommended_size: recommended_size }
    else
      render json: { error: "No user measurements found" }, status: :unprocessable_entity
    end
  end

  def upload_image
    file = params[:file]
    if file
      url = S3Service.upload_file(file, "clothing_items/#{file.original_filename}")
      render json: { image_url: url }
    else
      render json: { error: "No file provided" }, status: :unprocessable_entity
    end
  end

  private

  def set_clothing_item
    @clothing_item = ClothingItem.find(params[:id])
  end
end
