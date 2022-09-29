import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${() => css`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;

    a {
      color: orange;
      cursor: pointer;
    }
  `}
`
