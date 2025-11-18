import styled, { keyframes } from "styled-components";
import { FiSearch } from "react-icons/fi";
import { primaryFont } from "../../../components/fonts";

const searchIconRotate = keyframes`
  0% {
    transform: scale(1) translateY(-50%);
  }
  25% {
    transform: scale(1.1) translateY(-50%);
  }

  75% {
    transform: scale(1.1) translateY(-50%);
  }

  100% {
    transform: scale(1) translateY(-50%);
  }
`;

/* typed transient props for styled components */
type IconWrapperProps = { $color?: string };
type TechnologyLabelProps = { $color?: string; $hoverColor?: string; $checked?: boolean };

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 35%;
  height: 100%;
  border-radius: 1.2rem;
  margin: 0 auto;
  padding: 2.4rem;
  border: 1px solid ${(p) => p.theme.colors.formBorderColor};
`;

export const FormTitle = styled.h2`
  font-size: 2.4rem;
  font-family: ${primaryFont};
  color: ${(p) => p.theme.colors.mainTextColor};
  font-weight: 400;
  text-transform: capitalize;
`;

export const FormNameWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.6rem;
  border: 1px solid ${(p) => p.theme.colors.formBorderColor};
  position: relative;
    transition: all var(--primary-transition);

   &:hover {
    border-color: ${(p) => p.theme.colors.linkColor};
    box-shadow: 0 6px 20px rgba(0,0,0,0.06);
  }

  &:focus-within {
    border-color: ${(p) => p.theme.colors.linkColor};
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    background: ${(p) => p.theme.colors.selectionLightBgColor || "transparent"};
  }
`;

export const FormNameInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0.8rem;
  padding-left: 3.2rem;
  color: ${(p) => p.theme.colors.secondaryTextColor};
  transition: all var(--primary-transition);

  &::placeholder {
    color: ${(p) => p.theme.colors.lightTextColor};
    font-size: 1.4rem;
    font-family: ${primaryFont};
  }

  ${FormNameWrapper}:focus-within & {
    padding-left: 3.6rem;
  }
`;

export const SearchIcon = styled(FiSearch)`
  position: absolute;
  top: 50%;
  left: 0.8rem;
  transform: translateY(-50%);
  color: ${(p) => p.theme.colors.mainTextColor};
  transition: all var(--primary-transition);

  ${FormNameWrapper}:hover & {
    animation: ${searchIconRotate} 1.2s ease-in-out;
      color: ${(p) => p.theme.colors.linkColor};
  }

    /* hero + continuous gentle pulse on focus-within */
  ${FormNameWrapper}:focus-within & {
      animation: ${searchIconRotate} 1.2s ease-in-out;
      color: ${(p) => p.theme.colors.linkColor};
  }
`;

export const FormTechnologyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  gap: 0.6rem;

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

export const TechnologyErrorWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const TechnologyErrorIcon = styled.svg`
  width: 3.6rem;
  height: 3.6rem;
`;

export const TechnologyErrorText = styled.p`
  color: ${(p) => p.theme.colors.errorColor};
  font-size: 1.4rem;
  font-family: ${primaryFont};
  font-weight: 400;
  line-height: 1.4;
`;

/* apply typed transient prop for the icon wrapper */
export const FormTechnologyIconWrapper = styled.span<IconWrapperProps>`
  display: flex;
  font-size: 2.4rem;
  color: ${(p) => p.$color || p.theme.colors.mainTextColor};
  transition: all var(--primary-transition);
`;

export const FormTechnologyInputText = styled.span`
  font-size: 1.2rem;
  font-family: ${primaryFont};
  color: ${(p) => p.theme.colors.secondaryTextColor};
  font-weight: 400;
  text-transform: capitalize;
`;

/* typed label props: $checked, $hoverColor, $color */
export const FormTechnologyLabel = styled.label<TechnologyLabelProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 0.8rem;
  padding: 0.6rem;
  border-radius: 0.6rem;
  transition: all var(--primary-transition);
  background-color: ${(p) =>
    p.$checked ? p.theme.colors.technologyBgColor : "transparent"};

  &:hover {
    background-color: ${(p) => p.theme.colors.technologyBgColor};
      transform: translateY(-2px);
    ${FormTechnologyIconWrapper} {
      color: ${(p) => p.$hoverColor || p.theme.colors.mainTextColor};
      transform: scale(1.06);
    }
  }

  input:checked ~ ${FormTechnologyInputText} {
  }
`;

export const FormTechnologyInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;
