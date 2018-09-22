class LoginController < ApplicationController
include ActionController::HttpAuthentication::Basic::ControllerMethods


    def index
        authenticate_or_request_with_http_basic do |username, password|

            user = User.find_by_username(username)

            if user && user.authenticate(password) then
                render :json =>{
                :user=>{
                    :status => :ok,
                    :id => user.id,
                    :admin => user.admin,
                    :name => user.name,
                    :token => user.api_token,
                    :joined => user.created_at
                }
            }
            else
            
                    render :json =>{
                    :status => :unauthorized,
                    :message => "User/Password Bad"
                    }
            end
        end

    
    end
end
