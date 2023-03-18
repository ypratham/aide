import ReactDOM from "react-dom";
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "../assets/index.css";

const theme = extendTheme({
  colors: {
    aide: { 900: "#35523F", 700: "rgba(96, 153, 102, 1)" },
    fonts: {
      heading: "Merriweather",
      body: "Merriweather",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraBaseProvider theme={theme}>
        <App />
      </ChakraBaseProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
