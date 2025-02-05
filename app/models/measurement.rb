# app/models/measurement.rb
class Measurement < ApplicationRecord
  include Measurable

  MEASUREMENT_TYPES = %w[clothing eyewear footwear accessory].freeze
  
  # Validations
  validates :measurement_type, inclusion: { in: MEASUREMENT_TYPES }
  validates :height, :weight, presence: true, numericality: { greater_than: 0 }

  # Associations with counter cache
  belongs_to :user, counter_cache: true

  # Scopes for data loading
  scope :with_user_data, -> { includes(:user) }
  scope :with_complete_data, -> { includes(:user, :measurement_details) }
  
  # Scopes for type-based queries
  scope :recent_by_type, ->(type) { 
    where(measurement_type: type)
    .order(created_at: :desc)
    .limit(10)
  }

  # Class methods
  def self.supported_types
    MEASUREMENT_TYPES
  end

  def self.by_type_and_date(type, start_date, end_date)
    where(measurement_type: type)
      .where(created_at: start_date..end_date)
      .includes(:user)
  end

  # Statistics materialized view
  def self.refresh_statistics
    Scenic.database.refresh_materialized_view(
      :measurement_statistics,
      concurrently: true
    )
  end
end