import React from 'react';

const countries = [
  { name: 'India', code: 'IN', flag: '/images/flags/in.svg', region: 'South Asia' },
  { name: 'Canada', code: 'CA', flag: '/images/flags/ca.svg', region: 'North America' },
  { name: 'USA', code: 'US', flag: '/images/flags/us.svg', region: 'North America' },
  { name: 'Bahrain', code: 'BH', flag: '/images/flags/bh.svg', region: 'Middle East' },
  { name: 'UAE', code: 'AE', flag: '/images/flags/ae.svg', region: 'Middle East' },
  { name: 'Australia', code: 'AU', flag: '/images/flags/au.svg', region: 'Asia-Pacific' },
  { name: 'Singapore', code: 'SG', flag: '/images/flags/sg.svg', region: 'South East Asia' },
  { name: 'UK', code: 'UK', flag: '/images/flags/gb.svg', region: 'Europe' },
];

export default function CountryFlagsSection() {
  // Multiply array 4 times to ensure seamless infinite looping on all screen sizes
  const marqueeItems = [...countries, ...countries, ...countries, ...countries];

  return (
    <section className="relative w-full py-8 sm:py-10 bg-[#FAF7F2] border-t border-b border-[#ECE2D3] overflow-hidden select-none">
      
      {/* Subtle Light Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[160px] bg-gradient-to-r from-blue-400/10 via-[#FA5A16]/10 to-transparent blur-3xl opacity-60"></div>
      </div>

      {/* Section Header */}
      <div className="max-w-[1360px] mx-auto px-3 sm:px-5 lg:px-6 text-center mb-5 sm:mb-6 flex flex-col items-center relative z-10">
        <h2 className="alpha-h2 font-bold text-[#1B2A4A] tracking-tight">
          Trusted by businesses{' '}
          <span className="relative inline-block text-[#FA5A16]">
            worldwide
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
      </div>

      {/* Ticker Container with Soft Gradient Fade Masks */}
      <div className="relative w-full overflow-hidden py-1 sm:py-2 select-none relative z-10">
        
        {/* Left Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 lg:w-44 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-transparent z-10 pointer-events-none"></div>

        {/* Right Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 lg:w-44 bg-gradient-to-l from-[#FAF7F2] via-[#FAF7F2]/90 to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track with Pure Flags */}
        <div className="animate-marquee-ltr flex items-center gap-4 sm:gap-5 md:gap-6">
          {marqueeItems.map((country, index) => (
            <div
              key={`${country.code}-${index}`}
              title={country.name}
              className="relative w-14 h-9 sm:w-16 sm:h-10.5 md:w-20 md:h-13 rounded-xl overflow-hidden shadow-xs hover:shadow-lg border border-slate-200/90 hover:border-[#FA5A16]/70 transition-all duration-300 transform hover:scale-110 shrink-0 cursor-pointer bg-white"
            >
              <img
                src={country.flag}
                alt={`${country.name} Flag`}
                className="w-full h-full object-cover block"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
