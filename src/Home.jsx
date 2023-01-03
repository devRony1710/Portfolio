import { About } from "components/About";
import { Contact } from "components/Contact";
import { Hero } from "components/Hero";
import { IconsLinks } from "components/IconsLinks";
import { Projects } from "components/Projects/ index";
import { Separator } from "components/Separator";
import { Technologies } from "components/Technologies";
import GlobalStyle from "theme/globalStyles";

export const Home = () => {
  return (
    <>
      <GlobalStyle />
      <IconsLinks />
      <Hero />
      <Separator />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </>
  );
};
