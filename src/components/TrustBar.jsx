import React from 'react';
import { ShieldCheck, Star } from 'lucide-react';

export default function TrustBar() {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-3 sm:px-6">
      {/* Floating Frosted Glass Bar */}
      <div className="glass-panel rounded-2xl sm:rounded-[22px] px-4 sm:px-8 lg:px-10 py-3.5 sm:py-4 lg:py-5 shadow-2xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-4 sm:gap-6 lg:gap-8 items-center justify-between">
          
          {/* Item 1: Google 5 Star Rating (Transparent, No Background) */}
          <div className="flex items-center justify-center lg:justify-start select-none">
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Google G Logo SVG */}
              <svg className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 filter drop-shadow-md" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>

              <div className="flex flex-col items-start text-left">
                {/* 5 Yellow Stars */}
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                  <span className="text-white font-extrabold text-xs sm:text-sm ml-1.5 leading-none">5.0</span>
                </div>
                <span className="text-white/90 font-bold text-[11px] sm:text-xs mt-0.5 tracking-tight">
                  100+ Google Reviews
                </span>
              </div>
            </div>
          </div>

          {/* Item 2: ISO 27001 Certification Badge (Transparent, No Background) */}
          <div className="flex items-center justify-center select-none">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0 shadow-md">
                <ShieldCheck className="w-5 h-5 sm:w-5 sm:h-5" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-white font-black text-xs sm:text-sm tracking-wide leading-tight">
                  ISO 27001
                </span>
                <span className="text-emerald-400 font-extrabold text-[10px] sm:text-[11px] tracking-tight mt-0.5">
                  Certified Secure
                </span>
              </div>
            </div>
          </div>

          {/* Item 3: 100+ In-House Professionals */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 select-none text-left">
            <span className="text-white text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-none text-shadow-subtle">
              100+
            </span>
            <div className="text-white/95 leading-tight font-bold">
              <div className="text-[11px] sm:text-[13px] tracking-tight">In-House</div>
              <div className="text-[11px] sm:text-[13px] tracking-tight">Professionals</div>
            </div>
          </div>

          {/* Item 4: 10+ YEARS IN BUSINESS */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 select-none text-left">
            <span className="text-white text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-none text-shadow-subtle">
              10+
            </span>
            <div className="text-white/95 leading-tight font-black">
              <div className="text-[9px] sm:text-[11px] tracking-wider text-white/80">YEARS IN</div>
              <div className="text-[11px] sm:text-[13px] tracking-wide text-white">BUSINESS</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
