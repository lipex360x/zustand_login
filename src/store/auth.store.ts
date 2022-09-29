import { produce } from 'immer'
import create from 'zustand'

import { AuthResponse } from '@/dtos'

type UserProps = {
  name: string
  email: string
}

type UseAuthProps = {
  user: UserProps | null
  login: (data: AuthResponse) => void
  logout: () => void
}

export const authStore = create<UseAuthProps>((set) => ({
  user: null,

  login: ({ user }) =>
    set((state) =>
      produce(state, (draft) => {
        draft.user = user
      }),
    ),

  logout: () => set({ user: null }),
}))
