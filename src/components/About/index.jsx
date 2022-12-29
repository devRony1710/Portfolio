// styles
import {
  AboutContainer,
  AboutInfoContainer,
  DescriptionContainer,
  Label,
} from "./AboutStyle";

// images
import MyImg from "../../assets/images/Me.jpg";

export const About = () => {
  return (
    <AboutContainer>
      <AboutInfoContainer>
        <Label>🤔 Sobre Mi</Label>

        <h2>Rony Antolinez</h2>

        <DescriptionContainer>
          <span>🧑🏻‍💻</span>
          <p>
            Tengo 2 años como desarrollador de software, principalmente en el
            frontend, creando interfaces visuales efectivas para cumplir con las
            necesidades del cliente.
          </p>
        </DescriptionContainer>

        <DescriptionContainer>
          <span>🎓</span>
          <p>Aprendo de forma totalmente autodidacta y nunca me detengo.</p>
        </DescriptionContainer>

        <DescriptionContainer>
          <span>👀</span>
          <p>
            Mis intereses se centran en las tecnologías frontend: React JS,
            NextJS, TypeScript, etc.
          </p>
        </DescriptionContainer>
      </AboutInfoContainer>

      <img src={MyImg} alt="Rony Antolinez" />
    </AboutContainer>
  );
};
