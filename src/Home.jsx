import { Hero } from "components/Hero";
import { IconsLinks } from "components/IconsLinks";
import GlobalStyle from "theme/globalStyles";

export const Home = () => {
  return (
    <>
      <GlobalStyle />
      <IconsLinks />
      <Hero />
    </>
  );
};
