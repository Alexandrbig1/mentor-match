import styled from "styled-components";
import { primaryFont } from "../fonts";

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
