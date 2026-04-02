import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#" className="nav-logo">
          <span className="logo-bracket">[</span>
          AIT<span className="logo-accent">2026</span>
          <span className="logo-bracket">]</span>
        </a>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#teams" onClick={() => setMenuOpen(false)}>Roles</a>
          <a href="#showcase" onClick={() => setMenuOpen(false)}>About Fest</a>
          <a href="#apply" className="nav-cta" onClick={() => setMenuOpen(false)}>Apply Now</a>
        </nav>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
