import React from 'react';

export default function CompliancePricingCardsSection({ onOpenModal }) {
  const topCards = [
    {
      id: 'gst-reg',
      number: '01',
      title: 'GST REGISTRATION',
      subtitle: null,
      price: '₹2,500',
      iconBg: 'bg-[#F7EFE4] text-[#A67C52] border border-[#EADBCA]',
      bottomShapeBg: 'bg-[#F5EBE1]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      )
    },
    {
      id: 'gstr-1-3b',
      number: '02',
      title: 'GSTR 1 & 3B',
      subtitle: 'Along with GSTR2B reconciliation',
      price: '₹850',
      iconBg: 'bg-[#E8EFF8] text-[#2C5282] border border-[#D5E2F2]',
      bottomShapeBg: 'bg-[#E2EAF4]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="12" y2="17" />
          <circle cx="17" cy="17" r="4" fill="#2C5282" />
          <path d="M15.5 17l1 1 2-2" stroke="#ffffff" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 'tds-return',
      number: '03',
      title: 'TDS RETURN',
      subtitle: null,
      price: '₹950',
      iconBg: 'bg-[#F7EFE4] text-[#A67C52] border border-[#EADBCA]',
      bottomShapeBg: 'bg-[#F5EBE1]',
      icon: (
        <div className="relative flex items-center justify-center">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#8C6239] text-[9px] font-bold text-white flex items-center justify-center leading-none">
            ₹
          </span>
        </div>
      )
    },
    {
      id: 'gstr-9-9c',
      number: '04',
      title: 'GSTR 9 AND 9C',
      subtitle: null,
      price: '₹5,000',
      iconBg: 'bg-[#E8EFF8] text-[#2C5282] border border-[#D5E2F2]',
      bottomShapeBg: 'bg-[#E2EAF4]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M9 18v-3" />
          <path d="M12 18v-6" />
          <path d="M15 18v-4" />
        </svg>
      )
    }
  ];

  const itrList = [
    { form: 'ITR 1', price: '₹500', rawPrice: '500', desc: '(Individual with Salary and interest income)' },
    { form: 'ITR 2', price: '₹1,000', rawPrice: '1,000', desc: '(Individual with Capital gains, etc)' },
    { form: 'ITR 3', price: '₹3,000', rawPrice: '3,000', desc: '(Individual with income from business or profession)' },
    { form: 'ITR 4', price: '₹2,000', rawPrice: '2,000', desc: '(Individual with Presumptive income)' },
    { form: 'ITR 5', price: '₹3,000', rawPrice: '3,000', desc: '(LLP and Partnership firm)' },
    { form: 'ITR 6', price: '₹3,000', rawPrice: '3,000', desc: '(Company)' },
    { form: 'ITR 7', price: '₹3,000', rawPrice: '3,000', desc: '(Trust)' },
  ];

  return (
    <section 
      className="relative w-full bg-transparent py-8 sm:py-10 md:py-12 select-none overflow-hidden"
      id="compliance-pricing-cards"
    >
      {/* Background Soft Accent Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <path d="M-100 180 C 350 90, 700 360, 1100 200 C 1300 110, 1400 310, 1550 250" stroke="#E2D8C8" strokeWidth="1.5" />
          <path d="M-100 680 C 400 520, 850 720, 1200 570 C 1380 470, 1450 670, 1550 600" stroke="#ECE2D3" strokeWidth="1.2" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER: "— Compliance —" ================= */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 flex flex-col items-center">
          
          {/* Main Title with Left and Right Lines */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 w-full">
            <span className="w-12 sm:w-20 md:w-24 h-[1.5px] bg-[#C5A059]/70" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-[#0B192C] tracking-tight">
              Compliance
            </h2>
            <span className="w-12 sm:w-20 md:w-24 h-[1.5px] bg-[#C5A059]/70" />
          </div>

          {/* Subtitle */}
          <p className="mt-3 text-slate-700 font-medium text-base sm:text-lg md:text-[19px] max-w-2xl leading-relaxed">
            Simplifying compliance, so you can focus on growing your business.
          </p>

          {/* Bottom Gold Accent Bar */}
          <div className="w-12 sm:w-16 h-[2px] bg-[#C5A059] mt-3 rounded-full" />
        </div>

        {/* ================= ROW 1: 4 TOP CARDS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-[1240px] mx-auto items-stretch">
          {topCards.map((card) => (
            <div
              key={card.id}
              onClick={onOpenModal}
              className="relative w-full bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.04)] border border-[#E8DCCB] hover:border-[#C5A059] hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden group select-none min-h-[220px] sm:min-h-[240px]"
            >
              {/* Bottom Right Curved Accent Graphic */}
              <div 
                className={`absolute bottom-0 right-0 w-24 h-24 sm:w-28 sm:h-28 rounded-tl-[90px] sm:rounded-tl-[110px] ${card.bottomShapeBg} opacity-80 pointer-events-none transition-transform duration-300 group-hover:scale-105`} 
              />

              {/* Top Row: Icon Badge & Number */}
              <div className="flex items-center justify-between w-full mb-4 relative z-10">
                <div className={`w-12 h-12 rounded-2xl ${card.iconBg} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>
                <span className="text-slate-300 font-bold text-lg sm:text-xl tracking-wider select-none font-sans">
                  {card.number}
                </span>
              </div>

              {/* Card Main Content */}
              <div className="flex-1 flex flex-col justify-start relative z-10 mb-4">
                <h3 className="font-serif font-black text-xl sm:text-[22px] md:text-[23px] text-[#0B192C] leading-tight tracking-tight uppercase">
                  {card.title}
                </h3>
                
                {card.subtitle && (
                  <p className="text-xs sm:text-[13px] font-bold text-[#6D522E] mt-1.5 leading-snug">
                    {card.subtitle}
                  </p>
                )}
              </div>

              {/* Price & Divider Row */}
              <div className="pt-2 border-t-0 relative z-10 mt-auto">
                {/* Short Accent Line */}
                <div className="w-9 h-[2px] bg-[#B89255] mb-2.5 rounded-full" />

                {/* Price Display */}
                <div className="font-serif font-black text-2xl sm:text-3xl md:text-[32px] text-[#8C6239] tracking-tight leading-none">
                  {card.price}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ================= ROW 2: 5TH WIDE CONTAINER (INCOME TAX RETURN) ================= */}
        <div className="max-w-[1240px] mx-auto mt-6 sm:mt-8">
          <div 
            onClick={onOpenModal}
            className="relative w-full bg-white rounded-[26px] sm:rounded-[30px] p-6 sm:p-8 lg:p-9 shadow-[0_12px_40px_rgba(0,0,0,0.04)] border border-[#E8DCCB] hover:border-[#C5A059] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer overflow-hidden group select-none"
          >
            {/* Background Corner Graphic */}
            <div className="absolute bottom-0 right-0 w-44 h-44 sm:w-56 sm:h-56 rounded-tl-[160px] sm:rounded-tl-[200px] bg-[#F5EBE1] opacity-75 pointer-events-none transition-transform duration-300 group-hover:scale-105" />

            {/* Top Bar: Icon Badge, Number, and Title */}
            <div className="flex items-center justify-between gap-4 pb-5 border-b border-[#EFE5D8] relative z-10">
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-[#F7EFE4] text-[#A67C52] border border-[#EADBCA] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <path d="M7 8h10" />
                    <path d="M7 12h10" />
                    <path d="M7 16h6" />
                  </svg>
                </div>

                <div>
                  <h3 className="font-serif font-black text-2xl sm:text-[26px] md:text-3xl text-[#0B192C] tracking-tight">
                    Income Tax return:
                  </h3>
                </div>
              </div>

              <span className="text-slate-300 font-bold text-lg sm:text-xl tracking-wider select-none font-sans">
                05
              </span>
            </div>

            {/* Content List: Exact Content From Attached Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5 pt-5 relative z-10">
              {itrList.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-baseline gap-2 py-2.5 px-4 rounded-xl bg-[#FAF7F2] border border-[#E8DCCB]/90 hover:border-[#C5A059] transition-all"
                >
                  <span className="font-serif font-black text-base sm:text-lg text-[#0B192C] shrink-0">
                    {item.form}-
                  </span>
                  <span className="font-serif font-black text-base sm:text-lg text-[#8C6239] shrink-0">
                    {item.price}
                  </span>
                  <span className="text-xs sm:text-[13.5px] font-semibold text-slate-700 leading-snug">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}



