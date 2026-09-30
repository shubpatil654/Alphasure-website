import React from 'react';

export default function AlphasureLogo({ className = "h-10 sm:h-12 w-auto", textClassName = "text-white" }) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3 select-none group cursor-pointer">
      <img
        src="/images/logo-exact-clean.png"
        alt="Alphasure Logo"
        className={`${className} object-contain filter drop-shadow-md transition-transform duration-200 group-hover:scale-105`}
      />
      <span className={`font-black text-2xl sm:text-3xl tracking-tight ${textClassName} group-hover:opacity-90 transition-opacity`}>
        Alphasure
      </span>
    </div>
  );
}
