import axios from 'axios'

// Configured Axios HTTP Client for Express.js API backend
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

// Request interceptor to attach Supabase JWT if present
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('supabase_auth_token')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor for consistent error normalization
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const customMessage = error.response?.data?.message || error.message || 'API request error'
    return Promise.reject(new Error(customMessage))
  }
)

export default api
