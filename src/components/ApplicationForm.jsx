import React, { useState, useEffect } from 'react';
import './ApplicationForm.css';

const yearOptions = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
const teamOptions = [
  { value: 'marketing', label: '01 — Marketing Team' },
  { value: 'sponsorship', label: '02 — Sponsorship & Promotion' },
  { value: 'design', label: '03 — Design Team' },
  { value: 'decoration', label: '04 — Decoration Team' },
  { value: 'socialmedia', label: '05 — Social Media Team' },
];

const EXPERIENCE_TEAMS = ['design', 'decoration'];

const ApplicationForm = ({ preselectedTeam }) => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', department: '', usn: '', year: '', team: '', experience: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedTeam) setForm(f => ({ ...f, team: preselectedTeam }));
  }, [preselectedTeam]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formKey = "yQkUNRpClPCpUl7Y2bVNRW3QjJhzw8Ir";
    const formName = "volunteers";

    const data = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      department: form.department,
      usn: form.usn,
      year: form.year,
      team: form.team,
      experience: form.experience
    };

    if (window.Pageclip) {
      window.Pageclip.send(formKey, formName, data, (error, response) => {
        setIsSubmitting(false);
        if (error) {
          console.error('Pageclip submission error:', error);
        } else {
          console.log('Pageclip submission success:', response);
        }
        setIsSubmitted(true);
      });
    } else {
      console.warn('Pageclip client library not loaded, falling back to urlencoded fetch');
      const actionUrl = e.target.action || `https://send.pageclip.co/${formKey}/${formName}`;
      const searchParams = new URLSearchParams();
      Object.keys(data).forEach(key => searchParams.append(key, data[key]));

      fetch(actionUrl, {
        method: 'POST',
        body: searchParams,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      })
        .then(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
        })
        .catch((error) => {
          console.error('Fallback submit error:', error);
          setIsSubmitting(false);
          setIsSubmitted(true);
        });
    }
  };

  const needsExp = EXPERIENCE_TEAMS.includes(form.team);
  const selectedLabel = teamOptions.find(t => t.value === form.team)?.label || '';

  return (
    <section id="apply" className="apply-section">
      <div className="container apply-layout">
        <div className="apply-left">
          <p className="section-label">Volunteer Application</p>
          <h2 className="section-heading">Join The Team</h2>
          <div className="signal-line" />
          <p className="apply-intro">
            Fill in your details carefully. All applications are reviewed personally.
            Shortlisted candidates will be contacted on their Acharya email.
          </p>
          {form.team && !isSubmitted && (
            <div className="selected-team-panel">
              <span className="stp-label">Applying For</span>
              <span className="stp-value">{selectedLabel}</span>
            </div>
          )}
        </div>

        <div className="apply-right">
          {isSubmitted ? (
            <div className="success-card">
              <div className="success-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Response Submitted Successfully!</h3>
              <p>Thank you for applying to the Acharya Tech Habba 2026 team. We have successfully received your form.<br /><br />Shortlisted candidates will be contacted via their provided Acharya email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} action="https://send.pageclip.co/yQkUNRpClPCpUl7Y2bVNRW3QjJhzw8Ir/volunteers" className="apply-form pageclip-form" method="post">
              <div className="form-row two-col">
                <div className="form-field">
                  <label className="form-label" htmlFor="name">Full Name</label>
                  <input
                    className="form-input"
                    type="text" id="name" name="name"
                    placeholder="Shubham Kumar"
                    value={form.name} onChange={handleChange} required
                  />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="email">Acharya Email ID</label>
                  <input
                    className="form-input"
                    type="email" id="email" name="email"
                    placeholder="name.usn@acharya.ac.in"
                    pattern=".+@acharya\.ac\.in"
                    title="Use your official @acharya.ac.in email"
                    value={form.email} onChange={handleChange} required
                  />
                </div>
              </div>

              <div className="form-row two-col">
                <div className="form-field">
                  <label className="form-label" htmlFor="phone">Phone Number</label>
                  <div className="phone-input-wrapper">
                    <span className="phone-prefix">+91</span>
                    <input
                      className="form-input phone-field"
                      type="tel" id="phone" name="phone"
                      placeholder="98XXXXXXXX"
                      pattern="[6-9][0-9]{9}"
                      title="Enter a valid 10-digit Indian mobile number"
                      maxLength={10}
                      value={form.phone} onChange={handleChange} required
                    />
                  </div>
                </div>
                <div className="form-field" />
              </div>

              <div className="form-row three-col">
                <div className="form-field">
                  <label className="form-label" htmlFor="department">Department</label>
                  <input
                    className="form-input"
                    type="text" id="department" name="department"
                    placeholder="CSE / ECE / ISE"
                    value={form.department} onChange={handleChange} required
                  />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="usn">USN</label>
                  <input
                    className="form-input"
                    type="text" id="usn" name="usn"
                    placeholder="1AY24..."
                    value={form.usn} onChange={handleChange} required
                  />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="year">Year of Study</label>
                  <div className="select-wrapper">
                    <select className="form-select" id="year" name="year" value={form.year} onChange={handleChange} required>
                      <option value="" disabled>Select year</option>
                      {yearOptions.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="team">Preferred Team</label>
                <div className="select-wrapper">
                  <select className="form-select" id="team" name="team" value={form.team} onChange={handleChange} required>
                    <option value="" disabled>Select a team</option>
                    {teamOptions.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                  </select>
                </div>
              </div>

              {needsExp && (
                <div className="form-field exp-field">
                  <label className="form-label" htmlFor="experience">
                    Prior Experience
                    <span className="exp-hint">(Required for {form.team === 'design' ? 'Design' : 'Decoration'} team)</span>
                  </label>
                  <textarea
                    className="form-textarea"
                    id="experience" name="experience"
                    placeholder="Describe past work, projects, tools you've used, or events you contributed to..."
                    value={form.experience} onChange={handleChange} required
                  />
                </div>
              )}

              <button type="submit" className="btn-primary submit-btn pageclip-form__submit" disabled={isSubmitting}>
                <span>{isSubmitting ? 'Submitting...' : 'Submit Application'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
