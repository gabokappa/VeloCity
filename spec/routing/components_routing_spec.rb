# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::ComponentsController, type: :routing do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: 'api/v1/components/index').to route_to('api/v1/components#index')
    end

    it 'routes to #create' do
      expect(get: '/api/v1/components/create').to route_to('api/v1/components#create')
    end

    it 'routes to #show' do
      expect(post: '/api/v1/components/show/1/').to route_to('api/v1/components#show', bike_id: '1')
    end

    it 'routes to #destroy' do
      expect(get: '/api/v1/components/destroy').to route_to('api/v1/components#destroy')
    end
  end
end
