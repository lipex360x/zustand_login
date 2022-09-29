import { useNavigate } from 'react-router-dom'

import { getDashboardData } from '@/api/dashboard'
import { toastService } from '@/services'
import { authStore } from '@/store'
import { useQuery } from '@tanstack/react-query'

export const useLoadData = () => {
  const { logout } = authStore()
  const navigate = useNavigate()

  const { data, isLoading } = useQuery(['dashboard'], getDashboardData, {
    onError() {
      toastService.error('Data Error')
      logout()
      navigate('/login')
    },
  })

  return { data, isLoading }
}
