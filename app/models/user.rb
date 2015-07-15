# == Schema Information
#
# Table name: users
#
#  id             :integer          not null, primary key
#  name           :string           not null
#  income         :integer          not null
#  monthly_debts  :integer          default(0), not null
#  other_expenses :integer          default(0), not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class User < ActiveRecord::Base
  validates :name, :income, :monthly_debts,
    :other_expenses, presence: true
  validates :name, length: { minimum: 2 }
  validates :income, :monthly_debts, :other_expenses,
    numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end
