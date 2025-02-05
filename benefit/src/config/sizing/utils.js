// benefit/src/config/sizing/utils.js
import { IMPORTANCE_LEVELS, FIT_PREFERENCES } from './constants'

export const calculateFitScore = (value, range, {
  importance = IMPORTANCE_LEVELS.MEDIUM,
  fitPreference = FIT_PREFERENCES.WELL,  // Default to our brand's fit
  stretchFactor = 1.0
}) => {
  const adjustedMin = range.min * stretchFactor
  const adjustedMax = range.max * stretchFactor
  
  let score
  let status
  
  if (value < adjustedMin) {
    score = value / adjustedMin
    status = 'skinny'
  } else if (value > adjustedMax) {
    score = adjustedMax / value
    status = 'baggy'
  } else {
    score = 1
    status = 'well'
  }

  // Adjust score based on fit preference
  switch (fitPreference) {
    case FIT_PREFERENCES.SKINNY:
      score *= value <= adjustedMin ? 1.1 : 0.9
      break
    case FIT_PREFERENCES.BAGGY:
      score *= value >= adjustedMax ? 1.1 : 0.9
      break
  }

  return {
    score,
    status,
    confidence: Math.round(score * 100),
    description: getFitDescription(status)
  }
}

const getFitDescription = (status) => {
  const descriptions = {
    skinny: 'Fits closer to body',
    well: 'Perfect Bene-fit',
    baggy: 'Relaxed, comfortable fit'
  }
  return descriptions[status] || 'Standard fit'
}

export const getMeasurementImportance = (measurement, category) => {
  const importanceMap = {
    tops: {
      chest: IMPORTANCE_LEVELS.HIGH,
      shoulders: IMPORTANCE_LEVELS.HIGH,
      waist: IMPORTANCE_LEVELS.MEDIUM,
      length: IMPORTANCE_LEVELS.LOW
    },
    bottoms: {
      waist: IMPORTANCE_LEVELS.HIGH,
      hips: IMPORTANCE_LEVELS.HIGH,
      inseam: IMPORTANCE_LEVELS.MEDIUM,
      thigh: IMPORTANCE_LEVELS.MEDIUM
    }
  }

  return importanceMap[category]?.[measurement] || IMPORTANCE_LEVELS.MEDIUM
}