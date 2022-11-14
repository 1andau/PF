import { useCallback, useState } from 'react';
import { SkillBox } from './Skillbox';
import { DestinationTitle } from '../../GlobalStyles';
import { skills } from './data';
import { Cards, Education } from 'pages/styled';
import { CategoryContainer } from 'pages/styled';

// my-app/src/pages/skills/Sarah.JPG
export const Skills = () => {
  const [category] = useState<string[]>([...new Set(skills.map((value) => value.type))]);
  const [activeTab, setActiveTab] = useState(category[0]);
  const handleTabClick = useCallback((name: string) => {
    setActiveTab(name);
  }, []);

  return (

      <>
      <DestinationTitle>
        <span>03</span>
        <h1>Chapter.Skills and Education.</h1>
      </DestinationTitle>





<Education>
    <h4>Education</h4>
  <div className="education__content">
    <h5>National University of Computer & Emerging Sciences, Lahore</h5>
    <span className="year"> 2018</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, reiciendis.</p>

  </div>
  <div className="education__content">
  <h5>National University of Computer & Emerging Sciences, Lahore</h5>
    <span className="year"> 2018</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, reiciendis.</p>
  </div>

  <div className="education__content">
  <h5>National University of Computer & Emerging Sciences, Lahore</h5>
    <span className="year"> 2018</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, reiciendis.</p>
  </div>
</Education>






<h4>Skills</h4>
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
          {skills
            .filter((value) => value.type === activeTab)
            .map((value) => (
              <>
                <SkillBox
                  title={value.title}
                  icon={value.icon}
                  isMainSkill={value.isMainSkill}
                  key={value.title}
                />
              </>
            ))}
        </Cards>
      </>

  );
};
