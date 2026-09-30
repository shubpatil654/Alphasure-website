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
      className="relative w-full bg-transparent py-8 sm:py-10 md:py-12 select-none overflow-hidden"
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
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A67C52]/10 border border-[#A67C52]/30 text-[#A67C52] alpha-eyebrow mb-2.5">
            <Building2 className="w-4 h-4 text-[#A67C52]" />
            <span>COMPANY FORMATION & SECRETARIAL</span>
          </div>
          <h2 className="alpha-h2 font-bold text-slate-950 tracking-tight">
            Incorporation & secretarial
          </h2>
          <p className="mt-2 alpha-large-body text-slate-700 font-normal max-w-3xl mx-auto">
            Clear, all-inclusive pricing breakdown from name reservation to full annual ROC compliance.
          </p>
        </div>

        {/* ================= PRICING TABLE CONTAINER ================= */}
        <div className="w-full max-w-[1200px] bg-white rounded-[22px] sm:rounded-[26px] border border-[#E5D8C5] shadow-[0_8px_30px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 p-2 sm:p-2.5">
          
          {/* Responsive Scroll Wrapper for Mobile/Tablet */}
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[760px] md:min-w-full">
              <thead>
                <tr className="bg-[#FAF7F2]/50">
                  {/* Column 1: Structure Name Header */}
                  <th className="py-3.5 sm:py-4 px-5 sm:px-6 w-[20%] font-semibold text-slate-500 text-xs sm:text-sm uppercase tracking-wider">
                    Structure
                  </th>
                  
                  {/* Column 2: Incorporation */}
                  <th className="py-3.5 sm:py-4 px-4 sm:px-6 w-[20%] text-center text-slate-950 font-serif text-base sm:text-lg md:text-[20px] font-black tracking-tight border-l border-[#EFE6DA]/90">
                    Incorporation
                  </th>

                  {/* Column 3: Post-Incorporation compliance */}
                  <th className="py-3.5 sm:py-4 px-4 sm:px-6 w-[22%] text-center text-slate-950 font-serif text-base sm:text-lg md:text-[20px] font-black tracking-tight border-l border-[#EFE6DA]/90 leading-snug">
                    Post-Incorporation <br />
                    compliance
                  </th>

                  {/* Column 4: Annual Compliance Package */}
                  <th className="py-3.5 sm:py-4 px-4 sm:px-6 w-[22%] text-center text-slate-950 font-serif text-base sm:text-lg md:text-[20px] font-black tracking-tight border-l border-[#EFE6DA]/90 leading-snug">
                    Annual Compliance <br />
                    Package
                  </th>

                  {/* Column 5: Total */}
                  <th className="py-3.5 sm:py-4 px-5 sm:px-6 w-[16%] text-center text-[#8C6239] font-serif text-lg sm:text-xl md:text-[23px] font-black tracking-tight border-l border-[#EFE6DA]/90 bg-[#FAF4EB]/90">
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
                        relative transition-all duration-200 cursor-pointer select-none
                        border-t border-[#EFE6DA]/90 group
                        ${isCurrent ? 'bg-[#FAF5ED] outline outline-1.5 outline-[#C9A87C] shadow-xs z-10' : 'hover:bg-[#FAF7F2]/70'}
                      `}
                      style={isCurrent ? { borderRadius: '14px' } : {}}
                    >
                      {/* Structure Name */}
                      <td className={`py-3.5 sm:py-4 px-5 sm:px-6 font-serif text-lg sm:text-xl md:text-[22px] font-black text-slate-950 tracking-tight transition-colors duration-200 ${isCurrent ? 'rounded-l-xl text-[#8C6239]' : 'group-hover:text-[#8C6239]'}`}>
                        <div className="flex items-center gap-2.5">
                          <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${isCurrent ? 'bg-[#FA5A16] scale-100 opacity-100' : 'bg-transparent scale-50 opacity-0'}`} />
                          <span>{row.name}</span>
                        </div>
                      </td>

                      {/* Incorporation Price */}
                      <td className="py-3.5 sm:py-4 px-4 sm:px-6 text-center font-serif text-base sm:text-lg md:text-[20px] text-slate-950 font-bold border-l border-[#EFE6DA]/90">
                        {row.incorporation}
                      </td>

                      {/* Post-Incorporation Price */}
                      <td className="py-3.5 sm:py-4 px-4 sm:px-6 text-center font-serif text-base sm:text-lg md:text-[20px] text-slate-950 font-bold border-l border-[#EFE6DA]/90">
                        {row.postIncorporation}
                      </td>

                      {/* Annual Compliance Price */}
                      <td className="py-3.5 sm:py-4 px-4 sm:px-6 text-center font-serif text-base sm:text-lg md:text-[20px] text-slate-950 font-bold border-l border-[#EFE6DA]/90">
                        {row.annualCompliance}
                      </td>

                      {/* Total Price */}
                      <td className={`py-3.5 sm:py-4 px-5 sm:px-6 text-center font-serif text-lg sm:text-xl md:text-[24px] font-black text-[#8C6239] border-l border-[#EFE6DA]/90 bg-[#FAF4EB]/90 transition-transform duration-200 ${isCurrent ? 'rounded-r-xl scale-105' : ''}`}>
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
        <div className="mt-4 sm:mt-5 text-center">
          <button
            onClick={onOpenModal}
            className="px-7 py-3 sm:px-8 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#FF8A00] via-[#FF7A00] to-[#E66B00] hover:from-[#FF9500] hover:to-[#FF6B00] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-[#FF8A00]/40 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Get Started with Your Package</span>
          </button>
        </div>

      </div>
    </section>
  );
}
