json.quizzes @quizzes.each do |quiz|
    json.quiz do
        json.id quiz.id
        json.title quiz.title
        json.published quiz.published
    end
end