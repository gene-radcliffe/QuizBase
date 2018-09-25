
  json.results @results.each do |result|
    json.quiz_id result.quiz_id
    json.score result.score
    json.submitted result.updated_at 
  end
