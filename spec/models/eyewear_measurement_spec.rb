# spec/models/eyewear_measurement_spec.rb
require 'rails_helper'

RSpec.describe EyewearMeasurement, type: :model do
  let(:eyewear) { build(:eyewear_measurement) }

  describe 'validations' do
    it { should validate_numericality_of(:face_width).is_greater_than(0) }
    it { should validate_numericality_of(:temple_length).is_greater_than(0) }
    it { should validate_numericality_of(:bridge_width).is_greater_than(0) }
    it { should validate_inclusion_of(:face_shape).in_array(EyewearMeasurement::FACE_SHAPES) }
    it { should validate_presence_of(:face_width) }
    it { should validate_presence_of(:temple_length) }
  end

  describe '#set_measurement_type' do
    it 'sets the measurement type to eyewear before validation' do
      measurement = EyewearMeasurement.new
      measurement.valid?
      expect(measurement.measurement_type).to eq('eyewear')
    end
  end

  describe '#recommend_frames' do
    it 'returns appropriate frame styles for face shape' do
      eyewear.face_shape = 'oval'
      expect(eyewear.recommend_frames).to eq(['Rectangular', 'Wayfarer', 'Square'])
    end

    it 'returns empty array for invalid face shape' do
      eyewear.face_shape = nil
      expect(eyewear.recommend_frames).to be_empty
    end
  end

  describe '#calculate_pupillary_distance' do
    it 'calculates correct pupillary distance' do
      eyewear.face_width = 14.0
      eyewear.bridge_width = 2.0
      expect(eyewear.calculate_pupillary_distance).to eq(6.0)
    end

    it 'returns nil when measurements are missing' do
      eyewear.face_width = nil
      expect(eyewear.calculate_pupillary_distance).to be_nil
    end
  end

  describe '#frame_size_category' do
    it 'returns correct size category' do
      eyewear.temple_length = 140
      expect(eyewear.frame_size_category).to eq('Medium')
    end

    it 'returns nil when temple length is missing' do
      eyewear.temple_length = nil
      expect(eyewear.frame_size_category).to be_nil
    end
  end
end