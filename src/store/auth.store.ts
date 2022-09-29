import create from 'zustand'

import { AuthResponse } from '@/dtos'
import { localStorageService } from '@/services'

type UserProps = {
  name: string
  email: string
}

type UseAuthProps = {
  user: UserProps | null
  setUser: (user: UserProps) => void
  login: (data: AuthResponse) => void
  logout: () => void
}

export const authStore = create<UseAuthProps>((set) => ({
  user: null,

  setUser: (data) => {
    set({ user: data })
  },

  login: ({ user }) => {
    localStorageService.setItem('user', user)
    set({ user })
  },

  logout: () => {
    localStorageService.removeItem('user')
    set({ user: null })
  },
}))
