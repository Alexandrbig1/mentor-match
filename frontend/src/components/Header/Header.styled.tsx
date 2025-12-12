import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { primaryFont } from "../fonts";

export const HeaderContainer = styled.header`
  display: none;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  width: 100%;
  height: 7.2rem;
  max-width: 80%;
  margin: 0 auto;
  padding: 1.2rem 2.4rem;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const HeaderNavigationMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const HeaderNavLink = styled(NavLink)`
  position: relative;
  font-size: 1.6rem;
  font-weight: 700;
  font-family: ${primaryFont};
  color: ${({ theme }) => theme.colors.lightTextColor};
  line-height: 1.28571;
  transition: all var(--primary-transition);
  padding-bottom: 0.4rem;

  &::before {
    content: "";
    position: absolute;
    width: 0%;
    height: 0.2rem;
    left: 50%;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.lightTextColor};
    transition: all var(--primary-transition);
  }

  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 0.2rem;
    left: 50%;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.lightTextColor};
    transition: all var(--primary-transition);
  }

  &:hover {
    &::before {
      width: 50%;
    }

    &::after {
      width: 50%;
      left: 0;
    }
  }

  &.active {
    color: ${({ theme }) => theme.colors.secondaryTextColor};
  }
`;

export const HeaderMentorButtonThemeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

/* small user menu (shown when logged in) */
export const UserMenuWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

export const UserButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(p) => p.theme.colors.mainTextColor};
  border: none;
  padding: 10px 14px;
  border-radius: 12px;
  cursor: pointer;
  justify-content: center;

  &:focus {
    outline: 2px solid ${(p) => p.theme.colors.linkColor};
    outline-offset: 2px;
  }
`;

export const UserName = styled.span`
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.mainTextColor};
  font-weight: 600;
`;

export const UserIcon = styled.span`
  font-size: 1.6rem ;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

/* Popover appears below the user button */
export const UserPopover = styled.div<{ $open?: boolean }>`
  position: absolute;
  left: 50%;
  top: calc(100% + 10px);
  min-width: 14rem;
  background: ${(p) => p.theme.colors.mainBgColor || "#b70707"};
  border: 1px solid ${(p) => p.theme.colors.formBorderColor};
  box-shadow: 0 12px 40px rgba(8, 20, 50, 0.08);
  border-radius: 10px;
  overflow: hidden;
  transform-origin: top right;
  transition: opacity 160ms ease, transform 160ms ease, visibility 160ms;
  opacity: ${(p) => (p.$open ? 1 : 0)};
  visibility: ${(p) => (p.$open ? "visible" : "hidden")};
  transform: translateY(${(p) => (p.$open ? "0" : "-6px")}) translateX(-50%);
  z-index: 1100;
  will-change: opacity, transform;
`;

export const PopoverItem = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 12px 14px;
  background: transparent;
  border: none;
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.mainTextColor};
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;

  &:hover,
  &:focus {
    background: ${(p) => p.theme.colors.selectionLightBgColor || "#f3f6ff"};
    color: ${(p) => p.theme.colors.linkColor};
    outline: none;
  }
`;

export const HeaderMentorButtonIcon = styled(IoIosArrowForward)`
  font-size: 1.6rem;
  color: ${(p) => p.theme.colors.headerButtonTextAccentColor};
  transition: transform var(--linear-transition);
  transform: translateX(0);
  margin-right: -4px;
`;

export const HeaderMentorButton = styled(Link)`
  border: none;
  outline: none;
  background: none;
  padding: 1.4rem 2.4rem;
  border-radius: 1.2rem;
  background-color: ${(p) => p.theme.colors.headerButtonBgAccentColor};
  color: ${(p) => p.theme.colors.headerButtonTextAccentColor};
  font-weight: 500;
  width: 100%;
  min-width: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;

  display: flex;
  align-items: center;
  gap: 0.2rem;

  &:hover {
    background-color: ${(p) => p.theme.colors.headerButtonBgAccentColorHover};
    ${HeaderMentorButtonIcon} {
      transform: translateX(0.4rem) scale(1.2);
    }
  }
`;