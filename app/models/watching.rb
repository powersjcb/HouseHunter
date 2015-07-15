# == Schema Information
#
# Table name: watchings
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  house_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Watching < ActiveRecord::Base
  validates :user_id, :house_id, presence: true

  belongs_to :user
  belongs_to :house
end
