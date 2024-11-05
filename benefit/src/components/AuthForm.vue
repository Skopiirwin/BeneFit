<template>
  <div class="auth-form max-w-md mx-auto p-6">
    <div class="mb-4">
      <button 
        @click="mode = 'login'" 
        :class="{ 'font-bold bg-blue-500 text-white': mode === 'login' }"
        class="mr-4 px-4 py-2 rounded transition-colors"
        :disabled="isLoading"
      >
        Login
      </button>
      <button 
        @click="mode = 'register'" 
        :class="{ 'font-bold bg-blue-500 text-white': mode === 'register' }"
        class="px-4 py-2 rounded transition-colors"
        :disabled="isLoading"
      >
        Register
      </button>
    </div>
    
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div v-if="mode === 'register'" class="form-group">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input 
          type="text"
          id="name"
          v-model="formData.name"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div class="form-group">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input 
          type="email"
          id="email"
          v-model="formData.email"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div class="form-group">
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input 
          type="password"
          id="password"
          v-model="formData.password"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div v-if="mode === 'register'" class="form-group">
        <label for="password_confirmation" class="block text-sm font-medium text-gray-700">Confirm Password</label>
        <input 
          type="password"
          id="password_confirmation"
          v-model="formData.password_confirmation"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      
      <div v-if="error" class="text-red-500 p-2 rounded bg-red-50">
        {{ error }}
      </div>
      
      <button 
        type="submit" 
        class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50 transition-colors"
        :disabled="isLoading || !isFormValid"
      >
        <span v-if="isLoading">Loading...</span>
        <span v-else>{{ mode === 'login' ? 'Login' : 'Register' }}</span>
      </button>
    </form>

    <!-- Persistent error display -->
    <div v-if="error" class="mt-4 p-3 bg-red-100 text-red-700 rounded">
      {{ error }}
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

export default {
  name: 'AuthForm',
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const mode = ref('login');
    const formData = ref({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    });

    const error = ref(null);
    const isLoading = ref(false);

    const isFormValid = computed(() => {
      if (!formData.value.email || !formData.value.password) return false;
      if (mode.value === 'register') {
        return formData.value.name && 
               formData.value.password === formData.value.password_confirmation;
      }
      return true;
    });

    const handleSubmit = async () => {
      if (!isFormValid.value) return;
      
      try {
        isLoading.value = true;
        error.value = null;

        if (mode.value === 'login') {
          const credentials = {
            email: formData.value.email,
            password: formData.value.password
          };

          console.log('Sending login request with:', credentials);
          await store.dispatch('auth/login', credentials);
          
          // Clear form data after successful login
          formData.value = {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
          };

          // Redirect after successful login
          const redirectPath = route.query.redirect || '/dashboard';
          await router.push(redirectPath);
        } else {
          const registerData = {
            name: formData.value.name,
            email: formData.value.email,
            password: formData.value.password,
            password_confirmation: formData.value.password_confirmation
          };

          console.log('Sending register request with:', registerData);
          await store.dispatch('auth/register', registerData);

          // Clear form data after successful registration
          formData.value = {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
          };

          // Redirect after successful registration
          const redirectPath = route.query.redirect || '/dashboard';
          await router.push(redirectPath);
        }
      } catch (err) {
        console.error('Auth error:', err);
        console.error('Error response:', err.response?.data);
        error.value = err.response?.data?.errors?.[0] || 
                     err.response?.data?.error || 
                     'Authentication failed';
      } finally {
        isLoading.value = false;
      }
    };

    // Clear error when changing modes
    const clearError = () => {
      error.value = null;
    };

    // Watch for mode changes to clear error
    watch(mode, () => {
      clearError();
    });

    return {
      mode,
      formData,
      error,
      isLoading,
      isFormValid,
      handleSubmit
    };
  }
};
</script>

<style scoped>
.auth-form {
  max-width: 400px;
  margin: 2rem auto;
}

.form-group {
  margin-bottom: 1rem;
}

.error-message {
  color: #ef4444;
  margin-top: 0.5rem;
  font-size: 0.875rem;
}
</style>