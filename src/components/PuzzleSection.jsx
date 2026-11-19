import React from 'react';

export default function PuzzleSection() {
  return (
    <section className="puzzle-section relative w-full bg-white overflow-hidden select-none border-t border-slate-100 py-12 sm:py-16 lg:py-20">
      
      {/* SVG Abstract Side Lines Background Accents - Positioned on outer sides */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-35">
        {/* Left Side Curved Lines Accent */}
        <svg className="absolute left-0 top-0 w-80 sm:w-96 h-full" viewBox="0 0 400 800" fill="none" preserveAspectRatio="none">
          <path d="M-40 100 C 140 220, 220 500, 240 800" stroke="#E2D8C8" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M-40 180 C 120 300, 180 560, 200 800" stroke="#ECE2D3" strokeWidth="1.5" />
          <circle cx="-20" cy="700" r="280" stroke="#E2D8C8" strokeWidth="1.5" fill="none" />
          <circle cx="-20" cy="700" r="200" stroke="#ECE2D3" strokeWidth="1.2" strokeDasharray="6 6" fill="none" />
        </svg>

        {/* Right Side Curved Lines Accent */}
        <svg className="absolute right-0 top-0 w-80 sm:w-96 h-full" viewBox="0 0 400 800" fill="none" preserveAspectRatio="none">
          <path d="M440 100 C 260 220, 180 500, 160 800" stroke="#E2D8C8" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M440 180 C 280 300, 220 560, 200 800" stroke="#ECE2D3" strokeWidth="1.5" />
          <circle cx="420" cy="700" r="280" stroke="#E2D8C8" strokeWidth="1.5" fill="none" />
          <circle cx="420" cy="700" r="200" stroke="#ECE2D3" strokeWidth="1.2" strokeDasharray="6 6" fill="none" />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Split: Left Heading & Text | Right 3D Puzzle Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* LEFT COLUMN: Section Heading & Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-extrabold text-[#FA5A16] tracking-tight leading-[1.2] sm:whitespace-nowrap">
              A complete accounting solution
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[32px] xl:text-[36px] font-black text-[#0B192C] tracking-tight leading-[1.2] mt-2.5 sm:mt-3 whitespace-nowrap">
              Easy. AI-Powered. Expert-Led.
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-[19px] text-slate-600 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              We bring the{' '}
              <span className="font-bold text-[#FA5A16]">
                People, Expertise and Technology
              </span>{' '}
              to get your accounting done right,{' '}
              <span className="font-bold text-[#FA5A16]">
                at a price that makes sense.
              </span>
            </p>
          </div>

          {/* RIGHT COLUMN: 3D Puzzle Solution Graphic with "We Just Fit" Line */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end relative">
            <div className="w-full max-w-[520px] lg:max-w-[560px] xl:max-w-[600px] flex flex-col items-center">
              
              {/* Elegant "We Just Fit" Brand Line Centered Above Image */}
              <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 mb-3 sm:mb-4">
                <span className="h-[2px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-[#0B192C]/40 rounded-full"></span>
                <span className="text-sm sm:text-base md:text-lg font-extrabold tracking-[0.16em] uppercase text-[#0B192C]">
                  We Just <span className="text-[#FA5A16]">Fit</span>
                </span>
                <span className="h-[2px] w-6 sm:w-10 bg-gradient-to-l from-transparent to-[#FA5A16]/50 rounded-full"></span>
              </div>

              {/* Scaled 3D Puzzle Graphic */}
              <div className="relative z-10 w-full flex justify-center transition-transform duration-500 hover:scale-[1.04] scale-105 sm:scale-110 lg:scale-[1.12] origin-center">
                <img
                  src="/images/puzzle-alphasure-solution.png"
                  alt="A complete accounting solution - Small businesses or growing businesses fit with Alphasure"
                  className="w-full h-auto object-contain block filter drop-shadow-[0_16px_32px_rgba(11,25,44,0.12)]"
                  loading="eager"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
