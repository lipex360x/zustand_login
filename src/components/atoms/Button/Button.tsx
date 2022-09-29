import { ButtonHTMLAttributes, ForwardRefRenderFunction } from 'react'

import * as S from './styles'

type ButtonsTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  variant?: 'default' | 'minimal'
  fullWidth?: boolean
  icon?: JSX.Element
  iconPosition?: 'left' | 'right'
} & ButtonsTypes

export const Button: ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = ({
  children,
  fullWidth,
  icon,
  variant = 'default',
  iconPosition = 'left',
  size = 'medium',
  ...props
}: ButtonProps) => (
  <S.Wrapper
    variant={variant}
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    iconPosition={iconPosition}
    {...props}
  >
    {!!icon && iconPosition === 'left' && icon}
    {!!children && <span>{children}</span>}
    {!!icon && iconPosition === 'right' && icon}
  </S.Wrapper>
)
