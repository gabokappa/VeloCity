# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::SignupController, type: :routing do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: 'api/v1/signup/index').to route_to('api/v1/signup#index')
    end

    it 'routes to #create' do
      expect(post: 'api/v1/signup/create').to route_to('api/v1/signup#create')
    end

    it 'routes to #show' do
      expect(get: 'api/v1/signup/show').to route_to('api/v1/signup#show')
    end

    it 'routes to #login_check' do
      expect(post: 'api/v1/signup/login_check').to route_to('api/v1/signup#login_check')
    end

end
end
