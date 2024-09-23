import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL || 'http://localhost:3000/api'

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

export default {
  // Users
  getUsers() {
    return apiClient.get('/users')
  },
  getUser(id) {
    return apiClient.get(`/users/${id}`)
  },
  createUser(user) {
    return apiClient.post('/users', user)
  },
  updateUser(id, user) {
    return apiClient.put(`/users/${id}`, user)
  },
  deleteUser(id) {
    return apiClient.delete(`/users/${id}`)
  },

  // Measurements
  getMeasurements(userId) {
    return apiClient.get(`/users/${userId}/measurements`)
  },
  createMeasurement(userId, measurement) {
    return apiClient.post(`/users/${userId}/measurements`, measurement)
  },
  updateMeasurement(userId, measurementId, measurement) {
    return apiClient.put(`/users/${userId}/measurements/${measurementId}`, measurement)
  },
  deleteMeasurement(userId, measurementId) {
    return apiClient.delete(`/users/${userId}/measurements/${measurementId}`)
  }
}