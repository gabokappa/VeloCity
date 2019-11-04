require 'test_helper'

class Api::V1::SignupControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_signup_index_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_signup_create_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_signup_show_url
    assert_response :success
  end

end
