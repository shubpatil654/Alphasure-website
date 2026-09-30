import React from 'react';
import { ShieldCheck, Lock, FileCheck, Users } from 'lucide-react';
import './DataSecuritySection.css';

export default function DataSecuritySection() {
  const securityPillars = [
    {
      id: 'data-protection',
      title: 'Data',
      subtitle: 'Protection',
      icon: ShieldCheck
    },
    {
      id: 'access-controls',
      title: 'Access',
      subtitle: 'Controls',
      icon: Lock
    },
    {
      id: 'security-practices',
      title: 'Security',
      subtitle: 'Practices',
      icon: FileCheck
    },
    {
      id: 'trained-people',
      title: 'Trained',
      subtitle: 'People',
      icon: Users
    }
  ];

  return (
    <section className="data-security-section" id="data-security">
      
      {/* Background Subtle Elegant Ambient Curves */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <circle cx="80" cy="400" r="300" stroke="#DFD1BE" strokeWidth="1.2" strokeDasharray="6 6" fill="none" opacity="0.6" />
          <path d="M-80 200 Q 300 350 650 200 T 1450 300" stroke="#E5DAC9" strokeWidth="1" fill="none" opacity="0.5" />
        </svg>
      </div>

      <div className="data-security-container">
        <div className="data-security-grid">
          
          {/* ================= LEFT COLUMN: Typography, Copy & 4 Security Pillars ================= */}
          <div className="data-security-left">
            
            {/* Eyebrow Tag */}
            <div className="data-security-tag-row">
              <span className="data-security-tag-line" />
              <span className="data-security-tag-text">DATA SECURITY</span>
              <span className="data-security-tag-line" />
            </div>

            {/* Main Headline */}
            <h2 className="data-security-main-title">
              <span className="title-dark">Your Data.</span>
              <br />
              <span className="title-gold">Our Responsibility.</span>
            </h2>

            <div className="data-security-title-bar" />

            {/* Description Paragraphs */}
            <div className="data-security-text-stack">
              <p className="data-security-p">
                Your financial information is among your most sensitive business assets. At Alphasure, we take its security seriously.
              </p>
              <p className="data-security-p">
                We follow robust information security practices and controls designed to protect your data against unauthorised access, loss and misuse.{' '}
                <strong className="font-extrabold text-[#0B192C]">
                  Alphasure is ISO/IEC 27001:2022 certified
                </strong>
                , demonstrating our commitment to internationally recognised information security standards.
              </p>
            </div>

            {/* 4 Security Pillars Row with Vertical Dividers */}
            <div className="security-pillars-row">
              {securityPillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <React.Fragment key={pillar.id}>
                    <div className="security-pillar-item">
                      <div className="security-pillar-icon-badge">
                        <IconComponent className="w-5 h-5 text-[#A67C52]" strokeWidth={1.8} />
                      </div>
                      <span className="security-pillar-label">
                        <span>{pillar.title}</span>
                        <span>{pillar.subtitle}</span>
                      </span>
                    </div>

                    {/* Vertical Divider Line (between items) */}
                    {idx < securityPillars.length - 1 && (
                      <div className="security-pillar-divider" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>

          </div>

          {/* ================= RIGHT COLUMN: 3D ISO 27001 Glass Shield Graphic ================= */}
          <div className="data-security-right">
            <div className="shield-graphic-wrapper">
              <img
                src="/images/iso-27001-shield.png"
                alt="Alphasure ISO/IEC 27001:2022 Certified Data Security Shield"
                className="shield-graphic-img"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
