<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <template v-if="isAuthenticated">
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/measurement-process">Measurements</router-link> |
      <a href="#" @click.prevent="handleLogout">Logout</a>
    </template>
  </nav>
  <router-view/>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    
    const isAuthenticated = computed(() => store.getters['auth/isAuthenticated'])
    
    const handleLogout = async () => {
      await store.dispatch('auth/logout')
      router.push('/auth')
    }
    
    return {
      isAuthenticated,
      handleLogout
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 6px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }

    &:hover {
      color: #42b983;
    }
  }
}
</style>