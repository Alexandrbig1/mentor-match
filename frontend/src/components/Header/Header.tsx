import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import {
  HeaderContainer,
  HeaderMentorButton,
  HeaderMentorButtonThemeWrapper,
  HeaderNavigationMenu,
} from "./Header.styled";
import { ThemeSwitcher } from "../UI/ThemeSwitcher/ThemeSwitcher";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <nav>
        <HeaderNavigationMenu>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/mentors">Mentors</NavLink>
          </li>
        </HeaderNavigationMenu>
      </nav>
      <HeaderMentorButtonThemeWrapper>
        <ThemeSwitcher />
        <HeaderMentorButton>Become a Mentor</HeaderMentorButton>
      </HeaderMentorButtonThemeWrapper>
    </HeaderContainer>
  );
}
