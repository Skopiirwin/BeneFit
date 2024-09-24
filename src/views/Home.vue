<template>
  <div class="home">
    <h1>Welcome to BeneFit</h1>
    <UserList />
    <MeasurementForm :userId="1" @measurement-added="handleMeasurementAdded" />
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue'
import MeasurementForm from '@/components/MeasurementForm.vue'

export default {
  name: 'Home',
  components: {
    UserList,
    MeasurementForm
  },
  methods: {
    handleMeasurementAdded() {
      console.log('Measurement added successfully')
      // You might want to refresh the user list or show a success message here
    }
  }
}
</script>