import React from 'react';
import { motion } from 'framer-motion';
import './skillbox.scss';
import { ISkillBox } from '../../types/skills/types';

export const SkillBox = (
  {
    title,
    icon,
    isMainSkill,

} :ISkillBox
) => {
  return (

    
    <div className="skillcard">
    <div className="skills__inner">
     
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
      {icon ? (
        <img className='skillsIcons'
          src={`/icons/${icon}`}
          alt={title}
        />
      ) : (
     
        <p>
          {title}
        </p>
      )}
   
    </div>
  </div>
  );
};
