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
  gap: 2rem;
  user-select: none;
`;

export const SocialIconLink = styled.a`
  display: block;
width: 3.2rem;
  height: 3.2rem;

 @media (min-width: 880px) {
width: 2.8rem;
  height: 2.8rem;
  }
`;

export const OpenCodeChicagoIcon = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  transition: all var(--primary-transition);

  &:hover,
  &:focus {
    transform: scale(1.2);
  }

  @media (min-width: 880px) {
  height: 2.8rem;
  width: 2.8rem;
  }
`;

export const GitHubIcon = styled(FaGithub)`
  color: ${(p) => p.theme.colors.blackIconsColor};
  font-size: 3.2rem;
  transition: all var(--primary-transition);

  &:hover,
  &:focus {
    transform: scale(1.2);
  }

  @media (min-width: 880px) {
  font-size: 2.8rem;


  }
`;

export const YouTubeIcon = styled(FaYoutube)`
  color: ${(p) => p.theme.colors.youtubeColor};
  font-size: 3.2rem;

  transition: all var(--primary-transition);

  &:hover,
  &:focus {
    transform: scale(1.2);
  }

  @media (min-width: 880px) {
  font-size: 2.8rem;

  }
`;

export const LinkedInIcon = styled(FaLinkedin)`
  color: ${(p) => p.theme.colors.linkedinColor};
  font-size: 3.2rem;

  transition: all var(--primary-transition);

  &:hover,
  &:focus {
    transform: scale(1.2);
  }

  @media (min-width: 880px) {
  font-size: 2.8rem;

  }
`;

export const TwitterIcon = styled(FaXTwitter)`
  color: ${(p) => p.theme.colors.blackIconsColor};
  font-size: 3.2rem;

  transition: all var(--primary-transition);

  &:hover,
  &:focus {
    transform: scale(1.2);
  }

  @media (min-width: 880px) {
  font-size: 2.8rem;

  }
`;

export const StackOverflowIcon = styled(FaStackOverflow)`
  color: ${(p) => p.theme.colors.stackoverflowColor};
  font-size: 3.2rem;

  transition: all var(--primary-transition);

  &:hover,
  &:focus {
    transform: scale(1.2);
  }

  @media (min-width: 880px) {
  font-size: 2.8rem;
  }
`;
