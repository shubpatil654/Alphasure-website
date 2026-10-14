import React from 'react';
import { Lightbulb } from 'lucide-react';

export default function ThreeIPhilosophySection() {
  return (
    <section 
      className="relative w-full bg-[#FAF7F2] py-14 sm:py-20 lg:py-24 select-none overflow-hidden" 
      id="philosophy"
    >
      {/* Background Ambient Glows & Celestial Orbital Vectors */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Sky/Cyan Glow behind the diagram */}
        <div className="absolute top-8 right-1/4 w-[550px] h-[450px] bg-sky-400/[0.09] rounded-full blur-[130px]" />
        
        {/* Soft Warm Amber Glow at bottom left */}
        <div className="absolute bottom-12 left-10 w-[450px] h-[340px] bg-amber-400/[0.07] rounded-full blur-[110px]" />

        {/* Ambient Orbital SVG Lines matching design */}
        <svg className="w-full h-full absolute inset-0" viewBox="0 0 1440 850" fill="none" preserveAspectRatio="none">
          {/* Left Orbital Line & Dot */}
          <path d="M-80 500 C 120 400, 260 270, 380 110" stroke="#DFD1BE" strokeWidth="1.2" opacity="0.65" />
          <path d="M-140 560 C 100 460, 250 320, 390 130" stroke="#EAE0D2" strokeWidth="1" strokeDasharray="5 5" opacity="0.45" />
          <circle cx="342" cy="188" r="4.5" fill="#D49B55" opacity="0.9" />

          {/* Right Celestial Orbital Circle & Dot */}
          <circle cx="1260" cy="380" r="320" stroke="#BFDBFE" strokeWidth="1.2" opacity="0.6" />
          <circle cx="1260" cy="380" r="220" stroke="#DBEAFE" strokeWidth="1" strokeDasharray="6 6" opacity="0.5" />
          <circle cx="945" cy="355" r="4.5" fill="#3B82F6" opacity="0.85" />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= TOP ROW: PHILOSOPHY INTRO (LEFT) & 3-CIRCLE VENN DIAGRAM (RIGHT) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-12 items-center mb-12 sm:mb-16">
          
          {/* LEFT COLUMN: Headings & Mindset Text */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left lg:pt-2">
            
            {/* Eyebrow: —— OUR PHILOSOPHY —— */}
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <span className="w-9 sm:w-12 h-[1.5px] bg-[#C5A059]" />
              <span className="text-xs sm:text-[13px] font-bold text-[#A67C52] tracking-[0.16em] uppercase">
                OUR PHILOSOPHY
              </span>
              <span className="w-9 sm:w-12 h-[1.5px] bg-[#C5A059]" />
            </div>

            {/* Main Title */}
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] tracking-tight leading-[1.04] mb-6">
              <span className="text-[#0E1B38] block">The 3 I</span>
              <span className="text-[#C58B38] block mt-0.5">Philosophy</span>
            </h2>

            {/* Intro Copy */}
            <div className="space-y-4 max-w-[320px] sm:max-w-[340px] text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                At Alphasure, we believe great work starts with the right mindset.
              </p>
              <div className="pt-1">
                <p className="text-slate-600">
                  Before you apply, ask yourself:
                </p>
                <p className="font-bold text-[#0E1B38] text-base sm:text-lg mt-0.5">
                  Do you have the 3 I's?
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: 3-Circle Interlocking Venn Diagram Showcase */}
          <div className="lg:col-span-7 xl:col-span-7 flex justify-center items-center">
            <div className="relative w-full max-w-[460px] sm:max-w-[520px] xl:max-w-[580px] transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/images/philosophy/three-i-venn.png"
                srcSet="/images/philosophy/three-i-venn.png 1x, /images/philosophy/three-i-venn-2x.png 2x"
                alt="The 3 I Philosophy: 01 Integrity, 02 Intelligence, 03 Initiative - Alphasure"
                className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,102,255,0.12)] select-none"
                loading="eager"
              />
            </div>
          </div>

        </div>

        {/* ================= BOTTOM HIGHLIGHT BANNER: One Important Rule ================= */}
        <div className="w-full bg-white rounded-2xl sm:rounded-3xl lg:rounded-full border border-[#EBD6B8] shadow-[0_16px_40px_-10px_rgba(197,160,89,0.22),0_4px_16px_rgba(0,0,0,0.03)] px-5 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6">
          
          {/* Left Block: Golden Lightbulb Emblem & Heading */}
          <div className="flex items-center gap-3.5 sm:gap-5 shrink-0">
            {/* Glowing Golden Lightbulb Disc */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#D4A359] via-[#C58B38] to-[#996515] p-[1.5px] shadow-md shadow-amber-600/30 flex items-center justify-center shrink-0">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#DDA15E] via-[#C58B38] to-[#8C5E1A] flex items-center justify-center">
                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.2]" />
              </div>
            </div>

            <div className="w-[1.5px] h-8 bg-[#E5DAC9]" />

            <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#0E1B38] tracking-tight whitespace-nowrap">
              One Important Rule
            </h3>
          </div>

          {/* Vertical Divider (Desktop) */}
          <div className="hidden lg:block w-[1.5px] h-9 bg-[#E5DAC9] shrink-0" />

          {/* Right Block: Core Rule Principle */}
          <div className="flex flex-col text-left justify-center flex-1 lg:pl-3">
            <p className="font-bold text-[#0E1B38] text-sm sm:text-[15px] leading-snug">
              If you don't have the first I, the other two don't count.
            </p>
            <p className="text-slate-500 text-xs sm:text-[13px] font-normal leading-relaxed mt-0.5 sm:mt-1">
              Because intelligence without integrity can be dangerous, and initiative without integrity can be worse.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
