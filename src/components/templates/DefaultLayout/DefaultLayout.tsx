import { Outlet } from 'react-router-dom'

import { ToastContainer } from '@/components/bosons/ToastContainer'

export const DefaultLayout = () => {
  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  )
}
