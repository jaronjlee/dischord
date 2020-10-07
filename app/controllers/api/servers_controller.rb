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

        if @server.save
            Membership.create({user_id: current_user.id, server_id: @server.id})
            render "api/servers/show"
        else
            render json: @server.errors.full_messages, status: 422
            # render json: ["Invalid server name (maximum 12 characters)"], status: 401
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

    def join
        @server = Server.find_by_invite_code(params[:invite_code])
        if @server
            Membership.create({user_id: current_user.id, server_id: @server.id})
            render "api/servers/show"
        else
            render json: ["Server does not exist"], status: 404
        end
    end

    def leave
        @server = current_user.joined_servers.find(params[:id])

        if @server
            membership = Membership.find_by_membership(current_user.id, @server.id)
            membership.destroy
            render "api/servers/show"
        else
            render json: ["Membership does not exist"], status: 404
        end
    end

    private
    def server_params
        params.require(:server).permit(:server_name, :owner_id, :invite_code)
    end

end
