class Api::QuizzesController < ApplicationController

    def index
        @quizzes = Quiz.all
        render 'api/quizzes/index.json'
    end
end
