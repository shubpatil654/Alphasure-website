import React from 'react';
import { ArrowRight, BarChart3, UserCheck, Globe, Lightbulb } from 'lucide-react';

export default function OtherServicesPricingSection({ onOpenModal }) {
  const otherServices = [
    {
      id: 'real-time-acc',
      title: 'Real Time Accounting',
      cardBg: 'bg-white',
      borderColor: 'border-white/90 hover:border-[#C5A059]',
      iconBg: 'bg-[#F5ECE0] text-[#8C6239] border border-[#E8DCCB]',
      bottomShapeBg: 'bg-[#F2E4D2]',
      accentLine: 'bg-[#B89255]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    },
    {
      id: 'controller',
      title: 'Controller',
      cardBg: 'bg-white',
      borderColor: 'border-white/90 hover:border-blue-400',
      iconBg: 'bg-[#E5F0FC] text-[#2C5282] border border-[#D3E4F6]',
      bottomShapeBg: 'bg-[#D8E8F8]',
      accentLine: 'bg-[#2C5282]',
      icon: (
        <div className="relative flex items-center justify-center">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <svg className="w-3.5 h-3.5 absolute -bottom-1 -right-1 text-[#2C5282] bg-white rounded-full p-0.5 shadow-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </div>
      )
    },
    {
      id: 'fractional-cfo',
      title: 'Fractional CFO',
      cardBg: 'bg-white',
      borderColor: 'border-white/90 hover:border-[#C5A059]',
      iconBg: 'bg-[#F5ECE0] text-[#8C6239] border border-[#E8DCCB]',
      bottomShapeBg: 'bg-[#F2E4D2]',
      accentLine: 'bg-[#B89255]',
      icon: (
        <div className="relative flex items-center justify-center">
          <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
          </svg>
          <div className="flex items-end gap-0.5 ml-1">
            <span className="w-1 h-2 bg-[#8C6239] rounded-xs" />
            <span className="w-1 h-3.5 bg-[#8C6239] rounded-xs" />
            <span className="w-1 h-5 bg-[#8C6239] rounded-xs" />
          </div>
        </div>
      )
    },
    {
      id: 'payroll',
      title: 'Payroll',
      cardBg: 'bg-white',
      borderColor: 'border-white/90 hover:border-rose-400',
      iconBg: 'bg-[#FCEAEB] text-[#B85D65] border border-[#FAD2D6]',
      bottomShapeBg: 'bg-[#FADDE0]',
      accentLine: 'bg-[#B85D65]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
          <path d="M18 19l2 2" />
        </svg>
      )
    },
    {
      id: 'advisory',
      title: 'Advisory',
      cardBg: 'bg-white',
      borderColor: 'border-white/90 hover:border-blue-400',
      iconBg: 'bg-[#E5F0FC] text-[#2C5282] border border-[#D3E4F6]',
      bottomShapeBg: 'bg-[#D8E8F8]',
      accentLine: 'bg-[#2C5282]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
        </svg>
      )
    },
    {
      id: 'transfer-pricing',
      title: 'Transfer pricing',
      cardBg: 'bg-white',
      borderColor: 'border-white/90 hover:border-[#C5A059]',
      iconBg: 'bg-[#F5ECE0] text-[#8C6239] border border-[#E8DCCB]',
      bottomShapeBg: 'bg-[#F2E4D2]',
      accentLine: 'bg-[#B89255]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      className="relative w-full bg-[#0B132A] text-white py-16 sm:py-20 lg:py-24 select-none overflow-hidden border-t border-b border-slate-800/80"
      id="others-pricing-section"
    >
      {/* Background Decorative Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Dark Grid Background Photo Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-35">
        <img
          src="/images/dark-grid-bg.png"
          alt="Dark Grid Background"
          className="w-full h-full object-cover filter brightness-105"
        />
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* ================= SECTION HEADER: "Others" ================= */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-14 flex flex-col items-center">
          <h2 className="alpha-h2 font-bold text-white tracking-tight">
            Others
          </h2>
          {/* Centered Gold Accent Line */}
          <div className="w-12 sm:w-16 h-[2.5px] bg-[#C5A059] mt-3 sm:mt-4 rounded-full shadow-[0_0_10px_rgba(197,160,89,0.5)]" />
        </div>

        {/* ================= 6 CARDS (3x2 GRID) ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full max-w-[1180px] mx-auto items-stretch">
          {otherServices.map((service) => (
            <div
              key={service.id}
              onClick={onOpenModal}
              className={`relative w-full ${service.cardBg} rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 md:p-8 shadow-[0_12px_36px_rgba(0,0,0,0.3)] border ${service.borderColor} hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden group select-none min-h-[170px] sm:min-h-[185px]`}
            >
              {/* Bottom Right Curved Accent Graphic */}
              <div 
                className={`absolute bottom-0 right-0 w-28 h-28 sm:w-32 sm:h-32 rounded-tl-[100px] sm:rounded-tl-[120px] ${service.bottomShapeBg} opacity-85 pointer-events-none transition-transform duration-300 group-hover:scale-105`} 
              />

              {/* Top Row: Icon Badge */}
              <div className="flex items-center justify-start w-full mb-4 relative z-10">
                <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl ${service.iconBg} flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
              </div>

              {/* Card Title & Divider Line */}
              <div className="relative z-10 mt-auto">
                <h3 className="font-serif font-black text-2xl sm:text-[26px] md:text-[27px] text-[#0B192C] leading-tight tracking-tight mb-2.5 group-hover:text-[#B89255] transition-colors">
                  {service.title}
                </h3>
                {/* Short Accent Line */}
                <div className={`w-10 h-[2.5px] ${service.accentLine || 'bg-[#B89255]'} rounded-full`} />
              </div>

            </div>
          ))}
        </div>

        {/* ================= BOTTOM ACTION BUTTON: "Ask for Quote →" ================= */}
        <div className="mt-8 sm:mt-10 text-center">
          <button
            onClick={onOpenModal}
            className="px-10 py-3.5 sm:px-12 sm:py-4 rounded-full bg-gradient-to-r from-[#FA5A16] to-[#EA4B07] hover:from-[#EA4B07] hover:to-[#D43F00] text-white font-bold text-base sm:text-lg tracking-wide shadow-xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-3 mx-auto"
          >
            <span>Ask for Quote</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
}
