<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-6">Measurement Process</h1>
    
    <!-- Progress Bar -->
    <div class="mb-8">
      <div class="relative pt-1">
        <div class="flex mb-2 items-center justify-between">
          <div>
            <span class="text-xs font-semibold inline-block text-blue-600">
              Step {{ currentStep + 1 }} of {{ steps.length }}
            </span>
          </div>
        </div>
        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
          <div
            :style="{ width: `${((currentStep + 1) / steps.length) * 100}%` }"
            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-300"
          ></div>
        </div>
      </div>
    </div>

    <!-- Step Content -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4">{{ steps[currentStep] }}</h2>
      
      <!-- Step Content based on currentStep -->
      <div v-if="currentStep === 0" class="space-y-4">
        <p>Please prepare the following items:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li>Measuring tape</li>
          <li>Tight-fitting clothes</li>
          <li>Mirror</li>
          <li>Pen and paper (optional)</li>
        </ul>
      </div>

      <div v-else-if="currentStep === 1" class="space-y-4">
        <p>Take your measurements in this order:</p>
        <ul class="list-decimal pl-5 space-y-2">
          <li>Height</li>
          <li>Weight</li>
          <li>Chest</li>
          <li>Waist</li>
          <li>Hips</li>
          <li>Inseam</li>
        </ul>
      </div>

      <div v-else-if="currentStep === 2" class="space-y-4">
        <p>Review your measurements:</p>
        <!-- Add form fields for measurements here -->
      </div>

      <div v-else class="space-y-4">
        <p>Measurements completed!</p>
        <p>You can now view your personalized recommendations.</p>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <div class="flex justify-between">
      <button
        @click="prevStep"
        :disabled="currentStep === 0"
        class="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 disabled:opacity-50"
      >
        Previous
      </button>
      <button
        @click="nextStep"
        :class="currentStep === steps.length - 1 ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'"
        class="px-4 py-2 text-white rounded"
      >
        {{ currentStep === steps.length - 1 ? 'Complete' : 'Next' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeasurementProcess',
  data() {
    return {
      currentStep: 0,
      steps: [
        'Step 1: Prepare',
        'Step 2: Measure',
        'Step 3: Review',
        'Step 4: Complete',
      ]
    }
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--
      }
    }
  },
  watch: {
    currentStep: {
      handler(newStep) {
        console.log(`Moved to step ${newStep + 1}`);
      }
    }
  }
}
</script>