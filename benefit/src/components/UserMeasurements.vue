<template>
  <div class="container mx-auto p-4">
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

    <!-- Stats Overview -->
    <div class="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="stat in measurementStats" :key="stat.label" 
           class="bg-white rounded-lg shadow-sm p-6">
        <div class="flex items-center justify-between">
          <h3 class="text-sm font-medium text-gray-500">{{ stat.label }}</h3>
          <div :class="[
            'text-lg font-semibold',
            stat.trend === 'up' ? 'text-green-600' : 
            stat.trend === 'down' ? 'text-red-600' : 'text-gray-900'
          ]">
            {{ stat.value }}
            <span v-if="stat.change" class="text-sm ml-1">
              ({{ stat.change > 0 ? '+' : ''}}{{ stat.change }}%)
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Measurement Form -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 class="text-xl font-bold mb-4">Add New Measurement</h2>
      <Form @submit="submitMeasurement" :validation-schema="schema" v-slot="{ errors }">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="(value, key) in formValues" :key="key" class="space-y-1">
            <label :for="key" class="block text-sm font-medium text-gray-700">
              {{ formLabels[key] }}:
            </label>
            <Field 
              :name="key" 
              type="number" 
              :id="key" 
              v-model="formValues[key]" 
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                     focus:border-blue-500 focus:ring-blue-500" 
            />
            <ErrorMessage :name="key" class="text-red-500 text-xs" />
          </div>
        </div>

        <div class="mt-6 flex justify-end">
          <button 
            type="submit" 
            :disabled="Object.keys(errors).length > 0 || isSubmitting" 
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 
                   disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isEditing ? 'Update' : 'Add' }} Measurement
          </button>
        </div>
      </Form>
    </div>

    <!-- Measurement History -->
    <div class="bg-white rounded-lg shadow-sm">
      <div class="p-6 border-b border-gray-200">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-bold">Measurement History</h2>
          <div class="flex items-center space-x-4">
            <!-- Category Filter -->
            <select 
              v-model="selectedCategory"
              class="form-select text-sm border-gray-300 rounded-md"
              @change="handleCategoryChange"
            >
              <option value="all">All Categories</option>
              <option v-for="category in categories" 
                      :key="category.value" 
                      :value="category.value"
              >
                {{ category.label }}
              </option>
            </select>

            <!-- Time Range Filter -->
            <select 
              v-model="selectedTimeRange"
              class="form-select text-sm border-gray-300 rounded-md"
              @change="handleTimeRangeChange"
            >
              <option value="all">All Time</option>
              <option value="week">Past Week</option>
              <option value="month">Past Month</option>
              <option value="year">Past Year</option>
            </select>
          </div>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th v-for="label in Object.values(formLabels)" 
                  :key="label" 
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase 
                         tracking-wider"
              >
                {{ label }}
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase 
                         tracking-wider"
              >
                Date
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase 
                         tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="measurement in filteredMeasurements" :key="measurement.id">
              <td v-for="(value, key) in measurement.values" 
                  :key="key" 
                  class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
              >
                {{ formatValue(value) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ formatDate(measurement.created_at) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button 
                  @click="editMeasurement(measurement)" 
                  class="text-blue-600 hover:text-blue-900 mr-4"
                >
                  Edit
                </button>
                <button 
                  @click="confirmDelete(measurement.id)" 
                  class="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr v-if="filteredMeasurements.length === 0">
              <td colspan="100%" class="px-6 py-4 text-center text-gray-500">
                No measurements found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <AppModal v-if="showDeleteModal" @close="showDeleteModal = false">
      <div class="p-6">
        <h3 class="text-lg font-medium text-gray-900 mb-4">
          Confirm Deletion
        </h3>
        <p class="text-sm text-gray-500 mb-4">
          Are you sure you want to delete this measurement? This action cannot be undone.
        </p>
        <div class="mt-6 flex justify-end space-x-4">
          <button 
            @click="showDeleteModal = false" 
            class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 
                   hover:bg-gray-50"
          >
            Cancel
          </button>
          <button 
            @click="deleteMeasurement" 
            class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </AppModal>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { useStore } from 'vuex'
import AppModal from '@/components/AppModal.vue'
import LoadingIndicator from '@/components/shared/LoadingIndicator.vue'
import { ErrorTypes, ErrorSeverity } from '@/utils/errorTypes'
import { AppError } from '@/utils/errorHandlers'

export default {
  name: 'UserMeasurements',
  
  components: { 
    Form, 
    Field, 
    ErrorMessage, 
    AppModal,
    LoadingIndicator 
  },

  setup() {
    const store = useStore()
    
    // Store connections
    const measurements = computed(() => store.getters['measurements/getAllMeasurements'])
    const recentMeasurements = computed(() => store.getters['measurements/getRecentMeasurements'])
    const measurementStats = computed(() => store.getters['measurements/getMeasurementStats'])

    // Local state
    const error = ref(null)
    const lastAction = ref(null)
    const isLoading = ref(false)
    const loadingAction = ref('')
    const loadingMessage = ref('')
    const isSubmitting = ref(false)
    const isEditing = ref(false)
    const editingId = ref(null)
    const showDeleteModal = ref(false)
    const deletingId = ref(null)
    const selectedCategory = ref('all')
    const selectedTimeRange = ref('all')

    // Form state
    const formValues = ref({
      height: '',
      weight: '',
      chest: '',
      waist: '',
      hips: '',
      inseam: ''
    })

    const formLabels = {
      height: 'Height (cm)',
      weight: 'Weight (kg)',
      chest: 'Chest (cm)',
      waist: 'Waist (cm)',
      hips: 'Hips (cm)',
      inseam: 'Inseam (cm)'
    }

    // Validation schema
    const schema = yup.object().shape({
      height: yup.number()
        .positive('Height must be positive')
        .required('Height is required'),
      weight: yup.number()
        .positive('Weight must be positive')
        .required('Weight is required'),
      chest: yup.number()
        .positive('Chest must be positive')
        .required('Chest is required'),
      waist: yup.number()
        .positive('Waist must be positive')
        .required('Waist is required'),
      hips: yup.number()
        .positive('Hips must be positive')
        .required('Hips is required'),
      inseam: yup.number()
        .positive('Inseam must be positive')
        .required('Inseam is required')
    })

    // Categories
    const categories = [
      { value: 'recent', label: 'Recent' },
      { value: 'height', label: 'Height' },
      { value: 'weight', label: 'Weight' },
      { value: 'proportions', label: 'Body Proportions' }
    ]

    // Computed
    const filteredMeasurements = computed(() => {
      let filtered = [...measurements.value]

      // Apply category filter
      if (selectedCategory.value !== 'all') {
        filtered = filtered.filter(m => m.category === selectedCategory.value)
      }

      // Apply time range filter
      if (selectedTimeRange.value !== 'all') {
        const now = new Date()
        const ranges = {
          week: 7,
          month: 30,
          year: 365
        }
        const days = ranges[selectedTimeRange.value]
        filtered = filtered.filter(m => {
          const measurementDate = new Date(m.created_at)
          const diffTime = Math.abs(now - measurementDate)
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
          return diffDays <= days
        })
      }

      return filtered
    })

    // Methods
    const fetchMeasurements = async () => {
      loadingAction.value = 'fetch'
      loadingMessage.value = 'Loading measurements...'
      isLoading.value = true
      lastAction.value = 'fetch'

      try {
        await store.dispatch('measurements/fetchMeasurements')
        await calculateStats()
      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.DATA_FETCH,
          'Failed to load measurements',
          ErrorSeverity.HIGH,
          error
        ))
      } finally {
        isLoading.value = false
      }
    }

    const calculateStats = async () => {
      loadingAction.value = 'stats'
      loadingMessage.value = 'Calculating measurement statistics...'
      lastAction.value = 'stats'

      try {
        await store.dispatch('measurements/calculateStats')
      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.STATS_CALCULATION,
          'Failed to calculate measurement statistics',
          ErrorSeverity.MEDIUM,
          error
        ))
      }
    }

    const submitMeasurement = async (values) => {
      loadingAction.value = isEditing.value ? 'update' : 'create'
      loadingMessage.value = isEditing.value ? 'Updating measurement...' : 'Adding measurement...'
      isSubmitting.value = true
      lastAction.value = isEditing.value ? 'update' : 'create'

      try {
        if (isEditing.value) {
          await store.dispatch('measurements/updateMeasurement', {
            id: editingId.value,
            data: values
          })
        } else {
          await store.dispatch('measurements/createMeasurement', values)
        }
        
        resetForm()
        await fetchMeasurements()
      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.VALIDATION,
          `Failed to ${isEditing.value ? 'update' : 'add'} measurement`,
          ErrorSeverity.MEDIUM,
          error
        ))
      } finally {
        isSubmitting.value = false
      }
    }

    const editMeasurement = (measurement) => {
      isEditing.value = true
      editingId.value = measurement.id
      formValues.value =
      formValues.value = { ...measurement.values }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const confirmDelete = (id) => {
      deletingId.value = id
      showDeleteModal.value = true
    }

    const deleteMeasurement = async () => {
      loadingAction.value = 'delete'
      loadingMessage.value = 'Deleting measurement...'
      isLoading.value = true
      lastAction.value = 'delete'

      try {
        await store.dispatch('measurements/deleteMeasurement', deletingId.value)
        showDeleteModal.value = false
        await fetchMeasurements()
      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.DELETE_OPERATION,
          'Failed to delete measurement',
          ErrorSeverity.MEDIUM,
          error
        ))
      } finally {
        isLoading.value = false
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
    }

    const retryFailedAction = async () => {
      error.value = null

      switch (lastAction.value) {
        case 'fetch':
          await fetchMeasurements()
          break
        case 'stats':
          await calculateStats()
          break
        case 'create':
        case 'update':
          if (formValues.value) {
            await submitMeasurement(formValues.value)
          }
          break
        case 'delete':
          if (deletingId.value) {
            await deleteMeasurement()
          }
          break
      }

      lastAction.value = null
    }

    const handleCategoryChange = async () => {
      loadingAction.value = 'filter'
      loadingMessage.value = 'Updating measurement list...'
      isLoading.value = true

      try {
        await store.dispatch('measurements/filterByCategory', selectedCategory.value)
      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.FILTER_OPERATION,
          'Failed to filter measurements',
          ErrorSeverity.LOW,
          error
        ))
      } finally {
        isLoading.value = false
      }
    }

    const handleTimeRangeChange = async () => {
      loadingAction.value = 'timeRange'
      loadingMessage.value = 'Updating time range...'
      isLoading.value = true

      try {
        await store.dispatch('measurements/filterByTimeRange', selectedTimeRange.value)
      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.FILTER_OPERATION,
          'Failed to update time range',
          ErrorSeverity.LOW,
          error
        ))
      } finally {
        isLoading.value = false
      }
    }

    const resetForm = () => {
      isEditing.value = false
      editingId.value = null
      formValues.value = {
        height: '',
        weight: '',
        chest: '',
        waist: '',
        hips: '',
        inseam: ''
      }
    }

    const formatValue = (value) => {
      return typeof value === 'number' ? value.toFixed(1) : value
    }

    const formatDate = (date) => {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    // Lifecycle hooks
    onMounted(async () => {
      await store.dispatch('loading/startLoading', {
        actionKey: 'initialization',
        message: 'Initializing measurement history...'
      })

      try {
        await fetchMeasurements()
      } catch (error) {
        await handleError(new AppError(
          ErrorTypes.INITIALIZATION,
          'Failed to initialize measurements',
          ErrorSeverity.HIGH,
          error
        ))
      } finally {
        await store.dispatch('loading/stopLoading', 'initialization')
      }
    })

    return {
      // Store state
      measurements,
      recentMeasurements,
      measurementStats,
      
      // Form state
      formValues,
      formLabels,
      schema,
      isSubmitting,
      isEditing,
      
      // Loading and error states
      error,
      isLoading,
      loadingAction,
      loadingMessage,
      
      // Modal state
      showDeleteModal,
      
      // Filter state
      selectedCategory,
      selectedTimeRange,
      categories,
      
      // Computed
      filteredMeasurements,
      
      // Methods
      submitMeasurement,
      editMeasurement,
      confirmDelete,
      deleteMeasurement,
      retryFailedAction,
      handleCategoryChange,
      handleTimeRangeChange,
      resetForm,
      formatValue,
      formatDate
    }
  }
}
</script>

<style scoped>
.container {
  min-height: calc(100vh - 64px);
}

.form-select {
  @apply rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500;
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