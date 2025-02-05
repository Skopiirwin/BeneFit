// src/services/measurements/CameraUtils.js
class CameraError extends Error {
  constructor(message, type) {
    super(message)
    this.name = 'CameraError'
    this.type = type
  }
}

export default class CameraUtils {
  constructor() {
    this.stream = null
    this.videoElement = null
    this.canvasElement = null
    this.permissionStatus = null
  }

  // Add these two missing methods
  async checkPermissionStatus() {
    try {
      // Check if the permissions API is supported
      if (navigator.permissions && navigator.permissions.query) {
        const result = await navigator.permissions.query({ name: 'camera' })
        return result.state
      }
      // If permissions API is not supported, we'll need to test directly
      return 'prompt'
    } catch (error) {
      console.warn('Permissions API not supported:', error)
      return 'prompt'
    }
  }

  async requestPermission() {
    try {
      // Request permission by attempting to get the media stream
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      // Immediately stop the test stream
      stream.getTracks().forEach(track => track.stop())
      return true
    } catch (error) {
      if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
        throw new CameraError(
          'Camera permission denied by user. Please enable camera access and try again.',
          'PERMISSION_DENIED'
        )
      }
    }
  }
  
  async initialize(videoElement, canvasElement) {
    try {
      // Reset any existing stream
      await this.cleanup();

      // Set elements
      this.videoElement = videoElement
      this.canvasElement = canvasElement

      // Check permissions first
      this.permissionStatus = await this.checkPermissionStatus();

      if (this.permissionStatus !== 'granted') {
        await this.requestPermission();
      }

      // Get available devices
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(device => device.kind === 'videoinput');

      if (!videoDevices.length) {
        throw new Error('No camera detected on this device');
      }

      // Get stream with specific constraints
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'user'
        },
        audio: false
      });

      // Only set stream after successful initialization
      this.stream = stream;
      this.videoElement.srcObject = stream;

      // Wait for video to be ready
      await new Promise((resolve) => {
        this.videoElement.onloadedmetadata = () => {
          this.videoElement.play();
          resolve();
        };
      });

      
      return true
    } catch (error) {
      console.error('Camera initialization error:', error);
      await this.cleanup();
      throw error;
    }
  }

  async cleanup() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => {
        track.stop();
        console.log(`Track stopped: ${track.label}`);
      });
      this.stream = null;
    }

    if (this.videoElement) {
      this.videoElement.srcObject = null;
      console.log('Video element cleared');
    }

    // Small delay to ensure cleanup is complete
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  async switchCamera() {
    try {
      // Stop current stream
      this.stopCamera()

      // Toggle facing mode
      this.constraints.video.facingMode = 
        this.constraints.video.facingMode === 'user' ? 'environment' : 'user'

      // Reinitialize with new constraints
      await this.initialize(this.videoElement, this.canvasElement)
    } catch (error) {
      throw new CameraError(
        `Failed to switch camera: ${error.message}`,
        'SWITCH_ERROR'
      )
    }
  }

  stopCamera() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => {
        track.stop()
        console.log('Track stopped:', track.label)
      })
      this.stream = null
    }
    
    if (this.videoElement) {
      this.videoElement.srcObject = null
      console.log('Video element cleared')
    }
  }

  async captureFrame() {
    if (!this.canvasElement || !this.videoElement) {
      throw new CameraError(
        'Canvas or video element not initialized',
        'CAPTURE_ERROR'
      )
    }

    try {
      const context = this.canvasElement.getContext('2d')
      context.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      )
      
      return {
        dataUrl: this.canvasElement.toDataURL('image/jpeg'),
        width: this.canvasElement.width,
        height: this.canvasElement.height
      }
    } catch (error) {
      throw new CameraError(
        `Failed to capture frame: ${error.message}`,
        'CAPTURE_ERROR'
      )
    }
  }

  isInitialized() {
    return !!(this.videoElement && this.stream && this.stream.active)
  }

  dispose() {
    this.stopCamera()
    this.videoElement = null
    this.canvasElement = null
    this.permissionStatus = null
  }
}