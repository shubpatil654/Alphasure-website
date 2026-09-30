import React, { useState } from 'react';
import { BookOpen, ClipboardCheck, Scale, CalendarCheck, ShieldCheck } from 'lucide-react';

export default function GstTdsProcessSection({ onOpenModal }) {
  const [activeStep, setActiveStep] = useState(1); // Default active on step 2 like the reference

  const steps = [
    {
      stepNumber: '01',
      title: 'We update and close the books',
      icon: BookOpen,
      lampColor: '#7A8F9E', // Steel slate blue-grey
      lampGlowColor: '#A3B8C8',
      glowCone: 'rgba(163, 184, 200, 0.40)',
      cordHeight: 'h-24 sm:h-28 md:h-30',
    },
    {
      stepNumber: '02',
      title: 'We Prepare & Review the filings',
      icon: ClipboardCheck,
      lampColor: '#FF6B55', // Vibrant Coral / Salmon Red-Orange
      lampGlowColor: '#FF8A75',
      glowCone: 'rgba(255, 107, 85, 0.45)',
      cordHeight: 'h-14 sm:h-16 md:h-18',
    },
    {
      stepNumber: '03',
      title: 'Your filings always match the books',
      icon: Scale,
      lampColor: '#FFA726', // Warm Golden Amber / Orange
      lampGlowColor: '#FFB74D',
      glowCone: 'rgba(255, 167, 38, 0.45)',
      cordHeight: 'h-22 sm:h-24 md:h-26',
    },
    {
      stepNumber: '04',
      title: 'We File before due date',
      icon: CalendarCheck,
      lampColor: '#00D2B4', // Vibrant Cyan / Turquoise Teal
      lampGlowColor: '#34E8CD',
      glowCone: 'rgba(0, 210, 180, 0.48)',
      cordHeight: 'h-12 sm:h-14 md:h-16',
    },
    {
      stepNumber: '05',
      title: 'We provide assistance throughout the year',
      icon: ShieldCheck,
      lampColor: '#A855F7', // Vibrant Purple / Violet
      lampGlowColor: '#C084FC',
      glowCone: 'rgba(168, 85, 247, 0.45)',
      cordHeight: 'h-20 sm:h-22 md:h-24',
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#131b26] text-white py-8 sm:py-10 md:py-14 select-none"
      id="gst-tds-process"
    >
      {/* Background Radial Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[110px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[320px] bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* ================= Header Area (Exact Reference Style) ================= */}
        <div className="text-left mb-6 sm:mb-8 md:mb-10 max-w-xl">
          {/* Eyebrow with connected accent horizontal line */}
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#38BDF8] font-semibold text-sm sm:text-base md:text-lg tracking-wide">
              How It Works
            </span>
            <div className="h-[1.5px] w-12 sm:w-16 bg-[#38BDF8]/60 rounded-full" />
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black text-white tracking-wide uppercase leading-tight drop-shadow-lg">
            OUR PROCESS
          </h2>
        </div>

        {/* ================= 5 Columns with Pendant Lamp & Generous Horizontal Spacing ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 sm:gap-y-12 lg:gap-y-0 gap-x-8 sm:gap-x-10 lg:gap-x-8 xl:gap-x-12 2xl:gap-x-16 items-start relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isHovered = activeStep === idx;

            return (
              <div
                key={step.stepNumber}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={onOpenModal}
                className="relative flex flex-col items-center text-center group cursor-pointer select-none transition-all duration-500 ease-out px-2 sm:px-3 lg:px-4 xl:px-6"
              >
                {/* ----------------- TOP: Hanging Wire & Pendant Lamp ----------------- */}
                <div className="relative w-full flex flex-col items-center pointer-events-none">
                  {/* Ceiling Cord Wire */}
                  <div
                    className={`w-[1.5px] bg-gradient-to-b from-slate-500/30 via-slate-400/50 to-slate-400 transition-all duration-500 ${step.cordHeight} ${
                      isHovered ? 'opacity-100 scale-y-100' : 'opacity-40'
                    }`}
                  />

                  {/* Pendant Lamp Fixture */}
                  <div className="relative flex flex-col items-center">
                    {/* Top Metal Cap / Collar */}
                    <div
                      className={`w-3 h-2 rounded-t-sm transition-all duration-500 ${
                        isHovered ? 'bg-slate-300 shadow-sm' : 'bg-slate-600'
                      }`}
                    />

                    {/* Lamp Bell Shade (SVG with dynamic light flare) */}
                    <svg
                      width="50"
                      height="36"
                      viewBox="0 0 54 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`filter transition-all duration-500 transform ${
                        isHovered
                          ? 'scale-110 drop-shadow-[0_6px_16px_rgba(255,255,255,0.25)] brightness-110'
                          : 'scale-100 drop-shadow-sm brightness-75 opacity-70'
                      }`}
                    >
                      <defs>
                        <linearGradient id={`lampGrad-gst-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={step.lampColor} stopOpacity={isHovered ? 1 : 0.8} />
                          <stop offset="45%" stopColor="#FFFFFF" stopOpacity={isHovered ? 0.45 : 0.15} />
                          <stop offset="100%" stopColor={step.lampColor} stopOpacity={isHovered ? 0.95 : 0.6} />
                        </linearGradient>
                      </defs>

                      {/* Main curved bell shade */}
                      <path
                        d="M27 2 C22 2, 19 8, 14 18 C9 28, 4 34, 1 36 C8 38, 46 38, 53 36 C50 34, 45 28, 40 18 C35 8, 32 2, 27 2 Z"
                        fill={`url(#lampGrad-gst-${idx})`}
                      />

                      {/* Bottom rim specular highlight */}
                      <ellipse
                        cx="27"
                        cy="36"
                        rx="26"
                        ry="2"
                        fill="#FFFFFF"
                        fillOpacity={isHovered ? 0.6 : 0.2}
                      />
                    </svg>

                    {/* Light Bulb Glowing Filament Base (Turn ON/OFF effect) */}
                    <div
                      className={`w-6 h-3 rounded-full transition-all duration-500 -mt-1 z-10 ${
                        isHovered
                          ? 'bg-white blur-[0.8px] shadow-[0_0_18px_#ffffff,0_0_35px_#ffffff] scale-125 opacity-100'
                          : 'bg-slate-400/40 blur-[1px] opacity-20 scale-75'
                      }`}
                    />
                  </div>

                  {/* ----------------- LIGHT CONE BEAM (Turns ON when mouse hovers) ----------------- */}
                  <div
                    className={`absolute top-[calc(100%-6px)] left-1/2 -translate-x-1/2 w-56 sm:w-64 md:w-72 h-[340px] pointer-events-none transition-all duration-700 ease-out z-0 ${
                      isHovered
                        ? 'opacity-100 scale-y-100 filter drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]'
                        : 'opacity-0 scale-y-90'
                    }`}
                    style={{
                      background: `radial-gradient(ellipse at 50% 0%, ${step.glowCone} 0%, rgba(255,255,255,0.08) 40%, transparent 75%)`,
                      clipPath: 'polygon(44% 0%, 56% 0%, 100% 100%, 0% 100%)',
                    }}
                  />
                </div>

                {/* ----------------- MIDDLE: Icon & Title Pointer Only ----------------- */}
                <div className="relative z-10 flex flex-col items-center justify-start px-1 sm:px-2 pt-3 sm:pt-4 pb-2 transition-all duration-500 min-h-[140px] sm:min-h-[150px]">
                  {/* Feature Icon (Directly under the lamp bulb with minimal gap) */}
                  <div
                    className={`w-12 h-12 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center mb-3 transition-all duration-500 transform ${
                      isHovered
                        ? 'text-white scale-110 drop-shadow-[0_0_16px_rgba(255,255,255,0.8)]'
                        : 'text-slate-500 opacity-40 scale-95'
                    }`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
                  </div>

                  {/* Step Title (Transitions from Dark to Bright) */}
                  <h3
                    className={`text-base sm:text-lg md:text-[19px] font-bold tracking-tight leading-snug transition-all duration-500 max-w-[200px] sm:max-w-[220px] ${
                      isHovered
                        ? 'text-white drop-shadow-[0_2px_14px_rgba(255,255,255,0.5)] scale-105'
                        : 'text-slate-400/50'
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>

                {/* ----------------- BOTTOM: 3D Pedestal Stage & Big Step Number ----------------- */}
                <div className="relative z-10 w-full flex flex-col items-center pt-1 pb-2 transition-all duration-500">
                  {/* Floating Number (01, 02, 03, 04, 05) */}
                  <span
                    className={`text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none -mb-4 sm:-mb-5 md:-mb-6 z-20 transition-all duration-500 ${
                      isHovered
                        ? 'text-white drop-shadow-[0_4px_20px_rgba(255,255,255,0.7)] scale-110'
                        : 'text-slate-400/40 drop-shadow-none scale-100'
                    }`}
                  >
                    {step.stepNumber}
                  </span>

                  {/* Realistic 3D Pedestal / Podium Platform */}
                  <div className="relative w-36 sm:w-40 md:w-44 h-12 flex items-center justify-center">
                    {/* Top Surface of Stage (Trapezoid with metallic gradient) */}
                    <div
                      className={`absolute top-0 w-full h-7 rounded-t-md shadow-md transition-all duration-500 ${
                        isHovered ? 'brightness-125 filter drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]' : 'brightness-70 opacity-60'
                      }`}
                      style={{
                        background: 'linear-gradient(180deg, #D4DCDE 0%, #A4B2BA 100%)',
                        clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)',
                      }}
                    />

                    {/* Front Beveled Edge of Stage */}
                    <div
                      className={`absolute top-7 w-full h-3.5 rounded-b-md transition-all duration-500 ${
                        isHovered ? 'brightness-110' : 'brightness-75 opacity-60'
                      }`}
                      style={{
                        background: 'linear-gradient(180deg, #7A8993 0%, #52606A 100%)',
                      }}
                    />

                    {/* Stage Drop Shadow underneath */}
                    <div
                      className={`absolute -bottom-2 w-40 sm:w-44 h-3.5 rounded-full bg-black/60 blur-md pointer-events-none transform scale-y-75 transition-all duration-500 ${
                        isHovered ? 'opacity-90 scale-105' : 'opacity-40 scale-95'
                      }`}
                    />
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
