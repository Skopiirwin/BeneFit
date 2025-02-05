class CreateUserMeasurements < ActiveRecord::Migration[7.2]
  def change
    create_table :user_measurements do |t|
      t.references :user, null: false, foreign_key: true
      t.float :height
      t.float :weight
      t.float :chest
      t.float :waist
      t.float :hips
      t.float :inseam

      t.timestamps
    end
  end
end
