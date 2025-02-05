# app/models/eyewear_measurement.rb
class EyewearMeasurement < Measurement
  before_validation :set_measurement_type

  FACE_SHAPES = %w[oval round square heart diamond triangle].freeze
  FRAME_STYLES = {
    oval: ['Rectangular', 'Wayfarer', 'Square'],
    round: ['Rectangle', 'Square', 'Geometric'],
    square: ['Round', 'Oval', 'Cat-Eye'],
    heart: ['Oval', 'Round', 'Light-rimmed'],
    diamond: ['Oval', 'Cat-Eye', 'Rimless'],
    triangle: ['Cat-Eye', 'Browline', 'Decorative']
  }.freeze

  validates :face_width, :temple_length, :bridge_width, 
            numericality: { greater_than: 0 }, allow_nil: true
  validates :face_shape, inclusion: { in: FACE_SHAPES }

  def recommend_frames
    FRAME_STYLES[face_shape.to_sym] || []
  end

  def calculate_pupillary_distance
    return nil unless face_width && bridge_width
    (face_width - bridge_width) / 2
  end

  def frame_size_category
    return nil unless temple_length
    case temple_length
    when 0..135 then 'Small'
    when 136..145 then 'Medium'
    else 'Large'
    end
  end

  private

  def set_measurement_type
    self.measurement_type = 'eyewear'
  end

  def face_measurements
    {
      face_width: face_width,
      temple_length: temple_length,
      bridge_width: bridge_width,
      face_shape: face_shape
    }
  end
end
