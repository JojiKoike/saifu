import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';


export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const withThemeProvider = (Story, context) => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story {...context} />
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  )
}

export const decorators = [withThemeProvider]