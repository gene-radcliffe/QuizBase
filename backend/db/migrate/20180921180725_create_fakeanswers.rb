class CreateFakeanswers < ActiveRecord::Migration[5.2]
  def change
    create_table :fakeanswers do |t|
      t.text :body
      t.integer :question_id

      t.timestamps
    end
  end
end
