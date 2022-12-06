import { DestinationTitle, MainContainer } from '../../GlobalStyles';
import { useRef } from 'react';
import { projects } from './data';
import {ProjectCard} from './ProjectCard';
import './project.scss'; 

 const Project = () => {

  const sectionRef = useRef<HTMLDivElement>(null);


  return (
    <MainContainer>
    <DestinationTitle >
        <span>02</span>
        <h1>Chapter.Portfolio.</h1>
      </DestinationTitle>
      

<section className='projects'  ref={sectionRef} id='portfolio'>
	<div className='projects__container'>
		{projects
    .map((value) => (
				<ProjectCard
					key={value.name}
					name={value.name}
					description={value.description}
					repoLink={value.repoLink}
					image={value.image}
					tags={value.tags}
				/>
			))}
	</div>
</section>

    </MainContainer>
  );
};

export {Project}