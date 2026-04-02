import React from 'react';
import './Teams.css';

const teams = [
  {
    id: 'marketing',
    code: '01',
    icon: '📡',
    title: 'Marketing Team',
    tagline: 'Spread The Signal',
    desc: 'Build campaigns that reach every corner of campus. Strategize social media outreach, design engagement hooks, and make Acharya Tech Habba impossible to ignore.',
    skills: ['Social Media', 'Content Creation', 'Campaign Strategy'],
    needsExperience: false,
  },
  {
    id: 'sponsorship',
    code: '02',
    icon: '🤝',
    title: 'Sponsorship & Promotion',
    tagline: 'Fuel The Machine',
    desc: 'Connect with industry partners, pitch sponsorship packages, and build relationships that fund innovation. This is where strategy meets negotiation.',
    skills: ['Networking', 'Business Development', 'Communication'],
    needsExperience: false,
  },
  {
    id: 'design',
    code: '03',
    icon: '🎨',
    title: 'Design Team',
    tagline: 'Make It Visual',
    desc: 'Create the visual identity of the fest — from posters and banners to digital assets and merch. Your pixels will define how 1000+ people experience ATH 2026.',
    skills: ['Figma / PS / AI', 'Brand Identity', 'Motion Graphics'],
    needsExperience: true,
  },
  {
    id: 'decoration',
    code: '04',
    icon: '🏗️',
    title: 'Decoration Team',
    tagline: 'Build The Experience',
    desc: "Transform the Acharya campus. Design stage setups, creative installations, and themed environments that make attendees feel they've entered a different world.",
    skills: ['Event Theming', 'Space Design', 'Physical Installations'],
    needsExperience: true,
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
