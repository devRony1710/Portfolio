import HeroImage from "assets/images/HeroImage.svg";

// styles
import { HeroContainer, InfoHeroContainer, HeroImg } from "./HeroStyles";

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroImg
        loading="lazy"
        src={HeroImage}
        alt="Computer with books illustration"
      />

      <InfoHeroContainer>
        <span>👋🏻 Saludos</span>
        <h2>Rony Antolinez</h2>
        <p>Front-end Developer</p>
      </InfoHeroContainer>
    </HeroContainer>
  );
};
