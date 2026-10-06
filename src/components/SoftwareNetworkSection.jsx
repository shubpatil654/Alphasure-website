import React, { useState } from 'react';

// SVG Vector Logos for 8 Accounting & ERP Platforms
const NetSuiteLogo = () => (
  <div className="flex flex-col items-center justify-center">
    <span className="font-extrabold text-xs sm:text-sm tracking-widest text-[#E1251B] leading-none">
      ORACLE
    </span>
    <span className="font-semibold text-xs sm:text-xs text-[#231F20] tracking-tight mt-0.5">
      NetSuite
    </span>
  </div>
);

const QuickBooksLogo = () => (
  <div className="flex items-center gap-1.5 sm:gap-2">
    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#2CA01C] flex items-center justify-center text-white font-extrabold text-xs sm:text-sm shrink-0 shadow-xs">
      qb
    </div>
    <div className="flex flex-col text-left">
      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider leading-none">
        intuit
      </span>
      <span className="font-extrabold text-xs sm:text-xs text-slate-900 leading-tight">
        quickbooks
      </span>
    </div>
  </div>
);

const XeroLogo = () => (
  <div className="flex items-center justify-center">
    <span className="font-extrabold text-xl sm:text-2xl text-[#00B5E2] tracking-tighter lowercase font-sans">
      xero
    </span>
  </div>
);

const ZohoBooksLogo = () => (
  <div className="flex items-center gap-1.5 sm:gap-2">
    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg border-2 border-[#1E88E5] flex items-center justify-center text-[#1E88E5] font-black text-xs shrink-0">
      z
    </div>
    <div className="flex flex-col text-left">
      <span className="font-extrabold text-xs sm:text-xs text-slate-800 leading-none">
        Zoho
      </span>
      <span className="font-bold text-[10px] sm:text-xs text-[#1E88E5]">
        Books
      </span>
    </div>
  </div>
);

const SAPLogo = () => (
  <div className="flex items-center justify-center">
    <div className="bg-gradient-to-r from-[#008FD3] to-[#005A9C] px-3 py-1 sm:px-4 sm:py-1 rounded-xs shadow-xs">
      <span className="font-black text-xs sm:text-sm text-white tracking-wider italic">
        SAP
      </span>
    </div>
  </div>
);

const TallyLogo = () => (
  <div className="flex flex-col items-center justify-center">
    <span className="font-black text-base sm:text-lg text-[#9B0000] tracking-tight font-serif italic">
      Tally
    </span>
  </div>
);

const DynamicsLogo = () => (
  <div className="flex items-center gap-1.5 sm:gap-2">
    <svg className="w-5 h-5 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M4 4H10V10H4V4Z" fill="#0078D4" />
      <path d="M14 4H20V10H14V4Z" fill="#5B5FC7" />
      <path d="M4 14H10V20H4V14Z" fill="#00B7C3" />
      <path d="M14 14H20V20H14V14Z" fill="#0078D4" />
    </svg>
    <div className="flex flex-col text-left">
      <span className="text-[8px] font-bold text-slate-500 uppercase tracking-tight leading-none">
        Microsoft
      </span>
      <span className="font-extrabold text-[10px] sm:text-[11px] text-slate-900 leading-tight">
        Dynamics 365
      </span>
    </div>
  </div>
);

const OdooLogo = () => (
  <div className="flex items-center justify-center">
    <span className="font-black text-lg sm:text-xl text-[#714B67] tracking-tight lowercase">
      odoo
    </span>
  </div>
);

const softwareList = [
  { id: 'netsuite', name: 'Oracle NetSuite', component: NetSuiteLogo, angle: -90, speed: '2.4s' },
  { id: 'quickbooks', name: 'Intuit QuickBooks', component: QuickBooksLogo, angle: -45, speed: '2.8s' },
  { id: 'xero', name: 'Xero', component: XeroLogo, angle: 0, speed: '2.2s' },
  { id: 'zohobooks', name: 'Zoho Books', component: ZohoBooksLogo, angle: 45, speed: '3.0s' },
  { id: 'sap', name: 'SAP', component: SAPLogo, angle: 90, speed: '2.5s' },
  { id: 'tally', name: 'Tally', component: TallyLogo, angle: 135, speed: '2.7s' },
  { id: 'dynamics', name: 'Microsoft Dynamics 365', component: DynamicsLogo, angle: 180, speed: '2.3s' },
  { id: 'odoo', name: 'Odoo', component: OdooLogo, angle: 225, speed: '2.9s' },
];

export default function SoftwareNetworkSection() {
  const [hoveredSoftware, setHoveredSoftware] = useState(null);

  // Geometry settings for radial network in SVG space (800x800)
  const center = 400;
  const radius = 290;

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden select-none">
      
      {/* Background Decorative Light Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* ================= Geometric Red Mesh Background Continuation (Flows seamlessly down into GettingStartedSection) ================= */}
      {/* Left Low-Poly Geometric Red Wireframe Continuation */}
      <svg className="absolute left-0 bottom-0 h-3/4 w-[240px] sm:w-[360px] pointer-events-none opacity-40 z-0" viewBox="0 0 300 600" fill="none" preserveAspectRatio="none">
        <polygon points="0,300 90,380 30,500 0,460" stroke="#FF1E43" strokeWidth="1.2" fill="url(#redGlowNetLeft1)" />
        <polygon points="90,380 240,440 120,600 0,600" stroke="#FF1E43" strokeWidth="1.2" fill="url(#redGlowNetLeft2)" />
        <polygon points="0,600 120,600 40,440 0,380" stroke="#FF1E43" strokeWidth="1.2" fill="none" />
        <defs>
          <radialGradient id="redGlowNetLeft1" cx="0%" cy="100%" r="100%">
            <stop offset="0%" stopColor="#FF1E43" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="redGlowNetLeft2" cx="30%" cy="80%" r="80%">
            <stop offset="0%" stopColor="#FF0033" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Right Low-Poly Geometric Red Wireframe Continuation */}
      <svg className="absolute right-0 bottom-0 h-3/4 w-[240px] sm:w-[360px] pointer-events-none opacity-40 z-0" viewBox="0 0 300 600" fill="none" preserveAspectRatio="none">
        <polygon points="300,300 210,380 270,500 300,460" stroke="#FF1E43" strokeWidth="1.2" fill="url(#redGlowNetRight1)" />
        <polygon points="210,380 60,440 180,600 300,600" stroke="#FF1E43" strokeWidth="1.2" fill="url(#redGlowNetRight2)" />
        <polygon points="300,600 180,600 260,440 300,380" stroke="#FF1E43" strokeWidth="1.2" fill="none" />
        <defs>
          <radialGradient id="redGlowNetRight1" cx="100%" cy="100%" r="100%">
            <stop offset="0%" stopColor="#FF1E43" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="redGlowNetRight2" cx="70%" cy="80%" r="80%">
            <stop offset="0%" stopColor="#FF0033" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <div className="max-w-[1380px] mx-auto px-3 sm:px-5 lg:px-6 relative z-10">

        {/* 2-Column Split: Left Side Heading & Content | Right Side Logos Network Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
          
          {/* ================= LEFT COLUMN: Heading & Description ================= */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            <h2 className="alpha-h2 font-bold text-[#1B2A4A] tracking-tight">
              You choose the software, <span className="text-[#3B82F6] whitespace-nowrap">We bring the expertise</span>
            </h2>
            <p className="alpha-large-body text-slate-600 font-normal mt-4 sm:mt-6 leading-relaxed">
              Because your accounting solution should adapt to you, not the <span className="whitespace-nowrap">other way around.</span>
            </p>

            {/* Feature Highlights */}
            <div className="mt-6 sm:mt-8 space-y-3.5 text-left">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-blue-50 text-[#3B82F6] flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-slate-700 font-bold text-sm sm:text-base">Any Software. No Restrictions.</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-blue-50 text-[#3B82F6] flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-slate-700 font-bold text-sm sm:text-base">Seamless Integration With Your Processes.</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-blue-50 text-[#3B82F6] flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-slate-700 font-bold text-sm sm:text-base">Expert People Behind the Technology</span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: Circular Software Integration Network Diagram ================= */}
          <div className="lg:col-span-7 flex justify-center items-center w-full">
            
            {/* Desktop & Tablet Circular Network Diagram (800x800 scaling viewBox) */}
            <div className="relative w-full max-w-[650px] lg:max-w-[700px] aspect-square mx-auto hidden sm:block">
              
              {/* SVG Vector Connections Layer */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 800 800">
                <defs>
                  {/* Neon Blue Glow Filter for Data Nodes on Light Background */}
                  <filter id="glow-neon-light" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {softwareList.map((item) => {
                  const angleRad = (item.angle * Math.PI) / 180;
                  const targetX = center + radius * Math.cos(angleRad);
                  const targetY = center + radius * Math.sin(angleRad);

                  const isHovered = hoveredSoftware === item.id;

                  return (
                    <g key={item.id}>
                      {/* Dashed Vector Connecting Ray */}
                      <line
                        x1={center}
                        y1={center}
                        x2={targetX}
                        y2={targetY}
                        stroke={isHovered ? '#2563EB' : '#94A3B8'}
                        strokeWidth={isHovered ? '3.5' : '1.8'}
                        strokeDasharray={isHovered ? '8 4' : '5 5'}
                        strokeOpacity={isHovered ? '1' : '0.45'}
                        className="transition-all duration-300"
                      />

                      {/* Primary Moving Blue Data Node */}
                      <circle
                        r={isHovered ? '7' : '5'}
                        fill={isHovered ? '#2563EB' : '#3B82F6'}
                        filter="url(#glow-neon-light)"
                      >
                        <animate
                          attributeName="cx"
                          values={`${targetX};${center}`}
                          dur={isHovered ? '1.2s' : item.speed}
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="cy"
                          values={`${targetY};${center}`}
                          dur={isHovered ? '1.2s' : item.speed}
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Secondary Staggered Moving Blue Data Node */}
                      <circle
                        r={isHovered ? '5' : '3.5'}
                        fill="#60A5FA"
                        filter="url(#glow-neon-light)"
                        opacity="0.8"
                      >
                        <animate
                          attributeName="cx"
                          values={`${targetX};${center}`}
                          dur={isHovered ? '1.2s' : item.speed}
                          begin="1.1s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="cy"
                          values={`${targetY};${center}`}
                          dur={isHovered ? '1.2s' : item.speed}
                          begin="1.1s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </g>
                  );
                })}
              </svg>

              {/* Central Hub Component: Alphasure */}
              <div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-full bg-white border-4 border-blue-500/30 shadow-[0_16px_50px_rgba(37,99,235,0.18)] flex flex-col items-center justify-center p-5 transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(37,99,235,0.3)]"
              >
                {/* Alphasure Brand Logo Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-1 flex items-center justify-center">
                  <img
                    src="/images/logo-exact-clean.png"
                    alt="Alphasure Logo"
                    className="w-full h-full object-contain filter drop-shadow-md"
                  />
                </div>

                <span className="text-xl sm:text-2xl font-black text-[#1B2A4A] tracking-tight">
                  Alphasure
                </span>
              </div>

              {/* 8 Surrounding Software Nodes */}
              {softwareList.map((item) => {
                const angleRad = (item.angle * Math.PI) / 180;
                const leftPct = 50 + (radius / 400) * 50 * Math.cos(angleRad);
                const topPct = 50 + (radius / 400) * 50 * Math.sin(angleRad);

                const LogoComponent = item.component;
                const isHovered = hoveredSoftware === item.id;

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredSoftware(item.id)}
                    onMouseLeave={() => setHoveredSoftware(null)}
                    style={{
                      left: `${leftPct}%`,
                      top: `${topPct}%`,
                    }}
                    className={`group absolute z-10 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] sm:w-[125px] sm:h-[125px] rounded-full bg-white border-2 transition-all duration-300 cursor-pointer flex items-center justify-center p-3 ${
                      isHovered
                        ? 'border-blue-500 shadow-[0_12px_35px_rgba(37,99,235,0.25)] scale-125 -translate-y-3 z-30 ring-4 ring-blue-500/20'
                        : 'border-slate-200/90 shadow-md hover:shadow-xl hover:border-blue-400'
                    }`}
                  >
                    <div className="transform transition-transform duration-300 group-hover:scale-110">
                      <LogoComponent />
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Mobile Adaptive Layout */}
            <div className="sm:hidden flex flex-col items-center gap-6 w-full">
              {/* Mobile Central Hub */}
              <div className="w-[160px] h-[160px] rounded-full bg-white border-4 border-blue-400/40 shadow-xl flex flex-col items-center justify-center p-4">
                <div className="w-12 h-12 mb-1">
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                    <path d="M50 10 L88 82 H12 Z" fill="#1D70F5" />
                    <path d="M32 82 C42 62, 58 52, 74 42" stroke="white" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-xl font-black text-[#1B2A4A]">
                  Alphasure
                </span>
              </div>

              {/* Mobile Software Grid */}
              <div className="grid grid-cols-2 gap-3 w-full">
                {softwareList.map((item) => {
                  const LogoComponent = item.component;
                  return (
                    <div
                      key={item.id}
                      className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-center h-20 shadow-md"
                    >
                      <LogoComponent />
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

