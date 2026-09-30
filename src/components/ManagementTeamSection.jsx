import React from 'react';
import './ManagementTeamSection.css';

export default function ManagementTeamSection() {
  const leaders = [
    {
      id: 'onkar-marathe',
      number: '01',
      name: 'Onkar Marathe',
      role: 'Co-Founder',
      image: '/team/onkar-marathe.jpg',
      objectPosition: 'center 12%',
      paragraphs: [
        'Onkar brings extensive experience in accounting, financial reporting and building finance teams for businesses in India and international markets. A Chartered Accountant from the Institute of Chartered Accountants of India (ICAI), he has also successfully completed the Uniform CPA Examination in the United States.',
        'A strong believer in teamwork, Onkar enjoys working closely with people and building teams that take ownership of their work. Outside work, he loves travelling and is an enthusiastic badminton and football player.'
      ]
    },
    {
      id: 'abhijit-atre',
      number: '02',
      name: 'Abhijit Atre',
      role: 'Co-Founder',
      image: '/team/abhijit-atre.png',
      objectPosition: 'center 10%',
      paragraphs: [
        'Abhijit brings extensive experience in technology, business leadership and process transformation, with a strong focus on using technology to help businesses work smarter and scale. He has been closely involved with Pune\'s technology ecosystem for over two decades and has held leadership roles with SEAP.',
        'A natural people person, Abhijit enjoys building relationships, mentoring others and bringing people together. Outside work, he is an enthusiastic badminton player—bringing the same energy, competitiveness and team spirit to everything he does.'
      ]
    },
    {
      id: 'satish-prabhu',
      number: '03',
      name: 'Satish Prabhu',
      role: 'Country head - USA',
      image: '/team/satish-prabhu.jpg',
      objectPosition: 'center 35%',
      paragraphs: [
        'Satish brings 35+ years of experience in accounting, auditing and financial advisory across India and the United States. A US CPA and Chartered Accountant, he spent two decades in practice in Mumbai before moving to the US in 2005, where he worked as a Senior Manager with a leading US audit firm.',
        'In 2008, he established his own practice and has since advised multinational companies on accounting, financial reporting and advisory matters.'
      ]
    }
  ];

  return (
    <section className="management-team-section" id="management-team">
      
      {/* Background Subtle Curved Arcs Matching Reference */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-35">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
          {/* Top-Left Concentric Watermark Arcs */}
          <circle cx="90" cy="200" r="280" stroke="#DFD1BE" strokeWidth="1.2" strokeDasharray="6 6" fill="none" opacity="0.6" />
          <circle cx="90" cy="200" r="190" stroke="#E5DAC9" strokeWidth="1" fill="none" opacity="0.5" />
          
          {/* Top-Right Sweeping Curve */}
          <path d="M 980 0 Q 1280 80 1440 320" stroke="#DFD1BE" strokeWidth="1.6" fill="none" opacity="0.7" />
          <path d="M 1020 0 Q 1300 110 1440 360" stroke="#EAE0D2" strokeWidth="1.2" strokeDasharray="8 6" fill="none" opacity="0.5" />
        </svg>
      </div>

      <div className="management-team-container">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="management-team-header">
          <div className="management-team-tag-row">
            <span className="management-team-tag-line" />
            <span className="management-team-tag-text">OUR PEOPLE</span>
            <span className="management-team-tag-line" />
          </div>
          <h2 className="management-team-main-title">
            Management Team
          </h2>
          <p className="management-team-subtitle">
            Experienced leaders. A shared vision for a stronger tomorrow.
          </p>
        </div>

        {/* ================= 3 LEADERSHIP CARDS GRID ================= */}
        <div className="management-team-grid">
          {leaders.map((leader) => (
            <div key={leader.id} className="leader-card">
              
              {/* Card Top: Arch Portrait with Organic Backdrop & Number Badge */}
              <div className="leader-portrait-wrapper">
                
                {/* Decorative Organic Warm Backdrop Shape */}
                <div className="leader-portrait-backdrop" />

                {/* Architectural Arch Photo Frame */}
                <div className="leader-arch-frame">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="leader-photo"
                    style={{ objectPosition: leader.objectPosition || 'center top' }}
                  />
                </div>

                {/* Number Badge (01, 02, 03) */}
                <div className="leader-number-badge">
                  <span className="leader-number-text">{leader.number}</span>
                  <span className="leader-number-bar" />
                </div>
              </div>

              {/* Card Body: Name, Role & 2 Bio Paragraphs */}
              <div className="leader-card-body">
                <h3 className="leader-name">
                  {leader.name}
                </h3>
                <div className="leader-role">
                  {leader.role}
                </div>

                <div className="leader-bio-stack">
                  {leader.paragraphs.map((para, idx) => (
                    <p key={idx} className="leader-bio-p">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
