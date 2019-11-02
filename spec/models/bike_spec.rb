# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Bike, type: :model do
  it 'has valid attributes' do
    bike = FactoryBot.create(:bike)
    expect(bike).to be_valid
  end

  it 'is not valid without a user id' do
    bike = Bike.new(user_id: nil)
    expect(bike.valid?).to eq(false)
  end
end

# TODO Add BIKE tests here if the model changes and has another unique value , e.g strava id?