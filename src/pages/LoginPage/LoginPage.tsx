import { Container } from '@/components/bosons/Container'
import { LoginForm } from '@/components/molecules/LoginForm'

import * as S from './styles'

export const LoginPage = () => {
  return (
    <Container style={{ width: '400px' }}>
      <S.Wrapper>
        <h1>Zustand Login</h1>
        <LoginForm />
      </S.Wrapper>
    </Container>
  )
}
