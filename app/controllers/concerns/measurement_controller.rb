# app/controllers/concerns/measurement_controller.rb
module MeasurementController
  extend ActiveSupport::Concern

  included do
    before_action :authenticate_user!
    before_action :set_measurement, only: [:show, :update, :destroy]
  end

  # Common controller methods
  def index
    @measurements = current_user.measurements
                              .by_type(measurement_type)
                              .recent
    render json: @measurements
  end

  def show
    render json: @measurement
  end

  def create
    @measurement = current_user.measurements.build(measurement_params)
    @measurement.measurement_type = measurement_type

    if @measurement.save
      render json: @measurement, status: :created
    else
      render json: { errors: @measurement.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @measurement.update(measurement_params)
      render json: @measurement
    else
      render json: { errors: @measurement.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @measurement.destroy
    head :no_content
  end

  # New methods for measurement types
  def recent_by_type
    @measurements = current_user.measurements
                              .by_type(params[:type])
                              .recent
                              .limit(5)
    render json: @measurements
  end

  def stats_by_type
    @measurements = current_user.measurements
                              .by_type(params[:type])
    
    stats = calculate_stats(@measurements)
    render json: stats
  end

  private

  def set_measurement
    @measurement = current_user.measurements.find(params[:id])
  end

  def measurement_type
    type = params.dig(:measurement, :measurement_type)
    return type if valid_measurement_type?(type)
    raise NotImplementedError, "#{self.class} must implement #measurement_type or provide valid measurement_type parameter"
  end

  def measurement_params
    raise NotImplementedError, "#{self.class} must implement #measurement_params"
  end

  def valid_measurement_type?(type)
    %w[clothing eyewear footwear accessory].include?(type)
  end

  def calculate_stats(measurements)
    {
      total_count: measurements.count,
      last_measurement: measurements.recent.first,
      measurement_dates: measurements.pluck(:created_at),
      type: measurements.first&.measurement_type || params[:type],
      summary: {
        average: calculate_averages(measurements),
        ranges: calculate_ranges(measurements)
      }
    }
  end

  def calculate_averages(measurements)
    # Get measurable attributes based on type
    measurable_attrs = get_measurable_attributes(measurements.first&.measurement_type)
    
    averages = {}
    measurable_attrs.each do |attr|
      avg = measurements.average(attr)
      averages[attr] = avg.round(2) if avg
    end
    averages
  end

  def calculate_ranges(measurements)
    # Get measurable attributes based on type
    measurable_attrs = get_measurable_attributes(measurements.first&.measurement_type)
    
    ranges = {}
    measurable_attrs.each do |attr|
      min = measurements.minimum(attr)
      max = measurements.maximum(attr)
      ranges[attr] = { min: min.round(2), max: max.round(2) } if min && max
    end
    ranges
  end

  def get_measurable_attributes(type)
    case type
    when 'clothing'
      %w[height weight chest waist hips]
    when 'eyewear'
      %w[face_width temple_length bridge_width]
    when 'footwear'
      %w[foot_length foot_width arch_height]
    when 'accessory'
      %w[wrist_circumference wrist_width]
    else
      []
    end
  end

  protected

  def base_measurement_params
    [
      :measurement_type,
      :height,
      :weight
    ]
  end

  def clothing_params
    [
      :chest,
      :waist,
      :hips,
      :inseam
    ]
  end

  def eyewear_params
    [
      :face_width,
      :temple_length,
      :bridge_width,
      :face_shape
    ]
  end

  def footwear_params
    [
      :foot_length,
      :foot_width,
      :arch_height,
      :arch_type
    ]
  end

  def accessory_params
    [
      :wrist_circumference,
      :wrist_width
    ]
  end
end