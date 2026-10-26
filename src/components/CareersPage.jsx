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

      {/* ================= CULTURE & TEAM COLLAGE SECTION (Left: Collage, Right: Content) ================= */}
      <section className="relative w-full bg-[#FAF7F2] py-16 sm:py-20 lg:py-24 select-none overflow-hidden text-[#0B192C]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Column: Team Photo Collage */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[540px] lg:max-w-none rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#E8DFC8]/80 bg-white transition-transform duration-300 hover:scale-[1.01]">
                <img
                  src="/images/careers-culture-team-collage.jpg"
                  srcSet="/images/careers-culture-team-collage.jpg 1x, /images/careers-culture-team-collage-2x.jpg 2x"
                  alt="Alphasure Team Culture Collage"
                  className="w-full h-auto object-cover select-none"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right Column: Exact Content */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <div className="w-12 h-1 bg-[#FA5A16] rounded-full mb-6 sm:mb-8" />

              <div className="space-y-6 sm:space-y-7 max-w-xl">
                <p className="text-xl sm:text-2xl lg:text-[27px] font-semibold text-[#0B192C] leading-snug tracking-tight">
                  We encourage <span className="text-[#FA5A16]">continuous learning</span>, recognise <span className="text-[#FA5A16]">contributions</span>, celebrate <span className="text-[#FA5A16]">achievements</span> and believe in giving our people opportunities to take on <span className="text-[#FA5A16]">new challenges</span>.
                </p>

                <p className="text-xl sm:text-2xl lg:text-[27px] font-semibold text-[#0B192C] leading-snug tracking-tight">
                  We also believe that a successful career should go hand in hand with a healthy and fulfilling life outside work.
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

        {/* ================= CURRENT JOB OPENINGS SECTION ================= */}
        <JobOpeningsSection onOpenModal={onOpenModal} />

        {/* ================= OUR INTERVIEW PROCESS SECTION ================= */}
        <InterviewProcessSection />

      </div>
    </div>
  );
}

