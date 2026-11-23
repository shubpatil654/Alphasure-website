import React from 'react';
import GstTdsWhyMattersSection from './GstTdsWhyMattersSection';
import GstTdsProcessSection from './GstTdsProcessSection';
import GstTdsWhyChooseUsSection from './GstTdsWhyChooseUsSection';
import GstTdsServicesDiagramSection from './GstTdsServicesDiagramSection';
import ReviewsSection from './ReviewsSection';

export default function GstTdsCompliancePage({ onOpenModal }) {
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
            poster="/images/gst-tds-compliance-hero.jpg"
            className="w-full h-full object-cover object-center filter brightness-[1.10] contrast-[1.02]"
          >
            <source src="/videos/gst-tds-compliance-hero.mp4" type="video/mp4" />
            <img
              src="/images/gst-tds-compliance-hero.jpg"
              alt="GST and TDS compliance - File on Time. Stay Compliant. Avoid Penalties."
              className="w-full h-full object-cover object-center filter brightness-[1.10] contrast-[1.02]"
            />
          </video>

          {/* Soft directional gradient to keep text crisp while keeping the video bright and vivid */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/15 to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col items-start text-left text-white space-y-6 max-w-4xl lg:max-w-5xl xl:max-w-6xl w-full">
            
            {/* Top Outline Pill / Rectangle Badge (Exact Match) */}
            <div className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl border-2 border-white/70 bg-black/40 backdrop-blur-md shadow-2xl">
              <span className="text-base sm:text-xl md:text-2xl lg:text-[24px] font-bold text-white tracking-wide drop-shadow-md">
                GST and TDS compliance
              </span>
            </div>

            {/* Main Headline Title */}
            <div className="space-y-1 sm:space-y-2 w-full">
              <h1 className="space-y-1 sm:space-y-1.5 w-full">
                <span className="block text-2xl sm:text-3xl md:text-[36px] lg:text-[42px] xl:text-[46px] font-bold text-white tracking-tight drop-shadow-xl whitespace-normal sm:whitespace-nowrap leading-tight">
                  Deadlines Don't Wait. Neither Do We.
                </span>
                <span 
                  className="block text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] xl:text-[44px] font-bold text-white/95 tracking-tight drop-shadow-2xl whitespace-normal sm:whitespace-nowrap leading-tight"
                  style={{ textWrap: 'nowrap' }}
                >
                  File on Time. Stay Compliant. Avoid Penalties.
                </span>
              </h1>
            </div>

            {/* Subtitle Paragraph (Exact Copy from Screenshot) */}
            <p className="alpha-large-body text-slate-100 font-normal leading-relaxed max-w-2xl drop-shadow-md">
              Whether you're registering for GST, filing monthly or quarterly GST returns, or managing TDS compliance, our experts ensure your statutory obligations are completed accurately <span className="whitespace-nowrap">and on time.</span>
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

      </section>

      {/* ================= WHY TIMELY COMPLIANCE MATTERS SECTION ================= */}
      <GstTdsWhyMattersSection onOpenModal={onOpenModal} />

      {/* ================= OUR PROCESS SECTION (Spotlight Lamps & 3D Stages) ================= */}
      <GstTdsProcessSection onOpenModal={onOpenModal} />

      {/* ================= WHY CHOOSE US SECTION (Exact Mockup Match) ================= */}
      <GstTdsWhyChooseUsSection onOpenModal={onOpenModal} />

      {/* ================= GST & TDS SERVICES DIAGRAM SECTION (Reference Match) ================= */}
      <GstTdsServicesDiagramSection onOpenModal={onOpenModal} />

      {/* ================= CLIENT REVIEWS & TESTIMONIALS SECTION ================= */}
      <ReviewsSection />
    </div>
  );
}
