class AddProviderAndUidToUsers < ActiveRecord::Migration[7.2]
  def change
    add_column :users, :provider, :string, null: false, default: 'email' unless column_exists?(:users, :provider)
    add_column :users, :uid, :string, null: false unless column_exists?(:users, :uid)
    add_column :users, :sign_in_count, :integer, default: 0, null: false unless column_exists?(:users, :sign_in_count)
    add_column :users, :current_sign_in_at, :datetime unless column_exists?(:users, :current_sign_in_at)
    add_column :users, :last_sign_in_at, :datetime unless column_exists?(:users, :last_sign_in_at)
    add_column :users, :current_sign_in_ip, :string unless column_exists?(:users, :current_sign_in_ip)
    add_column :users, :last_sign_in_ip, :string unless column_exists?(:users, :last_sign_in_ip)

    add_index :users, [:uid, :provider], unique: true unless index_exists?(:users, [:uid, :provider])
  end
end