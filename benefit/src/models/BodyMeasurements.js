// BodyMeasurements.js
export class BodyMeasurements {
    constructor(landmarks, imageWidth, imageHeight, calibration) {
      this.landmarks = landmarks;
      this.imageWidth = imageWidth;
      this.imageHeight = imageHeight;
      this.calibration = calibration;
    }
  
    shoulderWidth() {
      const leftShoulder = this.pixelCoordinates(this.landmarks[11]);
      const rightShoulder = this.pixelCoordinates(this.landmarks[12]);
      const pixels = this.distance(leftShoulder, rightShoulder);
      return this.calibration.pixelsToMm(pixels);
    }
  
    // Similar methods for other body measurements (waist, chest, hip, etc.)
  
    pixelCoordinates(landmark) {
      return { x: landmark.x * this.imageWidth, y: landmark.y * this.imageHeight };
    }
  
    distance(point1, point2) {
      return Math.sqrt(
        Math.pow(point1.x - point2.x, 2) +
        Math.pow(point1.y - point2.y, 2)
      );
    }
  }
  