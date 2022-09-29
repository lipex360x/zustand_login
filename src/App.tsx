import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { PublicRoutes } from '@/routes'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <PublicRoutes />
        </BrowserRouter>

        <GlobalStyles />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
