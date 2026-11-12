import React from 'react';
import Solutions360Section from './Solutions360Section';
import TrustedPartnersSection from './TrustedPartnersSection';

export default function EverythingElsePage({ onOpenModal }) {
  return (
    <div className="w-full min-h-screen bg-[#FAF7F2]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-end pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden select-none bg-[#0e1726]">
        
        {/* Background Workshop Image with Receipts & Laptop */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/everything-else-hero-bg.jpg"
            alt="Your business shouldn't need a different service provider for every new requirement - Alphasure"
            className="w-full h-full object-cover object-center filter brightness-[1.08] contrast-[1.02]"
          />

          {/* Clean subtle directional gradient overlay to keep text crisp while keeping the visual bright and vibrant */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent pointer-events-none" />
        </div>

        {/* ================= BOTTOM HIGHLIGHT PHRASE ================= */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center pt-8 pb-2">
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-[23px] font-bold tracking-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] max-w-5xl mx-auto">
            You focus on <span className="text-[#FA5A16] font-extrabold uppercase">GROWING</span> the business. We help bring the right people around it.
          </p>
        </div>

      </section>

      {/* ================= 360° SOLUTIONS SECTION ================= */}
      <Solutions360Section onOpenModal={onOpenModal} />

      {/* ================= OUR TRUSTED PARTNERS SECTION ================= */}
      <TrustedPartnersSection />
    </div>
  );
}
