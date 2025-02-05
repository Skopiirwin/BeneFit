# app/serializers/footwear_measurement_serializer.rb
class FootwearMeasurementSerializer < BaseMeasurementSerializer
  attributes :foot_length, :foot_width, :arch_height, :arch_type

  def arch_analysis
    {
      type: object.arch_type,
      description: arch_type_description,
      recommended_support: recommended_support
    }
  end

  private

  def arch_type_description
    case object.arch_type
    when 'low' then 'Flat feet with minimal arch'
    when 'medium' then 'Normal arch with balanced support'
    when 'high' then 'Pronounced arch with reduced ground contact'
    end
  end

  def recommended_support
    case object.arch_type
    when 'low' then 'Motion control and stability shoes'
    when 'medium' then 'Neutral cushioning shoes'
    when 'high' then 'Cushioned shoes with arch support'
    end
  end
end