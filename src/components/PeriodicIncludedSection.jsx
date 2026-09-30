import React from 'react';

export default function PeriodicIncludedSection({ onOpenModal }) {
  const items = [
    {
      id: 'dedicated-accountant',
      title: 'Dedicated accountant',
      description: 'Assigned specialist managing your day-to-day accounts and books.',
      image: '/images/periodic-dedicated-accountant.jpg',
      alt: 'Dedicated accountant working on financial statements',
    },
    {
      id: 'multilevel-review',
      title: 'Multi-Level Review',
      description: 'Rigorous multi-tier supervisory audits ensuring zero reporting errors.',
      image: '/images/periodic-multilevel-review.jpg',
      alt: 'Multi-level supervisory audit and verification review',
    },
    {
      id: 'mis-stack',
      title: 'MIS Stack',
      description: 'Executive dashboards, KPI analytics and real-time cash flow reports.',
      image: '/images/periodic-mis-stack.jpg',
      alt: 'Executive MIS dashboard with financial metrics',
    },
    {
      id: 'audit-support',
      title: 'Audit support',
      description: 'Complete assistance for statutory, tax, and internal compliance audits.',
      image: '/images/periodic-audit-support.jpg',
      alt: 'Statutory audit support and verified files',
    },
    {
      id: 'review-call',
      title: 'Review call with accountant',
      description: 'Regular 1-on-1 strategic calls to review business performance and metrics.',
      image: '/images/periodic-review-call.jpg',
      alt: 'Review call consultation with accounting expert',
    },
    {
      id: 'accrual-accounting',
      title: 'Accrual basis of accounting',
      description: 'Industry-standard double entry matching revenues and expenditures precisely.',
      image: '/images/periodic-accrual-basis.jpg',
      alt: 'Accrual basis accounting and ledger sheets',
    },
    {
      id: 'closing-books',
      title: 'Closing of books',
      description: 'Systematic month-end and year-end reconciliation and ledger finalization.',
      image: '/images/periodic-closing-books.jpg',
      alt: 'Closing of financial books and verified ledger reconciliation',
    },
    {
      id: 'response-time',
      title: '24 hours Response time',
      description: 'Guaranteed swift turnaround on queries, reports, and advisory support.',
      image: '/images/periodic-rapid-response.jpg',
      alt: '24 hours rapid response and dedicated support',
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden select-none bg-white py-8 sm:py-10 md:py-14"
      id="periodic-whats-included"
    >
      {/* SVG Abstract Running Lines Background - Matching Pvt Ltd Section Flow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        {/* Left Side Running Lines Accent */}
        <svg
          className="absolute left-0 top-0 w-80 sm:w-[480px] md:w-[560px] h-full"
          viewBox="0 0 400 800"
          fill="none"
          preserveAspectRatio="none"
        >
          <path d="M -40 60 C 140 200, 220 480, 200 800" stroke="#E2D8C8" strokeWidth="1.8" strokeDasharray="6 6" />
          <path d="M -40 140 C 100 280, 180 540, 160 800" stroke="#ECE2D3" strokeWidth="1.2" />
          <circle cx="-30" cy="450" r="260" stroke="#E2D8C8" strokeWidth="1.2" fill="none" />
          <circle cx="-30" cy="450" r="190" stroke="#ECE2D3" strokeWidth="1" strokeDasharray="6 6" fill="none" />
        </svg>

        {/* Right Side Running Lines Accent */}
        <svg
          className="absolute right-0 top-0 w-80 sm:w-[480px] md:w-[560px] h-full"
          viewBox="0 0 400 800"
          fill="none"
          preserveAspectRatio="none"
        >
          <path d="M 440 60 C 260 200, 180 480, 200 800" stroke="#E2D8C8" strokeWidth="1.8" strokeDasharray="6 6" />
          <path d="M 440 140 C 300 280, 220 540, 240 800" stroke="#ECE2D3" strokeWidth="1.2" />
          <circle cx="430" cy="450" r="260" stroke="#E2D8C8" strokeWidth="1.2" fill="none" />
          <circle cx="430" cy="450" r="190" stroke="#ECE2D3" strokeWidth="1" strokeDasharray="6 6" fill="none" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center">
        {/* Section Heading Area */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-slate-900 tracking-tight leading-tight mb-4 whitespace-nowrap">
            What’s{' '}
            <span className="relative inline-block text-[#FA5A16]">
              included
              <svg
                className="absolute left-0 -bottom-2 sm:-bottom-3 w-full h-3.5 sm:h-4.5 overflow-visible pointer-events-none"
                viewBox="0 0 200 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 4 16 Q 100 3, 196 16"
                  stroke="#FA5A16"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  className="animate-draw-curved-underline"
                />
              </svg>
            </span>
          </h2>
          <p className="text-slate-700 font-semibold text-base sm:text-lg md:text-xl lg:text-[21px] max-w-2xl mx-auto leading-relaxed mt-4">
            Everything your enterprise needs to keep accounting robust, timely, and fully compliant.
          </p>
        </div>

        {/* ================= 8-Item 4x2 Grid Container with High Contrast & Faded-End Crosshairs ================= */}
        <div className="relative w-full max-w-[1380px] mx-auto min-h-[380px] flex items-center justify-center px-2 sm:px-4">
          {/* Desktop Dividers (Visible on md and larger screens) */}
          <div className="hidden md:block">
            {/* Horizontal Middle Line: Fading out to transparent on left and right */}
            <div
              className="absolute left-4 lg:left-8 right-4 lg:right-8 top-1/2 -translate-y-1/2 h-[1.5px] pointer-events-none z-20"
              style={{
                background:
                  'linear-gradient(90deg, rgba(30,41,59,0) 0%, rgba(30,41,59,0.08) 4%, rgba(30,41,59,0.75) 16%, rgba(30,41,59,0.75) 84%, rgba(30,41,59,0.08) 96%, rgba(30,41,59,0) 100%)',
              }}
            />

            {/* Vertical Line 1: at 25% */}
            <div
              className="absolute top-2 lg:top-4 bottom-2 lg:bottom-4 left-1/4 -translate-x-1/2 w-[1.5px] pointer-events-none z-20"
              style={{
                background:
                  'linear-gradient(180deg, rgba(30,41,59,0) 0%, rgba(30,41,59,0.08) 6%, rgba(30,41,59,0.75) 20%, rgba(30,41,59,0.75) 80%, rgba(30,41,59,0.08) 94%, rgba(30,41,59,0) 100%)',
              }}
            />

            {/* Vertical Line 2: at 50% (Center) */}
            <div
              className="absolute top-2 lg:top-4 bottom-2 lg:bottom-4 left-1/2 -translate-x-1/2 w-[1.5px] pointer-events-none z-20"
              style={{
                background:
                  'linear-gradient(180deg, rgba(30,41,59,0) 0%, rgba(30,41,59,0.08) 6%, rgba(30,41,59,0.75) 20%, rgba(30,41,59,0.75) 80%, rgba(30,41,59,0.08) 94%, rgba(30,41,59,0) 100%)',
              }}
            />

            {/* Vertical Line 3: at 75% */}
            <div
              className="absolute top-2 lg:top-4 bottom-2 lg:bottom-4 left-3/4 -translate-x-1/2 w-[1.5px] pointer-events-none z-20"
              style={{
                background:
                  'linear-gradient(180deg, rgba(30,41,59,0) 0%, rgba(30,41,59,0.08) 6%, rgba(30,41,59,0.75) 20%, rgba(30,41,59,0.75) 80%, rgba(30,41,59,0.08) 94%, rgba(30,41,59,0) 100%)',
              }}
            />
          </div>

          {/* 4x2 Grid on Desktop (2x4 on tablet, 1-col on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full h-full relative z-10 gap-y-4 sm:gap-y-6 md:gap-y-0">
            {items.map((item, idx) => (
              <div
                key={item.id}
                onClick={onOpenModal}
                className={`
                  relative flex flex-col items-center justify-center text-center 
                  px-4 sm:px-6 lg:px-7 py-6 sm:py-7 md:py-9
                  cursor-pointer group select-none transition-all duration-300
                  overflow-hidden min-h-[110px] sm:min-h-[130px] md:min-h-[145px]
                `}
              >
                {/* Background Contextual Image (Soft Watermark + Radial Gradient Mask) */}
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
                  style={{
                    maskImage:
                      'radial-gradient(ellipse at center, rgba(0,0,0,0.85) 15%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0) 75%)',
                    WebkitMaskImage:
                      'radial-gradient(ellipse at center, rgba(0,0,0,0.85) 15%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0) 75%)',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center opacity-15 group-hover:opacity-28 group-hover:scale-105 transition-all duration-700 ease-out filter brightness-[1.08] contrast-[0.95]"
                    loading="lazy"
                  />
                </div>

                {/* Soft White Protective Halo Layer behind Text */}
                <div 
                  className="absolute inset-2 sm:inset-3 rounded-3xl pointer-events-none z-0 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.65) 60%, rgba(255,255,255,0) 100%)',
                  }}
                />

                {/* Content Container (Layered above background image & halo) */}
                <div className="relative z-10 flex flex-col items-center justify-center max-w-[280px] lg:max-w-[300px]">
                  {/* Item Title - Large, Bold & High Contrast */}
                  <h3 className="text-xl sm:text-2xl md:text-[23px] lg:text-[26px] font-black text-slate-950 tracking-tight leading-snug group-hover:text-[#FA5A16] group-hover:scale-[1.03] transition-all duration-200 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
