import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const stackRef = useRef(null);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;

    const handleMouseMove = (e) => {
      const rect = stack.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      const cards = stack.querySelectorAll('.pcard');
      cards.forEach((card, i) => {
        const depth = (cards.length - i) * 0.4;
        const rx = -dy * 8 * depth;
        const ry = dx * 8 * depth;
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(${(cards.length - i) * 12}px)`;
      });
    };

    const handleMouseLeave = () => {
      const cards = stack.querySelectorAll('.pcard');
      cards.forEach((card, i) => {
        card.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(${(cards.length - i) * 12}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    stack.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      stack.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="hero">
      {/* Background geometry */}
      <div className="hero-geo" aria-hidden>
        <div className="geo-band" />
        <div className="geo-dots" />
        <div className="geo-line gl1" />
        <div className="geo-line gl2" />
        <div className="geo-line gl3" />
      </div>

      <div className="container hero-body">
        {/* ── LEFT: Typography lockup ── */}
        <div className="hero-left">
          <div className="hero-overline anim anim-d1">
            <span className="ol-badge">BigO Club</span>
            <span className="ol-sep">×</span>
            <span className="ol-text">AIT Bangalore · 2026</span>
          </div>

          <h1 className="hero-h1 anim anim-d2">
            <span className="h1-row row-accent">Acharya</span>
            <span className="h1-row row-main">Tech</span>
            <span className="h1-row row-alt">Habba</span>
          </h1>

          <div className="hero-tag anim anim-d3">
            <div className="tag-mark" />
            <p className="tag-text">
              Volunteer Recruitment — Join the team that builds the fest from the inside.
              Choose your domain. Make your mark.
            </p>
          </div>

          <div className="hero-metrics anim anim-d4">
            <div className="metric">
              <span className="met-val">1000<sup>+</sup></span>
              <span className="met-key">Participants</span>
            </div>
            <div className="met-divider" />
            <div className="metric">
              <span className="met-val">20<sup>+</sup></span>
              <span className="met-key">Tech Events</span>
            </div>
            <div className="met-divider" />
            <div className="metric">
              <span className="met-val">04</span>
              <span className="met-key">Open Roles</span>
            </div>
          </div>

          <div className="hero-ctas anim anim-d5">
            <a href="#apply" className="btn-primary">Apply Now</a>
            <a href="#teams" className="btn-ghost">Explore Roles</a>
          </div>
        </div>

        {/* ── RIGHT: 3D card stack ── */}
        <div className="hero-right anim anim-d3" ref={stackRef}>
          {/* Card 3 — bottom */}
          <div className="pcard card-c">
            <div className="pcard-body">
              <span className="pcard-eyebrow">Recruitment Board</span>
              <div className="pcard-row">
                <span className="pcard-label">Status</span>
                <span className="pcard-chip chip-open">Open</span>
              </div>
              <div className="pcard-row">
                <span className="pcard-label">Deadline</span>
                <span className="pcard-val">Apr 2026</span>
              </div>
            </div>
          </div>

          {/* Card 2 — middle */}
          <div className="pcard card-b">
            <div className="pcard-body">
              <span className="pcard-eyebrow">Teams</span>
              <div className="pcard-teams">
                {['Marketing', 'Sponsorship', 'Design', 'Decoration'].map((t, i) => (
                  <div key={t} className="pcard-team-row">
                    <span className="pt-num">0{i + 1}</span>
                    <span className="pt-name">{t}</span>
                    <span className="pt-dot" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 1 — top */}
          <div className="pcard card-a">
            <div className="pcard-header">
              <div className="pcard-dots">
                <span /><span /><span />
              </div>
              <span className="pcard-title">volunteer_init.sh</span>
            </div>
            <div className="pcard-body terminal-body">
              <p><span className="t-p">$</span> ./start_recruitment.sh</p>
              <p className="t-out">Initializing AIT 2026<span className="t-blink">_</span></p>
              <p className="t-out">Loading team modules...</p>
              <p className="t-ok">✓ 4 teams ready</p>
              <p className="t-ok">✓ Applications open</p>
              <p><span className="t-p">$</span><span className="t-blink"> _</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden>
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
