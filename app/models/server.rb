# == Schema Information
#
# Table name: servers
#
#  id          :bigint           not null, primary key
#  server_name :string           not null
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Server < ApplicationRecord

    validates :server_name, presence: true

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    has_many :user_servers,
        foreign_key: :server_id,
        class_name: :UserServer

    has_many :joined_users,
        through: :user_servers,
        source: :user
    
end
