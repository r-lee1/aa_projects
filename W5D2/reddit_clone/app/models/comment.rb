class Comment < ApplicationRecord
  validates :content, :user, :post, presence: true

  belongs_to :user
  belongs_to :post
  belongs_to :comment, optional: true

  has_many :comments,
  primary_key: :id,
  foreign_key: :parent_comment_id,
  class_name: Comment


end
