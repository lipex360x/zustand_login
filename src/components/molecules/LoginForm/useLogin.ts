import { useNavigate } from 'react-router-dom'

import { loginWithEmailAndPassword } from '@/api/auth'
import { toastService } from '@/services'
import { authStore } from '@/store'
import { useMutation } from '@tanstack/react-query'

export const useLogin = () => {
  const { login } = authStore()
  const navigate = useNavigate()

  const { mutateAsync: mutateLogin, isLoading } = useMutation(
    loginWithEmailAndPassword,
    {
      onSuccess(data) {
        if (data.token) {
          login(data)
          navigate('/dashboard')
        } else {
          toastService.error('User not found')
        }
      },
    },
  )

  return { mutateLogin, isLoading }
}

export default useLogin
