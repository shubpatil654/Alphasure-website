import React from 'react';

export default function GstTdsServicesDiagramSection({ onOpenModal }) {
  const cards = [
    {
      id: 'gst-registration',
      title: 'GST Registration',
      subtitle: 'Start your business the right way with hassle-free GST registration.',
      boxBg: 'bg-[#FFE3C4]', // Warm peach / apricot
      boxTitle: "What's included",
      items: [
        'Eligibility assessment',
        'Document verification',
        'GST registration application',
        'Follow-up with the GST department'
      ]
    },
    {
      id: 'gst-filing',
      title: 'GST Filing',
      subtitle: 'Never miss a GST deadline again.',
      boxBg: 'bg-[#C8D7FF]', // Soft periwinkle / lavender blue
      boxTitle: "What's included",
      items: [
        'GSTR-1',
        'GSTR-3B',
        'GSTR-9 and GSTR 9C',
        'Nil GST Returns',
        'GST reconciliation'
      ]
    },
    {
      id: 'tds-filing',
      title: 'TDS Filing',
      subtitle: 'Ensure timely TDS compliance and avoid interest and penalties.',
      boxBg: 'bg-[#FFC5CB]', // Soft pastel pink / rose
      boxTitle: "What's included",
      items: [
        'Quarterly TDS Return Filing',
        'TDS computation',
        'Challan reconciliation',
        'Correction returns',
        'Form 16 & Form 16A'
      ]
    },
    {
      id: 'income-tax-filing',
      title: 'Income Tax filing',
      subtitle: 'From books to return- Everything in Sync',
      boxBg: 'bg-[#D6F0E0]', // Soft mint pastel
      boxTitle: "What's included",
      items: [
        'Computation of taxable income and tax liability',
        'Reconciliation with AIS, Form 26AS and TDS/TCS information',
        'Review of applicable deductions and tax credits',
        'Preparation and e-filing of the Income Tax Return',
        'E-verification / filing completion assistance',
        'Support for basic filing-related queries'
      ]
    }
  ];

  return (
    <section 
      className="relative w-full bg-[#FAF7F2] py-12 sm:py-16 md:py-20 select-none overflow-hidden"
      id="gst-tds-services-scope"
      style={{ fontFamily: "'Roboto', 'Inter', sans-serif" }}
    >
      {/* Background Soft Accent Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
          <path d="M-100 200 C 350 120, 700 400, 1100 220 C 1300 130, 1400 350, 1550 280" stroke="#E2D8C8" strokeWidth="1.5" />
          <path d="M-100 700 C 400 550, 850 750, 1200 600 C 1380 500, 1450 700, 1550 620" stroke="#ECE2D3" strokeWidth="1.2" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A67C52]/10 border border-[#A67C52]/30 text-[#A67C52] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3 shadow-2xs">
            COMPLIANCE SERVICES SCOPE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-slate-950 tracking-tight leading-tight">
            One Partner, <span className="text-[#A67C52]">Every Tax Compliance</span>
          </h2>
          <p className="mt-3 text-slate-700 font-semibold text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            From initial registration to routine returns and reconciliation, we manage every step seamlessly.
          </p>
        </div>

        {/* ================= 4 CONTAINERS IN A GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-7 max-w-[1400px] mx-auto items-stretch">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={onOpenModal}
              className="w-full bg-white rounded-[28px] sm:rounded-[34px] p-6 sm:p-7 lg:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border-2 border-slate-200/90 hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between select-none"
            >
              {/* Card Header */}
              <div className="text-center w-full mb-6">
                <span className="font-black text-2xl sm:text-[26px] lg:text-[27px] text-slate-950 border-b-[3px] border-slate-950 pb-1.5 inline-block tracking-tight">
                  {card.title}
                </span>
                <p className="text-base sm:text-[16.5px] text-slate-800 font-semibold mt-3.5 leading-relaxed min-h-[50px] flex items-center justify-center">
                  {card.subtitle}
                </p>
              </div>

              {/* Inner Colored Container with High Readability */}
              <div className={`w-full ${card.boxBg} rounded-[22px] sm:rounded-[24px] p-5 sm:p-6 text-slate-950 shadow-inner flex-1 flex flex-col justify-start`}>
                <h4 className="font-black text-slate-950 text-lg sm:text-[19px] mb-4 text-left tracking-tight">
                  {card.boxTitle}
                </h4>
                <ul className="space-y-3 text-sm sm:text-[15px] lg:text-[15.5px] text-slate-950 font-bold text-left">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-snug">
                      <span className="text-slate-950 font-black text-lg leading-none select-none mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Bar */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            onClick={onOpenModal}
            className="px-9 py-4 sm:px-11 sm:py-4.5 rounded-2xl bg-gradient-to-r from-[#FF8A00] via-[#FF7A00] to-[#E66B00] hover:from-[#FF9500] hover:to-[#FF6B00] text-white font-black text-base sm:text-lg tracking-wide shadow-xl hover:shadow-[#FF8A00]/40 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Consult a Compliance Expert</span>
          </button>
        </div>

      </div>
    </section>
  );
}
