import React from 'react';
import ThreeIPhilosophySection from './ThreeIPhilosophySection';
import InterviewProcessSection from './InterviewProcessSection';

export default function CareersPage({ onOpenModal }) {
  return (
    <div className="w-full min-h-screen bg-[#FAF7F2]">
      {/* ================= HERO SECTION (Our people are our STRENGTH) ================= */}
      <section className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden select-none bg-[#0e1726]">
        
        {/* Background Image (Weaver Ants Bridge - Teamwork & Strength) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/careers-hero-ants.jpg"
            alt="Be part of something bigger than Yourself - Alphasure Careers"
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
          />

          {/* Smooth Dark Gradient Overlays for Optimal Text Contrast & Legibility */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
            
            {/* ================= LEFT COLUMN: Headline & Exact Copy ================= */}
            <div className="lg:col-span-10 xl:col-span-9 flex flex-col items-start text-left text-white space-y-6 sm:space-y-7">
              
              {/* Main Headline Title */}
              <h1 className="alpha-h1 font-bold text-white tracking-tight drop-shadow-2xl">
                Be part of something <span className="whitespace-nowrap">bigger than Yourself</span>
              </h1>

              {/* Exact Paragraph Content from Provided Image */}
              <div className="space-y-4 max-w-2xl text-slate-100 alpha-body drop-shadow-md">
                <p>
                  At Alphasure, we believe great businesses are built by great people. We invest in our team by creating an environment where people can learn, grow, take ownership and do their best work.
                </p>
                <p>
                  We encourage continuous learning, recognise contributions, celebrate achievements and believe in giving our people opportunities to take on new challenges. We also believe that a successful career should go hand in hand with a healthy and fulfilling life outside work.
                </p>
                <p>
                  As we grow, we want our people to grow with us.
                </p>
                <p>
                  Join a team where your ideas matter, your growth is valued, and the work you do makes a difference.
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
          <svg className="w-full h-full" viewBox="0 0 1440 2400" fill="none" preserveAspectRatio="none">
            <path d="M-100 150 C 350 70, 750 350, 1150 180 C 1350 90, 1450 300, 1580 220" stroke="#DFD1BE" strokeWidth="1.8" />
            <path d="M-80 210 C 370 130, 770 410, 1170 240 C 1370 150, 1470 360, 1600 280" stroke="#EAE0D2" strokeWidth="1.2" strokeDasharray="6 6" />
            <path d="M-120 850 C 400 700, 850 950, 1220 780 C 1400 680, 1480 880, 1600 800" stroke="#DFD1BE" strokeWidth="1.6" />
          </svg>
        </div>

        {/* ================= THE 3 I PHILOSOPHY SECTION ================= */}
        <ThreeIPhilosophySection />

        {/* ================= OUR INTERVIEW PROCESS SECTION ================= */}
        <InterviewProcessSection />

      </div>
    </div>
  );
}

