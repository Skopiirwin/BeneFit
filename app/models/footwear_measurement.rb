 app/models/footwear_measurement.rb
class FootwearMeasurement < Measurement
  before_validation :set_measurement_type

  ARCH_TYPES = %w[low medium high].freeze
  SIZING_SYSTEMS = {
    us: { base_size: 6, increment: 0.5 },
    eu: { base_size: 36, increment: 1 },
    uk: { base_size: 3.5, increment: 0.5 }
  }.freeze

  validates :foot_length, :foot_width, :arch_height,
            numericality: { greater_than: 0 }, allow_nil: true
  validates :arch_type, inclusion: { in: ARCH_TYPES }

  def calculate_shoe_sizes
    return {} unless foot_length
    
    SIZING_SYSTEMS.transform_values do |system|
      calculate_size_for_system(system[:base_size], system[:increment])
    end
  end

  def arch_support_recommendation
    case arch_type
    when 'low' then 'Motion control shoes with maximum support'
    when 'medium' then 'Neutral shoes with moderate support'
    when 'high' then 'Cushioned shoes with minimal support'
    end
  end

  def width_category
    return nil unless foot_width
    case foot_width
    when 0..8.5 then 'Narrow'
    when 8.6..10.5 then 'Medium'
    else 'Wide'
    end
  end

  private

  def set_measurement_type
    self.measurement_type = 'footwear'
  end

  def foot_measurements
    {
      foot_length: foot_length,
      foot_width: foot_width,
      arch_height: arch_height,
      arch_type: arch_type
    }
  end

  def calculate_size_for_system(base_size, increment)
    size_difference = (foot_length - 22) / 0.5 # 22cm is roughly size 6 US
    (base_size + (size_difference * increment)).round(1)
  end
end