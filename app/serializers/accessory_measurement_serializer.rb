# app/serializers/accessory_measurement_serializer.rb
class AccessoryMeasurementSerializer < BaseMeasurementSerializer
  attributes :wrist_circumference, :wrist_width

  def size_recommendations
    {
      watch_size: recommend_watch_size,
      bracelet_size: recommend_bracelet_size
    }
  end

  private

  def recommend_watch_size
    case object.wrist_circumference
    when 0..152 then 'Small (34-36mm)'
    when 153..178 then 'Medium (38-42mm)'
    else 'Large (44mm+)'
    end
  end

  def recommend_bracelet_size
    case object.wrist_circumference
    when 0..152 then 'Small (6-6.5")'
    when 153..178 then 'Medium (7-7.5")'
    else 'Large (8"+)'
    end
  end
end