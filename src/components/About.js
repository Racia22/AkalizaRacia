import React from 'react';
import '../styles/About.css';
import { portfolioData } from '../data/portfolioData';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with a strong foundation in both 
              frontend and backend technologies. With a keen eye for detail and a love for 
              clean code, I build scalable web applications that solve real-world problems.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or sharing my knowledge with the developer community.
            </p>
            
            <div className="about-info">
              <div className="info-item">
                <span className="label">Email:</span>
                <span className="value">{portfolioData.email}</span>
              </div>
              <div className="info-item">
                <span className="label">Phone:</span>
                <span className="value">{portfolioData.phone}</span>
              </div>
              <div className="info-item">
                <span className="label">Location:</span>
                <span className="value">{portfolioData.location}</span>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img 
              src="/portfolio-images/profile.jpeg" 
              alt="Akaliza Racia" 
              className="profile-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
