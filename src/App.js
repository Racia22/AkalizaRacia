import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
  } catch (e) {
    // storage unavailable, fall through to system preference
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
}

function App() {
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      try {
        localStorage.setItem('theme', prev ? 'light' : 'dark');
      } catch (e) {
        // ignore
      }
      return !prev;
    });
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  // Fade sections in as they scroll into view
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
