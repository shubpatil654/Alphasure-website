import React, { useState } from 'react';
import { FileText, BarChart3, Check, ArrowRight } from 'lucide-react';

export default function PeriodicPricingSection({ onOpenModal }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FAF8FD] via-[#F5EEFB] to-[#FAF8FD] py-16 sm:py-20 lg:py-24 select-none"
      id="periodic-pricing"
    >
      {/* Background Soft Purple / Lavender Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-400/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-300/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-fuchsia-300/15 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* ================= Header Area ================= */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] font-black text-slate-900 tracking-tight leading-tight mb-3 whitespace-normal sm:whitespace-nowrap">
            Small Business,{' '}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#C026D3] bg-clip-text text-transparent">
              Smart Pricing
            </span>
          </h2>
          <p className="text-slate-600 font-semibold text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Everything Your Business Needs. Nothing You Don’t
          </p>

          {/* ================= Monthly / Yearly Pill Toggle ================= */}
          <div className="mt-5 sm:mt-6 inline-flex items-center p-1.5 rounded-full bg-slate-200/80 backdrop-blur-md border border-slate-300/60 shadow-inner">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 sm:px-8 py-2.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white shadow-md shadow-purple-500/30 scale-100'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 sm:px-8 py-2.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 cursor-pointer ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white shadow-md shadow-purple-500/30 scale-100'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* ================= 2 Pricing Glassmorphism Cards ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full max-w-4xl mx-auto items-stretch">
          
          {/* ================= CARD 1: Monthly Plan ================= */}
          <div
            className={`group relative rounded-[32px] p-7 sm:p-9 md:p-10 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer ${
              billingCycle === 'monthly'
                ? 'bg-gradient-to-b from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] text-white shadow-[0_25px_60px_-15px_rgba(124,58,237,0.45)] border-2 border-purple-300/60 scale-[1.02] z-20'
                : 'bg-white/90 backdrop-blur-xl text-slate-900 border-2 border-purple-100 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:border-purple-300 hover:shadow-[0_20px_45px_rgba(124,58,237,0.15)] z-10'
            }`}
            onClick={() => setBillingCycle('monthly')}
          >
            {/* Top Glowing Glass Rings Accent */}
            <div className="absolute top-0 right-0 w-44 h-44 pointer-events-none overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                <circle
                  cx="160"
                  cy="40"
                  r="70"
                  stroke={billingCycle === 'monthly' ? '#FFFFFF' : '#8B5CF6'}
                  strokeWidth="1.5"
                  strokeOpacity={billingCycle === 'monthly' ? '0.35' : '0.2'}
                />
                <circle
                  cx="160"
                  cy="40"
                  r="40"
                  stroke={billingCycle === 'monthly' ? '#FFFFFF' : '#8B5CF6'}
                  strokeWidth="1.5"
                  strokeOpacity={billingCycle === 'monthly' ? '0.45' : '0.25'}
                />
              </svg>
            </div>

            {/* Top Left Circular Orbit Dot */}
            <div
              className={`absolute top-6 left-8 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${
                billingCycle === 'monthly'
                  ? 'border-white/80 bg-white/40 shadow-[0_0_12px_#ffffff]'
                  : 'border-purple-500/60 bg-purple-400/20'
              }`}
            />

            <div>
              {/* Plan Icon */}
              <div className="flex justify-center mb-4">
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm ${
                    billingCycle === 'monthly'
                      ? 'bg-white/20 text-white backdrop-blur-md border border-white/30'
                      : 'bg-purple-50 text-purple-600 border border-purple-200/80'
                  }`}
                >
                  <FileText className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
                </div>
              </div>

              {/* Packages Starting from Header Badge */}
              <div className="text-center mb-1">
                <span
                  className={`text-xs sm:text-xs font-bold uppercase tracking-wider ${
                    billingCycle === 'monthly' ? 'text-purple-200' : 'text-purple-600'
                  }`}
                >
                  Packages Starting from
                </span>
              </div>

              {/* Plan Title & Subtitle */}
              <div className="text-center mb-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1">
                  Monthly Plan
                </h3>
                <p
                  className={`text-sm sm:text-base font-medium ${
                    billingCycle === 'monthly' ? 'text-purple-100' : 'text-slate-500'
                  }`}
                >
                  Upto 50 transactions
                </p>
              </div>

              {/* Price Display */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-1.5">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
                    ₹ 3,000
                  </span>
                </div>
                {/* Horizontal Divider Line */}
                <div
                  className={`w-16 h-[2px] mx-auto mt-4 rounded-full ${
                    billingCycle === 'monthly' ? 'bg-white/40' : 'bg-purple-300/70'
                  }`}
                />
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3.5 sm:space-y-4 mb-8 pt-2">
                {[
                  'Monthly book-keeping',
                  'Monthly closing and reporting package',
                  'Monthly review call with your accountant',
                  'Books ready for GST and TDS filing',
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        billingCycle === 'monthly'
                          ? 'bg-white/25 text-white'
                          : 'bg-purple-100 text-purple-700'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span
                      className={`text-sm sm:text-[15px] font-semibold ${
                        billingCycle === 'monthly' ? 'text-purple-50' : 'text-slate-700'
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal();
              }}
              className={`w-full py-3.5 sm:py-4 rounded-2xl font-extrabold text-base tracking-wide flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-98 shadow-md cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/40 shadow-purple-900/30'
                  : 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white shadow-purple-500/25'
              }`}
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* ================= CARD 2: Yearly Plan ================= */}
          <div
            className={`group relative rounded-[32px] p-7 sm:p-9 md:p-10 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer ${
              billingCycle === 'yearly'
                ? 'bg-gradient-to-b from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] text-white shadow-[0_25px_60px_-15px_rgba(124,58,237,0.45)] border-2 border-purple-300/60 scale-[1.02] z-20'
                : 'bg-white/90 backdrop-blur-xl text-slate-900 border-2 border-purple-100 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:border-purple-300 hover:shadow-[0_20px_45px_rgba(124,58,237,0.15)] z-10'
            }`}
            onClick={() => setBillingCycle('yearly')}
          >
            {/* Top Glowing Glass Rings Accent */}
            <div className="absolute top-0 right-0 w-44 h-44 pointer-events-none overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                <circle
                  cx="160"
                  cy="40"
                  r="70"
                  stroke={billingCycle === 'yearly' ? '#FFFFFF' : '#8B5CF6'}
                  strokeWidth="1.5"
                  strokeOpacity={billingCycle === 'yearly' ? '0.35' : '0.2'}
                />
                <circle
                  cx="160"
                  cy="40"
                  r="40"
                  stroke={billingCycle === 'yearly' ? '#FFFFFF' : '#8B5CF6'}
                  strokeWidth="1.5"
                  strokeOpacity={billingCycle === 'yearly' ? '0.45' : '0.25'}
                />
              </svg>
            </div>

            {/* Top Left Circular Orbit Dot */}
            <div
              className={`absolute top-6 left-8 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${
                billingCycle === 'yearly'
                  ? 'border-white/80 bg-white/40 shadow-[0_0_12px_#ffffff]'
                  : 'border-purple-500/60 bg-purple-400/20'
              }`}
            />

            <div>
              {/* Plan Icon */}
              <div className="flex justify-center mb-4">
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm ${
                    billingCycle === 'yearly'
                      ? 'bg-white/20 text-white backdrop-blur-md border border-white/30'
                      : 'bg-purple-50 text-purple-600 border border-purple-200/80'
                  }`}
                >
                  <BarChart3 className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
                </div>
              </div>

              {/* Packages Starting from Header Badge */}
              <div className="text-center mb-1">
                <span
                  className={`text-xs sm:text-xs font-bold uppercase tracking-wider ${
                    billingCycle === 'yearly' ? 'text-purple-200' : 'text-purple-600'
                  }`}
                >
                  Packages Starting from
                </span>
              </div>

              {/* Plan Title & Subtitle */}
              <div className="text-center mb-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1">
                  Yearly Plan
                </h3>
                <p
                  className={`text-sm sm:text-base font-medium ${
                    billingCycle === 'yearly' ? 'text-purple-100' : 'text-slate-500'
                  }`}
                >
                  Upto 500 transactions
                </p>
              </div>

              {/* Price Display */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-1.5">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
                    ₹ 15,000
                  </span>
                </div>
                {/* Horizontal Divider Line */}
                <div
                  className={`w-16 h-[2px] mx-auto mt-4 rounded-full ${
                    billingCycle === 'yearly' ? 'bg-white/40' : 'bg-purple-300/70'
                  }`}
                />
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3.5 sm:space-y-4 mb-8 pt-2">
                {[
                  'Annual book-keeping',
                  'Annual closing and reporting package',
                  'Annual review call with your accountant',
                  'Books ready for Income Tax filing',
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        billingCycle === 'yearly'
                          ? 'bg-white/25 text-white'
                          : 'bg-purple-100 text-purple-700'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span
                      className={`text-sm sm:text-[15px] font-semibold ${
                        billingCycle === 'yearly' ? 'text-purple-50' : 'text-slate-700'
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal();
              }}
              className={`w-full py-3.5 sm:py-4 rounded-2xl font-extrabold text-base tracking-wide flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-98 shadow-md cursor-pointer ${
                billingCycle === 'yearly'
                  ? 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/40 shadow-purple-900/30'
                  : 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white shadow-purple-500/25'
              }`}
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* ================= Footnote Note ================= */}
        <div className="mt-8 text-center max-w-2xl mx-auto px-4">
          <p className="text-xs sm:text-sm font-semibold text-slate-500 leading-relaxed">
            *Number of transactions: Bank transactions + Supplier invoices + Customer invoices
          </p>
        </div>

      </div>
    </section>
  );
}
