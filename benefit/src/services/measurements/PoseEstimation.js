// src/services/measurements/PoseEstimation.js
import { Pose } from '@mediapipe/pose'
import { Camera } from '@mediapipe/camera_utils'
import * as tf from '@tensorflow/tfjs'

class PoseEstimationError extends Error {
  constructor(message, type) {
    super(message)
    this.name = 'PoseEstimationError'
    this.type = type
  }
}

export default class PoseEstimation {
  constructor() {
    this.pose = null
    this.camera = null
    this.videoElement = null
    this.onResultsCallback = null
  }

  async initialize(videoElement, onResults) {
    this.videoElement = videoElement
    this.onResultsCallback = onResults

    try {
      await this.setupPose()
      await this.setupCamera()
    } catch (error) {
      throw new PoseEstimationError(
        'Failed to initialize pose estimation',
        'INIT_ERROR'
      )
    }
  }

  async setupPose() {
    this.pose = new Pose({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`
      }
    })

    this.pose.setOptions({
      modelComplexity: 2,
      smoothLandmarks: true,
      enableSegmentation: true,
      smoothSegmentation: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    })

    this.pose.onResults((results) => {
      if (this.onResultsCallback) {
        this.onResultsCallback(results)
      }
    })
  }

  async setupCamera() {
    if (!this.videoElement) {
      throw new PoseEstimationError(
        'Video element not initialized',
        'CAMERA_ERROR'
      )
    }

    this.camera = new Camera(this.videoElement, {
      onFrame: async () => {
        if (this.pose) {
          await this.pose.send({ image: this.videoElement })
        }
      },
      width: 640,
      height: 480
    })
  }

  async startCamera() {
    try {
      await this.camera?.start()
    } catch (error) {
      throw new PoseEstimationError(
        'Failed to start camera',
        'CAMERA_START_ERROR'
      )
    }
  }

  stopCamera() {
    this.camera?.stop()
  }

  async processFrame() {
    if (!this.pose) {
      throw new PoseEstimationError(
        'Pose estimation not initialized',
        'POSE_ERROR'
      )
    }

    try {
      return await this.pose.send({ image: this.videoElement })
    } catch (error) {
      throw new PoseEstimationError(
        'Failed to process frame',
        'PROCESSING_ERROR'
      )
    }
  }

  async estimatePoseFromImage(imageElement) {
    if (!this.pose) {
      throw new PoseEstimationError(
        'Pose estimation not initialized',
        'POSE_ERROR'
      )
    }

    try {
      return await this.pose.send({ image: imageElement })
    } catch (error) {
      throw new PoseEstimationError(
        'Failed to estimate pose from image',
        'IMAGE_PROCESSING_ERROR'
      )
    }
  }

  async predictMeasurements(landmarks) {
    try {
      // Convert landmarks to tensor
      const landmarkTensor = tf.tensor2d(
        landmarks.map(l => [l.x, l.y, l.z, l.visibility])
      )

      // Load measurement prediction model
      const model = await tf.loadLayersModel(
        'localstorage://measurement-model'
      )

      // Make prediction
      const prediction = model.predict(landmarkTensor)
      const measurements = await prediction.array()

      // Cleanup
      landmarkTensor.dispose()
      prediction.dispose()

      return measurements[0]
    } catch (error) {
      throw new PoseEstimationError(
        'Failed to predict measurements',
        'PREDICTION_ERROR'
      )
    }
  }

  dispose() {
    this.stopCamera()
    if (this.pose) {
      this.pose.close()
    }
  }
}

export const POSE_CONNECTIONS = [
  [0, 1], [1, 2], [2, 3], [3, 7], [0, 4], [4, 5], [5, 6], [6, 8],
  [9, 10], [11, 12], [11, 13], [13, 15], [15, 17], [15, 19], [15, 21],
  [17, 19], [12, 14], [14, 16], [16, 18], [16, 20], [16, 22], [18, 20],
  [11, 23], [12, 24], [23, 24], [23, 25], [24, 26], [25, 27], [26, 28],
  [27, 29], [28, 30], [29, 31], [30, 32], [27, 31], [28, 32]
]