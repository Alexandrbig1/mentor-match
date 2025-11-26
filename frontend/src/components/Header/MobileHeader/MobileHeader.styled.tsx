import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MobileHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.2rem 1.6rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const BurgerButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const Overlay = styled.div<{ visible: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.36);
  opacity: ${(p) => (p.visible ? 1 : 0)};
  visibility: ${(p) => (p.visible ? "visible" : "hidden")};
  transition: opacity 240ms ease, visibility 240ms ease;
  z-index: 999;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.aside<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 86%;
  max-width: 34rem;
  background: ${(p) => p.theme.colors.mainBgColor};
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.12);
  transform: translateX(${(p) => (p.open ? "0" : "-100%")});
  transition: transform 300ms cubic-bezier(0.2, 0.9, 0.2, 1);
  z-index: 1000;
  padding: 20px;
  display: block;
  overflow-y: auto;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MobileCloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${(p) => p.theme.colors.mainTextColor};
  width: 2rem;
  height: 2rem;
`;

export const MobileNav = styled.ul`
  list-style: none;
  margin: 2rem 0 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const MobileNavItemLink = styled(NavLink)`
    display: inline-block;
    padding: 10px 6px;
    font-size: 16px;
    color: ${p => p.theme.colors.mainTextColor};
`;

export const MobileAction = styled.div`
  margin-top: 18px;
`;

export const MobileHeaderBurgerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;  
`;