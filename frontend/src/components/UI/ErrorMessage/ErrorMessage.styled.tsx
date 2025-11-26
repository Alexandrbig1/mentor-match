import styled from "styled-components";
import { primaryFont } from "../../fonts";

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  width: 100%;
  text-align: center;
  
  @media (min-width: 768px) {
    gap: 2.4rem;
    position: absolute;
    left: 50%;
    top: 7.2rem;
    transform: translateX(-50%);
  }
`;

export const ErrorText = styled.p`
  color: ${(p) => p.theme.colors.errorColor};
  font-size: 1.6rem;
  font-family: ${primaryFont};
  font-weight: 400;
  line-height: 1.4;
`;

export const ErrorIcon = styled.svg`
  width: 6.4rem;
  height: 6.4rem;
`;
