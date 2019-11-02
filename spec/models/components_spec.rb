# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Component, type: :model do
  it 'has valid attributes' do
    part = FactoryBot.create(:component)
    expect(part).to be_valid
  end

  it 'is not valid without a bike_id' do
    part = Component.new(bike_id: nil)
    expect(part.valid?).to eq(false)
  end
end

# TODO Add COMPONENTS tests here if the model changes and has another unique value , e.g strava id?