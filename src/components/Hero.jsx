import React, { useState, useEffect } from 'react';
import TrustBar from './TrustBar';

const ROTATING_WORDS = ['Accounting', 'Incorporation', 'Compliance'];

export default function Hero({ onOpenModal }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setIsAnimating(false);
      }, 320);
    }, 2800);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-[25px]">
      
      {/* Live Video Background with Boosted Brightness & Crisp Contrast */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-mountain.jpg"
          className="w-full h-full object-cover object-[40%_center] sm:object-center md:object-[center_top] filter brightness-[1.12] contrast-[1.03]"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Soft subtle overlay to keep video vivid, bright and punchy while ensuring text legibility */}
        <div className="absolute inset-0 bg-black/10 z-[1] pointer-events-none"></div>
      </div>

      {/* Central Hero Content */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-3 sm:px-5 lg:px-6 text-center my-auto py-2">
        
        {/* Heading & Subtitle Wrapper for perfect width alignment */}
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto text-center px-2">
          {/* Main Headline */}
          <h1 className="alpha-display font-extrabold text-white text-shadow-hero break-words">
            Helping Businesses<br />
            Scale New Heights!
          </h1>

          {/* Rotating Dynamic Subtitle: Accounting / Incorporation / Compliance Simplified */}
          <div className="mt-4 sm:mt-6 flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black tracking-tight text-shadow-hero select-none">
            <div className="w-[145px] sm:w-[185px] md:w-[225px] lg:w-[255px] text-right shrink-0">
              <span className="inline-block text-[#FA5A16] drop-shadow-[0_2px_14px_rgba(250,90,22,0.5)] whitespace-nowrap">
                <span
                  key={wordIndex}
                  className={isAnimating ? 'animate-rotate-word-out' : 'animate-rotate-word-in'}
                >
                  {ROTATING_WORDS[wordIndex]}
                </span>
              </span>
            </div>
            <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] font-bold pl-2.5 sm:pl-3.5 text-left shrink-0 whitespace-nowrap">
              Simplified
            </span>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="mt-7 sm:mt-9 flex flex-col xs:flex-row sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full max-w-xs sm:max-w-none mx-auto">
          
          {/* Primary Button: Explore Services */}
          <a
            href="#services"
            className="alpha-btn inline-flex items-center justify-center w-full sm:w-auto bg-[#FA5A16] hover:bg-[#e04806] text-white px-7 sm:px-9 py-3 rounded-xl shadow-btn-orange transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-shadow-subtle text-center min-h-[48px]"
          >
            Explore Services
          </a>

          {/* Secondary Button: Request A Call */}
          <button
            onClick={onOpenModal}
            className="alpha-btn inline-flex items-center justify-center w-full sm:w-auto bg-[#FA5A16]/20 hover:bg-[#FA5A16] border-2 border-[#FA5A16] text-white px-7 sm:px-9 py-3 rounded-xl shadow-lg shadow-orange-500/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-shadow-subtle text-center min-h-[48px] backdrop-blur-md cursor-pointer"
          >
            Request A Call
          </button>
        </div>

        {/* Bottom Trust & Metrics Bar positioned directly below buttons */}
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <TrustBar />
        </div>

      </div>

    </section>
  );
}
