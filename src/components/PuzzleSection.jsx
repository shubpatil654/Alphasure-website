import React from 'react';

export default function PuzzleSection() {
  return (
    <section className="relative w-full py-[25px] bg-white overflow-hidden select-none border-t border-slate-100">
      
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

          {/* RIGHT COLUMN: 3D Puzzle Solution Graphic (Transparent Background) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
            <div className="relative z-10 w-full flex justify-center lg:justify-end transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/images/puzzle-alphasure-solution.png"
                alt="A complete accounting solution - Small businesses or growing businesses fit with Alphasure"
                className="w-full h-auto max-w-[500px] lg:max-w-[540px] object-contain block filter drop-shadow-[0_16px_32px_rgba(11,25,44,0.1)]"
                loading="eager"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
