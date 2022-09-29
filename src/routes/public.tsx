import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '@/components/templates/DefaultLayout'
import { DashboardPage } from '@/pages/DashboardPage'
import { Home } from '@/pages/HomePage'

export const Public = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  )
}
