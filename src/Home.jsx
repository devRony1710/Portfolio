import { About } from "components/About";
import { Hero } from "components/Hero";
import { IconsLinks } from "components/IconsLinks";
import { Separator } from "components/Separator";
import GlobalStyle from "theme/globalStyles";

export const Home = () => {
  return (
    <>
      <GlobalStyle />
      <IconsLinks />
      <Hero />
      <Separator />
      <About />
    </>
  );
};
