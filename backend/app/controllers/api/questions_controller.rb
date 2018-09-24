class Api::QuestionsController < ApplicationController
  before_action :verify_authentication

  def index
    @questions = Question.all
    render 'api/questions/index.json'
  end 
end
