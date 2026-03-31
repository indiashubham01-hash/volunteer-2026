import React from 'react';
import './AboutTech.css';

const AboutTech = () => {
  return (
    <section className="about-tech section">
      <div className="tech-bg-overlay"></div>
      <div className="container relative-z">
        <div className="about-tech-header">
          <h2>The Core of <span className="highlight-text">Acharya Tech Habba</span></h2>
          <p>We are more than just a fest. We are the epicenter of innovation, collaboration, and cutting-edge engineering.</p>
        </div>
        
        <div className="tech-pillars">
          <div className="pillar">
            <div className="pillar-icon">💻</div>
            <h3>Software & AI</h3>
            <p>From 24-hour intense hackathons to algorithm battles. Dive deep into Web3, Machine Learning applications, and Full-Stack developments.</p>
          </div>
          
          <div className="pillar">
            <div className="pillar-icon">🛡️</div>
            <h3>Cyber Security</h3>
            <p>Engage in Capture The Flag (CTF) challenges, uncover system vulnerabilities, and master cryptographic theory in high-stakes network defense battles.</p>
          </div>
          
          <div className="pillar">
            <div className="pillar-icon">🎤</div>
            <h3>Industry Insights</h3>
            <p>Connect directly with tech industry leaders through hands-on workshops and keynote sessions dissecting the future of software architecture.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTech;
