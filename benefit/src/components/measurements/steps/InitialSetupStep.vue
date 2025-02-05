<template>
  <div class="space-y-6">
    <!-- Type Selection -->
    <div class="bg-white rounded-lg shadow-sm p-6">
      <h3 class="text-lg font-medium text-gray-900 mb-4">
        Select Measurement Type
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          v-for="type in measurementTypes"
          :key="type.id"
          @click="selectType(type.id)"
          :class="[
            'p-4 rounded-lg border-2 transition-all duration-200',
            selectedType === type.id
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-blue-200'
          ]"
        >
          <div class="flex flex-col items-center space-y-2">
            <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <component
                :is="type.icon"
                class="h-6 w-6 text-blue-600"
              />
            </div>
            <span class="font-medium text-gray-900">{{ type.label }}</span>
            <p class="text-sm text-gray-500 text-center">{{ type.description }}</p>
          </div>
        </button>
      </div>
    </div>

    <!-- Camera Status -->
    <div class="bg-gray-50 rounded-lg p-6">
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <svg v-if="isCameraReady" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <svg v-else class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div class="ml-3 flex-1">
          <h3 class="text-lg font-medium text-gray-900">
            Camera Status
          </h3>
          <p class="mt-2 text-sm text-gray-600">
            {{ isCameraReady ? 'Camera detected and ready' : 'Camera access required' }}
          </p>
          <div class="mt-4">
            <button
              @click="checkCamera"
              :disabled="isLoading"
              class="w-full sm:w-auto px-4 py-2 flex items-center justify-center space-x-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              <span v-if="isLoading" class="flex items-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Checking Camera...
              </span>
              <span v-else>{{ isCameraReady ? 'Recheck Camera' : 'Check Camera Access' }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Setup Instructions -->
    <div class="bg-white rounded-lg shadow-sm p-6">
      <h3 class="text-lg font-medium text-gray-900 mb-4">
        Before we begin
      </h3>
      <div class="space-y-4">
        <div class="flex items-center space-x-3">
          <div class="flex-shrink-0">
            <div class="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
              <svg class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
          <p class="text-gray-600">Ensure you're in a well-lit room</p>
        </div>

        <div class="flex items-center space-x-3">
          <div class="flex-shrink-0">
            <div class="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
              <svg class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
          <p class="text-gray-600">Clear your background of any distractions</p>
        </div>

        <div class="flex items-center space-x-3">
          <div class="flex-shrink-0">
            <div class="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
              <svg class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
              </svg>
            </div>
          </div>
          <p class="text-gray-600">Wear fitted clothing for accurate measurements</p>
        </div>
      </div>
    </div>

    <!-- Continue Button -->
    <div class="flex justify-end">
      <button
        @click="continueToNextStep"
        :disabled="!canContinue"
        class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Continue
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { 
  EyeIcon, 
  ShoppingBagIcon, 
  ClockIcon
} from '@heroicons/vue/24/outline';

export default {
  name: 'InitialSetupStep',

  components: {
    GlassesIcon: EyeIcon,
    ShoeIcon: ShoppingBagIcon,
    WatchIcon: ClockIcon
  },
  
  props: {
    isCameraReady: {
      type: Boolean,
      default: false
    }
  },

  emits: ['check-camera', 'type-selected', 'continue'],

  setup(props, { emit }) {
    const store = useStore();
    const router = useRouter();
    const isLoading = ref(false);
    const selectedType = ref(null);
    const cameraChecked = ref(false);

    const measurementTypes = [
      {
        id: 'body',
        label: 'Body Scan',
        description: 'Full body measurements for clothing',
        icon: 'UserIcon', // We'll import this
        path: 'body',
        primary: true
      },
      {
        id: 'eyewear',
        label: 'Eyewear',
        description: 'Measure for glasses and sunglasses',
        icon: 'GlassesIcon',
        path: 'eyewear'
      },
      {
        id: 'footwear',
        label: 'Footwear',
        description: 'Measure for shoes and boots',
        icon: 'ShoeIcon',
        path: 'footwear'
      },
      {
        id: 'accessory',
        label: 'Accessory',
        description: 'Measure for watches and bracelets',
        icon: 'WatchIcon',
        path: 'accessory'
      }
    ];

    // Computed property for enabling/disabling continue button
    const canContinue = computed(() => {
      const measurementTypeSelected = selectedType.value !== null;
      const cameraIsReady = store.state.measurements.cameraReady;
      const typeConfirmed = store.state.measurements.selectedType !== null;

      return measurementTypeSelected && cameraIsReady && typeConfirmed;
    });

    const selectType = async (type) => {
      selectedType.value = type;
      await store.dispatch('measurements/selectMeasurementType', type);
      // Force a state update to ensure button reactivity
      await store.dispatch('measurements/updateCameraState', props.isCameraReady);
      emit('type-selected', type);
    };

    const checkCamera = async () => {
      isLoading.value = true;
      try {
        emit('check-camera');
        cameraChecked.value = true;
      } catch (error) {
        console.error('Camera check failed:', error);
        cameraChecked.value = false;
      } finally {
        isLoading.value = false;
      }
    };

    const continueToNextStep = async () => {
      if (!canContinue.value) return;

      try {
        await store.dispatch('measurements/setStep', 1);
        emit('continue');
        await router.push('/measurement-process/calibration');
      } catch (error) {
        console.error('Navigation error:', error);
      }
    };

    // Lifecycle hooks
    onMounted(async () => {
      // Reset state on mount
      selectedType.value = store.state.measurements.selectedType;
      cameraChecked.value = false;
    });

    onBeforeUnmount(() => {
      // Clean up any resources if needed
    });

    return {
      selectedType,
      measurementTypes,
      isLoading,
      canContinue,
      selectType,
      checkCamera,
      continueToNextStep
    };
  }
};
</script>

<style scoped>
.measurement-type-card {
  transition: all 0.3s ease;
}

.measurement-type-card:hover {
  transform: translateY(-2px);
}
</style>