import React from 'react';
import '../styles/Hero.css';
import { portfolioData } from '../data/portfolioData';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm <span>{portfolioData.name}</span></h1>
        <p className="hero-subtitle">{portfolioData.title}</p>
        <p className="hero-description">{portfolioData.bio}</p>
        
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>

        <div className="social-links">
          <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
          <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href={`mailto:${portfolioData.social.email}`} title="Email" className="social-icon">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">Scroll</div>
      </div>
    </section>
  );
}

export default Hero;
