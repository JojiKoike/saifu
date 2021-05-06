import React, {useEffect} from 'react';
import type {AppProps} from 'next/app';

import {ThemeProvider as StyledComponentsThemeProvider} from 'styled-components';
import {
  ThemeProvider as MaterialUIThemeProvider,
  StylesProvider,
} from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../styles/theme';

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  useEffect(() => {
    const jssStyles: Element | null = document.querySelector(
      '#jss-server-side',
    );
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <StylesProvider injectFirst>
      <MaterialUIThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </StyledComponentsThemeProvider>
      </MaterialUIThemeProvider>
    </StylesProvider>
  );
}

export default MyApp;
