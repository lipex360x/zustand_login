import { Navigate, useLocation, useRoutes } from 'react-router-dom'

import { DefaultLayout } from '@/components/templates/DefaultLayout'
import { LoginPage } from '@/pages/LoginPage'

export const Public = () => {
  console.log('public route')

  const location = useLocation()

  const publicRoutes = [
    {
      path: '/',
      element: <LoginPage />,
    },
  ]

  return useRoutes([
    {
      path: '/',
      element: <DefaultLayout />,
      children: publicRoutes,
    },

    {
      path: '*',
      element: <Navigate to="/" state={{ from: location }} replace />,
    },
  ])
}
