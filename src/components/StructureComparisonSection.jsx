import React, { useState } from 'react';

const COMPARISON_ROWS = [
  {
    id: 'who-owns-it',
    label: 'Who Owns It?',
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    opc: 'One person',
    llp: '2+ Partners',
    pvtLtd: 'Shareholders',
  },
  {
    id: 'liability',
    label: 'Liability',
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    opc: 'Limited',
    llp: 'Limited',
    pvtLtd: 'Limited',
  },
  {
    id: 'ease-of-setup',
    label: 'Ease of Setup',
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
    opc: 'Moderate\n(12 – 20 Days)',
    llp: 'Moderate\n(12 – 20 Days)',
    pvtLtd: 'Moderate\n(12 – 20 Days)',
  },
  {
    id: 'funding-potential',
    label: 'Funding Potential',
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
    opc: 'Moderate',
    llp: 'Moderate',
    pvtLtd: 'High',
    pvtLtdHighlight: true,
  },
  {
    id: 'ideal-for',
    label: 'Ideal For',
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    opc: 'Solo with protection',
    llp: 'Professionals,\nservice firms',
    pvtLtd: 'Startups, growth,\ninvestment',
  },
  {
    id: 'continuity',
    label: 'Continuity',
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z" />
      </svg>
    ),
    opc: 'Perpetual',
    llp: 'Perpetual',
    pvtLtd: 'Perpetual',
  },
];

export default function StructureComparisonSection({ highlightedStructure = 'pvt-ltd' }) {
  const [hoveredRow, setHoveredRow] = useState(null);

  const isOpc = highlightedStructure === 'opc';
  const isLlp = highlightedStructure === 'llp';
  const isPvtLtd = highlightedStructure === 'pvt-ltd';

  return (
    <section 
      className="relative w-full pt-10 sm:pt-16 lg:pt-20 pb-4 sm:pb-5 lg:pb-6 bg-white overflow-hidden select-none"
      id="structure-comparison"
    >
      {/* Background Soft Curved Lines for Site Continuity */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <path d="M-100 150 C 400 100, 700 350, 1100 200 C 1300 120, 1400 300, 1550 250" stroke="#E2D8C8" strokeWidth="1.5" />
          <path d="M-100 650 C 350 500, 800 700, 1200 550 C 1350 480, 1450 650, 1550 580" stroke="#ECE2D3" strokeWidth="1.2" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Area */}
        <div className="text-center max-w-[1200px] mx-auto mb-6 sm:mb-12 lg:mb-14">
          {/* Eyebrow */}
          <div 
            style={{
              fontSize: '13.5px',
              fontWeight: 800,
              color: '#64748B',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}
          >
            BUSINESS STRUCTURES COMPARED
          </div>

          {/* Main Title */}
          <h2 
            className="text-xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] font-black text-[#0F172A] tracking-tight leading-tight whitespace-normal lg:whitespace-nowrap"
            style={{
              margin: '0 0 12px 0',
            }}
          >
            Find the Right Structure for{' '}
            <span className="relative inline-block text-[#FA5A16]">
              Your Business
              <svg 
                className="absolute left-0 -bottom-2 sm:-bottom-3.5 w-full h-3.5 sm:h-5 overflow-visible pointer-events-none" 
                viewBox="0 0 200 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M 4 16 Q 100 3, 196 16" 
                  stroke="#FA5A16" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  className="animate-draw-curved-underline"
                />
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p 
            style={{
              fontSize: 'clamp(14px, 1.8vw, 19px)',
              color: '#64748B',
              fontWeight: 500,
              margin: 0,
              lineHeight: 1.45,
            }}
          >
            Compare key features of different business structures and choose what fits your goals.
          </p>
        </div>

        {/* Comparison Matrix Table Card Container */}
        <div 
          className="w-full bg-white rounded-xl sm:rounded-3xl shadow-[0_15px_40px_-15px_rgba(15,23,42,0.1),0_0_0_1px_rgba(226,232,240,0.9)] overflow-hidden"
        >
          <div className="w-full overflow-hidden">
            <table className="w-full table-fixed border-collapse text-left">
              <thead>
                <tr>
                  {/* Column 1: Feature */}
                  <th 
                    className="w-[23%] sm:w-[24%] p-1 sm:p-5 md:py-8 md:px-6 bg-[#F1F5F9] border-b border-r border-[#E2E8F0] align-middle"
                  >
                    <span className="text-[10px] sm:text-base md:text-xl lg:text-[22px] font-black text-[#0F172A] tracking-tight block">
                      Feature
                    </span>
                  </th>

                  {/* Column 2: One Person Company (OPC) */}
                  <th 
                    className={`p-1 py-2 sm:p-4 md:py-6 md:px-5 text-center align-middle relative transition-colors ${
                      isOpc 
                        ? 'w-[27%] sm:w-[28%] bg-[#FFF2E2] border-t-2 sm:border-t-4 border-t-[#D97706] border-l-[1.5px] sm:border-l-[2.5px] border-l-[#F59E0B] border-r-[1.5px] sm:border-r-[2.5px] border-r-[#F59E0B] border-b-2 border-b-[#FCD34D]' 
                        : 'w-[24.5%] sm:w-[24%] bg-[#FFF7ED] border-b border-r border-[#E2E8F0]'
                    }`}
                  >
                    <div className={`flex flex-col items-center ${isOpc ? 'gap-0.5 sm:gap-2' : 'gap-0.5 sm:gap-2.5'}`}>
                      {isOpc && (
                        <div className="inline-flex items-center gap-0.5 sm:gap-1 bg-[#D97706] text-white px-1 sm:px-3 py-0.5 rounded-full text-[6px] sm:text-xs font-extrabold tracking-tight uppercase shadow-sm">
                          <svg className="w-1.5 h-1.5 sm:w-3 sm:h-3 shrink-0" viewBox="0 0 24 24" fill="#FFFFFF" stroke="none">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                          <span className="truncate">Solos</span>
                        </div>
                      )}

                      {/* User Icon */}
                      <svg className="w-3.5 h-3.5 sm:w-7 sm:h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span className={`text-[9px] sm:text-base md:text-lg lg:text-[21.5px] text-[#0F172A] leading-tight block ${isOpc ? 'font-black' : 'font-extrabold'}`}>
                        One Person<br />Company (OPC)
                      </span>
                    </div>
                  </th>

                  {/* Column 3: Limited Liability Partnership (LLP) */}
                  <th 
                    className={`p-1 py-2 sm:p-4 md:py-6 md:px-5 text-center align-middle relative transition-colors ${
                      isLlp 
                        ? 'w-[27%] sm:w-[28%] bg-[#EEF2FF] border-t-2 sm:border-t-4 border-t-[#4F46E5] border-l-[1.5px] sm:border-l-[2.5px] border-l-[#6366F1] border-r-[1.5px] sm:border-r-[2.5px] border-r-[#6366F1] border-b-2 border-b-[#A5B4FC]' 
                        : 'w-[24.5%] sm:w-[24%] bg-[#EEF2FF] border-b border-r border-[#E2E8F0]'
                    }`}
                  >
                    <div className={`flex flex-col items-center ${isLlp ? 'gap-0.5 sm:gap-2' : 'gap-0.5 sm:gap-2.5'}`}>
                      {isLlp && (
                        <div className="inline-flex items-center gap-0.5 sm:gap-1 bg-[#4F46E5] text-white px-1 sm:px-3 py-0.5 rounded-full text-[6px] sm:text-xs font-extrabold tracking-tight uppercase shadow-sm">
                          <svg className="w-1.5 h-1.5 sm:w-3 sm:h-3 shrink-0" viewBox="0 0 24 24" fill="#FFFFFF" stroke="none">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                          <span className="truncate">Partners</span>
                        </div>
                      )}

                      {/* Group Icon */}
                      <svg className="w-3.5 h-3.5 sm:w-7 sm:h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 00-3-3.87" />
                        <path d="M16 3.13a4 4 0 010 7.75" />
                      </svg>
                      <span className={`text-[9px] sm:text-base md:text-lg lg:text-[21.5px] text-[#4338CA] leading-tight block ${isLlp ? 'font-black' : 'font-extrabold'}`}>
                        Limited Liability<br />Partnership (LLP)
                      </span>
                    </div>
                  </th>

                  {/* Column 4: Private Ltd. Company */}
                  <th 
                    className={`p-1 py-2 sm:p-4 md:py-6 md:px-5 text-center align-middle relative transition-colors ${
                      isPvtLtd 
                        ? 'w-[28%] sm:w-[28%] bg-[#FCE7F3] border-t-2 sm:border-t-4 border-t-[#BE185D] border-l-[1.5px] sm:border-l-[2.5px] border-l-[#F43F5E] border-r-[1.5px] sm:border-r-[2.5px] border-r-[#F43F5E] border-b-2 border-b-[#FDA4AF]' 
                        : 'w-[25%] sm:w-[24%] bg-[#FCE7F3] border-b border-[#E2E8F0]'
                    }`}
                  >
                    <div className={`flex flex-col items-center ${isPvtLtd ? 'gap-0.5 sm:gap-2' : 'gap-0.5 sm:gap-2.5'}`}>
                      {isPvtLtd && (
                        <div className="inline-flex items-center gap-0.5 sm:gap-1 bg-[#BE185D] text-white px-1 sm:px-3 py-0.5 rounded-full text-[6px] sm:text-xs font-extrabold tracking-tight uppercase shadow-sm">
                          <svg className="w-1.5 h-1.5 sm:w-3 sm:h-3 shrink-0" viewBox="0 0 24 24" fill="#FFFFFF" stroke="none">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                          <span className="truncate">★ MOST POPULAR</span>
                        </div>
                      )}

                      {/* Building Icon */}
                      <svg className="w-3.5 h-3.5 sm:w-7 sm:h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="#BE185D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18Z" />
                        <path d="M6 12H4a2 2 0 00-2 2v6a2 2 0 002 2h2" />
                        <path d="M18 9h2a2 2 0 012 2v9a2 2 0 01-2 2h-2" />
                        <path d="M10 6h4" />
                        <path d="M10 10h4" />
                        <path d="M10 14h4" />
                        <path d="M10 18h4" />
                      </svg>
                      <span className={`text-[9px] sm:text-base md:text-lg lg:text-[21.5px] text-[#0F172A] leading-tight block ${isPvtLtd ? 'font-black' : 'font-extrabold'}`}>
                        Private Ltd.<br />Company
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {COMPARISON_ROWS.map((row, idx) => {
                  const isHovered = hoveredRow === row.id;

                  return (
                    <tr
                      key={row.id}
                      onMouseEnter={() => setHoveredRow(row.id)}
                      onMouseLeave={() => setHoveredRow(null)}
                      className={`transition-colors ${
                        isHovered ? 'bg-[#F8FAFC]' : (idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFCFF]')
                      }`}
                    >
                      {/* Feature Label + Icon */}
                      <td className="p-1 py-2 sm:py-4 sm:px-4 md:py-6 md:px-6 border-b border-r border-[#F1F5F9] align-middle">
                        <div className="flex items-center gap-1 sm:gap-3.5">
                          <div className="text-[#0F172A] flex items-center shrink-0">
                            {row.icon}
                          </div>
                          <span className="text-[8.5px] sm:text-sm md:text-base lg:text-[18.5px] font-extrabold text-[#0F172A] tracking-tight leading-tight">
                            {row.label}
                          </span>
                        </div>
                      </td>

                      {/* OPC Data */}
                      <td 
                        className={`p-1 py-2 sm:py-4 sm:px-3 md:py-6 md:px-5 text-center align-middle whitespace-pre-line leading-[1.25] sm:leading-normal transition-colors ${
                          isOpc
                            ? `border-b ${isHovered ? 'bg-[#FEF3C7]' : (idx % 2 === 0 ? 'bg-[#FFFBEB]' : 'bg-[#FFFDF7]')} border-b-[#FDE68A] border-l-[1.5px] sm:border-l-[2.5px] border-l-[#F59E0B] border-r-[1.5px] sm:border-r-[2.5px] border-r-[#F59E0B] text-[#0F172A] font-extrabold text-[8.5px] sm:text-sm md:text-base lg:text-[19px]`
                            : `border-b border-r border-[#F1F5F9] text-[#0F172A] font-semibold text-[8px] sm:text-xs md:text-sm lg:text-[18px]`
                        }`}
                      >
                        {isOpc && (row.id === 'who-owns-it' || row.id === 'ideal-for') ? (
                          <span className="inline-block bg-[#D97706] text-white px-1 sm:px-4 py-0.5 sm:py-1.5 rounded sm:rounded-lg font-black text-[7.5px] sm:text-xs md:text-sm lg:text-[18px] shadow-sm">
                            {row.opc}
                          </span>
                        ) : (
                          row.opc
                        )}
                      </td>

                      {/* LLP Data */}
                      <td 
                        className={`p-1 py-2 sm:py-4 sm:px-3 md:py-6 md:px-5 text-center align-middle whitespace-pre-line leading-[1.25] sm:leading-normal transition-colors ${
                          isLlp
                            ? `border-b ${isHovered ? 'bg-[#E0E7FF]' : (idx % 2 === 0 ? 'bg-[#EEF2FF]' : 'bg-[#F5F7FF]')} border-b-[#C7D2FE] border-l-[1.5px] sm:border-l-[2.5px] border-l-[#6366F1] border-r-[1.5px] sm:border-r-[2.5px] border-r-[#6366F1] text-[#0F172A] font-extrabold text-[8.5px] sm:text-sm md:text-base lg:text-[19px]`
                            : `border-b border-r border-[#F1F5F9] text-[#0F172A] font-semibold text-[8px] sm:text-xs md:text-sm lg:text-[18px]`
                        }`}
                      >
                        {isLlp && (row.id === 'who-owns-it' || row.id === 'ideal-for') ? (
                          <span className="inline-block bg-[#4F46E5] text-white px-1 sm:px-4 py-0.5 sm:py-1.5 rounded sm:rounded-lg font-black text-[7.5px] sm:text-xs md:text-sm lg:text-[18px] shadow-sm">
                            {row.llp}
                          </span>
                        ) : (
                          row.llp
                        )}
                      </td>

                      {/* Private Ltd Data */}
                      <td 
                        className={`p-1 py-2 sm:py-4 sm:px-3 md:py-6 md:px-5 text-center align-middle whitespace-pre-line leading-[1.25] sm:leading-normal transition-colors ${
                          isPvtLtd
                            ? `border-b ${isHovered ? 'bg-[#FCE7F3]' : (idx % 2 === 0 ? 'bg-[#FFF5F9]' : 'bg-[#FDF0F6]')} border-b-[#FCE7F3] border-l-[1.5px] sm:border-l-[2.5px] border-l-[#F43F5E] border-r-[1.5px] sm:border-r-[2.5px] border-r-[#F43F5E] text-[#0F172A] font-extrabold text-[8.5px] sm:text-sm md:text-base lg:text-[19px]`
                            : `border-b border-[#F1F5F9] text-[#0F172A] font-semibold text-[8px] sm:text-xs md:text-sm lg:text-[18px]`
                        }`}
                      >
                        {isPvtLtd && row.pvtLtdHighlight ? (
                          <span className="inline-block bg-[#BE185D] text-white px-1 sm:px-4 py-0.5 sm:py-1.5 rounded sm:rounded-lg font-black text-[7.5px] sm:text-xs md:text-sm lg:text-[18px] shadow-sm">
                            {row.pvtLtd}
                          </span>
                        ) : (
                          row.pvtLtd
                        )}
                      </td>
                    </tr>
                  );
                })}

                {/* Highlighted Bottom Row: "Our Take" */}
                <tr className="border-t-2 border-[#E2E8F0]">
                  {/* Our Take Header with Star */}
                  <td className="p-1 py-2 sm:py-5 sm:px-4 md:py-7 md:px-6 bg-[#FFFBEB] border-r border-[#E2E8F0] align-middle">
                    <div className="flex items-center gap-1 sm:gap-3.5">
                      <svg className="w-3.5 h-3.5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span className="text-[9px] sm:text-sm md:text-base lg:text-[19.5px] font-black text-[#0F172A] tracking-tight leading-tight block">
                        Our Take
                      </span>
                    </div>
                  </td>

                  {/* OPC Take */}
                  <td 
                    className={`p-1 py-2 sm:py-5 sm:px-3 md:py-7 md:px-5 text-center align-middle ${
                      isOpc 
                        ? 'bg-[#FFF2E2] border-l-[1.5px] sm:border-l-[2.5px] border-l-[#F59E0B] border-r-[1.5px] sm:border-r-[2.5px] border-r-[#F59E0B] border-b-2 sm:border-b-4 border-b-[#D97706]' 
                        : 'bg-[#FFF7ED] border-r border-[#E2E8F0] border-b border-[#E2E8F0]'
                    }`}
                  >
                    <span className={`text-[8px] sm:text-xs md:text-sm lg:text-[19.5px] leading-tight block ${isOpc ? 'font-black text-[#B45309]' : 'font-extrabold text-[#C2410C]'}`}>
                      Ideal for<br />solo entrepreneurs
                    </span>
                  </td>

                  {/* LLP Take */}
                  <td 
                    className={`p-1 py-2 sm:py-5 sm:px-3 md:py-7 md:px-5 text-center align-middle ${
                      isLlp 
                        ? 'bg-[#E0E7FF] border-l-[1.5px] sm:border-l-[2.5px] border-l-[#6366F1] border-r-[1.5px] sm:border-r-[2.5px] border-r-[#6366F1] border-b-2 sm:border-b-4 border-b-[#4F46E5]' 
                        : 'bg-[#EEF2FF] border-r border-[#E2E8F0] border-b border-[#E2E8F0]'
                    }`}
                  >
                    <span className={`text-[8px] sm:text-xs md:text-sm lg:text-[19.5px] leading-tight block ${isLlp ? 'font-black text-[#3730A3]' : 'font-extrabold text-[#4338CA]'}`}>
                      Perfect for<br />professionals
                    </span>
                  </td>

                  {/* Private Ltd Take */}
                  <td 
                    className={`p-1 py-2 sm:py-5 sm:px-3 md:py-7 md:px-5 text-center align-middle ${
                      isPvtLtd 
                        ? 'bg-[#FCE7F3] border-l-[1.5px] sm:border-l-[2.5px] border-l-[#F43F5E] border-r-[1.5px] sm:border-r-[2.5px] border-r-[#F43F5E] border-b-2 sm:border-b-4 border-b-[#BE185D]' 
                        : 'bg-[#FFF5F9] border-b border-[#E2E8F0]'
                    }`}
                  >
                    <span className={`text-[8px] sm:text-xs md:text-sm lg:text-[19.5px] leading-tight block ${isPvtLtd ? 'font-black text-[#9D174D]' : 'font-extrabold text-[#BE185D]'}`}>
                      Best for<br />growth & investment
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
