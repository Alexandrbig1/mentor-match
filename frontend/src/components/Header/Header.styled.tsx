import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

export const HeaderContainer = styled.header`
  background-color: ${(p) => p.theme.colors.mainBgColor};
  width: 100%;
  height: 7.2rem;
  max-width: 80%;
  margin: 0 auto;
  padding: 1.2rem 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
`;

export const HeaderNavigationMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const HeaderMentorButtonThemeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const HeaderMentorButtonIcon = styled(IoIosArrowForward)`
  font-size: 1.6rem;
  color: ${(p) => p.theme.colors.mainTextColor};
  transition: transform var(--linear-transition);
  transform: translateX(0);
`;

export const HeaderMentorButton = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 1.4rem 2.4rem;
  border-radius: 1.2rem;
  background-color: ${(p) => p.theme.colors.ButtonAccentColor};
  color: ${(p) => p.theme.colors.mainTextColor};
  width: 100%;
  min-width: 18rem;

  display: flex;
  align-items: center;
  gap: 0.2rem;

  &:hover {
    ${HeaderMentorButtonIcon} {
      transform: translateX(0.4rem) scale(1.2);
    }
  }
`;
