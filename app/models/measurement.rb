class Measurement < ApplicationRecord
  belongs_to :user
  validates :height, :weight, :chest, :waist, :hips, presence: true, numericality: { greater_than: 0 }
end