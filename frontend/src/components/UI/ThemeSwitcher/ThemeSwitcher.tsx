import { useTheme } from "../../../context/ThemeContext";
import {
  IconClickDark,
  IconClickLight,
  ThemeSwitcherButton,
} from "./ThemeSwitcher.styled";

export const ThemeSwitcher = () => {
  const { toggleTheme, isDarkTheme } = useTheme();

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <ThemeSwitcherButton
      type="button"
      aria-label="Change theme"
      onClick={handleThemeToggle}
    >
      {isDarkTheme ? <IconClickDark /> : <IconClickLight />}
    </ThemeSwitcherButton>
  );
};
