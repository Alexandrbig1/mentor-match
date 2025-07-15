import styled from "styled-components";

export const MentorsComponentWrapper = styled.div`
  /* background-color: aliceblue; */
  position: relative;
  width: 65%;
  height: 100%;
  overflow-y: auto;
  padding-right: 0.2rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(p) => p.theme.colors.scrollbarColor};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(p) => p.theme.colors.scrollbarBgColor};
    border-radius: 12px;
  }
`;

export const MentorsMenu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  position: relative;
`;

export const MentorListLoadingItem = styled.li`
  text-align: center;
  width: 100%;
  margin-top: 7.2rem;
`;

export const MentorListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
  width: calc(100% / 2 - 0.6rem);
  max-width: 100%;
  padding: 1.2rem;
  border-radius: 1.2rem;
  border: 1px solid ${(p) => p.theme.colors.formBorderColor};
`;

export const MentorItemCoreValuesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  flex-wrap: wrap;
`;
