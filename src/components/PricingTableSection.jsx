import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

export default function PricingTableSection({ onOpenModal }) {
  const [activeRow, setActiveRow] = useState(0); // 0: Pvt Ltd, 1: OPC, 2: LLP
  const [hoveredRow, setHoveredRow] = useState(null);

  const pricingData = [
    {
      id: 'pvt-ltd',
      name: 'Pvt Ltd Co',
      incorporation: '₹11,000',
      postIncorporation: '₹7,000',
      annualCompliance: '₹12,000',
      total: '₹30,000',
    },
    {
      id: 'opc',
      name: 'OPC',
      incorporation: '₹10,000',
      postIncorporation: '₹7,000',
      annualCompliance: '₹12,000',
      total: '₹29,000',
    },
    {
      id: 'llp',
      name: 'LLP',
      incorporation: '₹10,000',
      postIncorporation: '₹6,000',
      annualCompliance: '₹10,000',
      total: '₹26,000',
    },
  ];

  return (
    <section 
      className="relative w-full bg-transparent py-12 sm:py-16 select-none overflow-hidden"
      id="pricing-breakdown"
    >
      {/* Background Soft Accent Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <path d="M-100 150 C 350 80, 700 320, 1100 180 C 1300 100, 1400 280, 1550 220" stroke="#E2D8C8" strokeWidth="1.5" />
          <path d="M-100 650 C 400 500, 850 700, 1200 550 C 1380 450, 1450 650, 1550 580" stroke="#ECE2D3" strokeWidth="1.2" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* ================= SECTION HEADING: "Incorporation & secretarial" ================= */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A67C52]/10 border border-[#A67C52]/30 text-[#A67C52] text-xs font-semibold tracking-wider uppercase mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#A67C52]" />
            <span>COMPANY FORMATION & SECRETARIAL</span>
          </div>
          <h2 className="alpha-h2 font-bold text-slate-900 tracking-tight">
            Incorporation & secretarial
          </h2>
          <p className="mt-2.5 sm:mt-3 text-slate-600 font-normal text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Clear, all-inclusive pricing breakdown from name reservation to full annual ROC compliance.
          </p>
        </div>

        {/* ================= PRICING TABLE CONTAINER ================= */}
        <div className="w-full max-w-[1160px] bg-white rounded-2xl sm:rounded-3xl border border-[#E8DEC8] shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300">
          
          {/* Responsive Scroll Wrapper for Mobile/Tablet */}
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[760px] md:min-w-full">
              <thead>
                <tr className="bg-[#FAF7F2] border-b border-[#EFE6DA]">
                  {/* Column 1: Structure Name Header */}
                  <th className="py-4 px-5 sm:px-7 w-[22%] font-semibold text-slate-400 text-xs uppercase tracking-wider">
                    Structure
                  </th>
                  
                  {/* Column 2: Incorporation */}
                  <th className="py-4 px-4 sm:px-6 w-[20%] text-center font-semibold text-slate-800 text-sm sm:text-[15px] tracking-tight border-l border-[#EFE6DA]/80">
                    Incorporation
                  </th>

                  {/* Column 3: Post-Incorporation compliance */}
                  <th className="py-4 px-4 sm:px-6 w-[21%] text-center font-semibold text-slate-800 text-sm sm:text-[15px] tracking-tight border-l border-[#EFE6DA]/80 leading-snug">
                    Post-Incorporation <br className="hidden sm:inline" />
                    compliance
                  </th>

                  {/* Column 4: Annual Compliance Package */}
                  <th className="py-4 px-4 sm:px-6 w-[21%] text-center font-semibold text-slate-800 text-sm sm:text-[15px] tracking-tight border-l border-[#EFE6DA]/80 leading-snug">
                    Annual Compliance <br className="hidden sm:inline" />
                    Package
                  </th>

                  {/* Column 5: Total */}
                  <th className="py-4 px-5 sm:px-6 w-[16%] text-center font-bold text-[#8C6239] text-sm sm:text-[15px] tracking-tight border-l border-[#EFE6DA]/80 bg-[#FAF4EB]/80">
                    Total
                  </th>
                </tr>
              </thead>

              <tbody>
                {pricingData.map((row, index) => {
                  const isCurrent = (hoveredRow !== null ? hoveredRow === index : activeRow === index);

                  return (
                    <tr
                      key={row.id}
                      onClick={() => {
                        setActiveRow(index);
                        if (onOpenModal) onOpenModal();
                      }}
                      onMouseEnter={() => setHoveredRow(index)}
                      onMouseLeave={() => setHoveredRow(null)}
                      className={`
                        relative transition-colors duration-200 cursor-pointer select-none
                        border-t border-[#EFE6DA] group
                        ${isCurrent ? 'bg-[#FAF5ED]' : 'hover:bg-[#FAF7F2]/60'}
                      `}
                    >
                      {/* Structure Name */}
                      <td className={`py-4 sm:py-5 px-5 sm:px-7 font-medium text-base sm:text-[17px] tracking-tight transition-colors duration-200 ${isCurrent ? 'text-[#8C6239] font-semibold' : 'text-slate-900 group-hover:text-[#8C6239]'}`}>
                        <div className="flex items-center gap-2.5">
                          <span className={`w-2 h-2 rounded-full transition-all duration-200 ${isCurrent ? 'bg-[#FA5A16] scale-100 opacity-100' : 'bg-transparent scale-50 opacity-0'}`} />
                          <span>{row.name}</span>
                        </div>
                      </td>

                      {/* Incorporation Price */}
                      <td className="py-4 sm:py-5 px-4 sm:px-6 text-center font-normal text-slate-700 text-sm sm:text-base md:text-[16px] tabular-nums border-l border-[#EFE6DA]/80">
                        {row.incorporation}
                      </td>

                      {/* Post-Incorporation Price */}
                      <td className="py-4 sm:py-5 px-4 sm:px-6 text-center font-normal text-slate-700 text-sm sm:text-base md:text-[16px] tabular-nums border-l border-[#EFE6DA]/80">
                        {row.postIncorporation}
                      </td>

                      {/* Annual Compliance Price */}
                      <td className="py-4 sm:py-5 px-4 sm:px-6 text-center font-normal text-slate-700 text-sm sm:text-base md:text-[16px] tabular-nums border-l border-[#EFE6DA]/80">
                        {row.annualCompliance}
                      </td>

                      {/* Total Price */}
                      <td className={`py-4 sm:py-5 px-5 sm:px-6 text-center font-semibold text-[#8C6239] text-base sm:text-lg md:text-[18px] tabular-nums border-l border-[#EFE6DA]/80 bg-[#FAF4EB]/80 transition-colors duration-200 ${isCurrent ? 'font-bold' : ''}`}>
                        {row.total}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

        </div>

        {/* Call to Action Button */}
        <div className="mt-8 sm:mt-10 text-center">
          <button
            onClick={onOpenModal}
            className="px-7 py-3 sm:px-9 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#FF8A00] to-[#E66B00] hover:from-[#FF9500] hover:to-[#FF7A00] text-white font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Get Started with Your Package
          </button>
        </div>

      </div>
    </section>
  );
}
