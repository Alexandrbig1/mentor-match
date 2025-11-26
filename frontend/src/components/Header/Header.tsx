import Logo from "../Logo/Logo";
import { ThemeSwitcher } from "../UI/ThemeSwitcher/ThemeSwitcher";
import MobileHeader from "./MobileHeader/MobileHeader";
import {
  HeaderContainer,
  HeaderMentorButton,
  HeaderMentorButtonIcon,
  HeaderMentorButtonThemeWrapper,
  HeaderNavigationMenu,
  HeaderNavLink,
} from "./Header.styled";

export default function Header() {
  return (
    <>
      <MobileHeader />
      <HeaderContainer>
        <Logo />
        <nav>
          <HeaderNavigationMenu>
            <li>
              <HeaderNavLink to="/">Home</HeaderNavLink>
            </li>
            <li>
              <HeaderNavLink to="/mentors">Mentors</HeaderNavLink>
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
    </>
  );
}
