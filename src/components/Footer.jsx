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
            <img src="/acharya-logo-transparent.png" alt="Acharya Logo" className="footer-logo-img acharya-logo-footer" />
          </div>
        </div>
        <p>Presented by <strong className="bigo-credit">The Big O</strong><br/>Acharya Institute of Technology<br />Bangalore, Karnataka</p>

        {/* Social Icons */}
        <div className="footer-social">
          <a
            href="https://www.instagram.com/thebigo_ait/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram"
            aria-label="Instagram — @thebigo_ait"
            title="@thebigo_ait on Instagram"
          >
            {/* Correct Instagram icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>

          <a
            href="mailto:thisisthebigo@gmail.com"
            className="social-icon email"
            aria-label="Email — thisisthebigo@gmail.com"
            title="thisisthebigo@gmail.com"
          >
            {/* Correct Envelope/Mail icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/company/thebigo/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
            aria-label="LinkedIn — The Big O"
            title="The Big O on LinkedIn"
          >
            {/* LinkedIn icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
      </div>

      <nav className="footer-links">
        <a href="#about-us">About Club</a>
        <a href="#teams">Roles</a>
        <a href="#showcase">About Fest</a>
        <a href="#apply">Apply</a>
      </nav>

      <p className="footer-copy">
        &copy; 2026 Acharya Tech Habba · All rights reserved
      </p>
    </div>
  </footer>
);

export default Footer;
