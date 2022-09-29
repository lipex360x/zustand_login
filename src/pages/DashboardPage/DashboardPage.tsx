import { useNavigate } from 'react-router-dom'

import { Container } from '@/components/bosons/Container'
import { authStore } from '@/store'

import * as S from './styles'

export const DashboardPage = () => {
  const { user, logout } = authStore()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }
  return (
    <Container>
      <S.Wrapper>
        <span>Hello {user?.name}</span>

        <a onClick={handleLogout}>Sair</a>
      </S.Wrapper>
    </Container>
  )
}
