import { DestinationTitle, MainContainer } from '../../GlobalStyles';
import ProjectCard from './ProjectCard'; 
import {projects} from './data';
import { useState } from 'react';
import { ProjectType } from '../../types/project/types';
import { useCallback } from 'react';
import { Cards } from 'pages/styled';
import { CategoryContainer } from 'pages/styled';
import React from 'react';


export const Portfolio = () => {
  const category = Object.values(ProjectType);
  const [activeTab, setActiveTab] = useState(ProjectType.WEB);



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


<Cards>
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
</Cards>

     

    </MainContainer>
  );
};
