import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '@/components/templates/DefaultLayout'
import { DashboardPage } from '@/pages/DashboardPage'
import { LoginPage } from '@/pages/LoginPage'

export const Public = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<LoginPage />} />

        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  )
}
