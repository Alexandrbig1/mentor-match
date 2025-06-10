import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(p) => p.theme.colors.mainBgColor};
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  padding: 1.2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: pink;
`;

export const HeaderNavigationMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  background-color: aquamarine;
`;

export const HeaderMentorButtonThemeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  background-color: aliceblue;
`;

export const HeaderMentorButton = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 1.4rem;
  border-radius: 1.2rem;
  background-color: ${(p) => p.theme.colors.ButtonAccentColor};
  color: ${(p) => p.theme.colors.mainTextColor};
  width: 100%;
  min-width: 18rem;
`;
