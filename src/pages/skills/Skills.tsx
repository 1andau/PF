import  {useState} from 'react';
import { SkillBox } from './Skillbox';
import { DestinationTitle, MainContainer } from '../../GlobalStyles';
import Categories from '../../components/categories/Categories';
import { skills } from './data';
export const Skills = () => {
  
  return (
<>
<DestinationTitle className="Chapter">
        <span>03</span>
        <h1>Chapter.Skills.</h1>
      </DestinationTitle>


<MainContainer>
<Categories />
<div className="skillsCards">
{skills.map((value) => (
<>
 <SkillBox
 title={value.title}
 icon={value.icon}
isMainSkill={value.isMainSkill}
key={value.title}
 />
</>
                  ))}
</div>


</MainContainer>


    </>
  );
};
//тут ошибка с вариантами какая-то, да и хуй бы с ней, я сделаюю 
//по другомуб напомер категоризацию 