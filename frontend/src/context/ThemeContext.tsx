import React, { createContext, useContext, useState } from "react";

type ThemeContextValue = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

const Theme = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" ? false : true;
  });

  const toggleTheme = () => {
    setIsDarkTheme((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
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
export const useTheme = (): ThemeContextValue => {
  const context = useContext(Theme);
  if (!context) {
    throw new Error("useTheme must be used within an ThemeProvider");
  }
  return context;
};
