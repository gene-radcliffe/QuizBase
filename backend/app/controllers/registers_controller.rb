class RegistersController < ApplicationController
  def new
    
  end
  

  def create 
    @user = User.new(users_params)
    if @user.save 
      render "show", status: :created
    else
      render :json => {
        :status => :bad_request,
        :errors => @user.errors.messages
      }
    end

  end

  private 

  def users_params 
    params.require(:user).permit(:name, :username, :password, :email)
  end 
  
end
