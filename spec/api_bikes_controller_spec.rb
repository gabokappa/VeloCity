# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::BikesController, type: :request do
  describe 'GET #index' do
    it 'responds with 200' do
      get '/api/v1/bikes/index'
      expect(response).to have_http_status(200)
    end

    it 'returns a JSON object with bike parts' do
      user1 = User.create(email: 'dave@test.com', password: '123455')
      bike1 = Bike.create(bike_name: 'Speedy', user_id: user1.id)
      part = Component.create(bike_id: bike1.id, comp_name: 'saddle')
      get '/api/v1/bikes/index', params: { user_id: user1.id }
      json = JSON.parse(response.body)
      expect(json.first[1][0]['comp_name']).to eq('saddle')
    end
  end

  describe 'POST #show' do
    it 'responds with 200' do
      bike1 = FactoryBot.create(:bike)
      post "/api/v1/bikes/show/#{bike1.id}"
      expect(response).to have_http_status(200)
    end

    it 'returns a JSON object with a specific attribute' do
      bike1 = FactoryBot.create(:bike)
      post "/api/v1/bikes/show/#{bike1.id}"
      json = JSON.parse(response.body)
      expect(json.first[1]['bike_name']).to eq('My Bike')
      expect(json.first[1]['bike_name']).to eq(bike1.bike_name)
    end
  end
end
