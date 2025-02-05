// components/shared/LoadingIndicator.vue
<template>
  <div 
    v-if="isLoading"
    class="loading-indicator flex items-center justify-center"
  >
    <div class="flex flex-col items-center">
      <div :class="spinnerClasses"></div>
      <p v-if="displayMessage" class="mt-2 text-sm text-gray-600">
        {{ displayMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'LoadingIndicator',
  
  props: {
    actionKey: {
      type: String,
      default: null
    },
    message: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium',
      validator: value => ['small', 'medium', 'large'].includes(value)
    }
  },

  setup(props) {
    const store = useStore()
    
    const isLoading = computed(() => 
      props.actionKey 
        ? store.getters['loading/getLoadingState'](props.actionKey)
        : store.getters['loading/isLoading']
    )

    const displayMessage = computed(() => 
      props.message || 
      (props.actionKey && store.getters['loading/getLoadingMessage'](props.actionKey)) || 
      'Loading...'
    )

    const spinnerClasses = computed(() => {
      const sizes = {
        small: 'h-4 w-4',
        medium: 'h-8 w-8',
        large: 'h-12 w-12'
      }
      
      return `animate-spin rounded-full border-2 border-gray-200 border-t-blue-600 ${sizes[props.size]}`
    })

    return {
      isLoading,
      displayMessage,
      spinnerClasses
    }
  }
}
</script>

<style scoped>
.loading-indicator {
  min-height: 40px;
}
</style>