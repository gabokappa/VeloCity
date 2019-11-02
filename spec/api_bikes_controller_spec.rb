# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::BikesController, type: :request do
  describe 'GET #index' do
    it 'responds with 200' do
      get '/api/v1/bikes/index'
      expect(response).to have_http_status(200)
    end

    it 'returns a JSON' do
      bike1 = FactoryBot.create(:bike)
      post "/api/v1/bikes/show/#{bike1.id}"
      expect(response).to have_http_status(200)
    end

    it 'returns a ' do
      bike1 = FactoryBot.create(:bike)
      post "/api/v1/bikes/show/#{bike1.id}"
      json = JSON.parse(response.body)
      expect(json.first[1]['bike_name']).to eq('My Bike')
    end
  end
end
