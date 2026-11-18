import React from 'react';
import { ArrowRight, Globe, Handshake, Scale, Gavel } from 'lucide-react';

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
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <svg className="w-3 h-3 absolute -bottom-1 -right-1 text-[#2C5282] bg-white rounded-full p-0.5 shadow-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
          </svg>
          <div className="flex items-end gap-0.5 ml-1">
            <span className="w-0.5 h-1.5 bg-[#8C6239] rounded-xs" />
            <span className="w-0.5 h-2.5 bg-[#8C6239] rounded-xs" />
            <span className="w-0.5 h-4 bg-[#8C6239] rounded-xs" />
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
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
        </svg>
      )
    },
    {
      id: 'transfer-pricing',
      title: 'Transfer Pricing',
      cardBg: 'bg-white',
      borderColor: 'border-white/90 hover:border-[#C5A059]',
      iconBg: 'bg-[#F5ECE0] text-[#8C6239] border border-[#E8DCCB]',
      bottomShapeBg: 'bg-[#F2E4D2]',
      accentLine: 'bg-[#B89255]',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      id: 'm-and-a',
      title: 'M&A',
      cardBg: 'bg-white',
      borderColor: 'border-white/90 hover:border-purple-400',
      iconBg: 'bg-[#F3E8FF] text-[#7E22CE] border border-[#E9D5FF]',
      bottomShapeBg: 'bg-[#E9D5FF]',
      accentLine: 'bg-[#7E22CE]',
      icon: <Handshake className="w-5 h-5 stroke-[2]" />
    },
    {
      id: 'international-taxation',
      title: 'International Taxation',
      cardBg: 'bg-white',
      borderColor: 'border-white/90 hover:border-emerald-400',
      iconBg: 'bg-[#E6F4EA] text-[#1E7E34] border border-[#CEEAD6]',
      bottomShapeBg: 'bg-[#D1E7DD]',
      accentLine: 'bg-[#1E7E34]',
      icon: <Globe className="w-5 h-5 stroke-[2]" />
    },
    {
      id: 'ifrs-and-ind-as',
      title: 'IFRS and Ind AS',
      cardBg: 'bg-white',
      borderColor: 'border-white/90 hover:border-blue-400',
      iconBg: 'bg-[#E5F0FC] text-[#2C5282] border border-[#D3E4F6]',
      bottomShapeBg: 'bg-[#D8E8F8]',
      accentLine: 'bg-[#2C5282]',
      icon: <Scale className="w-5 h-5 stroke-[2]" />
    },
    {
      id: 'corporate-legal',
      title: 'Corporate Legal',
      cardBg: 'bg-white',
      borderColor: 'border-white/90 hover:border-rose-400',
      iconBg: 'bg-[#FCEAEB] text-[#B85D65] border border-[#FAD2D6]',
      bottomShapeBg: 'bg-[#FADDE0]',
      accentLine: 'bg-[#B85D65]',
      icon: <Gavel className="w-5 h-5 stroke-[2]" />
    }
  ];

  return (
    <section 
      className="relative w-full bg-[#0B132A] text-white py-10 sm:py-12 select-none overflow-hidden border-t border-b border-slate-800/80"
      id="others-pricing-section"
    >
      {/* Background Decorative Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

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
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8 flex flex-col items-center">
          <h2 className="alpha-h2 font-bold text-white tracking-tight">
            Others
          </h2>
          {/* Centered Gold Accent Line */}
          <div className="w-10 sm:w-12 h-[2px] bg-[#C5A059] mt-2.5 sm:mt-3 rounded-full shadow-[0_0_8px_rgba(197,160,89,0.5)]" />
        </div>

        {/* ================= 10 CARDS GRID (Compressed: 5 columns on desktop = 2 clean rows) ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 w-full max-w-[1220px] mx-auto items-stretch">
          {otherServices.map((service) => (
            <div
              key={service.id}
              onClick={onOpenModal}
              className={`relative w-full ${service.cardBg} rounded-2xl p-4 sm:p-4.5 shadow-[0_6px_20px_rgba(0,0,0,0.25)] border ${service.borderColor} hover:shadow-[0_14px_32px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden group select-none min-h-[128px] sm:min-h-[138px]`}
            >
              {/* Bottom Right Curved Accent Graphic */}
              <div 
                className={`absolute bottom-0 right-0 w-20 h-20 sm:w-22 sm:h-22 rounded-tl-[75px] sm:rounded-tl-[90px] ${service.bottomShapeBg} opacity-85 pointer-events-none transition-transform duration-300 group-hover:scale-105`} 
              />

              {/* Top Row: Icon Badge */}
              <div className="flex items-center justify-start w-full mb-3 relative z-10">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${service.iconBg} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-300`}>
                  {service.icon}
                </div>
              </div>

              {/* Card Title & Divider Line */}
              <div className="relative z-10 mt-auto">
                <h3 className="font-sans font-bold text-sm sm:text-[15px] text-[#0B192C] leading-snug tracking-tight mb-1.5 group-hover:text-[#B89255] transition-colors">
                  {service.title}
                </h3>
                {/* Short Accent Line */}
                <div className={`w-7 h-[2px] ${service.accentLine || 'bg-[#B89255]'} rounded-full`} />
              </div>

            </div>
          ))}
        </div>

        {/* ================= BOTTOM ACTION BUTTON: "Ask for Quote →" ================= */}
        <div className="mt-6 sm:mt-7 text-center">
          <button
            onClick={onOpenModal}
            className="px-7 py-2.5 sm:px-8 sm:py-3 rounded-full bg-gradient-to-r from-[#FA5A16] to-[#EA4B07] hover:from-[#EA4B07] hover:to-[#D43F00] text-white font-bold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-orange-500/25 transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2 mx-auto"
          >
            <span>Ask for Quote</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
}
