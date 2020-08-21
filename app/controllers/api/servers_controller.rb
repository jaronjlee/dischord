class Api::ServersController < ApplicationController

    before_action :require_logged_in, only: [:index, :show, :create, :edit, :destroy]

    def index
        @servers = get_all_servers(current_user)
        render "api/servers/index"
    end

    def show
        @server = Server.find_by(id: params[:id])
        if get_all_servers(current_user).include?(@server)
            render "api/servers/show"
        end
    end

    def create
        @server = Server.new(server_params)
        @server.owner_id = current_user.id

        if @server.save!
            render "api/servers/show"
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def update
        @server = Server.find(params[:id])
        if @server.owner_id == current_user.id && @server.update(server_params)
            render "api/servers/show"
        else
            render json: ["Something went wrong!"], status: 401
        end
    end

    def destroy
        @server = Server.find(params[:id])
        if @server.owner_id == current_user.id 
            @server.destroy
        else
            render json: ["Something went wrong!"], status: 401
        end
    end

    private
    def server_params
        params.require(:server).permit(:server_name, :owner_id)
    end

    def get_all_servers(user)
        return user.owned_servers + user.joined_servers
    end

end
