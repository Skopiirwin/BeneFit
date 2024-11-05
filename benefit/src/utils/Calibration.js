// Calibration.js
export class Calibration {
    constructor(creditCardWidth = 85.60) { // Standard credit card width in mm
      this.creditCardWidth = creditCardWidth;
      this.pixelsPerMm = null;
    }
  
    calibrate(cardWidthInPixels) {
      this.pixelsPerMm = cardWidthInPixels / this.creditCardWidth;
    }
  
    pixelsToMm(pixels) {
      if (this.pixelsPerMm === null) {
        throw new Error('Calibration not performed');
      }
      return pixels / this.pixelsPerMm;
    }
  }
  