class Api::UserServersController < ApplicationController

      before_action :require_logged_in, only: [:create, :destroy]

      def create
         @user_server = UserServer.create!(user_server_params)
         render "api/servers/show"
      end

      def destroy
         @user_server = UserServer.find_by(user_server_params)
         @user_server.destroy
         render "api/servers/index"
      end

      private
      def user_server_params
         params.require(:user_server).permit(:user_id, :server_id)
      end

end
