import HeroImage from "assets/images/HeroImage.svg";

// styles
import { HeroContainer, InfoHeroContainer } from "./HeroStyles";

export const Hero = () => {
  return (
    <HeroContainer>
      <img src={HeroImage} alt="Computer with books illustration" />

      <InfoHeroContainer>
        <span>👋🏻 Saludos</span>
        <h2>Rony Antolinez</h2>
        <p>Front-end Developer</p>
      </InfoHeroContainer>
    </HeroContainer>
  );
};
