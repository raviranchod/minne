import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => {
    return css`
      svg {
        display: block;
      }

      body {
        font-family: ${theme.fonts.family.base};
        font-weight: ${theme.fonts.weight.black};
      }
    `;
  }}
`;

export { GlobalStyle };
