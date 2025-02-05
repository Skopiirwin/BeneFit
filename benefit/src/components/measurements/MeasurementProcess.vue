<template>
  <div class="measurement-process max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Loading Indicator -->
    <LoadingIndicator 
      v-if="isLoading"
      :actionKey="loadingAction"
      :message="loadingMessage"
      size="large"
    />

    <!-- Error Modal -->
    <div v-if="error" 
         class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-xl max-w-md">
        <div class="flex items-center mb-4">
          <div class="bg-red-100 p-2 rounded-full">
            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
          </div>
          <h3 class="ml-3 text-lg font-bold text-gray-900">Error</h3>
        </div>
        <p class="text-gray-600 mb-4">{{ error }}</p>
        <div class="flex justify-end space-x-3">
          <button @click="retryLastAction" 
                  class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Retry
          </button>
          <button @click="dismissError" 
                  class="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
            Dismiss
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <!-- Header -->
      <div class="p-6 border-b border-gray-200">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-gray-900">
            {{ measurementTypeLabel }} Measurement Process
          </h1>
          <div class="flex items-center space-x-2">
            <span class="text-sm text-gray-500">Quality:</span>
            <select v-model="cameraQuality" 
                    class="form-select text-sm border-gray-300 rounded-md"
                    @change="handleQualityChange">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Progress Bar -->
      <div class="relative pt-4 px-6">
        <div class="flex mb-2 items-center justify-between">
          <div class="text-xs font-semibold inline-block text-blue-600">
            Step {{ currentStep + 1 }}: {{ currentStepLabel }}
          </div>
          <div class="text-right">
            <span class="text-xs font-semibold inline-block text-blue-600">
              {{ Math.round((currentStep + 1) / totalSteps * 100) }}%
            </span>
          </div>
        </div>
        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
          <div :style="{ width: `${((currentStep + 1) / totalSteps) * 100}%` }"
               class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-500 ease-in-out">
          </div>
        </div>
      </div>

      <!-- Video and Canvas Container -->
      <div class="relative w-full max-w-2xl mx-auto">
        <!-- Video Element -->
        <video
          ref="videoElement"
          class="w-full aspect-video object-cover"
          :class="{ 'hidden': !shouldShowCamera }"
          autoplay
          playsinline
          muted
          @loadedmetadata="videoLoaded"
        ></video>

        <!-- Canvas Element -->
        <canvas
          ref="canvasElement"
          class="absolute top-0 left-0 w-full h-full"
          :class="{ 'hidden': !shouldShowCamera }"
        ></canvas>
      </div>

      <!-- Step Content -->
      <div class="p-6">
        <router-view
          :key="$route.fullPath"
          v-slot="{ Component }"
        >
          <component 
            :is="Component"
            :video-element="videoElement"
            :canvas-element="canvasElement"
            :is-camera-ready="isCameraReady"
            :is-calibrated="isCalibrated"
            :is-scanning="isScanning"
            :scan-progress="scanProgress"
            :pose-data="currentPoseData"
            :measurements="measurements"
            :confidence-score="confidenceScore"
            :is-processing="isProcessing"
            :is-loading="isLoading"
            @check-camera="checkCamera"
            @calibration-complete="handleCalibrationComplete"
            @measurement-complete="handleMeasurementComplete"
            @measurement-failed="handleMeasurementError"
            @canvas-resize="handleCanvasResize"
          ></component>
        </router-view>
      </div>

      <!-- Navigation -->
      <div class="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between">
        <button 
          @click="prevStep"
          :disabled="currentStep === 0 || isProcessing || isScanning"
          class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
        <button 
          v-if="currentStep < totalSteps - 1"
          @click="nextStep"
          :disabled="!canProceed || isProcessing || isScanning"
          class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isProcessing ? 'Processing...' : 'Next' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import * as tf from '@tensorflow/tfjs'
import LoadingIndicator from '@/components/shared/LoadingIndicator.vue'
import { ErrorTypes, ErrorSeverity } from '@/utils/errorTypes'
import { AppError } from '@/utils/errorHandlers'
import PoseEstimation from '@/services/measurements/PoseEstimation'
import Calculations from '@/services/measurements/Calculations'
import CameraUtils from '@/services/measurements/CameraUtils'
import MLPrediction from '@/services/measurements/MLPrediction'

export default {
  name: 'MeasurementProcess',
  
  components: {
    LoadingIndicator
  },

  setup() {
    const router = useRouter()
    const store = useStore()
    const route = useRouter().currentRoute.value

    // Core refs
    const videoElement = ref(null)
    const canvasElement = ref(null)
    const error = ref(null)
    const loadingMessage = ref('')
    const lastAction = ref(null)
    const poseLandmarksTensor = ref(null)
    const isLoading = ref(false)
    const loadingAction = ref('')

    // Camera state
    const hasCamera = ref(false)
    const isCameraReady = ref(false)
    const cameraQuality = ref('medium')

    // Scanning state
    const isScanning = ref(false)
    const isProcessing = ref(false)
    const scanProgress = ref(0)
    const currentPoseData = ref(null)

    // Measurement state
    const measurements = ref(null)
    const previousMeasurements = ref(null)
    const measurementAnalysis = ref(null)
    const sizeRecommendations = ref(null)

    // Initialize services
    const poseEstimation = new PoseEstimation()
    const calculations = new Calculations()
    const cameraUtils = new CameraUtils()
    const mlPrediction = new MLPrediction()

    // Computed properties from store
    const measurementType = computed(() => store.getters['measurements/getSelectedType'])
    const isCalibrated = computed(() => store.getters['measurements/getCalibrationStatus'])
    const currentStep = computed(() => store.getters['measurements/getCurrentStep'])
    const confidenceScore = computed(() => store.getters['measurements/getConfidence'])
    const totalSteps = computed(() => store.getters['measurements/getTotalSteps'])
    
    const measurementTypeLabel = computed(() => {
      const labels = {
        eyewear: 'Eyewear',
        footwear: 'Footwear',
        accessory: 'Accessory',
        clothing: 'Clothing'
      }
      return labels[measurementType.value] || 'Measurement'
    })

    const currentStepLabel = computed(() => {
      const stepLabels = {
        0: 'Setup',
        1: isCalibrated.value ? 'Capture' : 'Calibration',
        2: 'Processing',
        3: 'Results',
        4: 'Completion'
      }
      return stepLabels[currentStep.value] || ''
    })

    const canProceed = computed(() => {
      switch (route.name) {
        case 'measurement-type-selection':
          return isCameraReady.value
        case 'measurement-calibration':
          return isCalibrated.value && !isScanning.value
        case `${measurementType.value}-measurement`:
          return measurements.value && confidenceScore.value >= 70
        case 'measurement-processing':
          return measurements.value
        case 'measurement-results':
          return measurements.value
        default:
          return false
      }
    })

    const shouldShowCamera = computed(() => {
      const cameraSteps = ['measurement-type-selection', 'measurement-calibration']
      return cameraSteps.includes(route.name)
    })

    const errorState = computed(() => {
      if (!error.value) return null
      
      return {
        message: error.value,
        retry: lastAction.value !== null,
        critical: error.value.includes('camera') || error.value.includes('permission')
      }
    })

    // Camera initialization and handling
    const checkCamera = async () => {
      if (isProcessing.value) return;

      await store.dispatch('loading/startLoading', {
        actionKey: 'cameraCheck',
        message: 'Checking camera access...'
      });

      try {
        await cleanup();

        // Use a single ref for video element
        const video = videoElement.value;
        if (!video) {
          throw new Error('Video element not available');
        }

        // Check MediaDevices support
        if (!navigator.mediaDevices?.getUserMedia) {
          throw new Error('Camera API not supported in this browser');
        }

        // Get existing video devices
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');

        if (!videoDevices.length) {
          throw new Error('No camera detected on this device');
        }

        // Force stop any existing streams
        const existingVideos = document.querySelectorAll('video');
        existingVideos.forEach(v => {
          if (v.srcObject) {
            const tracks = v.srcObject.getTracks();
            tracks.forEach(track => {
              track.stop();
              v.srcObject = null;
            });
          }
        });

        // Small delay to ensure cleanup is complete
        await new Promise(resolve => setTimeout(resolve, 500));

        // Request camera with specific constraints
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 1280 },
            height: { ideal: 720 },
            facingMode: 'user'
          },
          audio: false
        });

        // Set the stream to video element
        video.srcObject = stream;
        await new Promise((resolve) => {
          video.onloadedmetadata = () => {
            video.play();
            resolve();
          };
        });

        isCameraReady.value = true;
        await store.dispatch('measurements/updateCameraState', true);

      } catch (err) {
        console.error('Camera initialization error:', err);
        isCameraReady.value = false;
        await store.dispatch('measurements/updateCameraState', false);

        let message = 'Failed to initialize camera';
        if (err.name === 'NotReadableError') {
          message = 'Camera is in use by another application';
        } else if (err.name === 'NotAllowedError') {
          message = 'Camera access denied';
        }

        throw new AppError(
          ErrorTypes.CAMERA,
          message,
          ErrorSeverity.HIGH,
          err
        );
      } finally {
        await store.dispatch('loading/stopLoading', 'cameraCheck');
      }
    };

    // Cleanup function
    const cleanup = async () => {
      try {
        // Stop any active processes
        if (isScanning.value) {
          stopScanning();
        }

        stopProgressSimulation();

        // Cleanup video stream
        if (videoElement.value?.srcObject) {
          const stream = videoElement.value.srcObject;
          stream.getTracks().forEach(track => {
            track.stop();
          });
          videoElement.value.srcObject = null;
        }

        // Reset all flags
        isCameraReady.value = false;
        isProcessing.value = false;
        isScanning.value = false;
        currentPoseData.value = null;
        scanProgress.value = 0;

        // Update store state
        await store.dispatch('measurements/updateCameraState', false);

      } catch (err) {
        console.error('Cleanup error:', err);
        // Continue cleanup despite errors
      }
    };
  


    const handleCanvasResize = ({ width, height }) => {
      if (canvasElement.value) {
        canvasElement.value.width = width
        canvasElement.value.height = height

        // Redraw any existing calibration points or overlays if needed
        if (currentPoseData.value) {
          drawPoseOverlay()
        }
      }
    }

    const drawPoseOverlay = () => {
      if (!canvasElement.value || !currentPoseData.value) return;

      const context = canvasElement.value.getContext('2d');
      context.clearRect(0, 0, canvasElement.value.width, canvasElement.value.height);

      // Redraw pose data visualization
      if (currentPoseData.value.poseLandmarks) {
        drawLandmarks(context, currentPoseData.value.poseLandmarks);
      }
    }

    const drawLandmarks = (context, landmarks) => {
      landmarks.forEach(landmark => {
        const x = landmark.x * canvasElement.value.width;
        const y = landmark.y * canvasElement.value.height;

        context.beginPath();
        context.arc(x, y, 3, 0, 2 * Math.PI);
        context.fillStyle = '#00FF00';
        context.fill();
      });
    }

    const handleQualityChange = async () => {
      await store.dispatch('loading/startLoading', {
        actionKey: 'qualityChange',
        message: 'Adjusting camera settings...'
      });

      try {
        await cameraUtils.setCameraQuality(cameraQuality.value);
      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.CAMERA,
          'Failed to adjust camera quality',
          ErrorSeverity.LOW,
          error
        ));
      } finally {
        await store.dispatch('loading/stopLoading', 'qualityChange');
      }
    }

    const handlePoseResults = async (results) => {
      if (!results.poseLandmarks || !isScanning.value) return;

      try {
        // Check confidence score from results
        if (results.confidenceScore < 50) {
          console.warn('Low confidence pose detection, skipping frame');
          return;
        }

        if (poseLandmarksTensor.value) {
          poseLandmarksTensor.value.dispose();
        }

        poseLandmarksTensor.value = tf.tidy(() => {
          const landmarkArray = results.poseLandmarks.map(l =>
            [l.x, l.y, l.z, l.visibility || 0]
          );
          return tf.tensor2d(landmarkArray);
        });

        currentPoseData.value = {
          ...results,
          timestamp: Date.now()
        };

        if (scanProgress.value >= 100 && !isProcessing.value) {
          await processMeasurements(results.poseLandmarks, poseLandmarksTensor.value);
        }
      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.MEASUREMENT,
          'Error processing pose results',
          ErrorSeverity.MEDIUM,
          error
        ));
      }
    }

    const processMeasurements = async (landmarks, landmarksTensor) => {
      await store.dispatch('loading/startLoading', {
        actionKey: 'processing',
        message: 'Processing measurements...'
      });

      try {
        isProcessing.value = true;

        const processedTensor = await tf.tidy(() => {
          // Normalize coordinates to [0,1] range
          const normalizedTensor = tf.div(landmarksTensor, tf.scalar(1));

          // Calculate confidence weights based on visibility scores
          const visibilityWeights = tf.slice(normalizedTensor, [0, 3], [-1, 1]);

          // Apply visibility weights to coordinates
          const weightedCoords = tf.mul(
            tf.slice(normalizedTensor, [0, 0], [-1, 3]),
            visibilityWeights
          );

          // Remove noise from low confidence points
          const denoised = tf.where(
            tf.greater(visibilityWeights, tf.scalar(0.5)),
            weightedCoords,
            tf.zerosLike(weightedCoords)
          );

          // Calculate relative positions for more stable measurements
          const meanPos = tf.mean(denoised, 0);
          const relativePos = tf.sub(denoised, meanPos);

          return {
            normalized: normalizedTensor,
            weighted: weightedCoords,
            denoised: denoised,
            relative: relativePos
          };
        });

        // Get basic measurements
        const basicMeasurements = calculations.calculateMeasurements(
          landmarks,
          videoElement.value.width,
          videoElement.value.height
        );

        // Refine with ML model
        const refinedMeasurements = await mlPrediction.predictMeasurements(
          processedTensor.denoised
        );

        // Clean up tensor objects
        Object.values(processedTensor).forEach(tensor => tensor.dispose());

        // Combine measurements
        measurements.value = {
          ...basicMeasurements,
          ...refinedMeasurements,
          type: measurementType.value,
          timestamp: new Date().toISOString()
        };

        // Calculate confidence score
        const confidenceResult = calculations.calculateConfidence(landmarks);
        await store.dispatch('measurements/setConfidence', confidenceResult);

        // Generate analysis if we have previous measurements
        if (previousMeasurements.value) {
          measurementAnalysis.value = await analyzeMeasurements(measurements.value);
        }

        // Stop scanning and proceed
        stopScanning();
        if (currentStep.value === 1) {
          await nextStep();
        }

      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.MEASUREMENT,
          'Failed to process measurements',
          ErrorSeverity.MEDIUM,
          error
        ));
      } finally {
        isProcessing.value = false;
        await store.dispatch('loading/stopLoading', 'processing');
      }
    }

    const analyzeMeasurements = async (currentMeasurements) => {
      try {
        const analysis = {
          changes: calculateChanges(currentMeasurements, previousMeasurements.value),
          trends: await calculateTrends(currentMeasurements),
          recommendations: await generateRecommendations(currentMeasurements)
        };

        return analysis;
      } catch (error) {
        console.error('Analysis error:', error);
        return null;
      }
    }

    const calculateChanges = (current, previous) => {
      const changes = {};
      for (const [key, value] of Object.entries(current)) {
        if (typeof value === 'number' && previous[key]) {
          const change = ((value - previous[key]) / previous[key]) * 100;
          changes[key] = {
            value: change.toFixed(1),
            direction: change > 0 ? 'increase' : 'decrease'
          };
        }
      }
      return changes;
    }

    const calculateTrends = async (currentMeasurements) => {
      try {
        const historicalData = await store.dispatch('measurements/getAllMeasurements');
        return analyzeTrends(historicalData, currentMeasurements);
      } catch (error) {
        console.error('Error calculating trends:', error);
        return null;
      }
    }

    const generateRecommendations = async (measurements) => {
      await store.dispatch('loading/startLoading', {
        actionKey: 'recommendations',
        message: 'Generating recommendations...'
      });

      try {
        const recommendations = await store.dispatch(
          'measurements/generateRecommendations',
          measurements
        );
        sizeRecommendations.value = recommendations;
        return recommendations;
      } catch (error) {
        console.error('Error generating recommendations:', error);
        return null;
      } finally {
        await store.dispatch('loading/stopLoading', 'recommendations');
      }
    }

    const startScanning = async () => {
      loadingAction.value = 'scanStart';
      loadingMessage.value = 'Initializing measurement scan...';
      isLoading.value = true;
      lastAction.value = 'scan';

      try {
        isScanning.value = true;
        scanProgress.value = 0;
        currentPoseData.value = null;

        // Initialize pose detection
        await poseEstimation.initialize(videoElement.value, handlePoseResults);
        
        startProgressSimulation();
      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.MEASUREMENT,
          'Failed to start measurement scan',
          ErrorSeverity.MEDIUM,
          error
        ));
        stopScanning();
      } finally {
        isLoading.value = false;
      }
    }

    const stopScanning = () => {
      isScanning.value = false;
      poseEstimation.dispose();
      stopProgressSimulation();
    }

    // Progress simulation
    let progressInterval;
    const startProgressSimulation = () => {
      scanProgress.value = 0;
      progressInterval = setInterval(() => {
        if (scanProgress.value < 100) {
          scanProgress.value += 2;
          updateLoadingMessage();
        } else {
          stopProgressSimulation();
        }
      }, 100);
    }

    const stopProgressSimulation = () => {
      if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
      }
    }

    const updateLoadingMessage = () => {
      if (scanProgress.value < 25) {
        loadingMessage.value = 'Detecting body landmarks...';
      } else if (scanProgress.value < 50) {
        loadingMessage.value = 'Analyzing measurements...';
      } else if (scanProgress.value < 75) {
        loadingMessage.value = 'Processing results...';
      } else {
        loadingMessage.value = 'Finalizing measurements...';
      }
    }

    // Error handling
    const handleError = async (error) => {
      const appError = error instanceof AppError ? error : new AppError(
        ErrorTypes.UNKNOWN,
        error.message || 'An unexpected error occurred',
        ErrorSeverity.MEDIUM,
        error
      );

      await store.dispatch('errors/handleError', appError);
      error.value = appError.message;

      if (isScanning.value) {
        stopScanning();
      }
      
      if (isProcessing.value) {
        isProcessing.value = false;
      }
    }

    const dismissError = () => {
      error.value = null;
      lastAction.value = null;
      store.dispatch('errors/clearError');
    }

    const retryLastAction = async () => {
      error.value = null;
      
      await store.dispatch('loading/startLoading', {
        actionKey: 'retry',
        message: 'Retrying last action...'
      });

      try {
        switch (lastAction.value) {
          case 'scan':
            await startScanning();
            break;
          case 'process':
            if (currentPoseData.value) {
              await processMeasurements(currentPoseData.value.poseLandmarks);
            }
            break;
          default:
            throw new Error('No retry action available');
        }
        lastAction.value = null;
      } catch (retryError) {
        await handleError(retryError);
      } finally {
        await store.dispatch('loading/stopLoading', 'retry');
      }
    }

    // Navigation
    const nextStep = async () => {
      if (currentStep.value < totalSteps.value - 1 && canProceed.value) {
        const nextRoute = getNextRoute();
        if (nextRoute) {
          await store.dispatch('measurements/setStep', currentStep.value + 1);
          await router.push(nextRoute);
        }
      }
    }

    const prevStep = async () => {
      if (currentStep.value > 0) {
        const prevRoute = getPrevRoute();
        if (prevRoute) {
          await store.dispatch('measurements/setStep', currentStep.value - 1);
          await router.push(prevRoute);
        }
      }
    }

    const getNextRoute = () => {
      const stepRoutes = {
        0: { name: 'measurement-calibration' },
        1: { 
          name: `${measurementType.value}-measurement`,
          params: { type: measurementType.value }
        },
        2: { name: 'measurement-processing' },
        3: { name: 'measurement-results' },
        4: { name: 'measurement-completion' }
      };
      return stepRoutes[currentStep.value];
    }

    const getPrevRoute = () => {
      const stepRoutes = {
        1: { name: 'measurement-type-selection' },
        2: { name: 'measurement-calibration' },
        3: { name: `${measurementType.value}-measurement` },
        4: { name: 'measurement-processing' },
        5: { name: 'measurement-results' }
      };
      return stepRoutes[currentStep.value];
    }

     const resetProcess = async () => {
      await store.dispatch('measurements/resetMeasurementProcess');
      cleanup();
      router.push({ name: 'measurement-type-selection' });
    }

    const goToDashboard = () => {
      cleanup();
      router.push('/dashboard');
    }
      
    const videoLoaded = () => {
      console.log('Video element loaded:', videoElement.value);
    }

    const analyzeTrends = (historicalData, currentMeasurements) => {
      if (!historicalData?.length) {
        return null;
      }

      // Get measurable properties
      const measurableProps = Object.keys(currentMeasurements).filter(
        key => typeof currentMeasurements[key] === 'number'
      );

      const trends = {};
      measurableProps.forEach(prop => {
        // Get historical values for this property
        const values = historicalData
          .map(m => m[prop])
          .filter(v => typeof v === 'number')

        if (values.length < 2) {
          return;
        }

        // Calculate trend
        const recentValues = values.slice(-3); // Last 3 measurements
        const averageChange = recentValues.slice(1).reduce((acc, curr, idx) => {
          return acc + ((curr - recentValues[idx]) / recentValues[idx]) * 100;
        }, 0) / (recentValues.length - 1);

        trends[prop] = {
          direction: averageChange > 0 ? 'increasing' :
                     averageChange < 0 ? 'decreasing' : 'stable',
          value: `${Math.abs(averageChange).toFixed(1)}%`,
          progress: Math.min(Math.abs(averageChange), 100),
          significance: Math.abs(averageChange) > 5 ? 'significant' : 'minor'
        };
      });

      return trends;
    };

    // Add these measurement handlers
    const handleMeasurementComplete = async (measurementData) => {
      try {
        await store.dispatch('measurements/saveMeasurement', measurementData);
        measurements.value = measurementData;

        // Generate analysis if we have previous measurements
        if (previousMeasurements.value) {
          measurementAnalysis.value = await analyzeMeasurements(measurementData);
        }

        await nextStep();
      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.MEASUREMENT,
          'Failed to save measurement',
          ErrorSeverity.MEDIUM,
          error
        ));
      }
    };

    const handleMeasurementError = async (error) => {
      await handleError(new AppError(
        ErrorTypes.MEASUREMENT,
        error.message || 'Measurement failed',
        ErrorSeverity.MEDIUM,
        error
      ));
    };

    // Add calibration handler
    const handleCalibrationComplete = async (calibrationData) => {
      try {
        await store.dispatch('measurements/setCalibration', calibrationData);
        await nextStep();
      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.CALIBRATION,
          'Failed to complete calibration',
          ErrorSeverity.MEDIUM,
          error
        ));
      }
    };

    // Lifecycle hooks
    onMounted(async () => {
      await store.dispatch('loading/startLoading', {
        actionKey: 'initialization',
        message: 'Initializing measurement system...'
      })

      try {
        // Clean up any existing state
        await cleanup()

        // Initialize ML model first
        await mlPrediction.initialize()
        await mlPrediction.warmupModel()

        // Load previous measurements for comparison
        const response = await store.dispatch('measurements/getRecentMeasurements')
        if (response?.measurements?.length) {
          previousMeasurements.value = response.measurements[0]
        }

        // Initialize video element attributes
        if (videoElement.value) {
          videoElement.value.setAttribute('playsinline', '')
          videoElement.value.setAttribute('muted', '')
          videoElement.value.setAttribute('autoplay', '')
        }

        // Set up canvas element
        if (canvasElement.value) {
          const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
              const { width, height } = entry.contentRect
              canvasElement.value.width = width
              canvasElement.value.height = height
            }
          })
          resizeObserver.observe(videoElement.value)
        }

        // Only check camera if we're on the initial setup or calibration step
        const needsCamera = ['measurement-type-selection', 'measurement-calibration'].includes(route.name)
        if (needsCamera) {
          await checkCamera()
        }

        // Initialize pose estimation if needed
        if (needsCamera) {
          await poseEstimation.initialize(videoElement.value, handlePoseResults)
        }

      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.INITIALIZATION,
          'Failed to initialize measurement system',
          ErrorSeverity.HIGH,
          error
        ))
      } finally {
        await store.dispatch('loading/stopLoading', 'initialization')
      }
    })
        

    onBeforeUnmount(async () => {
      try {
        // Stop any active measurements
        if (isScanning.value) {
          stopScanning()
        }

        if (isProcessing.value) {
          isProcessing.value = false
        }

        // Stop any active intervals
        if (progressInterval) {
          clearInterval(progressInterval)
          progressInterval = null
        }

        // Cleanup resources
        await cleanup()

        // Reset tensors and ML resources
        if (mlPrediction) {
          try {
            await mlPrediction.dispose()
          } catch (err) {
            console.error('Error disposing ML resources:', err)
          }
        }

        // Reset all local state
        scanProgress.value = 0
        currentPoseData.value = null
        measurements.value = null
        previousMeasurements.value = null
        error.value = null

        // Reset store state
        await store.dispatch('measurements/resetMeasurementProcess')

      } catch (err) {
        console.error('Error during component cleanup:', err)
      }
    })

    // Return all necessary refs, computed properties, and methods
    return {
      // Template refs
      videoElement,
      canvasElement,
      
      // Loading and error states
      error,
      isLoading,
      loadingAction,
      loadingMessage,
      lastAction,
      
      // Camera states
      hasCamera,
      isCameraReady,
      cameraQuality,
      shouldShowCamera,
      
      // Scanning states
      isScanning,
      isProcessing,
      scanProgress,
      currentPoseData,
      
      // Measurement states
      measurements,
      previousMeasurements,
      measurementAnalysis,
      sizeRecommendations,
      
      // Computed properties
      measurementType,
      isCalibrated,
      currentStep,
      confidenceScore,
      totalSteps,
      measurementTypeLabel,
      currentStepLabel,
      canProceed,
      errorState,
      
      // Methods
      checkCamera,
      handleCanvasResize,
      startScanning,
      stopScanning,
      handlePoseResults,
      processMeasurements,
      analyzeMeasurements,
      generateRecommendations,
      handleError,
      dismissError,
      retryLastAction,
      nextStep,
      prevStep,
      resetProcess,
      goToDashboard,
      startProgressSimulation,
      stopProgressSimulation,
      updateLoadingMessage,
      videoLoaded,
      handleQualityChange,
      handleMeasurementComplete,
      handleMeasurementError,
      handleCalibrationComplete

    };
  }
};
</script>

<style scoped>
.measurement-process {
  min-height: calc(100vh - 64px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.canvas-overlay {
  pointer-events: none;
}

video, canvas {
  max-width: 100%;
  height: auto;
  aspect-ratio: 4/3;
}

@keyframes progress {
  0% { width: 0; }
  100% { width: 100%; }
}

.progress-animate {
  animation: progress 2s linear;
}
</style>