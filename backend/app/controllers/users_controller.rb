class UsersController < ApplicationController
    def index
    @users = User.all 
    render 'users/index.json'
    end 
end
