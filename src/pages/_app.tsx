import "modern-normalize";
import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";

import { Container } from "../components/Container";
import { Header } from "../components/Header";

import { GlobalStyle } from "../styles/global";
import { theme } from "../styles";

const StyledMain = styled.main`
  margin-top: 4rem;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <StyledMain>
        <Container>
          <Component {...pageProps} />
        </Container>
      </StyledMain>
    </ThemeProvider>
  );
}
export default MyApp;
