# == Schema Information
#
# Table name: servers
#
#  id          :bigint           not null, primary key
#  server_name :string           not null
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  invite_code :string           not null
#
class Server < ApplicationRecord

    validates :owner_id, :server_name, :invite_code, presence: true
    validates :server_name, length: {maximum: 12}
    after_initialize :ensure_invite_code

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    has_many :memberships,
        foreign_key: :server_id,
        class_name: :Membership

    has_many :members,
        through: :memberships,
        source: :user

    has_many :channels,
        foreign_key: :server_id,
        class_name: :Channel

    private
    def self.find_by_invite_code(invite_code)
        Server.find_by(invite_code: invite_code)
    end
    
    def ensure_invite_code
        self.invite_code ||= SecureRandom.urlsafe_base64(10)
    end
    
end


    #   before_action :require_logged_in, only: [:create, :destroy]

    #   def create
    #      @user_server = UserServer.create!(user_server_params)
    #      render "api/servers/show"
    #   end

    #   def destroy
    #      @user_server = UserServer.find_by(user_server_params)
    #      @user_server.destroy
    #      render "api/servers/index"
    #   end

    #   private
    #   def user_server_params
    #      params.require(:user_server).permit(:user_id, :server_id)
    #   end