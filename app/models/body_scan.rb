class BodyScan < ApplicationRecord
  belongs_to :user

  validates :shoulder_width, :chest_circumference, :waist_circumference, 
            :hip_circumference, :inseam_length, :height,
            presence: true, numericality: { greater_than: 0 }
end