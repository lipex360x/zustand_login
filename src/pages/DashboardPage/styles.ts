import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${() => css`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: white;

    a {
      color: orange;
      cursor: pointer;
    }
  `}
`
