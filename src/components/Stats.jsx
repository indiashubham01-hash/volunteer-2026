import React, { useEffect, useRef, useState } from 'react';
import './Stats.css';

const stats = [
  { value: 1000, suffix: '+', label: 'Participants' },
  { value: 20,   suffix: '+', label: 'Tech Events' },
  { value: 4,    suffix: '',  label: 'Volunteer Teams' },
  { value: 48,   suffix: 'H', label: 'Of Non-Stop Action' },
];

function useCountUp(target, duration = 1500, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);
  return count;
}

const StatItem = ({ value, suffix, label, started }) => {
  const count = useCountUp(value, 1200, started);
  return (
    <div className="stat-item">
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

const Stats = () => {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-inner">
        {stats.map((s, i) => (
          <StatItem key={s.label} {...s} started={started} />
        ))}
      </div>
      <div className="stats-note">
        <p>Applications are reviewed within 5 working days. Only Acharya Institute students are eligible.</p>
      </div>
    </section>
  );
};

export default Stats;
