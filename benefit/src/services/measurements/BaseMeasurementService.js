class BaseMeasurementService {
  constructor() {
    if (this.constructor === BaseMeasurementService) {
      throw new Error('BaseMeasurementService cannot be instantiated directly')
    }
  }

  async initialize() {
    try {
      await this.setupDetection()
      await this.setupCalibration()
      return true
    } catch (error) {
      throw new Error(`Initialization failed: ${error.message}`)
    }
  }

  async setupDetection() {
    throw new Error('setupDetection must be implemented by subclass')
  }

  async setupCalibration() {
    throw new Error('setupCalibration must be implemented by subclass')
  }

  async processMeasurements(data) {
    throw new Error('processMeasurements must be implemented by subclass')
  }

  async validateMeasurements(measurements) {
    throw new Error('validateMeasurements must be implemented by subclass')
  }

  calculateConfidence(data) {
    throw new Error('calculateConfidence must be implemented by subclass')
  }

  // Utility methods available to all measurement types
  convertToMillimeters(pixels, calibrationFactor) {
    return pixels * calibrationFactor
  }

  calculateAspectRatio(width, height) {
    return width / height
  }

  validateRange(value, min, max, measurementName) {
    if (value < min || value > max) {
      throw new Error(`${measurementName} measurement out of valid range`)
    }
    return true
  }

  // Common error handling
  handleError(error, type = 'MEASUREMENT_ERROR') {
    return {
      error: true,
      type,
      message: error.message,
      timestamp: new Date().toISOString()
    }
  }
}

export default BaseMeasurementService