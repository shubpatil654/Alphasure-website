import React from 'react';

export default function GstTdsWhyMattersSection({ onOpenModal }) {
  const points = [
    {
      id: 'late-fees',
      title: 'Late fees and penalties',
    },
    {
      id: 'delayed-interest',
      title: 'Interest on delayed payments',
    },
    {
      id: 'compliance-notices',
      title: 'Compliance notices',
    },
    {
      id: 'loss-of-itc',
      title: 'Loss of Input Tax Credit (GST)',
    },
    {
      id: 'increased-scrutiny',
      title: 'Increased scrutiny from tax authorities',
    },
  ];

  return (
    <section 
      className="relative w-full overflow-hidden select-none bg-white py-8 sm:py-10 md:py-14"
      id="why-compliance-matters"
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
            Why Timely{' '}
            <span className="whitespace-nowrap">
              <span className="text-slate-900">Compliance</span>{' '}
              <span className="relative inline-block text-[#FA5A16]">
                Matters
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
            </span>
          </h2>
          <p className="text-slate-600 font-semibold text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-4">
            Missing GST or TDS deadlines can lead to:
          </p>
        </div>

        {/* ================= 5-Point Crosshairs Container with Faded-End Lines ================= */}
        <div className="relative w-full max-w-[1380px] mx-auto px-2 sm:px-4">
          
          {/* Top Row: 3 Items with Faded Vertical Divider Lines */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-0 pb-0 md:pb-8">
            {/* Vertical Dividers for Top Row with Faded Ends */}
            <div 
              className="hidden md:block absolute left-1/3 top-2 bottom-2 w-[1.5px] -translate-x-1/2 pointer-events-none z-20" 
              style={{
                background: 'linear-gradient(180deg, rgba(30,41,59,0) 0%, rgba(30,41,59,0.08) 6%, rgba(30,41,59,0.85) 24%, rgba(30,41,59,0.85) 76%, rgba(30,41,59,0.08) 94%, rgba(30,41,59,0) 100%)',
              }}
            />
            <div 
              className="hidden md:block absolute left-2/3 top-2 bottom-2 w-[1.5px] -translate-x-1/2 pointer-events-none z-20" 
              style={{
                background: 'linear-gradient(180deg, rgba(30,41,59,0) 0%, rgba(30,41,59,0.08) 6%, rgba(30,41,59,0.85) 24%, rgba(30,41,59,0.85) 76%, rgba(30,41,59,0.08) 94%, rgba(30,41,59,0) 100%)',
              }}
            />

            {points.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={onOpenModal}
                className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-5 sm:py-6 md:py-7 cursor-pointer group select-none transition-all duration-300 overflow-hidden min-h-[90px] sm:min-h-[110px] md:min-h-[120px] hover:bg-slate-50/60 rounded-2xl"
              >
                <div className="relative z-10 flex flex-col items-center justify-center max-w-[340px]">
                  {/* Point Title */}
                  <h3 className="text-xl sm:text-2xl md:text-[23px] lg:text-[25px] font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#FA5A16] group-hover:scale-[1.015] transition-all duration-200">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Central Horizontal Line with Faded Ends */}
          <div 
            className="hidden md:block relative w-full h-[1.5px] pointer-events-none z-20 my-1"
            style={{
              background: 'linear-gradient(90deg, rgba(30,41,59,0) 0%, rgba(30,41,59,0.08) 6%, rgba(30,41,59,0.85) 24%, rgba(30,41,59,0.85) 76%, rgba(30,41,59,0.08) 94%, rgba(30,41,59,0) 100%)',
            }}
          />

          {/* Bottom Row: 2 Items (Centered & Balanced) */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-y-6 md:gap-y-0 pt-0 md:pt-6">
            {/* Vertical Divider for Bottom Row with Faded Ends */}
            <div 
              className="hidden md:block absolute left-1/2 top-2 bottom-2 w-[1.5px] -translate-x-1/2 pointer-events-none z-20" 
              style={{
                background: 'linear-gradient(180deg, rgba(30,41,59,0) 0%, rgba(30,41,59,0.08) 6%, rgba(30,41,59,0.85) 24%, rgba(30,41,59,0.85) 76%, rgba(30,41,59,0.08) 94%, rgba(30,41,59,0) 100%)',
              }}
            />

            {points.slice(3, 5).map((item) => (
              <div
                key={item.id}
                onClick={onOpenModal}
                className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-5 sm:py-6 md:py-7 cursor-pointer group select-none transition-all duration-300 overflow-hidden min-h-[90px] sm:min-h-[110px] md:min-h-[120px] hover:bg-slate-50/60 rounded-2xl"
              >
                <div className="relative z-10 flex flex-col items-center justify-center max-w-[360px]">
                  {/* Point Title */}
                  <h3 className="text-xl sm:text-2xl md:text-[23px] lg:text-[25px] font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#FA5A16] group-hover:scale-[1.015] transition-all duration-200">
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
