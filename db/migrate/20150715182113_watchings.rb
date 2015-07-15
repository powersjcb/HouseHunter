class Watchings < ActiveRecord::Migration
  def change
    create_table :watchings do |t|
      t.integer :user_id, null: false
      t.integer :house_id, null: false

      t.timestamps null: false
    end
  end
end
