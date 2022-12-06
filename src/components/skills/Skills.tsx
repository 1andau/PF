import { useCallback, useState } from 'react';
import { SkillBox } from './Skillbox';
import { DestinationTitle, MainContainer } from '../../GlobalStyles';
import { skills } from './data';
import { CategoryContainer, Cards } from '../../pages/styled';

 const Skills = () => {
  const [category] = useState<string[]>([...new Set(skills.map((value) => value.type ))]);
  const [activeTab, setActiveTab] = useState(category[0]);

  const handleTabClick = useCallback((name: string) => {
    setActiveTab(name);
  }, []);

  return (
      <MainContainer id='skills'>
      <DestinationTitle>
        <span>04</span>
        <h1>Chapter.Skills and Education.</h1>
      </DestinationTitle>

<h4>Skills</h4>
<div className="block" >
<ul>
<CategoryContainer>
        
            {category.map((value) => (
              <label
                onClick={() => handleTabClick(value)}
                className={activeTab === value ? 'active' : ''}
                key={value}>
                <span>{value}</span>
              </label>
            ))}
        </CategoryContainer>
        </ul>
        <Cards>
          {skills
            .filter((value) => value.type === activeTab )
            .map((value, i:number) => (
              <>
                <SkillBox
                  title={value.title}
                  icon={value.icon}
                  isMainSkill={value.isMainSkill}
                  key={i}
                />
              </>
            ))}
        </Cards>
</div>

      </MainContainer>

  );
};

export {Skills}