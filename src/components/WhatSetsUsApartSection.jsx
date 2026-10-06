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
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden select-none"
    >
      <div className="w-full max-w-full mx-auto px-2 sm:px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 flex flex-col items-center">
          <h2 className="alpha-h2 font-bold text-[#1B2A4A] tracking-tight">
            What Sets{' '}
            <span className="whitespace-nowrap">
              <span className="text-[#1B2A4A]">Us</span>{' '}
              <span className="relative inline-block text-[#00C853]">
                Apart
                <svg 
                  className="absolute left-0 -bottom-2 sm:-bottom-3.5 w-full h-3.5 sm:h-5 overflow-visible pointer-events-none" 
                  viewBox="0 0 200 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M 4 16 Q 100 3, 196 16" 
                    stroke="#00C853" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    className="animate-draw-curved-underline"
                  />
                </svg>
              </span>
            </span>
          </h2>
        </div>

        {/* 2-Column Split: Left Caveat Typography (Height Aligned with Right Image) | Right Red Apple Visual Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch w-full">
          
          {/* ================= LEFT COLUMN: Caveat Handwriting Typography (Staggered Slow Center-Aligned Sentence Slide-In) ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full py-1 sm:py-2 px-2 sm:px-4 text-center">
            {items.map((text, idx) => (
              <div 
                key={idx}
                style={{ transitionDelay: isVisible ? `${(idx + 1) * 220}ms` : '0ms' }}
                className={`font-caveat font-bold text-3xl sm:text-4xl md:text-[40px] lg:text-[46px] text-[#1E2E4A] leading-[1.15] tracking-wide text-center transition-all duration-[1200ms] ease-out transform ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-14'
                }`}
              >
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
              </div>
            ))}
          </div>

          {/* ================= RIGHT COLUMN: Full-Width Enlarged Red Apple Image ================= */}
          <div 
            className={`lg:col-span-7 flex justify-center lg:justify-end w-full h-full transition-all duration-1000 ease-out delay-150 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="w-full max-w-none rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xl h-full flex items-center">
              <img
                src="/images/red-apple-standout.jpg"
                alt="Standout Red Apple among black and white apples"
                className="w-full h-full max-h-[640px] object-cover block"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
