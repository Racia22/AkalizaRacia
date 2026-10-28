import React from 'react';
import '../styles/Hero.css';
import { portfolioData } from '../data/portfolioData';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span>{portfolioData.shortName}</span>
          </h1>
          <p className="hero-subtitle">{portfolioData.title}</p>
          <p className="hero-description">{portfolioData.bio}</p>

          <div className="hero-stack">
            {portfolioData.roles.map(role => (
              <span key={role}>{role}</span>
            ))}
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>

          <div className="social-links">
            <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href={`mailto:${portfolioData.social.email}`} aria-label="Email" className="social-icon">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="photo-frame">
            <img src="/portfolio-images/pic.jpeg" alt={portfolioData.name} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
