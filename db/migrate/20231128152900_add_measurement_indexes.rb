class AddMeasurementIndexes < ActiveRecord::Migration[7.0]
  def change
    add_index :measurements, [:user_id, :measurement_type], name: "index_measurements_on_user_id_and_measurement_type"
    add_index :measurements, [:measurement_type, :created_at], name: "index_measurements_on_type_and_created_at"
    add_index :measurements, :created_at, name: "index_measurements_on_created_at"
  end
end