class StartDistanceToComponents < ActiveRecord::Migration[6.0]
  def change
    add_column :components, :start_distance, :integer
  end
end
