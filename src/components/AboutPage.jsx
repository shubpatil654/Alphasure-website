import React from 'react';
import OurJourneySection from './OurJourneySection';
import OurValues from './OurValues';
import DataSecuritySection from './DataSecuritySection';
import ManagementTeamSection from './ManagementTeamSection';

export default function AboutPage({ onOpenModal }) {
  return (
    <div className="w-full min-h-screen bg-[#FAF7F2]">
      {/* ================= HERO SECTION (With Pinterest Team Image) ================= */}
      <section className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden select-none bg-[#0e1726]">
        
        {/* Background Team Image Covering Entire Hero Section */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/about-hero-pinterest.jpg"
            alt="We are accountants, who understand business - Alphasure Team"
            className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
          />

          {/* Smooth Dark Gradient Overlays for Optimal Text Contrast & Legibility */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
            
            {/* ================= LEFT COLUMN: Headline & Exact Copy ================= */}
            <div className="lg:col-span-8 xl:col-span-7 flex flex-col items-start text-left text-white space-y-6 sm:space-y-8">
              
              {/* Main Headline Title */}
              <h1 className="alpha-h1 font-bold text-white tracking-tight drop-shadow-2xl">
                We are accountants,<br />
                who understand business
              </h1>

              {/* Exact Paragraph Content from Provided Image */}
              <div className="space-y-4 max-w-2xl text-slate-100 alpha-body drop-shadow-md">
                <p>
                  We began in 2015 with a mission to provide live accounting services so that businesses owners could make better decisions. Over the years, we've grown beyond accounting to support businesses with incorporation, compliance, payroll, controller services, financial advisory, and more.
                </p>
                <p>
                  We know that entrepreneurs have enough to worry about—winning customers, delivering for them, managing people, improving processes and growing the business. Accounting and compliance shouldn't become another burden. That's where Alphasure comes in.
                </p>
                <p>
                  Whether you're starting out, growing rapidly, or building a more structured finance function, we provide the support you need so that you can focus on what matters most—growing your business.
                </p>
              </div>

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

        {/* ================= MANAGEMENT TEAM SECTION ================= */}
        <ManagementTeamSection />

      </div>
    </div>
  );
}




