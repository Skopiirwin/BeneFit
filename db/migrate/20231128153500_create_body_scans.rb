class CreateBodyScans < ActiveRecord::Migration[7.2]
  def change
    create_table :body_scans do |t|
      t.references :user, null: false, foreign_key: true
      t.float :shoulder_width
      t.float :chest_circumference
      t.float :waist_circumference
      t.float :hip_circumference
      t.float :inseam_length
      t.float :height

      t.timestamps
    end
  end
end
