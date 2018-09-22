class LoginController < ApplicationController
include ActionController::HttpAuthentication::Basic::ControllerMethods


    def index
        authenticate_or_request_with_http_basic do |username, password|

            user = User.find_by_username(username)

            if user && user.authenticate(password) then
                render :json =>{
                :status => :ok,
                :id => user.id,
                :admin => user.admin,
                :name => user.name,
                :token => user.api_token,
                :joined => user.created_at
            }
            else
                if !user
                    render :json =>{
                    :status => :unauthorized,
                    :message => "user not found"
                    }
                end
                render :json =>{
                    :status => :unauthorized,
                    :message => "User/Password Bad"
                    }
            end
        end

    
    end
end
