import React from 'react';
import './InterviewProcessSection.css';

export default function InterviewProcessSection() {
  const steps = [
    {
      id: 'step-1',
      number: '01',
      numClass: 'interview-step-num-01',
      title: 'Get to Know You',
      nodeImg: '/images/interview-process/step-icon-light-1.png',
      description: 'A conversation with our Talent Acquisition team to understand your work experience, areas of interest and a primary assessment of skills required for the job.'
    },
    {
      id: 'step-2',
      number: '02',
      numClass: 'interview-step-num-02',
      title: <>Technical and Soft<br />Skills Assessment</>,
      nodeImg: '/images/interview-process/step-icon-light-2.png',
      description: 'A technical discussion to deep dive into the technical skills and soft skills required for the job.'
    },
    {
      id: 'step-3',
      number: '03',
      numClass: 'interview-step-num-03',
      title: <>Reference &amp;<br />Background Check</>,
      nodeImg: '/images/interview-process/step-icon-light-3.png',
      description: 'We verify a professional reference and complete our standard background screening.'
    },
    {
      id: 'step-4',
      number: '04',
      numClass: 'interview-step-num-04',
      title: 'Welcome to Alphasure',
      nodeImg: '/images/interview-process/step-icon-light-4.png',
      description: 'Once selected, we complete the formalities and get you ready to join the team.'
    }
  ];

  return (
    <section className="interview-process-section" id="interview-process">
      <div className="interview-process-container">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="interview-process-header">
          <h2 className="interview-process-main-title">
            <span className="title-dark">Our </span>
            <span className="relative inline-block text-[#FA5A16]">
              Interview
              <svg 
                className="absolute left-0 -bottom-1.5 sm:-bottom-2.5 w-full h-3 sm:h-4 overflow-visible pointer-events-none" 
                viewBox="0 0 100 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M 2 12 Q 50 2, 98 12" 
                  stroke="#FA5A16" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  className="animate-draw-curved-underline"
                />
              </svg>
            </span>
            <span className="text-[#FA5A16]"> Process</span>
          </h2>
        </div>

        {/* ================= 4-STEP TIMELINE STAGE ================= */}
        <div className="interview-timeline-stage">
          <div className="interview-steps-grid">
            {steps.map((step) => (
              <div key={step.id} className="interview-step-card">
                
                {/* Node Area: Bold Colorful Gradient Number + Elevated Floating Circular Icon Badge */}
                <div className="interview-node-wrapper">
                  
                  {/* Large Gradient Number (01, 02, 03, 04) */}
                  <span className={`interview-step-num ${step.numClass}`}>
                    {step.number}
                  </span>

                  {/* Elevated Circular Icon Badge */}
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
