import { useRoutes } from 'react-router-dom'

import { DefaultLayout } from '@/components/templates/DefaultLayout'
import { DashboardPage } from '@/pages/DashboardPage'
import { LoginPage } from '@/pages/LoginPage'

export const Private = () => {
  console.log('private route')

  return useRoutes([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          path: '/',
          element: <LoginPage />,
        },

        {
          path: '/dashboard',
          element: <DashboardPage />,
        },
      ],
    },
  ])
}
