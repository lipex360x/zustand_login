import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { PublicRoutes, PrivateRoutes } from '@/routes'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { authStore } from './store'

const queryClient = new QueryClient()

export function App() {
  const { user } = authStore()

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
