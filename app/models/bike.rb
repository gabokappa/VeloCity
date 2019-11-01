class Bike < ApplicationRecord
  belongs_to :user
  has_many :components, dependent: :destroy
end
