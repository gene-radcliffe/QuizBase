json.questions @questions.each do  |question|
  json.id question.id
  json.question question.body
  json.quiz_id question.quiz_id
end