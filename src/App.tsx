import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { PublicRoutes, PrivateRoutes } from '@/routes'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { localStorageService } from './services'
import { authStore } from './store'

const queryClient = new QueryClient()

export function App() {
  const { user, setUser } = authStore()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const recoverdUser = localStorageService.getItem('user')
    if (recoverdUser) setUser(recoverdUser)
    setLoading(false)
  }, [setUser])

  if (loading) return

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {user ? <PrivateRoutes /> : <PublicRoutes />}
        </BrowserRouter>

        <GlobalStyles />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
