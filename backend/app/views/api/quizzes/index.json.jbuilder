json.quizzes @quizzes.each do |quiz|
    json.quiz do
        json.id quiz.id
        json.title quiz.title
        json.published quiz.published
        json.questions quiz.questions.each do  |question|
            json.id question.id
            json.question question.body
        
            json.answers question.answers.each do  |answers|
                json.id answers.id
                json.body answers.body

            end
        end
    end
end