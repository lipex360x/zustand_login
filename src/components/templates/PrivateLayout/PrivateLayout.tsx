import { Link, Outlet, useNavigate } from 'react-router-dom'

import { Container } from '@/components/bosons/Container'
import { ToastContainer } from '@/components/bosons/ToastContainer'
import { authStore } from '@/store'

import * as S from './styles'

export const PrivateLayout = () => {
  const { user, logout } = authStore()

  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <Container>
      <S.Wrapper>
        <span>
          Hello <Link to="/user">{user?.user.name}</Link>
        </span>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/dashboard">Dashboard</Link>
          <a onClick={handleLogout}>Sair</a>
        </div>
      </S.Wrapper>
      <Outlet />
      <ToastContainer />
    </Container>
  )
}
