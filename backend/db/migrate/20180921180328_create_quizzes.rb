class CreateQuizzes < ActiveRecord::Migration[5.2]
  def change
    create_table :quizzes do |t|
      t.string :title
      t.integer :user_id
      t.boolean :published
      t.date :published_date

      t.timestamps
    end
  end
end
