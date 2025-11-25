import styled from "styled-components";
import { primaryFont } from "../fonts";

export const StatsWrapper = styled.section`
  margin: 0 auto;
  width: 100%;
  border-radius: 1.2rem;
  padding: 0 2.4rem;

  @media (min-width: 768px) {
    padding: 0;
    max-width: 80%;
  }
`;

export const StatsMenu = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  border-radius: 2.4rem;
  

  @media (min-width: 768px) {
    display: flex;
    align-items: center;

    background: linear-gradient(
    145deg,
    ${(p) => p.theme.colors.statsBoxShadowColor},
    ${(p) => p.theme.colors.statsBoxShadowColor}
  );
  }
`;

export const StatsMenuItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 0.8rem;
  padding: 1.2rem;
`;

export const StatsMenuItemSpanLoadingWrapper = styled.span`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatsMenuItemSpan = styled.span`
  width: 7.2rem;
  height: 7.2rem;
  border-radius: 50rem;
  background-color: ${(p) => p.theme.colors.statsIconBgColorLight};
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: ${primaryFont};
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 1.15;
  color: ${(p) => p.theme.colors.statsNumberColor};

  &::selection {
    background-color: ${(p) => p.theme.colors.selectionNeutralBgColor};
  }
`;

export const StatsMenuItemTitle = styled.h3`
  font-family: ${primaryFont};
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.15;
  color: ${(p) => p.theme.colors.mainTextColor};

  &::selection {
    background-color: ${(p) => p.theme.colors.selectionBgColor};
  }
`;

export const StatsMenuItemSpanIcon = styled.svg`
  width: 4.8rem;
  height: 4.8rem;
  fill: ${(p) => p.theme.colors.headerButtonBgAccentColor};
  user-select: none;
`;
