import styled from "styled-components";

import { Container } from "./Container";
import { Logo } from "./Logo";

const StyledHeader = styled.header`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const Header = () => (
  <StyledHeader>
    <Container>
      <Logo />
    </Container>
  </StyledHeader>
);

export { Header };
