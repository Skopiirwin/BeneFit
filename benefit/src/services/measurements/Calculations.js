// src/services/measurements/Calculations.js
class CalculationError extends Error {
  constructor(message, type) {
    super(message)
    this.name = 'CalculationError'
    this.type = type
  }
}

export default class Measurements {
  constructor(calibration = null) {
    this.calibration = calibration
    this.pixelsPerCentimeter = calibration ? calibration.pixelsPerMm * 10 : null
  }

  calculateMeasurements(landmarks, imageWidth, imageHeight) {
    try {
      if (!landmarks || landmarks.length === 0) {
        throw new CalculationError('No landmarks provided', 'INVALID_INPUT')
      }

      return {
        height: this.calculateHeight(landmarks, imageHeight),
        chest: this.calculateChest(landmarks, imageWidth),
        waist: this.calculateWaist(landmarks, imageWidth),
        hips: this.calculateHips(landmarks, imageWidth),
        inseam: this.calculateInseam(landmarks, imageHeight),
        shoulderWidth: this.calculateShoulderWidth(landmarks, imageWidth)
      }
    } catch (error) {
      throw new CalculationError(
        `Failed to calculate measurements: ${error.message}`,
        'CALCULATION_ERROR'
      )
    }
  }

  calculateHeight(landmarks, imageHeight) {
    // Top of head to heel
    const head = landmarks[0]
    const heel = landmarks[28]
    return this.convertToRealDistance(
      Math.abs(heel.y - head.y) * imageHeight,
      'height'
    )
  }

  calculateChest(landmarks, imageWidth) {
    // Distance between shoulders * adjustment factor for chest circumference
    const leftShoulder = landmarks[11]
    const rightShoulder = landmarks[12]
    const chestWidth = Math.abs(rightShoulder.x - leftShoulder.x) * imageWidth
    return this.convertToRealDistance(chestWidth * Math.PI * 0.9, 'chest')
  }

  calculateWaist(landmarks, imageWidth) {
    // Mid-points between hips and shoulders
    const leftWaist = landmarks[23]
    const rightWaist = landmarks[24]
    const waistWidth = Math.abs(rightWaist.x - leftWaist.x) * imageWidth
    return this.convertToRealDistance(waistWidth * Math.PI * 0.85, 'waist')
  }

  calculateHips(landmarks, imageWidth) {
    // Hip points
    const leftHip = landmarks[23]
    const rightHip = landmarks[24]
    const hipWidth = Math.abs(rightHip.x - leftHip.x) * imageWidth
    return this.convertToRealDistance(hipWidth * Math.PI * 1.1, 'hips')
  }

  calculateInseam(landmarks, imageHeight) {
    // Hip to ankle
    const hip = landmarks[23]
    const ankle = landmarks[27]
    return this.convertToRealDistance(
      Math.abs(ankle.y - hip.y) * imageHeight,
      'inseam'
    )
  }

  calculateShoulderWidth(landmarks, imageWidth) {
    // Direct shoulder width
    const leftShoulder = landmarks[11]
    const rightShoulder = landmarks[12]
    return this.convertToRealDistance(
      Math.abs(rightShoulder.x - leftShoulder.x) * imageWidth,
      'shoulder'
    )
  }

  convertToRealDistance(pixels, measurementType) {
    if (this.calibration) {
      return this.convertWithCalibration(pixels)
    }
    return this.convertWithReferenceHeight(pixels, measurementType)
  }

  convertWithCalibration(pixels) {
    if (!this.pixelsPerCentimeter) {
      throw new CalculationError(
        'Calibration not properly initialized',
        'CALIBRATION_ERROR'
      )
    }
    return (pixels / this.pixelsPerCentimeter).toFixed(1)
  }

  convertWithReferenceHeight(pixels, measurementType) {
    // Using average human proportions if no calibration is available
    const referenceHeights = {
      height: 170, // Average height in cm
      chest: 90,   // Average chest circumference
      waist: 80,   // Average waist circumference
      hips: 95,    // Average hip circumference
      inseam: 80,  // Average inseam length
      shoulder: 45  // Average shoulder width
    }

    const reference = referenceHeights[measurementType] || referenceHeights.height
    return ((pixels / 480) * reference).toFixed(1) // 480 is default height
  }

  validateMeasurements(measurements) {
    const validationRules = {
      height: { min: 120, max: 220 },
      chest: { min: 60, max: 140 },
      waist: { min: 50, max: 130 },
      hips: { min: 70, max: 150 },
      inseam: { min: 50, max: 110 },
      shoulderWidth: { min: 30, max: 60 }
    }

    const errors = []
    Object.entries(measurements).forEach(([key, value]) => {
      const rules = validationRules[key]
      if (rules) {
        if (value < rules.min || value > rules.max) {
          errors.push(`${key} measurement (${value}) is outside normal range`)
        }
      }
    })

    if (errors.length > 0) {
      throw new CalculationError(
        'Invalid measurements detected: ' + errors.join(', '),
        'VALIDATION_ERROR'
      )
    }

    return true
  }

  calculateConfidence(landmarks) {
    // Calculate confidence score based on landmark visibility
    const visibilityScores = landmarks.map(l => l.visibility || 0)
    const averageVisibility = visibilityScores.reduce((a, b) => a + b, 0) / landmarks.length
    return (averageVisibility * 100).toFixed(1)
  }

  estimateWeight(height, chest, waist, hips) {
    // Basic BMI-based weight estimation
    // This is a rough estimation and should be used with caution
    try {
      const heightM = height / 100
      const bodyVolume = (chest + waist + hips) / 3
      const estimatedBMI = (bodyVolume / heightM) * 0.5
      return (estimatedBMI * Math.pow(heightM, 2)).toFixed(1)
    } catch (error) {
      throw new CalculationError(
        'Failed to estimate weight',
        'WEIGHT_ESTIMATION_ERROR'
      )
    }
  }
}

export class Calibration {
  constructor(referenceObjectWidth = 85.6) { // Credit card width in mm
    this.referenceWidth = referenceObjectWidth
    this.pixelsPerMm = null
  }

  calibrate(widthInPixels) {
    if (!widthInPixels || widthInPixels <= 0) {
      throw new CalculationError(
        'Invalid calibration width',
        'CALIBRATION_ERROR'
      )
    }
    this.pixelsPerMm = widthInPixels / this.referenceWidth
    return this.pixelsPerMm
  }

  isCalibrated() {
    return this.pixelsPerMm !== null
  }

  getPixelsPerMm() {
    if (!this.isCalibrated()) {
      throw new CalculationError(
        'Calibration not performed',
        'CALIBRATION_ERROR'
      )
    }
    return this.pixelsPerMm
  }

  reset() {
    this.pixelsPerMm = null
  }
}