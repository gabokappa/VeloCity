# frozen_string_literal: true

RSpec.describe Api::V1::BikesController, type: :request do
  describe 'GET /bikes' do
    it 'responds with 200' do
      get '/api/v1/bikes/index'
      expect(response).to have_http_status(200)
    end

    it 'returns a JSON' do
      post '/api/v1/bikes/show/1'
      expect(response).to have_http_status(200)
    end
  end
end