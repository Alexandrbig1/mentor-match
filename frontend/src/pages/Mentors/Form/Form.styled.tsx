import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: 64rem;
  border-radius: 1.2rem;
  margin: 0 auto;
  padding: 2.4rem;
  border: 1px solid ${(p) => p.theme.colors.formBorderColor};
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
`;

export const FormNameLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 3.2rem;
  transform: translateY(-50%);
  color: ${(p) => p.theme.colors.lightTextColor};
  font-size: 1.4rem;
  pointer-events: none;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
`;

export const SearchIcon = styled(FiSearch)`
  position: absolute;
  top: 50%;
  left: 0.8rem;
  transform: translateY(-50%);
  color: ${(p) => p.theme.colors.mainTextColor};
`;
