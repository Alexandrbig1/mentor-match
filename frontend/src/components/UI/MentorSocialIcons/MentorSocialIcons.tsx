import type { IconType } from "react-icons";
import { FaLinkedin, FaGithub, FaStackOverflow, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";
import { MentorSocialIconsIcon } from "./MentorSocialIcons.styled";

type SocialLink = { platform?: string; url?: string };

const ICON_MAP: Record<string, IconType> = {
  linkedin: FaLinkedin,
  github: FaGithub,
  stackoverflow: FaStackOverflow,
  x: FaXTwitter, // use X icon for the "x" platform
  youtube: FaYoutube,
  website: FiGlobe,
  web: FiGlobe,
};

const ICONS_COLORS: Record<string, string> = {
  linkedin: "#0a66c2",
  github: "#000814",
  stackoverflow: "#f48024",
  x: "#000814",
  youtube: "#cd201f",
  website: "#515052",
  web: "#515052",
};

export default function MentorSocialIcons({ socialLinks }: { socialLinks?: SocialLink[] }) {
  if (!Array.isArray(socialLinks) || socialLinks.length === 0) return null;

  return (
    <>
      {socialLinks.map((link, i) => {
        const platform = (link.platform || "website").toLowerCase();
        const Icon = ICON_MAP[platform] ?? FiGlobe;
        const label =
          platform === "x"
            ? "X"
            : platform === "website"
            ? "Website"
            : platform[0].toUpperCase() + platform.slice(1);

        return (
          <a
            key={`${platform}-${i}`}
            href={link.url ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} profile`}
            title={label}
            style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
          >
            <MentorSocialIconsIcon $hoverColor={ICONS_COLORS[platform]}>
              <Icon />
            </MentorSocialIconsIcon>
          </a>
        );
      })}
    </>
  );
}
