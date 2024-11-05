class AddIndexesToMeasurements < ActiveRecord::Migration[6.1]
  def change
    # Check if the index exists before trying to create it
    unless index_exists?(:measurements, :user_id)
      add_index :measurements, :user_id
    end

    # Optionally, you can check for other indexes here as well
    unless index_exists?(:measurements, :created_at)
      add_index :measurements, :created_at
    end
  end
end
