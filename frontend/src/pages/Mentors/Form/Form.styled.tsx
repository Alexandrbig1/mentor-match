import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { IoWarningOutline } from "react-icons/io5";
import { primaryFont } from "../../../components/fonts";

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
`;

export const FormNameInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0.8rem;
  padding-left: 3.2rem;
  color: ${(p) => p.theme.colors.secondaryTextColor};

  &::placeholder {
    color: ${(p) => p.theme.colors.lightTextColor};
    font-size: 1.4rem;
    font-family: ${primaryFont};
  }
`;

export const SearchIcon = styled(FiSearch)`
  position: absolute;
  top: 50%;
  left: 0.8rem;
  transform: translateY(-50%);
  color: ${(p) => p.theme.colors.mainTextColor};
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

export const TechnologyErrorIcon = styled(IoWarningOutline)`
  color: ${(p) => p.theme.colors.errorColor};
  font-size: 2.4rem;
`;

export const TechnologyErrorText = styled.p`
  color: ${(p) => p.theme.colors.errorColor};
  font-size: 1.4rem;
  font-family: ${primaryFont};
  font-weight: 400;
  line-height: 1.4;
`;

export const FormTechnologyIconWrapper = styled.span`
  display: flex;
  font-size: 2.4rem;
  color: ${(p) => p?.$color || p.theme.colors.mainTextColor};
  transition: all var(--primary-transition);
`;

export const FormTechnologyInputText = styled.span`
  font-size: 1.2rem;
  font-family: ${primaryFont};
  color: ${(p) => p.theme.colors.secondaryTextColor};
  font-weight: 400;
  text-transform: capitalize;
`;

export const FormTechnologyLabel = styled.label`
  position: relative;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 0.8rem;
  padding: 0.6rem;
  border-radius: 0.6rem;
  transition: all var(--primary-transition);
  background-color: ${(p) =>
    p?.$checked ? p?.theme.colors.technologyBgColor : "transparent"};

  &:hover {
    background-color: ${(p) => p?.theme.colors.technologyBgColor};
    ${FormTechnologyIconWrapper} {
      color: ${(p) => p?.$hoverColor || p.theme.colors.mainTextColor};
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
