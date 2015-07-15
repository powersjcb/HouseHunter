class CreateHouses < ActiveRecord::Migration
  def change
    create_table :houses do |t|
      t.text    :description, null: false, default: ''
      t.text    :address, null: false, default: ''
      t.integer :zillow_prop_id
      t.integer :price, null: false

      t.timestamps null: false
    end
  end
end
