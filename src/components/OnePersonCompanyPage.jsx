import React from 'react';
import RegistrationServicesCarousel from './RegistrationServicesCarousel';
import BenefitsSection, { opcBenefits } from './BenefitsSection';
import StructureComparisonSection from './StructureComparisonSection';
import PackageBreakdownSection from './PackageBreakdownSection';
import ReviewsSection from './ReviewsSection';
import FaqSection, { opcFaqList } from './FaqSection';

export default function OnePersonCompanyPage({ onOpenModal }) {
  const stickyCards = [
    {
      id: 1,
      title: 'Legal Protection',
      stickyBg: 'bg-[#FFE2D1]', // Soft warm peach/orange
      textColor: 'text-[#2D1808]',
      description: 'Establishes a distinct legal personality, insulating personal assets from liabilities.',
      rotationClass: '-rotate-3 hover:rotate-0',
    },
    {
      id: 2,
      title: 'Credibility',
      stickyBg: 'bg-[#D1F7F7]', // Soft aqua/cyan
      textColor: 'text-[#062929]',
      description: 'Enhances trust with stakeholders, banking firms, and future clients.',
      rotationClass: 'rotate-3 hover:rotate-0',
    },
    {
      id: 3,
      title: 'Scalability',
      stickyBg: 'bg-[#FFE0E7]', // Soft pink/rose
      textColor: 'text-[#330B14]',
      description: 'Opens avenues for venture funding, government grants, and expansion.',
      rotationClass: '-rotate-2 hover:rotate-0',
    },
  ];

  return (
    <div className="w-full min-h-screen">
      {/* ================= HERO SECTION (Exact Reference Match) ================= */}
      <section className="relative w-full min-h-[85vh] lg:min-h-screen flex items-center pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden select-none">
        
        {/* Background Video (Solo Skydiver Flying Over Sunset Clouds) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/opc-skydiver-hero.jpg"
            className="w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.04]"
          >
            <source src="/videos/opc-skydiver-hero.mp4" type="video/mp4" />
            {/* Fallback image */}
            <img
              src="/images/opc-skydiver-hero.jpg"
              alt="Solo Skydiver - Want to Fly Solo? We've Got You Covered"
              className="w-full h-full object-cover object-center"
            />
          </video>

          {/* Black Low Opacity Layer to ensure optimal text contrast & readability */}
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full">
            
            {/* ================= LEFT COLUMN: Headline & CTA ================= */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left text-white space-y-6">
              
              {/* Top Outline Pill / Rectangle Badge (Exact Typography as Pvt Ltd) */}
              <div className="inline-flex items-center px-6 sm:px-8 md:px-9 py-3 sm:py-3.5 md:py-4 rounded-2xl border-2 border-white/70 bg-black/40 backdrop-blur-md shadow-2xl">
                <span className="text-base sm:text-xl md:text-2xl lg:text-[25px] font-bold text-white tracking-wide drop-shadow-md">
                  One Person Company- One Person, one Vision
                </span>
              </div>

              {/* Main Headline Title */}
              <div className="space-y-1 sm:space-y-2">
                <h2 className="alpha-h2 font-bold text-white tracking-tight drop-shadow-xl whitespace-normal sm:whitespace-nowrap">
                  Want to Fly Solo?
                </h2>
                <h1 className="alpha-h1 font-bold text-white tracking-tight drop-shadow-2xl whitespace-normal sm:whitespace-nowrap">
                  We’ve Got You Covered
                </h1>
              </div>

              {/* Subtitle Paragraph */}
              <p className="alpha-large-body text-slate-100 font-normal leading-relaxed max-w-xl drop-shadow-md">
                From setting up your business to staying compliant, we’re with you <span className="whitespace-nowrap">every step of the way</span>
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

            {/* ================= RIGHT COLUMN: 3 Floating Sticky Post-it Feature Cards ================= */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-center lg:items-end justify-center space-y-5 sm:space-y-6 w-full pt-6 lg:pt-0">
              {stickyCards.map((card) => (
                <div
                  key={card.id}
                  className={`w-full max-w-[310px] sm:max-w-[340px] bg-white p-4 sm:p-5 rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.25)] border border-slate-100 transition-all duration-300 cursor-pointer ${card.rotationClass} hover:shadow-[0_25px_50px_rgba(0,0,0,0.35)] hover:scale-105 select-none`}
                >
                  {/* Card White Header */}
                  <h4 className="text-[#1E293B] font-black text-lg sm:text-xl text-center mb-3 tracking-tight">
                    {card.title}
                  </h4>

                  {/* Inner Colored Sticky Note */}
                  <div className={`${card.stickyBg} p-4 sm:p-4.5 rounded-xl text-center transition-colors duration-200 shadow-inner`}>
                    <p className={`${card.textColor} font-semibold text-xs sm:text-sm leading-relaxed`}>
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </section>

      {/* ================= REGISTRATION SERVICES CAROUSEL SECTION ================= */}
      <RegistrationServicesCarousel onOpenModal={onOpenModal} />

      {/* ================= BENEFITS OF ONE PERSON COMPANY SECTION ================= */}
      <BenefitsSection 
        onOpenModal={onOpenModal} 
        titlePrefix="Benefits of"
        titleHighlight={["One Person", "Company."]}
        highlightColor="text-[#10B981]"
        benefits={opcBenefits}
        sectionId="benefits-opc"
      />

      {/* ================= BUSINESS STRUCTURES COMPARISON SECTION ================= */}
      <StructureComparisonSection highlightedStructure="opc" />

      {/* ================= COMPLETE PACKAGE BREAKDOWN SECTION ================= */}
      <PackageBreakdownSection onOpenModal={onOpenModal} structureType="opc" />

      {/* ================= REVIEWS SECTION (From Home Page) ================= */}
      <ReviewsSection />

      {/* ================= FAQ SECTION (OPC Specific FAQs) ================= */}
      <FaqSection 
        onOpenModal={onOpenModal} 
        faqs={opcFaqList} 
        subtitle="Everything you need to know about registering a One Person Company (OPC)."
      />
    </div>
  );
}
