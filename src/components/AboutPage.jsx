import React from 'react';
import OurJourneySection from './OurJourneySection';
import OurValues from './OurValues';
import DataSecuritySection from './DataSecuritySection';
import CoFoundersPillarsSection from './CoFoundersPillarsSection';
import AboutGalleryCarousel from './AboutGalleryCarousel';

export default function AboutPage({ onOpenModal }) {
  return (
    <div className="w-full min-h-screen bg-[#FAF7F2]">
      {/* ================= HERO SECTION (With Video Background) ================= */}
      <section className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col justify-between items-center pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 overflow-hidden select-none bg-[#0e1726]">
        
        {/* Background Video Covering Entire Hero Section */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/alphasure-logo-reveal-poster.png?v=2"
            className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.02]"
          >
            <source src="/videos/alphasure-logo-reveal.mp4?v=2" type="video/mp4" />
            {/* Fallback image */}
            <img
              src="/images/alphasure-logo-reveal-poster.png?v=2"
              alt="We are accountants, who understand business - Alphasure Team"
              className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.02]"
            />
          </video>

          {/* Low opacity dark layer across entire background video */}
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />

          {/* Top and bottom dark gradient overlays for high contrast on headline and paragraphs */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/85 pointer-events-none" />
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between items-center">
          
          {/* ================= TOP: Headline in a Single Line, Center-Aligned ================= */}
          <div className="w-full text-center pt-2 sm:pt-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] whitespace-normal sm:whitespace-nowrap [text-wrap:balance] sm:[text-wrap:nowrap]">
              We are accountants, who understand Business.
            </h1>
          </div>

          {/* Middle Spacer to keep video center completely visible */}
          <div className="min-h-[140px] sm:min-h-[180px] md:min-h-[220px] w-full" />

          {/* ================= BOTTOM: Paragraphs, Center-Aligned ================= */}
          <div className="w-full max-w-3xl lg:max-w-4xl text-center pb-2 sm:pb-4">
            <div className="space-y-3 sm:space-y-4 text-slate-100 text-xs sm:text-sm md:text-base font-normal leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] [text-wrap:balance]">
              <p>
                We know that entrepreneurs have enough to worry about—winning customers, delivering for them, managing people, improving processes and growing the business. Accounting and compliance shouldn't become another burden. That's where Alphasure comes in.
              </p>
              <p>
                Whether you're starting out, growing rapidly, or building a more structured finance function, we provide the support you need so that you can focus on what matters most—growing your business.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* ================= PAGE-WIDE ABSTRACT BACKGROUND LAYER ================= */}
      <div className="relative w-full bg-[#FAF7F2] overflow-hidden">
        
        {/* Continuous Flowing Ambient SVG Line Art Layer */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-35">
          <svg className="w-full h-full" viewBox="0 0 1440 3600" fill="none" preserveAspectRatio="none">
            <path d="M-100 150 C 350 70, 750 350, 1150 180 C 1350 90, 1450 300, 1580 220" stroke="#DFD1BE" strokeWidth="1.8" />
            <path d="M-80 210 C 370 130, 770 410, 1170 240 C 1370 150, 1470 360, 1600 280" stroke="#EAE0D2" strokeWidth="1.2" strokeDasharray="6 6" />
            <path d="M-120 850 C 400 700, 850 950, 1220 780 C 1400 680, 1480 880, 1600 800" stroke="#DFD1BE" strokeWidth="1.6" />
            <path d="M-100 1650 C 380 1520, 700 1800, 1120 1640 C 1320 1550, 1440 1760, 1580 1680" stroke="#DFD1BE" strokeWidth="1.8" />
            <path d="M-120 2450 C 400 2300, 850 2550, 1220 2380 C 1400 2280, 1480 2480, 1600 2400" stroke="#DFD1BE" strokeWidth="1.6" />
          </svg>
        </div>

        {/* ================= OUR JOURNEY SECTION ================= */}
        <OurJourneySection onOpenModal={onOpenModal} />

        {/* ================= OUR VALUES SECTION (2x2 Jigsaw Puzzle Structure) ================= */}
        <OurValues />

        {/* ================= DATA SECURITY SECTION (ISO 27001 Certified) ================= */}
        <DataSecuritySection />

        {/* ================= MANAGEMENT TEAM PILLARS SECTION ================= */}
        <CoFoundersPillarsSection />

        {/* ================= ABOUT US PHOTO GALLERY CAROUSEL ================= */}
        <AboutGalleryCarousel />

      </div>
    </div>
  );
}




