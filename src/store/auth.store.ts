import create from 'zustand'

import { AuthResponse } from '@/dtos'
import { localStorageService } from '@/services'

type UseAuthProps = {
  user: AuthResponse
  setUser: (user: AuthResponse) => void
  login: (data: AuthResponse) => void
  logout: () => void
}

export const authStore = create<UseAuthProps>((set) => ({
  user: null,

  setUser: (data) => {
    set({ user: data })
  },

  login: (data) => {
    localStorageService.setItem('user', data)
    localStorageService.setItem('token', data?.token)
    set({ user: data })
  },

  logout: () => {
    localStorageService.removeItem('user')
    localStorageService.removeItem('token')
    set({ user: null })
  },
}))
