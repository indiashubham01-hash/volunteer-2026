import React from 'react';
import './TechShowcase.css';

const pillars = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    code: 'module_01',
    title: 'Software & AI',
    desc: '24-hour hackathons, algorithm battles, ML model showdowns. Push code to its absolute limit.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    code: 'module_02',
    title: 'Cyber Security',
    desc: 'CTF challenges, network infiltration simulations, and cryptographic battles for the bold.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
      </svg>
    ),
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
