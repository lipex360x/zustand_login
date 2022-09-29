import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${() => css`
    width: 100%;
    display: grid;
    grid-auto-rows: auto;
    align-items: baseline;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 1rem;
  `}
`
