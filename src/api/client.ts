import axios from 'axios'

import { API_BASE_URL } from '@/constants/environment'
import { localStorageService } from '@/services'

const api = axios.create({
  baseURL: API_BASE_URL,
})

api.interceptors.request.use((config) => {
  const accessToken = localStorageService.getItem('token')

  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

export default api
