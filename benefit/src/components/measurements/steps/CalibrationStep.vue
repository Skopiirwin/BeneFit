<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <!-- Left Column: Camera Feed and Calibration Overlay -->
    <div class="relative bg-black rounded-lg overflow-hidden h-[400px]">
      <!-- Camera Feed -->
      <div class="relative w-full h-full">
        <video
          ref="videoPreview"
          class="w-full h-full object-contain"
          :class="{ 'hidden': !isCameraReady }"
        ></video>

        <!-- Calibration Canvas -->
        <canvas
          ref="calibrationCanvas"
          class="absolute top-0 left-0 w-full h-full"
          @click="handleCanvasClick"
        ></canvas>

        <!-- Reference Card Guide -->
        <div 
          class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          :class="[calibrationComplete ? 'border-green-400' : 'border-blue-400 animate-pulse']"
        >
          <div class="relative" :style="cardGuideStyles">
            <div class="absolute inset-0 border-2 border-dashed"></div>
            <div v-for="point in calibrationPoints" 
                 :key="point.id"
                 class="absolute w-3 h-3 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                 :style="{ left: point.x + 'px', top: point.y + 'px' }"
            ></div>
          </div>
        </div>

        <!-- Status Overlay -->
        <div v-if="!calibrationComplete" 
             class="absolute top-4 left-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg">
          <div class="flex items-center justify-between">
            <span>{{ currentStepMessage }}</span>
            <span class="text-sm">{{ calibrationPoints.length }}/2 points</span>
          </div>
          <!-- Progress Bar -->
          <div class="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
            <div class="h-full bg-blue-500 transition-all duration-300"
                 :style="{ width: `${(calibrationPoints.length / 2) * 100}%` }">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Column: Instructions and Actions -->
    <div class="space-y-6">
      <!-- Instructions Card -->
      <div class="bg-white rounded-lg shadow-sm p-6">
        <h3 class="text-lg font-medium text-gray-900 mb-4">
          {{ getMeasurementTypeTitle }} Calibration
        </h3>

        <div class="space-y-4">
          <!-- Type-specific Instructions -->
          <div class="bg-blue-50 rounded-md p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-3">
                <h4 class="text-sm font-medium text-blue-800">
                  For accurate measurements, we need to calibrate the system
                </h4>
                <div class="mt-2 text-sm text-blue-700">
                  <ol class="list-decimal ml-4 space-y-2">
                    <li v-for="(instruction, index) in getMeasurementTypeInstructions" 
                        :key="index"
                        :class="{ 'text-green-700': isStepComplete(index) }"
                    >
                      {{ instruction }}
                      <svg v-if="isStepComplete(index)" 
                           class="inline-block ml-2 h-4 w-4 text-green-500" 
                           fill="none" 
                           viewBox="0 0 24 24" 
                           stroke="currentColor"
                      >
                        <path stroke-linecap="round" 
                              stroke-linejoin="round" 
                              stroke-width="2" 
                              d="M5 13l4 4L19 7" />
                      </svg>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <!-- Points Display -->
          <div v-if="calibrationPoints.length > 0" class="mt-4">
            <h4 class="text-sm font-medium text-gray-700 mb-2">Selected Points:</h4>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="(point, index) in calibrationPoints" 
                   :key="index"
                   class="bg-gray-50 p-2 rounded-md"
              >
                <span class="text-sm text-gray-600">
                  Point {{ index + 1 }}: ({{ Math.round(point.x) }}, {{ Math.round(point.y) }})
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex justify-between">
        <button
          v-if="calibrationPoints.length > 0"
          @click="resetCalibration"
          class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Reset Points
        </button>
        
        <button
          v-if="calibrationComplete"
          @click="completeCalibration"
          class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Continue
        </button>
      </div>

      <!-- Results Preview -->
      <div v-if="calibrationResult" class="bg-green-50 rounded-lg p-6">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-green-800">
              Calibration Complete
            </h3>
            <div class="mt-2 text-sm text-green-700">
              <p>System calibrated successfully! You can now proceed with measurements.</p>
              <p class="mt-1">Calibration factor: {{ calibrationResult.pixelsPerMm.toFixed(4) }} pixels/mm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'CalibrationStep',

  props: {
    videoElement: {
      type: HTMLVideoElement,
      required: true
    },
    isCameraReady: {
      type: Boolean,
      default: false
    }
  },

  emits: ['calibration-complete', 'canvas-resize'],

  setup(props, { emit }) {
    const store = useStore()
    const videoPreview = ref(null)
    const calibrationCanvas = ref(null)
    const calibrationPoints = ref([])
    const calibrationResult = ref(null)

    // Credit card dimensions in mm
    const CREDIT_CARD_WIDTH = 85.60
    const CREDIT_CARD_HEIGHT = 53.98

    // Computed properties
    const measurementType = computed(() => store.getters['measurements/getSelectedType'])
    
    const getMeasurementTypeTitle = computed(() => {
      const titles = {
        eyewear: 'Eyewear',
        footwear: 'Footwear',
        accessory: 'Accessory',
        clothing: 'Body'
      }
      return titles[measurementType.value] || 'Measurement'
    })

    const cardGuideStyles = computed(() => {
      return {
        width: `${CREDIT_CARD_WIDTH}mm`,
        height: `${CREDIT_CARD_HEIGHT}mm`,
        minWidth: '200px',  // Fallback size
        minHeight: '125px'
      }
    })

    const calibrationComplete = computed(() => calibrationResult.value !== null)

    const currentStepMessage = computed(() => {
      if (calibrationPoints.value.length === 0) {
        return 'Click on the left edge of the card'
      }
      if (calibrationPoints.value.length === 1) {
        return 'Click on the right edge of the card'
      }
      return 'Processing calibration...'
    })

    // Watch for video element changes
    watch(() => props.videoElement, async (newVideo) => {
      if (newVideo && videoPreview.value) {
        videoPreview.value.srcObject = newVideo.srcObject
        await videoPreview.value.play()
      }
    }, { immediate: true })

    // Methods
    const initializeCanvas = () => {
      if (!calibrationCanvas.value || !videoPreview.value) return

      const canvas = calibrationCanvas.value
      const video = videoPreview.value

      canvas.width = video.clientWidth
      canvas.height = video.clientHeight

      emit('canvas-resize', {
        width: canvas.width,
        height: canvas.height
      })
    }

    const handleCanvasClick = (event) => {
      if (calibrationPoints.value.length >= 2) return

      const canvas = calibrationCanvas.value
      const rect = canvas.getBoundingClientRect()
      const x = (event.clientX - rect.left) * (canvas.width / rect.width)
      const y = (event.clientY - rect.top) * (canvas.height / rect.height)

      calibrationPoints.value.push({ x, y })
      drawPoint(x, y)

      if (calibrationPoints.value.length === 2) {
        calculateCalibration()
      }
    }

    const drawPoint = (x, y) => {
      const context = calibrationCanvas.value.getContext('2d')
      context.beginPath()
      context.arc(x, y, 5, 0, 2 * Math.PI)
      context.fillStyle = '#10B981'
      context.fill()

      if (calibrationPoints.value.length === 2) {
        drawLine()
      }
    }

    const drawLine = () => {
      const [p1, p2] = calibrationPoints.value
      const context = calibrationCanvas.value.getContext('2d')
      
      context.beginPath()
      context.moveTo(p1.x, p1.y)
      context.lineTo(p2.x, p2.y)
      context.strokeStyle = '#10B981'
      context.lineWidth = 2
      context.stroke()
    }

    const calculateCalibration = () => {
      const [p1, p2] = calibrationPoints.value
      
      // Calculate distance in pixels
      const pixelDistance = Math.sqrt(
        Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)
      )

      calibrationResult.value = {
        pixelsPerMm: pixelDistance / CREDIT_CARD_WIDTH,
        referenceWidth: CREDIT_CARD_WIDTH,
        referenceHeight: CREDIT_CARD_HEIGHT,
        accuracy: calculateCalibrationAccuracy()
      }
    }

    const calculateCalibrationAccuracy = () => {
      if (calibrationPoints.value.length < 2) return 0
      
      const [p1, p2] = calibrationPoints.value
      const width = Math.abs(p2.x - p1.x)
      const height = Math.abs(p2.y - p1.y)
      const aspectRatio = width / height
      
      const cardAspectRatio = CREDIT_CARD_WIDTH / CREDIT_CARD_HEIGHT
      const accuracy = 100 - (Math.abs(aspectRatio - cardAspectRatio) * 100)
      
      return Math.max(0, Math.min(100, accuracy))
    }

    const resetCalibration = () => {
      const context = calibrationCanvas.value.getContext('2d')
      context.clearRect(0, 0, calibrationCanvas.value.width, calibrationCanvas.value.height)
      calibrationPoints.value = []
      calibrationResult.value = null
    }

    const completeCalibration = () => {
      emit('calibration-complete', calibrationResult.value)
    }

    const isStepComplete = (index) => {
      if (index < 3) return true
      return calibrationComplete.value
    }

    // Lifecycle hooks
    onMounted(() => {
      nextTick(() => {
        if (props.videoElement && props.videoElement.srcObject) {
          videoPreview.value.srcObject = props.videoElement.srcObject
          videoPreview.value.play()
          initializeCanvas()
        }
      })

      window.addEventListener('resize', initializeCanvas)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', initializeCanvas)
    })

    return {
      videoPreview,
      calibrationCanvas,
      calibrationPoints,
      calibrationResult,
      calibrationComplete,
      currentStepMessage,
      getMeasurementTypeTitle,
      cardGuideStyles,
      handleCanvasClick,
      resetCalibration,
      completeCalibration,
      isStepComplete
    }
  }
}
</script>

<style scoped>
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { 
    opacity: 1; 
  }
  50% { 
    opacity: 0.5; 
  }
}

.calibration-canvas {
  pointer-events: auto;
  cursor: crosshair;
}

video, canvas {
  max-width: 100%;
  height: auto;
  aspect-ratio: 16/9;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>