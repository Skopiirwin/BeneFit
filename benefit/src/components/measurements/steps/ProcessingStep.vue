// src/components/measurement/steps/ProcessingStep.vue
<template>
  <div class="space-y-6">
    <!-- Processing State -->
    <div v-if="isProcessing" class="bg-white rounded-lg shadow-sm p-8">
      <div class="text-center">
        <div class="relative mx-auto w-24 h-24">
          <!-- Circular Progress -->
          <svg class="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <circle
              class="text-gray-200"
              stroke-width="8"
              stroke="currentColor"
              fill="transparent"
              r="42"
              cx="50"
              cy="50"
            />
            <circle
              class="text-blue-600 transition-all duration-300"
              stroke-width="8"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="dashOffset"
              stroke-linecap="round"
              stroke="currentColor"
              fill="transparent"
              r="42"
              cx="50"
              cy="50"
            />
          </svg>

          <!-- Percentage Text -->
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-xl font-semibold text-gray-800">
              {{ Math.round(processingProgress) }}%
            </span>
          </div>
        </div>

        <h3 class="mt-4 text-lg font-medium text-gray-900">
          Processing Measurements
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          {{ processingMessage }}
        </p>
      </div>
    </div>

    <!-- Results Display -->
    <div v-else-if="measurements" class="space-y-6">
      <!-- Confidence Score -->
      <div class="bg-white rounded-lg shadow-sm p-6">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-medium text-gray-900">
            Measurement Confidence
          </h3>
          <div class="flex items-center">
            <span :class="confidenceScoreColor" class="text-2xl font-bold">
              {{ confidenceScore }}%
            </span>
          </div>
        </div>
        
        <div class="mt-4">
          <div class="relative pt-1">
            <div class="overflow-hidden h-2 text-xs flex rounded bg-gray-100">
              <div
                :style="{ width: `${confidenceScore}%` }"
                :class="confidenceBarColor"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-all duration-500"
              ></div>
            </div>
          </div>
          
          <p class="mt-2 text-sm text-gray-500">
            {{ confidenceMessage }}
          </p>
        </div>
      </div>

      <!-- Measurement Results -->
      <div class="bg-white rounded-lg shadow-sm p-6">
        <h3 class="text-lg font-medium text-gray-900 mb-4">
          Measurement Results
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="(value, key) in formattedMeasurements" 
               :key="key" 
               class="bg-gray-50 p-4 rounded-lg">
            <div class="flex justify-between items-center">
              <span class="text-sm font-medium text-gray-500">
                {{ formatLabel(key) }}
              </span>
              <span class="text-lg font-semibold text-gray-900">
                {{ value }}
              </span>
            </div>
          </div>
        </div>

        <!-- Measurement Quality Indicators -->
        <div class="mt-6 grid grid-cols-2 gap-4">
          <div v-for="(indicator, index) in qualityIndicators"
               :key="index"
               class="flex items-center space-x-2">
            <div :class="indicator.color" 
                 class="w-2 h-2 rounded-full"></div>
            <span class="text-sm text-gray-600">
              {{ indicator.label }}
            </span>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex justify-between">
        <button
          @click="retryMeasurements"
          class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Retake Measurements</span>
        </button>

        <button
          @click="confirmMeasurements"
          :disabled="confidenceScore < 70"
          class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M5 13l4 4L19 7" />
          </svg>
          <span>Confirm Measurements</span>
        </button>
      </div>
    </div>

    <!-- Error State -->
    <div v-else class="bg-red-50 rounded-lg p-6">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-red-800">
            Processing Error
          </h3>
          <p class="mt-2 text-sm text-red-700">
            Unable to process measurements. Please try again.
          </p>
          <button
            @click="retryMeasurements"
            class="mt-4 px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200"
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'

export default {
  name: 'ProcessingStep',

  props: {
    measurements: {
      type: Object,
      default: null
    },
    confidenceScore: {
      type: Number,
      required: true
    },
    isProcessing: {
      type: Boolean,
      default: false
    }
  },

  emits: ['retry', 'confirm'],

  setup(props, { emit }) {
    const processingProgress = ref(0)
    const processingStage = ref(0)

    const processingStages = [
      'Analyzing pose data...',
      'Calculating measurements...',
      'Validating results...',
      'Generating recommendations...'
    ]

    const processingMessage = computed(() => {
      return processingStages[processingStage.value]
    })

    const circumference = computed(() => {
      return 2 * Math.PI * 42 // r = 42 from SVG
    })

    const dashOffset = computed(() => {
      return circumference.value - (processingProgress.value / 100) * circumference.value
    })

    const confidenceScoreColor = computed(() => {
      if (props.confidenceScore >= 90) return 'text-green-600'
      if (props.confidenceScore >= 70) return 'text-yellow-600'
      return 'text-red-600'
    })

    const confidenceBarColor = computed(() => {
      if (props.confidenceScore >= 90) return 'bg-green-600'
      if (props.confidenceScore >= 70) return 'bg-yellow-600'
      return 'bg-red-600'
    })

    const confidenceMessage = computed(() => {
      if (props.confidenceScore >= 90) {
        return 'Excellent measurement quality'
      }
      if (props.confidenceScore >= 70) {
        return 'Good measurement quality'
      }
      return 'Poor measurement quality. Consider retaking measurements'
    })

    const formattedMeasurements = computed(() => {
      if (!props.measurements) return {}
      
      return Object.entries(props.measurements).reduce((acc, [key, value]) => {
        if (typeof value === 'number') {
          acc[key] = `${value.toFixed(1)} cm`
        }
        return acc
      }, {})
    })

    const qualityIndicators = computed(() => {
      return [
        {
          label: 'High Confidence',
          color: 'bg-green-500'
        },
        {
          label: 'Good Lighting',
          color: props.measurements?.lightingScore > 0.7 ? 'bg-green-500' : 'bg-yellow-500'
        },
        {
          label: 'Clear Pose',
          color: props.measurements?.poseScore > 0.8 ? 'bg-green-500' : 'bg-yellow-500'
        },
        {
          label: 'Stable Position',
          color: props.measurements?.stabilityScore > 0.9 ? 'bg-green-500' : 'bg-yellow-500'
        }
      ]
    })

    const formatLabel = (key) => {
      return key
        .replace(/([A-Z])/g, ' $1')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }

    const retryMeasurements = () => {
      emit('retry')
    }

    const confirmMeasurements = () => {
      emit('confirm')
    }

    // Simulate processing progress
    onMounted(() => {
      if (props.isProcessing) {
        const interval = setInterval(() => {
          if (processingProgress.value < 100) {
            processingProgress.value += 1
            if (processingProgress.value % 25 === 0) {
              processingStage.value = Math.min(
                processingStage.value + 1,
                processingStages.length - 1
              )
            }
          } else {
            clearInterval(interval)
          }
        }, 50)
      }
    })

    return {
      processingProgress,
      processingMessage,
      circumference,
      dashOffset,
      confidenceScoreColor,
      confidenceBarColor,
      confidenceMessage,
      formattedMeasurements,
      qualityIndicators,
      formatLabel,
      retryMeasurements,
      confirmMeasurements
    }
  }
}
</script>