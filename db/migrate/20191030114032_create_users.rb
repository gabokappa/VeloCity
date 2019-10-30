class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :sur_name
      t.string :username
      t.string :email
      t.string :password
      t.integer :strava_id
      t.string :access_token
      t.timestamp :access_token_expiry
      t.string :refresh_token

      t.timestamps
    end
  end
end
