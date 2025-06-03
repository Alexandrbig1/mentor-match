import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import { GlobalStyle } from "./GlobalStyle";
import FontsHelmet from "./FontsHelmet";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <FontsHelmet />
        <ToastContainer aria-label="Notification" />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
