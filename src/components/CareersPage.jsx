import React from 'react';
import { Sparkles, ArrowDown } from 'lucide-react';
import CareersCultureSection from './CareersCultureSection';
import ThreeIPhilosophySection from './ThreeIPhilosophySection';
import InterviewProcessSection from './InterviewProcessSection';
import JobOpeningsSection from './JobOpeningsSection';

export default function CareersPage({ onOpenModal }) {
  return (
    <div className="w-full min-h-screen bg-[#FAF7F2]">
      {/* ================= HERO SECTION (Be part of something bigger than Yourself) ================= */}
      <section className="relative w-full min-h-[75vh] sm:min-h-[85vh] lg:min-h-[90vh] flex flex-col items-center justify-start pt-32 sm:pt-40 lg:pt-44 pb-20 overflow-hidden select-none bg-[#0e1726]">
        
        {/* Background Video / Media with Boosted Brightness & Crisp Clarity */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/careers-hero-poster.jpg"
            className="w-full h-full object-cover object-center filter brightness-[1.08] contrast-[1.02]"
          >
            <source src="/videos/careers-hero-video.mp4" type="video/mp4" />
            {/* Fallback image */}
            <img
              src="/images/careers-hero-poster.jpg"
              alt="Be part of something bigger than Yourself - Alphasure Careers"
              className="w-full h-full object-cover object-center filter brightness-[1.08] contrast-[1.02]"
            />
          </video>

          {/* Balanced gradient overlay to keep top text crisp while keeping the mountain scenery vivid */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/75 pointer-events-none" />
        </div>

        {/* Centered & Top-Aligned Headline Container */}
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-bold text-amber-400 mb-5 sm:mb-6 shadow-md">
            <Sparkles className="w-4 h-4 text-[#FA5A16]" />
            <span className="tracking-wider uppercase">ALPHASURE CAREERS • WORK WITH US</span>
          </div>

          {/* Main Centered Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-2xl max-w-5xl mx-auto leading-[1.15]">
            Be part of something{' '}
            <span className="relative inline-block text-white">
              bigger than Yourself
              {/* Decorative Curved Underline */}
              <svg 
                className="absolute left-0 -bottom-2 sm:-bottom-3 w-full h-3 sm:h-4 overflow-visible pointer-events-none" 
                viewBox="0 0 200 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M 4 16 Q 100 3, 196 16" 
                  stroke="#FA5A16" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  className="animate-draw-curved-underline" 
                />
              </svg>
            </span>
          </h1>

          {/* Call-to-Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#culture"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all flex items-center gap-2"
            >
              <span>Discover Our Culture</span>
              <ArrowDown className="w-4 h-4 text-[#FA5A16]" />
            </a>
            <a
              href="#job-openings"
              className="px-6 py-3 rounded-xl bg-[#FA5A16] hover:bg-[#E04808] text-white text-xs sm:text-sm font-extrabold tracking-wider uppercase shadow-lg shadow-orange-500/25 transition-all transform hover:scale-105 active:scale-95"
            >
              <span>View Open Positions</span>
            </a>
          </div>

        </div>

      </section>

      {/* ================= SEPARATE CULTURE & SUB-CONTENT SECTION ================= */}
      <CareersCultureSection />

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

