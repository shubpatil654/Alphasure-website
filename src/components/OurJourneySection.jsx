import React, { useState } from 'react';
import { Building, Globe, MapPin, Handshake, Laptop, ChevronRight } from 'lucide-react';

export default function OurJourneySection({ onOpenModal }) {
  const [activeMilestone, setActiveMilestone] = useState(4); // Default to latest (2026)

  const milestones = [
    {
      year: '2015',
      title: 'THE BEGINNING',
      description: 'Alphasure Accountants was founded, with a vision to bring clarity and reliability to businesses.',
      location: 'India HQ',
      icon: Building
    },
    {
      year: '2021',
      title: 'GOING GLOBAL',
      description: 'Expanded our presence to the USA, supporting a growing base of international clients.',
      location: 'USA',
      icon: Globe
    },
    {
      year: '2022',
      title: 'EXPANDING HORIZONS',
      description: 'Strengthened our operations in the Middle East (UAE) to serve a wider market.',
      location: 'Middle East (UAE)',
      icon: MapPin
    },
    {
      year: '2025',
      title: 'BUILDING A GLOBAL NETWORK',
      description: 'Further expanded into Singapore & Australia, partnering with more businesses worldwide.',
      location: 'Singapore & Australia',
      icon: Handshake
    },
    {
      year: '2026',
      badge: 'CURRENT',
      title: 'EXPERTISE + TECHNOLOGY',
      description: 'Launched Alphasure Solutions to deliver technology-enabled financial services with greater efficiency, reach and impact.',
      location: 'Global Solutions',
      icon: Laptop
    }
  ];

  return (
    <section 
      className="relative w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 select-none overflow-hidden"
      id="our-journey"
    >
      {/* Background Soft Elegant Accent Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
          <path d="M-100 200 C 350 120, 700 400, 1100 220 C 1300 130, 1400 350, 1550 280" stroke="#E2D8C8" strokeWidth="1.5" />
          <path d="M-100 700 C 400 550, 850 750, 1200 600 C 1380 500, 1450 700, 1550 620" stroke="#ECE2D3" strokeWidth="1.2" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-14 flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
            <span className="w-10 sm:w-14 h-[1.5px] bg-[#C5A059]/75" />
            <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#A67C52]">
              OUR JOURNEY
            </span>
            <span className="w-10 sm:w-14 h-[1.5px] bg-[#C5A059]/75" />
          </div>
          
          <h2 className="alpha-h2 font-bold text-[#0B192C] tracking-tight">
            Our Journey
          </h2>
          
          {/* Centered Gold Accent Line */}
          <div className="w-12 sm:w-16 h-[2.5px] bg-[#C5A059] mt-3 sm:mt-4 rounded-full" />
          
          <p className="alpha-body text-slate-600 font-medium text-center mt-3 max-w-xl mx-auto">
            One milestone at a time. One vision throughout.
          </p>
        </div>

        {/* ================= WIDESCREEN HORIZONTAL 3D ROADMAP (SEAMLESSLY BLENDED INTO SECTION) ================= */}
        <div className="relative w-full max-w-[1320px] mx-auto mb-10 sm:mb-14">
          
          {/* Seamless Feathered Blend Mask - No borders, no card box, pure integrated graphic */}
          <div className="relative w-full overflow-hidden [mask-image:radial-gradient(ellipse_96%_92%_at_50%_50%,black_75%,transparent_100%)]">
            
            {/* Top Seamless Edge Vignette */}
            <div className="absolute top-0 left-0 right-0 h-10 sm:h-16 bg-gradient-to-b from-[#FAF7F2] to-transparent pointer-events-none z-10" />
            
            {/* Bottom Seamless Edge Vignette */}
            <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-20 bg-gradient-to-t from-[#FAF7F2] to-transparent pointer-events-none z-10" />
            
            {/* Left Seamless Edge Vignette */}
            <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-[#FAF7F2] to-transparent pointer-events-none z-10" />
            
            {/* Right Seamless Edge Vignette */}
            <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-[#FAF7F2] to-transparent pointer-events-none z-10" />

            <img 
              src="/images/alphasure-journey-horizontal-blended.jpg" 
              srcSet="/images/alphasure-journey-horizontal-blended.jpg 1x, /images/alphasure-journey-horizontal-blended-2x.jpg 2x"
              alt="Alphasure Horizontal Journey Roadmap - From 2015 The Beginning to 2026 Expertise + Technology"
              className="w-full h-auto object-contain mix-blend-multiply select-none"
              loading="eager"
            />
          </div>
        </div>

        {/* ================= HORIZONTAL INTERACTIVE MILESTONES (1-TO-1 MIRROR) ================= */}
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {milestones.map((item, idx) => {
              const IconComp = item.icon;
              const isSelected = activeMilestone === idx;
              return (
                <div
                  key={item.year}
                  onClick={() => setActiveMilestone(idx)}
                  className={`p-5 sm:p-6 rounded-[22px] border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                    isSelected 
                      ? 'bg-white border-[#C5A059] shadow-[0_14px_38px_rgba(197,160,89,0.14)] -translate-y-1' 
                      : 'bg-white/70 hover:bg-white border-[#E8DCCB] hover:border-[#C5A059]/70 hover:shadow-md hover:-translate-y-0.5'
                  }`}
                >
                  {/* Card Header: Year, optional badge, and Circular Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-black text-2xl text-[#0B192C] tracking-tight">
                          {item.year}
                        </span>
                        {item.badge && (
                          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-[#B88746] text-white">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                        isSelected 
                          ? 'bg-[#1E3A8A] text-white shadow-xs' 
                          : 'bg-[#F4F6F9] text-[#1E3A8A] border border-[#E2E8F0]'
                      }`}>
                        <IconComp className="w-4.5 h-4.5" />
                      </div>
                    </div>

                    {/* Short Gold Underline */}
                    <div className="w-7 h-[2px] bg-[#C5A059] rounded-full mb-3" />

                    {/* Milestone Uppercase Title */}
                    <h4 className="font-bold text-[13px] text-[#0B192C] tracking-wide mb-2">
                      {item.title}
                    </h4>

                    {/* Exact Narrative Description */}
                    <p className="text-[12.5px] text-slate-600 font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Footer: Location Tag */}
                  <div className="mt-4 pt-3 border-t border-[#E8DCCB]/60 flex items-center justify-between text-[11px] font-bold text-[#A67C52]">
                    <span>{item.location}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-[#C5A059]' : 'text-slate-400'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
