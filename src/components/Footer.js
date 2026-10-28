import React from 'react';
import '../styles/Footer.css';
import { portfolioData } from '../data/portfolioData';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <a href="#home" className="footer-logo">AR<span>.</span></a>
          <p>&copy; {currentYear} {portfolioData.name}. Built with React.</p>
          <div className="footer-links">
            <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href={`mailto:${portfolioData.social.email}`} aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
