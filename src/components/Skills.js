import React from 'react';
import '../styles/Skills.css';
import { portfolioData } from '../data/portfolioData';

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Skills</span>
          <h2>Tools I work with</h2>
        </div>

        <div className="skills-grid">
          {portfolioData.skills.map(group => (
            <div key={group.category} className="skill-category reveal">
              <div className="skill-header">
                <i className={group.icon}></i>
                <h3>{group.category}</h3>
              </div>
              <div className="skill-items">
                {group.items.map(skill => (
                  <span key={skill} className="skill-badge">{skill}</span>
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
