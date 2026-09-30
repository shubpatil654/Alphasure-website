import React, { useState } from 'react';
import { Upload, BookOpen, FileSearch, TrendingUp } from 'lucide-react';

export default function PeriodicFourStepProcess({ onOpenModal }) {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      stepNumber: '01',
      title: 'Upload Your Documents',
      description:
        'Securely upload your invoices, bank statements, and other source documents to our platform twice a month.',
      highlight: null,
      icon: Upload,
      lampColor: '#7A8F9E', // Steel slate blue-grey
      lampGlowColor: '#A3B8C8',
      glowCone: 'rgba(163, 184, 200, 0.40)',
      cordHeight: 'h-24 sm:h-28 md:h-32',
    },
    {
      stepNumber: '02',
      title: 'We Update Your Books',
      description:
        'Our AI-powered team accurately records and reconciles your transactions in Tally or Zoho Books.',
      highlight: null,
      icon: BookOpen,
      lampColor: '#FF6B55', // Vibrant Coral / Salmon Red-Orange
      lampGlowColor: '#FF8A75',
      glowCone: 'rgba(255, 107, 85, 0.45)',
      cordHeight: 'h-14 sm:h-16 md:h-18',
    },
    {
      stepNumber: '03',
      title: 'We Close the Gaps',
      description:
        'If any documents or information are missing, our team proactively follows up to ensure your books are complete and accurate.',
      highlight: null,
      icon: FileSearch,
      lampColor: '#FFA726', // Warm Golden Amber / Orange
      lampGlowColor: '#FFB74D',
      glowCone: 'rgba(255, 167, 38, 0.45)',
      cordHeight: 'h-20 sm:h-22 md:h-26',
    },
    {
      stepNumber: '04',
      title: 'Gain Financial Insights',
      description:
        "Get updated books of accounts along with a MIS stack, giving you clear visibility into your business's financial performance within",
      highlight: '8 working days from month end.',
      icon: TrendingUp,
      lampColor: '#00D2B4', // Vibrant Cyan / Turquoise Teal
      lampGlowColor: '#34E8CD',
      glowCone: 'rgba(0, 210, 180, 0.48)',
      cordHeight: 'h-10 sm:h-12 md:h-14',
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#131b26] text-white py-8 sm:py-10 md:py-14 select-none"
      id="four-step-process"
    >
      {/* Background Radial Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[110px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[320px] bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= Header Area (Exact Reference Style) ================= */}
        <div className="text-left mb-5 sm:mb-6 md:mb-8 max-w-xl">
          {/* Eyebrow with connected accent horizontal line */}
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#38BDF8] font-semibold text-sm sm:text-base md:text-lg tracking-wide">
              How It Works
            </span>
            <div className="h-[1.5px] w-12 sm:w-16 bg-[#38BDF8]/60 rounded-full" />
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black text-white tracking-wide uppercase leading-tight drop-shadow-lg">
            FOUR STEP PROCESS
          </h2>
        </div>

        {/* ================= 4 Columns with Tight, Cohesive Vertical Spacing ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-6 items-start relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isHovered = activeStep === idx;

            return (
              <div
                key={step.stepNumber}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
                onClick={onOpenModal}
                className="relative flex flex-col items-center text-center group cursor-pointer select-none transition-all duration-500 ease-out"
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
                      width="54"
                      height="38"
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
                        <linearGradient id={`lampGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={step.lampColor} stopOpacity={isHovered ? 1 : 0.8} />
                          <stop offset="45%" stopColor="#FFFFFF" stopOpacity={isHovered ? 0.45 : 0.15} />
                          <stop offset="100%" stopColor={step.lampColor} stopOpacity={isHovered ? 0.95 : 0.6} />
                        </linearGradient>
                      </defs>

                      {/* Main curved bell shade */}
                      <path
                        d="M27 2 C22 2, 19 8, 14 18 C9 28, 4 34, 1 36 C8 38, 46 38, 53 36 C50 34, 45 28, 40 18 C35 8, 32 2, 27 2 Z"
                        fill={`url(#lampGrad-${idx})`}
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
                    className={`absolute top-[calc(100%-6px)] left-1/2 -translate-x-1/2 w-64 sm:w-72 md:w-80 h-[340px] pointer-events-none transition-all duration-700 ease-out z-0 ${
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

                {/* ----------------- MIDDLE: Icon, Title & Description (Reduced Vertical Padding) ----------------- */}
                <div className="relative z-10 flex flex-col items-center justify-start px-2 sm:px-3 pt-3 sm:pt-4 pb-2 transition-all duration-500 min-h-[220px] sm:min-h-[230px]">
                  {/* Feature Icon (Directly under the lamp bulb with minimal gap) */}
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-3 transition-all duration-500 transform ${
                      isHovered
                        ? 'text-white scale-110 drop-shadow-[0_0_16px_rgba(255,255,255,0.8)]'
                        : 'text-slate-500 opacity-40 scale-95'
                    }`}
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
                  </div>

                  {/* Step Title (Transitions from Dark to Bright) */}
                  <h3
                    className={`text-lg sm:text-xl md:text-[21px] font-bold mb-2 tracking-tight leading-snug transition-all duration-500 ${
                      isHovered
                        ? 'text-white drop-shadow-[0_2px_14px_rgba(255,255,255,0.5)] scale-105'
                        : 'text-slate-400/50'
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Step Description (Transitions from Dark to Bright) */}
                  <p
                    className={`text-xs sm:text-sm md:text-[14px] leading-relaxed max-w-[260px] sm:max-w-[275px] transition-all duration-500 ${
                      isHovered
                        ? 'text-slate-100 font-medium drop-shadow-sm'
                        : 'text-slate-500/60 font-normal'
                    }`}
                  >
                    {step.description}{' '}
                    {step.highlight && (
                      <span
                        className={`transition-all duration-500 block sm:inline mt-1 sm:mt-0 ${
                          isHovered ? 'font-bold text-white drop-shadow-md' : 'font-normal text-slate-500/60'
                        }`}
                      >
                        {step.highlight}
                      </span>
                    )}
                  </p>
                </div>

                {/* ----------------- BOTTOM: 3D Pedestal Stage & Big Step Number ----------------- */}
                <div className="relative z-10 w-full flex flex-col items-center pt-1 pb-2 transition-all duration-500">
                  {/* Floating Number (01, 02, 03, 04) */}
                  <span
                    className={`text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none -mb-5 sm:-mb-6 md:-mb-7 z-20 transition-all duration-500 ${
                      isHovered
                        ? 'text-white drop-shadow-[0_4px_20px_rgba(255,255,255,0.7)] scale-110'
                        : 'text-slate-400/40 drop-shadow-none scale-100'
                    }`}
                  >
                    {step.stepNumber}
                  </span>

                  {/* Realistic 3D Pedestal / Podium Platform */}
                  <div className="relative w-44 sm:w-48 md:w-52 h-14 flex items-center justify-center">
                    {/* Top Surface of Stage (Trapezoid with metallic gradient) */}
                    <div
                      className={`absolute top-0 w-full h-8 rounded-t-md shadow-md transition-all duration-500 ${
                        isHovered ? 'brightness-125 filter drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]' : 'brightness-70 opacity-60'
                      }`}
                      style={{
                        background: 'linear-gradient(180deg, #D4DCDE 0%, #A4B2BA 100%)',
                        clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)',
                      }}
                    />

                    {/* Front Beveled Edge of Stage */}
                    <div
                      className={`absolute top-8 w-full h-4 rounded-b-md transition-all duration-500 ${
                        isHovered ? 'brightness-110' : 'brightness-75 opacity-60'
                      }`}
                      style={{
                        background: 'linear-gradient(180deg, #7A8993 0%, #52606A 100%)',
                      }}
                    />

                    {/* Stage Drop Shadow underneath */}
                    <div
                      className={`absolute -bottom-2 w-48 sm:w-52 h-4 rounded-full bg-black/60 blur-md pointer-events-none transform scale-y-75 transition-all duration-500 ${
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
