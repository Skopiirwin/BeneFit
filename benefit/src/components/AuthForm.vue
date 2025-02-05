<template>
  <div class="auth-form max-w-md mx-auto p-6">
    <!-- Mode Toggle -->
    <div class="mb-4">
      <button 
        @click="switchMode('login')" 
        :class="{ 'font-bold bg-blue-500 text-white': mode === 'login' }"
        class="mr-4 px-4 py-2 rounded transition-colors"
        :disabled="isLoading"
      >
        Login
      </button>
      <button 
        @click="switchMode('register')" 
        :class="{ 'font-bold bg-blue-500 text-white': mode === 'register' }"
        class="px-4 py-2 rounded transition-colors"
        :disabled="isLoading"
      >
        Register
      </button>
    </div>
    
    <!-- Auth Form -->
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Name Field (Register Only) -->
      <div v-if="mode === 'register'" class="form-group">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input 
          type="text"
          id="name"
          v-model="formData.name"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          :disabled="isLoading"
          required
        />
      </div>

      <!-- Email Field -->
      <div class="form-group">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input 
          type="email"
          id="email"
          v-model="formData.email"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          :disabled="isLoading"
          required
        />
      </div>

      <!-- Password Field -->
      <div class="form-group">
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input 
          type="password"
          id="password"
          v-model="formData.password"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          :disabled="isLoading"
          required
        />
      </div>

      <!-- Password Confirmation (Register Only) -->
      <div v-if="mode === 'register'" class="form-group">
        <label for="password_confirmation" class="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input 
          type="password"
          id="password_confirmation"
          v-model="formData.password_confirmation"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          :disabled="isLoading"
          required
        />
      </div>
      
      <!-- Error Display -->
      <div v-if="error" 
           class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
        <span class="block sm:inline">{{ error }}</span>
      </div>
      
      <!-- Submit Button -->
      <button 
        type="submit" 
        class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        :disabled="isLoading || !isFormValid"
      >
        <span v-if="isLoading" class="inline-flex items-center justify-center">
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </span>
        <span v-else>
          {{ mode === 'login' ? 'Login' : 'Register' }}
        </span>
      </button>
    </form>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'AuthForm',
  
  setup() {
    const store = useStore()
    const router = useRouter()
    
    const mode = ref('login')
    const formData = ref({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
    const isLoading = ref(false)
    const error = ref(null)

    const resetForm = () => {
      formData.value = {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
      error.value = null
    }

    const isFormValid = computed(() => {
      const { email, password, name, password_confirmation } = formData.value
      
      if (!email || !password) return false
      
      if (mode.value === 'register') {
        return name && 
               password === password_confirmation && 
               password.length >= 6
      }
      
      return true
    })

    const switchMode = (newMode) => {
      mode.value = newMode
      resetForm()
    }

    const handleSubmit = async () => {
  if (!isFormValid.value || isLoading.value) return;
  
  error.value = null;
  isLoading.value = true;

  try {
    const action = mode.value === 'login' ? 'auth/login' : 'auth/register';
    const payload = mode.value === 'login' ? 
      {
        email: formData.value.email,
        password: formData.value.password
      } : 
      {
        email: formData.value.email,
        password: formData.value.password,
        password_confirmation: formData.value.password_confirmation,
        name: formData.value.name
      };
    
    const response = await store.dispatch(action, payload);
    
    if (response?.status === 'success') {
      const params = new URLSearchParams(window.location.search);
      const redirectPath = params.get('redirect') || '/dashboard';
      await router.push(redirectPath);
    }
  } catch (err) {
    console.error('Authentication error:', err);
    error.value = err.message || 'Authentication failed';
  } finally {
    isLoading.value = false;
  }
};

    watch(mode, () => {
      error.value = null
    })

    return {
      mode,
      formData,
      isLoading,
      error,
      isFormValid,
      switchMode,
      handleSubmit
    }
  }
}
</script>

<style scoped>
.auth-form {
  max-width: 400px;
  margin: 2rem auto;
}

.form-group {
  margin-bottom: 1rem;
}
</style>