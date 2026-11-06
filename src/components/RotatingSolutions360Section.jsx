import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  RotateCw, 
  Pause, 
  Play, 
  Sparkles, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { SOLUTIONS_360_ITEMS } from './Solutions360Section';
import './RotatingSolutions360Section.css';

// Practice metadata for rich 3D front presentation
const PRACTICE_METADATA = {
  'gst-customs': {
    indexBadge: '01 / 06',
    category: 'Taxation & Trade Compliance',
    subTag: '17 Core Offerings',
    previews: [
      'GST Refund & Health Checks',
      'HSN Classification & Litigation',
      'Customs & Trade Compliance'
    ]
  },
  'ifrs': {
    indexBadge: '02 / 06',
    category: 'Financial Reporting Standards',
    subTag: '3 Core Conversion Pillars',
    previews: [
      'Ind AS / IFRS / US GAAP Conversion',
      'IPO Reporting (Main Board & SME)',
      'ESOP Accounting & Valuation'
    ]
  },
  'm-and-a': {
    indexBadge: '03 / 06',
    category: 'Mergers & Acquisitions',
    subTag: '4 Strategic Pillars',
    previews: [
      'Corporate Structuring',
      'Regulatory Advisory',
      'Equity & Debt Fundraising'
    ]
  },
  'corporate-legal': {
    indexBadge: '04 / 06',
    category: 'Corporate Legal & Governance',
    subTag: '4 Legal Pillars',
    previews: [
      'Founders Agreements',
      'Start up Advisory',
      'Labor & Employment Law'
    ]
  },
  'transfer-pricing': {
    indexBadge: '05 / 06',
    category: 'International Tax & TP',
    subTag: '4 TP Compliance Pillars',
    previews: [
      'TP Benchmarking Study',
      'TP Assessment Support',
      'Price / Margin Planning'
    ]
  },
  'payroll': {
    indexBadge: '06 / 06',
    category: 'Human Resources & Payroll',
    subTag: '4 End-to-End Solutions',
    previews: [
      'Payroll Outsourcing',
      'Statutory Compliance',
      'Leave Management & EOR'
    ]
  }
};

export default function RotatingSolutions360Section({ onOpenModal }) {
  // State for manual rotation angle (null when running purely in continuous CSS auto-orbit)
  const [manualAngle, setManualAngle] = useState(null);
  // Manual pause state
  const [isPaused, setIsPaused] = useState(false);
  // Toggled card for mobile/touch flip
  const [toggledCardId, setToggledCardId] = useState(null);
  // Active front-facing card index
  const [activePracticeIndex, setActivePracticeIndex] = useState(0);

  // Rotate cylinder manually by step (+60deg or -60deg)
  const handleRotate = (direction) => {
    setManualAngle((prev) => {
      const base = prev ?? -(activePracticeIndex * 60);
      const newAngle = direction === 'next' ? base - 60 : base + 60;
      // Calculate which card is now facing front
      const normalizedIndex = Math.round((-newAngle / 60)) % 6;
      setActivePracticeIndex(normalizedIndex < 0 ? normalizedIndex + 6 : normalizedIndex);
      return newAngle;
    });
  };

  // Select a specific practice card to rotate to front and toggle flip
  const handleSelectPractice = (index, itemId) => {
    const targetAngle = -(index * 60);
    setManualAngle(targetAngle);
    setActivePracticeIndex(index);
    setToggledCardId(itemId);
  };

  // Resume auto-orbit
  const handleResumeAutoOrbit = () => {
    setManualAngle(null);
    setIsPaused(false);
    setToggledCardId(null);
  };

  // Toggle card flip (useful for mobile touch or direct clicks)
  const handleCardClick = (itemId) => {
    setToggledCardId((prev) => (prev === itemId ? null : itemId));
  };

  return (
    <section 
      className="rotating-360-wrapper select-none" 
      id="3d-rotating-solutions"
      aria-label="360 Rotating Practice Showcase"
    >
      {/* Ambient Radial Glow Lighting */}
      <div className="orbit-glow-top" aria-hidden="true" />
      <div className="orbit-glow-center" aria-hidden="true" />

      <div className="max-w-[1380px] mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          
          {/* Subtle Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-slate-200 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#FA5A16]" />
            <span className="tracking-wide uppercase">3D Interactive Orbit</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            We Offer <span className="text-[#FA5A16]">360° Rotating</span> Solutions
          </h2>

          {/* Interactive Hint */}
          <p className="text-slate-300 text-sm sm:text-base font-normal mt-3 max-w-xl leading-relaxed">
            Cards orbit continuously in 3D space. <strong className="text-white font-semibold">Hover over any tile</strong> to freeze the carousel and flip the card to explore its core offerings.
          </p>

          {/* Practice Quick Selector Pills */}
          <div className="practice-selector-bar">
            {SOLUTIONS_360_ITEMS.map((item, idx) => {
              const isCurrent = activePracticeIndex === idx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectPractice(idx, item.id)}
                  className={`practice-pill-btn ${isCurrent ? 'active' : ''}`}
                >
                  <span className="text-xs font-mono">{idx + 1}.</span>
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* ================= 3D PERSPECTIVE STAGE ================= */}
        <div className="rotating-360-scene">
          
          {/* 3D Pedestal Floor Ring */}
          <div className="pedestal-ring-floor" aria-hidden="true">
            <div className="pedestal-inner-ring" />
          </div>

          {/* Rotating Cylinder Ring */}
          <div 
            className={`cylinder-carousel-ring ${manualAngle === null ? 'auto-orbiting' : ''} ${isPaused ? 'is-paused' : ''}`}
            style={{
              transform: manualAngle !== null ? `rotateY(${manualAngle}deg)` : undefined,
              transition: manualAngle !== null ? 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)' : undefined
            }}
          >
            {SOLUTIONS_360_ITEMS.map((item, index) => {
              const meta = PRACTICE_METADATA[item.id] || {};
              const IconComponent = item.icon;
              const isToggled = toggledCardId === item.id;

              return (
                <div
                  key={item.id}
                  className={`cylinder-card-slot ${isToggled ? 'is-flipped' : ''}`}
                  style={{ '--card-index': index }}
                  onClick={() => handleCardClick(item.id)}
                  title={`${item.title} - Hover or click to flip`}
                >
                  <div className="cylinder-card-flip-inner">
                    
                    {/* ---------------- FRONT FACE ---------------- */}
                    <div className="cylinder-card-face cylinder-card-front">
                      
                      {/* Top Bar */}
                      <div className="card-front-top">
                        <span className="card-index-badge">{meta.indexBadge || `0${index + 1}`}</span>
                        <span className="card-category-tag">{meta.category}</span>
                      </div>

                      {/* Center Content */}
                      <div className="card-front-center">
                        <div className="card-icon-container">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <h3 className="card-front-title">{item.title}</h3>
                        <span className="card-front-subtag">{meta.subTag}</span>

                        {/* Front Previews */}
                        <div className="card-front-highlights">
                          {meta.previews?.map((preview, pIdx) => (
                            <div key={pIdx} className="card-front-preview-pill">
                              <span className="dot" />
                              <span className="truncate">{preview}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Prompt */}
                      <div className="card-front-bottom">
                        <div className="card-flip-prompt-pill">
                          <RotateCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
                          <span>Hover to Explore Offerings</span>
                        </div>
                      </div>

                    </div>

                    {/* ---------------- BACK FACE: EXACT USER BULLET POINTERS ---------------- */}
                    <div className="cylinder-card-face cylinder-card-back">
                      
                      {/* Back Header */}
                      <div className="card-back-header">
                        <div className="card-back-title-group">
                          <div className="card-back-icon-mini">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="card-back-title">{item.title}</h4>
                            <span className="text-[11px] font-bold text-[#FA5A16]">Core Offerings</span>
                          </div>
                        </div>

                        <div className="card-back-flip-badge">
                          <RotateCcw className="w-3 h-3 text-[#FA5A16]" />
                          <span>Flip</span>
                        </div>
                      </div>

                      {/* Scrollable Content: Verbatim user pointers */}
                      <div className="card-back-content-scroll">
                        {item.isGrouped ? (
                          /* Grouped Offerings (GST & Customs) */
                          <div className="space-y-3">
                            {item.groups.map((grp, gIdx) => (
                              <div key={gIdx} className="bg-black/30 rounded-lg p-2.5 border border-white/5">
                                <div className="card-back-group-title">
                                  <span>{grp.label}</span>
                                </div>
                                <div className="space-y-1">
                                  {grp.pointers.map((pt, pIdx) => (
                                    <div key={pIdx} className="card-back-bullet-item">
                                      <span className="card-back-bullet-dot">•</span>
                                      <span>{pt}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          /* Standard Offerings (IFRS, M&A, Corporate Legal, TP, Payroll) */
                          <div className="bg-black/30 rounded-lg p-2.5 border border-white/5 space-y-1.5">
                            {item.pointers.map((pt, pIdx) => (
                              <div key={pIdx} className="card-back-bullet-item">
                                <span className="card-back-bullet-dot">•</span>
                                <span>{pt}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Back Action Footer */}
                      <div className="card-back-footer">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (typeof onOpenModal === 'function') {
                              onOpenModal('call');
                            }
                          }}
                          className="card-back-cta-btn"
                        >
                          <span>Speak to Specialist</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ================= INTERACTIVE TOOLBAR ================= */}
        <div className="rotating-360-controls">
          
          {/* Rotate Left Button */}
          <button
            type="button"
            onClick={() => handleRotate('prev')}
            className="orbit-control-btn"
            title="Rotate Left"
            aria-label="Rotate carousel left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Play / Pause Toggle Button */}
          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            className="orbit-control-btn"
            title={isPaused ? "Resume Auto-Orbit" : "Pause Orbit"}
            aria-label={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
          >
            {isPaused ? <Play className="w-4 h-4 text-emerald-400" /> : <Pause className="w-4 h-4 text-[#FA5A16]" />}
          </button>

          {/* Reset / Resume Auto-Orbit Button */}
          {manualAngle !== null && (
            <button
              type="button"
              onClick={handleResumeAutoOrbit}
              className="orbit-status-pill hover:border-[#FA5A16] cursor-pointer transition-colors"
              title="Resume automatic 360 rotation"
            >
              <RotateCw className="w-3.5 h-3.5 text-[#FA5A16]" />
              <span>Resume Continuous Orbit</span>
            </button>
          )}

          {/* Status Badge when auto-rotating */}
          {manualAngle === null && (
            <div className="orbit-status-pill">
              <span className={`orbit-status-dot ${!isPaused ? 'active' : ''}`} />
              <span>{isPaused ? 'Orbit Paused' : 'Auto Orbiting Slowly'}</span>
            </div>
          )}

          {/* Rotate Right Button */}
          <button
            type="button"
            onClick={() => handleRotate('next')}
            className="orbit-control-btn"
            title="Rotate Right"
            aria-label="Rotate carousel right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

      </div>

    </section>
  );
}
