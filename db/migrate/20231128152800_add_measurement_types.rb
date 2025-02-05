# db/migrate/YYYYMMDDHHMMSS_add_measurement_types.rb
class AddMeasurementTypes < ActiveRecord::Migration[7.0]
  def change
    add_column :measurements, :measurement_type, :string
    add_index :measurements, :measurement_type

    # Eyewear measurements
    add_column :measurements, :face_width, :decimal
    add_column :measurements, :temple_length, :decimal
    add_column :measurements, :bridge_width, :decimal
    add_column :measurements, :face_shape, :string

    # Footwear measurements
    add_column :measurements, :foot_length, :decimal
    add_column :measurements, :foot_width, :decimal
    add_column :measurements, :arch_height, :decimal
    add_column :measurements, :arch_type, :string

    # Accessory measurements
    add_column :measurements, :wrist_circumference, :decimal
    add_column :measurements, :wrist_width, :decimal
  end
end