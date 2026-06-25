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
            <div className="pillar-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3>Software & AI</h3>
            <p>From 24-hour intense hackathons to algorithm battles. Dive deep into Web3, Machine Learning applications, and Full-Stack developments.</p>
          </div>
          
          <div className="pillar">
            <div className="pillar-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3>Cyber Security</h3>
            <p>Engage in Capture The Flag (CTF) challenges, uncover system vulnerabilities, and master cryptographic theory in high-stakes network defense battles.</p>
          </div>
          
          <div className="pillar">
            <div className="pillar-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="22" />
              </svg>
            </div>
            <h3>Industry Insights</h3>
            <p>Connect directly with tech industry leaders through hands-on workshops and keynote sessions dissecting the future of software architecture.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTech;
