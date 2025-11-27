import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { FaFly } from "react-icons/fa6";
import { primaryFont } from "../fonts";

const animation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const HeroWrapper = styled.section`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  gap: 2.4rem;
  padding: 0 2.4rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    max-width: 80%;
    padding: 0;
  }
`;

export const HeroTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  background-color: ${(p) => p.theme.colors.heroBgLightGreyColor};
  box-shadow: 10px 10px 20px ${(p) => p.theme.colors.heroBoxShadow},
    -10px -10px 20px ${(p) => p.theme.colors.heroBoxShadow};
  padding: 2.4rem;
  border-radius: 0.8rem;

  @media (min-width: 768px) {
    width: 45%;
  }
`;

export const HeroTitle = styled.h1`
  font-family: ${primaryFont};
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 1.15;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.mainTextColor};

  &::selection {
    background-color: ${(p) => p.theme.colors.selectionBgColor};
  }

  @media (min-width: 768px) {
    font-size: 3.6rem;
  }
`;

export const HeroText = styled.p`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.6;
  color: ${(p) => p.theme.colors.secondaryTextColor};

  &::selection {
    background-color: ${(p) => p.theme.colors.selectionLightBgColor};
  }
`;

export const HeroButtonWrapper = styled.div`
  width: 100%;
`;

export const HeroButton = styled(Link)`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
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

  @media (min-width: 768px) {
    max-width: 22rem;
  }
`;

export const HeroButtonIcon = styled(FaFly)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.buttonTextColor};
  user-select: none;

  ${HeroButton}:hover & {
    animation: ${animation} 3s infinite;
  }
`;

export const HeroImgWrapper = styled.div`
  width: 100%;
  user-select: none;

  @media (min-width: 768px) {
    width: 55%;
  }
`;

export const HeroImg = styled.img`
  width: 100%;
  min-height: 17.4rem;
  object-fit: contain;
`;
