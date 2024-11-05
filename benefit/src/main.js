import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/main.css';
import VueLazyload from 'vue-lazyload';
import { Pose } from '@mediapipe/pose';
// eslint-disable-next-line
import * as tf from '@tensorflow/tfjs-core'; 
import '@tensorflow/tfjs-backend-webgl';
import axios from './plugins/axios'; // Import our custom axios instance
import './index.css' 

// Create the app instance
const app = createApp(App);

// Enable devtools in development
if (process.env.NODE_ENV === 'development') {
  app.config.devtools = true;
  // Explicitly connect to Vue devtools
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__?.emit('app:init', app);
}

// Initialize VueLazyload
app.use(VueLazyload, {
  preLoad: 1.3,
  error: require('@/assets/error.png'),
  loading: require('@/assets/loading.gif'),
  attempt: 1,
});

// Make axios available globally
app.config.globalProperties.$axios = axios
store.$axios = axios // Make axios available to store

// Use plugins
app.use(store);
app.use(router);

// Mount the app and store instance for devtools
const vm = app.mount('#app');

// Expose app instance in development
if (process.env.NODE_ENV === 'development') {
  window.vm = vm;
}

// Initialize MediaPipe
const initializeMediaPipe = async () => {
  try {
    const pose = new Pose({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
    });

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    pose.onResults((results) => {
      if (!results || results.poseLandmarks.length === 0) {
        console.error('Pose detection failed. Make sure the webcam is working properly.');
      }
    });

    app.config.globalProperties.$pose = pose;
    return pose;
  } catch (error) {
    console.error('Failed to initialize MediaPipe:', error);
    throw error;
  }
};

// Initialize MediaPipe with better error handling
initializeMediaPipe()
  .then(() => console.log('MediaPipe initialized successfully'))
  .catch(error => console.error('MediaPipe initialization failed:', error));