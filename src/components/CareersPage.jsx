import React from 'react';
import ThreeIPhilosophySection from './ThreeIPhilosophySection';
import InterviewProcessSection from './InterviewProcessSection';
import JobOpeningsSection from './JobOpeningsSection';

export default function CareersPage({ onOpenModal }) {
  return (
    <div className="w-full min-h-screen bg-[#FAF7F2]">
      {/* ================= HERO SECTION (Be part of something bigger than Yourself) ================= */}
      <section className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col items-center justify-start pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden select-none bg-[#0e1726]">
        
        {/* Background Video / Media with Exact Same Aspect Ratio and Height */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/careers-hero-poster.jpg"
            className="w-full h-full object-cover object-center filter brightness-[1.10] contrast-[1.02]"
          >
            <source src="/videos/careers-hero-video.mp4" type="video/mp4" />
            {/* Fallback image */}
            <img
              src="/images/careers-hero-poster.jpg"
              alt="Be part of something bigger than Yourself - Alphasure Careers"
              className="w-full h-full object-cover object-center filter brightness-[1.10] contrast-[1.02]"
            />
          </video>

          {/* Clean ambient overlay to keep text crisp while keeping the entire video bright and vivid */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/50 pointer-events-none" />
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center">
          {/* Main Headline Title: Centered & Top-Aligned Only */}
          <h1 className="alpha-h1 font-bold text-white tracking-tight drop-shadow-2xl max-w-4xl">
            Be part of something <span className="whitespace-nowrap">bigger than Yourself</span>
          </h1>

          {/* Subheading */}
          <p className="mt-4 sm:mt-6 alpha-large-body text-white font-medium tracking-tight text-shadow-hero max-w-3xl mx-auto">
            At Alphasure, we believe great businesses are built by great people
          </p>
        </div>

      </section>

      {/* ================= CULTURE & TEAM SECTION (Full Width Edge-to-Edge with Real Text) ================= */}
      <section className="relative w-full bg-white select-none overflow-hidden">
        {/* Top Photos Row: Spans full width edge-to-edge */}
        <div className="w-full flex items-start justify-between">
          <div className="shrink-0" style={{ width: '23.8%' }}>
            <img
              src="/images/culture/culture-photo-1.jpg"
              srcSet="/images/culture/culture-photo-1.jpg 1x, /images/culture/culture-photo-1-2x.jpg 2x"
              alt="Alphasure Rafting Adventure"
              className="w-full h-auto object-cover block"
              loading="eager"
            />
          </div>
          <div className="shrink-0" style={{ width: '18.2%' }}>
            <img
              src="/images/culture/culture-photo-2.jpg"
              srcSet="/images/culture/culture-photo-2.jpg 1x, /images/culture/culture-photo-2-2x.jpg 2x"
              alt="Alphasure Team Outdoors"
              className="w-full h-auto object-cover block"
              loading="eager"
            />
          </div>
          <div className="shrink-0" style={{ width: '22.7%' }}>
            <img
              src="/images/culture/culture-photo-3.jpg"
              srcSet="/images/culture/culture-photo-3.jpg 1x, /images/culture/culture-photo-3-2x.jpg 2x"
              alt="Alphasure at Sula Vineyards"
              className="w-full h-auto object-cover block"
              loading="eager"
            />
          </div>
          <div className="shrink-0" style={{ width: '28.8%' }}>
            <img
              src="/images/culture/culture-photo-4.jpg"
              srcSet="/images/culture/culture-photo-4.jpg 1x, /images/culture/culture-photo-4-2x.jpg 2x"
              alt="Alphasure Team Gathering"
              className="w-full h-auto object-cover block"
              loading="eager"
            />
          </div>
        </div>

        {/* Center Text Form Content */}
        <div className="w-full py-8 sm:py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 text-center max-w-[1200px] mx-auto flex flex-col items-center justify-center">
          <p className="text-base sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-semibold text-[#0B192C] leading-snug sm:leading-snug md:leading-snug tracking-tight max-w-4xl">
            We encourage <span className="text-[#FA5A16]">continuous learning</span>, recognise <span className="text-[#FA5A16]">contributions</span>, celebrate <span className="text-[#FA5A16]">achievements</span> and believe in giving our people opportunities to take on new <span className="text-[#FA5A16]">challenges</span>.
          </p>
          <p className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-semibold text-[#0B192C] leading-snug sm:leading-snug md:leading-snug tracking-tight max-w-3xl">
            We also believe that a successful career should go hand in hand with a healthy and fulfilling life outside work.
          </p>
        </div>

        {/* Bottom Photos Row: Spans full width edge-to-edge */}
        <div className="w-full flex items-end justify-between">
          <div className="shrink-0" style={{ width: '17.6%' }}>
            <img
              src="/images/culture/culture-photo-5.jpg"
              srcSet="/images/culture/culture-photo-5.jpg 1x, /images/culture/culture-photo-5-2x.jpg 2x"
              alt="Alphasure Team by the Lake"
              className="w-full h-auto object-cover block"
              loading="lazy"
            />
          </div>
          <div className="shrink-0" style={{ width: '20.9%' }}>
            <img
              src="/images/culture/culture-photo-6.jpg"
              srcSet="/images/culture/culture-photo-6.jpg 1x, /images/culture/culture-photo-6-2x.jpg 2x"
              alt="Alphasure Team Retreat"
              className="w-full h-auto object-cover block"
              loading="lazy"
            />
          </div>
          <div className="shrink-0" style={{ width: '26.1%' }}>
            <img
              src="/images/culture/culture-photo-7.jpg"
              srcSet="/images/culture/culture-photo-7.jpg 1x, /images/culture/culture-photo-7-2x.jpg 2x"
              alt="Alphasure Team Walkway"
              className="w-full h-auto object-cover block"
              loading="lazy"
            />
          </div>
          <div className="shrink-0" style={{ width: '27.7%' }}>
            <img
              src="/images/culture/culture-photo-8.jpg"
              srcSet="/images/culture/culture-photo-8.jpg 1x, /images/culture/culture-photo-8-2x.jpg 2x"
              alt="Alphasure Celebration"
              className="w-full h-auto object-cover block"
              loading="lazy"
            />
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

        {/* ================= CURRENT JOB OPENINGS SECTION ================= */}
        <JobOpeningsSection onOpenModal={onOpenModal} />

        {/* ================= OUR INTERVIEW PROCESS SECTION ================= */}
        <InterviewProcessSection />

      </div>
    </div>
  );
}

