<template>
  <div class="footwear-measurement">
    <!-- Status Section -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-lg font-medium text-gray-900">Foot Measurements</h2>
          <p class="text-sm text-gray-500 mt-1">Measuring for optimal footwear fit</p>
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
          Stand with your foot parallel to the ground
        </li>
        <li class="flex items-center">
          <span class="mr-2">•</span>
          Place foot within measurement area
        </li>
        <li class="flex items-center">
          <span class="mr-2">•</span>
          Ensure both feet are measured for accuracy
        </li>
      </ul>
    </div>

    <!-- Foot Measurement Area -->
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
        
        <ArchTypeGuide
          :is-aligned="isFootAligned"
          :current-arch-type="detectedArchType"
          :measuring-foot="currentFoot"
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

          <!-- Foot Selection -->
          <div class="flex items-center space-x-2">
            <span class="text-sm text-gray-600">Measuring:</span>
            <select 
              v-model="currentFoot"
              class="form-select text-sm border-gray-300 rounded-md"
              :disabled="isScanning"
            >
              <option value="left">Left Foot</option>
              <option value="right">Right Foot</option>
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
        <div v-for="(value, key) in displayMeasurements" :key="key" 
             class="bg-gray-50 p-3 rounded-lg">
          <span class="text-sm text-gray-500">{{ formatLabel(key) }}</span>
          <div class="text-lg font-medium text-gray-900">
            {{ formatValue(value) }}
          </div>
        </div>
      </div>

      <!-- Arch Analysis -->
      <div class="mt-6">
        <h4 class="text-sm font-medium text-gray-900 mb-2">Arch Type Analysis</h4>
        <div class="flex items-center space-x-2">
          <span class="text-sm text-gray-600">Detected Type:</span>
          <span class="font-medium text-gray-900">{{ archType }}</span>
        </div>
      </div>

      <!-- Size Recommendations -->
      <div class="mt-6">
        <h4 class="text-sm font-medium text-gray-900 mb-2">Size Recommendations</h4>
        <div class="grid grid-cols-3 gap-4">
          <div v-for="(size, system) in sizeRecommendations" :key="system"
               class="bg-gray-50 p-3 rounded-lg">
            <span class="text-sm text-gray-500">{{ system.toUpperCase() }}</span>
            <div class="text-lg font-medium text-gray-900">{{ size }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import ArchTypeGuide from './ArchTypeGuide.vue'
import LoadingIndicator from '@/components/shared/LoadingIndicator.vue'
import { ErrorTypes, ErrorSeverity } from '@/utils/errorTypes'
import { AppError } from '@/utils/errorHandlers'

export default {
  name: 'FootwearMeasurement',
  
  components: {
    ArchTypeGuide,
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
    const measurements = computed(() => store.getters['footwear/getAllMeasurements'])
    const currentMeasurement = computed(() => store.getters['footwear/getCurrentMeasurement'])
    const archType = computed(() => store.getters['footwear/getArchType'])
    const sizeRecommendations = computed(() => store.getters['footwear/getSizeRecommendations'])
    const confidence = computed(() => store.getters['footwear/getConfidence'])
    
    // Loading states
    const isLoading = ref(false)
    const loadingAction = ref('')
    const loadingMessage = ref('')
    
    // Scanning state
    const isScanning = ref(false)
    const isProcessing = ref(false)
    const scanProgress = ref(0)
    const currentPoseData = ref(null)
    const isFootAligned = ref(false)
    const detectedArchType = ref(null)
    const currentFoot = ref('left')

    const displayMeasurements = computed(() => {
      if (!currentMeasurement.value) return {}
      
      return {
        length: currentMeasurement.value.length,
        width: currentMeasurement.value.width,
        archHeight: currentMeasurement.value.archHeight,
        instepHeight: currentMeasurement.value.instepHeight
      }
    })

    const startScanning = async () => {
      loadingAction.value = 'footScan'
      loadingMessage.value = 'Initializing foot detection...'
      isLoading.value = true

      try {
        isScanning.value = true
        scanProgress.value = 0
        await store.dispatch('footwear/startScanning')
        startProgressSimulation()
      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.FOOT_DETECTION,
          'Failed to start foot scanning',
          ErrorSeverity.MEDIUM,
          error
        ))
      } finally {
        isLoading.value = false
      }
    }

    const stopScanning = async () => {
      isScanning.value = false
      await store.dispatch('footwear/stopScanning')
      stopProgressSimulation()
    }

    const handleMeasurementCapture = async () => {
      loadingAction.value = 'processing'
      loadingMessage.value = 'Processing foot measurements...'
      isLoading.value = true
      isProcessing.value = true

      try {
        // Process measurements
        const measurementData = await store.dispatch('footwear/processMeasurement', {
          poseData: currentPoseData.value,
          calibrationData: props.isCalibrated,
          foot: currentFoot.value
        })

        // Analyze arch type
        loadingMessage.value = 'Analyzing arch type...'
        await store.dispatch('footwear/analyzeArchType', measurementData)

        // Calculate sizes
        loadingMessage.value = 'Calculating size recommendations...'
        await store.dispatch('footwear/calculateSizes', measurementData)

        // Save measurements
        loadingMessage.value = 'Saving measurements...'
        await store.dispatch('footwear/saveMeasurement', measurementData)

        emit('measurement-complete', measurementData)
      } catch (error) {
        let errorType = ErrorTypes.MEASUREMENT
        let message = 'Failed to process foot measurements'

        if (error.message.includes('arch')) {
          errorType = ErrorTypes.ARCH_DETECTION
          message = 'Failed to analyze arch type'
        } else if (error.message.includes('size')) {
          errorType = ErrorTypes.SIZE_CALCULATION
          message = 'Failed to calculate shoe sizes'
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
        loadingMessage.value = 'Detecting foot outline...'
      } else if (scanProgress.value < 50) {
        loadingMessage.value = 'Measuring foot dimensions...'
      } else if (scanProgress.value < 75) {
        loadingMessage.value = 'Analyzing arch type...'
      } else {
        loadingMessage.value = 'Finalizing measurements...'
      }
    }

    const handleError = async (error) => {
      await store.dispatch('errors/handleError', {
        type: error.type,
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
        await store.dispatch('footwear/initialize')
      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.INITIALIZATION,
          'Failed to initialize footwear measurements',
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
      archType,
      sizeRecommendations,
      confidence,
      
      // Local state
      isLoading,
      loadingAction,
      loadingMessage,
      isScanning,
      isProcessing,
      scanProgress,
      currentPoseData,
      isFootAligned,
      detectedArchType,
      currentFoot,
      
      // Computed
      displayMeasurements,
      
      // Methods
      startScanning,
      stopScanning,
      formatLabel,
      formatValue,
      
      // Actions
      retakeMeasurements: () => {
        store.commit('footwear/RESET_STATE')
        scanProgress.value = 0
        currentFoot.value = 'left'
        detectedArchType.value = null
        loadingMessage.value = ''
      }
    }
  }
}
</script>

