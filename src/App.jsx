import React, { useState } from 'react';
import Hero from './components/Hero';
import Teams from './components/Teams';
import ApplicationForm from './components/ApplicationForm';
import AboutTech from './components/AboutTech';
import NetworkBackground from './components/NetworkBackground';
import './App.css';

function App() {
  const [selectedTeam, setSelectedTeam] = useState('');

  const handleTeamSelect = (teamId) => {
    setSelectedTeam(teamId);
    const formSection = document.getElementById('apply');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <NetworkBackground />
      <div className="app-container">
        <Hero />
        <div className="main-content">
        <Teams onTeamSelect={handleTeamSelect} />
        <ApplicationForm preselectedTeam={selectedTeam} />
        <AboutTech />
      </div>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Acharya Tech Habba. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  );
}

export default App;
