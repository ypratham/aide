import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const theme = extendTheme({
  colors: {
    aide: { 900: "#35523F", 700: "rgba(96, 153, 102, 1)" },
    fonts: {
      heading: "Merriweather",
      body: "Merriweather",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraBaseProvider theme={theme}>
        <App />
      </ChakraBaseProvider>
    </BrowserRouter>
  </React.StrictMode>
);
