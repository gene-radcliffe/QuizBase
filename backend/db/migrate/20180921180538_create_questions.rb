class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.integer :quiz_id
      t.text :body

      t.timestamps
    end
  end
end
