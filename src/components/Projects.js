import React from 'react';
import '../styles/Projects.css';
import { portfolioData } from '../data/portfolioData';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Projects</span>
          <h2>Selected work</h2>
        </div>

        <div className="projects-grid">
          {portfolioData.projects.map(project => (
            <article
              key={project.id}
              className={`project-card reveal ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-image">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
                  />
                ) : (
                  <div className="project-placeholder">
                    <i className={project.icon || 'fas fa-code'}></i>
                  </div>
                )}
                {project.featured && <span className="featured-badge">Capstone</span>}
              </div>

              <div className="project-content">
                <div className="project-header">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>
                  {project.year && <span className="project-year">{project.year}</span>}
                </div>

                <p className="project-description">{project.description}</p>

                <div className="tag-list">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>

                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i> View code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
