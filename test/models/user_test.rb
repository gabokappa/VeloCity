require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "user with a valid email should be valid" do
    user = User.new(email: 'email@test.com', password_digest: 'test')
    assert user.valid?
  end

  test "user with a invalid email should be invalid" do
    user = User.new(email: 'email', password_digest: 'test')
    assert_not user.valid?
  end

  test "user with taken email should be invalid" do
    other_user = users(:one)
    user = User.new(email: other_user.email, password_digest: 'test')
    assert_not user.valid?
  end
end
