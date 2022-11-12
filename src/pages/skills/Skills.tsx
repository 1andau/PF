import { useCallback, useState } from 'react';
import { SkillBox } from './Skillbox';
import { DestinationTitle, MainContainer } from '../../GlobalStyles';
import { skills } from './data';
import { Cards } from 'pages/styled';
import { CategoryContainer } from 'pages/styled';
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
        <h1>Chapter.Skills.</h1>
      </DestinationTitle>

      <MainContainer>
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
      </MainContainer>
    </>
  );
};
