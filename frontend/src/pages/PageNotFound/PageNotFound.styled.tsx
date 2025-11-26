import styled from "styled-components";
import { Link } from "react-router-dom";
import { primaryFont } from "../../components/fonts";

export const PageNotFoundWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
  justify-content: center;
  padding: 0 2.4rem;
`;

export const PageNotFoundImg = styled.img`
  width: 100%;
  max-width: 60rem;
  padding: 0 2.4rem;


  @media (min-width: 768px) {
    padding: 0;
    max-width: 60rem;
  }
`;

export const PageNotFoundTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const PageNotFoundTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.mainTextColor};
  font-style: ${primaryFont};
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const PageNotFoundText = styled.p`
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.secondaryTextColor};
  font-style: ${primaryFont};
  font-weight: 400;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    font-size: 1.6rem;
  }
`;

export const PageNotFoundLink = styled(Link)`
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.linkTextColor};
  font-style: ${primaryFont};
  font-weight: 700;
  transition: all var(--primary-transition);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.2rem;
    left: 0;
    width: 0%;
    height: 0.2rem;
    background-color: ${(p) => p.theme.colors.linkTextColor};
    border-radius: 20rem;
    transition: all var(--primary-transition);
  }

  &:hover {
    color: ${(p) => p.theme.colors.linkTextHoverColor};

    &::after {
      width: 100%;
      background-color: ${(p) => p.theme.colors.linkTextHoverColor};
    }
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;
