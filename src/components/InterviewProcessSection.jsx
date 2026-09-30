import React from 'react';
import './InterviewProcessSection.css';

export default function InterviewProcessSection() {
  const steps = [
    {
      id: 'step-1',
      number: '01',
      title: 'Get to Know You',
      nodeImg: '/images/interview-process/step-icon-1.png?v=clean3',
      description: 'A conversation with our Talent Acquisition team to understand your work experience, areas of interest and a primary assessment of skills required for the job.'
    },
    {
      id: 'step-2',
      number: '02',
      title: <>Technical and Soft<br />Skills Assessment</>,
      nodeImg: '/images/interview-process/step-icon-2.png?v=clean3',
      description: 'A technical discussion to deep dive into the technical skills and soft skills required for the job.'
    },
    {
      id: 'step-3',
      number: '03',
      title: <>Reference &amp;<br />Background Check</>,
      nodeImg: '/images/interview-process/step-icon-3.png?v=clean3',
      description: 'We verify a professional reference and complete our standard background screening.'
    },
    {
      id: 'step-4',
      number: '04',
      title: 'Welcome to Alphasure',
      nodeImg: '/images/interview-process/step-icon-4.png?v=clean3',
      description: 'Once selected, we complete the formalities and get you ready to join the team.'
    }
  ];

  return (
    <section className="interview-process-section" id="interview-process">
      
      {/* Background Subtle Elegant Sweeping Ribbons & Arcs */}
      <div className="interview-bg-ambient-layer pointer-events-none">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1440 700" 
          fill="none" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="goldRibbonGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DFC8A5" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#F5EFE6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#E6D3B8" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="goldRibbonGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E2CA9E" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#FAF7F2" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Top-Left Ambient Sweeping Ribbon */}
          <path 
            d="M-50 220 C 180 140, 320 60, 480 0 L 0 0 Z" 
            fill="url(#goldRibbonGrad1)" 
          />
          <path 
            d="M-60 260 C 220 180, 400 80, 580 0" 
            stroke="#DFD1BE" 
            strokeWidth="1.2" 
            opacity="0.5" 
          />

          {/* Bottom-Left Curving Ribbon */}
          <path 
            d="M -40 500 C 60 580, 70 650, 75 750" 
            stroke="#DFC8A5" 
            strokeWidth="1.8" 
            opacity="0.6" 
          />

          {/* Top-Right Sweeping Accent Ribbon */}
          <path 
            d="M 960 0 C 1120 40, 1300 120, 1480 280 L 1480 0 Z" 
            fill="url(#goldRibbonGrad2)" 
          />
          <path 
            d="M 920 0 C 1100 50, 1280 140, 1460 300" 
            stroke="#DFC8A5" 
            strokeWidth="1.5" 
            opacity="0.6" 
          />

          {/* Bottom-Right Soft Golden Swell */}
          <path 
            d="M 800 700 C 1050 620, 1280 600, 1480 500 L 1480 700 Z" 
            fill="url(#goldRibbonGrad1)" 
          />
        </svg>
      </div>

      <div className="interview-process-container">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="interview-process-header">
          <div className="interview-process-tag-row">
            <span className="interview-process-tag-line" />
            <span className="interview-process-tag-text">CAREERS AT ALPHASURE</span>
            <span className="interview-process-tag-line" />
          </div>

          <h2 className="interview-process-main-title">
            <span className="title-dark">Our </span>
            <span className="title-gold">Interview Process</span>
          </h2>

          <div className="interview-process-title-bar" />
        </div>

        {/* ================= 4-STEP TIMELINE STAGE ================= */}
        <div className="interview-timeline-stage">
          
          {/* Continuous Flowing Golden Connecting Wave (Desktop) */}
          <div className="hidden lg:block interview-connecting-wave-wrap">
            <svg 
              viewBox="0 0 1200 160" 
              className="w-full h-auto overflow-visible pointer-events-none"
              fill="none"
            >
              {/* Flowing Wave Line passing through nodes and junctions */}
              <path 
                d="M 60 70 C 110 70, 150 70, 180 70 C 230 70, 260 115, 337 92 C 375 75, 410 70, 450 70 C 500 70, 530 115, 600 90 C 640 75, 680 70, 750 70 C 800 70, 830 115, 900 88 C 940 75, 980 70, 1050 70 C 1100 70, 1140 70, 1180 70" 
                stroke="#DFC8A5" 
                strokeWidth="1.8" 
                strokeLinecap="round"
              />
              
              {/* Small Gold Circular Junction Dots / Rings */}
              <circle cx="337" cy="92" r="5" fill="#FAF7F2" stroke="#DFC8A5" strokeWidth="2" />
              <circle cx="600" cy="90" r="5" fill="#FAF7F2" stroke="#DFC8A5" strokeWidth="2" />
              <circle cx="900" cy="88" r="5" fill="#FAF7F2" stroke="#DFC8A5" strokeWidth="2" />
            </svg>
          </div>

          {/* 4 Steps Grid */}
          <div className="interview-steps-grid">
            {steps.map((step) => (
              <div key={step.id} className="interview-step-card">
                
                {/* Node Area: Watermark Number + Orbit Ring + Circular 3D Icon Badge */}
                <div className="interview-node-wrapper">
                  
                  {/* Watermark Sand Number (01, 02, 03, 04) */}
                  <span className="interview-watermark-number">
                    {step.number}
                  </span>

                  {/* Golden Vector Orbit Arc */}
                  <div className="interview-orbit-ring" />

                  {/* 3D Circular Node Badge */}
                  <div className="interview-node-badge">
                    <img
                      src={step.nodeImg}
                      alt={`Step ${step.number} - Alphasure Interview Process`}
                      className="interview-node-img"
                    />
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="interview-step-title">
                  {step.title}
                </h3>

                {/* Gold Underline Bar */}
                <div className="interview-step-line" />

                {/* Step Description */}
                <p className="interview-step-desc">
                  {step.description}
                </p>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
