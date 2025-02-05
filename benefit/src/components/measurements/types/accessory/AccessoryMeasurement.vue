<template>
  <div class="accessory-measurement">
    <!-- Status Section -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-lg font-medium text-gray-900">Wrist Measurements</h2>
          <p class="text-sm text-gray-500 mt-1">Measuring for optimal accessory fit</p>
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

    <!-- Error Display -->
    <div v-if="error" class="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-red-800">{{ error }}</h3>
          <div class="mt-2">
            <button 
              @click="retryLastAction"
              class="text-sm font-medium text-red-600 hover:text-red-500"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Measurement Guide -->
    <div class="bg-blue-50 rounded-lg p-4 mb-6">
      <h3 class="text-sm font-medium text-blue-800 mb-2">Measurement Guidelines</h3>
      <ul class="text-sm text-blue-700 space-y-2">
        <li class="flex items-center">
          <span class="mr-2">•</span>
          Hold your wrist parallel to the camera
        </li>
        <li class="flex items-center">
          <span class="mr-2">•</span>
          Keep your hand relaxed, not clenched
        </li>
        <li class="flex items-center">
          <span class="mr-2">•</span>
          Remove any watches or bracelets
        </li>
      </ul>
    </div>

    <!-- Wrist Measurement Area -->
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
        
        <WristGuide
          :is-aligned="isWristAligned"
          :wrist-type="currentWristType"
          :measuring-side="currentSide"
          class="absolute inset-0"
        />

        <!-- Measurement Overlay -->
        <canvas
          ref="overlayCanvas"
          class="absolute top-0 left-0 w-full h-full pointer-events-none"
        ></canvas>

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
          <!-- Main Controls -->
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

          <!-- Wrist Selection -->
          <div class="flex items-center space-x-2">
            <span class="text-sm text-gray-600">Measuring:</span>
            <select 
              v-model="currentSide"
              class="form-select text-sm border-gray-300 rounded-md"
              :disabled="isScanning"
            >
              <option value="left">Left Wrist</option>
              <option value="right">Right Wrist</option>
            </select>
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
        <div v-for="(value, key) in displayMeasurements" 
             :key="key" 
             class="bg-gray-50 p-3 rounded-lg"
        >
          <span class="text-sm text-gray-500">{{ formatLabel(key) }}</span>
          <div class="text-lg font-medium text-gray-900">
            {{ formatValue(value) }}
          </div>
        </div>
      </div>

      <!-- Size Recommendations -->
      <div class="mt-6">
        <h4 class="text-sm font-medium text-gray-900 mb-2">Size Recommendations</h4>
        <div class="space-y-4">
          <!-- Watch Size -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h5 class="text-sm font-medium text-gray-900 mb-2">Watch Size</h5>
            <div class="grid grid-cols-3 gap-4">
              <div v-for="(size, category) in watchSizeRecommendations" 
                   :key="category"
                   class="text-center"
              >
                <span class="text-sm text-gray-500">{{ category }}</span>
                <div class="text-lg font-medium text-gray-900">{{ size }}</div>
              </div>
            </div>
          </div>
          
          <!-- Bracelet Size -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <h5 class="text-sm font-medium text-gray-900 mb-2">Bracelet Size</h5>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="(size, type) in braceletSizeRecommendations" 
                   :key="type"
                   class="text-center"
              >
                <span class="text-sm text-gray-500">{{ type }}</span>
                <div class="text-lg font-medium text-gray-900">{{ size }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import WristGuide from './WristGuide.vue'
import LoadingIndicator from '@/components/shared/LoadingIndicator.vue'
import { ErrorTypes, ErrorSeverity } from '@/utils/errorTypes'
import { AppError } from '@/utils/errorHandlers'

export default {
  name: 'AccessoryMeasurement',
  
  components: {
    WristGuide,
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
    const measurements = computed(() => store.getters['accessory/getAllMeasurements'])
    const currentMeasurement = computed(() => store.getters['accessory/getCurrentMeasurement'])
    const sizeRecommendations = computed(() => store.getters['accessory/getSizeRecommendations'])
    const confidence = computed(() => store.getters['accessory/getConfidence'])
    
    // Error and loading states
    const error = ref(null)
    const lastAction = ref(null)
    const isLoading = ref(false)
    const loadingAction = ref('')
    const loadingMessage = ref('')
    
    // Scanning state
    const isScanning = ref(false)
    const isProcessing = ref(false)
    const scanProgress = ref(0)
    const currentPoseData = ref(null)
    const isWristAligned = ref(false)
    const currentWristType = ref('')
    const currentSide = ref('left')

    const displayMeasurements = computed(() => {
      if (!currentMeasurement.value) return {}
      
      const wristData = currentMeasurement.value[currentSide.value]
      return {
        circumference: wristData?.circumference,
        width: wristData?.width,
        thickness: wristData?.thickness
      }
    })

    const watchSizeRecommendations = computed(() => {
      if (!currentMeasurement.value?.[currentSide.value]) return {}
      return sizeRecommendations.value?.watch || {}
    })

    const braceletSizeRecommendations = computed(() => {
      if (!currentMeasurement.value?.[currentSide.value]) return {}
      return sizeRecommendations.value?.bracelet || {}
    })

    const startScanning = async () => {
      loadingAction.value = 'wristScan'
      loadingMessage.value = 'Initializing wrist detection...'
      isLoading.value = true
      lastAction.value = 'scan'

      try {
        isScanning.value = true
        scanProgress.value = 0
        await store.dispatch('accessory/startScanning')
        startProgressSimulation()
      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.WRIST_DETECTION,
          'Failed to start wrist scanning',
          ErrorSeverity.MEDIUM,
          error
        ))
      } finally {
        isLoading.value = false
      }
    }

    const stopScanning = async () => {
      isScanning.value = false
      await store.dispatch('accessory/stopScanning')
      stopProgressSimulation()
    }

    const handleMeasurementCapture = async () => {
      loadingAction.value = 'processing'
      loadingMessage.value = 'Processing wrist measurements...'
      isLoading.value = true
      isProcessing.value = true
      lastAction.value = 'process'

      try {
        // Process wrist measurements
        const measurementData = await store.dispatch('accessory/processMeasurement', {
          poseData: currentPoseData.value,
          calibrationData: props.isCalibrated,
          side: currentSide.value
        })

        // Calculate size recommendations
        loadingMessage.value = 'Calculating size recommendations...'
        await store.dispatch('accessory/calculateSizeRecommendations', measurementData)

        // Save measurements
        loadingMessage.value = 'Saving measurements...'
        await store.dispatch('accessory/saveMeasurement', measurementData)

        emit('measurement-complete', measurementData)
      } catch (error) {
        let errorType = ErrorTypes.MEASUREMENT
        let message = 'Failed to process wrist measurements'

        if (error.message.includes('wrist detection')) {
          errorType = ErrorTypes.WRIST_DETECTION
          message = 'Failed to detect wrist properly'
        } else if (error.message.includes('validation')) {
          errorType = ErrorTypes.VALIDATION
          message = 'Invalid measurement values detected'
        } else if (error.message.includes('size calculation')) {
          errorType = ErrorTypes.SIZE_CALCULATION
          message = 'Failed to calculate size recommendations'
        } else if (error.message.includes('save')) {
          errorType = ErrorTypes.DATA_SAVING
          message = 'Failed to save measurements'
        }

        await handleError(new AppError(
          errorType,
          message,
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
        loadingMessage.value = 'Detecting wrist position...'
      } else if (scanProgress.value < 50) {
        loadingMessage.value = 'Measuring wrist dimensions...'
      } else if (scanProgress.value < 75) {
        loadingMessage.value = 'Calculating size recommendations...'
      } else {
        loadingMessage.value = 'Finalizing measurements...'
        }
    }

    const handleError = async (error) => {
      const appError = error instanceof AppError ? error : new AppError(
        ErrorTypes.UNKNOWN,
        error.message || 'An unexpected error occurred',
        ErrorSeverity.MEDIUM,
        error
      )

      await store.dispatch('errors/handleError', appError)
      error.value = appError.message

      if (isScanning.value) {
        stopScanning()
      }
      
      if (isProcessing.value) {
        isProcessing.value = false
      }
    }

    const retryLastAction = async () => {
      error.value = null
      
      await store.dispatch('loading/startLoading', {
        actionKey: 'retry',
        message: 'Retrying last action...'
      })

      try {
        switch (lastAction.value) {
          case 'scan':
            await startScanning()
            break
          case 'process':
            if (currentPoseData.value) {
              await handleMeasurementCapture()
            }
            break
          default:
            throw new Error('No retry action available')
        }
        lastAction.value = null
      } catch (retryError) {
        await handleError(retryError)
      } finally {
        await store.dispatch('loading/stopLoading', 'retry')
      }
    }

    const formatLabel = (key) => {
      return key.replace(/([A-Z])/g, ' $1').trim()
    }

    const formatValue = (value) => {
      return typeof value === 'number' ? `${value.toFixed(1)} mm` : value
    }

    onMounted(async () => {
      await store.dispatch('loading/startLoading', {
        actionKey: 'initialization',
        message: 'Initializing wrist measurement...'
      })

      try {
        await store.dispatch('accessory/initialize')
      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.INITIALIZATION,
          'Failed to initialize wrist measurements',
          ErrorSeverity.HIGH,
          error
        ))
      } finally {
        await store.dispatch('loading/stopLoading', 'initialization')
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
      sizeRecommendations,
      confidence,
      
      // Error and loading states
      error,
      isLoading,
      loadingAction,
      loadingMessage,
      
      // Scanning state
      isScanning,
      isProcessing,
      scanProgress,
      isWristAligned,
      currentWristType,
      currentSide,
      
      // Computed properties
      displayMeasurements,
      watchSizeRecommendations,
      braceletSizeRecommendations,
      
      // Methods
      startScanning,
      stopScanning,
      retryLastAction,
      formatLabel,
      formatValue,
      
      // Actions
      retakeMeasurements: () => {
        store.commit('accessory/RESET_STATE')
        scanProgress.value = 0
        currentSide.value = 'left'
        currentWristType.value = ''
        error.value = null
        lastAction.value = null
        loadingMessage.value = ''
      }
    }
  }
}
</script>

<style scoped>
.accessory-measurement {
  min-height: 400px;
}

.aspect-video {
  aspect-ratio: 16/9;
}

canvas {
  pointer-events: none;
}
</style>