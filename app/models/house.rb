# == Schema Information
#
# Table name: houses
#
#  id             :integer          not null, primary key
#  description    :text             default(""), not null
#  address        :text             default(""), not null
#  zillow_prop_id :integer
#  price          :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class House < ActiveRecord::Base
  validates :description, :address, :price, presence: true
  validates :price, numericality:
    { only_integer: true, greater_than_or_equal_to: 0 }
end
