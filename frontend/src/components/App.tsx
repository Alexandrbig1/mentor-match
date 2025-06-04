import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import { GlobalStyle } from "./GlobalStyle";
import FontsHelmet from "./FontsHelmet";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../context/ThemeContext";
import { RouterProvider } from "react-router-dom";
import router from "../routes/router";

function App() {
  const { isDarkTheme } = useTheme();

  return (
    <HelmetProvider>
      <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
        <GlobalStyle />
        <FontsHelmet />
        <RouterProvider router={router} />
        <ToastContainer aria-label="Notification" />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
