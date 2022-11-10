import React from 'react'
import './categories.scss'


export const skills = ['Language', 'Frameworks', 'Design', 'Hosting', 'OS', 'other'];

const Categories = () => {
    
  return (
    <div className="divsiv">
      <ul>
        {skills.map((skillsName, i) => (
          <label key={i}>{skillsName}</label>
        ))}
      </ul>
    </div>  )
}

export default Categories