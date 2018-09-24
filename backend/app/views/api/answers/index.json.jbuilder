json.answers @answers.each do  |answer|
  json.id answer.id
  json.body answer.body
  json.question_id answer.question_id
end