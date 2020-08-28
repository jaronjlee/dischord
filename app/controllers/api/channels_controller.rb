class Api::ChannelsController < ApplicationController

    before_action :require_logged_in

    def index
        @channels = current_server.channels
        render "api/channels/index"
    end

    def show
        if current_server
            @channel = Channel.find_by(id: params[:server_id])
            render "api/channels/show"
        else
            render json: ["Don't have access to this channel"], status: 400
        end
    end

    def create
        @channel = Channel.new(channel_params)
        if Server.find_by(id: params[:server_id])
            @channel.server_id = current_server.id
        end
        if @channel.save
            render "api/channels/show"
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def update
        @channel = Channel.find_by(id: params[:id])
        if @channel.update(channel_params)
            render "api/channels/show"
        else
            render @channel.errors.full_messages, status: 422
        end
    end

    def destroy
        @channel = Channel.find_by(id: params[:id])
        if @channel
            @channel.destroy
        else
            render json: ['Channel not found'], status: 422
        end
    end

    private
    def channel_params
        params.require(:channel).permit(:channel_name, :server_id)
    end

    def current_server
        @server = Server.find_by(id: params[:server_id])
        # get_all_servers(current_user).find_by(id: params[:server_id])
        # current_user.servers.find_by(id: params[:server_id])
    end
    
end
