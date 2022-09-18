import React from "react";
import { createRoot } from "react-dom/client";
import { NativeBaseProvider, extendTheme } from "native-base";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

const theme = extendTheme({
  colors: {
    Red: `hsl(0, 78%, 62%)`,
    Cyan: `hsl(180, 62%, 55%)`,
    Orange: `hsl(34, 97%, 64%)`,
    Blue: `hsl(212, 86%, 64%)`,
    VeryDarkBlue: `hsl(234, 12%, 34%)`,
    GrayishBlue: `hsl(229, 6%, 66%)`,
    VeryLightGray: `hsl(0, 0%, 98%)`,
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
    mono: "Poppins",
  },
  config: {
    initialColorMode: "light",
  },
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NativeBaseProvider theme={theme}>
      <App />
    </NativeBaseProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
