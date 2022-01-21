import React from "react";
// import { ThemeProvider } from "styled-components";
// import GlobalStyle from "assert/styles/GlobalStyle";
// import theme from "../styles/theme.ts";

// export const decorators = [
//   (Story) => (
//     <ThemeProvider theme={theme}>
//       {/* <StylesProvider injectFirst> */}
//         {/* <GlobalStyle /> */}
//         <Story />
//       {/* </StylesProvider> */}
//     </ThemeProvider>
//   ),
// ];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}