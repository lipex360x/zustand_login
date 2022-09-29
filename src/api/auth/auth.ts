import { LoginCredentials, AuthResponse } from '@/dtos'

import api from '../client'

export async function loginWithEmailAndPassword(request: LoginCredentials) {
  const { data } = await api.post<AuthResponse>('/login', request)
  return data
}
