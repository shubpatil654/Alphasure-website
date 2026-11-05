import React, { useState } from 'react';
import { 
  ChevronRight, Sparkles, 
  FileText, Briefcase, Globe, Scale, Calculator, ShieldCheck
} from 'lucide-react';
import './Solutions360Section.css';

export const SOLUTIONS_360_ITEMS = [
  {
    id: 'gst-customs',
    title: 'GST & Customs',
    fullTitle: 'GST & Customs- Offerings provided',
    degree: 20,
    icon: FileText,
    isGrouped: true,
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
    fullTitle: 'IFRS- Offerings provided',
    degree: 48,
    icon: Globe,
    isGrouped: false,
    pointers: [
      'Ind AS / IFRS / US GAAP conversion',
      'IPO reporting (Main Board and SME)',
      'ESOP Accounting'
    ]
  },
  {
    id: 'm-and-a',
    title: 'M&A',
    fullTitle: 'M&A- Offerings provided',
    degree: 76,
    icon: Briefcase,
    isGrouped: false,
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
    fullTitle: 'Corporate Legal- Offerings provided',
    degree: 104,
    icon: Scale,
    isGrouped: false,
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
    fullTitle: 'Transfer Pricing- Offerings provided',
    degree: 132,
    icon: ShieldCheck,
    isGrouped: false,
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
    fullTitle: 'Payroll- Offerings provided',
    degree: 160,
    icon: Calculator,
    isGrouped: false,
    pointers: [
      'Payroll Outsourcing',
      'Statutory Compliance',
      'Leave Management',
      'Employer of Record'
    ]
  }
];

export default function Solutions360Section({ onOpenModal }) {
  // Active selected item (defaults to GST & Customs or M&A)
  const [activeItemId, setActiveItemId] = useState('gst-customs');
  // State for expanded tiles (allows multiple or single expansion)
  const [expandedItems, setExpandedItems] = useState(['gst-customs']);

  const activeItem = SOLUTIONS_360_ITEMS.find(item => item.id === activeItemId) || SOLUTIONS_360_ITEMS[0];
  const activeAngle = activeItem.degree;

  // Toggle item expansion
  const toggleItemExpansion = (itemId) => {
    setActiveItemId(itemId);
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId) 
        : [...prev, itemId]
    );
  };

  // Expand or collapse all tiles
  const areAllExpanded = expandedItems.length === SOLUTIONS_360_ITEMS.length;
  const toggleExpandAll = () => {
    if (areAllExpanded) {
      setExpandedItems([activeItemId]);
    } else {
      setExpandedItems(SOLUTIONS_360_ITEMS.map(i => i.id));
    }
  };

  // Protractor geometry constants
  // Semicircle with flat edge on left (x=40), center (cx=40, cy=250), radius R=210
  const cx = 40;
  const cy = 250;
  const radius = 210;

  // Degrees list for protractor dial
  const degrees = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180];

  // Helper for polar to cartesian coordinates
  const getCoordinates = (deg, r) => {
    const rad = (deg - 90) * (Math.PI / 180);
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad)
    };
  };

  return (
    <section 
      className="solutions-360-wrapper select-none border-t border-slate-200/70"
      id="360-solutions"
    >
      {/* 3D Torus Ring Background Decorations in Alphasure Brand Orange */}
      <div className="torus-ring torus-ring-top-left" aria-hidden="true" />
      <div className="torus-ring torus-ring-bottom-left" aria-hidden="true" />

      <div className="max-w-[1340px] mx-auto relative z-10">

        {/* ================= SECTION HEADER: "We Offer 360° Solutions" ================= */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 lg:mb-16">
          
          {/* Subtle Top Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200/80 text-[#FA5A16] text-[11px] sm:text-xs font-extrabold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FA5A16]" />
            <span>Integrated Financial &amp; Advisory Ecosystem</span>
          </div>

          {/* "We Offer" in 3D dark charcoal typography */}
          <h2 className="text-3d-dark text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none">
            We Offer
          </h2>

          {/* "360° Solutions" in 3D orange beveled block */}
          <div className="block-3d-orange px-8 sm:px-12 py-3.5 sm:py-4 mt-3 sm:mt-4">
            <span className="text-3d-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight whitespace-nowrap">
              360° Solutions
            </span>
          </div>
        </div>

        {/* ================= MAIN INTERACTIVE COMPOSITION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ---------------- LEFT COLUMN: 6 TILES WITH EXACT POINTERS ---------------- */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col space-y-3.5">
            
            {/* Quick action bar: Expand/Collapse All */}
            <div className="flex items-center justify-between pb-1 px-1">
              <span className="text-xs font-bold text-slate-500">
                Click on any tile to view its pointers
              </span>
              <button
                type="button"
                onClick={toggleExpandAll}
                className="text-xs font-bold text-[#FA5A16] hover:text-[#C73E06] hover:underline cursor-pointer transition-colors"
              >
                {areAllExpanded ? 'Collapse All' : 'Expand All Pointers'}
              </button>
            </div>

            {SOLUTIONS_360_ITEMS.map((item) => {
              const isActive = item.id === activeItemId;
              const isExpanded = expandedItems.includes(item.id);
              const IconComponent = item.icon;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveItemId(item.id)}
                  className={`offering-item-card ${isActive ? 'is-active' : ''}`}
                >
                  {/* Clickable Header Bar */}
                  <div
                    onClick={() => toggleItemExpansion(item.id)}
                    className="offering-item-header cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        toggleItemExpansion(item.id);
                      }
                    }}
                  >
                    <div className="flex items-center min-w-0 pr-2">
                      {/* Left icon badge */}
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 transition-colors shrink-0 ${
                        isActive 
                          ? 'bg-white/20 text-white' 
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>

                      {/* Title: Same font size and color across all 6 tiles */}
                      <span className="offering-item-title">
                        {item.title}
                      </span>
                      <span className="offering-item-suffix">
                        - Offerings provided
                      </span>
                    </div>

                    {/* Expand/Collapse Chevron Indicator */}
                    <div className="offering-chevron-badge">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Pointers Container: Visible when expanded */}
                  {isExpanded && (
                    <div className="offering-pointers-box">
                      {item.isGrouped ? (
                        /* Grouped Pointers (GST & Customs) */
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {item.groups.map((grp, gIdx) => (
                            <div 
                              key={gIdx}
                              className="bg-white rounded-xl p-3.5 border border-slate-200/90 shadow-2xs"
                            >
                              <div className="pointer-group-title">
                                <span className="w-2 h-2 rounded-full bg-[#FA5A16]" />
                                <span>{grp.label}</span>
                              </div>
                              <div className="space-y-1.5 pt-0.5">
                                {grp.pointers.map((pt, pIdx) => (
                                  <div key={pIdx} className="pointer-list-item">
                                    <span className="pointer-dot">•</span>
                                    <span>{pt}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        /* Standard Pointers List (IFRS, M&A, Corporate Legal, TP, Payroll) */
                        <div className="bg-white rounded-xl p-3.5 border border-slate-200/90 shadow-2xs">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                            {item.pointers.map((pt, pIdx) => (
                              <div key={pIdx} className="pointer-list-item">
                                <span className="pointer-dot">•</span>
                                <span>{pt}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                </div>
              );
            })}

          </div>

          {/* ---------------- RIGHT COLUMN: 180° PROTRACTOR DIAL ---------------- */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center justify-center lg:sticky lg:top-28">
            
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] flex items-center justify-center">
              
              {/* Subtle background glow behind dial */}
              <div 
                className="absolute inset-0 rounded-full blur-3xl opacity-35 pointer-events-none transition-all duration-500"
                style={{
                  background: 'radial-gradient(circle, rgba(250,90,22,0.4) 0%, rgba(250,90,22,0) 70%)'
                }}
              />

              {/* The SVG Protractor (Matching reference image) */}
              <svg 
                className="w-full h-auto protractor-svg-wrapper"
                viewBox="0 0 295 500" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Subtle 3D Protractor Face Gradient */}
                  <linearGradient id="protractorFaceGrad" x1="40" y1="40" x2="260" y2="250" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="50%" stopColor="#FAFBFD" />
                    <stop offset="100%" stopColor="#EEF2F6" />
                  </linearGradient>

                  {/* Outer Rim Chrome Gradient */}
                  <linearGradient id="protractorRimGrad" x1="40" y1="40" x2="260" y2="460" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#CBD5E1" />
                    <stop offset="35%" stopColor="#F8FAFC" />
                    <stop offset="70%" stopColor="#94A3B8" />
                    <stop offset="100%" stopColor="#E2E8F0" />
                  </linearGradient>

                  {/* Active Needle Gradient (Alphasure Orange) */}
                  <linearGradient id="needleOrangeGrad" x1="40" y1="250" x2="260" y2="250" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FA5A16" />
                    <stop offset="100%" stopColor="#E04808" />
                  </linearGradient>

                  {/* Soft Drop Shadow for Protractor */}
                  <filter id="dialShadow" x="-10" y="-10" width="320" height="520" filterUnits="userSpaceOnUse">
                    <feDropShadow dx="4" dy="12" stdDeviation="12" floodColor="#0F172A" floodOpacity="0.14" />
                  </filter>

                  {/* Needle tip glow */}
                  <filter id="needleGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#FA5A16" floodOpacity="0.6" />
                  </filter>
                </defs>

                {/* 1. Semicircular Protractor Body & Beveled Rim */}
                <path
                  d={`M ${cx},${cy - radius} A ${radius},${radius} 0 0,1 ${cx},${cy + radius} L ${cx},${cy - radius} Z`}
                  fill="url(#protractorFaceGrad)"
                  stroke="url(#protractorRimGrad)"
                  strokeWidth="6"
                  filter="url(#dialShadow)"
                />

                {/* 2. Inner Dial Concentric Arc */}
                <path
                  d={`M ${cx},${cy - (radius - 38)} A ${radius - 38},${radius - 38} 0 0,1 ${cx},${cy + (radius - 38)}`}
                  fill="none"
                  stroke="#CBD5E1"
                  strokeWidth="1.2"
                />

                {/* 3. Outer Tick Track Arc */}
                <path
                  d={`M ${cx},${cy - (radius - 1)} A ${radius - 1},${radius - 1} 0 0,1 ${cx},${cy + (radius - 1)}`}
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth="1.2"
                />

                {/* 4. Fine Radiating Rays (Every 10 degrees) */}
                {degrees.map((deg) => {
                  const pStart = getCoordinates(deg, 26);
                  const pEnd = getCoordinates(deg, radius - 40);
                  const isCurrentTarget = Math.abs(deg - activeAngle) < 12;

                  return (
                    <line
                      key={`ray-${deg}`}
                      x1={pStart.x}
                      y1={pStart.y}
                      x2={pEnd.x}
                      y2={pEnd.y}
                      stroke={isCurrentTarget ? '#FA5A16' : '#94A3B8'}
                      strokeWidth={isCurrentTarget ? '1.5' : '0.65'}
                      opacity={isCurrentTarget ? '0.9' : '0.45'}
                      className="transition-all duration-300"
                    />
                  );
                })}

                {/* 5. Minor Ticks (Every 1 degree) */}
                {Array.from({ length: 181 }, (_, i) => i).map((deg) => {
                  if (deg % 5 === 0) return null; // Handled by major/medium
                  const p1 = getCoordinates(deg, radius - 7);
                  const p2 = getCoordinates(deg, radius);
                  return (
                    <line
                      key={`minor-${deg}`}
                      x1={p1.x}
                      y1={p1.y}
                      x2={p2.x}
                      y2={p2.y}
                      stroke="#94A3B8"
                      strokeWidth="0.5"
                      opacity="0.6"
                    />
                  );
                })}

                {/* 6. Medium Ticks (Every 5 degrees) */}
                {Array.from({ length: 37 }, (_, i) => i * 5).map((deg) => {
                  if (deg % 10 === 0) return null; // Handled by major
                  const p1 = getCoordinates(deg, radius - 13);
                  const p2 = getCoordinates(deg, radius);
                  return (
                    <line
                      key={`med-${deg}`}
                      x1={p1.x}
                      y1={p1.y}
                      x2={p2.x}
                      y2={p2.y}
                      stroke="#64748B"
                      strokeWidth="0.8"
                    />
                  );
                })}

                {/* 7. Major Ticks & Angle Numbers (Every 10 degrees) */}
                {degrees.map((deg) => {
                  const p1 = getCoordinates(deg, radius - 20);
                  const p2 = getCoordinates(deg, radius);
                  const pLabel = getCoordinates(deg, radius - 33);
                  const isCurrentTarget = Math.abs(deg - activeAngle) < 12;

                  return (
                    <g key={`major-${deg}`} className="cursor-pointer">
                      <line
                        x1={p1.x}
                        y1={p1.y}
                        x2={p2.x}
                        y2={p2.y}
                        stroke={isCurrentTarget ? '#FA5A16' : '#334155'}
                        strokeWidth={isCurrentTarget ? '2' : '1.2'}
                        className="transition-colors duration-300"
                      />
                      <text
                        x={pLabel.x}
                        y={pLabel.y + 4}
                        textAnchor="middle"
                        fontSize={deg === 90 ? '11' : '9.5'}
                        fontWeight={isCurrentTarget ? '900' : '700'}
                        fill={isCurrentTarget ? '#FA5A16' : '#1E293B'}
                        className="transition-colors duration-300 select-none"
                      >
                        {deg}
                      </text>
                    </g>
                  );
                })}

                {/* 8. Straight Vertical Diameter Edge (Metallic bar) */}
                <line
                  x1={cx}
                  y1={cy - radius}
                  x2={cx}
                  y2={cy + radius}
                  stroke="#94A3B8"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* 9. Dynamic Indicator Needle (Swings to active angle) */}
                <g 
                  className="protractor-needle"
                  style={{
                    transform: `rotate(${activeAngle - 90}deg)`
                  }}
                  filter="url(#needleGlow)"
                >
                  {/* Needle line */}
                  <line
                    x1={cx}
                    y1={cy}
                    x2={cx + radius + 4}
                    y2={cy}
                    stroke="url(#needleOrangeGrad)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Outer needle pointer arrow / pip */}
                  <circle
                    cx={cx + radius + 4}
                    cy={cy}
                    r="4"
                    fill="#FA5A16"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                  />
                </g>

                {/* 10. Center Pivot Hub */}
                <g>
                  {/* Outer chrome ring */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r="12"
                    fill="#FFFFFF"
                    stroke="#CBD5E1"
                    strokeWidth="2.5"
                    filter="url(#dialShadow)"
                  />
                  {/* Inner orange pin */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r="6.5"
                    fill="#FA5A16"
                  />
                  {/* Highlight pip */}
                  <circle
                    cx={cx - 2}
                    cy={cy - 2}
                    r="2"
                    fill="#FFFFFF"
                    opacity="0.8"
                  />
                </g>
              </svg>

            </div>

            {/* Currently targeted angle readout badge */}
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm text-xs font-bold text-[#0B192C]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FA5A16] animate-pulse" />
              <span>Target Angle: <strong className="text-[#FA5A16]">{activeAngle}°</strong> — {activeItem.title}</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
