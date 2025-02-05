// benefit/src/config/sizing/clothing.js
import { CLOTHING_CATEGORIES, SIZES } from './constants'

export const SIZE_CHARTS = {
  [CLOTHING_CATEGORIES.TOPS]: {
    [SIZES.XXS]: {
      chest: { min: 71, max: 76 },
      waist: { min: 56, max: 61 },
      shoulders: { min: 36, max: 38 },
      length: { min: 62, max: 64 }
    },
    [SIZES.XS]: {
      chest: { min: 76, max: 81 },
      waist: { min: 61, max: 66 },
      shoulders: { min: 38, max: 40 },
      length: { min: 64, max: 66 }
    },
    [SIZES.S]: {
      chest: { min: 81, max: 89 },
      waist: { min: 66, max: 74 },
      shoulders: { min: 40, max: 42 },
      length: { min: 66, max: 68 }
    },
    [SIZES.M]: {
      chest: { min: 89, max: 97 },
      waist: { min: 74, max: 82 },
      shoulders: { min: 42, max: 44 },
      length: { min: 68, max: 70 }
    },
    [SIZES.L]: {
      chest: { min: 97, max: 105 },
      waist: { min: 82, max: 90 },
      shoulders: { min: 44, max: 46 },
      length: { min: 70, max: 72 }
    },
    [SIZES.XL]: {
      chest: { min: 105, max: 113 },
      waist: { min: 90, max: 98 },
      shoulders: { min: 46, max: 48 },
      length: { min: 72, max: 74 }
    },
    [SIZES.XXL]: {
      chest: { min: 113, max: 121 },
      waist: { min: 98, max: 106 },
      shoulders: { min: 48, max: 50 },
      length: { min: 74, max: 76 }
    },
    [SIZES.XXXL]: {
      chest: { min: 121, max: 129 },
      waist: { min: 106, max: 114 },
      shoulders: { min: 50, max: 52 },
      length: { min: 76, max: 78 }
    },
    [SIZES.XXXXL]: {
      chest: { min: 129, max: 137 },
      waist: { min: 114, max: 122 },
      shoulders: { min: 52, max: 54 },
      length: { min: 78, max: 80 }
    },
    [SIZES.XXXXXL]: {
      chest: { min: 137, max: 145 },
      waist: { min: 122, max: 130 },
      shoulders: { min: 54, max: 56 },
      length: { min: 80, max: 82 }
    }
  },

  [CLOTHING_CATEGORIES.BOTTOMS]: {
    [SIZES.XXS]: {
      waist: { min: 56, max: 61 },
      hips: { min: 81, max: 86 },
      inseam: { min: 71, max: 73 },
      thigh: { min: 49, max: 51 }
    },
    [SIZES.XS]: {
      waist: { min: 61, max: 66 },
      hips: { min: 86, max: 91 },
      inseam: { min: 73, max: 74 },
      thigh: { min: 51, max: 53 }
    },
    [SIZES.S]: {
      waist: { min: 66, max: 71 },
      hips: { min: 91, max: 96 },
      inseam: { min: 74, max: 76 },
      thigh: { min: 53, max: 55 }
    },
    [SIZES.M]: {
      waist: { min: 71, max: 76 },
      hips: { min: 96, max: 101 },
      inseam: { min: 76, max: 78 },
      thigh: { min: 55, max: 57 }
    },
    [SIZES.L]: {
      waist: { min: 76, max: 81 },
      hips: { min: 101, max: 106 },
      inseam: { min: 78, max: 80 },
      thigh: { min: 57, max: 59 }
    },
    [SIZES.XL]: {
      waist: { min: 81, max: 86 },
      hips: { min: 106, max: 111 },
      inseam: { min: 80, max: 82 },
      thigh: { min: 59, max: 61 }
    },
    [SIZES.XXL]: {
      waist: { min: 86, max: 91 },
      hips: { min: 111, max: 116 },
      inseam: { min: 82, max: 84 },
      thigh: { min: 61, max: 63 }
    },
    [SIZES.XXXL]: {
      waist: { min: 91, max: 96 },
      hips: { min: 116, max: 121 },
      inseam: { min: 84, max: 86 },
      thigh: { min: 63, max: 65 }
    },
    [SIZES.XXXXL]: {
      waist: { min: 96, max: 101 },
      hips: { min: 121, max: 126 },
      inseam: { min: 86, max: 88 },
      thigh: { min: 65, max: 67 }
    },
    [SIZES.XXXXXL]: {
      waist: { min: 101, max: 106 },
      hips: { min: 126, max: 131 },
      inseam: { min: 88, max: 90 },
      thigh: { min: 67, max: 69 }
    }
  }
}

export const FIT_DEFINITIONS = {
  [CLOTHING_CATEGORIES.TOPS]: {
    skinny: { 
      stretchFactor: 0.97, 
      description: 'Form-fitting style' 
    },
    well: { 
      stretchFactor: 1.0, 
      description: 'Perfect balance of comfort and style' 
    },
    baggy: { 
      stretchFactor: 1.05, 
      description: 'Relaxed, oversized fit' 
    }
  },
  [CLOTHING_CATEGORIES.BOTTOMS]: {
    skinny: { 
      stretchFactor: 0.96, 
      description: 'Close-fitting from hip to ankle' 
    },
    well: { 
      stretchFactor: 1.0, 
      description: 'Comfortable, tailored fit' 
    },
    baggy: { 
      stretchFactor: 1.08, 
      description: 'Loose, relaxed style' 
    }
  }
}

// Additional metadata for measurement descriptions
export const MEASUREMENT_DESCRIPTIONS = {
  chest: 'Measured around the fullest part of the chest',
  waist: 'Measured around natural waistline',
  shoulders: 'Measured across the back from shoulder to shoulder',
  length: 'Measured from shoulder to hem',
  hips: 'Measured around the fullest part of the hips',
  inseam: 'Measured from crotch to ankle',
  thigh: 'Measured around the fullest part of the thigh'
}