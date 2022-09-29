import api from '../client'

export async function getDashboardData() {
  return api.get('/dashboard').then((response) => response.data)
}
