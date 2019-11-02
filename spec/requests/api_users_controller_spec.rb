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
      user1 = FactoryBot.create(:user)
      get '/api/v1/users/index/'
      json = JSON.parse(response.body)
      expect(json.length).to eq(1)
      expect(User.all.first).to have_attributes id: (a_value == user1.id)
    end

    it 'JSON object has a specific attribute' do
      FactoryBot.create(:user)
      get '/api/v1/users/index/'
      json = JSON.parse(response.body)
      expect(json.first['first_name']).to eq('Joe')
    end
  end
end
