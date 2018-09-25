class Api::ResultsController < ApplicationController
   
    def create
   
        result=params["result"]
        @user_id = result[:user_id]
        @quiz_id= result[:quiz_id]
        @score = 0
        size = 0
        
        # loop to extract questions and answers
        quiz= result["quiz"]
        questions_array = quiz["questions"]
        questions_array.each do |question|
            question_id = question[:id]
            answer_id = question["answer"][:id]
            
            @answer=Answer.find(answer_id)

                # byebug

                if @answer.correct == true
                     @score += 1
                 end
                 
        end
        
             
        size = questions_array.length
        @score = (@score.to_f/size)*100
        @score = @score.floor
        

        
        
    
        @result = Result.new(result_params)
        @result.score = @score
        if @result.save
            render "api/results/show.json", status: :created
        else
            render json: @result.errors, status: :unprocessable_entity
        end 
    end
    
    private

    def result_params
        params.require(:result).permit(:user_id, :quiz_id, :score)
    end


end
