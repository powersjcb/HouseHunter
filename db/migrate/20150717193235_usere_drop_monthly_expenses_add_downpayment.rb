class UsereDropMonthlyExpensesAddDownpayment < ActiveRecord::Migration
  def change
    remove_column :users, :other_expenses
    add_column :users, :downpayment, :integer, not_null: true
  end
end
