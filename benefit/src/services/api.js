// src/services/api.js
import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL || 'http://localhost:3000'

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true
})

// Add auth token interceptor
apiClient.interceptors.request.use(config => {
  const authHeaders = JSON.parse(localStorage.getItem('auth-headers') || '{}')
  return {
    ...config,
    headers: {
      ...config.headers,
      ...authHeaders
    }
  }
})

export default {
  // Measurements
  getMeasurements() {
    return apiClient.get('/api/v1/user_measurements')
  },
  getRecentMeasurements() {
    return apiClient.get('/api/v1/user_measurements/recent')
  },
  createMeasurement(measurement) {
    return apiClient.post('/api/v1/user_measurements', { user_measurement: measurement })
  },
  updateMeasurement(id, measurement) {
    return apiClient.put(`/api/v1/user_measurements/${id}`, { user_measurement: measurement })
  },
  deleteMeasurement(id) {
    return apiClient.delete(`/api/v1/user_measurements/${id}`)
  }
}