import React from 'react';
import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import {RenderPageResult} from 'next/dist/next-server/lib/utils';
import {
  ServerStyleSheet,
  ServerStyleSheet as StyledComponentSheets,
} from 'styled-components';
import {ServerStyleSheets as MaterialUiServerStyleSheets} from '@material-ui/core';

export default class CustomDocument extends NextDocument {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const styledComponentsSheet = new StyledComponentSheets();
    const materialUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
        originalRenderPage({
          enhanceApp: App => (
            props,
          ): React.ReactElement<{sheet: ServerStyleSheet}> =>
            styledComponentsSheet.collectStyles(
              materialUiSheets.collect(<App {...props} />),
            ),
        });

      const initialProps = await NextDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {styledComponentsSheet.getStyleElement()}
            {materialUiSheets.getStyleElement()}
          </React.Fragment>,
        ],
      };
    } finally {
      styledComponentsSheet.seal();
    }
  }

  render(): React.ReactElement {
    return (
      <Html lang="ja-JP">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>SAIFU</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
