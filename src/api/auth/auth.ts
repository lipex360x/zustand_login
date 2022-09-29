import { LoginCredentials, AuthResponse } from '@/dtos'

import api from '../client'

export async function loginWithEmailAndPassword(requeste: LoginCredentials) {
  const { data } = await api.post<AuthResponse>('/login', requeste)
  return data
}
