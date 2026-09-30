import React from 'react';

export default function ControllerProvidesSection({ onOpenModal }) {
  const items = [
    {
      id: 'accurate-reporting',
      titleLine1: 'Accurate Financial',
      titleLine2: 'Reporting',
      image: '/images/periodic-mis-stack.jpg',
      alt: 'Accurate Financial Reporting and MIS statements',
    },
    {
      id: 'strong-processes',
      titleLine1: 'Strong Processes &',
      titleLine2: 'Financial Controls',
      image: '/images/periodic-multilevel-review.jpg',
      alt: 'Strong Processes and Internal Financial Controls',
    },
    {
      id: 'cash-flow-monitoring',
      titleLine1: 'Cash Flow & Performance',
      titleLine2: 'Monitoring',
      image: '/images/realtime-cashflow-vis.jpg',
      alt: 'Cash Flow and Performance KPI Monitoring',
    },
    {
      id: 'compliance-audit',
      titleLine1: 'Compliance & Audit',
      titleLine2: 'Readiness',
      image: '/images/periodic-audit-support.jpg',
      alt: 'Statutory Compliance and Audit Readiness',
    },
    {
      id: 'strategic-support',
      titleLine1: 'Strategic Financial',
      titleLine2: 'Support',
      image: '/images/periodic-review-call.jpg',
      alt: 'Strategic Financial Support for business decisions',
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden select-none bg-white py-8 sm:py-10 md:py-14"
      id="controller-provides"
    >
      {/* SVG Abstract Running Lines Background - Matching Periodic & Pvt Ltd Section Flow */}
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-slate-900 tracking-tight leading-tight mb-4">
            What a{' '}
            <span className="whitespace-nowrap">
              <span className="text-slate-900">Controller</span>{' '}
              <span className="relative inline-block text-[#FA5A16]">
                Provides
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
            </span>
          </h2>
          <p className="text-slate-700 font-semibold text-base sm:text-lg md:text-xl lg:text-[21px] max-w-3xl mx-auto leading-relaxed mt-4">
            Senior-level financial leadership, robust governance, and data-driven insights to elevate your finance operations.
          </p>
        </div>

        {/* ================= 5-Item Crosshairs & Cards Grid Container ================= */}
        <div className="relative w-full max-w-[1380px] mx-auto px-2 sm:px-4">
          
          {/* Top Row: 3 Items */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-0 pb-0 md:pb-6 border-b-0 md:border-b md:border-slate-300/70">
            {/* Vertical Dividers on Desktop for Top Row */}
            <div className="hidden md:block absolute left-1/3 top-2 bottom-2 w-[1.5px] bg-slate-300/70 -translate-x-1/2 pointer-events-none z-20" />
            <div className="hidden md:block absolute left-2/3 top-2 bottom-2 w-[1.5px] bg-slate-300/70 -translate-x-1/2 pointer-events-none z-20" />

            {items.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={onOpenModal}
                className={`
                  relative flex flex-col items-center justify-center text-center 
                  px-3 sm:px-5 lg:px-6 py-6 sm:py-7 md:py-8
                  cursor-pointer group select-none transition-all duration-300
                  overflow-hidden min-h-[120px] sm:min-h-[140px] md:min-h-[155px]
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
                    background:
                      'radial-gradient(circle at center, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.65) 60%, rgba(255,255,255,0) 100%)',
                  }}
                />

                {/* Content Container */}
                <div className="relative z-10 flex flex-col items-center justify-center max-w-[320px] lg:max-w-[340px]">
                  {/* Item Title - 2 Line Display */}
                  <h3 className="text-xl sm:text-2xl md:text-[22px] lg:text-[25px] font-black text-slate-950 tracking-tight leading-snug group-hover:text-[#FA5A16] group-hover:scale-[1.02] transition-all duration-200 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                    <span>{item.titleLine1}</span>
                    <br />
                    <span>{item.titleLine2}</span>
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 Items (Centered & Balanced) */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-y-6 md:gap-y-0 pt-0 md:pt-6">
            {/* Vertical Divider for Bottom Row */}
            <div className="hidden md:block absolute left-1/2 top-2 bottom-2 w-[1.5px] bg-slate-300/70 -translate-x-1/2 pointer-events-none z-20" />

            {items.slice(3, 5).map((item) => (
              <div
                key={item.id}
                onClick={onOpenModal}
                className={`
                  relative flex flex-col items-center justify-center text-center 
                  px-4 sm:px-6 lg:px-8 py-6 sm:py-7 md:py-8
                  cursor-pointer group select-none transition-all duration-300
                  overflow-hidden min-h-[120px] sm:min-h-[140px] md:min-h-[155px]
                `}
              >
                {/* Background Contextual Image */}
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

                {/* Soft White Protective Halo */}
                <div
                  className="absolute inset-2 sm:inset-3 rounded-3xl pointer-events-none z-0 transition-opacity duration-300"
                  style={{
                    background:
                      'radial-gradient(circle at center, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.65) 60%, rgba(255,255,255,0) 100%)',
                  }}
                />

                {/* Content Container */}
                <div className="relative z-10 flex flex-col items-center justify-center max-w-[340px] lg:max-w-[360px]">
                  {/* Item Title - 2 Line Display */}
                  <h3 className="text-xl sm:text-2xl md:text-[22px] lg:text-[25px] font-black text-slate-950 tracking-tight leading-snug group-hover:text-[#FA5A16] group-hover:scale-[1.02] transition-all duration-200 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                    <span>{item.titleLine1}</span>
                    <br />
                    <span>{item.titleLine2}</span>
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
