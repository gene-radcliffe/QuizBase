class Api::UsersController < ApplicationController
    
    def index
        @users = User.all 
        render 'api/users/index.json'
    end 
end
