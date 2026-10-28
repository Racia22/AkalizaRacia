import React from 'react';
import '../styles/Education.css';
import { portfolioData } from '../data/portfolioData';

function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Education</span>
          <h2>Academic background</h2>
        </div>

        <div className="education-timeline">
          {portfolioData.education.map(edu => (
            <div key={edu.id} className="timeline-item reveal">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="year">{edu.year}</span>
                <h3>{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>
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
