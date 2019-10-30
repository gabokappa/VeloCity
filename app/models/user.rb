class User < ApplicationRecord
  has_many :bikes, dependent: :destroy
end
