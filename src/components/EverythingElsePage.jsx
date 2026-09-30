import React from 'react';
import WhyPartnersSection from './WhyPartnersSection';
import TransparencySection from './TransparencySection';

export default function EverythingElsePage({ onOpenModal }) {
  return (
    <div className="w-full min-h-screen bg-[#FAF7F2]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden select-none bg-[#0e1726]">
        
        {/* Background Workshop Image with Receipts & Laptop */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/everything-else-hero-bg.jpg"
            alt="Your business shouldn't need a different service provider for every new requirement - Alphasure"
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
          />

          {/* Smooth Dark Gradient Overlays for Optimal Text Legibility */}
          <div className="absolute inset-0 bg-black/35 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 pointer-events-none" />
        </div>

        {/* ================= TOP/MIDDLE: Headline & Exact Copy ================= */}
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
            
            <div className="lg:col-span-10 xl:col-span-9 flex flex-col items-start text-left text-white space-y-5 sm:space-y-6">
              
              {/* Main Headline Title */}
              <h1 className="alpha-h2 font-bold text-white tracking-tight drop-shadow-2xl max-w-3xl leading-[1.18]">
                Your business shouldn't need<br className="hidden sm:inline" />{' '}
                a separate service provider<br className="hidden sm:inline" />{' '}
                for every new requirement.
              </h1>

              {/* Exact Sub-paragraph Copy */}
              <p className="alpha-body max-w-xl text-slate-100 font-normal leading-relaxed drop-shadow-md pt-1">
                Whether you are expanding internationally, preparing for an acquisition, facing a tax assessment or simply looking for a better way to manage your finances, Alphasure can help you find the right expertise.
              </p>

            </div>

          </div>
        </div>

        {/* ================= BOTTOM HIGHLIGHT PHRASE ================= */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center pt-8 pb-2">
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-[23px] font-bold tracking-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] max-w-5xl mx-auto">
            You focus on <span className="text-[#FA5A16] font-extrabold uppercase">GROWING</span> the business. We help bring the right people around it.
          </p>
        </div>

      </section>

      {/* ================= WHY WE WORK WITH PARTNERS SECTION ================= */}
      <WhyPartnersSection />

      {/* ================= TRANSPARENCY MATTERS TO US SECTION ================= */}
      <TransparencySection />
    </div>
  );
}
