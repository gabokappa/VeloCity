class User < ApplicationRecord
  validates :email, uniqueness: true
  validates_format_of :email, with: /@/
  validates :password, presence: true
  has_many :bikes, dependent: :destroy
end
