class ApplicationController < ActionController::API
    include ActionController::HttpAuthentication::Token::ControllerMethods
#   protect_from_forgery with: :null_session 
  helper_method :current_user
   helper_method :logged_in?
   helper_method :token_user
  
   def verify_authentication
    unless token_user
     render json: { error: "ACCESS DENIED!!" }, status: :unauthorized
    end
  end
  
  protected
   def current_user
    @current_user 
   end

   def logged_in?
    !!current_user
  end

  def token_user
  
   user = authenticate_with_http_token do |token, options|
   @current_user= User.find_by_api_token(token)
   
   end
  end
end
