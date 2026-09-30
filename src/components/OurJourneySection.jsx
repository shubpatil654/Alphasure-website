import React, { useState } from 'react';
import { Building, Globe, MapPin, Sparkles, Cpu, Award, ChevronRight } from 'lucide-react';

export default function OurJourneySection({ onOpenModal }) {
  const [activeMilestone, setActiveMilestone] = useState(4); // Default to latest (2026)

  const milestones = [
    {
      year: '2015',
      title: 'The Beginning',
      description: 'Alphasure Accountants is founded.',
      location: 'India HQ',
      icon: Building,
      details: 'Started with a clear vision to provide live accounting services to empower business owners with financial clarity.'
    },
    {
      year: '2021',
      title: 'Going Global',
      description: 'USA expansion.',
      location: 'USA',
      icon: Globe,
      details: 'Expanded our cross-border tax and accounting operations to support growing businesses in North America.'
    },
    {
      year: '2022',
      title: 'Expanding Horizons',
      description: 'Middle East expansion.',
      location: 'Middle East (UAE)',
      icon: MapPin,
      details: 'Extended our comprehensive financial compliance and corporate advisory presence into dynamic Gulf markets.'
    },
    {
      year: '2025',
      title: 'Building a Global Network',
      description: 'Singapore & Australia expansion.',
      location: 'Singapore & Australia',
      icon: Globe,
      details: 'Broadened our Asia-Pacific presence with dedicated compliance hubs in Singapore and Australia.'
    },
    {
      year: '2026',
      title: 'Expertise + Technology',
      description: 'Alphasure Solutions is launched to deliver technology-enabled services.',
      location: 'Global Solutions',
      icon: Cpu,
      details: 'Launched next-generation automated finance workflows and high-touch controller intelligence.'
    }
  ];

  return (
    <section 
      className="relative w-full bg-[#FAF7F2] py-14 sm:py-20 md:py-24 select-none overflow-hidden"
      id="our-journey"
    >
      {/* Background Soft Accent Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
          <path d="M-100 200 C 350 120, 700 400, 1100 220 C 1300 130, 1400 350, 1550 280" stroke="#E2D8C8" strokeWidth="1.5" />
          <path d="M-100 700 C 400 550, 850 750, 1200 600 C 1380 500, 1450 700, 1550 620" stroke="#ECE2D3" strokeWidth="1.2" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= DESKTOP & TABLET INFOGRAPHIC SHOWCASE (SEAMLESSLY FEATHERED EDGES) ================= */}
        <div className="relative w-full max-w-[1280px] mx-auto">
          
          {/* Journey Graphic Artwork with 4-Way Feathered Fading Overlays */}
          <div className="relative w-full overflow-hidden [mask-image:radial-gradient(ellipse_94%_88%_at_50%_50%,black_70%,transparent_100%)]">
            
            {/* Top Fade */}
            <div className="absolute top-0 left-0 right-0 h-10 sm:h-16 bg-gradient-to-b from-[#FAF7F2] to-transparent pointer-events-none z-10" />
            
            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-14 sm:h-24 bg-gradient-to-t from-[#FAF7F2] to-transparent pointer-events-none z-10" />
            
            {/* Left Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#FAF7F2] to-transparent pointer-events-none z-10" />
            
            {/* Right Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#FAF7F2] to-transparent pointer-events-none z-10" />

            <img 
              src="/images/our-journey-timeline.jpg" 
              alt="Alphasure Journey - One milestone at a time. One vision throughout."
              className="w-full h-auto object-cover object-center mix-blend-multiply"
            />
          </div>

          {/* Interactive Milestone Cards Strip Below Image */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {milestones.map((item, idx) => {
              const IconComp = item.icon;
              const isSelected = activeMilestone === idx;
              return (
                <div
                  key={item.year}
                  onClick={() => setActiveMilestone(idx)}
                  className={`p-5 rounded-[22px] border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected 
                      ? 'bg-white border-[#C5A059] shadow-[0_12px_35px_rgba(197,160,89,0.12)] -translate-y-1' 
                      : 'bg-white/60 hover:bg-white border-[#E8DCCB] hover:border-[#C5A059]/70 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif font-black text-2xl text-[#8C6239] tracking-tight">
                      {item.year}
                    </span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-[#8C6239] text-white shadow-xs' : 'bg-[#FAF5EE] text-[#8C6239] border border-[#E8DCCB]'
                    }`}>
                      <IconComp className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-serif font-black text-[16px] text-[#0B192C] leading-snug mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E8DCCB]/80 flex items-center justify-between text-xs font-bold text-[#A67C52]">
                    <span>{item.location}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
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
