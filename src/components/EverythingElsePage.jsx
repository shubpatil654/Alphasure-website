import React from 'react';
import Solutions360Section from './Solutions360Section';
import TrustedPartnersSection from './TrustedPartnersSection';

export default function EverythingElsePage({ onOpenModal }) {
  return (
    <div className="w-full min-h-screen bg-[#FAF7F2]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[55vh] sm:min-h-[65vh] lg:min-h-[72vh] flex flex-col justify-center items-center pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden select-none bg-[#0e1726]">
        
        {/* Background Workshop Image with Receipts & Laptop */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/everything-else-hero-bg.jpg"
            alt="Alphasure - Helping Businesses Scale New Heights"
            className="w-full h-full object-cover object-center filter brightness-[1.08] contrast-[1.02]"
          />

          {/* Clean subtle directional gradient overlay to keep text crisp while keeping the visual bright and vibrant */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/30 pointer-events-none" />
        </div>

        {/* ================= HERO HIGHLIGHT STATEMENT ================= */}
        <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-snug drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] max-w-4xl mx-auto">
            You focus on <span className="text-[#FA5A16] font-extrabold uppercase">GROWING</span> the business.<br className="hidden sm:inline" />{' '}
            <span className="text-slate-100 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[34px] block mt-2 sm:mt-3">
              We help bring the right people around it.
            </span>
          </h1>
        </div>

      </section>

      {/* ================= 360° SOLUTIONS SECTION ================= */}
      <Solutions360Section onOpenModal={onOpenModal} />

      {/* ================= OUR TRUSTED PARTNERS SECTION ================= */}
      <TrustedPartnersSection />
    </div>
  );
}
