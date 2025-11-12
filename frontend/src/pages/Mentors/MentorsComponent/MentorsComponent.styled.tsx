import styled from "styled-components";
import { primaryFont } from "../../../components/fonts";

export const MentorsComponentWrapper = styled.div`
  position: relative;
  width: 65%;
  height: 100%;
  overflow-y: auto;
  padding-right: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;


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
width: 100%;
`;

export const MentorListLoadingItem = styled.li`
  text-align: center;
  width: 100%;
  margin-top: 7.2rem;
`;

export const MentorListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 100%;
  width: calc(100% / 2 - 0.6rem);
  max-width: 100%;
  padding: 1.2rem;
  border-radius: 1.2rem;
  border: 1px solid ${(p) => p.theme.colors.formBorderColor};
  padding: 2.4rem;
`;

export const MentorItemAvatarNameWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  overflow: hidden;
`;

export const MentorItemAvatarWrapper = styled.div`
  width: 40%;
  height: auto;
  overflow: hidden;
  border-radius: 1.2rem;
`;

export const MentorItemNameWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const MentorItemAvatarImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 1.2rem;
`;

export const MentorItemDetails = styled.p`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.6;
  color: ${(p) => p.theme.colors.secondaryTextColor};

  &::selection {
    background-color: ${(p) => p.theme.colors.selectionLightBgColor};
  }
`;

export const MentorItemCoreValuesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  flex-wrap: wrap;
`;

export const MentorsLoadMoreButton = styled.button`
  border: none;
  outline: none;
  background: none;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.buttonTextColor};
  background-color: ${(p) => p.theme.colors.buttonBgColor};
  padding: 1.2rem 3.2rem;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: background-color var(--primary-transition);

  &::selection {
    background-color: ${(p) => p.theme.colors.selectionLightBgColor};
  }

  &:hover {
    background-color: ${(p) => p.theme.colors.buttonBgHoverColor};
  }
`;

export const MentorItemContentWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 1.2rem;
width: 100%;
`;

export const MentorItemDescription = styled.p`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.6;
  color: ${(p) => p.theme.colors.secondaryTextColor};

  &::selection {
    background-color: ${(p) => p.theme.colors.selectionLightBgColor};
  }
`;

export const MentorItemTypesWrapper = styled.div`
display: flex;
align-items: center;
gap: 0.4rem;
width: 100%;
flex-wrap: wrap;
`;

export const MentorItemTypesItems = styled.div`
display: flex;
align-items: center;
gap: 0.4rem;
`;

export const MentorItemSocialIconsWrapper = styled.div`
display: flex;
align-items: center;
gap: 1.2rem;
`;