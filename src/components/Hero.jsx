import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TrustBar from './TrustBar';

const ROTATING_WORDS = ['Accounting', 'Incorporation', 'Compliance'];

export default function Hero({ onOpenModal, onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);

  // Rotating words timer for Slide 0
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setIsAnimating(false);
      }, 320);
    }, 2800);

    return () => clearInterval(wordInterval);
  }, []);

  // Auto-advance carousel timer (7.5s per slide, pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 7500);

    return () => clearInterval(timerRef.current);
  }, [isPaused, currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <section 
      className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden pt-18 sm:pt-20 md:pt-24 pb-4 sm:pb-6 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* ================= BACKGROUND 1: LIVE MOUNTAIN VIDEO ================= */}
      <div 
        className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 transition-opacity duration-1000 ease-in-out ${
          currentSlide === 0 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-mountain.jpg"
          className="w-full h-full object-cover object-[40%_center] sm:object-center md:object-[center_top] filter brightness-[1.0] contrast-[1.02]"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Subtle dark overlay layer */}
        <div className="absolute inset-0 bg-black/10 z-[1] pointer-events-none" />
        {/* Top & bottom blending gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 z-[1] pointer-events-none" />
      </div>

      {/* ================= BACKGROUND 2: CINEMATIC CUTTING CHAI IMAGE ================= */}
      <div 
        className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 transition-opacity duration-1000 ease-in-out ${
          currentSlide === 1 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src="/images/hero-chai-hd.jpg"
          alt="Steaming cutting chai - All good things in life don’t have to be expensive"
          className="w-full h-full object-cover object-[60%_center] sm:object-[center_35%] md:object-center filter brightness-[0.88] contrast-[1.06]"
        />
        
        {/* Cinematic rich dark gradient overlay for optimal text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/65 z-[1] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/55 z-[1] pointer-events-none" />
      </div>

      {/* ================= CAROUSEL PREV / NEXT CHEVRON BUTTONS ================= */}
      <button
        onClick={prevSlide}
        type="button"
        aria-label="Previous slide"
        className="hidden md:flex absolute left-4 lg:left-7 top-1/2 -translate-y-1/2 z-30 !min-h-0 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-black/30 hover:bg-[#FA5A16] border border-white/20 text-white/80 hover:text-white backdrop-blur-md items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl cursor-pointer group p-0"
      >
        <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        type="button"
        aria-label="Next slide"
        className="hidden md:flex absolute right-4 lg:right-7 top-1/2 -translate-y-1/2 z-30 !min-h-0 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-black/30 hover:bg-[#FA5A16] border border-white/20 text-white/80 hover:text-white backdrop-blur-md items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl cursor-pointer group p-0"
      >
        <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* ================= CENTRAL HERO CONTENT ================= */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto py-2 flex flex-col items-center justify-center">
        
        {/* Dynamic Slide Container with Smooth Crossfade */}
        <div className="relative w-full min-h-[290px] sm:min-h-[310px] md:min-h-[340px] flex items-center justify-center">
          
          {/* ---------------- SLIDE 0: SCALING NEW HEIGHTS (VIDEO SLIDE) ---------------- */}
          <div 
            className={`w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto text-center px-2 transition-all duration-700 ease-out ${
              currentSlide === 0 
                ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto relative' 
                : 'opacity-0 -translate-y-3 scale-[0.98] pointer-events-none absolute inset-x-0'
            }`}
          >
            {/* Rotating Dynamic Headline: Accounting / Incorporation / Compliance Simplified */}
            <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-5 flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] font-black tracking-tight select-none">
              <div className="w-[145px] sm:w-[195px] md:w-[250px] lg:w-[290px] text-right shrink-0">
                <span className="inline-block text-[#FA5A16] font-black whitespace-nowrap">
                  <span
                    key={wordIndex}
                    className={isAnimating ? 'animate-rotate-word-out' : 'animate-rotate-word-in'}
                  >
                    {ROTATING_WORDS[wordIndex]}
                  </span>
                </span>
              </div>
              <span className="text-white font-bold pl-2.5 sm:pl-3.5 text-left shrink-0 whitespace-nowrap">
                Simplified
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="alpha-display font-extrabold text-white text-shadow-hero break-words">
              Helping Businesses<br />
              Scale New Heights!
            </h1>

            {/* Call to Action Buttons */}
            <div className="mt-5 sm:mt-6 md:mt-7 lg:mt-8 flex flex-col xs:flex-row sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 w-full max-w-xs sm:max-w-none mx-auto">
              <a
                href="#services"
                className="alpha-btn inline-flex items-center justify-center w-full sm:w-auto bg-[#FA5A16] hover:bg-[#e04806] text-white px-7 sm:px-9 py-3 rounded-xl shadow-btn-orange transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-shadow-subtle text-center min-h-[48px]"
              >
                Explore Services
              </a>
              <button
                onClick={onOpenModal}
                type="button"
                className="alpha-btn inline-flex items-center justify-center w-full sm:w-auto bg-[#FA5A16]/20 hover:bg-[#FA5A16] border-2 border-[#FA5A16] text-white px-7 sm:px-9 py-3 rounded-xl shadow-lg shadow-orange-500/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-shadow-subtle text-center min-h-[48px] backdrop-blur-md cursor-pointer"
              >
                Request A Call
              </button>
            </div>
          </div>

          {/* ---------------- SLIDE 1: CHAI TAGLINE (AFFORDABLE EXCELLENCE) ---------------- */}
          <div 
            className={`w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto text-center px-2 transition-all duration-700 ease-out ${
              currentSlide === 1 
                ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto relative' 
                : 'opacity-0 translate-y-3 scale-[0.98] pointer-events-none absolute inset-x-0'
            }`}
          >
            {/* Top Eyebrow Badge */}
            <div className="mb-2 sm:mb-3 md:mb-4 inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FA5A16] font-bold text-xs sm:text-sm tracking-wide shadow-lg">
              <span>Smart Accounting • Sensible Pricing</span>
            </div>

            {/* Main Tagline: 2 Clean Sentence Lines */}
            <h1 className="text-2xl sm:text-3xl md:text-[42px] lg:text-[48px] xl:text-[54px] font-extrabold text-white text-shadow-hero tracking-tight leading-[1.18] max-w-5xl xl:max-w-6xl mx-auto">
              <span className="block whitespace-normal sm:whitespace-nowrap [text-wrap:balance] sm:[text-wrap:nowrap]">
                All good things in life don’t have to be expensive.
              </span>
              <span className="block text-[#FA5A16] mt-1.5 sm:mt-2.5 whitespace-normal sm:whitespace-nowrap [text-wrap:balance] sm:[text-wrap:nowrap]">
                Your accounting doesn’t need to be either
              </span>
            </h1>

            {/* Call to Action Buttons */}
            <div className="mt-5 sm:mt-6 md:mt-7 lg:mt-8 flex flex-col xs:flex-row sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 w-full max-w-xs sm:max-w-none mx-auto">
              <button
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('pricing');
                  } else {
                    window.location.hash = 'pricing';
                  }
                }}
                type="button"
                className="alpha-btn inline-flex items-center justify-center w-full sm:w-auto bg-[#FA5A16] hover:bg-[#e04806] text-white px-7 sm:px-9 py-3 rounded-xl shadow-btn-orange transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-shadow-subtle text-center min-h-[48px] cursor-pointer"
              >
                View Transparent Pricing
              </button>
              <button
                onClick={onOpenModal}
                type="button"
                className="alpha-btn inline-flex items-center justify-center w-full sm:w-auto bg-[#FA5A16]/20 hover:bg-[#FA5A16] border-2 border-[#FA5A16] text-white px-7 sm:px-9 py-3 rounded-xl shadow-lg shadow-orange-500/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-shadow-subtle text-center min-h-[48px] backdrop-blur-md cursor-pointer"
              >
                Request A Call
              </button>
            </div>
          </div>

        </div>

        {/* ================= CAROUSEL DOT / PILL INDICATORS ================= */}
        <div className="flex items-center justify-center gap-2.5 mt-5 sm:mt-6 z-20">
          <button
            onClick={() => goToSlide(0)}
            type="button"
            aria-label="Slide 1: Scale New Heights"
            style={{
              width: currentSlide === 0 ? '36px' : '10px',
              height: '8px',
              minHeight: '8px',
              maxHeight: '8px',
            }}
            className={`transition-all duration-500 rounded-full cursor-pointer p-0 border-0 !min-h-0 !h-2 ${
              currentSlide === 0 
                ? 'bg-[#FA5A16] shadow-md shadow-orange-500/40' 
                : 'bg-white/40 hover:bg-white/80'
            }`}
          />
          <button
            onClick={() => goToSlide(1)}
            type="button"
            aria-label="Slide 2: Smart & Affordable Accounting"
            style={{
              width: currentSlide === 1 ? '36px' : '10px',
              height: '8px',
              minHeight: '8px',
              maxHeight: '8px',
            }}
            className={`transition-all duration-500 rounded-full cursor-pointer p-0 border-0 !min-h-0 !h-2 ${
              currentSlide === 1 
                ? 'bg-[#FA5A16] shadow-md shadow-orange-500/40' 
                : 'bg-white/40 hover:bg-white/80'
            }`}
          />
        </div>

        {/* Bottom Trust & Metrics Bar positioned directly below */}
        <div className="mt-5 sm:mt-7 md:mt-8 lg:mt-9 w-full max-w-5xl mx-auto">
          <TrustBar />
        </div>

      </div>

    </section>
  );
}
