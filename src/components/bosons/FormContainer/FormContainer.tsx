import { ReactNode } from 'react'

import * as S from './styles'

export type FormContainerProps = {
  children: ReactNode
}

export const FormContainer = ({ children }: FormContainerProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}
