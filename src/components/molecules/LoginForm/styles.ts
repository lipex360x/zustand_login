import styled, { css } from 'styled-components'

export const Form = styled.form`
  ${() => css`
    width: 100%;
  `}
`

export const Row = styled.div`
  ${() => css`
    display: grid;
    grid-auto-rows: auto;
    align-items: baseline;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: 1rem;
    row-gap: 1.5rem;
    padding: 0.5rem 0;
  `}
`

type FormColumnProps = {
  span?: number
}

export const Column = styled.div<FormColumnProps>`
  ${({ span = 12 }) => css`
    display: flex;
    flex-wrap: wrap;
    grid-column: span ${span};
  `}
`
