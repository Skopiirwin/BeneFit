<template>
  <div class="home">
    <h1 class="title">WELCOME TO BENEFIT</h1>
    <div class="content">
      <section class="hero">
        <h2 class="subtitle">Get Your Perfect Fit</h2>
        <p class="description">Discover your exact measurements using our advanced technology</p>
        <router-link 
          to="/measurement-process" 
          class="cta-button"
          :class="{ 'loading': isLoading }"
          @click="handleClick"
        >
          {{ buttonText }}
        </router-link>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  name: 'HomeView',
  setup() {
    const router = useRouter();
    const store = useStore();
    const isLoading = ref(false);
    const buttonText = ref('Start Measurement');

    const handleClick = async () => {
      isLoading.value = true;
      buttonText.value = 'Loading...';
      
      try {
        // Reset any previous measurement state
        await store.dispatch('measurements/resetMeasurementProcess');
        
        // Check authentication state
        const isAuthenticated = store.getters['auth/isAuthenticated'];
        
        if (!isAuthenticated) {
          // If not authenticated, redirect to auth page
          await router.push({ 
            name: 'auth', // lowercase to match route definition
            query: { redirect: '/measurement-process' } 
          });
        } else {
          // If authenticated, go directly to measurement process
          await router.push('/measurement-process');
        }
      } catch (error) {
        console.error('Navigation error:', error);
        isLoading.value = false;
        buttonText.value = 'Start Measurement';
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(() => {
      console.log('HomeView component mounted');
    });

    return {
      isLoading,
      buttonText,
      handleClick
    };
  }
};
</script>

<style scoped>
.home {
  padding: 2rem;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  margin: 2.5rem 0;
  padding: 2rem;
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  color: #42b983;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.subtitle {
  color: #2c3e50;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.description {
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.cta-button {
  display: inline-block;
  background-color: #42b983;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 1.25rem;
  transition: all 0.3s ease;
  font-weight: 600;
  border: 2px solid transparent;
}

.cta-button:hover {
  background-color: #3aa876;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(66, 185, 131, 0.2);
}

.cta-button:active {
  transform: translateY(0);
}

.cta-button.loading {
  opacity: 0.8;
  cursor: wait;
  background-color: #666;
}

@media (max-width: 768px) {
  .home {
    padding: 1rem;
  }

  .title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.5rem;
  }

  .description {
    font-size: 1rem;
    padding: 0 1rem;
  }
}
</style>