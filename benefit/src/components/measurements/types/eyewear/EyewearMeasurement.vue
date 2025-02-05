<template>
  <div class="eyewear-measurement">
    <!-- Status Section -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-lg font-medium text-gray-900">Face Measurements</h2>
          <p class="text-sm text-gray-500 mt-1">Measuring for optimal eyewear fit</p>
        </div>
        <div class="flex items-center space-x-2">
          <span :class="[
            'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
            isCalibrated ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
          ]">
            {{ isCalibrated ? 'Calibrated' : 'Needs Calibration' }}
          </span>
        </div>
      </div>
    </div>

    <!-- Loading Indicator -->
    <LoadingIndicator 
      v-if="isLoading"
      :actionKey="loadingAction"
      :message="loadingMessage"
      size="medium"
    />

    <!-- Measurement Guide -->
    <div class="bg-blue-50 rounded-lg p-4 mb-6">
      <h3 class="text-sm font-medium text-blue-800 mb-2">Measurement Guidelines</h3>
      <ul class="text-sm text-blue-700 space-y-2">
        <li class="flex items-center">
          <span class="mr-2">•</span>
          Face the camera directly, keeping your head straight
        </li>
        <li class="flex items-center">
          <span class="mr-2">•</span>
          Remove glasses or accessories
        </li>
        <li class="flex items-center">
          <span class="mr-2">•</span>
          Ensure good lighting on your face
        </li>
      </ul>
    </div>

    <!-- Face Measurement Area -->
    <div class="bg-white rounded-lg shadow-sm overflow-hidden">
      <!-- Camera Feed -->
      <div class="relative aspect-video">
        <video
          ref="videoElement"
          class="w-full h-full object-cover"
          :class="{ 'opacity-0': !isCameraReady }"
          autoplay
          playsinline
          muted
        ></video>
        
        <FaceShapeGuide
          :is-positioned="isPositioned"
          :detected-shape="currentFaceShape"
          class="absolute inset-0"
        />

        <!-- Measurement Overlay -->
        <canvas
          ref="overlayCanvas"
          class="absolute top-0 left-0 w-full h-full pointer-events-none"
        ></canvas>

        <!-- Face Guide Overlay -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div class="w-64 h-64 border-2 border-dashed border-blue-400 rounded-full opacity-50"></div>
        </div>

        <!-- Processing State -->
        <div v-if="isProcessing" 
             class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div class="text-white text-center">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
            <p class="mt-4">Processing measurements...</p>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="p-4 border-t border-gray-200">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <button
              v-if="!isScanning"
              @click="startScanning"
              :disabled="!isCameraReady"
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              Start Scan
            </button>
            <button
              v-else
              @click="stopScanning"
              class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Stop Scan
            </button>
            
            <span v-if="isScanning" class="text-sm text-gray-600">
              Progress: {{ scanProgress }}%
            </span>
          </div>

          <button
            @click="retakeMeasurements"
            class="text-sm text-gray-600 hover:text-gray-900"
          >
            Reset
          </button>
        </div>
      </div>
    </div>

    <!-- Measurements Display -->
    <div v-if="currentMeasurement" class="mt-6 bg-white rounded-lg shadow-sm p-6">
      <h3 class="text-lg font-medium text-gray-900 mb-4">Measurements</h3>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="(value, key) in displayMeasurements" :key="key" 
             class="bg-gray-50 p-3 rounded-lg">
          <span class="text-sm text-gray-500">{{ formatLabel(key) }}</span>
          <div class="text-lg font-medium text-gray-900">
            {{ formatValue(value) }}
          </div>
        </div>
      </div>

      <div class="mt-6">
        <h4 class="text-sm font-medium text-gray-900 mb-2">Face Shape Analysis</h4>
        <div class="flex items-center space-x-2">
          <span class="text-sm text-gray-600">Detected Shape:</span>
          <span class="font-medium text-gray-900">{{ currentMeasurement.faceShape }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import FaceShapeGuide from './FaceShapeGuide.vue'
import LoadingIndicator from '@/components/shared/LoadingIndicator.vue'
import { ErrorTypes, ErrorSeverity } from '@/utils/errorTypes'
import { AppError } from '@/utils/errorHandlers'

export default {
  name: 'EyewearMeasurement',
  
  components: {
    FaceShapeGuide,
    LoadingIndicator
  },

  props: {
    isCalibrated: {
      type: Boolean,
      default: false
    },
    isCameraReady: {
      type: Boolean,
      default: false
    }
  },

  emits: ['measurement-complete', 'measurement-failed'],

  setup(props, { emit }) {
    const store = useStore()
    const videoElement = ref(null)
    const overlayCanvas = ref(null)
    
    // Store connections
    const measurements = computed(() => store.getters['eyewear/getAllMeasurements'])
    const currentMeasurement = computed(() => store.getters['eyewear/getCurrentMeasurement'])
    const faceShape = computed(() => store.getters['eyewear/getFaceShape'])
    const frameRecommendations = computed(() => store.getters['eyewear/getFrameRecommendations'])
    const confidence = computed(() => store.getters['eyewear/getConfidence'])
    
    // Loading states
    const isLoading = ref(false)
    const loadingAction = ref('')
    const loadingMessage = ref('')
    
    // Scanning state
    const isScanning = ref(false)
    const isProcessing = ref(false)
    const scanProgress = ref(0)
    const currentPoseData = ref(null)
    const isPositioned = ref(false)
    const currentFaceShape = ref(null)

    const displayMeasurements = computed(() => {
      if (!currentMeasurement.value) return {}
      
      return {
        faceWidth: currentMeasurement.value.faceWidth,
        templeLength: currentMeasurement.value.templeLength,
        bridgeWidth: currentMeasurement.value.bridgeWidth,
        pupillaryDistance: currentMeasurement.value.pupillaryDistance
      }
    })

    const startScanning = async () => {
      loadingAction.value = 'faceScan'
      loadingMessage.value = 'Initializing face detection...'
      isLoading.value = true

      try {
        isScanning.value = true
        scanProgress.value = 0
        await store.dispatch('eyewear/startScanning')
        startProgressSimulation()
      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.MEASUREMENT,
          'Failed to start face scanning',
          ErrorSeverity.MEDIUM,
          error
        ))
      } finally {
        isLoading.value = false
      }
    }

    const stopScanning = async () => {
      isScanning.value = false
      await store.dispatch('eyewear/stopScanning')
      stopProgressSimulation()
    }

    const handleMeasurementCapture = async () => {
      loadingAction.value = 'processing'
      loadingMessage.value = 'Processing face measurements...'
      isLoading.value = true
      isProcessing.value = true

      try {
        const measurementData = await store.dispatch('eyewear/processMeasurement', {
          poseData: currentPoseData.value,
          calibrationData: props.isCalibrated
        })

        emit('measurement-complete', measurementData)
      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.MEASUREMENT,
          'Failed to process face measurements',
          ErrorSeverity.MEDIUM,
          error
        ))
        emit('measurement-failed', error)
      } finally {
        isProcessing.value = false
        isLoading.value = false
      }
    }

    let progressInterval
    const startProgressSimulation = () => {
      progressInterval = setInterval(() => {
        if (scanProgress.value < 100) {
          scanProgress.value += 2
          updateLoadingMessage()
        } else {
          stopProgressSimulation()
          handleMeasurementCapture()
        }
      }, 100)
    }

    const stopProgressSimulation = () => {
      if (progressInterval) {
        clearInterval(progressInterval)
        progressInterval = null
      }
    }

    const updateLoadingMessage = () => {
      if (scanProgress.value < 25) {
        loadingMessage.value = 'Detecting facial features...'
      } else if (scanProgress.value < 50) {
        loadingMessage.value = 'Measuring facial dimensions...'
      } else if (scanProgress.value < 75) {
        loadingMessage.value = 'Analyzing face shape...'
      } else {
        loadingMessage.value = 'Finalizing measurements...'
      }
    }

    const handleError = async (error) => {
      const errorType = error.type || ErrorTypes.UNKNOWN
      await store.dispatch('errors/handleError', {
        type: errorType,
        message: error.message,
        severity: error.severity,
        originalError: error
      })

      if (isScanning.value) {
        stopScanning()
      }
      
      if (isProcessing.value) {
        isProcessing.value = false
      }
    }

    const formatLabel = (key) => {
      return key.replace(/([A-Z])/g, ' $1').trim()
    }

    const formatValue = (value) => {
      return typeof value === 'number' ? `${value.toFixed(1)} mm` : value
    }

    onMounted(async () => {
      try {
        await store.dispatch('eyewear/initialize')
      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.INITIALIZATION,
          'Failed to initialize eyewear measurements',
          ErrorSeverity.HIGH,
          error
        ))
      }
    })

    onUnmounted(() => {
      stopProgressSimulation()
      if (isScanning.value) {
        stopScanning()
      }
    })

    return {
      // Template refs
      videoElement,
      overlayCanvas,
      
      // Store state
      measurements,
      currentMeasurement,
      faceShape,
      frameRecommendations,
      confidence,
      
      // Local state
      isLoading,
      loadingAction,
      loadingMessage,
      isScanning,
      isProcessing,
      scanProgress,
      currentPoseData,
      isPositioned,
      currentFaceShape,
      
      // Computed
      displayMeasurements,
      
      // Methods
      startScanning,
      stopScanning,
      formatLabel,
      formatValue,
      
      // Actions
      retakeMeasurements: () => {
        store.commit('eyewear/RESET_STATE')
        scanProgress.value = 0
        currentFaceShape.value = null
        loadingMessage.value = ''
      }
    }
  }
}
</script>

<style scoped>
.eyewear-measurement {
  min-height: 400px;
}

.aspect-video {
  aspect-ratio: 16/9;
}

canvas {
  pointer-events: none;
}
</style>