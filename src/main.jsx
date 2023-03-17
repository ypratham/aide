import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { UserContextProvider } from "./utils/userContext";

const theme = extendTheme({
  colors: {
    aide: { 900: "#35523F", 700: "rgba(96, 153, 102, 1)" },
    fonts: {
      heading: "Merriweather",
      body: "Merriweather",
    },
  },
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraBaseProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </QueryClientProvider>
      </ChakraBaseProvider>
    </BrowserRouter>
  </React.StrictMode>
);
