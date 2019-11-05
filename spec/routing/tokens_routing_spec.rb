# frozen_string_literal: true

RSpec.describe Api::V1::UsersController, type: :request do
  describe 'GET /users/index' do
    it 'responds with 200' do
      get '/api/v1/tokens/create'
      expect(response).to have_http_status(200)
    end

  end
end
