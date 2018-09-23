json.quizzes @quizzes.each do |quiz|
    json.quiz do
        json.title quiz.title
        json.questions quiz.questions 
    end
end