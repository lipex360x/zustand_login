import { LoginCredentials, AuthResponse } from '@/dtos'

import api from '../client'

export async function loginWithEmailAndPassword(request: LoginCredentials) {
  return api
    .post<AuthResponse>('/login', request)
    .then((response) => response.data)
}
