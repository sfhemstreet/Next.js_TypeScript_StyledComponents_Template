import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { AppTheme } from "../theme.ts";

type MyTheme = typeof AppTheme;

export interface IThemeWrapper {
  theme: MyTheme;
}

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  body {
    margin: 0 auto;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Next.js Typescript Styled-Components</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    )
  }
}
