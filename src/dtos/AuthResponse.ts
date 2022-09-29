export type AuthResponse = {
  user: {
    name: string
    email: string
  }
  token: string
} | null
