import { Container } from '@/components/bosons/Container'
import { Dashboard } from '@/components/organisms/Dashboard'

import * as S from './styles'

export const DashboardPage = () => {
  return (
    <Container>
      <S.Wrapper>
        <Dashboard />
      </S.Wrapper>
    </Container>
  )
}
