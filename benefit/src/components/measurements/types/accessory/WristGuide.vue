<template>
  <div class="wrist-guide">
    <!-- Guide Header -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-4">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-lg font-medium text-gray-900">Wrist Guide</h3>
          <p class="mt-1 text-sm text-gray-500">{{ guideMessage }}</p>
        </div>
        <div class="flex items-center space-x-2">
          <button 
            @click="toggleHelp"
            class="text-gray-400 hover:text-gray-500"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Measurement Guide Lines -->
    <div class="absolute inset-0">
      <!-- Grid Overlay -->
      <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <!-- Measurement Grid -->
        <path 
          d="M0 33.33h100 M0 66.66h100" 
          stroke="#3B82F6" 
          stroke-width="0.5" 
          stroke-dasharray="2 2"
          fill="none"
        />
        <path 
          d="M33.33 0v100 M66.66 0v100" 
          stroke="#3B82F6" 
          stroke-width="0.5" 
          stroke-dasharray="2 2"
          fill="none"
        />
      </svg>

      <!-- Measurement Markers -->
      <div :class="[
        'absolute inset-0 border-2 border-dashed transition-all duration-300',
        isAligned ? 'border-green-400' : 'border-yellow-400'
      ]"></div>
    </div>

    <!-- Help Modal -->
    <div v-if="showHelp" 
         class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-xl max-w-lg w-full m-4">
        <div class="p-6">
          <h4 class="text-lg font-medium text-gray-900 mb-4">Understanding Wrist Measurements</h4>
          <div class="space-y-4">
            <div v-for="measurement in measurementGuides" :key="measurement.type" 
                 class="flex items-start p-4 bg-gray-50 rounded-lg">
              <div class="flex-shrink-0">
                <img :src="measurement.image" :alt="measurement.type" class="w-16 h-16 object-contain"/>
              </div>
              <div class="ml-4">
                <h5 class="font-medium text-gray-900">{{ measurement.type }}</h5>
                <p class="text-sm text-gray-500 mt-1">{{ measurement.description }}</p>
                <p class="text-sm text-blue-600 mt-2">{{ measurement.tip }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="px-6 py-4 bg-gray-50 rounded-b-lg flex justify-end">
          <button 
            @click="toggleHelp"
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Got it
          </button>
        </div>
      </div>
    </div>

    <!-- Positioning Guide -->
    <div class="absolute bottom-4 left-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg">
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
          <div :class="[
            'w-3 h-3 rounded-full',
            isAligned ? 'bg-green-400' : 'bg-yellow-400'
          ]"></div>
        </div>
        <p class="text-sm">{{ alignmentMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'WristGuide',

  props: {
    isAligned: {
      type: Boolean,
      default: false
    },
    wristType: {
      type: String,
      default: ''
    },
    measuringSide: {
      type: String,
      required: true,
      validator: value => ['left', 'right'].includes(value)
    }
  },

  setup(props) {
    const showHelp = ref(false)

    const measurementGuides = [
      {
        type: 'Circumference',
        description: 'The measurement around your wrist',
        tip: 'Measure at the widest point of your wrist bone',
        image: '/icons/wrist-circumference.svg'
      },
      {
        type: 'Width',
        description: 'The horizontal width of your wrist',
        tip: 'Keep your wrist relaxed and parallel to the camera',
        image: '/icons/wrist-width.svg'
      },
      {
        type: 'Thickness',
        description: 'The vertical thickness of your wrist',
        tip: 'Ensure consistent lighting for accurate measurement',
        image: '/icons/wrist-thickness.svg'
      }
    ]

    const guideMessage = computed(() => {
      return `Measuring ${props.measuringSide} wrist measurements`
    })

    const alignmentMessage = computed(() => {
      if (props.isAligned) {
        return 'Position good! Hold still for measurement.'
      }
      return 'Center your wrist within the guide markers'
    })

    const toggleHelp = () => {
      showHelp.value = !showHelp.value
    }

    return {
      showHelp,
      measurementGuides,
      guideMessage,
      alignmentMessage,
      toggleHelp
    }
  }
}
</script>

<style scoped>
.wrist-guide {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>