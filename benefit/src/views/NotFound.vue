<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
    <div class="max-w-md w-full space-y-8 text-center">
      <!-- 404 Icon -->
      <div class="mx-auto h-24 w-24 text-gray-400">
        <svg class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      <!-- Error Message -->
      <div>
        <h1 class="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
          404
        </h1>
        <h2 class="mt-2 text-lg font-medium text-gray-600">
          Page Not Found
        </h2>
        <p class="mt-4 text-base text-gray-500">
          Sorry, we couldn't find the page you're looking for.
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="mt-10 space-y-4">
        <button 
          @click="goBack"
          class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          Go Back
        </button>
        <router-link 
          to="/"
          class="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          Return Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  
  methods: {
    goBack() {
      if (window.history.length > 2) {
        this.$router.go(-1);
      } else {
        this.$router.push('/');
      }
    }
  }
}
</script>