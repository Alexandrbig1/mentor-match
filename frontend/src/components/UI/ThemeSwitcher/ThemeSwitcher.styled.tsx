import styled from "styled-components";
import { TbSunHigh, TbMoon } from "react-icons/tb";

export const ThemeSwitcherButton = styled.button`
  width: 3.2rem;
  height: 3.2rem;

  @media (min-width: 768px) {
    width: 3.6rem;
    height: 3.6rem;
  }
`;

export const IconClickLight = styled(TbSunHigh)`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-size: 3.2rem;
  transition: all var(--linear-transition);
  border-radius: 50%;
  padding: 0.6rem;

  @media (min-width: 768px) {
    font-size: 3.6rem;

    &:hover {
      background-color: ${(p) => p.theme.colors.switcherHoverBg};
    }
  }
`;

export const IconClickDark = styled(TbMoon)`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-size: 3.2rem;
  transition: all var(--linear-transition);
  border-radius: 50%;
  padding: 0.6rem;

  @media (min-width: 768px) {
    font-size: 3.6rem;

    &:hover {
    background-color: ${(p) => p.theme.colors.switcherHoverBg};
    }
  }
`;
