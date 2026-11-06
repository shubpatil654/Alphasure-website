import React, { useState, useRef } from 'react';
import { 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2, 
  Layers,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { SOLUTIONS_360_ITEMS } from './Solutions360Section';
import './RoadmapSolutions360Section.css';

export default function RoadmapSolutions360Section({ onOpenModal }) {
  // Active selected practice from the pills roadmap
  const [activePracticeId, setActivePracticeId] = useState('gst-customs');
  // Optional view all toggle
  const [viewAll, setViewAll] = useState(false);
  
  const detailsRef = useRef(null);

  const activeItem = SOLUTIONS_360_ITEMS.find((item) => item.id === activePracticeId) || SOLUTIONS_360_ITEMS[0];
  const ActiveIcon = activeItem.icon;

  const handlePillClick = (id) => {
    setActivePracticeId(id);
    setViewAll(false);
    // Smoothly scroll down to details card if on mobile
    if (window.innerWidth < 768 && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
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
            Click on any pill to view its complete offerings and pointers
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
                className={`branding-pill branding-pill-white ${activePracticeId === 'gst-customs' && !viewAll ? 'is-active' : ''}`}
                title="View GST & Customs Offerings"
              >
                <span>GST & Customs</span>
              </button>

              {/* Pill 2: IFRS (Orange) */}
              <button
                type="button"
                onClick={() => handlePillClick('ifrs')}
                className={`branding-pill branding-pill-orange ${activePracticeId === 'ifrs' && !viewAll ? 'is-active' : ''}`}
                title="View IFRS Offerings"
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
                className={`branding-pill branding-pill-orange ${activePracticeId === 'm-and-a' && !viewAll ? 'is-active' : ''}`}
                title="View M&A Offerings"
              >
                <span>M&A</span>
              </button>

              {/* Pill 4: Corporate Legal (White) */}
              <button
                type="button"
                onClick={() => handlePillClick('corporate-legal')}
                className={`branding-pill branding-pill-white ${activePracticeId === 'corporate-legal' && !viewAll ? 'is-active' : ''}`}
                title="View Corporate Legal Offerings"
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
                className={`branding-pill branding-pill-white ${activePracticeId === 'transfer-pricing' && !viewAll ? 'is-active' : ''}`}
                title="View Transfer Pricing Offerings"
              >
                <span>Transfer Pricing</span>
              </button>

              {/* Pill 6: Payroll (Orange) */}
              <button
                type="button"
                onClick={() => handlePillClick('payroll')}
                className={`branding-pill branding-pill-orange ${activePracticeId === 'payroll' && !viewAll ? 'is-active' : ''}`}
                title="View Payroll Offerings"
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

        {/* ================= DETAILED OFFERINGS CARD (EXACT USER CONTENT) ================= */}
        <div ref={detailsRef} className="roadmap-details-card">

          {/* Card Header */}
          <div className="roadmap-card-header">
            <div className="roadmap-card-title-group">
              <div className="roadmap-card-icon-box">
                <ActiveIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="roadmap-card-badge">Selected Practice</span>
                <h3 className="roadmap-card-title">{activeItem.title}</h3>
              </div>
            </div>

            {/* Quick action: View all vs Focused view */}
            <button
              type="button"
              onClick={() => setViewAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-xs font-bold text-slate-200 border border-white/15 cursor-pointer transition-colors"
            >
              <Layers className="w-3.5 h-3.5 text-[#FA5A16]" />
              <span>{viewAll ? 'Show Focused View' : 'View All 6 Practices'}</span>
            </button>
          </div>

          {/* Card Body: The exact bullet points (strictly without AI filler text) */}
          <div className="pt-6">
            {viewAll ? (
              /* All 6 Practices View */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SOLUTIONS_360_ITEMS.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <div 
                      key={item.id} 
                      className={`bg-black/35 rounded-xl p-4 border ${item.id === activePracticeId ? 'border-[#FA5A16]' : 'border-white/10'}`}
                    >
                      <div className="flex items-center gap-2.5 mb-3 pb-2 border-b border-white/10">
                        <div className="w-7 h-7 rounded-lg bg-[#FA5A16]/20 text-[#FA5A16] flex items-center justify-center shrink-0">
                          <ItemIcon className="w-4 h-4" />
                        </div>
                        <h4 className="font-extrabold text-white text-base">{item.title}</h4>
                      </div>

                      {item.isGrouped ? (
                        <div className="space-y-3">
                          {item.groups.map((grp, gIdx) => (
                            <div key={gIdx}>
                              <div className="roadmap-subgroup-title text-xs">
                                <span>{grp.label}</span>
                              </div>
                              <div className="space-y-1">
                                {grp.pointers.map((pt, pIdx) => (
                                  <div key={pIdx} className="roadmap-bullet-item text-xs">
                                    <span className="roadmap-bullet-dot text-sm">•</span>
                                    <span>{pt}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-1.5">
                          {item.pointers.map((pt, pIdx) => (
                            <div key={pIdx} className="roadmap-bullet-item text-xs">
                              <span className="roadmap-bullet-dot text-sm">•</span>
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Focused Single Practice View */
              <div>
                {activeItem.isGrouped ? (
                  /* Grouped View (GST & Customs) */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activeItem.groups.map((grp, gIdx) => (
                      <div key={gIdx} className="bg-black/30 rounded-xl p-5 border border-white/10">
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
                  /* Standard List View (IFRS, M&A, Corporate Legal, TP, Payroll) */
                  <div className="bg-black/30 rounded-xl p-5 sm:p-6 border border-white/10">
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
            )}
          </div>

          {/* Card Footer */}
          <div className="roadmap-card-footer">
            <span className="text-xs text-slate-300 font-medium">
              Need personalized advisory on <strong className="text-white">{activeItem.title}</strong>?
            </span>

            <button
              type="button"
              onClick={handleConsultationClick}
              className="roadmap-cta-btn"
            >
              <span>Schedule Call with Specialist</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
