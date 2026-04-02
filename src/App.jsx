import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Teams from './components/Teams';
import HudDivider from './components/HudDivider';
import TechShowcase from './components/TechShowcase';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';
import NetworkBackground from './components/NetworkBackground';
import './App.css';

function App() {
  const [selectedTeam, setSelectedTeam] = useState('');

  const handleTeamSelect = (teamId) => {
    setSelectedTeam(teamId);
    setTimeout(() => {
      const el = document.getElementById('apply');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <>
      <NetworkBackground />
      <div className="site-wrapper">
        <Navbar />
        <Hero />
        <Stats />
        <Teams onTeamSelect={handleTeamSelect} />
        <HudDivider />
        <TechShowcase />
        <ApplicationForm preselectedTeam={selectedTeam} />
        <Footer />
      </div>
    </>
  );
}

export default App;
