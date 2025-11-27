import {
  HeroButton,
  HeroButtonIcon,
  HeroButtonWrapper,
  HeroImg,
  HeroImgWrapper,
  HeroText,
  HeroTitle,
  HeroTitleWrapper,
  HeroWrapper,
} from "./Hero.styled";

export default function Hero() {
  return (
    <HeroWrapper>
      <HeroTitleWrapper>
        <HeroTitle>Dive in Tech with our Mentors Match app</HeroTitle>
        <HeroText>
          Connect with experienced mentors, explore technologies, and advance
          your career in tech. Your journey starts here!
        </HeroText>
        <HeroButtonWrapper>
          <HeroButton to="/mentors" aria-label="Get Started with Mentor Match">
            <HeroButtonIcon />
            Get Started
          </HeroButton>
        </HeroButtonWrapper>
      </HeroTitleWrapper>
      <HeroImgWrapper>
        <HeroImg src="/images/mentor-match.png" alt="" />
      </HeroImgWrapper>
    </HeroWrapper>
  );
}
