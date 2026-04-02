import React from 'react';
import './HudDivider.css';

const HudDivider = () => (
  <div className="hud-divider" aria-hidden="true">
    <div className="hud-inner container">

      {/* Left: animated radar */}
      <div className="radar-wrap">
        <div className="radar-rings">
          <div className="radar-ring r1" />
          <div className="radar-ring r2" />
          <div className="radar-ring r3" />
          <div className="radar-ring r4" />
        </div>
        <div className="radar-sweep" />
        <div className="radar-center" />
        <div className="radar-crosshair ch-h" />
        <div className="radar-crosshair ch-v" />
        {/* Blips */}
        <div className="blip b1" />
        <div className="blip b2" />
        <div className="blip b3" />
        <div className="blip b4" />
      </div>

      {/* Middle: data readout lines */}
      <div className="hud-readout">
        <div className="readout-line">
          <span className="rl-key">SYSTEM</span>
          <div className="rl-bar-wrap"><div className="rl-bar" style={{width:'92%'}} /></div>
          <span className="rl-val">92%</span>
        </div>
        <div className="readout-line">
          <span className="rl-key">TEAMS</span>
          <div className="rl-bar-wrap"><div className="rl-bar" style={{width:'100%'}} /></div>
          <span className="rl-val">04</span>
        </div>
        <div className="readout-line">
          <span className="rl-key">SLOTS</span>
          <div className="rl-bar-wrap"><div className="rl-bar rl-bar-amber" style={{width:'60%'}} /></div>
          <span className="rl-val amber">LIMITED</span>
        </div>
        <div className="readout-line">
          <span className="rl-key">STATUS</span>
          <div className="rl-bar-wrap"><div className="rl-bar rl-bar-green" style={{width:'100%'}} /></div>
          <span className="rl-val green">OPEN</span>
        </div>
        <div className="hud-ticker">
          <span>RECRUITMENT_2026</span>
          <span className="sep">·</span>
          <span>BIGŌ_CLUB</span>
          <span className="sep">·</span>
          <span>AIT_BANGALORE</span>
          <span className="sep">·</span>
          <span>ACHARYA_TECH_HABBA</span>
          <span className="sep">·</span>
          <span>RECRUITMENT_2026</span>
          <span className="sep">·</span>
          <span>BIGŌ_CLUB</span>
          <span className="sep">·</span>
          <span>AIT_BANGALORE</span>
        </div>
      </div>

      {/* Right: circuit SVG graphic */}
      <div className="circuit-wrap">
        <svg viewBox="0 0 200 200" className="circuit-svg">
          {/* Horizontal traces */}
          <line x1="0"   y1="40"  x2="80"  y2="40"  className="trace" />
          <line x1="120" y1="40"  x2="200" y2="40"  className="trace" />
          <line x1="0"   y1="100" x2="60"  y2="100" className="trace" />
          <line x1="140" y1="100" x2="200" y2="100" className="trace" />
          <line x1="0"   y1="160" x2="80"  y2="160" className="trace" />
          <line x1="120" y1="160" x2="200" y2="160" className="trace" />
          {/* Vertical traces */}
          <line x1="60"  y1="0"   x2="60"  y2="60"  className="trace" />
          <line x1="60"  y1="140" x2="60"  y2="200" className="trace" />
          <line x1="140" y1="0"   x2="140" y2="60"  className="trace" />
          <line x1="140" y1="140" x2="140" y2="200" className="trace" />
          <line x1="100" y1="0"   x2="100" y2="80"  className="trace" />
          <line x1="100" y1="120" x2="100" y2="200" className="trace" />
          {/* Connector arcs as quarter circles */}
          <path d="M 80 40 Q 100 40 100 60" className="trace" fill="none" />
          <path d="M 100 80 Q 100 100 80 100" className="trace" fill="none" />
          <path d="M 140 60 Q 140 40 120 40" className="trace" fill="none" />
          <path d="M 140 100 Q 140 120 120 120" className="trace" fill="none" />
          <path d="M 60 100 Q 60 120 80 120" className="trace" fill="none" />
          <path d="M 80 160 Q 100 160 100 140" className="trace" fill="none" />
          <path d="M 100 120 Q 100 140 120 140 Q 140 140 140 160 Q 140 180 120 180" className="trace" fill="none" />
          {/* Nodes */}
          <circle cx="60"  cy="40"  r="4" className="node" />
          <circle cx="140" cy="40"  r="4" className="node" />
          <circle cx="100" cy="100" r="6" className="node node-pulse" />
          <circle cx="60"  cy="160" r="4" className="node" />
          <circle cx="140" cy="160" r="4" className="node" />
          <circle cx="60"  cy="100" r="3" className="node node-dim" />
          <circle cx="140" cy="100" r="3" className="node node-dim" />
          <circle cx="100" cy="40"  r="3" className="node node-dim" />
          <circle cx="100" cy="160" r="3" className="node node-dim" />
          {/* Chip block */}
          <rect x="84" y="84" width="32" height="32" rx="3" className="chip" />
          <text x="100" y="104" className="chip-text">IC</text>
          {/* Signal travel dots */}
          <circle cx="0" cy="40" r="2.5" className="signal-dot sd1">
            <animateMotion dur="3s" repeatCount="indefinite" path="M0,0 L80,0 Q100,0 100,20 L100,40 Q100,60 80,60 L60,60 L60,120 Q60,140 80,140 L100,140 Q100,120 100,100" />
          </circle>
          <circle cx="0" cy="0" r="2.5" className="signal-dot sd2">
            <animateMotion dur="4s" repeatCount="indefinite" begin="-1s" path="M200,100 L140,100 Q120,100 120,120 L120,140 Q120,160 100,160 L80,160" />
          </circle>
        </svg>
      </div>

    </div>
  </div>
);

export default HudDivider;
