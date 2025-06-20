import styled from "styled-components";
import { primaryFont } from "../fonts";
import { FaFly } from "react-icons/fa6";
import { p } from "framer-motion/client";

export const HeroWrapper = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: 80%;
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const HeroTitleWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  background-color: ${(p) => p.theme.colors.heroBgLightGreyColor};
  padding: 2.4rem;
  border-radius: 0.8rem;
`;

export const HeroTitle = styled.h1`
  font-family: ${primaryFont};
  font-weight: 700;
  font-size: 3.6rem;
  line-height: 1.15;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const HeroText = styled.p`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.6;
  color: ${(p) => p.theme.colors.secondaryTextColor};
`;

export const HeroButtonWrapper = styled.div`
  width: 100%;
`;

export const HeroButton = styled.button`
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

  &:hover {
    background-color: ${(p) => p.theme.colors.buttonBgHoverColor};
  }
`;

export const HeroButtonIcon = styled(FaFly)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.buttonTextColor};
`;

export const HeroImgWrapper = styled.div`
  width: 55%;
`;

export const HeroImg = styled.img`
  width: 100%;
`;
