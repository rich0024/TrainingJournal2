class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.string :name
      t.text :details
      t.belongs_to :target

      t.timestamps
    end
  end
end
