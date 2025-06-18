import SocialIcons from "../UI/SocialIcons/SocialIcons";
import { FooterText, FooterTextWrapper, FooterWrapper } from "./Footer.styled";

function Footer() {
  return (
    <FooterWrapper>
      <FooterTextWrapper>
        <FooterText>
          all rights reserved © 2025 MentorMatch by{" "}
          <a href="https://www.alexsmagin.dev">Alex Smagin</a>
        </FooterText>
      </FooterTextWrapper>
      <SocialIcons />
    </FooterWrapper>
  );
}

export default Footer;
