import { Navigate, useLocation, useRoutes } from 'react-router-dom'

import { PrivateLayout } from '@/components/templates/PrivateLayout'
import { DashboardPage } from '@/pages/DashboardPage'
import { UserPage } from '@/pages/UserPage'

export const Private = () => {
  console.log('private route')

  const location = useLocation()

  const privateRoutes = [
    {
      path: '/',
      element: <DashboardPage />,
    },

    {
      path: '/user',
      element: <UserPage />,
    },
  ]

  return useRoutes([
    {
      path: '/',
      element: <PrivateLayout />,
      children: privateRoutes,
    },
    {
      path: '*',
      element: <Navigate to="/" state={{ from: location }} replace />,
    },
  ])
}
