# == Schema Information
#
# Table name: users
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  income        :integer          not null
#  monthly_debts :integer          default(0), not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  downpayment   :integer
#

class User < ActiveRecord::Base
  validates :name, :income, :monthly_debts,
    :downpayment, presence: true
  validates :name, length: { minimum: 2 }
  validates :income, :monthly_debts, :downpayment,
    numericality: { only_integer: true, greater_than_or_equal_to: 0 }

  has_many :watchings
  has_many :watched_houses, through: :watchings, source: :house
end
