class ApplicationController < ActionController::Base

    #CRLLL
    protect_from_forgery with: :exception
    helper_method :current_user, :logged_in?

    private

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_logged_in
        redirect_to "api/session/" if !logged_in?
    end
    
    def logged_in?
        !!current_user
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        @current_user.reset_session_token!
        session[:session_token] = nil
        @current_user[:session_token] = nil
    end

    ##SERVERS
    def get_all_servers(user)
        return user.owned_servers + user.joined_servers
    end

end
