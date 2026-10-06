import React from 'react';
import { ArrowRight } from 'lucide-react';

// Custom SVG Icons with dark stroke for light background
const ChatBubblesIcon = () => (
  <svg className="w-12 h-12 text-[#1B2A4A]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    {/* Main Speech Bubble */}
    <path d="M42 28 C42 37 32 42 22 42 C19.5 42 17 41.2 14.5 43 C12 44.8 9.5 46.5 8 47.5 C8 45 8.5 41 8.8 38.5 C6.5 35 5.5 31 5.5 26.5 C5.5 16.5 13.5 9 24 9 C34 9 42 16.5 42 26.5 Z" />
    {/* Dots */}
    <circle cx="17" cy="26" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="24" cy="26" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="31" cy="26" r="1.5" fill="currentColor" stroke="none" />
    {/* Secondary Speech Bubble behind */}
    <path d="M36 39 C41 39 46 37 49.5 33.5 C54 29 55 23.5 53 19 C55 21 56 24 56 27.5 C56 34 50 39.5 43 40.5 C42 42.5 41.5 45.5 42 47.5 C40 46.5 37.5 44.8 35.5 43 C32 44 28.5 43 25.5 41.5 C28.5 40.5 32 40 36 39 Z" opacity="0.4" />
  </svg>
);

const DocumentGearIcon = () => (
  <svg className="w-12 h-12 text-[#1B2A4A]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    {/* Document Outline */}
    <path d="M16 10 H38 L50 22 V54 H16 Z" />
    {/* Folded Corner */}
    <path d="M38 10 V22 H50" />
    {/* Lines inside doc */}
    <line x1="22" y1="20" x2="32" y2="20" />
    <line x1="22" y1="28" x2="42" y2="28" stroke="#FF1E43" strokeWidth="2.5" />
    <line x1="22" y1="36" x2="34" y2="36" />
    {/* Gear Overlay */}
    <g transform="translate(32, 34)" stroke="#FF1E43" strokeWidth="2">
      <circle cx="11" cy="11" r="4.5" fill="none" />
      <path d="M11 2 V4 M11 18 V20 M2 11 H4 M18 11 H20 M4.6 4.6 L6 6 M16 16 L17.4 17.4 M4.6 17.4 L6 16 M16 6 L17.4 4.6" />
    </g>
  </svg>
);

const DedicatedTeamIcon = () => (
  <svg className="w-12 h-12 text-[#1B2A4A]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    {/* Center Leader Figure */}
    <circle cx="32" cy="22" r="5" />
    <path d="M22 42 C22 34 26 31 32 31 C38 31 42 34 42 42" />
    {/* Left Team Member */}
    <circle cx="18" cy="27" r="4" />
    <path d="M10 46 C10 40 13 37 18 37" />
    {/* Right Team Member */}
    <circle cx="46" cy="27" r="4" />
    <path d="M46 37 C51 37 54 40 54 46" />
    {/* Rays above leader */}
    <line x1="32" y1="9" x2="32" y2="13" stroke="#FF1E43" />
    <line x1="23" y1="12" x2="26" y2="15" stroke="#FF1E43" />
    <line x1="41" y1="12" x2="38" y2="15" stroke="#FF1E43" />
  </svg>
);

export default function GettingStartedSection({ onOpenModal }) {
  const steps = [
    {
      id: '01',
      title: 'Step 1 – Let’s Talk',
      description: 'We understand your business and recommend the right solution.',
      icon: <ChatBubblesIcon />,
    },
    {
      id: '02',
      title: 'Step 2 – We Set Everything Up',
      description: 'From document collection to software setup and knowledge transfer, we manage the entire onboarding process.',
      icon: <DocumentGearIcon />,
    },
    {
      id: '03',
      title: 'Step 3 – You’re Ready to Go',
      description: 'Meet your dedicated team and focus on growing your business.',
      icon: <DedicatedTeamIcon />,
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white text-slate-900 overflow-hidden select-none">
      
      {/* ================= Geometric Red Mesh Background (Left & Right Edge Wireframes on White) ================= */}
      {/* Left Low-Poly Geometric Red Wireframe */}
      <svg className="absolute left-0 top-0 bottom-0 h-full w-[240px] sm:w-[360px] pointer-events-none opacity-45 z-0" viewBox="0 0 300 600" fill="none" preserveAspectRatio="none">
        <polygon points="0,0 120,80 40,240 0,180" stroke="#FF1E43" strokeWidth="1.2" fill="url(#redGlowLeft1)" />
        <polygon points="120,80 280,160 180,360 40,240" stroke="#FF1E43" strokeWidth="1.2" fill="url(#redGlowLeft2)" />
        <polygon points="40,240 180,360 80,520 0,420" stroke="#FF1E43" strokeWidth="1.2" fill="none" />
        <polygon points="180,360 300,480 140,600 80,520" stroke="#FF1E43" strokeWidth="1.2" fill="url(#redGlowLeft1)" />
        <defs>
          <radialGradient id="redGlowLeft1" cx="0%" cy="50%" r="100%">
            <stop offset="0%" stopColor="#FF1E43" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="redGlowLeft2" cx="30%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#FF0033" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Right Low-Poly Geometric Red Wireframe */}
      <svg className="absolute right-0 top-0 bottom-0 h-full w-[240px] sm:w-[360px] pointer-events-none opacity-45 z-0" viewBox="0 0 300 600" fill="none" preserveAspectRatio="none">
        <polygon points="300,0 180,100 260,260 300,200" stroke="#FF1E43" strokeWidth="1.2" fill="url(#redGlowRight1)" />
        <polygon points="180,100 20,180 120,380 260,260" stroke="#FF1E43" strokeWidth="1.2" fill="url(#redGlowRight2)" />
        <polygon points="260,260 120,380 220,540 300,440" stroke="#FF1E43" strokeWidth="1.2" fill="none" />
        <polygon points="120,380 0,500 160,600 220,540" stroke="#FF1E43" strokeWidth="1.2" fill="url(#redGlowRight1)" />
        <defs>
          <radialGradient id="redGlowRight1" cx="100%" cy="50%" r="100%">
            <stop offset="0%" stopColor="#FF1E43" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="redGlowRight2" cx="70%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#FF0033" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Soft Ambient Red Radial Glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#FF1E43]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-[#FF1E43]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= Section Header Title ================= */}
        <div className="text-center mb-12 sm:mb-16 flex flex-col items-center">
          <h2 className="alpha-h2 font-bold text-[#1B2A4A] tracking-tight">
            Getting Started{' '}
            <span className="whitespace-nowrap">
              <span className="text-[#1B2A4A]">is</span>{' '}
              <span className="relative inline-block text-[#FF1E43]">
                Easy
                <svg 
                  className="absolute left-0 -bottom-2 sm:-bottom-3.5 w-full h-3.5 sm:h-5 overflow-visible pointer-events-none" 
                  viewBox="0 0 200 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M 4 16 Q 100 3, 196 16" 
                    stroke="#FF1E43" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    className="animate-draw-curved-underline"
                  />
                </svg>
              </span>
            </span>
          </h2>
        </div>

        {/* ================= 3 Steps Horizontal Process Container ================= */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Red Connecting Horizontal Glow Line (Desktop md+) */}
          <div className="hidden md:block absolute top-[56px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[#FF1E43]/30 via-[#FF1E43] to-[#FF1E43]/30 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center group">
                
                {/* Circle Icon Wrapper with Overlapping Red Number Badge */}
                <div className="relative mb-6">
                  {/* Main Light Circle Icon Container */}
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-slate-50 border-2 border-slate-200 shadow-md flex items-center justify-center group-hover:border-[#FF1E43] group-hover:bg-white group-hover:shadow-xl transition-all duration-300">
                    {step.icon}
                  </div>

                  {/* Overlapping Red Number Badge (01, 02, 03) */}
                  <div className="absolute top-0 right-0 translate-x-1 -translate-y-1 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#FF2E4D] to-[#E00028] text-white font-black text-base sm:text-lg flex items-center justify-center shadow-md border-2 border-white">
                    {step.id}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="alpha-h5 font-semibold text-[#1B2A4A] mb-2 tracking-tight">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="alpha-small text-slate-600 font-normal leading-relaxed max-w-[280px]">
                  {step.description}
                </p>

              </div>
            ))}
          </div>
        </div>

        {/* ================= Bottom Center CTA Button ================= */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <button
            onClick={onOpenModal}
            className="alpha-btn group relative px-8 py-3.5 sm:px-10 rounded-xl bg-gradient-to-r from-[#FF1E43] to-[#E00028] hover:from-[#E00028] hover:to-[#C00020] text-white tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer min-h-[48px]"
          >
            <span>START YOUR JOURNEY</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
