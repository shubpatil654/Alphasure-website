import React, { useState, useEffect, useRef } from 'react';

const DOCUMENTS = [
  {
    id: 0,
    shortLabel: 'MOA',
    timelineNum: '01',
    title: 'Memorandum of Association',
    displayTitleLines: ['Memorandum', 'of Association'],
    description: "Defines the company's objectives, scope and foundational structure.",
    accentColor: '#475569',
    accentBg: '#E2E8F0',
    cornerShapeColor: '#CBD5E1', // Muted blue-grey pastel corner
    subtleBorder: 'rgba(203, 213, 225, 0.8)',
  },
  {
    id: 1,
    shortLabel: 'AOA',
    timelineNum: '02',
    title: 'Articles of Association',
    displayTitleLines: ['Articles', 'of Association'],
    description: 'Defines the rules and internal regulations for the management of your company.',
    accentColor: '#A16A34',
    accentBg: '#F3E8DB',
    cornerShapeColor: '#DFC2A4', // Warm sand/beige pastel corner matching reference
    subtleBorder: 'rgba(223, 194, 164, 0.8)',
  },
  {
    id: 2,
    shortLabel: 'AFFIDAVIT',
    timelineNum: '03',
    title: 'Affidavits and Declarations',
    displayTitleLines: ['Affidavits and', 'Declarations'],
    description: 'Essential declarations and documentation required for company incorporation.',
    accentColor: '#4A6B5B',
    accentBg: '#E1EBE5',
    cornerShapeColor: '#C4D7CC', // Muted sage/mint green pastel corner
    subtleBorder: 'rgba(196, 215, 204, 0.8)',
  },
];

export default function OnlineProcessSection() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to 1 (AOA) to match reference screenshot
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef(null);
  const total = DOCUMENTS.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Synchronized 4-second auto-rotation
  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, activeIndex]);

  // Restart timer on manual interaction
  const handleManualNav = (action) => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (action === 'next') nextSlide();
    if (action === 'prev') prevSlide();
    if (typeof action === 'number') goToSlide(action);
  };

  const activeDoc = DOCUMENTS[activeIndex];

  // Calculate carousel 3D layer position based on relative offset
  const getCardTransform = (index) => {
    let offset = index - activeIndex;
    if (offset < -1) offset += total;
    if (offset > 1) offset -= total;

    if (offset === 0) {
      // Active center document
      return {
        zIndex: 30,
        transform: 'translateX(0%) scale(1)',
        opacity: 1,
        filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.65))',
        pointerEvents: 'auto',
      };
    } else if (offset === -1) {
      // Left / previous document partially behind
      return {
        zIndex: 15,
        transform: 'translateX(-54%) scale(0.89) rotate(-2deg)',
        opacity: 0.82,
        filter: 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.45))',
        pointerEvents: 'auto',
      };
    } else {
      // Right / next document partially behind
      return {
        zIndex: 15,
        transform: 'translateX(54%) scale(0.89) rotate(2deg)',
        opacity: 0.82,
        filter: 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.45))',
        pointerEvents: 'auto',
      };
    }
  };

  return (
    <section 
      style={{
        width: '100%',
        backgroundColor: '#0B132A',
        padding: '15px 24px',
        position: 'relative',
        userSelect: 'none',
        overflow: 'hidden',
        fontFamily: "'Roboto', sans-serif",
        borderTop: '1px solid rgba(51, 65, 85, 0.6)',
        borderBottom: '1px solid rgba(51, 65, 85, 0.6)',
      }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Dark Grid Background Photo Layer & Glow Accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/dark-grid-bg.png"
          alt="Dark Grid Background"
          className="w-full h-full object-cover opacity-60 filter brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B132A]/80 via-[#0B132A]/40 to-[#0B132A]/85 pointer-events-none" />
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#FFC43A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#1D70F5]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Glowing ambient organic wave lines matching dark theme */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-25">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <path d="M-100 200 C 300 150, 400 450, 700 350 C 1000 250, 1150 550, 1550 400" stroke="#FFC43A" strokeWidth="1.5" />
          <path d="M-100 600 C 400 650, 700 450, 1100 600 C 1300 670, 1400 550, 1550 520" stroke="#60A5FA" strokeWidth="1.2" strokeDasharray="6 6" />
        </svg>
      </div>

      <div 
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
        }}
      >
        
        {/* ================= LEFT COLUMN: PROCESS TIMELINE & CONTENT (~44% WIDTH) ================= */}
        <div 
          style={{
            flex: '1 1 42%',
            minWidth: '320px',
            maxWidth: '520px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            gap: '32px',
          }}
        >
          
          {/* Vertical Timeline Indicator with 3 Connected Nodes */}
          <div 
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 0',
              width: '42px',
              minWidth: '42px',
            }}
          >
            {/* Continuous Vertical Timeline Track Line */}
            <div 
              style={{
                position: 'absolute',
                top: '20px',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '1.5px',
                backgroundColor: 'rgba(148, 163, 184, 0.25)',
                zIndex: 1,
              }}
            />

            {/* 3 Numbered Timeline Nodes: 01, 02, 03 */}
            {DOCUMENTS.map((doc, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div 
                  key={doc.id}
                  onClick={() => handleManualNav(idx)}
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: isActive ? '#FFC43A' : 'rgba(30, 41, 59, 0.85)',
                    color: isActive ? '#0B132A' : '#94A3B8',
                    border: `2px solid ${isActive ? '#FFC43A' : 'rgba(148, 163, 184, 0.3)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer',
                    transition: 'all 350ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                    boxShadow: isActive ? '0 0 20px rgba(255, 196, 58, 0.45)' : 'none',
                    transform: isActive ? 'scale(1.12)' : 'scale(1)',
                  }}
                  title={doc.title}
                >
                  {doc.timelineNum}
                </div>
              );
            })}
          </div>

          {/* Text Content Area */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            
            {/* Small Eyebrow Text */}
            <div 
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#38BDF8',
                letterSpacing: '5px',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              ONLINE PROCESS
            </div>

            {/* Main Heading: Important documents prepared by Alphasure experts: */}
            <h2 
              style={{
                fontSize: 'clamp(32px, 3.8vw, 48px)',
                fontWeight: 700,
                lineHeight: 1.18,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                margin: '0 0 24px 0',
              }}
            >
              Important documents prepared{' '}
              <span style={{ color: '#FFC43A', display: 'inline' }}>
                by Alphasure experts:
              </span>
            </h2>

            {/* Subtle Divider Line under heading */}
            <div 
              style={{
                width: '100%',
                maxWidth: '240px',
                height: '1.5px',
                backgroundColor: '#FFC43A',
                opacity: 0.5,
                marginBottom: '28px',
              }}
            />

            {/* Dynamic Document Title & Description (Fade & Slide Transition) */}
            <div style={{ minHeight: '96px', marginBottom: '32px' }}>
              <div 
                key={activeDoc.id}
                style={{
                  animation: 'fadeInContent 350ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
                }}
              >
                <h3 
                  style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    margin: '0 0 10px 0',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {activeDoc.title}
                </h3>
                <p 
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.55,
                    color: '#94A3B8',
                    margin: 0,
                    fontWeight: 400,
                    maxWidth: '420px',
                  }}
                >
                  {activeDoc.description}
                </p>
              </div>
            </div>

            {/* Manual Controls & Counter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              
              {/* Arrow Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {/* Left Arrow Button */}
                <button
                  onClick={() => handleManualNav('prev')}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(30, 41, 59, 0.8)',
                    border: '1px solid rgba(148, 163, 184, 0.3)',
                    color: '#E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                  }}
                  aria-label="Previous Document"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(51, 65, 85, 0.95)';
                    e.currentTarget.style.transform = 'scale(1.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.8)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Right Arrow Button (Gold Accent) */}
                <button
                  onClick={() => handleManualNav('next')}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: '#FFC43A',
                    border: '1px solid #FFC43A',
                    color: '#0B132A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                    boxShadow: '0 4px 14px rgba(255, 196, 58, 0.35)',
                  }}
                  aria-label="Next Document"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#E5A93C';
                    e.currentTarget.style.transform = 'scale(1.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFC43A';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Counter Display: 01 / 03 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '15px', fontWeight: 600, color: '#E2E8F0', letterSpacing: '0.5px' }}>
                  {activeDoc.timelineNum} / 03
                </span>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'rgba(148, 163, 184, 0.3)', borderRadius: '9999px' }} />
              </div>

            </div>

          </div>

        </div>

        {/* ================= RIGHT COLUMN: ANIMATED DOCUMENT CAROUSEL (~56% WIDTH) ================= */}
        <div 
          style={{
            flex: '1 1 52%',
            minWidth: '320px',
            maxWidth: '660px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          
          {/* Layered Document Carousel Deck Stage */}
          <div 
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '540px',
              height: '520px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {DOCUMENTS.map((doc, idx) => {
              const cardStyle = getCardTransform(idx);
              const isActive = activeIndex === idx;

              return (
                <div 
                  key={doc.id}
                  onClick={() => handleManualNav(idx)}
                  style={{
                    position: 'absolute',
                    width: '320px',
                    height: '460px',
                    borderRadius: '26px',
                    backgroundColor: '#FFFFFF',
                    border: `1.5px solid ${isActive ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.5)'}`,
                    boxShadow: isActive ? '0 0 25px rgba(255, 196, 58, 0.2)' : 'none',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 500ms cubic-bezier(0.25, 1, 0.5, 1)',
                    ...cardStyle,
                  }}
                >
                  
                  {/* Subtle Elegant Organic Colored Corner at Top-Right */}
                  <svg 
                    viewBox="0 0 160 160" 
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '130px',
                      height: '130px',
                      pointerEvents: 'none',
                    }}
                  >
                    <path 
                      d="M 160 0 L 30 0 C 45 40, 20 85, 0 115 C 35 145, 95 160, 160 160 Z" 
                      fill={doc.cornerShapeColor}
                      opacity="0.85"
                    />
                  </svg>

                  {/* Inner Document Layout */}
                  <div 
                    style={{
                      position: 'relative',
                      zIndex: 10,
                      width: '100%',
                      height: '100%',
                      padding: '36px 32px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxSizing: 'border-box',
                    }}
                  >
                    
                    {/* Top Document Label & Accent Line */}
                    <div>
                      <div style={{ display: 'inline-block', marginBottom: '28px' }}>
                        <span 
                          style={{
                            fontSize: '14px',
                            fontWeight: 700,
                            letterSpacing: '3px',
                            color: '#1E293B',
                            textTransform: 'uppercase',
                            display: 'block',
                          }}
                        >
                          {doc.shortLabel}
                        </span>
                        <div 
                          style={{
                            width: '24px',
                            height: '2px',
                            backgroundColor: doc.accentColor,
                            marginTop: '4px',
                            borderRadius: '2px',
                          }}
                        />
                      </div>

                      {/* Main Document Title (Elegant Serif Corporate Style) */}
                      <h4 
                        style={{
                          fontFamily: "Georgia, 'Playfair Display', serif",
                          fontSize: '26px',
                          fontWeight: 700,
                          lineHeight: 1.25,
                          color: '#0F172A',
                          margin: '0 0 24px 0',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {doc.displayTitleLines.map((line, lIdx) => (
                          <span key={lIdx} style={{ display: 'block' }}>
                            {line}
                          </span>
                        ))}
                      </h4>

                      {/* Subtle Horizontal Legal Document Lines */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', opacity: 0.75 }}>
                        <div style={{ width: '85%', height: '4px', backgroundColor: '#E2E8F0', borderRadius: '4px' }} />
                        <div style={{ width: '75%', height: '4px', backgroundColor: '#E2E8F0', borderRadius: '4px' }} />
                        <div style={{ width: '45%', height: '4px', backgroundColor: '#E2E8F0', borderRadius: '4px' }} />
                      </div>
                    </div>

                    {/* Bottom Legal Entity Stamp: ALPHASURE PRIVATE LIMITED */}
                    <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px' }}>
                      <span 
                        style={{
                          fontSize: '9.5px',
                          fontWeight: 700,
                          color: '#94A3B8',
                          letterSpacing: '2.5px',
                          textTransform: 'uppercase',
                          display: 'block',
                          lineHeight: 1.4,
                        }}
                      >
                        ALPHASURE
                        <br />
                        PRIVATE LIMITED
                      </span>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

          {/* Three Subtle Horizontal Pagination Dash Indicators */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '20px',
            }}
          >
            {DOCUMENTS.map((doc, idx) => {
              const isActive = activeIndex === idx;

              return (
                <button
                  key={doc.id}
                  onClick={() => handleManualNav(idx)}
                  style={{
                    height: '4px',
                    width: isActive ? '36px' : '18px',
                    borderRadius: '4px',
                    backgroundColor: isActive ? '#FFC43A' : 'rgba(148, 163, 184, 0.35)',
                    boxShadow: isActive ? '0 0 10px rgba(255, 196, 58, 0.5)' : 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 300ms ease',
                  }}
                  aria-label={`Go to document ${doc.title}`}
                />
              );
            })}
          </div>

        </div>

      </div>

      {/* Embedded CSS for smooth content cross-fade */}
      <style>{`
        @keyframes fadeInContent {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
