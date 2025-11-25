import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL

export const api = axios.create({
  baseURL,
})

export const setAuthHeader = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const clearAuthHeader = () => {
  delete api.defaults.headers.common.Authorization
}

export default api
