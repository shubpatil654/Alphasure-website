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
    <section className="relative w-full py-6 sm:py-8 bg-white border-t border-b border-slate-100 overflow-hidden">
      
      {/* Section Header */}
      <div className="max-w-[1360px] mx-auto px-3 sm:px-5 lg:px-6 text-center mb-5 sm:mb-6 flex flex-col items-center">
        <h2 className="alpha-h2 font-bold text-[#1B2538] tracking-tight">
          Trusted by <span className="font-bold text-black whitespace-nowrap">businesses worldwide</span>
        </h2>

        {/* Decorative Blue Line Accent with 3 Dots from UI design */}
        <div className="mt-4 flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1D70F5]"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#1D70F5]"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#1D70F5]"></span>
          <span className="w-20 sm:w-28 h-[3.5px] rounded-full bg-[#1D70F5] ml-1"></span>
        </div>
      </div>

      {/* Ticker Container with Gradient Fade Masks */}
      <div className="relative w-full overflow-hidden py-4 sm:py-6 select-none">
        
        {/* Left Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 lg:w-52 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

        {/* Right Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 lg:w-52 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track (Sliding Left to Right) */}
        <div className="animate-marquee-ltr flex items-center gap-6 sm:gap-8">
          {marqueeItems.map((country, index) => (
            <div
              key={`${country.code}-${index}`}
              className="flex items-center gap-5 sm:gap-6 px-6 sm:px-8 py-5 sm:py-6 rounded-3xl bg-slate-50/90 hover:bg-white border border-slate-200/90 hover:border-[#1D70F5]/50 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-200/90 shrink-0 group cursor-pointer"
            >
              {/* Significantly Enlarged Flag Icon */}
              <div className="relative w-16 h-11 sm:w-24 sm:h-16 rounded-xl overflow-hidden shadow-md border-2 border-slate-200/80 shrink-0 transition-transform duration-300 group-hover:scale-108">
                <img
                  src={country.flag}
                  alt={`${country.name} Flag`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Country Meta */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2.5">
                  <span className="text-slate-900 font-black text-lg sm:text-xl md:text-2xl tracking-wide group-hover:text-[#1D70F5] transition-colors">
                    {country.name}
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-extrabold px-2.5 py-0.5 rounded-md bg-slate-200/90 text-slate-800 uppercase">
                    {country.code}
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-slate-500 font-bold mt-0.5">
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
