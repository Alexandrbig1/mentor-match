import styled from "styled-components";
import { primaryFont } from "../fonts";
import { Link } from "react-router-dom";

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: end;
  gap: 0.8rem;
`;

export const LogoIconText = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  font-family: ${primaryFont};
  color: ${({ theme }) => theme.colors.mainTextColor};
  line-height: 1;
`;

export const LogoIconTextFirstLetter = styled(LogoIconText)`
  color: #378dff;
  font-weight: 700;
  font-size: 2rem;
`;

export const LogoIconTextFirstLetterSecond = styled(LogoIconText)`
  color: #fcbd24;
  font-weight: 700;
  font-size: 2rem;
`;

export const LogoIcon = styled.svg`
  width: 3.2rem;
  height: 3.2rem;
`;
