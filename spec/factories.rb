FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "test#{n}@example.com" }
    password { '1234567' }
    first_name { 'Joe' }
    sur_name { 'Bloggs' }
    created_at { Time.now }
    access_token_expiry { Time.now }
    updated_at { Time.now }
  end

  factory :bike do
    bike_name { 'My Bike' }
    distance_done { 300 }
    user_id { FactoryBot.create(:user).id }
    created_at { Time.now }
    updated_at { Time.now }
  end

  factory :component do
    comp_name { 'Chain' }
    distance_done { 200 }
    max_distance { 2000 }
    bike_id { FactoryBot.create(:bike).id }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
