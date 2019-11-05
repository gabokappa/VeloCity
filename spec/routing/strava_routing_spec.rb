# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::StravaController, type: :routing do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: 'api/v1/strava/index').to route_to('api/v1/strava#index')
    end

    it 'routes to #create' do
      expect(get: 'api/v1/strava/create').to route_to('api/v1/strava#create')
    end

    it 'routes to #show' do
      expect(get: 'api/v1/strava/show').to route_to('api/v1/strava#show')
    end

    it 'routes to #destroy' do
      expect(get: 'api/v1/strava/destroy').to route_to('api/v1/strava#destroy')
    end

    it 'routes to #authorize' do
      expect(get: 'api/v1/strava/authorize').to route_to('api/v1/strava#authorize')
    end

    it 'routes to #find_bikes' do
      expect(get: 'api/v1/strava/find_bikes').to route_to('api/v1/strava#find_bikes')
    end

    it 'routes to #refresh_bikes' do
      expect(post: 'api/v1/strava/refresh_bikes').to route_to('api/v1/strava#refresh_bikes')
    end
  end
end
