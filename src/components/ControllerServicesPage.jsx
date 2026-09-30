import React from 'react';
import ControllerProvidesSection from './ControllerProvidesSection';
import ControllerGettingStartedSection from './ControllerGettingStartedSection';
import ReviewsSection from './ReviewsSection';
import FaqSection, { controllerServicesFaqList } from './FaqSection';

export default function ControllerServicesPage({ onOpenModal }) {
  return (
    <div className="w-full min-h-screen">
      {/* ================= HERO SECTION (Exact Reference Mockup Match) ================= */}
      <section className="relative w-full min-h-[85vh] lg:min-h-screen flex items-center pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden select-none">
        
        {/* Background Video & Photo Fallback */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/controller-services-hero.jpg"
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
          >
            <source src="/videos/controller-services-hero.mp4" type="video/mp4" />
            <img
              src="/images/controller-services-hero.jpg"
              alt="Controller Services - Already have an accounting team? We can help you get more from it."
              className="w-full h-full object-cover object-center"
            />
          </video>

          {/* Low Opacity Dark Overlay for optimal text contrast and legibility */}
          <div className="absolute inset-0 bg-black/35 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full">
            
            {/* ================= LEFT COLUMN: Headline & CTA ================= */}
            <div className="lg:col-span-9 xl:col-span-8 flex flex-col items-start text-left text-white space-y-6">
              
              {/* Top Outline Pill / Rectangle Badge (Exact Match) */}
              <div className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl border-2 border-white/70 bg-black/40 backdrop-blur-md shadow-2xl">
                <span className="text-base sm:text-xl md:text-2xl lg:text-[24px] font-bold text-white tracking-wide drop-shadow-md">
                  Controller Services
                </span>
              </div>

              {/* Main Headline Title (Exact 2-Line Reference Match) */}
              <div className="space-y-1 sm:space-y-2">
                <h1 className="alpha-h1 font-bold text-white tracking-tight drop-shadow-2xl">
                  Already have an accounting team? <br className="hidden sm:inline" />
                  We can help you get <span className="whitespace-nowrap">more from it.</span>
                </h1>
              </div>

              {/* Subtitle Paragraph (Exact Copy from Screenshot) */}
              <p className="alpha-large-body text-slate-100 font-normal leading-relaxed max-w-2xl drop-shadow-md">
                Our Controller Services provide expert oversight to strengthen processes, improve reporting, and ensure your finance function <span className="whitespace-nowrap">operates efficiently.</span>
              </p>

              {/* Orange Action Button: "See Pricing" */}
              <div className="pt-2">
                <button
                  onClick={onOpenModal}
                  className="alpha-btn inline-flex items-center justify-center min-h-[48px] px-8 py-3.5 sm:px-9 rounded-xl bg-gradient-to-r from-[#FF8A00] via-[#FF7A00] to-[#E66B00] hover:from-[#FF9500] hover:to-[#FF6B00] text-white tracking-wide shadow-xl hover:shadow-[#FF8A00]/40 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
                >
                  <span>See Pricing</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* ================= WHAT A CONTROLLER PROVIDES SECTION ================= */}
      <ControllerProvidesSection onOpenModal={onOpenModal} />

      {/* ================= GETTING STARTED IS EASY (3-Step Pipeline) ================= */}
      <ControllerGettingStartedSection onOpenModal={onOpenModal} />

      {/* ================= REVIEWS SECTION ================= */}
      <ReviewsSection />

      {/* ================= FAQ SECTION ================= */}
      <FaqSection 
        onOpenModal={onOpenModal} 
        faqs={controllerServicesFaqList}
        subtitle="Everything you need to know about partnering with Alphasure for Controller Services."
      />
    </div>
  );
}
