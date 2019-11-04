class AddStravaGearIdToBikes < ActiveRecord::Migration[6.0]
  def change
    add_column :bikes, :strava_gear_id, :string
  end
end
