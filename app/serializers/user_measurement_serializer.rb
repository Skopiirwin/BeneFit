# app/serializers/user_measurement_serializer.rb
class UserMeasurementSerializer < ActiveModel::Serializer
  attributes :id, :height, :weight, :chest, :waist, :hips, :inseam,
             :created_at, :formatted_date, :measurement_summary

  def formatted_date
    object.created_at.strftime("%B %d, %Y")
  end

  def measurement_summary
    measurements = []
    measurements << "Height: #{object.height}cm" if object.height
    measurements << "Weight: #{object.weight}kg" if object.weight
    measurements << "Chest: #{object.chest}cm" if object.chest
    measurements << "Waist: #{object.waist}cm" if object.waist
    measurements << "Hips: #{object.hips}cm" if object.hips
    measurements << "Inseam: #{object.inseam}cm" if object.inseam
    measurements.join(", ")
  end
end