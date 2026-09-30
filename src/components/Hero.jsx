import React from 'react';
import TrustBar from './TrustBar';

export default function Hero({ onOpenModal }) {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden">
      
      {/* Live Video Background from Envato with 20% Opacity Black Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-mountain.jpg"
          className="w-full h-full object-cover object-[40%_center] sm:object-center md:object-[center_top]"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        
        {/* 20% Black Opacity Overlay for maximum text pop & legibility */}
        <div className="absolute inset-0 bg-black/20 z-[1] pointer-events-none"></div>
      </div>

      {/* Spacer for Top Navbar */}
      <div className="h-16 sm:h-20 md:h-24"></div>

      {/* Central Hero Content */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-3 sm:px-5 lg:px-6 text-center my-auto py-4 sm:py-6 md:py-8">
        
        {/* Heading & Subtitle Wrapper for perfect width alignment */}
        <div className="max-w-4xl xl:max-w-5xl mx-auto text-center px-2">
          {/* Main Headline */}
          <h1 className="alpha-h1 font-bold text-white tracking-tight text-shadow-hero break-words">
            Helping Businesses<br />
            Scale New Heights!
          </h1>

          {/* Subtitle Text aligned to heading width */}
          <p className="mt-4 sm:mt-6 alpha-large-body text-white font-medium tracking-tight text-shadow-hero">
            Simplifying the complexities of running a business, from incorporation and accounting to <span className="whitespace-nowrap">compliance and beyond</span>
          </p>
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
            className="alpha-btn inline-flex items-center justify-center w-full sm:w-auto glass-btn text-white px-7 sm:px-9 py-3 rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-shadow-subtle text-center min-h-[48px]"
          >
            Request A Call
          </button>
        </div>

      </div>

      {/* Bottom Trust & Metrics Bar */}
      <div className="relative z-10 pb-4 sm:pb-6 pt-2">
        <TrustBar />
      </div>

    </section>
  );
}
