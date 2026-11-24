import React, { useState } from 'react';

const CO_FOUNDERS = [
  {
    id: 'onkar-marathe',
    name: 'Onkar Marathe',
    role: 'Co-Founder',
    image: '/images/onkar-marathe-leader.jpg',
    badge: 'Finance & Strategy',
    paragraphs: [
      "Onkar brings extensive experience in accounting, financial reporting and building finance teams for businesses in India and international markets.",
      "A Chartered Accountant from the Institute of Chartered Accountants of India (ICAI), he has also successfully completed the Uniform CPA Examination in the United States.",
      "A strong believer in teamwork, Onkar enjoys working closely with people and building teams that take ownership of their work. Outside work, he loves travelling and is an enthusiastic badminton and football player."
    ]
  },
  {
    id: 'abhijit-atre',
    name: 'Abhijit Atre',
    role: 'Co-Founder',
    image: '/images/abhijit-atre-leader.jpg?v=3',
    badge: 'Technology & Transformation',
    paragraphs: [
      "Abhijit brings extensive experience in technology, business leadership and process transformation, with a strong focus on using technology to help businesses work smarter and scale.",
      "He has been closely involved with Pune's technology ecosystem for over two decades and has held leadership roles with SAP.",
      "A natural people person, Abhijit enjoys building relationships, mentoring others and bringing people together. Outside work, he is an enthusiastic badminton player—bringing the same energy, competitiveness and team spirit to everything he does."
    ]
  },
  {
    id: 'satish-prabhu',
    name: 'Satish Prabhu',
    role: 'Co-Founder',
    image: '/images/satish-prabhu-leader.jpg',
    badge: 'US & Global Advisory',
    paragraphs: [
      "Satish Prabhu, a US citizen, is a CPA (US) and a Chartered Accountant (India) and has an experience of more than 35 years in accounting, auditing, and financial advisory.",
      "After having practiced in Mumbai, India for 20 years, he moved to the US in 2005 and worked as senior manager for 3 years with one of the 7 big audit firms in the US.",
      "After gaining enough experience in US accounting, he set up his practice in the year 2008. Since then, he has been providing accounting and advisory services to numerous multinational companies."
    ]
  }
];

export default function CoFoundersPillarsSection() {
  const [activeCardId, setActiveCardId] = useState(null);

  const handleCardClick = (id) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section 
      id="co-founders-pillars"
      className="relative w-full bg-[#07090e] text-white py-[25px] select-none overflow-hidden border-b border-zinc-800/60"
    >
      {/* Background Subtle Warm Orange Ambient Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#FA5A16]/[0.035] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col items-center justify-center text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FA5A16]/10 border border-[#FA5A16]/20 text-[#FA5A16] font-semibold text-xs uppercase tracking-wider mb-3">
            The Visionaries Behind Alphasure
          </div>

          <h2 className="alpha-h2 font-bold text-white tracking-tight flex items-center gap-2.5 sm:gap-3.5">
            <span>Management</span>
            <span className="relative inline-block text-[#FA5A16]">
              Team
              <svg 
                className="absolute left-0 -bottom-1.5 sm:-bottom-2.5 w-full h-3 sm:h-4 overflow-visible pointer-events-none" 
                viewBox="0 0 100 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M 2 12 Q 50 2, 98 12" 
                  stroke="#FA5A16" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  className="animate-draw-curved-underline"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* ================= 3 PILLAR SIZE CONTAINERS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {CO_FOUNDERS.map((founder) => {
            const isCardActive = activeCardId === founder.id;

            return (
              <div
                key={founder.id}
                onClick={() => handleCardClick(founder.id)}
                className="group relative h-[520px] sm:h-[560px] lg:h-[600px] rounded-3xl overflow-hidden bg-zinc-950 border-2 border-white/10 hover:border-[#FA5A16] transition-all duration-500 shadow-2xl hover:shadow-[0_20px_50px_rgba(250,90,22,0.2)] cursor-pointer"
              >
                {/* ---------------- BACKGROUND PHOTO ---------------- */}
                <img
                  src={founder.image}
                  alt={`${founder.name} - ${founder.role}`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.96] contrast-[1.02]"
                />

                {/* ---------------- DEFAULT STATE: BOTTOM GRADIENT & NAME/ROLE ---------------- */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-7 z-10 transition-all duration-300 ${
                    isCardActive ? 'opacity-0 pointer-events-none' : 'opacity-100 group-hover:opacity-0 group-hover:pointer-events-none'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#FA5A16] bg-[#FA5A16]/15 px-3 py-1 rounded-full border border-[#FA5A16]/30 backdrop-blur-md">
                      {founder.role}
                    </span>
                  </div>

                  <h3 className="alpha-h3 font-bold text-white tracking-tight drop-shadow-md">
                    {founder.name}
                  </h3>

                  <div className="text-slate-300 font-medium text-xs sm:text-sm mt-1">
                    {founder.badge}
                  </div>
                </div>

                {/* ---------------- HOVER STATE: FULL BIO OVERLAY ---------------- */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-b from-[#090f19]/95 via-[#0B192C]/95 to-[#050608]/98 backdrop-blur-md p-6 sm:p-7 md:p-8 flex flex-col justify-between z-20 overflow-y-auto no-scrollbar border-2 border-[#FA5A16]/60 rounded-3xl transition-all duration-500 ease-out shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] ${
                    isCardActive 
                      ? 'opacity-100 translate-y-0 pointer-events-auto' 
                      : 'opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto'
                  }`}
                >
                  {/* Bio Header */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs uppercase tracking-wider font-bold text-[#FA5A16] bg-[#FA5A16]/15 px-3 py-1 rounded-full border border-[#FA5A16]/30">
                        {founder.role}
                      </span>
                      <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest">
                        Alphasure
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight mt-2">
                      {founder.name}
                    </h3>

                    {/* Accent Underline */}
                    <div className="w-12 h-1 bg-[#FA5A16] mt-2.5 mb-4 rounded-full shadow-[0_0_8px_rgba(250,90,22,0.8)]" />

                    {/* Bio Paragraphs */}
                    <div className="space-y-3 sm:space-y-3.5 text-slate-200 text-xs sm:text-[13px] md:text-sm font-normal leading-relaxed">
                      {founder.paragraphs.map((para, idx) => (
                        <p key={idx} className="text-slate-200">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Footer */}
                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-semibold uppercase tracking-wider text-[#FA5A16]">
                      {founder.badge}
                    </span>
                    <span className="text-slate-400">
                      Co-Founder
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
