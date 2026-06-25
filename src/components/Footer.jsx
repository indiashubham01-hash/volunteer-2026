import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-inner">
      <div className="footer-brand">
        <span className="footer-logo">
          <span className="logo-bracket">[</span>
          TBO <span className="logo-accent">× Acharya</span>
          <span className="logo-bracket">]</span>
        </span>
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
