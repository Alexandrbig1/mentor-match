import styled from "styled-components";
import {
  FaLinkedin,
  FaGithub,
  FaXTwitter,
  FaYoutube,
  FaStackOverflow,
} from "react-icons/fa6";

export const SocialIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const SocialIconLink = styled.a`
  display: block;
  width: 3.6rem;
  height: 3.6rem;
`;

export const OpenCodeChicagoIcon = styled.img`
  height: 3.6rem;
  width: 3.6rem;
  transition: all var(--primary-transition);
  padding: 0.6rem;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

export const GitHubIcon = styled(FaGithub)`
  color: ${(p) => p.theme.colors.blackIconsColor};
  font-size: 3.6rem;
  transition: all var(--primary-transition);
  padding: 0.6rem;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

export const YouTubeIcon = styled(FaYoutube)`
  color: ${(p) => p.theme.colors.youtubeColor};
  font-size: 3.6rem;
  transition: all var(--primary-transition);
  padding: 0.6rem;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

export const LinkedInIcon = styled(FaLinkedin)`
  color: ${(p) => p.theme.colors.linkedinColor};
  font-size: 3.6rem;
  transition: all var(--primary-transition);
  padding: 0.6rem;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

export const TwitterIcon = styled(FaXTwitter)`
  color: ${(p) => p.theme.colors.blackIconsColor};
  font-size: 3.6rem;
  transition: all var(--primary-transition);
  padding: 0.6rem;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

export const StackOverflowIcon = styled(FaStackOverflow)`
  color: ${(p) => p.theme.colors.stackoverflowColor};
  font-size: 3.6rem;
  transition: all var(--primary-transition);
  padding: 0.6rem;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
