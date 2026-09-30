import React from 'react';
import PricingTableSection from './PricingTableSection';
import PricingCalculatorSection from './PricingCalculatorSection';
import CompliancePricingCardsSection from './CompliancePricingCardsSection';
import OtherServicesPricingSection from './OtherServicesPricingSection';
import ReviewsSection from './ReviewsSection';

export default function PricingPage({ onOpenModal }) {
  return (
    <div className="w-full min-h-screen">
      {/* ================= HERO SECTION (Exact Reference Mockup Match) ================= */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] xl:min-h-screen flex items-center pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden select-none">
        
        {/* Background Video & Photo Fallback */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/pricing-hero.jpg"
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
          >
            <source src="/videos/pricing-hero.mp4" type="video/mp4" />
            <img
              src="/images/pricing-hero.jpg"
              alt="What You See Is What You Pay - Transparent Pricing"
              className="w-full h-full object-cover object-center"
            />
          </video>

          {/* Low Opacity Dark & Radial Overlays for Optimal Text Legibility */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
            
            {/* ================= LEFT COLUMN: Headline, Description & CTA ================= */}
            <div className="lg:col-span-11 xl:col-span-10 flex flex-col items-start text-left text-white space-y-6 sm:space-y-8">
              
              {/* Main Headline Title - Single Line */}
              <h1 className="alpha-h1 font-bold text-white tracking-tight drop-shadow-2xl">
                What You See Is <span className="whitespace-nowrap">What You Pay</span>
              </h1>

              {/* Subtitle Paragraph */}
              <p className="alpha-large-body text-slate-100 font-normal leading-relaxed max-w-2xl drop-shadow-md">
                Transparency is more than how we price our services — it's how we work. We believe you should always know what you're paying for, what's included, and what to expect from us. No hidden costs, no surprises, just complete clarity.
              </p>

              {/* Orange Action Button: "See Pricing" */}
              <div className="pt-2 sm:pt-4">
                <button
                  onClick={onOpenModal}
                  className="alpha-btn inline-flex items-center justify-center min-h-[48px] px-9 py-3.5 sm:px-10 rounded-2xl bg-gradient-to-r from-[#FF8A00] via-[#FF7A00] to-[#E66B00] hover:from-[#FF9500] hover:to-[#FF6B00] text-white tracking-wide shadow-xl hover:shadow-[#FF8A00]/40 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2.5"
                >
                  <span>See Pricing</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* ================= PAGE-WIDE ABSTRACT BACKGROUND LINES ================= */}
      <div className="relative w-full bg-[#FAF7F2] overflow-hidden">
        {/* Continuous Flowing Ambient SVG Line Art Layer */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-45">
          <svg className="w-full h-full" viewBox="0 0 1440 3200" fill="none" preserveAspectRatio="none">
            {/* Top to Middle Wave Flow 1 */}
            <path d="M-100 120 C 350 40, 750 320, 1150 160 C 1350 80, 1450 280, 1580 200" stroke="#DFD1BE" strokeWidth="1.8" />
            <path d="M-80 180 C 370 100, 770 380, 1170 220 C 1370 140, 1470 340, 1600 260" stroke="#EAE0D2" strokeWidth="1.2" strokeDasharray="6 6" />
            
            {/* Mid Section Flow 2 */}
            <path d="M-120 750 C 400 620, 850 850, 1220 680 C 1400 580, 1480 780, 1600 700" stroke="#DFD1BE" strokeWidth="1.6" />
            <path d="M-100 820 C 420 690, 870 920, 1240 750 C 1420 650, 1500 850, 1620 770" stroke="#EAE0D2" strokeWidth="1.2" strokeDasharray="8 6" />
            
            {/* Compliance & Others Flow 3 */}
            <path d="M-100 1450 C 380 1320, 700 1600, 1120 1440 C 1320 1350, 1440 1560, 1580 1480" stroke="#DFD1BE" strokeWidth="1.8" />
            <path d="M-80 1520 C 400 1390, 720 1670, 1140 1510 C 1340 1420, 1460 1630, 1600 1550" stroke="#EAE0D2" strokeWidth="1.2" strokeDasharray="6 6" />

            {/* Lower Sections Flow 4 */}
            <path d="M-100 2150 C 420 1980, 880 2280, 1260 2100 C 1420 2000, 1500 2240, 1600 2160" stroke="#DFD1BE" strokeWidth="1.6" />
            <path d="M-80 2220 C 440 2050, 900 2350, 1280 2170 C 1440 2070, 1520 2310, 1620 2230" stroke="#EAE0D2" strokeWidth="1.2" strokeDasharray="8 6" />

            {/* Bottom Flow 5 */}
            <path d="M-100 2850 C 360 2720, 780 3000, 1180 2820 C 1360 2740, 1480 2950, 1600 2880" stroke="#DFD1BE" strokeWidth="1.8" />
            
            {/* Concentric Decorative Geometry Circles */}
            <circle cx="80" cy="480" r="260" stroke="#E2D4C0" strokeWidth="1.2" strokeDasharray="6 6" fill="none" opacity="0.6" />
            <circle cx="80" cy="480" r="180" stroke="#DFD1BE" strokeWidth="1" fill="none" opacity="0.5" />
            <circle cx="1360" cy="1150" r="320" stroke="#E2D4C0" strokeWidth="1.2" strokeDasharray="8 6" fill="none" opacity="0.6" />
            <circle cx="1360" cy="1150" r="220" stroke="#DFD1BE" strokeWidth="1" fill="none" opacity="0.5" />
            <circle cx="120" cy="1850" r="280" stroke="#E2D4C0" strokeWidth="1.2" strokeDasharray="6 6" fill="none" opacity="0.6" />
            <circle cx="1300" cy="2550" r="300" stroke="#E2D4C0" strokeWidth="1.2" strokeDasharray="8 6" fill="none" opacity="0.6" />
          </svg>
        </div>

        {/* ================= PRICING COMPARISON TABLE SECTION ================= */}
        <PricingTableSection onOpenModal={onOpenModal} />

        {/* ================= PERIODIC ACCOUNTING & PRICING CALCULATOR SECTION ================= */}
        <PricingCalculatorSection onOpenModal={onOpenModal} />

        {/* ================= COMPLIANCE PRICING CARDS SECTION (Reference Image Match) ================= */}
        <CompliancePricingCardsSection onOpenModal={onOpenModal} />

        {/* ================= OTHERS PRICING SECTION (Reference Image Match) ================= */}
        <OtherServicesPricingSection onOpenModal={onOpenModal} />

        {/* ================= REVIEWS SECTION ================= */}
        <ReviewsSection />
      </div>
    </div>
  );
}

