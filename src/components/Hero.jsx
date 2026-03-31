import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="tech-ring ring-1"></div>
        <div className="tech-ring ring-2"></div>
        <div className="tech-ring ring-3"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">RECRUITMENT OPEN 2026</div>
          <h1 className="hero-title glitch" data-text="Acharya Tech Habba">
            Acharya Tech Habba <br/><span className="highlight-text">2026</span>
          </h1>
          <p className="hero-subtitle">
            Join the elite team behind the biggest tech fest. We are looking for passionate volunteers to 
            shape the future of innovation, technical excellence, and seamless organization.
          </p>
          <div className="hero-actions">
            <a href="#apply" className="btn-primary hero-btn">
              Apply Now
            </a>
            <a href="#teams" className="btn-outline hero-btn">
              Explore Roles
            </a>
          </div>
        </div>

        {/* Abstract Tech Graphic Side */}
        <div className="hero-graphic">
          <div className="graphic-container">
            <div className="glass-panel panel-1">
              <div className="panel-header">System Check</div>
              <div className="panel-dots">
                <span></span><span></span><span></span>
              </div>
            </div>
            <div className="glass-panel panel-2">
              <div className="stats-row">
                <div className="stat">
                  <span className="stat-num">1000+</span>
                  <span className="stat-label">Participants</span>
                </div>
                <div className="stat">
                  <span className="stat-num">20+</span>
                  <span className="stat-label">Tech Events</span>
                </div>
              </div>
            </div>
            <div className="graphic-circle center-circle"></div>
            <div className="graphic-circle outer-circle"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
