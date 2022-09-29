import { useRoutes } from 'react-router-dom'

import { PrivateLayout } from '@/components/templates/PrivateLayout'
import { DashboardPage } from '@/pages/DashboardPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { UserPage } from '@/pages/UserPage'

export const Private = () => {
  console.log('private route')

  const privateRoutes = [
    {
      path: '/dashboard',
      element: <DashboardPage />,
    },

    {
      path: '/user',
      element: <UserPage />,
    },
    {
      path: '/not-found',
      element: <NotFoundPage />,
    },
  ]

  return useRoutes([
    {
      path: '/',
      element: <PrivateLayout />,
      children: [...privateRoutes, { path: '*', element: <NotFoundPage /> }],
    },
  ])
}
