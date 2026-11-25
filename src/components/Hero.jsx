import React, { useState, useEffect } from 'react';
import TrustBar from './TrustBar';

const ROTATING_WORDS = ['Accounting', 'Incorporation', 'Compliance'];
const SLIDE_DURATION = 7000; // 7 seconds automated cycle

export default function Hero({ onOpenModal, onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideKey, setSlideKey] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

  // 7-second automated carousel cycle
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
      setSlideKey((prev) => prev + 1);
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [currentSlide, slideKey]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setSlideKey((prev) => prev + 1);
  };

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden pt-18 sm:pt-20 md:pt-24 pb-4 sm:pb-6 select-none">
      
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

      {/* ================= BACKGROUND 2: CINEMATIC STEAMING CHAI VIDEO ================= */}
      <div 
        className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 transition-opacity duration-1000 ease-in-out ${
          currentSlide === 1 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-chai-video-poster.jpg"
          className="w-full h-full object-cover object-center filter brightness-[1.08] contrast-[1.02]"
        >
          <source src="/videos/hero-carousel-slide2.mp4" type="video/mp4" />
        </video>
        
        {/* Soft, luminous overlay layers for enhanced brightness and text clarity */}
        <div className="absolute inset-0 bg-black/10 z-[1] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 z-[1] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-[1] pointer-events-none" />
      </div>

      {/* ================= CENTRAL HERO CONTENT ================= */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto py-2 flex flex-col items-center justify-center">
        
        {/* Dynamic Slide Container with Smooth Crossfade */}
        <div className="relative w-full min-h-[320px] sm:min-h-[350px] md:min-h-[380px] flex items-center justify-center">
          
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

            {/* Main Tagline: 2 Clean Sentence Lines */}
            <h1 className="tracking-tight max-w-5xl xl:max-w-6xl mx-auto flex flex-col items-center justify-center">
              {/* Line 1: Single Line, Big & Bold */}
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] font-black text-white text-shadow-hero leading-[1.18] whitespace-normal sm:whitespace-nowrap [text-wrap:balance] sm:[text-wrap:nowrap]">
                All good things in life don’t have to be expensive.
              </span>

              {/* Line 2: Orange Accent Second Line with Spacing */}
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-[38px] xl:text-[44px] font-extrabold text-[#FA5A16] text-shadow-hero leading-[1.2] mt-2.5 sm:mt-3.5 md:mt-4 whitespace-normal sm:whitespace-nowrap [text-wrap:balance] sm:[text-wrap:nowrap]">
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

        {/* ================= CAROUSEL 2 BULLETS WITH 7-SECOND TIME LOAD ================= */}
        <div 
          className="flex items-center justify-center gap-3.5 sm:gap-4 mt-5 sm:mt-6 z-20"
          role="tablist"
          aria-label="Carousel slide controls"
        >
          {[0, 1].map((index) => {
            const isActive = currentSlide === index;
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${index + 1}: ${index === 0 ? 'Scale New Heights' : 'Affordable Accounting'}`}
                style={{ minHeight: 'unset', maxHeight: '20px', height: 'auto' }}
                className="group inline-flex items-center justify-center !min-h-0 border-0 bg-transparent p-1 -m-1 cursor-pointer focus:outline-none"
              >
                <div 
                  style={{ minHeight: '6px', maxHeight: '8px' }}
                  className="w-14 sm:w-16 h-1.5 sm:h-2 rounded-full bg-white/25 backdrop-blur-md overflow-hidden border border-white/15 group-hover:border-white/40 group-hover:bg-white/35 transition-all duration-300"
                >
                  <div
                    key={`bullet-fill-${index}-${slideKey}`}
                    className={`h-full rounded-full ${
                      isActive 
                        ? 'bg-[#FA5A16] shadow-[0_0_10px_rgba(250,90,22,0.8)]' 
                        : 'w-0'
                    }`}
                    style={
                      isActive
                        ? {
                            animation: 'heroProgressAnim 7000ms linear forwards',
                          }
                        : { width: '0%' }
                    }
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Trust & Metrics Bar positioned directly below */}
        <div className="mt-5 sm:mt-7 md:mt-8 lg:mt-9 w-full max-w-5xl mx-auto">
          <TrustBar />
        </div>

      </div>

    </section>
  );
}
