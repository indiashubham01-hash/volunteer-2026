import React from 'react';
import './Teams.css';

const teams = [
  {
    id: 'marketing',
    code: '01',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
        <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
        <circle cx="12" cy="12" r="2" />
        <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
        <path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1" />
      </svg>
    ),
    title: 'Marketing Team',
    tagline: 'Spread The Signal',
    desc: 'Build campaigns that reach every corner of campus. Strategize social media outreach, design engagement hooks, and make Acharya Tech Habba impossible to ignore.',
    skills: ['Social Media', 'Content Creation', 'Campaign Strategy'],
    needsExperience: false,
  },
  {
    id: 'sponsorship',
    code: '02',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    title: 'Sponsorship & Promotion',
    tagline: 'Fuel The Machine',
    desc: 'Connect with industry partners, pitch sponsorship packages, and build relationships that fund innovation. This is where strategy meets negotiation.',
    skills: ['Networking', 'Business Development', 'Communication'],
    needsExperience: false,
  },
  {
    id: 'design',
    code: '03',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
    title: 'Design Team',
    tagline: 'Make It Visual',
    desc: 'Create the visual identity of the fest — from posters and banners to digital assets and merch. Your pixels will define how 1000+ people experience ATH 2026.',
    skills: ['Figma / PS / AI', 'Brand Identity', 'Motion Graphics'],
    needsExperience: false,
  },
  {
    id: 'decoration',
    code: '04',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: 'Decoration Team',
    tagline: 'Build The Experience',
    desc: "Transform the Acharya campus. Design stage setups, creative installations, and themed environments that make attendees feel they've entered a different world.",
    skills: ['Event Theming', 'Space Design', 'Physical Installations'],
    needsExperience: false,
  },
  {
    id: 'socialmedia',
    code: '05',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: 'Social Media Team',
    tagline: 'Own The Narrative',
    desc: 'Create viral content, manage social handles, cover live events, and design engaging reels. Make the fest trend across campus.',
    skills: ['Content Creation', 'Video Editing', 'Community Management'],
    needsExperience: false,
  },
];

const Teams = ({ onTeamSelect }) => (
  <section id="teams" className="teams-section">
    <div className="container">
      <p className="section-label">Open Positions</p>
      <h2 className="section-heading">Choose Your Domain</h2>
      <div className="signal-line" />

      <div className="teams-grid">
        {teams.map((team) => (
          <div
            key={team.id}
            className="team-card"
            onClick={() => onTeamSelect(team.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onTeamSelect(team.id)}
          >
            <div className="card-top">
              <span className="card-code">{team.code}</span>
              <span className="card-icon">{team.icon}</span>
            </div>
            <h3 className="card-title">{team.title}</h3>
            <p className="card-tagline">{team.tagline}</p>
            <p className="card-desc">{team.desc}</p>

            <div className="card-skills">
              {team.skills.map((s) => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>

            {team.needsExperience && (
              <div className="card-exp-badge">Portfolio / Experience Required</div>
            )}

            <div className="card-cta">
              Apply for this role <span>→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Teams;
