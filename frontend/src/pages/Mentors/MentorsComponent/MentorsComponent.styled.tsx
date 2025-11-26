import styled from "styled-components";
import { primaryFont } from "../../../components/fonts";

/* transient props for technology items */
type TechProps = { $color?: string; $hoverColor?: string };

export const MentorsComponentWrapper = styled.div`
  position: relative;
  width: 100%;
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

  @media (min-width: 768px) {
    width: 65%;
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
  max-width: 100%;
  padding: 1.2rem;
  border-radius: 1.2rem;
  border: 1px solid ${(p) => p.theme.colors.formBorderColor};
  padding: 2.4rem;

  @media (min-width: 768px) {
    width: calc(100% / 2 - 0.6rem);
  }
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
  user-select: none;
`;

export const MentorItemDetails = styled.p`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.6;
  color: ${(p) => p.theme.colors.secondaryTextColor};

  &::selection {
    background-color: ${(p) => p.theme.colors.selectionLightBgColor};
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const MentorItemDetailsContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

export const MentorItemDetailsContact = styled.p`
  display: inline;
  width: 100%;
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.6;
  color: ${(p) => p.theme.colors.secondaryTextColor};
  position: relative;
  transition: all var(--primary-transition);

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: currentColor;
    background: #b6cbda;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 260ms ease;
  }

  &:hover::after,
  &:focus::after {
    transform-origin: left;
    transform: scaleX(1);
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
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

export const MentorItemName = styled.h2`
  font-family: ${primaryFont};
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.6;
  color: ${(p) => p.theme.colors.secondaryTextColor};

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const MentorItemPosition = styled.h3`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.4rem;
  font-style: italic;
  line-height: 1.6;
  color: ${(p) => p.theme.colors.secondaryTextColor};

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const MentorItemDescription = styled.p`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.6;
  color: ${(p) => p.theme.colors.secondaryTextColor};

  &::selection {
    background-color: ${(p) => p.theme.colors.selectionLightBgColor};
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const MentorItemTypesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  flex-wrap: wrap;
`;

export const MentorItemTypesItemsSubTitle = styled.p`
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.secondaryTextColor};

  &::selection {
    background-color: ${(p) => p.theme.colors.selectionLightBgColor};
  }
`;

export const MentorItemValuesItemsWrapper = styled.div`
  padding: 0.2rem 0.8rem;
  border-radius: 0.6rem;
  border: 1px solid ${(p) => p.theme.colors.valuesWrapperBorderColor};
  background-color: ${(p) => p.theme.colors.valuesWrapperBgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  flex-wrap: wrap;
  user-select: none;
`;

export const MentorItemValuesText = styled.p`
  font-size: 1.2rem;
  font-family: ${primaryFont};
  color: ${(p) => p.theme.colors.secondaryTextColor};
  font-weight: 400;
  text-transform: capitalize;
`;

export const MentorItemSocialIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  gap: 2.4rem;
  margin-top: 1.2rem;
`;

export const MentorItemTechnologyText = styled.span`
  font-size: 1.2rem;
  font-family: ${primaryFont};
  color: ${(p) => p.theme.colors.secondaryTextColor};
  font-weight: 400;
  text-transform: capitalize;
`;

/* typed transient props applied here to avoid TS errors when using $color/$hoverColor */
export const MentorItemTechnologyIconWrapper = styled.span<TechProps>`
  display: flex;
  font-size: 2.4rem;
  color: ${(p) => p.$color || p.theme.colors.mainTextColor};
  transition: all var(--primary-transition);
`;

export const MentorItemTechnologyWrapper = styled.div<TechProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  gap: 0.8rem;
  padding: 0.6rem;
  border-radius: 0.6rem;

  &:hover {
    ${MentorItemTechnologyIconWrapper} {
      color: ${(p) => p.$hoverColor || p.theme.colors.mainTextColor};
    }
  }
`;
