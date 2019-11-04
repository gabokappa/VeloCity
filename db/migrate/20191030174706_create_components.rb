class CreateComponents < ActiveRecord::Migration[6.0]
  def change
    create_table :components do |t|
      t.string :comp_name
      t.integer :distance_done
      t.integer :max_distance
      t.references :bike, null: false, foreign_key: {on_delete: :cascade}

      t.timestamps
    end
  end
end
