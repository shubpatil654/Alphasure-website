import React from 'react';

// 3D Realistic Gold Metallic Pushpin Component
const GoldPushpin = () => (
  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none filter drop-shadow-md">
    <svg width="28" height="34" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft drop shadow cast onto paper */}
      <ellipse cx="16" cy="34" rx="9" ry="3.5" fill="black" fillOpacity="0.32" />
      {/* Pin needle shaft */}
      <path d="M16 20L16 32" stroke="#694300" strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />
      {/* Lower Metallic Collar Rim */}
      <ellipse cx="16" cy="23" rx="8.5" ry="4" fill="url(#goldRimGrad)" stroke="#A3700E" strokeWidth="0.8" />
      {/* Tapered Collar */}
      <path d="M8.5 17C8.5 17 10 22 16 22C22 22 23.5 17 23.5 17L21 12H11L8.5 17Z" fill="url(#goldBodyGrad)" />
      {/* Main Metallic Knob Head */}
      <circle cx="16" cy="11" r="8.5" fill="url(#goldHeadGrad)" stroke="#7A4D00" strokeWidth="0.6" />
      {/* Specular Highlight Gloss */}
      <circle cx="13" cy="8" r="2.8" fill="white" fillOpacity="0.75" />
      <ellipse cx="13.5" cy="18.5" rx="3.5" ry="1.2" fill="white" fillOpacity="0.45" />
      
      <defs>
        <radialGradient id="goldHeadGrad" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFF4B8" />
          <stop offset="35%" stopColor="#F7C033" />
          <stop offset="75%" stopColor="#C4830A" />
          <stop offset="100%" stopColor="#704500" />
        </radialGradient>
        <linearGradient id="goldBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFEAA5" />
          <stop offset="50%" stopColor="#EAA51B" />
          <stop offset="100%" stopColor="#875300" />
        </linearGradient>
        <linearGradient id="goldRimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#875300" />
          <stop offset="30%" stopColor="#FFEAA5" />
          <stop offset="70%" stopColor="#EAA51B" />
          <stop offset="100%" stopColor="#5E3800" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// High precision line-art icons matching the image
const RegisterBusinessIcon = () => (
  <svg width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#C8750D]">
    {/* Document sheet */}
    <rect x="10" y="8" width="24" height="32" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
    {/* Form lines & avatar box */}
    <rect x="14" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" fill="none" />
    <line x1="24" y1="14" x2="30" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="18" x2="30" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="14" y1="24" x2="28" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="14" y1="29" x2="24" y2="29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="14" y1="34" x2="20" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Pen writing */}
    <path d="M36 22L28 30L26 34L30 32L38 24L36 22Z" fill="currentColor" stroke="currentColor" strokeWidth="1" />
    <path d="M34 20L38 24" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const AccountingIcon = () => (
  <svg width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#C8750D]">
    {/* Open ledger book */}
    <path d="M10 26C10 26 16 23 24 23C32 23 38 26 38 26V37C38 37 32 34 24 34C16 34 10 37 10 37V26Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
    <line x1="24" y1="23" x2="24" y2="34" stroke="currentColor" strokeWidth="2.5" />
    {/* Avatar badge on top */}
    <circle cx="24" cy="14" r="7" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="24" cy="12" r="2.5" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M19.5 18C20.5 16.5 22 15.5 24 15.5C26 15.5 27.5 16.5 28.5 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Pen writing */}
    <path d="M35 15L29 25L32 27L38 17L35 15Z" fill="currentColor" />
  </svg>
);

const ComplianceIcon = () => (
  <svg width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#C8750D]">
    {/* Shield */}
    <path d="M24 12C24 12 30 14 34 16V25C34 32 24 37 24 37C24 37 14 32 14 25V16C18 14 24 12 24 12Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
    {/* Checkmark inside */}
    <path d="M20 24L23 27L28 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Circular arrows around */}
    <path d="M11 20C11 15 15 10 21 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M18 6L22 9L18 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M37 28C37 33 33 38 27 39" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 42L26 39L30 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LegalIcon = () => (
  <svg width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#C8750D]">
    {/* Infinity loop symbol */}
    <path d="M15 24C15 20.6863 17.6863 18 21 18C23.5 18 25.5 19.5 27 21.5L31.5 27.5C33 29.5 35 30 37 30C40.3137 30 43 27.3137 43 24C43 20.6863 40.3137 18 37 18C34.5 18 32.5 19.5 31 21.5L26.5 27.5C25 29.5 23 30 21 30C17.6863 30 15 27.3137 15 24Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
);

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: 'Register a\nBusiness',
      bgColor: 'bg-[#FDFDFD]',
      textColor: 'text-[#1E293B]',
      borderStyle: 'border border-slate-200/90',
      rotation: '-rotate-2 sm:-rotate-3',
      swingClass: 'pin-swing-left',
      Icon: RegisterBusinessIcon,
      textSize: 'text-[18px] sm:text-[20px] lg:text-[21.5px] leading-snug font-extrabold',
    },
    {
      id: 2,
      title: 'Accounting &\nReporting',
      bgColor: 'bg-[#FFC43A]',
      textColor: 'text-[#1A1A1A]',
      borderStyle: 'border border-[#E5B232]',
      rotation: 'rotate-2 sm:rotate-3',
      swingClass: 'pin-swing-right',
      Icon: AccountingIcon,
      textSize: 'text-[18px] sm:text-[20px] lg:text-[21.5px] leading-snug font-extrabold',
    },
    {
      id: 3,
      title: 'Compliance',
      bgColor: 'bg-[#FDFDFD]',
      textColor: 'text-[#1E293B]',
      borderStyle: 'border border-slate-200/90',
      rotation: '-rotate-1 sm:-rotate-2',
      swingClass: 'pin-swing-left',
      Icon: ComplianceIcon,
      textSize: 'text-[18px] sm:text-[20px] lg:text-[21.5px] leading-snug font-extrabold',
    },
    {
      id: 4,
      title: 'Payroll\nAdvisory\nCorporate Legal\nFractional CFO',
      bgColor: 'bg-[#FFC43A]',
      textColor: 'text-[#1A1A1A]',
      borderStyle: 'border border-[#E5B232]',
      rotation: 'rotate-2 sm:rotate-3',
      swingClass: 'pin-swing-right',
      Icon: LegalIcon,
      textSize: 'text-[18px] sm:text-[20px] lg:text-[21.5px] leading-snug font-extrabold',
    },
  ];

  return (
    <section className="relative w-full py-10 sm:py-14 bg-[#0B132A] border-t border-b border-slate-800/80 overflow-hidden select-none">
      
      {/* Dark Grid Background Photo Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/dark-grid-bg.png"
          alt="Dark Grid Background"
          className="w-full h-full object-cover opacity-90 filter brightness-105"
        />
        {/* Subtle Vignette Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
      </div>

      <div className="max-w-[1360px] mx-auto px-3 sm:px-5 lg:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-7 sm:mb-9 flex flex-col items-center">
          <h2 className="alpha-h2 font-bold text-white tracking-tight text-shadow-hero whitespace-nowrap">
            Our{' '}
            <span className="relative inline-block font-bold text-[#FFC43A]">
              Services
              <svg 
                className="absolute left-0 -bottom-2 sm:-bottom-3.5 w-full h-3.5 sm:h-5 overflow-visible pointer-events-none" 
                viewBox="0 0 200 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M 4 16 Q 100 3, 196 16" 
                  stroke="#FFC43A" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  className="animate-draw-curved-underline"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* 4 Pinned Paper Note Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-7 items-center justify-center max-w-7xl mx-auto pt-2 pb-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group flex justify-center cursor-pointer select-none"
            >
              {/* Metallic 3D Pushpin anchored fixed at top center */}
              <GoldPushpin />

              {/* Paper Note Card */}
              <div
                className={`w-full max-w-[245px] sm:max-w-[260px] lg:max-w-[275px] min-h-[255px] sm:min-h-[275px] lg:min-h-[290px] flex flex-col items-center justify-between p-4 sm:p-5 pt-6 sm:pt-7 rounded-xs ${service.bgColor} ${service.borderStyle} ${service.rotation} ${service.swingClass} origin-top shadow-[0_12px_24px_rgba(0,0,0,0.11)] group-hover:shadow-[0_22px_40px_rgba(0,0,0,0.22)] transition-shadow duration-300`}
              >
                {/* Service Icon */}
                <div className="mt-1 mb-1.5 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 shrink-0">
                  <service.Icon />
                </div>

                {/* Service Title */}
                <div className="my-auto flex items-center justify-center text-center px-2 py-1">
                  <h3 className={`font-extrabold tracking-tight ${service.textColor} ${service.textSize} whitespace-pre-line text-center`}>
                    {service.title}
                  </h3>
                </div>

                {/* Bottom Subtle Corner Curl Effect */}
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-gradient-to-tl from-black/10 to-transparent pointer-events-none rounded-tl-full"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
