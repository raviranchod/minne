import "modern-normalize";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { Container } from "../components/Container";
import { Header } from "../components/Header";

import { GlobalStyle } from "../styles/global";
import { theme } from "../styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>
        <Container>
          <Component {...pageProps} />
        </Container>
      </main>
    </ThemeProvider>
  );
}
export default MyApp;
