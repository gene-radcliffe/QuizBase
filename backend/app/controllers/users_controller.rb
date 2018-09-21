class UsersController < ApplicationController
    def index
    @users = User.all 
    render 'index.json'
    end 
end
