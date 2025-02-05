# app/serializers/base_measurement_serializer.rb
class BaseMeasurementSerializer < ActiveModel::Serializer
  attributes :id, :measurement_type, :height, :weight, :created_at, :updated_at

  belongs_to :user
end