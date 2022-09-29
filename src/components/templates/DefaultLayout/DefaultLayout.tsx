import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { ToastContainer } from '@/components/bosons/ToastContainer'
import { localStorageService } from '@/services'
import { authStore } from '@/store'

export const DefaultLayout = () => {
  const { setUser } = authStore()

  useEffect(() => {
    const recoverdUser = localStorageService.getItem('user')
    if (recoverdUser) setUser(recoverdUser)
  }, [setUser])

  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  )
}
