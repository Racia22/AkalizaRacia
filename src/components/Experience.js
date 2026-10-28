import React from 'react';
import '../styles/Experience.css';
import { portfolioData } from '../data/portfolioData';

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Experience</span>
          <h2>Where I've worked</h2>
        </div>

        <div className="experience-list">
          {portfolioData.experience.map(job => (
            <article key={job.id} className="experience-card reveal">
              <div className="experience-meta">
                <span className="experience-duration">{job.duration}</span>
                <h3>{job.position}</h3>
                <p className="experience-company">{job.company}</p>
              </div>
              <div className="experience-body">
                <ul>
                  {job.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <div className="tag-list">
                  {job.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
