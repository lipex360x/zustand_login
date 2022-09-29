import { Navigate, useLocation, useRoutes } from 'react-router-dom'

import { DefaultLayout } from '@/components/templates/DefaultLayout'
import { LoginPage } from '@/pages/LoginPage'

export const Public = () => {
  const location = useLocation()

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

    {
      path: '*',
      element: <Navigate to="/" state={{ from: location }} replace />,
    },
  ])
}
