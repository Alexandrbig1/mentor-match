import { FooterWrapper } from "./Footer.styled";

function Footer() {
  return (
    <FooterWrapper>
      <div>
        <p>all rights reserved</p>
        <p>© 2023 MentorMatch</p>
        <p>
          MentorMatch is a project by{" "}
          <a href="https://www.alexsmagin.dev">Alex Smagin</a>
        </p>
      </div>
      <div>social icons</div>
    </FooterWrapper>
  );
}

export default Footer;
