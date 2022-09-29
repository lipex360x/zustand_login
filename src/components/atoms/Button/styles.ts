import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from './Button'

export type WrapperProps = {
  hasIcon: boolean
} & ButtonProps

const sizes = {
  small: () => css`
    padding: 0.2rem 0.8rem;
  `,

  medium: () => css`
    padding: 0.4em 1.2rem;
  `,

  large: () => css`
    padding: 0.8em 2.4rem;
  `,

  fullWidth: () => css`
    flex: 1;
    grid-column: span 12;
    text-align: center;
  `,
}

const variants = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.color.gray700};
    background: ${theme.color.gray200};
    border: 1px solid ${theme.color.gray300};
    border-radius: 0.6rem;
  `,

  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.color.gray300};
    border: 1px solid ${theme.color.gray300};
    transition: background, color ${theme.transition.fast};

    &:not(:disabled):hover {
      color: ${theme.color.white};
      background: ${theme.color.gray800};
    }
  `,

  withIcon: (theme: DefaultTheme, position: 'left' | 'right') => css`
    span {
      display: inline-block;
      margin-left: ${position === 'left' && theme.spacings.xxsmall};
      margin-right: ${position === 'right' && theme.spacings.xxsmall};
    }
  `,
}

export const ButtonBase = styled.button`
  ${({ theme }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: ${theme.color.gray900};
  `}
`

export const Wrapper = styled(ButtonBase)<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, iconPosition, variant }) => css`
    ${!!size && sizes[size]}
    ${!!fullWidth && sizes.fullWidth}
    ${!!variant && variants[variant](theme)}
    ${!!hasIcon && !!iconPosition && variants.withIcon(theme, iconPosition)}
  `}
`
