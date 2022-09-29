import { css, createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    :focus {
      outline: 0;
      box-shadow: 0 0 6px -2px ${theme.color.gray400};
    }

    [disabled] {
      opacity: 0.7;
      cursor: not-allowed;
    }

    body,
    input,
    textarea,
    button {
      font: ${theme.font.normal} // weight
        ${theme.font.size.medium} // size
        ${theme.font.family}; // family
    }

    html {
      font-size: 62.5%;
    }

    button {
      cursor: pointer;
    }

    body {
      font-family: 'Roboto';
      font-size: ${theme.font.size.medium};
      color: ${theme.color.black};
    }
  `}
`

export default GlobalStyles
