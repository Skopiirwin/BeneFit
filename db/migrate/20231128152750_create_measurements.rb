class CreateMeasurements < ActiveRecord::Migration[7.2]
  def change
    create_table :measurements do |t|
      t.references :user, null: false, foreign_key: true
      t.float :height
      t.float :weight
      t.float :chest
      t.float :waist
      t.float :hips

      t.timestamps
    end
  end
end
