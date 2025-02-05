// src/components/measurement/steps/CompletionStep.vue
<template>
  <div class="space-y-6">
    <!-- Success Message -->
    <div class="text-center py-8">
      <div class="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
        <svg class="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      
      <h2 class="mt-4 text-2xl font-bold text-gray-900">
        Measurements Complete!
      </h2>
      
      <p class="mt-2 text-gray-600">
        Your measurements have been successfully processed and saved.
      </p>
    </div>

    <!-- Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Measurement Summary -->
      <div class="bg-white rounded-lg shadow-sm p-6">
        <h3 class="text-lg font-medium text-gray-900 mb-4">
          Your Measurements
        </h3>
        
        <div class="space-y-3">
          <div v-for="(value, key) in measurements" 
               :key="key"
               class="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
          >
            <span class="text-sm text-gray-600">{{ formatLabel(key) }}</span>
            <span class="font-medium text-gray-900">{{ formatValue(value) }}</span>
          </div>
        </div>
      </div>

      <!-- Size Recommendations -->
      <div class="bg-white rounded-lg shadow-sm p-6">
        <h3 class="text-lg font-medium text-gray-900 mb-4">
          Recommended Sizes
        </h3>
        
        <div class="space-y-3">
          <div v-for="(rec, index) in recommendations" 
               :key="index"
               class="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
          >
            <span class="text-sm text-gray-600">{{ rec.category }}</span>
            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                  :class="getSizeClass(rec.confidence)"
            >
              {{ rec.size }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Next Steps -->
    <div class="bg-white rounded-lg shadow-sm p-6">
      <h3 class="text-lg font-medium text-gray-900 mb-4">
        Next Steps
      </h3>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="(step, index) in nextSteps" 
             :key="index"
             class="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg"
        >
          <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
            <component :is="step.icon" 
                      class="w-6 h-6 text-blue-600"
            />
          </div>
          <h4 class="font-medium text-gray-900 mb-2">{{ step.title }}</h4>
          <p class="text-sm text-gray-600">{{ step.description }}</p>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      <button @click="viewDashboard"
              class="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
      >
        <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
        View Dashboard
      </button>

      <button @click="browseClothing"
              class="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-blue-600 bg-blue-100 hover:bg-blue-200"
      >
        <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        Browse Clothing
      </button>
    </div>

    <!-- Share Results -->
    <div class="text-center">
      <button @click="shareResults"
              class="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
      >
        <svg class="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
        Share Results
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { 
  ChartBarIcon, 
  ShoppingBagIcon, 
  UserGroupIcon 
} from '@heroicons/vue/outline';

export default {
  name: 'CompletionStep',

  components: {
    ChartBarIcon,
    ShoppingBagIcon,
    UserGroupIcon
  },

  props: {
    measurements: {
      type: Object,
      required: true
    },
    recommendations: {
      type: Array,
      default: () => []
    }
  },

  emits: ['view-dashboard', 'browse-clothing', 'share'],

  setup(props, { emit }) {
    const router = useRouter();
    const store = useStore();
    const showSuccessModal = ref(false);
    const shareAttempted = ref(false);

    // Computed properties for measurement analysis
    const measurementCompletion = computed(() => {
      const requiredFields = ['height', 'weight', 'chest', 'waist', 'hips', 'inseam'];
      const completedFields = requiredFields.filter(field => 
        props.measurements[field] !== undefined && props.measurements[field] !== null
      );
      return (completedFields.length / requiredFields.length) * 100;
    });

    const nextSteps = computed(() => [
      {
        icon: 'ChartBarIcon',
        title: 'Track Progress',
        description: 'Monitor your measurements over time in the dashboard.',
        action: viewDashboard
      },
      {
        icon: 'ShoppingBagIcon',
        title: 'Shop Confidently',
        description: 'Use your measurements to find the perfect fit.',
        action: browseClothing
      },
      {
        icon: 'UserGroupIcon',
        title: 'Get Recommendations',
        description: 'Receive personalized style and size suggestions.',
        action: viewRecommendations
      }
    ]);

    // Navigation methods using router
    const viewDashboard = () => {
      emit('view-dashboard');
      router.push('/dashboard');
    };

    const browseClothing = () => {
      emit('browse-clothing');
      router.push('/clothing-items');
    };

    const viewRecommendations = () => {
      router.push('/recommendations');
    };

    // Save measurements to store before proceeding
    const saveMeasurements = async () => {
      try {
        await store.dispatch('measurements/saveMeasurement', props.measurements);
        showSuccessModal.value = true;
      } catch (error) {
        console.error('Error saving measurements:', error);
      }
    };

    // Sharing functionality
    const shareResults = async () => {
      try {
        if (navigator.share) {
          await navigator.share({
            title: 'My Measurements',
            text: generateShareText(),
            url: window.location.href
          });
          shareAttempted.value = true;
          emit('share');
        } else {
          // Fallback to clipboard
          await copyToClipboard();
        }
      } catch (error) {
        console.error('Error sharing results:', error);
      }
    };

    const generateShareText = () => {
      return Object.entries(props.measurements)
        .map(([key, value]) => `${formatLabel(key)}: ${formatValue(value)}`)
        .join('\n');
    };

    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(generateShareText());
        showSuccessModal.value = true;
      } catch (error) {
        console.error('Error copying to clipboard:', error);
      }
    };

    // Utility functions
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

    return {
      measurementCompletion,
      nextSteps,
      showSuccessModal,
      shareAttempted,
      viewDashboard,
      browseClothing,
      viewRecommendations,
      shareResults,
      saveMeasurements,
      formatLabel,
      formatValue
    };
  }
};
</script>