require "test_helper"

class Api::V1::ClothingItemsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_clothing_items_index_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_clothing_items_show_url
    assert_response :success
  end

  test "should get recommend_size" do
    get api_v1_clothing_items_recommend_size_url
    assert_response :success
  end
end
