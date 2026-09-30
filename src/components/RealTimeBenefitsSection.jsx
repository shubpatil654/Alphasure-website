import React from 'react';

export default function RealTimeBenefitsSection({ onOpenModal }) {
  const quadrants = [
    {
      id: 'uptodate-financials',
      title: 'Always Up-to-Date Financials',
      description: 'Your books are always current and audit-ready, updated continuously as transactions happen.',
    },
    {
      id: 'cashflow-visibility',
      title: 'Better Cash Flow Visibility',
      description: 'Real-time transparency into cash inflows, outflows, payables, and receivables at any given moment.',
    },
    {
      id: 'informed-decisions',
      title: 'Make Informed Decisions',
      description: 'Make informed decisions using current financial data to drive growth and allocate capital effectively.',
    },
    {
      id: 'statutory-filings',
      title: 'Stay Prepared for Statutory Filings',
      description: 'Stay prepared for statutory filings, GST, TDS, and audits with accurate records and zero backlog.',
    },
  ];

  return (
    <section 
      className="relative w-full overflow-hidden select-none bg-white py-8 sm:py-10 md:py-14"
      id="realtime-benefits"
    >
      {/* SVG Abstract Running Lines Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        {/* Left Side Running Lines Accent */}
        <svg className="absolute left-0 top-0 w-80 sm:w-[480px] md:w-[560px] h-full" viewBox="0 0 400 800" fill="none" preserveAspectRatio="none">
          <path d="M -40 60 C 140 200, 220 480, 200 800" stroke="#E2D8C8" strokeWidth="1.8" strokeDasharray="6 6" />
          <path d="M -40 140 C 100 280, 180 540, 160 800" stroke="#ECE2D3" strokeWidth="1.2" />
          <circle cx="-30" cy="450" r="260" stroke="#E2D8C8" strokeWidth="1.2" fill="none" />
          <circle cx="-30" cy="450" r="190" stroke="#ECE2D3" strokeWidth="1" strokeDasharray="6 6" fill="none" />
        </svg>

        {/* Right Side Running Lines Accent */}
        <svg className="absolute right-0 top-0 w-80 sm:w-[480px] md:w-[560px] h-full" viewBox="0 0 400 800" fill="none" preserveAspectRatio="none">
          <path d="M 440 60 C 260 200, 180 480, 200 800" stroke="#E2D8C8" strokeWidth="1.8" strokeDasharray="6 6" />
          <path d="M 440 140 C 300 280, 220 540, 240 800" stroke="#ECE2D3" strokeWidth="1.2" />
          <circle cx="430" cy="450" r="260" stroke="#E2D8C8" strokeWidth="1.2" fill="none" />
          <circle cx="430" cy="450" r="190" stroke="#ECE2D3" strokeWidth="1" strokeDasharray="6 6" fill="none" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center">
        
        {/* Section Heading Area */}
        <div className="text-center max-w-5xl mx-auto mb-6 sm:mb-8 md:mb-10 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black text-slate-900 tracking-tight leading-tight mb-4">
            Benefits of{' '}
            <span className="relative inline-block text-[#FA5A16]">
              Real-Time Accounting
              <svg 
                className="absolute left-0 -bottom-2 sm:-bottom-3.5 w-full h-3.5 sm:h-5 overflow-visible pointer-events-none" 
                viewBox="0 0 200 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M 4 16 Q 100 3, 196 16" 
                  stroke="#FA5A16" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  className="animate-draw-curved-underline"
                />
              </svg>
            </span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg md:text-xl max-w-5xl mx-auto leading-relaxed mt-4 whitespace-normal sm:whitespace-nowrap">
            Your books are always current and audit-ready. Gain continuous clarity to scale faster.
          </p>
        </div>

        {/* ================= 4-Quadrant Container with Faded-End Crosshairs ================= */}
        <div className="relative w-full max-w-[1320px] mx-auto min-h-[220px] sm:min-h-[260px] flex items-center justify-center px-2 sm:px-6">
          
          {/* Central Crosshair Lines with Faded Ends (Desktop) */}
          <div className="hidden sm:block">
            {/* Horizontal Line: Fading out to transparent on left and right */}
            <div 
              className="absolute left-4 sm:left-8 right-4 sm:right-8 top-1/2 -translate-y-1/2 h-[1.5px] pointer-events-none z-20"
              style={{
                background: 'linear-gradient(90deg, rgba(30,41,59,0) 0%, rgba(30,41,59,0.08) 6%, rgba(30,41,59,0.85) 24%, rgba(30,41,59,0.85) 76%, rgba(30,41,59,0.08) 94%, rgba(30,41,59,0) 100%)',
              }}
            />

            {/* Vertical Line: Fading out to transparent on top and bottom */}
            <div 
              className="absolute top-2 sm:top-4 bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 w-[1.5px] pointer-events-none z-20"
              style={{
                background: 'linear-gradient(180deg, rgba(30,41,59,0) 0%, rgba(30,41,59,0.08) 6%, rgba(30,41,59,0.85) 24%, rgba(30,41,59,0.85) 76%, rgba(30,41,59,0.08) 94%, rgba(30,41,59,0) 100%)',
              }}
            />
          </div>

          {/* 4 Quadrants Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-full relative z-10 gap-y-4 sm:gap-y-0">
            {quadrants.map((item, idx) => (
              <div
                key={item.id}
                onClick={onOpenModal}
                className={`
                  relative flex flex-col items-center justify-center text-center 
                  px-5 sm:px-8 md:px-12 py-5 sm:py-6 md:py-8
                  cursor-pointer group select-none transition-all duration-300
                  overflow-hidden min-h-[105px] sm:min-h-[125px] md:min-h-[135px]
                  hover:bg-slate-50/40 rounded-2xl
                  ${idx === 0 ? 'sm:pb-6 md:pb-8 sm:pr-8 md:pr-12' : ''}
                  ${idx === 1 ? 'sm:pb-6 md:pb-8 sm:pl-8 md:pl-12' : ''}
                  ${idx === 2 ? 'sm:pt-6 md:pt-8 sm:pr-8 md:pr-12' : ''}
                  ${idx === 3 ? 'sm:pt-6 md:pt-8 sm:pl-8 md:pl-12' : ''}
                `}
              >
                {/* Content Container */}
                <div className="relative z-10 flex flex-col items-center justify-center w-full px-2">
                  {/* Quadrant Title - Single Line Display */}
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-black text-slate-950 tracking-tight leading-none whitespace-normal sm:whitespace-nowrap group-hover:text-[#FA5A16] group-hover:scale-[1.02] transition-all duration-200 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
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
