import React from 'react';
import '../styles/Footer.css';
import { portfolioData } from '../data/portfolioData';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} {portfolioData.name}. All rights reserved.</p>
          <div className="footer-links">
            <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${portfolioData.social.email}`}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
