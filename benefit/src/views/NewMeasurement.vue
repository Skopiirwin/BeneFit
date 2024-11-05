<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">New Measurement</h1>
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-gray-700">Height (cm)</label>
          <input 
            type="number" 
            v-model="measurement.height"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700">Weight (kg)</label>
          <input 
            type="number" 
            v-model="measurement.weight"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Chest (cm)</label>
          <input 
            type="number" 
            v-model="measurement.chest"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Waist (cm)</label>
          <input 
            type="number" 
            v-model="measurement.waist"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Hips (cm)</label>
          <input 
            type="number" 
            v-model="measurement.hips"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Inseam (cm)</label>
          <input 
            type="number" 
            v-model="measurement.inseam"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div class="flex justify-end space-x-4">
        <button
          type="button"
          @click="$router.push('/dashboard')"
          class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'Saving...' : 'Save Measurement' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import measurementsService from '@/services/measurements'

export default {
  name: 'NewMeasurement',
  
  setup() {
    const router = useRouter()
    const isSubmitting = ref(false)
    const measurement = ref({
      height: null,
      weight: null,
      chest: null,
      waist: null,
      hips: null,
      inseam: null
    })

    const handleSubmit = async () => {
      isSubmitting.value = true
      try {
        await measurementsService.create(measurement.value)
        router.push('/dashboard')
      } catch (error) {
        console.error('Failed to save measurement:', error)
      } finally {
        isSubmitting.value = false
      }
    }

    return {
      measurement,
      isSubmitting,
      handleSubmit
    }
  }
}
</script>