import React from 'react';
import '../styles/Skills.css';
import { portfolioData } from '../data/portfolioData';

function Skills() {
  const skillsArray = [
    { category: 'Frontend', skills: portfolioData.skills?.frontend || [] },
    { category: 'Backend', skills: portfolioData.skills?.backend || [] },
    { category: 'Tools & Platforms', skills: portfolioData.skills?.tools || [] },
    { category: 'Other Skills', skills: portfolioData.skills?.other || [] }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        
        <div className="skills-grid">
          {skillsArray.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3>{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
