import {
  LogoIcon,
  LogoIconText,
  LogoIconTextFirstLetter,
  LogoIconTextFirstLetterSecond,
  LogoWrapper,
} from "./Logo.styled";

export default function Logo() {
  return (
    <LogoWrapper
      to="/"
      aria-label="Mentor Match Home"
      title="Mentor Match Home"
    >
      <LogoIcon>
        <use href="/sprite.svg#icon-mentor"></use>
      </LogoIcon>
      <LogoIconText>
        <LogoIconTextFirstLetter>M</LogoIconTextFirstLetter>entor
        <LogoIconTextFirstLetterSecond>M</LogoIconTextFirstLetterSecond>atch
      </LogoIconText>
    </LogoWrapper>
  );
}
