import React from 'react';
import { 
  FileCheck, 
  UserCheck, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  CalendarDays, 
  Layers, 
  FileSpreadsheet,
  Building2,
  FileSignature
} from 'lucide-react';

export default function SecretarialScopeSection({ onOpenModal }) {
  const companyDeliverables = [
    {
      title: 'Notice of Annual General Meetings',
      category: 'Meeting Protocol',
      icon: CalendarDays,
    },
    {
      title: "Director's Report and its Annexures",
      category: 'Annual Reporting',
      icon: FileSpreadsheet,
    },
    {
      title: 'Annual Return and its Annexures',
      category: 'Statutory Return',
      icon: Layers,
    },
    {
      title: 'Documents relating to re-appointment of Auditors',
      category: 'Auditor Compliance',
      icon: FileSignature,
    },
    {
      title: 'Board Meeting Minutes as per Companies Act, 2013',
      category: 'Corporate Governance',
      icon: Building2,
    },
    {
      title: 'Annual General Meeting Minutes as per Companies Act',
      category: 'AGM Documentation',
      icon: FileText,
    },
    {
      title: 'Specific Departmental Meeting Minutes Drafting',
      category: 'Drafting Support',
      icon: FileCheck,
    },
    {
      title: 'Annual Filing Forms: Form AOC-4, MGT-7A & ADT-1',
      category: 'ROC Filings',
      icon: ShieldCheck,
      highlight: true,
    },
  ];

  return (
    <section 
      className="relative w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden select-none"
      id="secretarial-scope"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      {/* Background Soft Curved Continuity Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <path d="M-100 150 C 400 100, 700 350, 1100 200 C 1300 120, 1400 300, 1550 250" stroke="#E2D8C8" strokeWidth="1.5" />
          <path d="M-100 650 C 350 500, 800 700, 1200 550 C 1350 480, 1450 650, 1550 580" stroke="#ECE2D3" strokeWidth="1.2" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#FA5A16] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-xs">
            ANNUAL SECRETARIAL DELIVERABLES
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-[#0F172A] tracking-tight leading-tight">
            One Package. Complete{' '}
            <span className="relative inline-block text-[#FA5A16]">
              Peace of Mind.
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
        </div>

        {/* ================= Master Split Grid (Modern Micro-Card Architecture) ================= */}
        <div className="w-full bg-white rounded-3xl sm:rounded-[32px] border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.08)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            
            {/* ================= LEFT COLUMN: Item 1 (Full Height with Micro-Card Grid) ================= */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-b from-white via-slate-50/30 to-white">
              <div>
                {/* Header with Icon Badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/70 border border-orange-200/80 flex items-center justify-center shrink-0 text-[#FA5A16] shadow-sm">
                    <FileText className="w-7 h-7 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-[25px] font-black text-[#0F172A] tracking-tight leading-snug">
                      1. Preparation and Filing of Annual Filing Documents
                    </h3>
                  </div>
                </div>

                {/* Micro-Card Grid (No boring bullets - Modern Feature Cards) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  {companyDeliverables.map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <div 
                        key={idx} 
                        className={`group relative p-4 sm:p-4.5 rounded-2xl border transition-all duration-200 flex items-start gap-3.5 ${
                          item.highlight 
                            ? 'bg-orange-50/40 border-orange-200/90 hover:bg-orange-50/80 hover:border-orange-300 sm:col-span-2' 
                            : 'bg-white border-slate-200/80 hover:border-orange-200 hover:bg-orange-50/20 hover:shadow-sm'
                        }`}
                      >
                        {/* Status / Glyph Icon */}
                        <div className="w-8 h-8 rounded-xl bg-orange-100/70 flex items-center justify-center shrink-0 text-[#FA5A16] group-hover:scale-110 transition-transform mt-0.5">
                          <CheckCircle2 className="w-4.5 h-4.5 stroke-[2.5]" />
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                            {item.category}
                          </span>
                          <span className="text-sm sm:text-[15px] font-bold text-slate-900 leading-snug block group-hover:text-black">
                            {item.title}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Quick Tag */}
              <div className="mt-8 pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-bold text-slate-500">
                <span>Companies Act, 2013 Mandate</span>
                <span className="text-[#FA5A16] font-extrabold flex items-center gap-1">
                  Comprehensive Filings
                </span>
              </div>
            </div>

            {/* ================= RIGHT COLUMN: Item 2 & Item 3 ================= */}
            <div className="lg:col-span-5 flex flex-col divide-y divide-slate-200">
              
              {/* Item 2: Completion of Director's KYC */}
              <div className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col justify-between bg-gradient-to-br from-white via-white to-amber-50/30 hover:bg-amber-50/20 transition-colors">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0 text-amber-600 shadow-sm">
                      <UserCheck className="w-7 h-7 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight leading-snug">
                        2. Completion of Director's KYC
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mt-3 bg-white/90 p-4 sm:p-5 rounded-2xl border border-amber-100/90 shadow-xs">
                    Timely filing of DIR-3 KYC (Web / Form) for all designated directors to keep Director Identification Numbers (DIN) fully active and compliant with MCA regulations.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-500">
                  <span>Mandatory Annual Verification</span>
                  <span className="text-amber-600 font-extrabold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Active DIN Assurance
                  </span>
                </div>
              </div>

              {/* Item 3: Filing of Return of Deposits in Form DPT-3 */}
              <div className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col justify-between bg-gradient-to-br from-white via-white to-blue-50/30 hover:bg-blue-50/20 transition-colors">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0 text-blue-600 shadow-sm">
                      <FileCheck className="w-7 h-7 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight leading-snug">
                        3. Filing of Return of Deposits (Form DPT-3)
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mt-3 bg-white/90 p-4 sm:p-5 rounded-2xl border border-blue-100/90 shadow-xs">
                    Statutory annual reporting of deposits or transactions not considered as deposits, filed before June 30th every financial year to prevent MCA late fee penalties.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-500">
                  <span>Annual ROC Compliance</span>
                  <span className="text-blue-600 font-extrabold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Form DPT-3 Filed
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* CTA Footer Strip */}
        <div className="mt-10 sm:mt-12 text-center">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF8A00] via-[#FF7A00] to-[#E66B00] hover:from-[#FF9500] hover:to-[#FF6B00] text-white font-extrabold text-base sm:text-lg tracking-wide shadow-xl hover:shadow-[#FF8A00]/40 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Get Complete Secretarial Coverage</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
