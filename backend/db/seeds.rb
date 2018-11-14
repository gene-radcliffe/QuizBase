# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
  require 'csv'
  User.delete_all
  @user = User.new(  name:"Gene Radcliffe", 
                    email:"g_radcliffe82@hotmail.com",
                    username: "gradcliffe82",
                    password: "123456")

  @user.save!

  Quiz.delete_all
  quizzes = CSV.open("./samples/quizzes.csv", headers:true)
  
  quizzes.each do |row|
    quiz = Quiz.new(title: row['title'],
                    user_id=@user.id,
                    published: true,
                    published_date: Time.new)
    quiz.save!
  end

  
  Question.delete_all
  questions = CSV.open("./samples/questions.csv", headers:true)
  questions.each do |row|
    question = Question.new(quiz_id:row['quiz_id'],
                            body: row['body'])
    question.save!

  end
  
  Answer.delete_all
  answers = CSV.open("./samples/answers.csv", headers:true)
  answers.each do |row|
    answer = Answer.new(body:row['body'],
                        question_id: row['question_id'],
                        correct: row['correct'])
    answer.save!
  end

