require "test_helper"

class BodyScansControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get body_scans_create_url
    assert_response :success
  end
end
