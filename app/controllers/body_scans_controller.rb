class BodyScansController < ApplicationController
  def create
    @body_scan = current_user.body_scans.new(body_scan_params)

    if @body_scan.save
      render json: @body_scan, status: :created
    else
      render json: @body_scan.errors, status: :unprocessable_entity
    end
  end

  def upload_scan_file
    file = params[:file]
    if file
      url = S3Service.upload_file(file, "body_scans/#{file.original_filename}")
      render json: { scan_url: url }
    else
      render json: { error: "No file provided" }, status: :unprocessable_entity
    end
  end

  private

  def body_scan_params
    params.require(:body_scan).permit(
      :shoulder_width,
      :chest_circumference,
      :waist_circumference,
      :hip_circumference,
      :inseam_length,
      :height
    )
  end
end
