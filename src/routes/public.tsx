import { useRoutes } from 'react-router-dom'

import { DefaultLayout } from '@/components/templates/DefaultLayout'
import { LoginPage } from '@/pages/LoginPage'

export const Public = () => {
  return useRoutes([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          path: '/',
          element: <LoginPage />,
        },
      ],
    },
  ])
}
