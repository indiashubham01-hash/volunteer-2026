import React from 'react';
import './Teams.css';

const teamsData = [
  {
    id: 'marketing',
    title: 'Marketing Team',
    description: 'Drive the campaign and build the hype. Strategize outreach and engagement.',
    icon: '📊'
  },
  {
    id: 'sponsorship',
    title: 'Sponsorship & Promotion',
    description: 'Connect with partners, secure sponsorships, and manage external relations.',
    icon: '🤝'
  },
  {
    id: 'design',
    title: 'Design Team',
    description: 'Create stunning visuals, merchandise, and digital assets for the fest.',
    icon: '🎨'
  },
  {
    id: 'decoration',
    title: 'Decoration Team',
    description: 'Transform the campus with creative physical installations and stage setups.',
    icon: '✨'
  }
];

const Teams = ({ onTeamSelect }) => {
  return (
    <section id="teams" className="teams section">
      <div className="container">
        <h2>Recruiting Teams</h2>
        <p className="teams-subtitle">Click on a team below to apply directly.</p>
        <div className="teams-grid">
          {teamsData.map((team) => (
            <div 
              key={team.id} 
              className="team-card clickable-card"
              onClick={() => onTeamSelect(team.id)}
            >
              <div className="team-icon">{team.icon}</div>
              <h3 className="team-title">{team.title}</h3>
              <p className="team-desc">{team.description}</p>
              <div className="card-apply-hint">Apply Now &rarr;</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
