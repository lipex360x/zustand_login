export default interface AuthResponse {
  user: {
    name: string
    email: string
  }
  token: string
}
