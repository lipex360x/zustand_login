import { Navigate, useLocation, useRoutes } from 'react-router-dom'

import { DefaultLayout } from '@/components/templates/DefaultLayout'
import { LoginPage } from '@/pages/LoginPage'

export const Public = () => {
  const location = useLocation()

  return useRoutes([
    {
      path: '/login',
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          element: <LoginPage />,
        },
      ],
    },

    {
      path: '*',
      element: <Navigate to="/login" state={{ from: location }} replace />,
    },
  ])
}
