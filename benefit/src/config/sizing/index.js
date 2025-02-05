// benefit/src/config/sizing/index.js
export * from './constants'
export * from './clothing'
export * from './utils'

export const MEASUREMENT_CONFIGS = {
  clothing: {
    sizeCharts: SIZE_CHARTS,
    fitDefinitions: FIT_DEFINITIONS
  }
  // Ready for future expansion:
  // eyewear: { ... },
  // footwear: { ... },
  // accessories: { ... }
}