require 'securerandom'

class ShortenedUrl < ApplicationRecord
  include SecureRandom

  validates :long_url, :short_url, presence: true

  def self.random_code
    short_url = SecureRandom.urlsafe_base64
  end

  def self.create_url(long_url, user)
    ShortenedUrl.create!(long_url: long_url, user_id: user.id, short_url: ShortenedUrl.random_code)
  end
end
