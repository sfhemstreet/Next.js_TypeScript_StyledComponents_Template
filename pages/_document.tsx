import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

// Custom _document sets up the SSR of styled-components.
export default class MyDocument extends Document<any> {
  static async getInitialProps(context) {
    const sheet = new ServerStyleSheet();
    const orginalRenderPage = context.renderPage;

    try {
      // Wrap the collectStyled provider around App.
      context.renderPage = () =>
        orginalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      // Extract the initial props that may be present.
      const initialProps = await Document.getInitialProps(context);

      // Return the original props together with styled-components.
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
