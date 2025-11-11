import { createContext, useContext, useState } from "react";

const Theme = createContext();

export const ThemeContext = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" ? false : true;
  });

  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
    localStorage.setItem("theme", isDarkTheme ? "light" : "dark");
  };

  return (
    <Theme.Provider
      value={{
        isDarkTheme,
        toggleTheme,
      }}
    >
      {children}
    </Theme.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(Theme);
  if (!context) {
    throw new Error("useTheme must be used within an ThemeProvider");
  }
  return context;
};
