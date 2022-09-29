import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    height: 100vh;
    justify-content: center;
    font-size: ${theme.font.size.small};

    h1 {
      color: white;
    }
  `}
`
