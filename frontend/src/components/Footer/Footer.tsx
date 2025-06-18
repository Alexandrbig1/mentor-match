import SocialIcons from "../UI/SocialIcons/SocialIcons";
import {
  FooterText,
  FooterTextLink,
  FooterTextLinkIcon,
  FooterTextWrapper,
  FooterWrapper,
} from "./Footer.styled";

function Footer() {
  return (
    <FooterWrapper>
      <FooterTextWrapper>
        <FooterText>
          all rights reserved © 2025 MentorMatch by{" "}
          <FooterTextLink href="https://www.alexsmagin.dev">
            Alex Smagin
            <FooterTextLinkIcon />
          </FooterTextLink>
        </FooterText>
      </FooterTextWrapper>
      <SocialIcons />
    </FooterWrapper>
  );
}

export default Footer;
