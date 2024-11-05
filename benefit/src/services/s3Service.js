// src/services/s3Service.js
import AWS from 'aws-sdk'

AWS.config.update({
  region: process.env.VUE_APP_AWS_REGION,
  credentials: new AWS.Credentials({
    accessKeyId: process.env.VUE_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.VUE_APP_AWS_SECRET_ACCESS_KEY
  })
})

const s3 = new AWS.S3()

export default {
  async uploadFile(file) {
    const params = {
      Bucket: process.env.VUE_APP_AWS_BUCKET,
      Key: `uploads/${Date.now()}-${file.name}`,
      Body: file
    }

    try {
      const { Location } = await s3.upload(params).promise()
      return Location
    } catch (error) {
      console.error('Error uploading file:', error)
      throw error
    }
  }
}
