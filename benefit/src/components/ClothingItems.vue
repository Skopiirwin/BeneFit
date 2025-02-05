<template>
  <div class="container mx-auto p-4">
    <LoadingIndicator 
      actionKey="clothingItems"
      :message="loadingMessage"
      size="medium"
    />

    <!-- Category Selection -->
    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Size Recommendations</h2>
      <div class="flex space-x-4">
        <button 
          v-for="category in availableCategories"
          :key="category.type"
          @click="selectCategory(category.type)"
          :class="[
            'px-4 py-2 rounded-lg text-sm font-medium',
            selectedCategory === category.type 
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
        >
          {{ category.label }}
        </button>
      </div>
    </div>

    <!-- Error Display -->
    <div v-if="error" class="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-red-800">{{ error }}</h3>
          <div class="mt-2">
            <button 
              @click="retryFailedAction"
              class="text-sm font-medium text-red-600 hover:text-red-500"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Items Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="item in filteredItems" 
           :key="item.id" 
           class="bg-white shadow-md rounded-lg p-4"
      >
        <div class="relative">
          <!-- Item Image Placeholder -->
          <div class="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
            <span class="text-gray-400">Item Image</span>
          </div>
          
          <!-- Item Details -->
          <h3 class="text-lg font-semibold mb-2">{{ item.name }}</h3>
          <div class="text-gray-600 space-y-1 mb-4">
            <p>Category: {{ item.category }}</p>
            <p>Style: {{ item.style }}</p>
            <p>Fit: {{ item.fit }}</p>
          </div>

          <!-- Size Recommendation Button -->
          <button 
            @click="recommendSize(item.id)"
            :disabled="!hasMeasurements || isProcessing"
            class="w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <template v-if="isProcessing">Calculating...</template>
            <template v-else>
              {{ hasMeasurements ? 'Recommend Size' : 'Add Measurements First' }}
            </template>
          </button>
        </div>
      </div>
    </div>

    <!-- Size Recommendation Modal -->
    <div v-if="showRecommendation" 
         class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <div class="bg-white rounded-lg shadow-xl max-w-lg w-full overflow-hidden">
        <!-- Modal Header -->
        <div class="p-6 border-b border-gray-200">
          <div class="flex justify-between items-center">
            <h3 class="text-xl font-semibold text-gray-900">
              Size Recommendation
            </h3>
            <button @click="closeRecommendation" 
                    class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">Close</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Modal Content -->
        <div class="p-6">
          <div v-if="currentRecommendation">
            <!-- Primary Recommendation -->
            <div class="mb-6">
              <div class="text-center">
                <span class="text-4xl font-bold text-blue-600">
                  {{ currentRecommendation.size }}
                </span>
                <div class="mt-2">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                        :class="getConfidenceClass(currentRecommendation.confidence)"
                  >
                    {{ currentRecommendation.confidence }}% Match
                  </span>
                </div>
              </div>
            </div>

            <!-- Fit Details -->
            <div class="mb-6">
              <h4 class="text-sm font-medium text-gray-700 mb-2">Fit Analysis</h4>
              <div class="space-y-2">
                <div v-for="(fit, measurement) in currentRecommendation.fitAnalysis"
                     :key="measurement"
                     class="flex items-center justify-between"
                >
                  <span class="text-sm text-gray-600">
                    {{ formatMeasurement(measurement) }}
                  </span>
                  <div class="flex items-center space-x-2">
                    <span class="text-sm font-medium" 
                          :class="getFitClass(fit.status)"
                    >
                      {{ fit.description }}
                    </span>
                    <span class="text-xs text-gray-500">
                      ({{ getFitFeedback(fit.status, measurement) }})
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Alternative Sizes -->
            <div v-if="currentRecommendation.alternatives?.length">
              <h4 class="text-sm font-medium text-gray-700 mb-2">Alternative Sizes</h4>
              <div class="space-y-2">
                <div v-for="alt in currentRecommendation.alternatives"
                     :key="alt.size"
                     class="flex justify-between items-center p-2 bg-gray-50 rounded"
                >
                  <span class="font-medium">{{ alt.size }}</span>
                  <span class="text-sm text-gray-500">{{ alt.confidence }}% match</span>
                </div>
              </div>
            </div>

            <!-- Size Consistency -->
            <div class="mt-4 p-3 bg-blue-50 rounded-md">
              <div class="flex items-center justify-between">
                <span class="text-sm text-blue-700">Size Consistency</span>
                <span class="text-sm font-medium text-blue-900">
                  {{ calculateSizeConsistency(measurements, currentRecommendation.size).toFixed(0) }}%
                </span>
              </div>
            </div>

            <!-- Measurement Notes -->
            <div class="mt-6 text-sm text-gray-500">
              <p>Recommendation based on measurements from {{ formatDate(currentRecommendation.measurementDate) }}</p>
              <p class="mt-1">For best results, update your measurements regularly.</p>
            </div>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end space-x-3">
          <button @click="closeRecommendation"
                  class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Close
          </button>
          <button @click="updateMeasurements"
                  class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Update Measurements
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import LoadingIndicator from '@/components/shared/LoadingIndicator.vue'
import { ErrorTypes, ErrorSeverity } from '@/utils/errorTypes'
import { AppError } from '@/utils/errorHandlers'

export default {
  name: 'ClothingItems',
  
  components: {
    LoadingIndicator
  },
  
  setup() {
    const router = useRouter()
    const store = useStore()
    
    // Store connections
    const clothingItems = computed(() => store.getters['clothingItems/getAllItems'])
    const currentItem = computed(() => store.getters['clothingItems/getCurrentItem'])
    const recommendations = computed(() => store.getters['clothingItems/getRecommendations'])

    // ================ STATE MANAGEMENT ================
    const selectedCategory = ref('tops')
    const showRecommendation = ref(false)
    const currentRecommendation = ref(null)
    const hasMeasurements = ref(false)
    const measurements = ref(null)
    const isProcessing = ref(false)
    const loadingMessage = ref('')
    const error = ref(null)
    const lastAction = ref(null)

    // ================ STATIC DATA ================
    const availableCategories = [
      { type: 'tops', label: 'Tops' },
      { type: 'bottoms', label: 'Bottoms' }
    ]

    // ================ COMPUTED PROPERTIES ================
    const filteredItems = computed(() => {
      return clothingItems.value.filter(item => item.category === selectedCategory.value)
    })

    // ================ ERROR HANDLING ================
    const handleError = async (error) => {
      const appError = error instanceof AppError ? error : new AppError(
        ErrorTypes.UNKNOWN,
        error.message || 'An unexpected error occurred',
        ErrorSeverity.MEDIUM,
        error
      )

      await store.dispatch('errors/handleError', appError)
      error.value = appError.message
      lastAction.value = isProcessing.value ? 'process' : 'fetch'
      isProcessing.value = false
    }

    const retryFailedAction = async () => {
      error.value = null

      try {
        switch (lastAction.value) {
          case 'fetch':
            await fetchItems()
            break
          case 'process':
            if (currentItem.value) {
              await recommendSize(currentItem.value.id)
            }
            break
          case 'measurements':
            await fetchMeasurements()
            break
        }
      } catch (retryError) {
        await handleError(retryError)
      }
    }

    // ================ CORE METHODS ================
    const selectCategory = (category) => {
      selectedCategory.value = category
    }

    const fetchItems = async () => {
      loadingMessage.value = 'Loading clothing items...'
      lastAction.value = 'fetch'

      try {
        await store.dispatch('clothingItems/fetchItems')
      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.DATA_FETCH,
          'Failed to load clothing items',
          ErrorSeverity.HIGH,
          error
        ))
      }
    }

    const fetchMeasurements = async () => {
      loadingMessage.value = 'Loading measurements...'
      lastAction.value = 'measurements'

      try {
        const response = await store.dispatch('measurements/getRecent')
        hasMeasurements.value = response?.measurements?.length > 0
        if (hasMeasurements.value) {
          measurements.value = response.measurements[0]
        }
      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.DATA_FETCH,
          'Failed to load measurements',
          ErrorSeverity.MEDIUM,
          error
        ))
      }
    }

    const recommendSize = async (itemId) => {
      isProcessing.value = true
      loadingMessage.value = 'Calculating size recommendation...'
      lastAction.value = 'process'

      try {
        const item = clothingItems.value.find(i => i.id === itemId)
        if (!item) {
          throw new AppError(
            ErrorTypes.VALIDATION,
            'Item not found',
            ErrorSeverity.MEDIUM
          )
        }

        if (!measurements.value) {
          await fetchMeasurements()
        }

        const recommendation = await store.dispatch('clothingItems/calculateRecommendation', {
          item,
          measurements: measurements.value
        })

        currentRecommendation.value = recommendation
        showRecommendation.value = true
      } catch (error) {
        let errorType = ErrorTypes.UNKNOWN
        let message = 'Failed to calculate size recommendation'

        if (error.message.includes('validation')) {
          errorType = ErrorTypes.VALIDATION
          message = 'Invalid measurement values'
        } else if (error.message.includes('calculation')) {
          errorType = ErrorTypes.SIZE_CALCULATION
          message = 'Size calculation failed'
        }

        await handleError(new AppError(errorType, message, ErrorSeverity.MEDIUM, error))
      } finally {
        isProcessing.value = false
      }
    }

    const closeRecommendation = () => {
      showRecommendation.value = false
      currentRecommendation.value = null
    }

    const updateMeasurements = () => {
      router.push('/measurement-process')
    }

    // ================ UTILITY FUNCTIONS ================
    const getConfidenceClass = (confidence) => {
      if (confidence >= 90) return 'bg-green-100 text-green-800'
      if (confidence >= 70) return 'bg-yellow-100 text-yellow-800'
      return 'bg-red-100 text-red-800'
    }

    const getFitClass = (status) => {
      const classes = {
        skinny: 'text-purple-600',
        well: 'text-green-600',
        baggy: 'text-blue-600'
      }
      return classes[status] || 'text-gray-600'
    }

    const formatMeasurement = (measurement) => {
      return measurement.charAt(0).toUpperCase() + 
             measurement.slice(1).
             measurement.slice(1).replace(/([A-Z])/g, ' $1')
    }

    const getFitFeedback = (status, measurement) => {
      const feedback = {
        skinny: {
          chest: 'Fits snug around chest',
          waist: 'Fitted at waist',
          hips: 'Form-fitting hip area',
          inseam: 'Slim leg fit',
          shoulders: 'Close-fitting shoulders'
        },
        well: {
          chest: 'Perfect chest fit',
          waist: 'Ideal waist comfort',
          hips: 'Comfortable hip fit',
          inseam: 'Optimal leg length',
          shoulders: 'Well-balanced shoulder fit'
        },
        baggy: {
          chest: 'Relaxed chest area',
          waist: 'Loose waist fit',
          hips: 'Roomy hip area',
          inseam: 'Relaxed leg fit',
          shoulders: 'Generous shoulder room'
        }
      }
      return feedback[status]?.[measurement] || `${status} fit`
    }

    const calculateSizeConsistency = (measurements, recommendedSize) => {
      if (!measurements) return 0
      
      let consistentMeasurements = 0
      let totalMeasurements = 0

      Object.entries(measurements).forEach(([measurement, value]) => {
        if (typeof value === 'number') {
          totalMeasurements++
          if (isWithinSizeRange(value, measurement, recommendedSize)) {
            consistentMeasurements++
          }
        }
      })

      return totalMeasurements > 0 ? (consistentMeasurements / totalMeasurements) * 100 : 0
    }

    const isWithinSizeRange = (value, measurement, size) => {
      const range = store.getters['clothingItems/getSizeRange'](measurement, size)
      if (!range) return false
      return value >= range.min && value <= range.max
    }

    const formatDate = (date) => {
      if (!date) return ''
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    // ================ INITIALIZATION ================
    const initialize = async () => {
      await store.dispatch('loading/startLoading', {
        actionKey: 'initialization',
        message: 'Loading items...'
      })

      try {
        await Promise.all([
          fetchItems(),
          fetchMeasurements()
        ])
      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.INITIALIZATION,
          'Failed to initialize clothing items',
          ErrorSeverity.HIGH,
          error
        ))
      } finally {
        await store.dispatch('loading/stopLoading', 'initialization')
      }
    }

    // Call initialize
    initialize()

    // ================ RETURN STATEMENT ================
    return {
      // Store state
      clothingItems,
      currentItem,
      recommendations,
      
      // Local state
      selectedCategory,
      showRecommendation,
      currentRecommendation,
      hasMeasurements,
      isProcessing,
      loadingMessage,
      error,
      
      // Data
      availableCategories,
      filteredItems,
      measurements,
      
      // Methods
      selectCategory,
      recommendSize,
      closeRecommendation,
      updateMeasurements,
      retryFailedAction,
      
      // Utilities
      getConfidenceClass,
      getFitClass,
      getFitFeedback,
      formatMeasurement,
      calculateSizeConsistency,
      formatDate,
      isWithinSizeRange
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
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