import React from 'react';
import '../styles/About.css';
import { portfolioData } from '../data/portfolioData';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">About me</span>
          <h2>Building software end-to-end</h2>
        </div>

        <div className="about-content">
          <div className="about-text reveal">
            {portfolioData.about.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="about-stats">
              {portfolioData.stats.map(stat => (
                <div key={stat.label} className="stat">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-highlights reveal">
            {portfolioData.highlights.map(item => (
              <div key={item.title} className="highlight-card">
                <i className={item.icon}></i>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
