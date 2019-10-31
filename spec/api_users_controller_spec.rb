# frozen_string_literal: true

RSpec.describe Api::V1::UsersController, type: :request do
  describe 'GET /users/index' do
    # before :each do
    #   get '/api/v1/users/'
    # end
    it 'responds with 200' do
      get '/api/v1/users/'
      expect(response).to have_http_status(200)
    end

    it 'returns a JSON' do
      get '/api/v1/users/index/'
      json = JSON.parse(response.body)
      expect(json.length).to eq(User.count)
    end

    it 'first user has an id of 1' do
      get '/api/v1/users/index/'
      json = JSON.parse(response.body)
      expect(json.first['id']).to eq(1)
    end

  end
end
