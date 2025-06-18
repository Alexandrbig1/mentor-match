import { motion } from "framer-motion";
import {
  GitHubIcon,
  LinkedInIcon,
  OpenCodeChicagoIcon,
  SocialIconLink,
  SocialIconsWrapper,
  StackOverflowIcon,
  TwitterIcon,
  YouTubeIcon,
} from "./SocialIcons.styled";

export default function SocialIcons() {
  return (
    <SocialIconsWrapper>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", delay: 0.2 }}
      >
        <SocialIconLink
          href="https://github.com/Alexandrbig1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Alex Smagin GitHub account"
          title="Visit Alex Smagin GitHub account"
        >
          <GitHubIcon />
        </SocialIconLink>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", delay: 0.4 }}
      >
        <SocialIconLink
          href="https://www.linkedin.com/in/alex-smagin29"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Alex Smagin LinkedIn Profile"
          title="Visit Alex Smagin LinkedIn Profile"
        >
          <LinkedInIcon />
        </SocialIconLink>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", delay: 0.6 }}
      >
        <SocialIconLink
          href="https://opencodechicago.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Open Code Chicago Website"
          title="Visit Open Code Chicago Website"
        >
          <OpenCodeChicagoIcon
            src="/icons/open-code-chicago-official-logo.svg"
            alt="Open Code Chicago Official Logo"
          />
        </SocialIconLink>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", delay: 0.8 }}
      >
        <SocialIconLink
          href="https://www.youtube.com/@AlexSmaginDev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Alex Smagin YouTube channel"
          title="Visit Alex Smagin channel"
        >
          <YouTubeIcon />
        </SocialIconLink>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", delay: 1 }}
      >
        <SocialIconLink
          href="https://x.com/alexsmagin29"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Alex Smagin Twitter Profile"
          title="Visit Alex Smagin Twitter Profile"
        >
          <TwitterIcon />
        </SocialIconLink>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", delay: 1.2 }}
      >
        <SocialIconLink
          href="https://stackoverflow.com/users/22484161/alex-smagin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Alex Smagin Stack Overflow Profile"
          title="Visit Alex Smagin Stack Overflow Profile"
        >
          <StackOverflowIcon />
        </SocialIconLink>
      </motion.div>
    </SocialIconsWrapper>
  );
}
