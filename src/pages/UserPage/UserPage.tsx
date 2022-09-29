import { authStore } from '@/store'

import * as S from './styles'

export const UserPage = () => {
  const { user } = authStore()
  return (
    <S.Wrapper>
      <h1>Hello User {user?.user.name}</h1>
    </S.Wrapper>
  )
}
