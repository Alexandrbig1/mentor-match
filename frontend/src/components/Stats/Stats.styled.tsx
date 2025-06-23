import styled from "styled-components";
import { primaryFont } from "../fonts";

export const StatsWrapper = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: 80%;
  border-radius: 1.2rem;
`;

export const StatsMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  border-radius: 1.2rem;
  border: 1px dashed ${(p) => p.theme.colors.statsIconBgColorLight};
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

export const StatsMenuItemSpanWrapper = styled.span`
  width: 7.2rem;
  height: 7.2rem;
  border-radius: 50rem;
  background-color: ${(p) => p.theme.colors.statsIconBgColorLight};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatsMenuItemTitle = styled.h3`
  font-family: ${primaryFont};
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.15;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const StatsMenuItemSpanIcon = styled.svg`
  width: 4.8rem;
  height: 4.8rem;
  fill: ${(p) => p.theme.colors.headerButtonBgAccentColor};
`;
