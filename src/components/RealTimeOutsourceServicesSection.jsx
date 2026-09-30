import React from 'react';
import { ArrowRight, IndianRupee, Send, BarChart3, Coins } from 'lucide-react';

export default function RealTimeOutsourceServicesSection({ onOpenModal }) {
  const services = [
    {
      id: 'ap',
      title: 'Accounts Payable',
      icon: IndianRupee,
    },
    {
      id: 'ar',
      title: 'Accounts Receivable',
      icon: Send,
    },
    {
      id: 'closing',
      title: 'Period Closing & MIS',
      icon: BarChart3,
    },
    {
      id: 'treasury',
      title: 'Treasury Management',
      icon: Coins,
    },
  ];

  return (
    <section
      className="relative w-full min-h-[620px] sm:min-h-[680px] md:min-h-[720px] flex items-center overflow-hidden bg-[#0A0F17] text-white py-16 sm:py-20 md:py-24 select-none"
      id="outsource-services"
    >
      {/* ================= Background Image (Origami Hands Artwork) ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/origami-outsource-clean.jpg"
          alt="Outsource Only What You Need - Accounts Payable, Accounts Receivable, Period Closing and MIS, Treasury Management"
          className="w-full h-full object-cover object-right sm:object-center filter brightness-[0.98] contrast-[1.05]"
        />

        {/* Dark Gradient Overlay for Maximum Text Contrast on Left */}
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-transparent pointer-events-none w-full sm:w-4/5" />
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* ================= LEFT COLUMN: Headline, Value Proposition & CTA ================= */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start text-left space-y-6">
            
            {/* Eyebrow with connected accent line */}
            <div className="flex items-center gap-3">
              <span className="text-[#F59E0B] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase drop-shadow-sm">
                SERVICES
              </span>
              <div className="h-[2px] w-12 sm:w-16 bg-[#F59E0B] rounded-full shadow-sm" />
            </div>

            {/* Main Title (2 Lines) */}
            <div className="space-y-1 sm:space-y-2">
              <h2 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-black text-white tracking-tight leading-[1.08] drop-shadow-2xl">
                Outsource Only
              </h2>
              <h3 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-black tracking-tight leading-[1.08] bg-gradient-to-r from-[#F59E0B] via-[#F97316] to-[#EA580C] bg-clip-text text-transparent drop-shadow-xl">
                What You Need
              </h3>
            </div>

            {/* Description Paragraph */}
            <p className="text-slate-100 font-medium text-base sm:text-lg leading-relaxed max-w-xl drop-shadow-md">
              Need support with specific finance functions instead of your entire accounting process? We can seamlessly integrate with your existing finance team and manage selected accounting activities.
            </p>

            {/* CTA Button */}
            <div className="pt-1">
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-3 px-8 py-3.5 sm:px-9 sm:py-4 rounded-xl bg-gradient-to-r from-[#FF8A00] via-[#FF7A00] to-[#E66B00] hover:from-[#FF9500] hover:to-[#FF6B00] text-white font-extrabold text-base tracking-wide shadow-xl hover:shadow-[#FF8A00]/50 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Customize Your Scope</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* 4 Enhanced High-Legibility Quick Service Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-xl pt-2">
              {services.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    onClick={onOpenModal}
                    className="group/pill bg-black/80 hover:bg-black/95 backdrop-blur-xl border border-white/25 hover:border-[#FF8A00] p-3 sm:p-3.5 rounded-xl flex items-center gap-3 text-sm sm:text-[15px] font-bold text-white cursor-pointer transition-all duration-300 shadow-xl hover:shadow-[#FF8A00]/25 transform hover:-translate-y-0.5"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#FF8A00]/25 border border-[#FF8A00]/50 flex items-center justify-center text-[#FF9E2C] shrink-0 group-hover/pill:bg-[#FF8A00] group-hover/pill:text-white transition-colors duration-200 shadow-sm">
                      <Icon className="w-4 h-4 stroke-[2.2]" />
                    </div>
                    <span className="text-white font-extrabold tracking-wide drop-shadow-sm leading-snug">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right column empty spacer so the origami visual shines through in full */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 pointer-events-none" />

        </div>
      </div>
    </section>
  );
}
