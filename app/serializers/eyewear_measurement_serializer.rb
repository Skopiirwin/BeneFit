# app/serializers/eyewear_measurement_serializer.rb
class EyewearMeasurementSerializer < BaseMeasurementSerializer
  attributes :face_width, :temple_length, :bridge_width, :face_shape

  def face_shape_details
    {
      shape: object.face_shape,
      description: face_shape_description,
      recommended_styles: recommended_frame_styles
    }
  end

  private

  def face_shape_description
    case object.face_shape
    when 'oval' then 'Balanced proportions with a curved jawline'
    when 'round' then 'Similar width and length with soft angles'
    when 'square' then 'Strong jawline with similar proportions'
    when 'heart' then 'Wider forehead tapering to a narrower chin'
    when 'diamond' then 'Narrow forehead and jawline with wide cheekbones'
    when 'triangle' then 'Narrow forehead with wider jawline'
    end
  end

  def recommended_frame_styles
    case object.face_shape
    when 'oval' then ['Rectangular', 'Wayfarer', 'Square']
    when 'round' then ['Rectangle', 'Square', 'Geometric']
    when 'square' then ['Round', 'Oval', 'Cat-Eye']
    when 'heart' then ['Oval', 'Round', 'Light-rimmed']
    when 'diamond' then ['Oval', 'Cat-Eye', 'Rimless']
    when 'triangle' then ['Cat-Eye', 'Browline', 'Decorative']
    else []
    end
  end
end