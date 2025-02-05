import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  withCredentials: true,
  xsrfCookieName: 'CSRF-TOKEN',
  xsrfHeaderName: 'X-CSRF-Token'
})

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    // Process auth headers if they exist
    if (response.headers['access-token']) {
      const tokenHeaders = {}
      const authHeaders = [
        'access-token',
        'client',
        'expiry',
        'uid',
        'token-type'
      ]
      
      authHeaders.forEach(header => {
        const headerValue = response.headers[header]
        if (headerValue) {
          tokenHeaders[header] = headerValue
          instance.defaults.headers.common[header] = headerValue
        }
      })

      localStorage.setItem('auth-headers', JSON.stringify(tokenHeaders))
    }
    return response
  },
  (error) => {
    console.error('Response Error:', {
      status: error.response?.status,
      data: error.response?.data,
      headers: error.response?.headers
    })

    return Promise.reject({
      status: error.response?.status,
      message: error.response?.data?.error || error.response?.data?.status?.message || 'Request failed',
      originalError: error
    })
  }
)

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    const storedHeaders = localStorage.getItem('auth-headers')
    if (storedHeaders) {
      const headers = JSON.parse(storedHeaders)
      Object.entries(headers).forEach(([key, value]) => {
        config.headers[key] = value
      })
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default instance