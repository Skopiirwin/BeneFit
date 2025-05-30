require "test_helper"

class Api::V1::UserMeasurementsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_v1_user_measurements_create_url
    assert_response :success
  end

  test "should get update" do
    get api_v1_user_measurements_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_user_measurements_destroy_url
    assert_response :success
  end

  test "should get index" do
    get api_v1_user_measurements_index_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_user_measurements_show_url
    assert_response :success
  end
end
