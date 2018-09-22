class UsersController < ApplicationController
    
    def index
        @users = User.all 
        render 'app/views/users/index.json'
    end 
end
