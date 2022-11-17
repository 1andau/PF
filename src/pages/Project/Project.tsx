import { DestinationTitle, MainContainer } from '../../GlobalStyles';
import { useState, useRef } from 'react';
import { ProjectType, projects } from './data';
import { useCallback } from 'react';
import { CategoryContainer } from 'pages/styled';
import {ProjectCard} from './ProjectCard';
import styles from './Project.module.scss';


export const Portfolio = () => {
  const category = Object.values(ProjectType);
  const [activeTab, setActiveTab] = useState(ProjectType.WEB);

	const sectionRef = useRef<HTMLDivElement>(null);

  const handleTabClick = useCallback((name: ProjectType) => {
    setActiveTab(name);
  }, []);


  return (
    <MainContainer>
    <DestinationTitle >
        <span>02</span>
        <h1>Chapter.Portfolio.</h1>
      </DestinationTitle>
      
    <CategoryContainer>
  <ul>
 {category.map((value) => (
                <label
                  onClick={() => handleTabClick(value)}
                  className={activeTab === value ? 'active' : ''}
                  key={value}>
                  <span>{value}</span>
                </label>
              ))}
  </ul>
</CategoryContainer>

<section className={styles.projects}  ref={sectionRef}>
	<div className={styles.projects__container}>
		{projects
    .filter((value) => value.type === activeTab)
    .map((value) => (
				<ProjectCard
					key={value.name}
					name={value.name}
					description={value.description}
					repoLink={value.repoLink}
					image={value.image}
					tags={value.tags}
					type={value.type}
				/>
			))}
	</div>
</section>




{/* <Cards>
      {projects
      .filter((value) => value.type === activeTab)
      .map((value) => (
          <ProjectCard
          name={value.name}
          type={value.type}
          description={value.description}
          tags={value.tags}
          repoLink={value.repoLink}
          key={value.name}
          image={value.image}
          />
        ))}
</Cards> */}

     

    </MainContainer>
  );
};
