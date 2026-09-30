import React from 'react';

// Exact icons matching the reference design
const StorefrontIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1E293B]">
    <path d="M3 9L4.5 4H19.5L21 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 9V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V9" stroke="currentColor" strokeWidth="2" />
    <path d="M9 21V15H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 9C3 10.1046 3.89543 11 5 11C6.10457 11 7 10.1046 7 9C7 10.1046 7.89543 11 9 11C10.1046 11 11 10.1046 11 9C11 10.1046 11.8954 11 13 11C14.1046 11 15 10.1046 15 9C15 10.1046 15.8954 11 17 11C18.1046 11 19 10.1046 19 9" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const ChartUpIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1E293B]">
    <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 8L10 4L15 9L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 4H20V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BulbCheckIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0F172A]">
    <path d="M9 21H15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M10 18H14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M12 2A7 7 0 0 0 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9A7 7 0 0 0 12 2Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.5 9L11.5 11L15 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RedExclamationCircle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#EF4444] shrink-0">
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="2" />
    <path d="M12 7V12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="16" r="1" fill="currentColor" />
  </svg>
);

// 3D Boy Character (Left Pushing Figure)
const LeftPushingBoy = () => (
  <div className="relative w-32 sm:w-44 md:w-52 h-44 sm:h-56 md:h-64 flex items-center justify-end select-none shrink-0 group">
    {/* Yellow Energy Rays Accent */}
    <div className="absolute -top-4 left-2 sm:left-4 z-20 pointer-events-none transition-transform duration-300 group-hover:scale-125">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M6 14L16 20" stroke="#FFB800" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M12 6L18 16" stroke="#FFB800" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M22 4L22 14" stroke="#FFB800" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    </div>

    {/* 3D Boy Vector Art */}
    <svg viewBox="0 0 200 240" className="w-full h-full filter drop-shadow-xl overflow-visible">
      <defs>
        <linearGradient id="boySkin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFDFC4" />
          <stop offset="100%" stopColor="#F5B995" />
        </linearGradient>
        <linearGradient id="boyShirt" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="boyPants" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>

      {/* Shadow under feet */}
      <ellipse cx="80" cy="230" rx="65" ry="10" fill="#000000" fillOpacity="0.12" />

      {/* Back Leg & Foot */}
      <path d="M 50 150 L 25 210 L 45 225 L 70 170 Z" fill="#0F172A" />
      <ellipse cx="30" cy="222" rx="18" ry="8" fill="#FFFFFF" />

      {/* Front Leg & Foot */}
      <path d="M 90 150 L 110 210 L 130 220 L 110 160 Z" fill="#1E293B" />
      <ellipse cx="120" cy="220" rx="18" ry="8" fill="#FFFFFF" />

      {/* Torso / Shirt in pushing lean posture */}
      <path d="M 55 90 L 135 110 L 120 160 L 55 145 Z" fill="url(#boyShirt)" rx="10" />

      {/* Head & Dark Hair */}
      <circle cx="95" cy="55" r="28" fill="url(#boySkin)" />
      {/* Hair */}
      <path d="M 68 55 C 68 25, 122 25, 122 55 C 115 40, 100 35, 90 35 C 75 35, 70 45, 68 55 Z" fill="#1E1B18" />
      <circle cx="85" cy="55" r="3.5" fill="#1E1B18" />

      {/* Pushing Arms (Stretching forward to push puzzle card) */}
      <path d="M 120 115 L 180 100 L 185 118 L 125 130 Z" fill="url(#boyShirt)" />
      <circle cx="185" cy="108" r="11" fill="url(#boySkin)" />
    </svg>
  </div>
);

// 3D Girl Character (Right Pushing Figure)
const RightPushingGirl = () => (
  <div className="relative w-32 sm:w-44 md:w-52 h-44 sm:h-56 md:h-64 flex items-center justify-start select-none shrink-0 group">
    {/* Yellow Energy Rays Accent */}
    <div className="absolute -top-4 right-2 sm:right-4 z-20 pointer-events-none transition-transform duration-300 group-hover:scale-125">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M34 14L24 20" stroke="#FFB800" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M28 6L22 16" stroke="#FFB800" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M18 4L18 14" stroke="#FFB800" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    </div>

    {/* 3D Girl Vector Art */}
    <svg viewBox="0 0 200 240" className="w-full h-full filter drop-shadow-xl overflow-visible">
      <defs>
        <linearGradient id="girlSkin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFDFC4" />
          <stop offset="100%" stopColor="#F5B995" />
        </linearGradient>
        <linearGradient id="girlShirt" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EAB308" />
          <stop offset="100%" stopColor="#CA8A04" />
        </linearGradient>
      </defs>

      {/* Shadow under feet */}
      <ellipse cx="120" cy="230" rx="65" ry="10" fill="#000000" fillOpacity="0.12" />

      {/* Long Flowing Black Hair behind */}
      <path d="M 80 50 C 60 70, 50 120, 65 160 C 75 140, 80 90, 100 60 Z" fill="#1E1B18" />

      {/* Back Leg & Foot */}
      <path d="M 150 150 L 175 210 L 155 225 L 130 170 Z" fill="#0F172A" />
      <ellipse cx="170" cy="222" rx="18" ry="8" fill="#FFFFFF" />

      {/* Front Leg & Foot */}
      <path d="M 110 150 L 90 210 L 70 220 L 90 160 Z" fill="#1E293B" />
      <ellipse cx="80" cy="220" rx="18" ry="8" fill="#FFFFFF" />

      {/* Torso / Yellow Top in pushing lean posture */}
      <path d="M 145 90 L 65 110 L 80 160 L 145 145 Z" fill="url(#girlShirt)" rx="10" />

      {/* Head & Hair */}
      <circle cx="105" cy="55" r="28" fill="url(#girlSkin)" />
      <path d="M 132 55 C 132 25, 78 25, 78 55 C 85 40, 100 35, 110 35 C 125 35, 130 45, 132 55 Z" fill="#1E1B18" />
      <circle cx="115" cy="55" r="3.5" fill="#1E1B18" />

      {/* Pushing Arms (Stretching left to push puzzle card) */}
      <path d="M 80 115 L 20 100 L 15 118 L 75 130 Z" fill="url(#girlShirt)" />
      <circle cx="15" cy="108" r="11" fill="url(#girlSkin)" />
    </svg>
  </div>
);

export default function PuzzleSection() {
  return (
    <section className="relative w-full py-12 sm:py-16 bg-white overflow-hidden select-none">
      
      {/* SVG Abstract Side Lines Background Accents - Positioned strictly on outer sides */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
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

      <div className="max-w-[1360px] mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
        
        {/* 2-Column Split: Vertically Centered Layout (Left Heading & Subtext | Right Puzzle Graphic) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
          
          {/* LEFT COLUMN: Section Heading & Content */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            <h3 className="alpha-h3 font-semibold text-[#FA5A16] tracking-tight">
              An accounting solution.
            </h3>
            <h2 className="alpha-h2 font-bold text-[#062C1E] tracking-tight mt-2 sm:mt-3">
              Not just <span className="whitespace-nowrap">another software</span>
            </h2>
            <p className="mt-5 sm:mt-7 alpha-large-body text-[#3A4A40] font-normal leading-relaxed">
              We bring the{' '}
              <span className="uppercase font-bold text-[#FA5A16] tracking-wide">
                PEOPLE, EXPERTISE, AND TECHNOLOGY
              </span>{' '}
              to get your accounting <span className="whitespace-nowrap">done right.</span>
            </p>
          </div>

          {/* RIGHT COLUMN: Puzzle Graphic Container */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end items-center relative">
            {/* Solid White Mask to guarantee zero line overlap behind transparent puzzle cutouts */}
            <div className="absolute inset-4 bg-white rounded-3xl z-0 pointer-events-none"></div>

            <div className="relative z-10 w-full flex justify-center lg:justify-end transition-transform duration-500 hover:scale-[1.01]">
              <img
                src="/images/puzzle-3d-fit.png"
                alt="Small Businesses, Growing Businesses - We just Fit"
                className="w-full h-auto max-w-[650px] lg:max-w-[720px] object-contain filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.12)]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
