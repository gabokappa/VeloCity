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
      FactoryBot.create(:user)
      get '/api/v1/users/index/'
      json = JSON.parse(response.body)
      expect(json.length).to eq(User.count)
      expect(User.all.first).to have_attributes id: (a_value > 0)
    end

    it 'first user has an id of 1' do
      FactoryBot.create(:user)
      get '/api/v1/users/index/'
      json = JSON.parse(response.body)
      expect(json.first['first_name']).to eq('Joe')
    end
  end
end
