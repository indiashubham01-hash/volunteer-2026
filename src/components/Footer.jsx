import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-inner">
      <div className="footer-brand">
        <div className="footer-logos">
          <img src="/tbo-logo.png" alt="The Big O Logo" className="footer-logo-img tbo-logo-footer" />
          <span className="footer-logo-divider">×</span>
          <div className="acharya-badge">
            <img src="/acharya-logo.png" alt="Acharya Logo" className="footer-logo-img acharya-logo-footer" />
          </div>
        </div>
        <p>Presented by <strong className="bigo-credit">The Big O</strong><br/>Acharya Institute of Technology<br />Bangalore, Karnataka</p>
      </div>

      <nav className="footer-links">
        <a href="#teams">Roles</a>
        <a href="#showcase">About</a>
        <a href="#apply">Apply</a>
      </nav>

      <p className="footer-copy">
        &copy; 2026 Acharya Tech Habba · All rights reserved
      </p>
    </div>
  </footer>
);

export default Footer;
