import styled from "styled-components";
import { primaryFont } from "../fonts";
import { FaExternalLinkAlt } from "react-icons/fa";

export const FooterWrapper = styled.footer`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;
  padding: 1.6rem 2.4rem;

  @media (min-width: 880px) {
    height: 7.2rem;
    max-width: 80%;
    padding: 0;
    flex-direction: row;
    gap: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const FooterTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const FooterText = styled.p`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.33333;
  color: ${(p) => p.theme.colors.lightTextColor};

  &::selection {
    background-color: ${(p) => p.theme.colors.selectionLightBgColor};
  }
`;

export const FooterTextLinkIcon = styled(FaExternalLinkAlt)`
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.lightTextColor};
  transition: all var(--primary-transition);
`;

export const FooterTextLinkText = styled.span`
  position: relative;

  &::before {
    transition: all var(--primary-transition);
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.2rem;
    width: 0;
    height: 0.1rem;
    background-color: ${(p) => p.theme.colors.linkColor};
    background-color: ${(p) => p.theme.colors.lightTextColor};
    border-radius: 20rem;
  }
`;

export const FooterTextLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.6rem;

  &:hover {
    ${FooterTextLinkIcon} {
      color: ${(p) => p.theme.colors.linkColor};
    }
    ${FooterTextLinkText}:before {
      width: 100%;
    }
  }
`;
