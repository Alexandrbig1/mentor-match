import { useSelector, useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { FaUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import { ThemeSwitcher } from "../UI/ThemeSwitcher/ThemeSwitcher";
import MobileHeader from "./MobileHeader/MobileHeader";
import { selectIsLoggedIn, selectUser } from "../../redux/authSelectors";
import { logout, clearCredentials } from "../../redux/authSlice";
import {
  HeaderContainer,
  HeaderMentorButton,
  HeaderMentorButtonIcon,
  HeaderMentorButtonThemeWrapper,
  HeaderNavigationMenu,
  HeaderNavLink,
  UserMenuWrapper,
  UserButton,
  UserName,
  UserPopover,
  PopoverItem,
  UserIcon
} from "./Header.styled";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const displayName =
    user?.name ?? (typeof user?.email === "string" ? user.email.split("@")[0] : "User");

  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!menuOpen) return;
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const handleEdit = () => {
    setMenuOpen(false);
    navigate("/profile"); // adapt to your edit route
  };

  const handleLogout = async () => {
    setMenuOpen(false);
    try {
      // attempt server logout, redux will clear on fulfilled
      // @ts-ignore
      await dispatch(logout());
    } catch {
      // ignore
    } finally {
      // ensure local cleanup
      // @ts-ignore
      dispatch(clearCredentials());
      navigate("/");
    }
  };

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

          {!isLoggedIn ? (
            <HeaderMentorButton to="/become-a-mentor">
              Become a Mentor
              <HeaderMentorButtonIcon />
            </HeaderMentorButton>
          ) : (
            <UserMenuWrapper
              ref={wrapperRef}
              onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setMenuOpen(false)}
            >
              <UserButton
                aria-haspopup="menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((s) => !s)}
                >
                  <UserIcon>

                <FaUser />
                  </UserIcon>
                <UserName>{displayName}</UserName>
              </UserButton>

              <UserPopover role="menu" aria-hidden={!menuOpen} $open={menuOpen}>
                <PopoverItem role="menuitem" onClick={handleEdit} tabIndex={0}>
                  Edit profile
                </PopoverItem>
                <PopoverItem role="menuitem" onClick={handleLogout} tabIndex={0}>
                  Log out
                </PopoverItem>
              </UserPopover>
            </UserMenuWrapper>
          )}
        </HeaderMentorButtonThemeWrapper>
      </HeaderContainer>
    </>
  );
}
