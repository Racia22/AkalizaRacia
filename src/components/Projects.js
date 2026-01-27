import React from 'react';
import '../styles/Projects.css';
import { portfolioData } from '../data/portfolioData';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        
        <div className="projects-grid">
          {portfolioData.projects?.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="project-link">View Project</a>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {(project.technologies || []).map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
