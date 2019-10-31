# frozen_string_literal: true

RSpec.describe Api::V1::ComponentsController, type: :request do
  describe 'GET /components' do
    it 'responds with 200' do
      get '/api/v1/components/index'
      expect(response).to have_http_status(200)
    end

    it 'returns a JSON object' do
      get '/api/v1/components/index'
      json = JSON.parse(response.body)
      expect(Component.all.first).to have_attributes :id => (a_value > 0)
    end

    it 'show/1 returns a specific JSON object' do
      get '/api/v1/components/show?bike_id=1'
      json = JSON.parse(response.body)
      expect(json.first['id']).to eq(1)
    end

  end
end