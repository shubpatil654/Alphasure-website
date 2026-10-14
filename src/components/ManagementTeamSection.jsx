import React from 'react';

export default function ManagementTeamSection() {
  return (
    <section 
      className="relative w-full bg-[#050608] text-white py-16 sm:py-20 lg:py-24 select-none overflow-hidden border-t border-b border-zinc-900"
      id="management-team"
    >
      {/* Background Subtle Warm Golden Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#C5A059]/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER: "— Management Team —" ================= */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 mb-12 sm:mb-16 lg:mb-20">
          <span className="w-10 sm:w-20 md:w-28 lg:w-36 h-[1.5px] bg-[#C5A059]/90" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-serif font-normal text-white tracking-tight flex items-center gap-2.5 sm:gap-3.5">
            <span>Management</span>
            <span className="text-[#D4A359]">Team</span>
          </h2>
          <span className="w-10 sm:w-20 md:w-28 lg:w-36 h-[1.5px] bg-[#C5A059]/90" />
        </div>

        {/* ================= 3-COLUMN LAYOUT: ABHIJIT | PHOTO | ONKAR ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-10 items-center">
          
          {/* ================= LEFT COLUMN: ABHIJIT ATRE ================= */}
          <div className="order-2 lg:order-1 lg:col-span-3 xl:col-span-3 flex flex-col justify-center text-left">
            {/* Gold Accent Bar */}
            <div className="w-12 h-[2px] bg-[#C5A059] mb-3.5" />
            
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] xl:text-[35px] font-bold text-[#E2C392] tracking-tight leading-tight mb-1">
              Abhijit Atre
            </h3>
            
            <div className="text-[#C5A059] font-medium text-sm sm:text-base mb-4 sm:mb-5 tracking-wide">
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

          {/* ================= CENTER COLUMN: DUO STUDIO PORTRAIT ================= */}
          <div className="order-1 lg:order-2 lg:col-span-6 xl:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-[560px] mx-auto flex items-center justify-center">
              <img
                src="/images/founders-duo-photo.png"
                srcSet="/images/founders-duo-photo.png 1x, /images/founders-duo-photo-2x.png 2x"
                alt="Abhijit Atre and Onkar Marathe - Co-Founders of Alphasure"
                className="w-full h-auto object-contain filter contrast-[1.04] brightness-[0.98] select-none"
                loading="eager"
              />
            </div>
          </div>

          {/* ================= RIGHT COLUMN: ONKAR MARATHE ================= */}
          <div className="order-3 lg:order-3 lg:col-span-3 xl:col-span-3 flex flex-col justify-center text-left">
            {/* Gold Accent Bar */}
            <div className="w-12 h-[2px] bg-[#C5A059] mb-3.5" />
            
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] xl:text-[35px] font-bold text-[#E2C392] tracking-tight leading-tight mb-1">
              Onkar Marathe
            </h3>
            
            <div className="text-[#C5A059] font-medium text-sm sm:text-base mb-4 sm:mb-5 tracking-wide">
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

        </div>

      </div>
    </section>
  );
}
