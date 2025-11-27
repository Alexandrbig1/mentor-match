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

/* FormWrapper accepts transient prop $mobileOpen to show as bottom-sheet on mobile */
export const FormWrapper = styled.form<{ $mobileOpen?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 35%;
  height: 100%;
  border-radius: 1.2rem;
  margin: 0 auto;
  padding: 2.4rem;
  border: 1px solid ${(p) => p.theme.colors.formBorderColor};
  position: relative;

  /* hidden on small screens by default; shown as bottom-sheet when $mobileOpen true */
  @media (max-width: 768px) {
    display: ${(p) => (p.$mobileOpen ? "flex" : "none")};
    width: calc(100% - 48px);
    max-width: 960px;
    padding: 1.4rem;
    border-radius: 12px 12px 0 0;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    z-index: 1001;
    box-shadow: 0 -12px 30px rgba(2, 6, 23, 0.18);
    background: ${(p) => p.theme.colors.mainBgColor || "#fff"};
    max-height: 80vh;
    overflow-y: auto;
  }
`;

export const FormTitle = styled.h2`
  font-size: 1.6rem;
  font-family: ${primaryFont};
  color: ${(p) => p.theme.colors.mainTextColor};
  font-weight: 400;
  text-transform: capitalize;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
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
  line-height: 1.32;
`;

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

/* --- Mobile bottom button + overlay + close button --- */

export const MobileFilterButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 22rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2.4rem;
    z-index: 1000;
    font-weight: 500;
    background: ${(p) => p.theme.colors.linkColor};
    color: ${(p) => p.theme.colors.buttonTextColor || "#fff"};
    border: none;
    padding: 1.4rem 2.4rem;
    border-radius: 1.2rem;
    font-size: 1.4rem;
    box-shadow: 0 8px 20px rgba(2,6,23,0.12);
    cursor: pointer;
    text-transform: uppercase;
  }
`;

/* full-screen translucent overlay behind bottom sheet */
export const MobileOverlay = styled.div<{ hidden?: boolean }>`
  display: none;
  @media (max-width: 768px) {
    display: ${(p) => (p.hidden ? "none" : "block")};
    position: fixed;
    inset: 0;
    background: rgba(2, 6, 23, 0.48);
    z-index: 1000;
    backdrop-filter: blur(3px);
  }
`;

/* a small close button shown inside the panel (top-right) */
export const MobilePanelCloseButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: inline-flex;
    position: absolute;
    right: 1.4rem;
    top: 1.6rem;
    background: transparent;
    color: ${(p) => p.theme.colors.mainTextColor};
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
