import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { ThemeSwitcher } from "../UI/ThemeSwitcher/ThemeSwitcher";
import {
  HeaderContainer,
  HeaderMentorButton,
  HeaderMentorButtonIcon,
  HeaderMentorButtonThemeWrapper,
  HeaderNavigationMenu,
} from "./Header.styled";

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
        <HeaderMentorButton>
          Become a Mentor
          <HeaderMentorButtonIcon />
        </HeaderMentorButton>
      </HeaderMentorButtonThemeWrapper>
    </HeaderContainer>
  );
}
