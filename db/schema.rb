# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 2024_12_13_231916) do
  create_table "body_scans", force: :cascade do |t|
    t.integer "user_id", null: false
    t.float "shoulder_width"
    t.float "chest_circumference"
    t.float "waist_circumference"
    t.float "hip_circumference"
    t.float "inseam_length"
    t.float "height"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_body_scans_on_user_id"
  end

  create_table "clothing_items", force: :cascade do |t|
    t.string "name"
    t.string "category"
    t.json "size_chart"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "jwt_denylist", force: :cascade do |t|
    t.string "jti", null: false
    t.datetime "exp", null: false
    t.index ["jti"], name: "index_jwt_denylist_on_jti"
  end

  create_table "measurements", force: :cascade do |t|
    t.integer "user_id", null: false
    t.float "height"
    t.float "weight"
    t.float "chest"
    t.float "waist"
    t.float "hips"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "measurement_type"
    t.decimal "face_width"
    t.decimal "temple_length"
    t.decimal "bridge_width"
    t.string "face_shape"
    t.decimal "foot_length"
    t.decimal "foot_width"
    t.decimal "arch_height"
    t.string "arch_type"
    t.decimal "wrist_circumference"
    t.decimal "wrist_width"
    t.index ["created_at"], name: "index_measurements_on_created_at"
    t.index ["measurement_type", "created_at"], name: "index_measurements_on_type_and_created_at"
    t.index ["measurement_type"], name: "index_measurements_on_measurement_type"
    t.index ["user_id", "measurement_type"], name: "index_measurements_on_user_id_and_measurement_type"
    t.index ["user_id"], name: "index_measurements_on_user_id"
  end

  create_table "user_measurements", force: :cascade do |t|
    t.integer "user_id", null: false
    t.float "height"
    t.float "weight"
    t.float "chest"
    t.float "waist"
    t.float "hips"
    t.float "inseam"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_user_measurements_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "name", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.json "tokens"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.boolean "allow_password_change", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "jti", null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["jti"], name: "index_users_on_jti", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "body_scans", "users"
  add_foreign_key "measurements", "users"
  add_foreign_key "user_measurements", "users"
end
