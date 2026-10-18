import React from 'react';
import { Lightbulb, ShieldCheck, Brain, Mountain } from 'lucide-react';

export default function ThreeIPhilosophySection() {
  const pillars = [
    {
      id: 'integrity',
      number: '01',
      title: 'Integrity',
      desc: 'You do the right thing, even when no one is watching.',
      badgeBg: 'from-[#FF7A3D] via-[#FA5A16] to-[#C73C00]',
      icon: ShieldCheck,
    },
    {
      id: 'intelligence',
      number: '02',
      title: 'Intelligence',
      desc: 'You are curious, willing to learn and able to think beyond the obvious.',
      badgeBg: 'from-[#475569] via-[#334155] to-[#1E293B]',
      icon: Brain,
    },
    {
      id: 'initiative',
      number: '03',
      title: 'Initiative',
      desc: "You don't wait to be told what to do.",
      badgeBg: 'from-[#3B82F6] via-[#1D4ED8] to-[#0A3D91]',
      icon: Mountain,
    },
  ];

  return (
    <section 
      className="three-i-section relative z-10 w-full bg-white py-14 sm:py-20 lg:py-24 select-none overflow-hidden" 
      id="philosophy"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= 2-COLUMN ROW: LEFT TEXT & RIGHT TRIANGLE DIAGRAM ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center mb-12 sm:mb-16">
          
          {/* LEFT COLUMN: Eyebrow, Main Headings & Mindset Copy */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left lg:pt-2">
            
            {/* Eyebrow: —— OUR PHILOSOPHY —— */}
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <span className="w-9 sm:w-12 h-[1.5px] bg-[#9E6732]" />
              <span className="text-xs sm:text-[13px] font-bold text-[#9E6732] tracking-[0.16em] uppercase">
                OUR PHILOSOPHY
              </span>
              <span className="w-9 sm:w-12 h-[1.5px] bg-[#9E6732]" />
            </div>

            {/* Main Title: The 3 I Philosophy */}
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] tracking-tight leading-[1.04] mb-6">
              <span className="text-[#0E1B38] block">The 3 I</span>
              <span className="text-[#9E6732] block mt-1">Philosophy</span>
            </h2>

            {/* Intro Copy */}
            <div className="space-y-4 max-w-[360px] sm:max-w-[380px] text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                At Alphasure, we believe great work starts with the right mindset.
              </p>
              <div className="pt-1">
                <p className="text-slate-500">
                  Before you apply, ask yourself:
                </p>
                <p className="font-bold text-[#0E1B38] text-base sm:text-lg mt-0.5">
                  Do you have the 3 I's?
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: 3D Triangular Pyramid Diagram */}
          <div className="lg:col-span-7 xl:col-span-7 flex justify-center items-center">
            <div className="relative w-full max-w-[580px] sm:max-w-[640px] lg:max-w-[720px] xl:max-w-[780px] transition-transform duration-500 hover:scale-[1.015]">
              <img
                src="/images/philosophy/three-i-figure.png?v=exact"
                srcSet="/images/philosophy/three-i-figure.png?v=exact 1x, /images/philosophy/three-i-figure-2x.png?v=exact 2x"
                alt="The 3 I Philosophy: 01 Integrity, 02 Intelligence, 03 Initiative - Alphasure"
                className="w-full h-auto object-contain select-none filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
                loading="eager"
              />
            </div>
          </div>

        </div>

        {/* Mobile-Only Feature Cards (< sm) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 mb-10 sm:hidden">
          {pillars.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div 
                key={pillar.id}
                className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#EBD6B8] shadow-sm flex flex-col items-start text-left"
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className="text-lg font-bold font-playfair text-[#182238]">
                    {pillar.number}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${pillar.badgeBg} flex items-center justify-center shadow-sm`}>
                    <IconComp className="w-3.5 h-3.5 text-white" strokeWidth={2.2} />
                  </div>
                </div>

                <h4 className="font-playfair text-base font-bold text-[#182238] mb-0.5">
                  {pillar.title}
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM HIGHLIGHT BANNER: One Important Rule ================= */}
        <div className="w-full bg-[#FAF7F2] rounded-2xl sm:rounded-3xl lg:rounded-full border border-[#EBD6B8] shadow-[0_12px_36px_-8px_rgba(180,120,50,0.12),0_4px_16px_rgba(0,0,0,0.03)] px-5 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 transition-all duration-300 hover:shadow-[0_16px_40px_-6px_rgba(180,120,50,0.18)]">
          
          {/* Left Block: Glowing Amber/Bronze Lightbulb Emblem & Heading */}
          <div className="flex items-center gap-3.5 sm:gap-5 shrink-0">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#C7782A] via-[#B2641C] to-[#8C480F] p-[1.5px] shadow-md shadow-amber-600/25 flex items-center justify-center shrink-0">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#D9822C] via-[#B86B1E] to-[#995111] flex items-center justify-center">
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


