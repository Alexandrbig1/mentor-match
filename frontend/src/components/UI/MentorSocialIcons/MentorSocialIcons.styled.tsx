import styled from "styled-components";

export const MentorSocialIconsIcon = styled.span<{ $hoverColor?: string }>`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.mentorSocialIcons};
  transition: all var(--primary-transition);

  &:hover {
    color: ${(p) => p.$hoverColor || p.theme.colors.mainTextColor};
    transform: translateY(-2px) scale(1.1);
  }
`;