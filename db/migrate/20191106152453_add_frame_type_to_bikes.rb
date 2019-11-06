class AddFrameTypeToBikes < ActiveRecord::Migration[6.0]
  def change
    add_column :bikes, :frame_type, :integer
  end
end
