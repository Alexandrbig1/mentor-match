import "./sentry";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./components/App.tsx";
import { ThemeContext } from "./context/ThemeContext.tsx";
import { setAuthHeader } from './api/axios'
import { refreshUser } from './redux/authSlice'

// If a token is persisted, set header and try to refresh user before rendering
const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
if (token) {
  setAuthHeader(token)
  // dispatch refresh in background
  store.dispatch(refreshUser() as any)
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeContext>
        <App />
      </ThemeContext>
    </Provider>
  </StrictMode>
);
