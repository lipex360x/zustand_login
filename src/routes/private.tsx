import { Navigate, useLocation, useRoutes } from 'react-router-dom'

import { PrivateLayout } from '@/components/templates/PrivateLayout'
import { DashboardPage } from '@/pages/DashboardPage'

export const Private = () => {
  console.log('private route')
  const location = useLocation()

  const privateRoutes = [
    {
      path: '/dashboard',
      element: <DashboardPage />,
    },
  ]

  return useRoutes([
    {
      path: '/dashboard',
      element: <PrivateLayout />,
      children: privateRoutes,
    },
    {
      path: '*',
      element: <Navigate to="/dashboard" state={{ from: location }} replace />,
    },
  ])
}
