class MeasurementSerializer < ActiveModel::Serializer
  attributes :id, :height, :weight, :chest, :waist, :hips, :user_id
end
