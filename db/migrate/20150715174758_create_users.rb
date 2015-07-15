class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.integer :income, null: false
      t.integer :monthly_debts, null: false, default: 0
      t.integer :other_expenses, null: false. default: 0

      t.timestamps null: false
    end
  end
end
