class User < ApplicationRecord
  has_secure_token :api_token
  has_secure_password

  validates :username, uniqueness: true
  validates :email, uniqueness: true
  validates :password, presence: true 

  attribute :admin, :boolean, default: false
end
