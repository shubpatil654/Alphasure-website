import React, { useState } from 'react';
import { 
  ArrowLeft,
  ArrowRight,
  FileText, 
  Briefcase, 
  Globe, 
  Scale, 
  Calculator, 
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
  Award,
  ChevronRight
} from 'lucide-react';
import './Solutions360Section.css';

export const SOLUTIONS_360_ITEMS = [
  {
    id: 'gst-customs',
    title: 'GST & Customs',
    fullTitle: 'GST & Customs Advisory',
    category: 'Taxation & Foreign Trade',
    badge: '17 Core Offerings',
    icon: FileText,
    isGrouped: true,
    startDeg: -61,
    endDeg: -44,
    midDeg: -52.5,
    summary: 'Comprehensive indirect tax advisory, departmental assessments, refunds and end-to-end import/export trade compliance.',
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
    fullTitle: 'Financial Reporting Standards',
    category: 'Accounting & Conversions',
    badge: '3 Conversion Pillars',
    icon: Globe,
    isGrouped: false,
    startDeg: -40,
    endDeg: -23,
    midDeg: -31.5,
    summary: 'Global financial reporting compliance, multi-standard GAAP conversions, and IPO accounting readiness.',
    pointers: [
      'Ind AS / IFRS / US GAAP conversion',
      'IPO reporting (Main Board and SME)',
      'ESOP Accounting'
    ]
  },
  {
    id: 'm-and-a',
    title: 'M&A',
    fullTitle: 'Mergers & Acquisitions',
    category: 'Corporate Restructuring',
    badge: '4 Strategic Pillars',
    icon: Briefcase,
    isGrouped: false,
    startDeg: -19,
    endDeg: -2,
    midDeg: -10.5,
    summary: 'Strategic deal structuring, tax-optimized corporate reorganizations, regulatory clearances, and funding assistance.',
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
    fullTitle: 'Corporate Legal & Governance',
    category: 'Commercial Contracts',
    badge: '4 Legal Pillars',
    icon: Scale,
    isGrouped: false,
    startDeg: 2,
    endDeg: 19,
    midDeg: 10.5,
    summary: 'Robust governance documentation, commercial contract drafting, startup legal hygiene, and employment law support.',
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
    fullTitle: 'International Transfer Pricing',
    category: 'Cross-Border TP',
    badge: '4 TP Compliance Pillars',
    icon: ShieldCheck,
    isGrouped: false,
    startDeg: 23,
    endDeg: 40,
    midDeg: 31.5,
    summary: 'Arm’s length margin benchmarking, transfer pricing documentation, intercompany agreements, and audit defence.',
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
    fullTitle: 'Human Resources & Payroll',
    category: 'Employer of Record (EOR)',
    badge: '4 Operations Pillars',
    icon: Calculator,
    isGrouped: false,
    startDeg: 44,
    endDeg: 61,
    midDeg: 52.5,
    summary: 'Accurate monthly payroll operations, statutory compliance (PF, ESI, PT), leave administration, and EOR solutions.',
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
  // Right semicircle centered on the left: cx=55, cy=320
  const cx = 55;
  const cy = 320;
  const rTrack = 122; // Concentric arc track
  const rIn = 148;    // Petal inner radius
  const rOut = 335;   // Petal outer radius

  // Helper to compute annular wedge sector path
  const getSectorPath = (startDeg, endDeg, rInner, rOuter) => {
    const rad1 = (startDeg * Math.PI) / 180;
    const rad2 = (endDeg * Math.PI) / 180;

    const p1x = cx + rInner * Math.cos(rad1);
    const p1y = cy + rInner * Math.sin(rad1);
    const p2x = cx + rInner * Math.cos(rad2);
    const p2y = cy + rInner * Math.sin(rad2);
    const p3x = cx + rOuter * Math.cos(rad2);
    const p3y = cy + rOuter * Math.sin(rad2);
    const p4x = cx + rOuter * Math.cos(rad1);
    const p4y = cy + rOuter * Math.sin(rad1);

    return `M ${p1x.toFixed(2)},${p1y.toFixed(2)} A ${rInner} ${rInner} 0 0,1 ${p2x.toFixed(2)},${p2y.toFixed(2)} L ${p3x.toFixed(2)},${p3y.toFixed(2)} A ${rOuter} ${rOuter} 0 0,0 ${p4x.toFixed(2)},${p4y.toFixed(2)} Z`;
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
          {/* "We Offer" in font matching the rest of the website */}
          <h2 className="font-sans font-black text-[#0B192C] text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none">
            We Offer
          </h2>

          {/* "360° Solutions" in 3D orange beveled block */}
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
                
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-[#FA5A16] text-xs font-bold uppercase tracking-wider mb-5">
                  <span className="w-2 h-2 rounded-full bg-[#FA5A16] animate-pulse" />
                  <span>360° Comprehensive Advisory</span>
                </div>

                {/* Main Prominent Headline: "Your Business" */}
                <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0B192C] tracking-tight leading-[1.12] mb-4">
                  Built Around <br className="hidden sm:inline" />
                  <span className="text-[#FA5A16]">Your Business.</span>
                </h3>

                {/* Explanatory Copy */}
                <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed mb-6">
                  Your business shouldn't need a separate service provider for every new requirement. From tax assessments and global GAAP conversions to corporate restructuring and payroll compliance, explore how our dedicated specialists support every stage of your growth.
                </p>

                {/* 3 Core Value Highlight Blocks */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-7">
                  <div className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/80 hover:border-orange-200 transition-colors">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FA5A16] block mb-1">
                      01 / Tax & Customs
                    </span>
                    <span className="text-sm font-bold text-[#0B192C] block leading-snug">
                      GST, Customs, Litigation & Refunds
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/80 hover:border-orange-200 transition-colors">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FA5A16] block mb-1">
                      02 / Global Standards
                    </span>
                    <span className="text-sm font-bold text-[#0B192C] block leading-snug">
                      IFRS, Ind AS, US GAAP & TP
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/80 hover:border-orange-200 transition-colors">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FA5A16] block mb-1">
                      03 / Corporate Ops
                    </span>
                    <span className="text-sm font-bold text-[#0B192C] block leading-snug">
                      M&A, Legal & Complete Payroll EOR
                    </span>
                  </div>
                </div>

                {/* Interactive Guidance Prompt */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200/90 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FA5A16] animate-ping" />
                    <span className="text-xs sm:text-sm font-bold text-[#0B192C]">
                      Click any service on the arc to explore its full pointers
                    </span>
                  </div>
                  <span className="text-xs font-black text-[#FA5A16] tracking-wider uppercase hidden sm:inline">
                    6 Practices on the Dial →
                  </span>
                </div>

              </div>
            ) : (
              /* ================= ACTIVE PHASE: PRACTICE DETAILS CONTAINER ================= */
              <div className="service-details-card animate-fadeIn">
                
                {/* Top Navigation Bar: Back to "Your Business" */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <button
                    type="button"
                    onClick={() => setActiveItemId(null)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-500 hover:text-[#FA5A16] transition-colors cursor-pointer group"
                  >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to <strong>"Your Business"</strong></span>
                  </button>

                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#FA5A16] bg-orange-50 px-3 py-1 rounded-full border border-orange-200/60">
                    {activeItem.badge}
                  </span>
                </div>

                {/* Header with Title & Icon */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FA5A16] to-[#E04808] text-white flex items-center justify-center shadow-md shadow-orange-500/25 shrink-0">
                    {React.createElement(activeItem.icon, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#0B192C] tracking-tight leading-tight">
                      {activeItem.title}
                    </h3>
                    <span className="text-xs sm:text-sm font-semibold text-slate-500">
                      {activeItem.fullTitle} — {activeItem.category}
                    </span>
                  </div>
                </div>

                {/* Summary Sentence */}
                <p className="text-xs sm:text-sm text-slate-600 font-medium mb-4 leading-relaxed">
                  {activeItem.summary}
                </p>

                {/* Exact Bullet Pointers Container */}
                <div className="max-h-[380px] overflow-y-auto pr-1 space-y-3.5 custom-scrollbar mb-5">
                  {activeItem.isGrouped ? (
                    /* Grouped Pointers (GST & Customs) */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {activeItem.groups.map((grp, gIdx) => (
                        <div key={gIdx} className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200/80">
                          <div className="text-xs font-extrabold text-[#FA5A16] tracking-wide mb-2.5 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#FA5A16]" />
                            <span>{grp.label}</span>
                          </div>
                          <div className="space-y-1.5">
                            {grp.pointers.map((pt, pIdx) => (
                              <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                                <span className="text-[#FA5A16] font-black text-sm shrink-0 leading-none mt-0.5">•</span>
                                <span>{pt}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Standard Pointers List (IFRS, M&A, Corporate Legal, TP, Payroll) */
                    <div className="bg-slate-50/90 rounded-2xl p-5 border border-slate-200/80">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                        {activeItem.pointers.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                            <span className="text-[#FA5A16] font-black text-sm shrink-0 leading-none mt-0.5">•</span>
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
                viewBox="0 0 440 640" 
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
                  <filter id="petalShadow" x="-15%" y="-15%" width="130%" height="130%">
                    <feDropShadow dx="2" dy="8" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.08" />
                  </filter>

                  {/* Prominent Glow Shadow for Active Petal */}
                  <filter id="activePetalShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="4" dy="12" stdDeviation="14" floodColor="#FA5A16" floodOpacity="0.38" />
                  </filter>

                  {/* Subtle Hover Shadow */}
                  <filter id="hoverPetalShadow" x="-15%" y="-15%" width="130%" height="130%">
                    <feDropShadow dx="3" dy="10" stdDeviation="10" floodColor="#FA5A16" floodOpacity="0.22" />
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

                  // Sector path
                  const sectorPath = getSectorPath(item.startDeg, item.endDeg, rIn, rOut);

                  // Node dot on the concentric track
                  const nodePt = getPoint(item.midDeg, rTrack);
                  // Connector line from node dot to inner petal edge
                  const petalInnerPt = getPoint(item.midDeg, rIn - 2);

                  // Text center coordinate
                  const rText = (rIn + rOut) / 2;
                  const textPt = getPoint(item.midDeg, rText);

                  return (
                    <g key={item.id} className="fan-petal-group">
                      
                      {/* Radial Connector Line */}
                      <line
                        x1={nodePt.x}
                        y1={nodePt.y}
                        x2={petalInnerPt.x + (isActive ? dx * 0.5 : 0)}
                        y2={petalInnerPt.y + (isActive ? dy * 0.5 : 0)}
                        stroke={isActive || isHovered ? '#FA5A16' : '#CBD5E1'}
                        strokeWidth={isActive ? '2.5' : '1.5'}
                        strokeDasharray={isActive ? 'none' : '3 3'}
                        className="transition-all duration-300"
                      />

                      {/* Node Dot on Concentric Track */}
                      <g className="cursor-pointer" onClick={() => handleToggleItem(item.id)}>
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
                          cursor: 'pointer'
                        }}
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

                        {/* Petal Text Label (Rotated slightly to align with fan radius) */}
                        <g 
                          transform={`translate(${textPt.x.toFixed(2)}, ${textPt.y.toFixed(2)}) rotate(${(item.midDeg * 0.35).toFixed(2)})`}
                          className="select-none pointer-events-none"
                        >
                          {/* Index Pill / Number */}
                          <text
                            x="-52"
                            y="-3"
                            fontSize="10"
                            fontWeight="900"
                            textAnchor="middle"
                            fill={isActive ? 'rgba(255,255,255,0.75)' : '#FA5A16'}
                            className="font-mono tracking-tight"
                          >
                            0{idx + 1}
                          </text>

                          {/* Primary Title */}
                          <text
                            x="8"
                            y="-3"
                            fontSize={item.title.length > 12 ? '13' : '14.5'}
                            fontWeight="900"
                            textAnchor="middle"
                            fill={isActive ? '#FFFFFF' : '#0B192C'}
                            className="font-sans tracking-tight"
                          >
                            {item.title}
                          </text>

                          {/* Sub-label */}
                          <text
                            x="0"
                            y="14"
                            fontSize="9"
                            fontWeight="700"
                            textAnchor="middle"
                            fill={isActive ? 'rgba(255,255,255,0.85)' : '#64748B'}
                            className="font-sans tracking-normal uppercase"
                          >
                            {item.category.split('&')[0].trim()}
                          </text>
                        </g>

                      </g>

                    </g>
                  );
                })}

                {/* 4. Center Semi-Disc Hub on the Left */}
                <g className="cursor-pointer" onClick={() => setActiveItemId(null)}>
                  {/* Outer White Hub Disc */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r="46"
                    fill="#FFFFFF"
                    stroke="#E2E8F0"
                    strokeWidth="2.5"
                    filter="url(#hubShadow)"
                  />
                  {/* Inner Orange Hub Accent */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r="18"
                    fill="#FA5A16"
                  />
                  {/* Specular Pip */}
                  <circle
                    cx={cx - 3}
                    cy={cy - 3}
                    r="4"
                    fill="#FFFFFF"
                    opacity="0.85"
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
