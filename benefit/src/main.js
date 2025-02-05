import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/main.css';
import VueLazyload from 'vue-lazyload';
import { Pose } from '@mediapipe/pose';
import { Camera } from '@mediapipe/camera_utils';
import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';
import '@tensorflow/tfjs-backend-cpu';
import axios from './plugins/axios';
import './index.css';

// Initialize TensorFlow.js with fallback
const initializeTensorFlow = async () => {
  try {
    await tf.ready();
    
    // Start with CPU backend
    await tf.setBackend('cpu');
    console.log('Using CPU backend for initialization');
    
    // Check WebGL availability but don't force it
    try {
      const webglAvailable = await tf.ready().then(() => {
        return tf.getBackend() === 'webgl';
      });
      if (webglAvailable) {
        console.log('WebGL support detected');
      }
    } catch (e) {
      console.warn('WebGL not available:', e);
    }
    
    return true;
  } catch (error) {
    console.error('TensorFlow.js initialization failed:', error);
    return false;
  }
};

// Initialize MediaPipe with TensorFlow integration
const initializeMediaPipe = async () => {
  try {
    const pose = new Pose({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
    });

    const camera = new Camera();  // Actually use the Camera import

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    // Store camera instance globally
    app.config.globalProperties.$camera = camera;

    pose.onResults((results) => {
      if (!results || results.poseLandmarks.length === 0) {
        console.warn('Pose detection failed');
        return;
      }

      // Process landmarks with TensorFlow
      const landmarkTensor = tf.tidy(() => {
        return tf.tensor2d(
          results.poseLandmarks.map(landmark => [
            landmark.x,
            landmark.y,
            landmark.z,
            landmark.visibility || 0
          ])
        );
      });

      // Store tensor in Vue instance
      if (app.config.globalProperties.$poseLandmarks) {
        app.config.globalProperties.$poseLandmarks.dispose();
      }
      app.config.globalProperties.$poseLandmarks = landmarkTensor;
    });

    return { pose, camera };
  } catch (error) {
    console.error('MediaPipe initialization failed:', error);
    return null;
  }
};

// Create the app instance
const app = createApp(App);

// Configure app
app
  .use(store)
  .use(router)
  .use(VueLazyload, {
    preLoad: 1.3,
    error: require('@/assets/error.png'),
    loading: require('@/assets/loading.gif'),
    attempt: 1,
  });

// Make axios available globally
app.config.globalProperties.$axios = axios;
store.$axios = axios;

// Initialize all services with proper error handling
Promise.all([
  initializeTensorFlow(),
  initializeMediaPipe()
])
.then(([tfInitialized, pose]) => {
  if (!tfInitialized) {
    console.warn('TensorFlow initialization failed, some features may be limited');
  }
  
  if (!pose) {
    console.warn('MediaPipe initialization failed, some features may be limited');
  }
  
  // Add TensorFlow helpers to Vue instance with safe checks
  app.config.globalProperties.$tf = {
    processLandmarks: (landmarks) => {
      if (!tf.getBackend()) {
        console.warn('TensorFlow backend not available');
        return null;
      }
      return tf.tidy(() => {
        const tensor = tf.tensor2d(landmarks);
        return tensor;
      });
    },
    cleanup: () => {
      if (app.config.globalProperties.$poseLandmarks) {
        app.config.globalProperties.$poseLandmarks.dispose();
      }
      tf.engine().disposeVariables();
    }
  };

  app.config.globalProperties.$pose = pose;

  // Mount app after initialization
  const vm = app.mount('#app');

  if (process.env.NODE_ENV === 'development') {
    window.vm = vm;
  }
})
.catch(error => {
  console.error('Critical initialization error:', error);
  // Mount app anyway to show error state
  app.mount('#app');
});

// Cleanup on app unmount
app.unmount = () => {
  app.config.globalProperties.$tf?.cleanup();
};