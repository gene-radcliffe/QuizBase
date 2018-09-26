class Api::UsersController < ApplicationController
    before_action :verify_authentication
    
    def index
        @users = User.all 
        render 'api/users/index.json'
    end 

    def show  
        @user = params[:id]
        @results = Result.where(user_id: @user)
        if @results.length > 0    
            render 'api/users/show.json'
        else  
            render json: {message: "You have not taken any quizzes."}
        end
    end 
end
