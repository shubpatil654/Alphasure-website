import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  ArrowRight, 
  X,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { SOLUTIONS_360_ITEMS } from './Solutions360Section';
import './RoadmapSolutions360Section.css';

export default function RoadmapSolutions360Section({ onOpenModal }) {
  // Modal state: holds the ID of the practice currently popped open on screen (null if closed)
  const [modalPracticeId, setModalPracticeId] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setModalPracticeId(null);
      }
    };
    if (modalPracticeId) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [modalPracticeId]);

  const activeItem = SOLUTIONS_360_ITEMS.find((item) => item.id === modalPracticeId) || SOLUTIONS_360_ITEMS[0];
  const ActiveIcon = activeItem?.icon;

  const handlePillClick = (id) => {
    setModalPracticeId(id);
  };

  const handleConsultationClick = () => {
    if (typeof onOpenModal === 'function') {
      onOpenModal('call');
    }
  };

  return (
    <section 
      className="roadmap-360-wrapper select-none"
      id="360-solution-roadmap"
      aria-label="360 Solution of Services"
    >
      {/* Ambient background glow */}
      <div className="roadmap-glow-radial" aria-hidden="true" />

      <div className="max-w-[1240px] mx-auto relative z-10 px-4 sm:px-6 lg:px-8">

        {/* ================= SECTION HEADER: MATCHING ATTACHED IMAGE ================= */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Top text: "360° SOLUTION OF" in white */}
          <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold tracking-tight uppercase">
            360° SOLUTION OF
          </h3>

          {/* Giant bottom text: "SERVICES" in massive bold orange */}
          <h2 className="text-[#FA5A16] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-none mt-1 sm:mt-2">
            SERVICES
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm font-medium max-w-md mx-auto mt-4">
            Click on any pill to view its complete offerings
          </p>
        </div>

        {/* ================= SERPENTINE ROADMAP PILLS STAGE ================= */}
        <div className="roadmap-pills-stage">

          {/* Curving dashed white line connecting the pills (Exact match to reference image) */}
          <svg 
            className="roadmap-dashed-svg" 
            viewBox="0 0 760 480" 
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* 1. Top-Right Entry tail connecting to Row 1 Right (IFRS) */}
            <path 
              d="M 750, 0 C 750, 30 710, 50 670, 50" 
              className="roadmap-dashed-path" 
            />

            {/* 2. Left U-curve connecting Row 1 Left (GST & Customs) to Row 2 Left (M&A) */}
            <path 
              d="M 90, 50 C 20, 50 20, 160 90, 160" 
              className="roadmap-dashed-path" 
            />

            {/* 3. Right U-curve connecting Row 2 Right (Corporate Legal) to Row 3 Right (Payroll) */}
            <path 
              d="M 670, 160 C 740, 160 740, 270 670, 270" 
              className="roadmap-dashed-path" 
            />

            {/* 4. Left curve looping under from Row 3 Left (Transfer Pricing) to Row 4 Center */}
            <path 
              d="M 90, 270 C 20, 270 20, 385 130, 385 L 200, 385" 
              className="roadmap-dashed-path" 
            />
          </svg>

          {/* The 7 Interactive Pills */}
          <div className="roadmap-pills-grid">

            {/* ROW 1: Left White Pill (GST & Customs) | Right Orange Pill (IFRS) */}
            <div className="roadmap-pill-row">
              {/* Pill 1: GST & Customs (White) */}
              <button
                type="button"
                onClick={() => handlePillClick('gst-customs')}
                className="branding-pill branding-pill-white"
                title="Click to pop GST & Customs offerings on screen"
              >
                <span>GST & Customs</span>
              </button>

              {/* Pill 2: IFRS (Orange) */}
              <button
                type="button"
                onClick={() => handlePillClick('ifrs')}
                className="branding-pill branding-pill-orange"
                title="Click to pop IFRS offerings on screen"
              >
                <span>IFRS</span>
              </button>
            </div>

            {/* ROW 2: Left Orange Pill (M&A) | Right White Pill (Corporate Legal) */}
            <div className="roadmap-pill-row">
              {/* Pill 3: M&A (Orange) */}
              <button
                type="button"
                onClick={() => handlePillClick('m-and-a')}
                className="branding-pill branding-pill-orange"
                title="Click to pop M&A offerings on screen"
              >
                <span>M&A</span>
              </button>

              {/* Pill 4: Corporate Legal (White) */}
              <button
                type="button"
                onClick={() => handlePillClick('corporate-legal')}
                className="branding-pill branding-pill-white"
                title="Click to pop Corporate Legal offerings on screen"
              >
                <span>Corporate Legal</span>
              </button>
            </div>

            {/* ROW 3: Left White Pill (Transfer Pricing) | Right Orange Pill (Payroll) */}
            <div className="roadmap-pill-row">
              {/* Pill 5: Transfer Pricing (White) */}
              <button
                type="button"
                onClick={() => handlePillClick('transfer-pricing')}
                className="branding-pill branding-pill-white"
                title="Click to pop Transfer Pricing offerings on screen"
              >
                <span>Transfer Pricing</span>
              </button>

              {/* Pill 6: Payroll (Orange) */}
              <button
                type="button"
                onClick={() => handlePillClick('payroll')}
                className="branding-pill branding-pill-orange"
                title="Click to pop Payroll offerings on screen"
              >
                <span>Payroll</span>
              </button>
            </div>

            {/* ROW 4 (CENTER): Orange Pill (Request Consultation) */}
            <div className="roadmap-pill-row-center">
              <button
                type="button"
                onClick={handleConsultationClick}
                className="branding-pill branding-pill-orange branding-pill-center"
                title="Request Specialist Consultation"
              >
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
                  <span>Request Consultation</span>
                </div>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* ================= POPUP MODAL CONTAINER ON SCREEN ================= */}
      {modalPracticeId && activeItem && (
        <div 
          className="roadmap-modal-overlay"
          onClick={() => setModalPracticeId(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeItem.title} Offerings`}
        >
          {/* Modal Container Card */}
          <div 
            className="roadmap-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="roadmap-modal-header">
              <div className="roadmap-modal-title-group">
                <div className="roadmap-modal-icon-box">
                  {ActiveIcon && <ActiveIcon className="w-5 h-5" />}
                </div>
                <div>
                  <span className="roadmap-modal-badge">Practice Offerings</span>
                  <h3 className="roadmap-modal-title">{activeItem.title}</h3>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setModalPracticeId(null)}
                className="roadmap-modal-close-btn"
                title="Close (Esc)"
                aria-label="Close offerings container"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Practice Switcher Tabs */}
            <div className="roadmap-modal-nav">
              {SOLUTIONS_360_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setModalPracticeId(item.id)}
                  className={`roadmap-modal-nav-btn ${item.id === activeItem.id ? 'active' : ''}`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Modal Body: Exact Verbatim Pointers (Zero AI content) */}
            <div className="roadmap-modal-body">
              {activeItem.isGrouped ? (
                /* Grouped Content (GST & Customs) */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {activeItem.groups.map((grp, gIdx) => (
                    <div key={gIdx} className="bg-black/35 rounded-xl p-4 sm:p-5 border border-white/10">
                      <div className="roadmap-subgroup-title">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FA5A16]" />
                        <span>{grp.label}</span>
                      </div>
                      <div className="space-y-2 pt-1">
                        {grp.pointers.map((pt, pIdx) => (
                          <div key={pIdx} className="roadmap-bullet-item">
                            <span className="roadmap-bullet-dot">•</span>
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Standard Content (IFRS, M&A, Corporate Legal, TP, Payroll) */
                <div className="bg-black/35 rounded-xl p-5 sm:p-6 border border-white/10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {activeItem.pointers.map((pt, pIdx) => (
                      <div key={pIdx} className="roadmap-bullet-item">
                        <span className="roadmap-bullet-dot">•</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="roadmap-modal-footer">
              <span className="text-xs text-slate-300 font-medium">
                Need specialized assistance with <strong className="text-white">{activeItem.title}</strong>?
              </span>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setModalPracticeId(null)}
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-xs font-bold text-slate-200 transition-colors cursor-pointer"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setModalPracticeId(null);
                    handleConsultationClick();
                  }}
                  className="roadmap-cta-btn"
                >
                  <span>Speak with Specialist</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
