// benefit/src/config/sizing/constants.js

export const MEASUREMENT_TYPES = {
  CLOTHING: 'clothing',
  EYEWEAR: 'eyewear',
  FOOTWEAR: 'footwear',
  ACCESSORIES: 'accessories'
}

export const CLOTHING_CATEGORIES = {
  TOPS: 'tops',
  BOTTOMS: 'bottoms',
  DRESSES: 'dresses',
  OUTERWEAR: 'outerwear'
}

export const FIT_PREFERENCES = {
  SKINNY: 'skinny',
  WELL: 'well',    // Our brand's fit!
  BAGGY: 'baggy'
}

export const SIZES = {
  XXS: 'XXS',   // 00-0
  XS: 'XS',     // 0-2
  S: 'S',       // 4-6
  M: 'M',       // 8-10
  L: 'L',       // 12-14
  XL: 'XL',     // 16-18
  XXL: 'XXL',   // 20-22
  XXXL: 'XXXL', // 24-26
  XXXXL: 'XXXXL', // 28-30
  XXXXXL: 'XXXXXL' // 32-34
}

export const IMPORTANCE_LEVELS = {
  HIGH: { value: 'high', multiplier: 1.5 },
  MEDIUM: { value: 'medium', multiplier: 1.0 },
  LOW: { value: 'low', multiplier: 0.5 }
}

export const STRETCH_FACTORS = {
  MINIMAL: 1.0,
  MODERATE: 1.05,
  FLEXIBLE: 1.08
}