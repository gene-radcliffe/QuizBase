# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
  User.create(name:"mike", email:"mike@momentum.com", password:"1234", admin:true)

  User.create(name:"charlie", email:"charlie@momentum.com", password:"1234", admin:false)
  
  user = User.first
  quiz = Quiz.create!(title:"JavaScript arrays", 
    user_id: user.id, 
    published: true, 
    published_date: Time.now)

    question = quiz.questions.create!(body:"What method do you use to get all records that match a condition?" )
    
      answer= question.answers.create!(
        body:"find", correct:false)
      answer= question.answers.create!(
        body:"findAll", correct:false)
      answer= question.answers.create!(
        body:"filter", correct:true)
      answer= question.answers.create!(
        body:"reduce", correct:false)
  
    
    
    
    question = quiz.questions.create!(body:"What does `findIndex` return if no records match its condition?")
    answer= question.answers.create!(
      body:"-1", correct:true)
    answer= question.answers.create!(
      body:"false", correct:false)
    answer= question.answers.create!(
      body:"null", correct:false)
    

    question = quiz.questions.create!(body:"Which of the following does the method `map` do?")
      answer= question.answers.create!(
        body:"create a new array of shorter length than the original", correct:false)
      answer= question.answers.create!(
        body:"create a new array of the same length as the original", correct:true)
      answer= question.answers.create!(
        body:"return a single value", correct:false)
      answer= question.answers.create!(
        body:"transform the original array", correct:false)
      
    quiz = Quiz.create!(title:"Rails Models",
      user_id: user.id,
      published: false, 
      published_date: nil)
      question = quiz.questions.create!(body:"Given a table `posts` and another table `comments` with the field `post_id`, which of the following associations would you use to connect the tables?" )

      answer= question.answers.create!(
        body:"has_and_belongs_to_many :posts", correct:false)
      answer= question.answers.create!(
        body:"belongs_to :post, through: :post_id` in `Comment", correct:false)
      answer= question.answers.create!(
        body:"has_many :comments` in `Post", correct:true)
      answer= question.answers.create!(
        body:"belongs_to :comment", correct:false)

      question = quiz.questions.create!(body:"Which of the following is a built-in Rails validation?")

      answer= question.answers.create!(
        body:"numericality", correct:true)
      answer= question.answers.create!(
        body:"reliability", correct:false)
      answer= question.answers.create!(
        body:"email", correct:false)
      answer= question.answers.create!(
        body:"text", correct:false)
      answer= question.answers.create!(
        body:"size", correct:false)
      
      question = quiz.questions.create!(body:"Which of the following is **not** a database you can use with ActiveRecord?")
        
      answer= question.answers.create!(
        body:"PostgreSQL", correct:false)
      answer= question.answers.create!(
        body:"SQlite", correct:false)
      answer= question.answers.create!(
        body:"MySQL", correct:false)
      answer= question.answers.create!(
        body:"MongoDB", correct:true) 