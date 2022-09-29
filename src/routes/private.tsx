import { useRoutes } from 'react-router-dom'

import { PrivateLayout } from '@/components/templates/PrivateLayout'
import { DashboardPage } from '@/pages/DashboardPage'

export const Private = () => {
  const routes = [
    {
      path: '/dashboard',
      element: <DashboardPage />,
    },
  ]

  return useRoutes([
    {
      path: '/',
      element: <PrivateLayout />,
      children: routes,
    },
  ])
}
