import React, { useEffect, useRef, useState } from 'react';

const items = [
  'No Hidden Cost',
  'Dedicated Experts',
  'Clear Accountability',
  'Proactive Communication',
  'Technology with\nHuman Oversight',
  'Ethical Advice'
];

export default function WhatSetsUsApartSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="what-sets-us-apart-section relative w-full bg-white overflow-hidden select-none"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 flex flex-col items-center">
          <h2 className="alpha-h2 font-bold text-[#1B2A4A] tracking-tight">
            What Sets{' '}
            <span className="whitespace-nowrap">
              <span className="text-[#1B2A4A]">Us</span>{' '}
              <span className="relative inline-block text-[#FA5A16]">
                Apart
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
            </span>
          </h2>
        </div>

        {/* 2-Column Split: Left Grid View | Right Red Apple Standout Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* ================= LEFT COLUMN: Grid View of What Sets Us Apart ================= */}
          <div className="lg:col-span-7 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {items.map((text, idx) => (
                <div 
                  key={idx}
                  style={{ transitionDelay: isVisible ? `${(idx + 1) * 120}ms` : '0ms' }}
                  className={`flex items-center justify-center min-h-[76px] sm:min-h-[84px] md:min-h-[90px] px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-white border border-[#E8E2D5] hover:border-[#FA5A16]/50 shadow-2xs hover:shadow-sm text-center transition-all duration-500 transform ${
                    isVisible 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-4 scale-95'
                  }`}
                >
                  <span className="font-caveat font-bold text-2xl sm:text-[25px] lg:text-[27px] xl:text-[29px] text-[#1E2E4A] leading-[1.15] tracking-wide text-center">
                    {text.includes('\n') ? (
                      text.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i === 0 && <br />}
                        </React.Fragment>
                      ))
                    ) : (
                      text
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Enlarged Red Apple Image ================= */}
          <div 
            className={`lg:col-span-5 flex justify-center lg:justify-end w-full transition-all duration-700 ease-out delay-100 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="w-full max-w-[480px] lg:max-w-[520px] rounded-2xl overflow-hidden border border-slate-200/80 shadow-lg">
              <img
                src="/images/red-apple-standout.jpg"
                alt="Standout Red Apple among black and white apples"
                className="w-full h-auto max-h-[340px] sm:max-h-[360px] object-cover block"
                loading="eager"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
