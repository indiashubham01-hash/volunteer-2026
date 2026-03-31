import React, { useState, useEffect } from 'react';
import './ApplicationForm.css';

const ApplicationForm = ({ preselectedTeam }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    usn: '',
    year: '',
    team: '',
    experience: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedTeam) {
      setFormData(prev => ({
        ...prev,
        team: preselectedTeam
      }));
    }
  }, [preselectedTeam]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    console.log('Form Submitted', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '', email: '', department: '', usn: '', year: '', team: '', experience: ''
      });
    }, 3000);
  };

  const showExperience = formData.team === 'design' || formData.team === 'decoration';

  return (
    <section id="apply" className="application section">
      <div className="container">
        <h2 className="section-title">Apply as Volunteer</h2>
        <div className="form-wrapper">
          {submitted ? (
            <div className="success-message">
              <h3>Application Submitted Successfully!</h3>
              <p>We will review your application and get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="signup-form">
              <div className="form-row">
                <div className="form-group half-width">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter full name"
                  />
                </div>
                <div className="form-group half-width">
                  <label htmlFor="email" className="form-label">Acharya Email ID</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    pattern=".+@acharya\.ac\.in"
                    title="Please use your official @acharya.ac.in email id"
                    placeholder="name.usn@acharya.ac.in"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group third-width">
                  <label htmlFor="department" className="form-label">Department</label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    className="form-input"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    placeholder="e.g. CSE, ISE, ECE"
                  />
                </div>
                <div className="form-group third-width">
                  <label htmlFor="usn" className="form-label">USN</label>
                  <input
                    type="text"
                    id="usn"
                    name="usn"
                    className="form-input"
                    value={formData.usn}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 1AY2..."
                  />
                </div>
                <div className="form-group third-width">
                  <label htmlFor="year" className="form-label">Year of Study</label>
                  <select
                    id="year"
                    name="year"
                    className="form-select"
                    value={formData.year}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select Year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="team" className="form-label">Preferred Team</label>
                <select
                  id="team"
                  name="team"
                  className="form-select"
                  value={formData.team}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select a Team</option>
                  <option value="marketing">Marketing Team</option>
                  <option value="sponsorship">Sponsorship & Promotion Team</option>
                  <option value="design">Design Team</option>
                  <option value="decoration">Decoration Team</option>
                </select>
              </div>

              {showExperience && (
                <div className="form-group full-width slide-down">
                  <label htmlFor="experience" className="form-label">
                    Prior Experience related to {formData.team === 'design' ? 'Design' : 'Decoration'}
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    className="form-textarea"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    placeholder="Briefly describe any related past work, projects, or events..."
                  ></textarea>
                </div>
              )}

              <div className="form-submit">
                <button type="submit" className="btn-primary form-btn">Submit Application</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
