<template>
  <div class="measurement-detail max-w-4xl mx-auto p-6">
    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center items-center h-64">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="bg-red-50 p-4 rounded-lg">
      <p class="text-red-700">{{ error }}</p>
      <button 
        @click="fetchMeasurement" 
        class="mt-4 px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200"
      >
        Retry
      </button>
    </div>

    <!-- Content -->
    <div v-else-if="measurement" class="space-y-6">
      <!-- Header -->
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-900">
          {{ measurementTypeLabel }} Measurement Details
        </h1>
        <div class="flex items-center space-x-4">
          <span class="text-sm text-gray-500">
            Taken on {{ formatDate(measurement.created_at) }}
          </span>
          <button 
            @click="$router.push('/measurement-process')" 
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            New Measurement
          </button>
        </div>
      </div>

      <!-- Measurement Summary -->
      <div class="bg-white rounded-lg shadow-sm p-6">
        <h2 class="text-lg font-medium text-gray-900 mb-4">Summary</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
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
      </div>

      <!-- Type-Specific Content -->
      <div v-if="measurement.type === 'eyewear'" class="space-y-6">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-lg font-medium text-gray-900 mb-4">Face Analysis</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <h3 class="font-medium text-gray-900">Face Shape</h3>
              <p class="text-gray-600">{{ measurement.faceShape }}</p>
              <div class="mt-4">
                <h4 class="text-sm font-medium text-gray-900">Recommended Frames</h4>
                <ul class="mt-2 space-y-1">
                  <li v-for="style in measurement.recommendedStyles" 
                      :key="style" 
                      class="text-gray-600"
                  >
                    {{ style }}
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 class="font-medium text-gray-900 mb-2">Measurements</h3>
              <ul class="space-y-2">
                <li v-for="(value, key) in measurement.faceMeasurements" 
                    :key="key" 
                    class="flex justify-between"
                >
                  <span class="text-gray-600">{{ formatLabel(key) }}</span>
                  <span class="font-medium">{{ formatValue(value) }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="measurement.type === 'footwear'" class="space-y-6">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-lg font-medium text-gray-900 mb-4">Shoe Sizing</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h3 class="font-medium text-gray-900 mb-2">Size Recommendations</h3>
                <ul class="space-y-2">
                  <li v-for="(size, system) in measurement.sizes" 
                      :key="system" 
                      class="flex justify-between"
                  >
                    <span class="text-gray-600">{{ system.toUpperCase() }}</span>
                    <span class="font-medium">{{ size }}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="font-medium text-gray-900 mb-2">Arch Type</h3>
                <p class="text-gray-600">{{ measurement.archType }}</p>
                <p class="text-sm text-gray-500 mt-1">
                  {{ getArchTypeDescription(measurement.archType) }}
                </p>
              </div>
            </div>
            <div>
              <h3 class="font-medium text-gray-900 mb-2">Measurements</h3>
              <ul class="space-y-2">
                <li v-for="(value, key) in measurement.footMeasurements" 
                    :key="key" 
                    class="flex justify-between"
                >
                  <span class="text-gray-600">{{ formatLabel(key) }}</span>
                  <span class="font-medium">{{ formatValue(value) }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="measurement.type === 'accessory'" class="space-y-6">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-lg font-medium text-gray-900 mb-4">Size Recommendations</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <h3 class="font-medium text-gray-900 mb-2">Watch Size</h3>
                <p class="text-gray-600">{{ measurement.recommendations.watch.sizeCategory }}</p>
                <ul class="mt-2 space-y-1 text-sm text-gray-500">
                  <li>Case Size: {{ measurement.recommendations.watch.caseSize }}mm</li>
                  <li>Band Width: {{ measurement.recommendations.watch.bandWidth }}mm</li>
                </ul>
              </div>
              <div>
                <h3 class="font-medium text-gray-900 mb-2">Bracelet Size</h3>
                <p class="text-gray-600">
                  {{ measurement.recommendations.bracelet.standardSize }}"
                </p>
              </div>
            </div>
            <div>
              <h3 class="font-medium text-gray-900 mb-2">Measurements</h3>
              <ul class="space-y-2">
                <li v-for="(value, key) in measurement.wristMeasurements" 
                    :key="key" 
                    class="flex justify-between"
                >
                  <span class="text-gray-600">{{ formatLabel(key) }}</span>
                  <span class="font-medium">{{ formatValue(value) }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex justify-between pt-6">
        <button 
          @click="$router.back()" 
          class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Back
        </button>
        <div class="space-x-4">
          <button 
            @click="deleteMeasurement" 
            class="px-4 py-2 border border-red-300 text-red-700 rounded-md hover:bg-red-50"
          >
            Delete
          </button>
          <button 
            @click="exportMeasurement" 
            class="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900"
          >
            Export
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { measurementService } from '@/services/measurements'

export default {
  name: 'MeasurementDetail',
  
  props: {
    type: {
      type: String,
      required: true
    },
    id: {
      type: [String, Number],
      required: true
    }
  },

  setup(props) {
    const route = useRoute()
    const router = useRouter()
    const measurement = ref(null)
    const loading = ref(true)
    const error = ref(null)

    const measurementTypeLabel = computed(() => {
      const labels = {
        eyewear: 'Eyewear',
        footwear: 'Footwear',
        accessory: 'Accessory'
      }
      return labels[props.type] || 'Unknown'
    })

    const displayMeasurements = computed(() => {
      if (!measurement.value) return {}
      
      // Filter and format measurements based on type
      const commonMeasurements = {
        height: measurement.value.height,
        weight: measurement.value.weight
      }

      return {
        ...commonMeasurements,
        ...measurement.value[`${props.type}Measurements`]
      }
    })

    const fetchMeasurement = async () => {
      loading.value = true
      error.value = null
      
      try {
        const response = await measurementService.getById(props.id)
        measurement.value = response.data
      } catch (err) {
        error.value = 'Failed to load measurement details'
        console.error('Error fetching measurement:', err)
      } finally {
        loading.value = false
      }
    }

    const deleteMeasurement = async () => {
      if (!confirm('Are you sure you want to delete this measurement?')) return
      
      try {
        await measurementService.delete(props.id)
        router.push('/measurements')
      } catch (err) {
        console.error('Error deleting measurement:', err)
      }
    }

    const exportMeasurement = () => {
      const data = JSON.stringify(measurement.value, null, 2)
      const blob = new Blob([data], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `measurement-${props.type}-${props.id}.json`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }

    const formatLabel = (key) => {
      return key
        .replace(/([A-Z])/g, ' $1')
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }

    const formatValue = (value) => {
      if (typeof value !== 'number') return value
      return `${value.toFixed(1)} mm`
    }

    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }

    const getArchTypeDescription = (type) => {
      const descriptions = {
        low: 'Flat feet with minimal arch height',
        medium: 'Normal arch with balanced support',
        high: 'High arch with reduced ground contact'
      }
      return descriptions[type] || ''
    }

    onMounted(fetchMeasurement)

    return {
      measurement,
      loading,
      error,
      measurementTypeLabel,
      displayMeasurements,
      deleteMeasurement,
      exportMeasurement,
      formatLabel,
      formatValue,
      formatDate,
      getArchTypeDescription
    }
  }
}
</script>

<style scoped>
.measurement-detail {
  min-height: calc(100vh - 64px);
}
</style>