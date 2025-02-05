<!-- src/components/measurement/types/eyewear/FaceShapeGuide.vue -->
<template>
  <div class="face-shape-guide">
    <!-- Guide Header -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-4">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-lg font-medium text-gray-900">Face Shape Guide</h3>
          <p class="mt-1 text-sm text-gray-500">Position your face within the guide for accurate measurements</p>
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

    <!-- Help Modal -->
    <div v-if="showHelp" 
         class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-xl max-w-lg w-full m-4">
        <div class="p-6">
          <h4 class="text-lg font-medium text-gray-900 mb-4">Face Shape Types</h4>
          <div class="space-y-4">
            <div v-for="shape in faceShapes" :key="shape.type" 
                 class="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50">
              <div class="flex-shrink-0">
                <img :src="shape.icon" :alt="shape.type" class="w-12 h-12"/>
              </div>
              <div>
                <h5 class="font-medium text-gray-900">{{ shape.type }}</h5>
                <p class="text-sm text-gray-500">{{ shape.description }}</p>
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

    <!-- Face Guide Overlay -->
    <div class="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
      <!-- Guide Lines -->
      <div class="absolute inset-0">
        <!-- Vertical Guide -->
        <div class="absolute left-1/2 top-0 bottom-0 w-px bg-blue-500 opacity-50"></div>
        <!-- Horizontal Guide -->
        <div class="absolute top-1/2 left-0 right-0 h-px bg-blue-500 opacity-50"></div>
        
        <!-- Face Outline -->
        <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg width="300" height="400" viewBox="0 0 300 400" fill="none">
            <!-- Face outline for guidance -->
            <path 
              d="M150 50 
                 C 100 50, 50 100, 50 200
                 C 50 300, 100 350, 150 350
                 C 200 350, 250 300, 250 200
                 C 250 100, 200 50, 150 50"
              stroke="#3B82F6"
              stroke-width="2"
              stroke-dasharray="5,5"
              fill="none"
            />
          </svg>
        </div>
      </div>

      <!-- Position Instructions -->
      <div class="absolute bottom-4 left-4 right-4">
        <div class="bg-black bg-opacity-75 text-white p-4 rounded-lg">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <div :class="[
                'w-3 h-3 rounded-full',
                isPositioned ? 'bg-green-400' : 'bg-yellow-400'
              ]"></div>
            </div>
            <p class="text-sm">
              {{ positionMessage }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Positioning Tips -->
    <div class="mt-4 bg-blue-50 rounded-lg p-4">
      <h4 class="text-sm font-medium text-blue-800 mb-2">Tips for Accurate Measurement</h4>
      <ul class="text-sm text-blue-700 space-y-2">
        <li v-for="(tip, index) in tips" :key="index" class="flex items-start">
          <span class="mr-2">•</span>
          <span>{{ tip }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'FaceShapeGuide',

  props: {
    isPositioned: {
      type: Boolean,
      default: false
    },
    detectedShape: {
      type: String,
      default: ''
    }
  },

  setup(props) {
    const showHelp = ref(false)

    const faceShapes = [
      {
        type: 'Oval',
        description: 'Balanced proportions with a curved jawline',
        icon: '/icons/oval-face.svg'
      },
      {
        type: 'Round',
        description: 'Similar width and length with soft angles',
        icon: '/icons/round-face.svg'
      },
      {
        type: 'Square',
        description: 'Strong jawline with similar proportions',
        icon: '/icons/square-face.svg'
      },
      {
        type: 'Heart',
        description: 'Wider forehead tapering to a narrower chin',
        icon: '/icons/heart-face.svg'
      },
      {
        type: 'Diamond',
        description: 'Narrow forehead and jawline with wide cheekbones',
        icon: '/icons/diamond-face.svg'
      }
    ]

    const tips = [
      'Remove glasses and hair from your face',
      'Face the camera directly',
      'Maintain neutral expression',
      'Ensure even lighting on your face',
      'Keep your head still during measurement'
    ]

    const positionMessage = computed(() => {
      if (props.isPositioned) {
        return 'Face position is good! Stay still for measurement.'
      }
      return 'Align your face within the guide lines'
    })

    const toggleHelp = () => {
      showHelp.value = !showHelp.value
    }

    return {
      showHelp,
      faceShapes,
      tips,
      positionMessage,
      toggleHelp
    }
  }
}
</script>

<style scoped>
.face-shape-guide {
  max-width: 800px;
  margin: 0 auto;
}

.aspect-video {
  aspect-ratio: 16/9;
}

/* Overlay transition */
.guide-overlay {
  transition: opacity 0.3s ease;
}

/* Modal transition */
.help-modal-enter-active,
.help-modal-leave-active {
  transition: opacity 0.3s ease;
}

.help-modal-enter-from,
.help-modal-leave-to {
  opacity: 0;
}
</style>