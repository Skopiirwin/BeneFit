import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

instance.interceptors.response.use(
  (response) => {
    const authHeaders = [
      'access-token',
      'client',
      'expiry',
      'uid',
      'token-type'
    ]

    if (response.headers['access-token']) {
      const tokenHeaders = {}
      authHeaders.forEach(header => {
        const headerValue = response.headers[header]
        if (headerValue) {
          tokenHeaders[header] = headerValue
          instance.defaults.headers.common[header] = headerValue
        }
      })

      localStorage.setItem('auth-headers', JSON.stringify(tokenHeaders))
      console.log('Stored auth headers:', tokenHeaders) // Debug log
    }

    return response
  },
  (error) => {
    console.error('Response Error:', error.response?.data)
    if (error.response?.status === 401) {
      localStorage.removeItem('auth-headers')
      localStorage.removeItem('user')
      window.location.href = '/auth'
    }
    return Promise.reject(error)
  }
)

instance.interceptors.request.use(
  (config) => {
    const storedHeaders = localStorage.getItem('auth-headers')
    if (storedHeaders) {
      const headers = JSON.parse(storedHeaders)
      Object.entries(headers).forEach(([key, value]) => {
        config.headers[key] = value
      })
      console.log('Applied stored headers:', headers) // Debug log
    }
    return config
  },
  (error) => {
    console.error('Request Error:', error)
    return Promise.reject(error)
  }
)

export default instance