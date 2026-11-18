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
    <section className="relative w-full py-[25px] bg-[#0B192C] border-t border-b border-slate-800/80 overflow-hidden select-none">
      
      {/* Subtle Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[180px] bg-gradient-to-r from-blue-600/15 via-[#FA5A16]/10 to-transparent blur-3xl opacity-70"></div>
      </div>

      {/* Section Header */}
      <div className="max-w-[1360px] mx-auto px-3 sm:px-5 lg:px-6 text-center mb-4 sm:mb-5 flex flex-col items-center relative z-10">
        <h2 className="alpha-h2 font-bold text-white tracking-tight">
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

      {/* Ticker Container with Dark Gradient Fade Masks */}
      <div className="relative w-full overflow-hidden py-1 sm:py-1.5 select-none relative z-10">
        
        {/* Left Fade Mask (Dark) */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 lg:w-44 bg-gradient-to-r from-[#0B192C] via-[#0B192C]/90 to-transparent z-10 pointer-events-none"></div>

        {/* Right Fade Mask (Dark) */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 lg:w-44 bg-gradient-to-l from-[#0B192C] via-[#0B192C]/90 to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track (Sliding Left to Right) */}
        <div className="animate-marquee-ltr flex items-center gap-3.5 sm:gap-4">
          {marqueeItems.map((country, index) => (
            <div
              key={`${country.code}-${index}`}
              className="flex items-center gap-3 sm:gap-3.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#13233C]/85 hover:bg-[#1A2E4E] border border-slate-700/70 hover:border-[#FA5A16]/70 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 shrink-0 group cursor-pointer"
            >
              {/* Compact Flag Icon */}
              <div className="relative w-9 h-6 sm:w-11 sm:h-7.5 rounded-md overflow-hidden shadow-xs border border-white/20 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={country.flag}
                  alt={`${country.name} Flag`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Country Meta */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-sm sm:text-[15px] tracking-wide group-hover:text-[#FA5A16] transition-colors leading-snug">
                    {country.name}
                  </span>
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-white/10 text-slate-300 border border-white/10 uppercase leading-none">
                    {country.code}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium group-hover:text-slate-300 leading-snug">
                  {country.region}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
