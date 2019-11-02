# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::BikesController, type: :routing do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: 'api/v1/bikes/index').to route_to('api/v1/bikes#index')
    end

    it 'routes to #create' do
      expect(get: '/api/v1/bikes/create').to route_to('api/v1/bikes#create')
    end

    it 'routes to #show' do
      expect(post: '/api/v1/bikes/show/1/').to route_to('api/v1/bikes#show', id: '1')
    end

    it 'routes to #destroy' do
      expect(get: '/api/v1/bikes/destroy').to route_to('api/v1/bikes#destroy')
    end
  end
end