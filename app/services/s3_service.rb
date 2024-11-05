# app/services/s3_service.rb
require 'aws-sdk-s3'

class S3Service
  def initialize
    @s3 = Aws::S3::Resource.new(
      region: ENV['AWS_REGION'],
      credentials: Aws::Credentials.new(ENV['AWS_ACCESS_KEY_ID'], ENV['AWS_SECRET_ACCESS_KEY'])
    )
    @bucket = @s3.bucket(ENV['AWS_BUCKET'])
  end

  # Generate a presigned URL for file access
  def generate_presigned_url(key, expires_in: 3600)
    object = @bucket.object(key)
    object.presigned_url(:get, expires_in: expires_in)
  end

  # Upload file to S3 and return the object key
  def upload_file(file, key)
    object = @bucket.object(key)
    object.upload_file(file.tempfile)
    object.key
  end

  # Static method to upload a file and return the public URL
  def self.upload_file(file, key)
    s3 = Aws::S3::Resource.new(
      region: ENV['AWS_REGION'],
      credentials: Aws::Credentials.new(ENV['AWS_ACCESS_KEY_ID'], ENV['AWS_SECRET_ACCESS_KEY'])
    )
    obj = s3.bucket(ENV['AWS_BUCKET']).object(key)
    obj.upload_file(file.tempfile)
    obj.public_url
  end
end
