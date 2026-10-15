import React from 'react';

export default function OurJourneySection({ onOpenModal }) {
  return (
    <section 
      className="relative w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 select-none overflow-hidden"
      id="our-journey"
    >
      {/* Background Soft Elegant Accent Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
          <path d="M-100 200 C 350 120, 700 400, 1100 220 C 1300 130, 1400 350, 1550 280" stroke="#E2D8C8" strokeWidth="1.5" />
          <path d="M-100 700 C 400 550, 850 750, 1200 600 C 1380 500, 1450 700, 1550 620" stroke="#ECE2D3" strokeWidth="1.2" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-14 flex flex-col items-center">

          
          <h2 className="alpha-h2 font-bold text-[#0B192C] tracking-tight">
            Our{' '}
            <span className="relative inline-block text-[#FA5A16]">
              Journey
              <svg 
                className="absolute left-0 -bottom-1.5 sm:-bottom-2.5 w-full h-3 sm:h-4 overflow-visible pointer-events-none" 
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
          
          <p className="alpha-body text-slate-600 font-medium text-center mt-3.5 max-w-xl mx-auto">
            One milestone at a time. One vision throughout.
          </p>
        </div>

        {/* ================= WIDESCREEN DYNAMIC UNDULATING 3D ROADMAP ================= */}
        <div className="relative w-full max-w-[1320px] mx-auto">
          
          {/* Seamless Feathered Blend Mask - No borders, no card box, pure integrated graphic */}
          <div className="relative w-full overflow-hidden [mask-image:radial-gradient(ellipse_96%_92%_at_50%_50%,black_80%,transparent_100%)]">
            
            {/* Top Seamless Edge Vignette */}
            <div className="absolute top-0 left-0 right-0 h-8 sm:h-12 bg-gradient-to-b from-[#FAF7F2] to-transparent pointer-events-none z-10" />
            
            {/* Bottom Seamless Edge Vignette */}
            <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-14 bg-gradient-to-t from-[#FAF7F2] to-transparent pointer-events-none z-10" />
            
            {/* Left Seamless Edge Vignette */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#FAF7F2] to-transparent pointer-events-none z-10" />
            
            {/* Right Seamless Edge Vignette */}
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#FAF7F2] to-transparent pointer-events-none z-10" />

            <img 
              src="/images/our-journey-timeline-new.png" 
              srcSet="/images/our-journey-timeline-new.png 1x, /images/our-journey-timeline-new-2x.png 2x"
              alt="Alphasure Journey Roadmap - From 2015 Foundation to 2026 Alphasure Solutions"
              className="w-full h-auto object-contain select-none"
              loading="eager"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
