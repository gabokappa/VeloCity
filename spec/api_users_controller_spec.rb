RSpec.describe Api::V1::UsersController, type: :request do

  describe "GET /users/index" do
    before :each do
      get "/api/v1/users/index"
    end
  it 'responds with 200' do
    expect(response).to have_http_status(200)
  end
end
end