import { forwardRef, InputHTMLAttributes } from 'react'

import * as S from './styles'

type TextFieldProps = {
  placeholder?: string
  textError?: string
  span?: number
  optional?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    { placeholder, textError, optional, span = 12, ...rest },
    ref,
  ) {
    return (
      <S.Wrapper span={span}>
        <div>
          <S.Input type="text" ref={ref} placeholder={placeholder} {...rest} />
          {optional && <span>Opcional</span>}
        </div>

        {!!textError && <S.MessageError>{textError}</S.MessageError>}
      </S.Wrapper>
    )
  },
)
