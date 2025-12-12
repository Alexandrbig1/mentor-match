import styled from "styled-components";
import { primaryFont } from "../../components/fonts";

export const PageWrapper = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 48px 16px;
  background: ${(p) => p.theme.colors.mainBgColor || "#f7fbff"};
`;

export const Card = styled.section`
  width: 100%;
  max-width: 820px;
  background: ${(p) => p.theme.colors.mainBgColor || "#fff"};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 12px 40px ${(p) => p.theme.colors.heroBoxShadow};
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid ${(p) => p.theme.colors.formBorderColor};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Avatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.onPrimary || "#fff"};
  background: ${(p) => p.theme.colors.linkColor};
`;

export const Title = styled.h1`
  margin: 0;
  font-family: ${primaryFont};
  font-size: 1.2rem;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const Subtitle = styled.p`
  margin: 0;
  color: ${(p) => p.theme.colors.secondaryTextColor};
  font-size: 0.9rem;
`;

export const EditButton = styled.button`
  margin-left: auto;
  background: transparent;
  border: none;
  color: ${(p) => p.theme.colors.secondaryTextColor};
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${(p) => p.theme.colors.linkColor};
    background: ${(p) => p.theme.colors.selectionLightBgColor || "#f3f6ff"};
  }

  &:focus {
    outline: 2px solid ${(p) => p.theme.colors.linkColor};
    outline-offset: 2px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 6px;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.div`
  font-size: 0.9rem;
  color: ${(p) => p.theme.colors.secondaryTextColor};
`;

export const Value = styled.div`
  font-size: 1rem;
  color: ${(p) => p.theme.colors.mainTextColor};
  background: transparent;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid transparent;
`;

export const Input = styled.input`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid ${(p) => p.theme.colors.formBorderColor};
  font-size: 1rem;
  outline: none;
  &:focus {
    border-color: ${(p) => p.theme.colors.linkColor};
    box-shadow: 0 8px 20px rgba(14, 63, 121, 0.06);
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 6px;
`;

export const ActionButton = styled.button<{ variant?: "primary" | "ghost" }>`
  padding: 8px 12px;
  border-radius: 8px;
  border: ${(p) => (p.variant === "ghost" ? "1px solid transparent" : "none")};
  background: ${(p) =>
    p.variant === "ghost" ? "transparent" : p.theme.colors.linkColor};
  color: ${(p) =>
    p.variant === "ghost" ? p.theme.colors.secondaryTextColor : p.theme.colors.onPrimary || "#fff"};
  cursor: pointer;
  font-weight: 600;

  &:hover {
    opacity: 0.95;
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const Note = styled.div`
  font-size: 0.9rem;
  color: ${(p) => p.theme.colors.secondaryTextColor};
  margin-top: 4px;
`;