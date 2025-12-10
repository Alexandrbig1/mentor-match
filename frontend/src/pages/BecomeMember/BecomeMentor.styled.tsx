import styled from "styled-components";
import { primaryFont } from "../../components/fonts";

export const PageWrapper = styled.div`
  /* min-height: calc(100vh - 80px); */
  height: 100%;
  /* overflow-y: auto; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 36px 16px;
  background-color: ${p => p.theme.colors.mainBgColor || "#f9fafe"};
`;

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 64rem;
  height: 100%;
  overflow-y: auto;
  padding-right: 0.2rem;

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

export const CardForm = styled.form`
  border: 1px solid ${(p) => p.theme.colors.formBorderColor};
  border-radius: 1.4rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  font-family: ${primaryFont};
  color: ${(p) => p.theme.colors.mainTextColor};
  font-weight: 400;
  text-transform: capitalize;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  font-family: ${primaryFont};
  color: ${(p) => p.theme.colors.secondaryTextColor};
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-family: ${primaryFont};
  color: ${(p) => p.theme.colors.secondaryTextColor};
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background: none;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid ${(p) => p.theme.colors.formBorderColor};
  color: ${(p) => p.theme.colors.secondaryTextColor};
  font-size: 1rem;
  transition: all var(--primary-transition);

  &::placeholder {
    color: ${(p) => p.theme.colors.lightTextColor};
  }

  &:hover {
    border-color: ${(p) => p.theme.colors.linkColor};
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  }

  &:focus-within {
    border-color: ${(p) => p.theme.colors.linkColor};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    background: ${(p) => p.theme.colors.selectionLightBgColor || "transparent"};
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Textarea = styled.textarea`
  border: none;
  outline: none;
  background: none; 
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid ${(p) => p.theme.colors.formBorderColor};
  color: ${(p) => p.theme.colors.secondaryTextColor};
  font-size: 1rem;
  resize: vertical;
  transition: all var(--primary-transition);

  &::placeholder {
    color: ${(p) => p.theme.colors.lightTextColor};
  }

  &:hover {
    border-color: ${(p) => p.theme.colors.linkColor};
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  }

  &:focus-within {
    border-color: ${(p) => p.theme.colors.linkColor};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    background: ${(p) => p.theme.colors.selectionLightBgColor || "transparent"};
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Chips = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

export const Chip = styled.div`
  background: ${(p) => p.theme.colors.inputAddBgColor || "#eef4ff"};
  color: ${(p) => p.theme.colors.inputAddTextColor || "#0b3a8a"};
  padding: 6px 10px;
  border-radius: 50rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ChipInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: none; 
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid ${(p) => p.theme.colors.formBorderColor};
  color: ${(p) => p.theme.colors.secondaryTextColor};
  font-size: 1rem;
  transition: all var(--primary-transition);

  &::placeholder {
    color: ${(p) => p.theme.colors.lightTextColor};
  }

  &:hover {
    border-color: ${(p) => p.theme.colors.linkColor};
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  }

  &:focus-within {
    border-color: ${(p) => p.theme.colors.linkColor};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    background: ${(p) => p.theme.colors.selectionLightBgColor || "transparent"};
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const AddButton = styled.button`
  background: ${(p) => p.theme.colors.inputAddButtonBgColor};
  color: ${(p) => p.theme.colors.buttonTextColor || "#fff"};
  border: none;
  padding: 8px 14px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;

  &:active {
    transform: translateY(1px);
  }

  &:hover {
    background: ${(p) => p.theme.colors.inputAddButtonBgHoverColor};
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: ${(p) => p.theme.colors.secondaryTextColor};
  cursor: pointer;
  font-size: 1.1rem;
`;

export const SocialList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SocialItem = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const SmallInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: none; 
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid ${(p) => p.theme.colors.formBorderColor};
  color: ${(p) => p.theme.colors.secondaryTextColor};
  font-size: 1rem;
  transition: all var(--primary-transition);

  &::placeholder {
    color: ${(p) => p.theme.colors.lightTextColor};
  }

  &:hover {
    border-color: ${(p) => p.theme.colors.linkColor};
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  }

  &:focus-within {
    border-color: ${(p) => p.theme.colors.linkColor};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    background: ${(p) => p.theme.colors.selectionLightBgColor || "transparent"};
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 6px;
`;

export const SubmitButton = styled.button`
  border: none;
  outline: none;
  background: none; 
  padding: 10px 12px;
  border-radius: 10px;
  background: ${(p) => p.theme.colors.buttonBgColor};
  color: ${(p) => p.theme.colors.buttonTextColor || "#fff"};
  cursor: pointer;
  font-size: 1rem;
  min-width: 180px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:active {
    transform: translateY(1px);
  }

  &:hover {
    background: ${(p) => p.theme.colors.buttonBgHoverColor};
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ErrorText = styled.div`
  color: ${(p) => p.theme.colors.errorColor};
  font-size: 0.95rem;
`;

export const SuccessText = styled.div`
  color: ${(p) => p.theme.colors.successColor || "#0a8a3a"};
  font-size: 0.95rem;
`;