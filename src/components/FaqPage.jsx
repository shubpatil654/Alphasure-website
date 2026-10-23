import React from 'react';
import { HelpCircle, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import FaqSection from './FaqSection';

export default function FaqPage({ onOpenModal }) {
  return (
    <div className="w-full min-h-screen bg-[#FAF7F2] select-none text-[#0B192C]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 bg-[#0e1726] text-white overflow-hidden select-none">
        {/* Ambient Radial Lighting Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#FA5A16]/15 via-blue-500/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-bold text-amber-400 mb-4 sm:mb-6">
            <HelpCircle className="w-4 h-4 text-[#FA5A16]" />
            <span className="tracking-wider uppercase">ALPHASURE RESOURCES • COMMON QUESTIONS</span>
          </div>

          {/* Main Headline */}
          <h1 className="alpha-h1 font-bold text-white tracking-tight leading-tight max-w-4xl">
            Frequently Asked{' '}
            <span className="relative inline-block text-[#FA5A16]">
              Questions
              {/* Decorative Animated Curved Underline */}
              <svg 
                className="absolute left-0 -bottom-1.5 sm:-bottom-2.5 w-full h-2.5 sm:h-3.5 overflow-visible pointer-events-none" 
                viewBox="0 0 200 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M 4 16 Q 100 3, 196 16" 
                  stroke="#FA5A16" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  className="animate-draw-curved-underline" 
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="alpha-large-body text-slate-300 font-normal leading-relaxed max-w-2xl mt-4 sm:mt-6">
            Everything you need to know about our accounting processes, incorporation timelines, pricing structure, and ongoing compliance advisory.
          </p>

        </div>
      </section>

      {/* ================= COMPREHENSIVE FAQ ACCORDION ================= */}
      <FaqSection onOpenModal={onOpenModal} />

      {/* ================= BOTTOM CTA ================= */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#0B192C] via-[#1B2A4A] to-[#0B192C] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="space-y-2 text-center md:text-left z-10 max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
                Have a Specific Query?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Can't find the answer you're looking for?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Our support and CA advisory team is available to answer any questions about your unique business scenario.
              </p>
            </div>

            <div className="z-10 shrink-0">
              <button
                onClick={onOpenModal}
                className="alpha-btn inline-flex items-center justify-center min-h-[48px] px-8 py-3.5 rounded-xl bg-[#FA5A16] hover:bg-[#E04808] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-orange-500/25 transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                Ask an Expert
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
