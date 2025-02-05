# spec/models/measurement_spec.rb
require 'rails_helper'

RSpec.describe Measurement, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:measurement_type) }
    it { should validate_inclusion_of(:measurement_type).in_array(Measurement::MEASUREMENT_TYPES) }
    it { should validate_presence_of(:height) }
    it { should validate_presence_of(:weight) }
  end

  describe 'associations' do
    it { should belong_to(:user) }
  end

  describe '.supported_types' do
    it 'returns all supported measurement types' do
      expect(Measurement.supported_types).to match_array(%w[clothing eyewear footwear accessory])
    end
  end
end