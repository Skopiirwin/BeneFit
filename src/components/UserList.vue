<template>
  <div>
    <h2>Users</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/services/api'

export default {
  data() {
    return {
      users: []
    }
  },
  async created() {
    try {
      const response = await api.getUsers()
      this.users = response.data
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }
}
</script>