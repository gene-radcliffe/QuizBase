class Api::QuizzesController < ApplicationController
    before_action :verify_authentication
    
    def index
        @quizzes = Quiz.all
        render 'api/quizzes/index.json'
    end
end
