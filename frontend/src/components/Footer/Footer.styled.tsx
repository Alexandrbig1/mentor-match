import styled from "styled-components";
import { primaryFont } from "../fonts";
import { FaExternalLinkAlt } from "react-icons/fa";

export const FooterWrapper = styled.footer`
  margin: 0 auto;
  width: 100%;
  max-width: 80%;
  height: 7.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
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
`;

export const FooterTextLinkIcon = styled(FaExternalLinkAlt)`
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.lightTextColor};
  transition: all var(--primary-transition);
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
  }
`;
