# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_06_152453) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bikes", force: :cascade do |t|
    t.string "bike_name"
    t.integer "distance_done"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "strava_gear_id"
    t.integer "frame_type"
    t.index ["user_id"], name: "index_bikes_on_user_id"
  end

  create_table "components", force: :cascade do |t|
    t.string "comp_name"
    t.integer "distance_done"
    t.integer "max_distance"
    t.bigint "bike_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "start_distance"
    t.index ["bike_id"], name: "index_components_on_bike_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "sur_name"
    t.string "username"
    t.string "email", null: false
    t.string "password_digest", null: false
    t.integer "strava_id"
    t.string "access_token"
    t.datetime "access_token_expiry"
    t.string "refresh_token"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "bikes", "users", on_delete: :cascade
  add_foreign_key "components", "bikes", on_delete: :cascade
end
