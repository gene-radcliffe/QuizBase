class Api::AnswersController < ApplicationController
  before_action :verify_authentication

  def index
    @answers = Answer.all
    render 'api/answers/index.json'
  end 

end
