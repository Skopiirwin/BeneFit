import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

// Remove token on unauthorized access
instance.interceptors.response.use(
  (response) => {
    // Log successful responses
    console.log('Response headers:', response.headers);
    
    // Handle auth headers
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
      console.log('Stored auth headers:', tokenHeaders)
    }

    return response
  },
  (error) => {
    // Log error responses
    console.error('Response error:', {
      status: error.response?.status,
      data: error.response?.data,
      headers: error.response?.headers
    });
    
    if (error.response?.status === 401) {
      localStorage.removeItem('auth-headers')
      localStorage.removeItem('user')
    }
    
    return Promise.reject(error)
  }
)

// Add authentication headers to requests
instance.interceptors.request.use(
  (config) => {
    // Log outgoing requests
    console.log('Request:', {
      url: config.url,
      method: config.method,
      headers: config.headers
    });
    
    const storedHeaders = localStorage.getItem('auth-headers')
    if (storedHeaders) {
      try {
        const headers = JSON.parse(storedHeaders)
        Object.entries(headers).forEach(([key, value]) => {
          config.headers[key] = value
        })
      } catch (e) {
        console.error('Error parsing stored headers:', e)
        localStorage.removeItem('auth-headers')
      }
    }
    return config
  },
  (error) => {
    console.error('Request error:', error)
    return Promise.reject(error)
  }
)

export default instance