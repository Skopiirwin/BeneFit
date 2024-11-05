import AWS from 'aws-sdk';

class S3UploadService {
  constructor() {
    AWS.config.update({
      region: process.env.VUE_APP_AWS_REGION,
      credentials: new AWS.Credentials({
        accessKeyId: process.env.VUE_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.VUE_APP_AWS_SECRET_ACCESS_KEY
      })
    });

    this.s3 = new AWS.S3();
  }

  async uploadFile(file, directory = 'uploads') {
    const params = {
      Bucket: process.env.VUE_APP_AWS_BUCKET,
      Key: `${directory}/${Date.now()}-${file.name}`,
      Body: file,
      ACL: 'private' // Ensures the uploaded file is private
    };

    try {
      const { Location } = await this.s3.upload(params).promise();
      return Location;
    } catch (error) {
      console.error('Error uploading file to S3:', error);
      throw error;
    }
  }

  async getSignedUrl(key, expirationInSeconds = 60) {
    const params = {
      Bucket: process.env.VUE_APP_AWS_BUCKET,
      Key: key,
      Expires: expirationInSeconds
    };

    try {
      return await this.s3.getSignedUrlPromise('getObject', params);
    } catch (error) {
      console.error('Error generating signed URL:', error);
      throw error;
    }
  }
}

export default new S3UploadService();