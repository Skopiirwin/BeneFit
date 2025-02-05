# app/jobs/measurement_analysis_job.rb
class MeasurementAnalysisJob < ApplicationJob
  queue_as :default

  def perform(measurement_id)
    measurement = Measurement.find(measurement_id)
    
    # Perform intensive calculations
    analysis_result = MeasurementAnalyzer.analyze(measurement)
    
    # Update measurement with results
    measurement.update!(
      analysis_results: analysis_result,
      analyzed_at: Time.current
    )
  end
end