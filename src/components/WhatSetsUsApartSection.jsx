import React, { useEffect, useRef, useState } from 'react';

const leftItems = [
  'No Hidden Cost',
  'Clear Accountability',
  'Technology with\nHuman Oversight'
];

const rightItems = [
  'Dedicated Experts',
  'Proactive Communication',
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
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 flex flex-col items-center">
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

        {/* 3-Column Symmetrical Layout: Left 3 Pointers | Center Red Apple Image | Right 3 Pointers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-6 xl:gap-8 items-center w-full">
          
          {/* ================= LEFT COLUMN: 3 Pointers ================= */}
          <div className="lg:col-span-4 w-full flex flex-col justify-center space-y-3.5 sm:space-y-4.5 order-2 lg:order-1">
            {leftItems.map((text, idx) => (
              <div 
                key={idx}
                style={{ transitionDelay: isVisible ? `${(idx + 1) * 120}ms` : '0ms' }}
                className={`flex items-center justify-center min-h-[82px] sm:min-h-[88px] lg:min-h-[94px] px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-[#FAF7F2] hover:bg-white border border-[#E8E2D5] hover:border-[#FA5A16]/50 shadow-2xs hover:shadow-sm text-center transition-all duration-500 transform ${
                  isVisible 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : 'opacity-0 -translate-x-6 scale-95'
                }`}
              >
                <span className="font-caveat font-bold text-2xl sm:text-[25px] lg:text-[26px] xl:text-[28px] text-[#1E2E4A] leading-[1.18] tracking-wide text-center">
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

          {/* ================= CENTER COLUMN: Standout Red Apple Image ================= */}
          <div 
            className={`lg:col-span-4 flex justify-center w-full order-1 lg:order-2 transition-all duration-700 ease-out delay-150 ${
              isVisible 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
          >
            <div className="w-full max-w-[440px] sm:max-w-[480px] lg:max-w-none rounded-2xl overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-500 group">
              <img
                src="/images/red-apple-standout.jpg"
                alt="Standout Red Apple among black and white apples"
                className="w-full h-auto aspect-[1.5] object-cover block transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
            </div>
          </div>

          {/* ================= RIGHT COLUMN: 3 Pointers ================= */}
          <div className="lg:col-span-4 w-full flex flex-col justify-center space-y-3.5 sm:space-y-4.5 order-3 lg:order-3">
            {rightItems.map((text, idx) => (
              <div 
                key={idx}
                style={{ transitionDelay: isVisible ? `${(idx + 4) * 120}ms` : '0ms' }}
                className={`flex items-center justify-center min-h-[82px] sm:min-h-[88px] lg:min-h-[94px] px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-[#FAF7F2] hover:bg-white border border-[#E8E2D5] hover:border-[#FA5A16]/50 shadow-2xs hover:shadow-sm text-center transition-all duration-500 transform ${
                  isVisible 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : 'opacity-0 translate-x-6 scale-95'
                }`}
              >
                <span className="font-caveat font-bold text-2xl sm:text-[25px] lg:text-[26px] xl:text-[28px] text-[#1E2E4A] leading-[1.18] tracking-wide text-center">
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

      </div>
    </section>
  );
}
