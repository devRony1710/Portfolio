// Constants
import { GITHUB_LINK, TWITTER_LINK, LINKEDIN_LINK } from "lib/constants";

// Icons
import { Github, Linkedin, Twitter } from "components/Icons";

// styles
import { IconsContainer } from "./IconsLinkStyle";

export const IconsLinks = () => {
  return (
    <IconsContainer>
      <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer">
        <Linkedin />
      </a>
      <a href={GITHUB_LINK} target="_blank" rel="noreferrer">
        <Github />
      </a>
      <a href={TWITTER_LINK} target="_blank" rel="noreferrer">
        <Twitter />
      </a>
    </IconsContainer>
  );
};
