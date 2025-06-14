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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae
          eos consequatur, minus assumenda alias fugit sequi distinctio
          reprehenderit beatae.
        </HeroText>
        <HeroButtonWrapper>
          <HeroButton>
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
