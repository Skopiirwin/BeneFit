// src/services/measurements.js
import api from './api'

export default {
  async getAll() {
    const response = await api.getMeasurements()
    return response.data
  },

  async getRecent() {
    try {
      const response = await api.getRecentMeasurements()
      return {
        measurements: response.data.measurements,
        stats: response.data.stats
      }
    } catch (error) {
      console.error('Error fetching recent measurements:', error)
      throw error
    }
  },

  async create(measurementData) {
    const response = await api.createMeasurement(measurementData)
    return response.data
  },

  async update(id, measurementData) {
    const response = await api.updateMeasurement(id, measurementData)
    return response.data
  },

  async delete(id) {
    const response = await api.deleteMeasurement(id)
    return response.data
  }
}