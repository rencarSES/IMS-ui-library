import React from "react";
import { ThemeProvider } from "styled-components";

export const decorators = [
  (Story) => (
    <ThemeProvider theme="default">
      <StylesProvider injectFirst>
        <GlobalStyle />
        <Story />
      </StylesProvider>
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}