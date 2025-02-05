# app/models/concerns/measurable.rb
module Measurable
  extend ActiveSupport::Concern

  included do
    belongs_to :user
    validates :measurement_type, presence: true
    
    scope :recent, -> { order(created_at: :desc) }
    scope :by_type, ->(type) { where(measurement_type: type) }
  end

  def calculate_confidence_score
    valid_measurements = measurements.compact.count
    total_measurements = measurements.count
    ((valid_measurements.to_f / total_measurements) * 100).round(2)
  end

  private

  def measurements
    attributes.select { |k, _| k.end_with?('_measurement') }
  end
end