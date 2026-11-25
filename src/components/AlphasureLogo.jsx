import React from 'react';

export default function AlphasureLogo({ className = "h-8 sm:h-10 md:h-12 w-auto", textClassName = "text-white" }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 select-none group cursor-pointer">
      <img
        src="/images/alphasure-logo-v3.png"
        alt="Alphasure Logo"
        className={`${className} object-contain filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.22)] brightness-[1.12] contrast-[1.05] transition-transform duration-200 group-hover:scale-105`}
      />
      <span className={`font-black text-xl sm:text-2xl md:text-3xl tracking-tight ${textClassName} drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)] group-hover:opacity-90 transition-opacity`}>
        Alphasure
      </span>
    </div>
  );
}
