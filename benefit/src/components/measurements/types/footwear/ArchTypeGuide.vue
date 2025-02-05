<!-- src/components/measurement/types/footwear/ArchTypeGuide.vue -->
<template>
  <div class="arch-type-guide">
    <!-- Guide Header -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-4">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-lg font-medium text-gray-900">Arch Type Guide</h3>
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
          <h4 class="text-lg font-medium text-gray-900 mb-4">Understanding Arch Types</h4>
          <div class="space-y-4">
            <div v-for="arch in archTypes" :key="arch.type" 
                 class="flex items-start p-4 bg-gray-50 rounded-lg">
              <div class="flex-shrink-0">
                <img :src="arch.image" :alt="arch.type" class="w-16 h-16 object-contain"/>
              </div>
              <div class="ml-4">
                <h5 class="font-medium text-gray-900">{{ arch.type }}</h5>
                <p class="text-sm text-gray-500 mt-1">{{ arch.description }}</p>
                <p class="text-sm text-blue-600 mt-2">{{ arch.recommendation }}</p>
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
  name: 'ArchTypeGuide',

  props: {
    isAligned: {
      type: Boolean,
      default: false
    },
    currentArchType: {
      type: String,
      default: ''
    },
    measuringFoot: {
      type: String,
      required: true,
      validator: value => ['left', 'right'].includes(value)
    }
  },

  setup(props) {
    const showHelp = ref(false)

    const archTypes = [
      {
        type: 'Low Arch',
        description: 'Flat feet with minimal arch height',
        recommendation: 'Best suited for stability and motion control shoes',
        image: '/icons/low-arch.svg'
      },
      {
        type: 'Medium Arch',
        description: 'Balanced arch with normal height',
        recommendation: 'Neutral cushioned shoes work well',
        image: '/icons/medium-arch.svg'
      },
      {
        type: 'High Arch',
        description: 'Pronounced arch with significant height',
        recommendation: 'Cushioned shoes with good arch support recommended',
        image: '/icons/high-arch.svg'
      }
    ]

    const guideMessage = computed(() => {
      return `Measuring ${props.measuringFoot} foot arch type`
    })

    const alignmentMessage = computed(() => {
      if (props.isAligned) {
        return 'Position good! Hold still for measurement.'
      }
      return 'Center your foot within the guide markers'
    })

    const toggleHelp = () => {
      showHelp.value = !showHelp.value
    }

    return {
      showHelp,
      archTypes,
      guideMessage,
      alignmentMessage,
      toggleHelp
    }
  }
}
</script>

<style scoped>
.arch-type-guide {
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