<template>
  <div>
    <h2>Add Measurement</h2>
    <form @submit.prevent="submitMeasurement">
      <input v-model="measurement.height" type="number" placeholder="Height">
      <input v-model="measurement.weight" type="number" placeholder="Weight">
      <input v-model="measurement.chest" type="number" placeholder="Chest">
      <input v-model="measurement.waist" type="number" placeholder="Waist">
      <input v-model="measurement.hips" type="number" placeholder="Hips">
      <button type="submit">Save Measurement</button>
    </form>
  </div>
</template>

<script>
import api from '@/services/api'

export default {
  props: ['userId'],
  data() {
    return {
      measurement: {
        height: null,
        weight: null,
        chest: null,
        waist: null,
        hips: null
      }
    }
  },
  methods: {
    async submitMeasurement() {
      try {
        await api.createMeasurement(this.userId, this.measurement)
        this.$emit('measurement-added')
        this.resetForm()
      } catch (error) {
        console.error('Error creating measurement:', error)
      }
    },
    resetForm() {
      this.measurement = {
        height: null,
        weight: null,
        chest: null,
        waist: null,
        hips: null
      }
    }
  }
}
</script>