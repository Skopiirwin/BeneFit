class AddMissingFieldsToUsers < ActiveRecord::Migration[7.2]
  def change
    # DeviseTokenAuth fields
    add_column :users, :provider, :string, null: false, default: 'email' unless column_exists?(:users, :provider)
    add_column :users, :uid, :string, null: false, default: '' unless column_exists?(:users, :uid)
    add_column :users, :tokens, :json unless column_exists?(:users, :tokens)
    
    # Devise trackable
    add_column :users, :sign_in_count, :integer, default: 0, null: false unless column_exists?(:users, :sign_in_count)
    add_column :users, :current_sign_in_at, :datetime unless column_exists?(:users, :current_sign_in_at)
    add_column :users, :last_sign_in_at, :datetime unless column_exists?(:users, :last_sign_in_at)
    add_column :users, :current_sign_in_ip, :string unless column_exists?(:users, :current_sign_in_ip)
    add_column :users, :last_sign_in_ip, :string unless column_exists?(:users, :last_sign_in_ip)
    
    # Devise confirmable
    add_column :users, :confirmation_token, :string unless column_exists?(:users, :confirmation_token)
    add_column :users, :confirmed_at, :datetime unless column_exists?(:users, :confirmed_at)
    add_column :users, :confirmation_sent_at, :datetime unless column_exists?(:users, :confirmation_sent_at)
    add_column :users, :unconfirmed_email, :string unless column_exists?(:users, :unconfirmed_email)
    
    # Other required fields
    add_column :users, :allow_password_change, :boolean, default: false unless column_exists?(:users, :allow_password_change)
    
    # Add indexes
    add_index :users, [:uid, :provider], unique: true unless index_exists?(:users, [:uid, :provider])
    add_index :users, :confirmation_token, unique: true unless index_exists?(:users, :confirmation_token)
  end
end
