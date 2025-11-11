import SocialIcons from "../UI/SocialIcons/SocialIcons";
import {
  FooterText,
  FooterTextLink,
  FooterTextLinkIcon,
  FooterTextWrapper,
  FooterWrapper,
  FooterTextLinkText,
} from "./Footer.styled";

function Footer() {
  return (
    <FooterWrapper>
      <FooterTextWrapper>
        <FooterText>
          all rights reserved © 2025 MentorMatch by{" "}
          <FooterTextLink
            href="https://www.alexsmagin.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FooterTextLinkText>Alex Smagin</FooterTextLinkText>
            <FooterTextLinkIcon />
          </FooterTextLink>
        </FooterText>
      </FooterTextWrapper>
      <SocialIcons />
    </FooterWrapper>
  );
}

export default Footer;
