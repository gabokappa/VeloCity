# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :routing do
  describe 'routing' do
    # it 'routes to #index' do
    #   expect(get: '/api/v1/users/index').to route_to('api/v1/users#index')
    # end

    it 'routes to #create' do
      expect(post: '/api/v1/users').to route_to('api/v1/users#create', format: :json)
    end

    it 'routes to #show' do
      expect(get: '/api/v1/users/1').to route_to('api/v1/users#show', format: :json, id: '1')
    end

    it 'routes to #destroy' do
      expect(delete: '/api/v1/users/1').to route_to('api/v1/users#destroy', format: :json, id: '1')
    end
  end
end
