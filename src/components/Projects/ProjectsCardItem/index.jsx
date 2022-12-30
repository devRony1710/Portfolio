//styles
import {
  CardItemContainer,
  CardLabelsContainer,
  CardLinksContainer,
} from "./CardItemStyle";

export const ProjectCardItem = ({
  projectName,
  projectDescription,
  stack1,
  stack2,
  stack3,
  linkGithub,
  demoLink,
}) => {
  return (
    <CardItemContainer>
      <h2>{projectName}</h2>

      <p>{projectDescription}</p>

      <CardLabelsContainer>
        <span>{stack1}</span>
        <span>{stack2}</span>
        <span>{stack3}</span>
      </CardLabelsContainer>

      <CardLinksContainer>
        <a href={demoLink}>Demo</a>
        <a href={linkGithub}>Github</a>
      </CardLinksContainer>
    </CardItemContainer>
  );
};
