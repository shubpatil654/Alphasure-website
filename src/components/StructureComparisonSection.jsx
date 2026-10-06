import React, { useState } from 'react';

const COMPARISON_ROWS = [
  {
    id: 'who-owns-it',
    label: 'Who Owns It?',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '64px 20px',
        position: 'relative',
        userSelect: 'none',
        overflow: 'hidden',
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {/* Background Soft Curved Lines for Site Continuity */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <path d="M-100 150 C 400 100, 700 350, 1100 200 C 1300 120, 1400 300, 1550 250" stroke="#E2D8C8" strokeWidth="1.5" />
          <path d="M-100 650 C 350 500, 800 700, 1200 550 C 1350 480, 1450 650, 1550 580" stroke="#ECE2D3" strokeWidth="1.2" strokeDasharray="6 6" />
        </svg>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Heading Area */}
        <div style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto 24px auto' }}>
          {/* Eyebrow */}
          <div 
            style={{
              fontSize: '13.5px',
              fontWeight: 800,
              color: '#64748B',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}
          >
            BUSINESS STRUCTURES COMPARED
          </div>

          {/* Main Title - Single Line with Curved Underline in Blue (matching Leaders section) */}
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] font-black text-[#0F172A] tracking-tight leading-tight whitespace-normal lg:whitespace-nowrap"
            style={{
              margin: '0 0 16px 0',
            }}
          >
            Find the Right Structure for{' '}
            <span className="relative inline-block text-[#2563EB]">
              Your Business
              <svg 
                className="absolute left-0 -bottom-2 sm:-bottom-3.5 w-full h-3.5 sm:h-5 overflow-visible pointer-events-none" 
                viewBox="0 0 200 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M 4 16 Q 100 3, 196 16" 
                  stroke="#2563EB" 
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
              fontSize: 'clamp(16px, 1.8vw, 19px)',
              color: '#64748B',
              fontWeight: 500,
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Compare key features of different business structures and choose what fits your goals.
          </p>
        </div>

        {/* Comparison Matrix Table Card Container */}
        <div 
          style={{
            width: '100%',
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            boxShadow: '0 25px 55px -15px rgba(15, 23, 42, 0.1), 0 0 0 1px rgba(226, 232, 240, 0.9)',
            overflow: 'hidden',
          }}
        >
          <div style={{ overflowX: 'auto', width: '100%' }}>
            <table 
              style={{
                width: '100%',
                minWidth: '920px',
                borderCollapse: 'collapse',
                textAlign: 'left',
              }}
            >
              <thead>
                <tr>
                  {/* Column 1: Feature */}
                  <th 
                    style={{
                      width: '24%',
                      padding: '32px 26px',
                      backgroundColor: '#F1F5F9',
                      borderBottom: '1px solid #E2E8F0',
                      borderRight: '1px solid #E2E8F0',
                      verticalAlign: 'middle',
                    }}
                  >
                    <span style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.01em' }}>
                      Feature
                    </span>
                  </th>

                  {/* Column 2: One Person Company (OPC) */}
                  <th 
                    style={{
                      width: isOpc ? '28%' : '24%',
                      padding: isOpc ? '24px 22px 30px 22px' : '30px 22px',
                      backgroundColor: isOpc ? '#FFF2E2' : '#FFF7ED',
                      borderTop: isOpc ? '4px solid #D97706' : 'none',
                      borderLeft: isOpc ? '2.5px solid #F59E0B' : 'none',
                      borderRight: isOpc ? '2.5px solid #F59E0B' : '1px solid #E2E8F0',
                      borderBottom: isOpc ? '2px solid #FCD34D' : '1px solid #E2E8F0',
                      textAlign: 'center',
                      verticalAlign: 'middle',
                      position: 'relative',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isOpc ? '8px' : '10px' }}>
                      {isOpc && (
                        <div 
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            backgroundColor: '#D97706',
                            color: '#FFFFFF',
                            padding: '4.5px 14px',
                            borderRadius: '9999px',
                            fontSize: '12px',
                            fontWeight: 800,
                            letterSpacing: '0.8px',
                            textTransform: 'uppercase',
                            boxShadow: '0 3px 10px rgba(217, 119, 6, 0.35)',
                          }}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFFFFF" stroke="none">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                          <span>Most Popular for Solos</span>
                        </div>
                      )}

                      {/* User Icon */}
                      <svg width={isOpc ? "34" : "32"} height={isOpc ? "34" : "32"} viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span style={{ fontSize: isOpc ? '21.5px' : '19.5px', fontWeight: isOpc ? 900 : 800, color: '#0F172A', lineHeight: 1.25 }}>
                        One Person<br />Company (OPC)
                      </span>
                    </div>
                  </th>

                  {/* Column 3: Limited Liability Partnership (LLP) */}
                  <th 
                    style={{
                      width: isLlp ? '28%' : '24%',
                      padding: isLlp ? '24px 22px 30px 22px' : '30px 22px',
                      backgroundColor: '#EEF2FF', // Soft periwinkle/indigo
                      borderTop: isLlp ? '4px solid #4F46E5' : 'none',
                      borderLeft: isLlp ? '2.5px solid #6366F1' : 'none',
                      borderRight: isLlp ? '2.5px solid #6366F1' : '1px solid #E2E8F0',
                      borderBottom: isLlp ? '2px solid #A5B4FC' : '1px solid #E2E8F0',
                      textAlign: 'center',
                      verticalAlign: 'middle',
                      position: 'relative',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isLlp ? '8px' : '10px' }}>
                      {isLlp && (
                        <div 
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            backgroundColor: '#4F46E5',
                            color: '#FFFFFF',
                            padding: '4.5px 14px',
                            borderRadius: '9999px',
                            fontSize: '12px',
                            fontWeight: 800,
                            letterSpacing: '0.8px',
                            textTransform: 'uppercase',
                            boxShadow: '0 3px 10px rgba(79, 70, 229, 0.35)',
                          }}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFFFFF" stroke="none">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                          <span>Most Popular for Partners</span>
                        </div>
                      )}

                      {/* Group Icon */}
                      <svg width={isLlp ? "34" : "32"} height={isLlp ? "34" : "32"} viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 00-3-3.87" />
                        <path d="M16 3.13a4 4 0 010 7.75" />
                      </svg>
                      <span style={{ fontSize: isLlp ? '21.5px' : '19.5px', fontWeight: isLlp ? 900 : 800, color: '#4338CA', lineHeight: 1.25 }}>
                        Limited Liability<br />Partnership (LLP)
                      </span>
                    </div>
                  </th>

                  {/* Column 4: Private Ltd. Company */}
                  <th 
                    style={{
                      width: isPvtLtd ? '28%' : '24%',
                      padding: isPvtLtd ? '24px 22px 30px 22px' : '30px 22px',
                      backgroundColor: '#FCE7F3', // Rose tint
                      borderTop: isPvtLtd ? '4px solid #BE185D' : 'none',
                      borderLeft: isPvtLtd ? '2.5px solid #F43F5E' : 'none',
                      borderRight: isPvtLtd ? '2.5px solid #F43F5E' : 'none',
                      borderBottom: isPvtLtd ? '2px solid #FDA4AF' : '1px solid #E2E8F0',
                      textAlign: 'center',
                      verticalAlign: 'middle',
                      position: 'relative',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isPvtLtd ? '8px' : '10px' }}>
                      {isPvtLtd && (
                        <div 
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            backgroundColor: '#BE185D',
                            color: '#FFFFFF',
                            padding: '4.5px 14px',
                            borderRadius: '9999px',
                            fontSize: '12px',
                            fontWeight: 800,
                            letterSpacing: '0.8px',
                            textTransform: 'uppercase',
                            boxShadow: '0 3px 10px rgba(190, 24, 93, 0.35)',
                          }}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFFFFF" stroke="none">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                          <span>Most Popular</span>
                        </div>
                      )}

                      {/* Building Icon */}
                      <svg width={isPvtLtd ? "34" : "32"} height={isPvtLtd ? "34" : "32"} viewBox="0 0 24 24" fill="none" stroke="#BE185D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18Z" />
                        <path d="M6 12H4a2 2 0 00-2 2v6a2 2 0 002 2h2" />
                        <path d="M18 9h2a2 2 0 012 2v9a2 2 0 01-2 2h-2" />
                        <path d="M10 6h4" />
                        <path d="M10 10h4" />
                        <path d="M10 14h4" />
                        <path d="M10 18h4" />
                      </svg>
                      <span style={{ fontSize: isPvtLtd ? '21.5px' : '19.5px', fontWeight: isPvtLtd ? 900 : 800, color: '#0F172A', lineHeight: 1.25 }}>
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
                      style={{
                        backgroundColor: isHovered ? '#F8FAFC' : (idx % 2 === 0 ? '#FFFFFF' : '#FAFCFF'),
                        transition: 'background-color 150ms ease',
                      }}
                    >
                      {/* Feature Label + Icon */}
                      <td 
                        style={{
                          padding: '26px 26px',
                          borderBottom: '1px solid #F1F5F9',
                          borderRight: '1px solid #F1F5F9',
                          verticalAlign: 'middle',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                          <div style={{ color: '#0F172A', display: 'flex', alignItems: 'center' }}>
                            {row.icon}
                          </div>
                          <span style={{ fontSize: '18.5px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.01em' }}>
                            {row.label}
                          </span>
                        </div>
                      </td>

                      {/* OPC Data */}
                      <td 
                        style={{
                          padding: '26px 22px',
                          borderBottom: isOpc ? '1px solid #FDE68A' : '1px solid #F1F5F9',
                          borderRight: isOpc ? '2.5px solid #F59E0B' : '1px solid #F1F5F9',
                          borderLeft: isOpc ? '2.5px solid #F59E0B' : 'none',
                          backgroundColor: isOpc 
                            ? (isHovered ? '#FEF3C7' : (idx % 2 === 0 ? '#FFFBEB' : '#FFFDF7'))
                            : undefined,
                          textAlign: 'center',
                          verticalAlign: 'middle',
                          fontSize: isOpc ? '19px' : '18px',
                          color: '#0F172A',
                          fontWeight: isOpc ? 800 : 600,
                          whiteSpace: 'pre-line',
                          lineHeight: 1.45,
                          transition: 'background-color 150ms ease',
                        }}
                      >
                        {isOpc && (row.id === 'who-owns-it' || row.id === 'ideal-for') ? (
                          <span 
                            style={{ 
                              display: 'inline-block', 
                              backgroundColor: '#D97706', 
                              color: '#FFFFFF', 
                              padding: '6px 18px', 
                              borderRadius: '8px', 
                              fontWeight: 900, 
                              fontSize: '18px',
                              boxShadow: '0 2px 8px rgba(217, 119, 6, 0.25)',
                            }}
                          >
                            {row.opc}
                          </span>
                        ) : (
                          row.opc
                        )}
                      </td>

                      {/* LLP Data */}
                      <td 
                        style={{
                          padding: '26px 22px',
                          borderBottom: isLlp ? '1px solid #C7D2FE' : '1px solid #F1F5F9',
                          borderRight: isLlp ? '2.5px solid #6366F1' : '1px solid #F1F5F9',
                          borderLeft: isLlp ? '2.5px solid #6366F1' : 'none',
                          backgroundColor: isLlp 
                            ? (isHovered ? '#E0E7FF' : (idx % 2 === 0 ? '#EEF2FF' : '#F5F7FF'))
                            : undefined,
                          textAlign: 'center',
                          verticalAlign: 'middle',
                          fontSize: isLlp ? '19px' : '18px',
                          color: '#0F172A',
                          fontWeight: isLlp ? 800 : 600,
                          whiteSpace: 'pre-line',
                          lineHeight: 1.45,
                          transition: 'background-color 150ms ease',
                        }}
                      >
                        {isLlp && (row.id === 'who-owns-it' || row.id === 'ideal-for') ? (
                          <span 
                            style={{ 
                              display: 'inline-block', 
                              backgroundColor: '#4F46E5', 
                              color: '#FFFFFF', 
                              padding: '6px 18px', 
                              borderRadius: '8px', 
                              fontWeight: 900, 
                              fontSize: '18px',
                              boxShadow: '0 2px 8px rgba(79, 70, 229, 0.25)',
                            }}
                          >
                            {row.llp}
                          </span>
                        ) : (
                          row.llp
                        )}
                      </td>

                      {/* Private Ltd Data */}
                      <td 
                        style={{
                          padding: '26px 22px',
                          backgroundColor: isPvtLtd 
                            ? (isHovered ? '#FCE7F3' : (idx % 2 === 0 ? '#FFF5F9' : '#FDF0F6'))
                            : undefined,
                          borderLeft: isPvtLtd ? '2.5px solid #F43F5E' : 'none',
                          borderRight: isPvtLtd ? '2.5px solid #F43F5E' : 'none',
                          borderBottom: isPvtLtd ? '1px solid #FCE7F3' : '1px solid #F1F5F9',
                          textAlign: 'center',
                          verticalAlign: 'middle',
                          fontSize: isPvtLtd ? '19px' : '18px',
                          color: '#0F172A',
                          fontWeight: isPvtLtd ? 800 : 600,
                          whiteSpace: 'pre-line',
                          lineHeight: 1.45,
                          transition: 'background-color 150ms ease',
                        }}
                      >
                        {isPvtLtd && row.pvtLtdHighlight ? (
                          <span 
                            style={{ 
                              display: 'inline-block', 
                              backgroundColor: '#BE185D', 
                              color: '#FFFFFF', 
                              padding: '6px 18px', 
                              borderRadius: '8px', 
                              fontWeight: 900, 
                              fontSize: '18px',
                              boxShadow: '0 2px 8px rgba(190, 24, 93, 0.25)',
                            }}
                          >
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
                <tr style={{ borderTop: '2px solid #E2E8F0' }}>
                  {/* Our Take Header with Star */}
                  <td 
                    style={{
                      padding: '28px 26px',
                      backgroundColor: '#FFFBEB', // Light warm gold/yellow
                      borderRight: '1px solid #E2E8F0',
                      verticalAlign: 'middle',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      {/* Golden Star Icon */}
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span style={{ fontSize: '19.5px', fontWeight: 900, color: '#0F172A' }}>
                        Our Take
                      </span>
                    </div>
                  </td>

                  {/* OPC Take */}
                  <td 
                    style={{
                      padding: '28px 22px',
                      backgroundColor: isOpc ? '#FFF2E2' : '#FFF7ED', // Warm peach / highlighted amber
                      borderLeft: isOpc ? '2.5px solid #F59E0B' : 'none',
                      borderRight: isOpc ? '2.5px solid #F59E0B' : '1px solid #E2E8F0',
                      borderBottom: isOpc ? '4px solid #D97706' : '1px solid #E2E8F0',
                      textAlign: 'center',
                      verticalAlign: 'middle',
                    }}
                  >
                    <span style={{ fontSize: isOpc ? '19.5px' : '18.5px', fontWeight: isOpc ? 900 : 800, color: isOpc ? '#B45309' : '#C2410C', lineHeight: 1.35, display: 'block' }}>
                      Ideal for<br />solo entrepreneurs
                    </span>
                  </td>

                  {/* LLP Take */}
                  <td 
                    style={{
                      padding: '28px 22px',
                      backgroundColor: isLlp ? '#E0E7FF' : '#EEF2FF', // Periwinkle / indigo highlight
                      borderLeft: isLlp ? '2.5px solid #6366F1' : 'none',
                      borderRight: isLlp ? '2.5px solid #6366F1' : '1px solid #E2E8F0',
                      borderBottom: isLlp ? '4px solid #4F46E5' : '1px solid #E2E8F0',
                      textAlign: 'center',
                      verticalAlign: 'middle',
                    }}
                  >
                    <span style={{ fontSize: isLlp ? '19.5px' : '18.5px', fontWeight: isLlp ? 900 : 800, color: isLlp ? '#3730A3' : '#4338CA', lineHeight: 1.35, display: 'block' }}>
                      Perfect for<br />professionals
                    </span>
                  </td>

                  {/* Private Ltd Take */}
                  <td 
                    style={{
                      padding: '28px 22px',
                      backgroundColor: isPvtLtd ? '#FCE7F3' : '#FFF5F9', // Rose
                      borderLeft: isPvtLtd ? '2.5px solid #F43F5E' : 'none',
                      borderRight: isPvtLtd ? '2.5px solid #F43F5E' : 'none',
                      borderBottom: isPvtLtd ? '4px solid #BE185D' : '1px solid #E2E8F0',
                      textAlign: 'center',
                      verticalAlign: 'middle',
                    }}
                  >
                    <span style={{ fontSize: isPvtLtd ? '19.5px' : '18.5px', fontWeight: isPvtLtd ? 900 : 800, color: isPvtLtd ? '#9D174D' : '#BE185D', lineHeight: 1.35, display: 'block' }}>
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
