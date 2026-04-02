import React from 'react';
import './TechShowcase.css';

const pillars = [
  {
    icon: '💻',
    code: 'module_01',
    title: 'Software & AI',
    desc: '24-hour hackathons, algorithm battles, ML model showdowns. Push code to its absolute limit.',
  },
  {
    icon: '🛡️',
    code: 'module_02',
    title: 'Cyber Security',
    desc: 'CTF challenges, network infiltration simulations, and cryptographic battles for the bold.',
  },
  {
    icon: '🎤',
    code: 'module_03',
    title: 'Industry Insights',
    desc: 'Live sessions from CTOs, architects, and builders shaping the future of software systems.',
  },
];

const TechShowcase = () => (
  <section id="showcase" className="showcase-section">
    <div className="container">
      <p className="section-label">What We Build</p>
      <h2 className="section-heading">The Fest At A Glance</h2>
      <div className="signal-line" />

      <div className="showcase-layout">
        <div className="showcase-pillars">
          {pillars.map((p) => (
            <div key={p.code} className="pillar-row">
              <div className="pillar-meta">
                <span className="pillar-code">{p.code}</span>
                <span className="pillar-icon">{p.icon}</span>
              </div>
              <div className="pillar-content">
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="showcase-callout">
          <div className="callout-inner">
            <p className="callout-label">Why Volunteer?</p>
            <h3 className="callout-heading">Build skills. Make connections. Leave a mark.</h3>
            <ul className="callout-list">
              <li><span>→</span> Official completion certificate</li>
              <li><span>→</span> Direct industry networking</li>
              <li><span>→</span> Resume-level event management</li>
              <li><span>→</span> Exclusive volunteer goodies &amp; perks</li>
            </ul>
            <a href="#apply" className="btn-primary">Apply Today</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TechShowcase;
