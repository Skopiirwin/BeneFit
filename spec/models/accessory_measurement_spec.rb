# spec/models/footwear_measurement_spec.rb
require 'rails_helper'

RSpec.describe FootwearMeasurement, type: :model do
  let(:footwear) { build(:footwear_measurement) }

  describe 'validations' do
    it { should validate_numericality_of(:foot_length).is_greater_than(0) }
    it { should validate_numericality_of(:foot_width).is_greater_than(0) }
    it { should validate_numericality_of(:arch_height).is_greater_than(0) }
    it { should validate_inclusion_of(:arch_type).in_array(FootwearMeasurement::ARCH_TYPES) }
    it { should validate_presence_of(:foot_length) }
    it { should validate_presence_of(:foot_width) }
  end

  describe '#set_measurement_type' do
    it 'sets the measurement type to footwear before validation' do
      measurement = FootwearMeasurement.new
      measurement.valid?
      expect(measurement.measurement_type).to eq('footwear')
    end
  end

  describe '#calculate_shoe_sizes' do
    it 'calculates sizes for all systems' do
      footwear.foot_length = 25.0
      sizes = footwear.calculate_shoe_sizes
      
      expect(sizes).to include(:us, :eu, :uk)
      expect(sizes[:us]).to be_a(Float)
    end

    it 'returns empty hash when foot length is missing' do
      footwear.foot_length = nil
      expect(footwear.calculate_shoe_sizes).to be_empty
    end
  end

  describe '#width_category' do
    it 'returns correct category for given width' do
      footwear.foot_width = 9.5
      expect(footwear.width_category).to eq('Medium')
    end

    it 'returns nil when foot width is missing' do
      footwear.foot_width = nil
      expect(footwear.width_category).to be_nil
    end
  end

  describe '#arch_support_recommendation' do
    it 'provides correct support recommendation for arch type' do
      footwear.arch_type = 'high'
      expect(footwear.arch_support_recommendation).to eq('Cushioned shoes with minimal support')
    end
  end
end