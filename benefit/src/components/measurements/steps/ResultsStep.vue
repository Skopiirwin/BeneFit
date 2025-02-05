<template>
  <div class="space-y-6">
    <!-- Summary Card -->
    <div class="bg-white rounded-lg shadow-sm p-6">
      <h3 class="text-lg font-medium text-gray-900 mb-4">
        Measurement Summary
      </h3>

      <!-- Measurement Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(value, key) in measurements" 
             :key="key"
             class="bg-gray-50 rounded-lg p-4"
        >
          <div class="flex justify-between items-center">
            <span class="text-sm font-medium text-gray-500">
              {{ formatLabel(key) }}
            </span>
            <div class="flex items-center space-x-2">
              <span class="text-lg font-semibold text-gray-900">
                {{ formatValue(value) }}
              </span>
              <!-- Change Indicator -->
              <div v-if="comparison && comparison[key]" 
                   class="flex items-center"
                   :class="getChangeColor(comparison[key].change)"
              >
                <svg v-if="comparison[key].change > 0" 
                     class="w-4 h-4" 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke="currentColor"
                >
                  <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
                <svg v-else-if="comparison[key].change < 0" 
                     class="w-4 h-4" 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke="currentColor"
                >
                  <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                <span class="text-sm ml-1">
                  {{ Math.abs(comparison[key].change).toFixed(1) }}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Analysis Card -->
    <div v-if="analysis" class="bg-white rounded-lg shadow-sm p-6">
      <h3 class="text-lg font-medium text-gray-900 mb-4">
        Measurement Analysis
      </h3>

      <!-- Trends -->
      <div class="space-y-4">
        <div v-for="(trend, key) in analysis.trends" 
             :key="key"
             class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
        >
          <span class="text-sm text-gray-600">{{ formatLabel(key) }}</span>
          <div class="flex items-center space-x-2">
            <div class="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div class="h-full bg-blue-600 rounded-full"
                   :style="{ width: `${trend.progress}%` }">
              </div>
            </div>
            <span class="text-sm font-medium" 
                  :class="getTrendClass(trend.direction)">
              {{ trend.value }}
            </span>
          </div>
        </div>
      </div>

      <!-- Recommendations -->
      <div class="mt-6">
        <h4 class="text-sm font-medium text-gray-900 mb-3">
          Recommendations
        </h4>
        <ul class="space-y-2">
          <li v-for="(rec, index) in analysis.recommendations" 
              :key="index"
              class="flex items-start space-x-3"
          >
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-500" 
                   fill="none" 
                   viewBox="0 0 24 24" 
                   stroke="currentColor"
              >
                <path stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2" 
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span class="text-sm text-gray-600">{{ rec }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex justify-between">
      <button @click="retakeMeasurements"
              class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        <span>Retake Measurements</span>
      </button>

      <button @click="saveResults"
              class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center space-x-2"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
          />
        </svg>
        <span>Save Results</span>
      </button>
    </div>

    <!-- Success Modal -->
    <div v-if="showSuccessModal"
         class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
        <div class="text-center">
          <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg class="h-6 w-6 text-green-600" 
                 fill="none" 
                 viewBox="0 0 24 24" 
                 stroke="currentColor"
            >
              <path stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 class="mt-4 text-lg font-medium text-gray-900">
            Measurements Saved Successfully
          </h3>
          <p class="mt-2 text-sm text-gray-500">
            Your measurements have been saved and are ready for use in size recommendations.
          </p>
          <div class="mt-6">
            <button @click="viewDashboard"
                    class="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              View Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  name: 'ResultsStep',

  props: {
    measurements: {
      type: Object,
      required: true
    },
    comparison: {
      type: Object,
      default: null
    },
    analysis: {
      type: Object,
      default: null
    }
  },

  emits: ['retake', 'save', 'view-dashboard'],

  setup(props, { emit }) {
    const router = useRouter();
    const store = useStore();
    const showSuccessModal = ref(false);

    const significantChanges = computed(() => {
      if (!props.comparison) return [];
      
      return Object.entries(props.comparison)
        .filter(([key]) => Math.abs(props.comparison[key].change) > 2)
        .map(([key]) => ({
          measurement: formatLabel(key),
          change: props.comparison[key].change.toFixed(1),
          isPositive: props.comparison[key].change > 0
        }));
    });

    const measurementTrends = computed(() => {
      if (!props.analysis?.trends) return [];
      
      return Object.entries(props.analysis.trends).map(([key, trend]) => ({
        label: formatLabel(key),
        value: trend.value,
        direction: trend.direction,
        significance: trend.significance,
        confidence: calculateTrendConfidence(trend)
      }));
    });

    const calculateTrendConfidence = (trend) => {
      if (!trend.value) return 0;
      const magnitude = Math.abs(parseFloat(trend.value));
      return Math.min(magnitude * 10, 100);
    };

    const formatLabel = (key) => {
      return key
        .replace(/([A-Z])/g, ' $1')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    };

    const formatValue = (value) => {
      return typeof value === 'number' ? `${value.toFixed(1)} cm` : value;
    };

    const getChangeColor = (change) => {
      const value = parseFloat(change);
      if (value > 0) return 'text-green-600';
      if (value < 0) return 'text-red-600';
      return 'text-gray-600';
    };

    const getTrendClass = (direction) => {
      switch (direction) {
        case 'increasing': return 'text-green-600';
        case 'decreasing': return 'text-red-600';
        default: return 'text-gray-600';
      }
    };

    const retakeMeasurements = async () => {
      emit('retake');
      await router.push('/measurement-process/capture');
    };

    const saveResults = async () => {
      await store.dispatch('measurements/saveMeasurement', props.measurements);
      showSuccessModal.value = true;
      emit('save');
    };

    const viewDashboard = () => {
      emit('view-dashboard');
      router.push('/dashboard');
    };

    return {
      showSuccessModal,
      significantChanges,
      measurementTrends,
      formatLabel,
      formatValue,
      getChangeColor,
      getTrendClass,
      retakeMeasurements,
      saveResults,
      viewDashboard
    };
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>