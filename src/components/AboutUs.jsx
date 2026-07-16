import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const values = [
    {
      num: '01',
      title: 'Real-world Execution',
      desc: 'Move past dry theory. We build live products, deploy real apps, and write production-ready code.'
    },
    {
      num: '02',
      title: 'Hackathon Teaming',
      desc: 'Find your co-builders, developers, and designers. We form elite teams to conquer national hackathons.'
    },
    {
      num: '03',
      title: 'Peer-to-Peer Learning',
      desc: 'Skip the classrooms. Learn from senior developers, participate in workshops, and collaborate on cool tech.'
    },
    {
      num: '04',
      title: 'Organize Tech Habba',
      desc: 'Gain massive scale event management experience by driving one of the region’s largest tech festivals.'
    }
  ];

  return (
    <section id="about-us" className="about-section">
      <div className="container">
        {/* Section Heading */}
        <p className="section-label">AIT & THE BIG O</p>
        <h2 className="section-heading">Behind the Code</h2>
        <div className="signal-line" />

        {/* Content Layout Grid */}
        <div className="about-grid">
          {/* Left Block: Narrative */}
          <div className="about-narrative">
            <div className="narrative-card">
              <span className="narrative-tag">AIT Campus</span>
              <h3>Acharya Institute of Technology</h3>
              <p>
                AIT has established itself as a premier destination for engineering and technological education. 
                Spread across a sprawling, iconic <strong>120-acre green campus</strong>, the institute blends cutting-edge 
                modern infrastructure with a vibrant, multicultural learning environment.
              </p>
              <p className="sub-detail">
                Affiliated with <strong>VTU</strong> and recognized by <strong>NAAC & NBA</strong>, AIT is home to students 
                from all over India and more than 60 countries, serving as a launchpad for future innovators.
              </p>
            </div>

            <div className="narrative-card highlight-card">
              <span className="narrative-tag">The Club</span>
              <h3>Meet The BIG O</h3>
              <p>
                Innovation isn't just learned in classrooms at Acharya—it's built by the student community. 
                <strong> The BIG O</strong> is the premier technical club at AIT. Founded to bridge the gap between academic theory 
                and real-world execution, we are a thriving ecosystem of active builders, developers, and tech enthusiasts.
              </p>
            </div>

            <div className="narrative-card">
              <span className="narrative-tag">Flagship Event</span>
              <h3>Tech Habba Impact</h3>
              <p>
                The true scale of the club's impact is best highlighted by our annual flagship festival, <strong>Tech Habba</strong>. 
                Last year, Tech Habba transformed the campus into a powerhouse of innovation, drawing over 
                <strong> 1,000+ brilliant participants</strong> from all across India.
              </p>
              <p className="sub-detail">
                Featuring 24-hour hackathons, UI/UX design challenges, AI product building, and competitive coding, 
                Tech Habba stands as a highly anticipated national tech fest.
              </p>
            </div>
          </div>

          {/* Right Block: Interactive Cards / Why Join */}
          <div className="why-join-column">
            <h3 className="why-join-heading">Why Should You Join The BIG O?</h3>
            <p className="why-join-sub">We don't just talk tech; we compile, deploy, and scale it.</p>
            
            <div className="values-stack">
              {values.map((v) => (
                <div key={v.num} className="value-card">
                  <div className="value-header">
                    <span className="value-num">{v.num}</span>
                    <h4 className="value-title">{v.title}</h4>
                  </div>
                  <p className="value-desc">{v.desc}</p>
                  <div className="value-glow-line" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
