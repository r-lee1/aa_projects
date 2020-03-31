class Sub < ApplicationRecord
  validates :title, :description, :user, presence: true

  belongs_to :user
  has_many :post_subs

  has_many :posts,
  through: :post_subs,
  source: :post
end
