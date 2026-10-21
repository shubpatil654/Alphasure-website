import React from 'react';

export default function ManagementTeamSection() {
  return (
    <section 
      className="relative w-full bg-[#050608] text-white py-16 sm:py-20 lg:py-24 select-none overflow-hidden border-t border-b border-zinc-900"
      id="management-team"
    >
      {/* Background Subtle Warm Orange Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#FA5A16]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER: "Management Team" (Lines Removed, Team in Orange with Underline) ================= */}
        <div className="flex items-center justify-center mb-12 sm:mb-16 lg:mb-20">
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

        {/* ================= 3-COLUMN LAYOUT: ONKAR | PHOTO | ABHIJIT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 xl:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: ONKAR MARATHE ================= */}
          <div className="order-2 lg:order-1 lg:col-span-3 xl:col-span-3 flex flex-col justify-center text-left">
            <h3 className="alpha-h3 font-bold text-[#FA5A16] tracking-tight leading-tight mb-1">
              Onkar Marathe
            </h3>
            
            <div className="text-[#FA5A16] font-medium text-sm sm:text-base mb-4 sm:mb-5 tracking-wide">
              Co-Founder
            </div>
            
            <div className="space-y-3.5 sm:space-y-4 text-slate-300 text-xs sm:text-[13px] md:text-sm font-normal leading-relaxed">
              <p>
                Onkar brings extensive experience in accounting, financial reporting and building finance teams for businesses in India and international markets.
              </p>
              <p>
                A Chartered Accountant from the Institute of Chartered Accountants of India (ICAI), he has also successfully completed the Uniform CPA Examination in the United States.
              </p>
              <p>
                A strong believer in teamwork, Onkar enjoys working closely with people and building teams that take ownership of their work. Outside work, he loves travelling and is an enthusiastic badminton and football player.
              </p>
            </div>
          </div>

          {/* ================= CENTER COLUMN: DUO STUDIO PORTRAIT (Enlarged, Seamless Blend, Bottom Gradient) ================= */}
          <div className="order-1 lg:order-2 lg:col-span-6 xl:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-[660px] lg:max-w-[720px] xl:max-w-[760px] mx-auto flex items-center justify-center">
              <img
                src="/images/founders-duo-photo.png?v=4"
                srcSet="/images/founders-duo-photo.png?v=4 1x, /images/founders-duo-photo-2x.png?v=4 2x"
                alt="Onkar Marathe and Abhijit Atre - Co-Founders of Alphasure"
                className="w-full h-auto object-contain filter contrast-[1.04] brightness-[0.98] select-none"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 65%, rgba(0,0,0,0.4) 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 65%, rgba(0,0,0,0.4) 85%, transparent 100%)'
                }}
                loading="eager"
              />
            </div>
          </div>

          {/* ================= RIGHT COLUMN: ABHIJIT ATRE ================= */}
          <div className="order-3 lg:order-3 lg:col-span-3 xl:col-span-3 flex flex-col justify-center text-left">
            <h3 className="alpha-h3 font-bold text-[#FA5A16] tracking-tight leading-tight mb-1">
              Abhijit Atre
            </h3>
            
            <div className="text-[#FA5A16] font-medium text-sm sm:text-base mb-4 sm:mb-5 tracking-wide">
              Co-Founder
            </div>
            
            <div className="space-y-3.5 sm:space-y-4 text-slate-300 text-xs sm:text-[13px] md:text-sm font-normal leading-relaxed">
              <p>
                Abhijit brings extensive experience in technology, business leadership and process transformation, with a strong focus on using technology to help businesses work smarter and scale.
              </p>
              <p>
                He has been closely involved with Pune's technology ecosystem for over two decades and has held leadership roles with SAP.
              </p>
              <p>
                A natural people person, Abhijit enjoys building relationships, mentoring others and bringing people together. Outside work, he is an enthusiastic badminton player—bringing the same energy, competitiveness and team spirit to everything he does.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
