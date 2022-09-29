import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { PublicRoutes } from '@/routes'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}
