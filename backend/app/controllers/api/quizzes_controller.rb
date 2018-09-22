class Api::QuizzesController < ApplicationController

    def index
        @quizzes = Quiz.all
        
    end
end
