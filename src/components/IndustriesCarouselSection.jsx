import React, { useState, useEffect, useRef, useCallback } from 'react';
import './IndustriesCarouselSection.css';

const industries = [
  {
    id: 'healthcare-life-sciences',
    name: 'Healthcare & Life Sciences',
    image: '/images/industries/healthcare-life-sciences.jpg',
  },
  {
    id: 'consulting',
    name: 'Consulting',
    image: '/images/industries/consulting.jpg',
  },
  {
    id: 'education',
    name: 'Education',
    image: '/images/industries/education.jpg',
  },
  {
    id: 'financial-services',
    name: 'Financial Services',
    image: '/images/industries/financial-services.jpg',
  },
  {
    id: 'food-beverages',
    name: 'Food and Beverages',
    image: '/images/industries/food-beverages.jpg',
  },
  {
    id: 'it-services',
    name: 'IT Services',
    image: '/images/industries/it-services.jpg',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    image: '/images/industries/manufacturing.jpg',
  },
  {
    id: 'media-publishing',
    name: 'Media and Publishing',
    image: '/images/industries/media-publishing.jpg',
  },
  {
    id: 'non-profit',
    name: 'Non Profit',
    image: '/images/industries/non-profit.jpg',
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    image: '/images/industries/professional-services.jpg',
  },
  {
    id: 'retail',
    name: 'Retail',
    image: '/images/industries/retail.jpg',
  },
  {
    id: 'software-technology',
    name: 'Software and Technology Companies',
    image: '/images/industries/software-technology.jpg',
  },
  {
    id: 'wholesale-distribution',
    name: 'Wholesale Distribution',
    image: '/images/industries/wholesale-distribution.jpg',
  },
];

export default function IndustriesCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = industries.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Automated rotation strictly every 3 seconds as requested
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(interval);
  }, [total]);

  // Touch handlers for mobile swipe
  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  // Circular offset calculation for 3D cover flow
  const getOffset = (index, current, count) => {
    let diff = index - current;
    if (diff > count / 2) diff -= count;
    if (diff < -count / 2) diff += count;
    return diff;
  };

  return (
    <section 
      className="relative w-full pt-14 sm:pt-18 lg:pt-20 pb-12 sm:pb-16 lg:pb-18 bg-gradient-to-b from-white via-[#FAF7F2]/50 to-[#FAF7F2] overflow-hidden select-none"
      id="industries"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= HEADING ONLY ================= */}
        <div className="text-center w-full max-w-5xl mx-auto mb-8 sm:mb-12 flex flex-col items-center px-2">
          <h2 className="font-bold text-[#0B192C] tracking-tight whitespace-nowrap text-[clamp(1rem,3.4vw,2.65rem)] leading-tight">
            <span className="relative inline-block text-[#FA5A16]">
              Industries
              {/* Signature Animated Curved Underline SVG */}
              <svg 
                className="absolute left-0 -bottom-1.5 sm:-bottom-2.5 w-full h-2.5 sm:h-3.5 overflow-visible pointer-events-none" 
                viewBox="0 0 200 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M 4 16 Q 100 3, 196 16" 
                  stroke="#FA5A16" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  className="animate-draw-curved-underline" 
                />
              </svg>
            </span>
            {' '}we provide services too
          </h2>
        </div>

        {/* ================= 3D COVER FLOW CAROUSEL STAGE ================= */}
        <div 
          className="industries-carousel-stage"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {industries.map((item, index) => {
            const offset = getOffset(index, activeIndex, total);
            const isActive = offset === 0;

            // Compute 3D Cover Flow Transform based on offset
            let style = {};

            if (offset === 0) {
              // Active Center Card
              style = {
                transform: 'translateX(-50%) translateY(-50%) translateZ(0) scale(1.05)',
                zIndex: 30,
                opacity: 1,
                filter: 'brightness(1)',
              };
            } else if (offset === -1) {
              // Immediate Left Card
              style = {
                transform: 'translateX(calc(-50% - min(250px, 62vw))) translateY(-50%) scale(0.86)',
                zIndex: 20,
                opacity: 0.88,
                filter: 'brightness(0.92)',
              };
            } else if (offset === 1) {
              // Immediate Right Card
              style = {
                transform: 'translateX(calc(-50% + min(250px, 62vw))) translateY(-50%) scale(0.86)',
                zIndex: 20,
                opacity: 0.88,
                filter: 'brightness(0.92)',
              };
            } else if (offset === -2) {
              // Far Left Card
              style = {
                transform: 'translateX(calc(-50% - min(460px, 114vw))) translateY(-50%) scale(0.72)',
                zIndex: 10,
                opacity: 0.55,
                filter: 'brightness(0.8)',
              };
            } else if (offset === 2) {
              // Far Right Card
              style = {
                transform: 'translateX(calc(-50% + min(460px, 114vw))) translateY(-50%) scale(0.72)',
                zIndex: 10,
                opacity: 0.55,
                filter: 'brightness(0.8)',
              };
            } else {
              // Off-screen Cards
              style = {
                transform: `translateX(calc(-50% + ${offset > 0 ? 600 : -600}px)) translateY(-50%) scale(0.5)`,
                zIndex: 0,
                opacity: 0,
                pointerEvents: 'none',
              };
            }

            return (
              <div
                key={item.id}
                className={`industries-card-item group ${isActive ? 'industries-card-active' : ''}`}
                style={style}
                onClick={() => {
                  if (!isActive) {
                    setActiveIndex(index);
                  }
                }}
              >
                {/* Full-bleed Industry Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="industries-card-img"
                  loading={Math.abs(offset) <= 2 ? 'eager' : 'lazy'}
                />

                {/* Subtle bottom gradient to keep the industry title readable */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

                {/* Clean Industry Title */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-center z-10">
                  <h3 className="text-white font-bold text-base sm:text-lg md:text-xl drop-shadow-md tracking-tight leading-snug">
                    {item.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimalist 13-Dot Navigation Indicator */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center gap-1.5 py-1">
          {industries.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to sector ${i + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                i === activeIndex 
                  ? 'w-7 h-2 bg-[#FA5A16]' 
                  : 'w-2 h-2 bg-slate-300/80 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
