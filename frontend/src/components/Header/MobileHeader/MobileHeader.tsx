import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../Logo/Logo";
import { ThemeSwitcher } from "../../UI/ThemeSwitcher/ThemeSwitcher";
import {
  HeaderNavLink,
  HeaderMentorButton,
  HeaderMentorButtonIcon,
} from "../Header.styled";
import {
  MobileHeaderContainer,
  BurgerButton,
  Overlay,
  MobileMenu,
  MobileMenuHeader,
  MobileCloseButton,
  MobileNav,
  MobileNavItem,
  MobileAction,
  MobileTheme,
} from "./MobileHeader.styled";


export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <MobileHeaderContainer>
      <Logo />
      <BurgerButton
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </BurgerButton>

      <Overlay visible={open} onClick={() => setOpen(false)} />

      <MobileMenu open={open} aria-hidden={!open}>
        <MobileMenuHeader>
          <Logo />
          <MobileCloseButton onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={20} />
          </MobileCloseButton>
        </MobileMenuHeader>

        <MobileNav>
          <MobileNavItem>
            <HeaderNavLink to="/" onClick={() => setOpen(false)}>
              Home
            </HeaderNavLink>
          </MobileNavItem>

          <MobileNavItem>
            <HeaderNavLink to="/mentors" onClick={() => setOpen(false)}>
              Mentors
            </HeaderNavLink>
          </MobileNavItem>

          <MobileNavItem>
            <HeaderNavLink to="/signin" onClick={() => setOpen(false)}>
              Sign In
            </HeaderNavLink>
          </MobileNavItem>

          <MobileNavItem>
            <HeaderNavLink to="/signup" onClick={() => setOpen(false)}>
              Sign Up
            </HeaderNavLink>
          </MobileNavItem>

          <MobileAction>
            <HeaderMentorButton
              as="button"
              onClick={() => {
                setOpen(false);
                // navigation can be added here (useNavigate) if needed
              }}
            >
              Become a Mentor
              <HeaderMentorButtonIcon />
            </HeaderMentorButton>
          </MobileAction>

          <MobileTheme>
            <ThemeSwitcher />
          </MobileTheme>
        </MobileNav>
      </MobileMenu>
    </MobileHeaderContainer>
  );
}