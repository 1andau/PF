import './project.scss';
import { DestinationTitle } from '../GlobalStyles';
import ProjectCard from './ProjectCard'; 
import { projects } from '../datas/projects/data';

export const Portfolio = () => {
  return (
    <>
      <DestinationTitle className="Chapter2">
        <span>02</span>
        <h1>Chapter.Portfolio.</h1>
      </DestinationTitle>

      <div className="wrapper">
        <div className="cards">
      {projects.map((value) => (
          <ProjectCard
            name={value.name}
            description={value.description}
            tags={value.tags}
            repoLink={value.repoLink}
            key={value.name}
          />
        ))}
        </div>
      </div>

    </>
  );
};
