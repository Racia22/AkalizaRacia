import React, { useState } from 'react';
import '../styles/Contact.css';
import { portfolioData } from '../data/portfolioData';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // No backend: open the visitor's mail client with the message pre-filled
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `${formData.message}\n\n— ${formData.name} (${formData.email})`;
    window.location.href =
      `mailto:${portfolioData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Contact</span>
          <h2>Let's work together</h2>
          <p className="section-subtitle">
            I'm open to junior and graduate roles, internships and freelance projects. Reach out any time.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info reveal">
            <a className="contact-item" href={`mailto:${portfolioData.email}`}>
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>{portfolioData.email}</p>
              </div>
            </a>

            <a className="contact-item" href={`tel:${portfolioData.phone.replace(/\s/g, '')}`}>
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>{portfolioData.phone}</p>
              </div>
            </a>

            <div className="contact-item">
              <i className="fas fa-location-dot"></i>
              <div>
                <h3>Location</h3>
                <p>{portfolioData.location}</p>
              </div>
            </div>

            <a className="contact-item" href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
              <div>
                <h3>LinkedIn</h3>
                <p>Connect with me</p>
              </div>
            </a>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message <i className="fas fa-paper-plane"></i>
            </button>
            {sent && (
              <p className="form-note">Your email app should open with the message ready to send.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
