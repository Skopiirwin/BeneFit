class AddJtiToUsers < ActiveRecord::Migration[7.2]
  def change
    remove_column :users, :jti, :string if column_exists?(:users, :jti)
    add_column :users, :jti, :string
    change_column_null :users, :jti, false
    add_index :users, :jti, unique: true
  end
end