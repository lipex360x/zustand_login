import axios from 'axios'

// import { API_BASE_URL } from '@/constants/environment'

const api = axios.create({
  baseURL: 'http://localhost:3333',
})

export default api
