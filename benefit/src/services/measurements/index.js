// src/services/measurements/index.js
import { MeasurementModel } from '@/models/MeasurementModel'
import api from '../api'
import { Pose } from '@mediapipe/pose'
import { Camera } from '@mediapipe/camera_utils'
import * as tf from '@tensorflow/tfjs'

// Import our service classes
import PoseEstimation from './PoseEstimation'
import Calculations from './Calculations'
import MLPrediction from './MLPrediction'
import CameraUtils from './CameraUtils'

const initializeML = async () => {
  const model = new MeasurementModel()
  await tf.ready()
  const pose = new Pose({
    locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`
  })
  const camera = new Camera()
  return { model, pose, camera }
}

class MeasurementError extends Error {
  constructor(message, type) {
    super(message)
    this.name = 'MeasurementError'
    this.type = type
  }
}

// Create instances of our services
const poseEstimation = new PoseEstimation()
const calculations = new Calculations()
const mlPrediction = new MLPrediction()
const cameraUtils = new CameraUtils()

// Initialize ML components
let mlComponents
initializeML().then(components => {
  mlComponents = components
})

// Export the combined measurement service
export const measurementService = {
  // Original API methods
  async getAll() {
    try {
      const response = await api.getMeasurements()
      return response.data
    } catch (error) {
      console.error('Error fetching all measurements:', error)
      throw new MeasurementError('Failed to fetch measurements', 'FETCH_ERROR')
    }
  },

  async getRecent() {
    try {
      const response = await api.getRecentMeasurements()
      return {
        measurements: response.data.measurements,
        stats: response.data.stats
      }
    } catch (error) {
      console.error('Error fetching recent measurements:', error)
      throw new MeasurementError('Failed to fetch recent measurements', 'FETCH_ERROR')
    }
  },

  async create(measurementData) {
    try {
      const response = await api.createMeasurement(measurementData)
      return response.data
    } catch (error) {
      console.error('Error creating measurement:', error)
      throw new MeasurementError('Failed to create measurement', 'CREATE_ERROR')
    }
  },

  async update(id, measurementData) {
    try {
      const response = await api.updateMeasurement(id, measurementData)
      return response.data
    } catch (error) {
      console.error('Error updating measurement:', error)
      throw new MeasurementError('Failed to update measurement', 'UPDATE_ERROR')
    }
  },

  async delete(id) {
    try {
      const response = await api.deleteMeasurement(id)
      return response.data
    } catch (error) {
      console.error('Error deleting measurement:', error)
      throw new MeasurementError('Failed to delete measurement', 'DELETE_ERROR')
    }
  },

  // Scanning methods
  async initializePose() {
    return await poseEstimation.initialize()
  },

  async initializeCamera(videoElement, onFrame) {
    return await cameraUtils.initialize(videoElement, onFrame)
  },

  async processScannedMeasurements(landmarks) {
    try {
      // Get basic measurements from landmarks
      const basicMeasurements = calculations.calculateMeasurements(landmarks)
      
      // Refine with ML model
      const refinedMeasurements = await mlPrediction.predictMeasurements(landmarks)
      
      return {
        ...basicMeasurements,
        ...refinedMeasurements,
        timestamp: new Date().toISOString()
      }
    } catch (error) {
      console.error('Error processing scanned measurements:', error)
      throw new MeasurementError('Failed to process scanned measurements', 'SCANNING_ERROR')
    }
  },

  // Stats and analysis methods
  calculateMeasurementStats(measurements) {
    if (!Array.isArray(measurements) || measurements.length === 0) {
      return null
    }

    return {
      totalCount: measurements.length,
      latestDate: measurements[0].created_at,
      averages: this.calculateAverages(measurements),
      trends: this.calculateTrends(measurements)
    }
  },

  calculateAverages(measurements) {
    return calculations.calculateAverages(measurements)
  },

  calculateTrends(measurements) {
    return calculations.calculateTrends(measurements)
  },

  // Validation methods
  validateMeasurements(measurements) {
    return calculations.validateMeasurements(measurements)
  },

  // Utility methods
  calculateConfidence(landmarks) {
    return calculations.calculateConfidence(landmarks)
  },

  async calibrate(calibrationData) {
    return calculations.calibrate(calibrationData)
  },

  
  // Add method to access ML components
  getMLComponents() {
    return mlComponents
  },

  

  // Export service instances for direct access if needed
  services: {
    pose: poseEstimation,
    camera: cameraUtils,
    calculations: calculations,
    ml: mlPrediction
  }
}


// Default export for backward compatibility
export default measurementService

// Named exports for individual services
export {
  PoseEstimation,
  Calculations,
  MLPrediction,
  CameraUtils,
  MeasurementError
}