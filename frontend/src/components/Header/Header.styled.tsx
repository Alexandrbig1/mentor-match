import styled from "styled-components";
import { NavLink } from "react-router-dom";
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

  @media (min-width: 880px) {
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

export const HeaderMentorButtonIcon = styled(IoIosArrowForward)`
  font-size: 1.6rem;
  color: ${(p) => p.theme.colors.headerButtonTextAccentColor};
  transition: transform var(--linear-transition);
  transform: translateX(0);
`;

export const HeaderMentorButton = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 1.4rem 2.4rem;
  border-radius: 1.2rem;
  background-color: ${(p) => p.theme.colors.headerButtonBgAccentColor};
  color: ${(p) => p.theme.colors.headerButtonTextAccentColor};
  width: 100%;
  min-width: 18rem;

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
