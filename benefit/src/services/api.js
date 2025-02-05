import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL || 'http://localhost:3000'

const apiClient = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true
})

apiClient.interceptors.request.use(
  config => {
    try {
      const authHeaders = JSON.parse(localStorage.getItem('auth-headers') || '{}')
      console.log('Adding auth headers:', authHeaders)
      return {
        ...config,
        headers: {
          ...config.headers,
          ...authHeaders
        }
      }
    } catch (error) {
      console.error('Error processing auth headers:', error)
      return config
    }
  },
  error => {
    console.error('Request interceptor error:', error)
    return Promise.reject(error)
  }
)

apiClient.interceptors.response.use(
  response => {
    console.log('API Response:', response.status, response.data)
    return response
  },
  error => {
    console.error('API Error:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    })
    throw error
  }
)

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
  },

  // Auth endpoints
  login(credentials) {
    return apiClient.post('/api/auth/sign_in', credentials)
  },
  logout() {
    return apiClient.delete('/api/auth/sign_out')
  },
  register(userData) {
    return apiClient.post('/api/auth', userData)
  },

  // Health check
  checkHealth() {
    return apiClient.get('/health')
  }
}