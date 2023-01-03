// styles
import { ProjectsContainer, ProjectList } from "./ProjectsStyles";

// components
import { ProjectCardItem } from "./ProjectsCardItem";

// Data
import { Data } from "Data";

export const Projects = () => {
  return (
    <ProjectsContainer>
      <span>🖇️ Portafolio</span>
      <h2>Proyectos</h2>

      <ProjectList>
        {Data.map((item) => {
          return (
            <ProjectCardItem
              projectName={item.name}
              projectDescription={item.description}
              stack1={item.stack1}
              stack2={item.stack2}
              stack3={item.stack3}
              demoLink={item.demoLink}
              linkGithub={item.githubLink}
            />
          );
        })}
      </ProjectList>
    </ProjectsContainer>
  );
};
