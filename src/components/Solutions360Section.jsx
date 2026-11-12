import React, { useState } from 'react';
import { 
  ArrowLeft,
  ArrowRight,
  FileText, 
  Briefcase, 
  Globe, 
  Scale, 
  Calculator, 
  ShieldCheck
} from 'lucide-react';
import './Solutions360Section.css';

export const SOLUTIONS_360_ITEMS = [
  {
    id: 'gst-customs',
    title: 'GST & Customs',
    icon: FileText,
    isGrouped: true,
    startDeg: -61,
    endDeg: -44,
    midDeg: -52.5,
    groups: [
      {
        label: 'A) GST –',
        pointers: [
          'GST Refund',
          'Health check',
          'HSN Classification, Advisory and Litigation Support',
          'GST Assessments, Audits & Investigations'
        ]
      },
      {
        label: 'B) Customs –',
        pointers: [
          'Trade compliance advisory support',
          'Classification of goods',
          'Regulatory updates & implementation',
          'Customs departmental audit',
          'Health check of import/export transactions',
          'Related Party import compliance',
          'RoDTEP scrip purchase assistance',
          'Duty Drawback – Brand rate',
          'Vendor drawback',
          'Import License',
          'BOE/SB amendment',
          'Custom duty refund',
          'Import of goods at concessional rate'
        ]
      }
    ]
  },
  {
    id: 'ifrs',
    title: 'IFRS',
    icon: Globe,
    isGrouped: false,
    startDeg: -40,
    endDeg: -23,
    midDeg: -31.5,
    pointers: [
      'Ind AS / IFRS / US GAAP conversion',
      'IPO reporting (Main Board and SME)',
      'ESOP Accounting'
    ]
  },
  {
    id: 'm-and-a',
    title: 'M&A',
    icon: Briefcase,
    isGrouped: false,
    startDeg: -19,
    endDeg: -2,
    midDeg: -10.5,
    pointers: [
      'Corporate Structuring',
      'Regulatory Advisory',
      'Equity and Debt Fundraising',
      'International Taxation'
    ]
  },
  {
    id: 'corporate-legal',
    title: 'Corporate Legal',
    icon: Scale,
    isGrouped: false,
    startDeg: 2,
    endDeg: 19,
    midDeg: 10.5,
    pointers: [
      'Founders Agreements',
      'Start up Advisory',
      'Labor & Employment Law',
      'Commercial Agreements'
    ]
  },
  {
    id: 'transfer-pricing',
    title: 'Transfer Pricing',
    icon: ShieldCheck,
    isGrouped: false,
    startDeg: 23,
    endDeg: 40,
    midDeg: 31.5,
    pointers: [
      'TP Benchmarking Study',
      'TP Assessment support',
      'Planning study for price / margin setting',
      'Agreement review / drafting support'
    ]
  },
  {
    id: 'payroll',
    title: 'Payroll',
    icon: Calculator,
    isGrouped: false,
    startDeg: 44,
    endDeg: 61,
    midDeg: 52.5,
    pointers: [
      'Payroll Outsourcing',
      'Statutory Compliance',
      'Leave Management',
      'Employer of Record'
    ]
  }
];

export default function Solutions360Section({ onOpenModal }) {
  // activeItemId is null at the initial phase -> shows "Your Business"
  const [activeItemId, setActiveItemId] = useState(null);
  // Hovered item tracking for petal & node highlighting
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const activeItem = SOLUTIONS_360_ITEMS.find((item) => item.id === activeItemId) || null;

  // Toggle item selection: clicking an active item resets to "Your Business"
  const handleToggleItem = (itemId) => {
    setActiveItemId((prev) => (prev === itemId ? null : itemId));
  };

  // Semicircle Fan Geometry Constants
  // Center of semicircle: cx = 55, cy = 320
  const cx = 55;
  const cy = 320;
  const rTrack = 120; // Concentric arc track
  const rIn = 142;    // Petal inner radius
  const rOut = 348;   // Petal outer radius

  // Helper to compute annular wedge sector with smooth rounded corners
  const getRoundedSectorPath = (startDeg, endDeg, rInner, rOuter, cr = 8) => {
    const toRad = Math.PI / 180;
    const a1 = (startDeg * Math.PI) / 180;
    const a2 = (endDeg * Math.PI) / 180;
    const dAi = cr / rInner;
    const dAo = cr / rOuter;

    const p1x = cx + (rInner + cr) * Math.cos(a1);
    const p1y = cy + (rInner + cr) * Math.sin(a1);
    const p2x = cx + rInner * Math.cos(a1 + dAi);
    const p2y = cy + rInner * Math.sin(a1 + dAi);
    const p3x = cx + rInner * Math.cos(a2 - dAi);
    const p3y = cy + rInner * Math.sin(a2 - dAi);
    const p4x = cx + (rInner + cr) * Math.cos(a2);
    const p4y = cy + (rInner + cr) * Math.sin(a2);
    const p5x = cx + (rOuter - cr) * Math.cos(a2);
    const p5y = cy + (rOuter - cr) * Math.sin(a2);
    const p6x = cx + rOuter * Math.cos(a2 - dAo);
    const p6y = cy + rOuter * Math.sin(a2 - dAo);
    const p7x = cx + rOuter * Math.cos(a1 + dAo);
    const p7y = cy + rOuter * Math.sin(a1 + dAo);
    const p8x = cx + (rOuter - cr) * Math.cos(a1);
    const p8y = cy + (rOuter - cr) * Math.sin(a1);

    const c1x = cx + rInner * Math.cos(a1);
    const c1y = cy + rInner * Math.sin(a1);
    const c2x = cx + rInner * Math.cos(a2);
    const c2y = cy + rInner * Math.sin(a2);
    const c3x = cx + rOuter * Math.cos(a2);
    const c3y = cy + rOuter * Math.sin(a2);
    const c4x = cx + rOuter * Math.cos(a1);
    const c4y = cy + rOuter * Math.sin(a1);

    return `M ${p2x.toFixed(2)},${p2y.toFixed(2)} ` +
           `A ${rInner} ${rInner} 0 0,1 ${p3x.toFixed(2)},${p3y.toFixed(2)} ` +
           `Q ${c2x.toFixed(2)},${c2y.toFixed(2)} ${p4x.toFixed(2)},${p4y.toFixed(2)} ` +
           `L ${p5x.toFixed(2)},${p5y.toFixed(2)} ` +
           `Q ${c3x.toFixed(2)},${c3y.toFixed(2)} ${p6x.toFixed(2)},${p6y.toFixed(2)} ` +
           `A ${rOuter} ${rOuter} 0 0,0 ${p7x.toFixed(2)},${p7y.toFixed(2)} ` +
           `Q ${c4x.toFixed(2)},${c4y.toFixed(2)} ${p8x.toFixed(2)},${p8y.toFixed(2)} ` +
           `L ${p1x.toFixed(2)},${p1y.toFixed(2)} ` +
           `Q ${c1x.toFixed(2)},${c1y.toFixed(2)} ${p2x.toFixed(2)},${p2y.toFixed(2)} Z`;
  };

  // Helper for polar to cartesian
  const getPoint = (deg, r) => {
    const rad = (deg * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad)
    };
  };

  // Track arc from -68deg to +68deg
  const trackStart = getPoint(-68, rTrack);
  const trackEnd = getPoint(68, rTrack);
  const trackPath = `M ${trackStart.x.toFixed(2)},${trackStart.y.toFixed(2)} A ${rTrack} ${rTrack} 0 0,1 ${trackEnd.x.toFixed(2)},${trackEnd.y.toFixed(2)}`;

  return (
    <section 
      className="solutions-360-wrapper select-none border-t border-slate-200/70"
      id="360-solutions"
    >
      {/* 3D Torus Ring Background Decorations in Alphasure Brand Orange */}
      <div className="torus-ring torus-ring-top-left" aria-hidden="true" />
      <div className="torus-ring torus-ring-bottom-left" aria-hidden="true" />

      <div className="max-w-[1360px] mx-auto relative z-10 px-4 sm:px-6 lg:px-8">

        {/* ================= SECTION HEADER: "We Offer 360° Solutions" ================= */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="font-sans font-black text-[#0B192C] text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none">
            We Offer
          </h2>

          <div className="block-3d-orange px-8 sm:px-12 py-3.5 sm:py-4 mt-3 sm:mt-4">
            <span className="font-sans font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-[50px] tracking-tight whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
              360° Solutions
            </span>
          </div>
        </div>

        {/* ================= MAIN INTERACTIVE COMPOSITION (PINTEREST LAYOUT) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ---------------- LEFT COLUMN: DYNAMIC CONTENT CONTAINER ---------------- */}
          {/* Shows "Your business" initially, or the selected practice pointers on click */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">

            {activeItemId === null ? (
              /* ================= INITIAL PHASE: "YOUR BUSINESS" ================= */
              <div className="your-business-card animate-fadeIn">
                
                {/* Main Headline: Exact Authentic Alphasure Copy */}
                <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#0B192C] tracking-tight leading-[1.25] mb-5">
                  Your business shouldn't need a separate service provider for every new requirement.
                </h3>

                {/* Exact Sub-paragraph Copy */}
                <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
                  Whether you are expanding internationally, preparing for an acquisition, facing a tax assessment or simply looking for a better way to manage your finances, Alphasure can help you find the right expertise.
                </p>

              </div>
            ) : (
              /* ================= ACTIVE PHASE: PRACTICE DETAILS CONTAINER ================= */
              <div className="service-details-card animate-fadeIn">
                
                {/* Top Navigation Bar: Back to "Your Business" */}
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-100">
                  <button
                    type="button"
                    onClick={() => setActiveItemId(null)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-500 hover:text-[#FA5A16] transition-colors cursor-pointer group"
                  >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to <strong>"Your Business"</strong></span>
                  </button>
                </div>

                {/* Header with Title & Icon */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FA5A16] to-[#E04808] text-white flex items-center justify-center shadow-md shadow-orange-500/25 shrink-0">
                    {React.createElement(activeItem.icon, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#0B192C] tracking-tight leading-tight">
                      {activeItem.title}
                    </h3>
                  </div>
                </div>

                {/* Exact Verbatim Bullet Pointers Container */}
                <div className="max-h-[380px] overflow-y-auto pr-1 space-y-3.5 custom-scrollbar mb-6">
                  {activeItem.isGrouped ? (
                    /* Grouped Pointers (GST & Customs) */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {activeItem.groups.map((grp, gIdx) => (
                        <div key={gIdx} className="rounded-2xl p-4 bg-orange-50/30 border border-orange-100/80">
                          <div className="text-xs font-extrabold text-[#FA5A16] tracking-wide mb-2.5 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#FA5A16]" />
                            <span>{grp.label}</span>
                          </div>
                          <div className="space-y-1.5">
                            {grp.pointers.map((pt, pIdx) => (
                              <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-[#0B192C] leading-snug">
                                <span className="text-[#FA5A16] font-black text-sm shrink-0 leading-none mt-0.5">•</span>
                                <span>{pt}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Standard Pointers List (IFRS, M&A, Corporate Legal, TP, Payroll) - Clean open layout with no blue container */
                    <div className="py-2.5 px-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                        {activeItem.pointers.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-[#0B192C] leading-snug">
                            <span className="text-[#FA5A16] font-black text-base shrink-0 leading-none mt-0.5">•</span>
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Action Footer */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3.5 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setActiveItemId(null)}
                    className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                  >
                    ← Close Details
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (typeof onOpenModal === 'function') {
                        onOpenModal('call');
                      }
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FA5A16] hover:bg-[#EA4B07] text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-orange-500/25 transition-all transform hover:scale-[1.02] cursor-pointer"
                  >
                    <span>Speak to {activeItem.title} Specialist</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            )}

          </div>

          {/* ---------------- RIGHT COLUMN: SEMICIRCLE ARC & 6 FAN PETAL TILES ---------------- */}
          {/* Inspired directly by the Pinterest design: circular concentric arc + radiating petal cards */}
          <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center">
            
            <div className="relative w-full max-w-[460px] flex items-center justify-center">
              
              {/* Subtle background glow */}
              <div 
                className="absolute inset-0 rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(250,90,22,0.35) 0%, rgba(250,90,22,0) 70%)'
                }}
              />

              {/* The SVG Semicircle Fan */}
              <svg 
                className="w-full h-auto pinterest-fan-svg"
                viewBox="0 0 450 640" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Active Petal Gradient (Alphasure Brand Orange) */}
                  <linearGradient id="activePetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF7A3E" />
                    <stop offset="50%" stopColor="#FA5A16" />
                    <stop offset="100%" stopColor="#D84204" />
                  </linearGradient>

                  {/* Concentric Arc Track Gradient */}
                  <linearGradient id="trackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FA5A16" />
                    <stop offset="50%" stopColor="#FF854D" />
                    <stop offset="100%" stopColor="#FA5A16" />
                  </linearGradient>

                  {/* Soft Drop Shadow for Inactive Petals */}
                  <filter id="petalShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="2" dy="8" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.08" />
                  </filter>

                  {/* Prominent Glow Shadow for Active Petal */}
                  <filter id="activePetalShadow" x="-25%" y="-25%" width="150%" height="150%">
                    <feDropShadow dx="3" dy="10" stdDeviation="12" floodColor="#FA5A16" floodOpacity="0.35" />
                  </filter>

                  {/* Subtle Hover Shadow */}
                  <filter id="hoverPetalShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="2" dy="8" stdDeviation="8" floodColor="#FA5A16" floodOpacity="0.2" />
                  </filter>

                  {/* Central Disc Shadow */}
                  <filter id="hubShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="2" dy="6" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.12" />
                  </filter>
                </defs>

                {/* 1. Semicircular Concentric Guide Arc */}
                <path
                  d={trackPath}
                  stroke="url(#trackGrad)"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  opacity="0.85"
                />

                {/* 2. Top and Bottom Track Terminal Pips */}
                <circle cx={trackStart.x} cy={trackStart.y} r="3.5" fill="#FA5A16" />
                <circle cx={trackEnd.x} cy={trackEnd.y} r="3.5" fill="#FA5A16" />

                {/* 3. The 6 Radiating Fan Petals on the Right */}
                {SOLUTIONS_360_ITEMS.map((item, idx) => {
                  const isActive = activeItemId === item.id;
                  const isHovered = hoveredItemId === item.id;
                  
                  // Radial displacement vector for active or hover pop
                  const midRad = (item.midDeg * Math.PI) / 180;
                  const popDist = isActive ? 12 : isHovered ? 6 : 0;
                  const dx = popDist * Math.cos(midRad);
                  const dy = popDist * Math.sin(midRad);

                  // Sector path with smooth rounded corners
                  const sectorPath = getRoundedSectorPath(item.startDeg, item.endDeg, rIn, rOut, 8);

                  // Node dot on the concentric track
                  const nodePt = getPoint(item.midDeg, rTrack);
                  // Connector line from node dot to inner petal edge
                  const petalInnerPt = getPoint(item.midDeg, rIn - 1);

                  // Text center coordinate along the radius
                  const rText = (rIn + rOut) / 2;
                  const textPt = getPoint(item.midDeg, rText);

                  return (
                    <g key={item.id} className="fan-petal-group">
                      
                      {/* Radial Connector Line */}
                      <line
                        x1={nodePt.x}
                        y1={nodePt.y}
                        x2={petalInnerPt.x + dx}
                        y2={petalInnerPt.y + dy}
                        stroke={isActive || isHovered ? '#FA5A16' : '#CBD5E1'}
                        strokeWidth={isActive ? '2.5' : '1.5'}
                        strokeDasharray={isActive ? 'none' : '3 3'}
                        className="transition-all duration-300"
                      />

                      {/* Node Dot on Concentric Track */}
                      <g 
                        className="cursor-pointer outline-none focus:outline-none" 
                        style={{ outline: 'none' }}
                        onClick={() => handleToggleItem(item.id)}
                      >
                        {isActive && (
                          <circle
                            cx={nodePt.x}
                            cy={nodePt.y}
                            r="11"
                            fill="#FA5A16"
                            opacity="0.28"
                            className="animate-ping"
                          />
                        )}
                        <circle
                          cx={nodePt.x}
                          cy={nodePt.y}
                          r={isActive ? 8 : isHovered ? 7 : 5}
                          fill={isActive ? '#FA5A16' : '#FFFFFF'}
                          stroke={isActive ? '#FFFFFF' : isHovered ? '#FA5A16' : '#94A3B8'}
                          strokeWidth="2.5"
                          className="transition-all duration-300"
                        />
                      </g>

                      {/* Petal Card Wedge */}
                      <g
                        transform={popDist > 0 ? `translate(${dx.toFixed(2)}, ${dy.toFixed(2)})` : undefined}
                        style={{
                          transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                          cursor: 'pointer',
                          outline: 'none'
                        }}
                        className="outline-none focus:outline-none focus-visible:outline-none select-none"
                        onClick={() => handleToggleItem(item.id)}
                        onMouseEnter={() => setHoveredItemId(item.id)}
                        onMouseLeave={() => setHoveredItemId(null)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            handleToggleItem(item.id);
                          }
                        }}
                      >
                        {/* Wedge Sector Background */}
                        <path
                          d={sectorPath}
                          fill={isActive ? 'url(#activePetalGrad)' : isHovered ? '#FFF9F6' : '#FFFFFF'}
                          stroke={isActive ? '#FA5A16' : isHovered ? '#FA5A16' : '#E2E8F0'}
                          strokeWidth={isActive ? '2.5' : isHovered ? '2' : '1.5'}
                          strokeLinejoin="round"
                          filter={isActive ? 'url(#activePetalShadow)' : isHovered ? 'url(#hoverPetalShadow)' : 'url(#petalShadow)'}
                          className="transition-all duration-300"
                        />

                        {/* Petal Text Label - perfectly centered and aligned with the wedge angle */}
                        <g 
                          transform={`translate(${textPt.x.toFixed(2)}, ${textPt.y.toFixed(2)}) rotate(${item.midDeg.toFixed(2)})`}
                          className="select-none pointer-events-none"
                        >
                          <text
                            x="0"
                            y="0"
                            textAnchor="middle"
                            dominantBaseline="central"
                            className="select-none pointer-events-none"
                            fill={isActive ? '#FFFFFF' : '#0B192C'}
                            fontSize={item.title.length > 12 ? '13.5' : '14.5'}
                            fontWeight="900"
                            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                            letterSpacing="-0.01em"
                          >
                            {item.title}
                          </text>
                        </g>

                      </g>

                    </g>
                  );
                })}

                {/* 4. Center Semi-Disc Hub on the Left with Alphasure Logo */}
                <g 
                  className="cursor-pointer group" 
                  onClick={() => setActiveItemId(null)}
                  style={{ outline: 'none' }}
                  role="button"
                  tabIndex={-1}
                  title="Reset to Overview"
                >
                  {/* Outer White Hub Disc */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r="44"
                    fill="#FFFFFF"
                    stroke="#E2E8F0"
                    strokeWidth="2.5"
                    filter="url(#hubShadow)"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Alphasure Brand Logo Symbol */}
                  <image
                    href="/images/alphasure-logo-v3.png"
                    x={cx - 24}
                    y={cy - 21}
                    width="48"
                    height="42"
                    preserveAspectRatio="xMidYMid meet"
                    className="transition-transform duration-300 group-hover:scale-110 pointer-events-none"
                  />
                </g>

              </svg>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
