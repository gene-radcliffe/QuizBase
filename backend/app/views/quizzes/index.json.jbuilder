json.quizzes @quizzes.each do |quiz|
    json.quiz do
        json.body quiz.title
    end
end