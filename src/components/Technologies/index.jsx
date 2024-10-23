import {
  NextIcon,
  GitIcon,
  JsIcon,
  ReactIcon,
  SassIcon,
  TailwindIcon,
  TsIcon,
} from "components/Icons";

import { TechsContainer, TechsContainerList, Label } from "./TechnologiesStyle";

export const Technologies = () => {
  return (
    <TechsContainer>
      <Label>💻 Skills</Label>

      <h2>Tecnologías que más uso</h2>

      <TechsContainerList>
        <NextIcon />
        <GitIcon />
        <JsIcon />
        <ReactIcon />
        <SassIcon />
        <TailwindIcon />
      </TechsContainerList>
    </TechsContainer>
  );
};
