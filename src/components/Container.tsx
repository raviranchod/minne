import styled, { css } from "styled-components";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = styled.div<ContainerProps>`
  ${({ theme }) => {
    return css`
      margin-left: auto;
      margin-right: auto;
      padding-left: ${theme.layout.gutter};
      padding-right: ${theme.layout.gutter};
      max-width: ${theme.layout.width};
    `;
  }}
`;

export { Container };
