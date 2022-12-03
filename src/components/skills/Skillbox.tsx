import React from 'react';
import { SkillIcons, SkillCard } from '../../pages/styled';

export interface ISkillBox {
  title: string;
  icon: string;
  isMainSkill?: boolean;
}

 const SkillBox = (
  {
    title,
    icon,
    isMainSkill,
} :ISkillBox
) => {
  return (
    
    <SkillCard>
            {isMainSkill && (
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='15'
            height='15'
            viewBox='0 0 24 24'
            className='premium'
          >
            <path d='M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z' />
          </svg>
        </div>
      )} 
    <div className="skills__inner">
     {icon ? (
          <SkillIcons
          src={`/icons/${icon}`}
          alt={title} />
      ) : (
     
        <p>
          {title}
        </p>
      )}
   
    </div>
  </SkillCard>
  );
};


export {SkillBox}