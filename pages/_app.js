// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `'Montserrat', sans-serif`,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
