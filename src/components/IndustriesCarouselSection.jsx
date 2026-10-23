import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  HeartPulse, 
  Briefcase, 
  GraduationCap, 
  Landmark, 
  Utensils, 
  Server, 
  Factory, 
  Clapperboard, 
  HandHeart, 
  Building2, 
  ShoppingBag, 
  Code2, 
  Truck, 
  ArrowUpRight,
  Play,
  Pause
} from 'lucide-react';
import './IndustriesCarouselSection.css';

const industries = [
  {
    id: 'healthcare-life-sciences',
    name: 'Healthcare & Life Sciences',
    tag: 'Clinical & Biotech',
    description: 'Specialized R&D tax credits, clinical trial accounting, regulatory compliance, and equipment depreciation.',
    image: '/images/industries/healthcare-life-sciences.jpg',
    icon: HeartPulse,
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  },
  {
    id: 'consulting',
    name: 'Consulting',
    tag: 'Strategic Advisory',
    description: 'Project-based profitability, utilization tracking, partner draws, and cross-border tax structuring.',
    image: '/images/industries/consulting.jpg',
    icon: Briefcase,
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
  },
  {
    id: 'education',
    name: 'Education',
    tag: 'EdTech & Academics',
    description: 'Grant management, institutional compliance, recurring fee reconciliation, and non-profit education filings.',
    image: '/images/industries/education.jpg',
    icon: GraduationCap,
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
  },
  {
    id: 'financial-services',
    name: 'Financial Services',
    tag: 'Fintech & Wealth',
    description: 'Statutory compliance, multi-currency accounting, investment portfolio tracking, and regulatory audits.',
    image: '/images/industries/financial-services.jpg',
    icon: Landmark,
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
  },
  {
    id: 'food-beverages',
    name: 'Food & Beverages',
    tag: 'Hospitality & FMCG',
    description: 'Inventory cost of goods, multi-outlet GST consolidation, point-of-sale reconciliations, and supplier payables.',
    image: '/images/industries/food-beverages.jpg',
    icon: Utensils,
    badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
  },
  {
    id: 'it-services',
    name: 'IT Services',
    tag: 'Cloud & Infrastructure',
    description: 'Export billing, transfer pricing documentation, SEZ/STPI compliances, and enterprise SLA management.',
    image: '/images/industries/it-services.jpg',
    icon: Server,
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    tag: 'Industrial & Robotics',
    description: 'Job costing, raw material valuation, factory floor depreciation, and automated supply chain tax optimization.',
    image: '/images/industries/manufacturing.jpg',
    icon: Factory,
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
  },
  {
    id: 'media-publishing',
    name: 'Media & Publishing',
    tag: 'Creative & Digital Content',
    description: 'Royalty calculations, intellectual property management, production crew TDS, and digital ad revenue reconciliations.',
    image: '/images/industries/media-publishing.jpg',
    icon: Clapperboard,
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
  },
  {
    id: 'non-profit',
    name: 'Non-Profit',
    tag: 'NGOs & Foundations',
    description: 'FCRA regulatory filings, Section 8 compliance, 12A / 80G tax exemptions, and donor grant audits.',
    image: '/images/industries/non-profit.jpg',
    icon: HandHeart,
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    tag: 'Legal, Architecture & Design',
    description: 'Retainer accounting, escrow trust accounts, partner profit allocations, and multi-state compliance.',
    image: '/images/industries/professional-services.jpg',
    icon: Building2,
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
  },
  {
    id: 'retail',
    name: 'Retail',
    tag: 'Omnichannel & D2C',
    description: 'E-commerce marketplace settlements, warehouse inventory valuation, and multi-state GST filing.',
    image: '/images/industries/retail.jpg',
    icon: ShoppingBag,
    badgeColor: 'bg-pink-500/20 text-pink-300 border-pink-500/40',
  },
  {
    id: 'software-technology',
    name: 'Software & Technology Companies',
    tag: 'SaaS & Tech Startups',
    description: 'Deferred revenue recognition (ASC 606), ESOP valuations, cap table accounting, and cross-border IP structuring.',
    image: '/images/industries/software-technology.jpg',
    icon: Code2,
    badgeColor: 'bg-violet-500/20 text-violet-300 border-violet-500/40',
  },
  {
    id: 'wholesale-distribution',
    name: 'Wholesale Distribution',
    tag: 'Logistics & Supply Chain',
    description: 'Bulk inventory management, trade credit monitoring, multi-warehouse logistics accounting, and E-Way bill compliance.',
    image: '/images/industries/wholesale-distribution.jpg',
    icon: Truck,
    badgeColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
  },
];

export default function IndustriesCarouselSection({ onOpenModal }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const timerRef = useRef(null);

  const total = industries.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-rotate every 3 seconds as requested
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
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
      className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-18 lg:pb-20 bg-gradient-to-b from-white via-[#FAF7F2]/60 to-[#FAF7F2] overflow-hidden select-none"
      id="industries"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Soft Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-r from-orange-400/5 via-blue-400/5 to-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16 flex flex-col items-center">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#FA5A16] text-xs font-bold tracking-wider uppercase shadow-xs mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#FA5A16] animate-pulse" />
            Specialized Sector Expertise
          </div>

          {/* Main Title */}
          <h2 className="alpha-h2 font-bold text-[#0B192C] tracking-tight">
            Industries We Provide Services{' '}
            <span className="relative inline-block text-[#FA5A16]">
              Too
              {/* Decorative Curved Underline */}
              <svg 
                className="absolute left-0 -bottom-1.5 sm:-bottom-2 w-full h-2.5 sm:h-3 overflow-visible pointer-events-none" 
                viewBox="0 0 100 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M 2 10 Q 50 2, 98 10" 
                  stroke="#FA5A16" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                />
              </svg>
            </span>
          </h2>

          <p className="alpha-body text-slate-600 font-medium text-center mt-3.5 max-w-2xl mx-auto">
            Deep domain knowledge in accounting, regulatory compliance, and tax management across 13 diverse high-growth sectors.
          </p>
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
            const IconComp = item.icon;

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

                {/* Top Subtle Vignette */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

                {/* Bottom Rich Text Vignette */}
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />

                {/* Card Top Header: Sector Badge & Icon */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full backdrop-blur-md border text-xs font-semibold ${item.badgeColor}`}>
                    <IconComp className="w-3.5 h-3.5" />
                    <span>{item.tag}</span>
                  </div>

                  {/* Industry Index Number */}
                  <span className="text-white/80 text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md">
                    {String(index + 1).padStart(2, '0')} / {total}
                  </span>
                </div>

                {/* Card Bottom Content: Title & Details */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end z-10 text-left">
                  <h3 className="text-white font-bold text-xl sm:text-2xl leading-tight drop-shadow-md">
                    {item.name}
                  </h3>

                  {/* Description visible on active card */}
                  <p className={`text-slate-200 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    {item.description}
                  </p>

                  {/* Active Card Action Bar */}
                  {isActive && (
                    <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between">
                      <span className="text-[#FA5A16] text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                        Explore Specialized Solutions
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>

                      {/* 3s Auto-rotation countdown bar indicator */}
                      <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
                        <div 
                          key={activeIndex} 
                          className={`h-full bg-[#FA5A16] industries-timer-bar ${isPaused ? 'industries-timer-paused' : ''}`} 
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Border highlight for active card */}
                {isActive && (
                  <div className="absolute inset-0 rounded-[28px] sm:rounded-[32px] border-2 border-white/40 pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>

        {/* ================= CAROUSEL CONTROLS & INDICATOR DOTS ================= */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto px-4">
          
          {/* Pause / Auto-rotation status */}
          <button
            onClick={() => setIsPaused((prev) => !prev)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
            title={isPaused ? "Resume 3-second auto-rotation" : "Pause auto-rotation"}
          >
            {isPaused ? (
              <>
                <Play className="w-3 h-3 text-[#FA5A16] fill-[#FA5A16]" />
                <span>Auto-rotate Paused</span>
              </>
            ) : (
              <>
                <Pause className="w-3 h-3 text-slate-500" />
                <span>Rotating every 3s</span>
              </>
            )}
          </button>

          {/* 13 Sector Pagination Pill Dots */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-2 px-1">
            {industries.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === activeIndex 
                    ? 'w-7 h-2.5 bg-[#FA5A16]' 
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Left / Right Navigation Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous industry"
              className="w-10 h-10 rounded-full bg-white hover:bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:text-[#FA5A16] transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next industry"
              className="w-10 h-10 rounded-full bg-white hover:bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:text-[#FA5A16] transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
