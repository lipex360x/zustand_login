import * as S from './styles'
import { useLoadData } from './useLoadData'

export const Dashboard = () => {
  const { data } = useLoadData()
  console.log(data)

  return (
    <S.Wrapper>
      <h1>Dashboard</h1>
    </S.Wrapper>
  )
}
