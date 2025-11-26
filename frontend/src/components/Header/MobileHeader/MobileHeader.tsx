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
  MobileAction,
  MobileHeaderBurgerWrapper,
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
      <MobileHeaderBurgerWrapper>
        <ThemeSwitcher />
        <BurgerButton
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </BurgerButton>
      </MobileHeaderBurgerWrapper>

      <Overlay visible={open} onClick={() => setOpen(false)} />

      <MobileMenu open={open} aria-hidden={!open}>
        <MobileMenuHeader>
          <Logo />
          <MobileCloseButton
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </MobileCloseButton>
        </MobileMenuHeader>

        <MobileNav>
          <li>
            <HeaderNavLink to="/" onClick={() => setOpen(false)}>
              Home
            </HeaderNavLink>
          </li>

          <li>
            <HeaderNavLink to="/mentors" onClick={() => setOpen(false)}>
              Mentors
            </HeaderNavLink>
          </li>
          <li>
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
          </li>
        </MobileNav>
      </MobileMenu>
    </MobileHeaderContainer>
  );
}
