# frozen_string_literal: true

RSpec.describe Api::V1::ComponentsController, type: :request do
  describe 'GET /components' do
    it 'responds with 200' do
      get '/api/v1/components/index'
      expect(response).to have_http_status(200)
    end

    it 'returns a JSON object' do
      FactoryBot.create(:component)
      get '/api/v1/components/index'
      json = JSON.parse(response.body)
      expect(json[0]['distance_done']).to eq(200)
    end

    it 'show/1 returns a specific JSON object' do
      part = FactoryBot.create(:component)
      post "/api/v1/components/show/#{part.bike_id}"
      json = JSON.parse(response.body)
      expect(json.first['comp_name']).to eq('Chain')
    end
  end
end
