import styled from "styled-components";
import { Link } from "react-router-dom";
import { primaryFont } from "../../components/fonts";

export const PageWrapper = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 36px 16px;
  background: ${(p) => p.theme.colors.mainBgColor || "#f9fafe"};
`;

export const Card = styled.form`
  width: 100%;
  max-width: 520px;
  background: ${(p) => p.theme.colors.loginBgColor};
  border-radius: 14px;
  padding: 28px;
  box-shadow: 0 12px 40px ${(p) => p.theme.colors.heroBoxShadow};
  display: flex;
  flex-direction: column;
  gap: 14px;
  border: 1px solid ${(p) => p.theme.colors.formBorderColor};
`;

export const FormTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 1.6rem;
  font-family: ${primaryFont};
  color: ${(p) => p.theme.colors.mainTextColor};
  font-weight: 500;
`;

export const Subtitle = styled.p`
  color: ${(p) => p.theme.colors.secondaryTextColor};
  font-size: 1.2rem;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  color: ${(p) => p.theme.colors.secondaryTextColor};
`;

export const Input = styled.input`
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid ${(p) => p.theme.colors.formBorderColor};
  font-size: 1.2rem;
  outline: none;
  background: none;
  color: ${(p) => p.theme.colors.secondaryTextColor};
  transition: box-shadow 120ms ease, border-color 120ms ease;

  &:focus {
    border-color: ${(p) => p.theme.colors.linkColor};
    box-shadow: 0 8px 24px rgba(14, 63, 121, 0.06);
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 6px;
`;

export const SubmitButton = styled.button`
  background: ${(p) => p.theme.colors.buttonBgColor};
  color: ${(p) => p.theme.colors.buttonTextColor || "#fff"};
  border: none;
  padding: 12px 18px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  min-width: 140px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const SmallText = styled.p`
  color: ${(p) => p.theme.colors.secondaryTextColor};
  font-size: 1.2rem;
  text-align: center;
`;

export const LinkInline = styled(Link)`
  color: ${(p) => p.theme.colors.linkColor};
  text-decoration: none;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorText = styled.div`
  color: ${(p) => p.theme.colors.errorColor};
  font-size: 0.95rem;
`;
