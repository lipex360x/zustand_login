import { Container } from '@/components/bosons/Container'
import { LoginForm } from '@/components/molecules/LoginForm'

import * as S from './styles'

export const Login = () => {
  return (
    <S.Wrapper>
      <Container style={{ width: '400px' }}>
        <LoginForm />
      </Container>
    </S.Wrapper>
  )
}
