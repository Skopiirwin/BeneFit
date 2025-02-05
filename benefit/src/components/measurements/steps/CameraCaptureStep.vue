// src/components/measurement/steps/CameraCaptureStep.vue
<template>
  <div class="space-y-6">
    <!-- Camera Interface -->
    <div class="relative bg-black rounded-lg overflow-hidden">
      <!-- Video Preview -->
      <video
        ref="videoElement"
        class="w-full aspect-video object-cover"
        :class="{ 'opacity-0': !isCameraReady }"
        autoplay
        playsinline
        muted
      ></video>

      <!-- Pose Overlay Canvas -->
      <canvas
        ref="poseCanvas"
        class="absolute top-0 left-0 w-full h-full pointer-events-none"
        :class="{ 'hidden': !isScanning }"
      ></canvas>

      <!-- Guide Overlay -->
      <div class="absolute inset-0 pointer-events-none">
        <!-- Position Guide -->
        <div class="absolute inset-16 border-2 border-dashed border-white/50 rounded-lg">
          <div class="absolute inset-0 flex items-center justify-center">
            <div v-if="!isScanning" class="text-white text-center space-y-2">
              <p class="text-lg font-medium">Position yourself within the frame</p>
              <p class="text-sm opacity-75">Ensure your whole body is visible</p>
            </div>
          </div>
        </div>

        <!-- Scanning Progress -->
        <div v-if="isScanning" 
             class="absolute top-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-medium">Scanning in progress...</span>
            <span class="text-sm">{{ scanProgress }}%</span>
          </div>
          <div class="h-2 bg-white/20 rounded-full overflow-hidden">
            <div class="h-full bg-blue-500 transition-all duration-300"
                 :style="{ width: `${scanProgress}%` }">
            </div>
          </div>
        </div>

        <!-- Pose Instructions -->
        <div v-if="isScanning" 
             class="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium">{{ currentPoseInstruction }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Camera Loading State -->
      <div v-if="!isCameraReady" 
           class="absolute inset-0 bg-gray-900 flex items-center justify-center">
        <div class="text-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
          <p class="mt-4 text-white text-sm">Initializing camera...</p>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <div class="flex justify-between items-center">
      <!-- Camera Controls -->
      <div class="space-x-4">
        <button
          @click="toggleCamera"
          class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Switch Camera</span>
        </button>
      </div>

      <!-- Scan Controls -->
      <div class="space-x-4">
        <button
          v-if="!isScanning"
          @click="startScan"
          :disabled="!isCameraReady"
          class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          </svg>
          <span>Start Scan</span>
        </button>
        <button
          v-else
          @click="stopScan"
          class="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center space-x-2"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
          </svg>
          <span>Stop Scan</span>
        </button>
      </div>
    </div>

    <!-- Pose Data Display -->
    <div v-if="poseData && isScanning" class="bg-gray-50 rounded-lg p-4">
      <h4 class="text-sm font-medium text-gray-900 mb-2">Pose Detection Data</h4>
      <div class="grid grid-cols-2 gap-4">
        <div class="text-sm text-gray-600">
          <span class="font-medium">Confidence:</span> 
          {{ (poseData.poseScore * 100).toFixed(1) }}%
        </div>
        <div class="text-sm text-gray-600">
          <span class="font-medium">Landmarks Detected:</span> 
          {{ poseData.poseLandmarks?.length || 0 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { POSE_CONNECTIONS } from '@/services/measurements/PoseEstimation'

export default {
  name: 'CameraCaptureStep',

  props: {
    isScanning: {
      type: Boolean,
      required: true
    },
    scanProgress: {
      type: Number,
      required: true
    },
    poseData: {
      type: Object,
      default: null
    }
  },

  emits: ['start-scan', 'stop-scan', 'capture'],

  setup(props, { emit }) {
    const videoElement = ref(null)
    const poseCanvas = ref(null)
    const isCameraReady = ref(false)
    const currentPoseIndex = ref(0)

    const poseInstructions = [
      'Stand straight with arms slightly away from your body',
      'Turn to your right side',
      'Hold the T-pose position',
      'Almost done! Hold still for final measurements'
    ]

    const currentPoseInstruction = computed(() => {
      return poseInstructions[currentPoseIndex.value]
    })

    // Watch scan progress to update pose instructions
    watch(() => props.scanProgress, (newProgress) => {
      currentPoseIndex.value = Math.floor((newProgress / 100) * poseInstructions.length)
    })

    // Drawing functions
    const drawPose = () => {
      if (!props.poseData?.poseLandmarks || !poseCanvas.value) return

      const ctx = poseCanvas.value.getContext('2d')
      const width = poseCanvas.value.width
      const height = poseCanvas.value.height

      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = '#00FF00'
      ctx.strokeStyle = '#00FF00'
      ctx.lineWidth = 2

      // Draw landmarks
      props.poseData.poseLandmarks.forEach((landmark) => {
        ctx.beginPath()
        ctx.arc(landmark.x * width, landmark.y * height, 4, 0, 2 * Math.PI)
        ctx.fill()
      })

      // Draw connections
      POSE_CONNECTIONS.forEach(([i, j]) => {
        const point1 = props.poseData.poseLandmarks[i]
        const point2 = props.poseData.poseLandmarks[j]

        ctx.beginPath()
        ctx.moveTo(point1.x * width, point1.y * height)
        ctx.lineTo(point2.x * width, point2.y * height)
        ctx.stroke()
      })
    }

    // Watch pose data changes to update visualization
    watch(() => props.poseData, () => {
      if (props.isScanning) {
        drawPose()
      }
    })

    const startScan = () => {
      emit('start-scan')
      currentPoseIndex.value = 0
    }

    const stopScan = () => {
      emit('stop-scan')
    }

    const toggleCamera = async () => {
      // Implementation for camera switching will go here
    }

    // Lifecycle hooks
    onMounted(() => {
      if (poseCanvas.value) {
        poseCanvas.value.width = videoElement.value.clientWidth
        poseCanvas.value.height = videoElement.value.clientHeight
      }
    })

    onUnmounted(() => {
      // Cleanup
    })

    return {
      videoElement,
      poseCanvas,
      isCameraReady,
      currentPoseInstruction,
      startScan,
      stopScan,
      toggleCamera
    }
  }
}
</script>

<style scoped>
.aspect-video {
  aspect-ratio: 16 / 9;
}

.camera-container {
  position: relative;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}
</style>