import React from 'react';
import '../styles/Education.css';
import { portfolioData } from '../data/portfolioData';

function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        
        <div className="education-timeline">
          {portfolioData.education.map((edu, index) => (
            <div key={edu.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>
                <p className="field">{edu.field}</p>
                <p className="year">{edu.year}</p>
                <p className="details">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
