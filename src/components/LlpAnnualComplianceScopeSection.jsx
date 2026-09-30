import React from 'react';
import { 
  FileText, 
  UserCheck, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  FileSpreadsheet,
  Layers,
  FileSignature,
  Building2,
  FileCheck
} from 'lucide-react';

export default function LlpAnnualComplianceScopeSection({ onOpenModal }) {
  const llpDeliverables = [
    {
      title: 'Annual Report and its Annexures',
      category: 'Annual Reporting',
      icon: FileSpreadsheet,
    },
    {
      title: 'Annual Return and its Annexures',
      category: 'Statutory Filings',
      icon: Layers,
    },
    {
      title: 'Declarations as required under the Act',
      category: 'Statutory Compliance',
      icon: ShieldCheck,
    },
    {
      title: 'Documents for Auditor Appointment / Re-appointment',
      category: 'Auditor Compliance',
      icon: FileSignature,
    },
    {
      title: 'Board / Partner Meeting Minutes (if required)',
      category: 'Partner Governance',
      icon: Building2,
    },
    {
      title: 'Departmental Meeting Minutes Drafting',
      category: 'Custom Drafting',
      icon: FileCheck,
    },
    {
      title: 'Preparation & Filing of Form LLP-11 & Form LLP-8',
      category: 'MCA Returns',
      icon: CheckCircle2,
      highlight: true,
    },
  ];

  return (
    <section 
      className="relative w-full py-8 sm:py-10 md:py-12 bg-[#FAFBFD] overflow-hidden select-none border-t border-slate-200/60"
      id="llp-annual-scope"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      {/* Background Soft Curved Continuity Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <path d="M-60 200 C 450 120, 850 400, 1250 220 C 1380 160, 1450 320, 1550 280" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="5 5" />
          <path d="M-60 620 C 400 480, 800 680, 1200 520 C 1350 460, 1450 620, 1550 560" stroke="#E2E8F0" strokeWidth="1.2" />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= Master Stacked Container ================= */}
        <div className="w-full bg-white rounded-3xl sm:rounded-[32px] border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.08)] overflow-hidden divide-y divide-slate-200">
          
          {/* ================= TOP SECTION: 1. Preparation and Filing of Annual Filing Documents viz; ================= */}
          <div className="p-6 sm:p-9 lg:p-12 bg-gradient-to-b from-white via-slate-50/30 to-white">
            <div className="flex items-center gap-3.5 mb-6 sm:mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100/70 border border-indigo-200/80 flex items-center justify-center shrink-0 text-[#4F46E5] shadow-sm">
                <FileText className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-[26px] font-black text-[#0F172A] tracking-tight leading-snug">
                  1. Preparation and Filing of Annual Filing Documents
                </h3>
              </div>
            </div>

            {/* Modern Deliverables Micro-Card Grid (No plain bullet dots) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {llpDeliverables.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`group relative p-4 sm:p-4.5 rounded-2xl border transition-all duration-200 flex items-start gap-3.5 ${
                    item.highlight 
                      ? 'bg-indigo-50/40 border-indigo-200/90 hover:bg-indigo-50/80 hover:border-indigo-300 sm:col-span-2 lg:col-span-3' 
                      : 'bg-white border-slate-200/80 hover:border-indigo-200 hover:bg-indigo-50/20 hover:shadow-sm'
                  }`}
                >
                  {/* Status Badge */}
                  <div className="w-8 h-8 rounded-xl bg-indigo-100/70 flex items-center justify-center shrink-0 text-[#4F46E5] group-hover:scale-110 transition-transform mt-0.5">
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
              ))}
            </div>

            {/* Bottom Metadata Bar */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-500">
              <span>Statutory Compliance: LLP Act, 2008</span>
              <span className="text-[#4F46E5] font-extrabold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Form 8 & Form 11 Complete Coverage
              </span>
            </div>
          </div>

          {/* ================= BOTTOM SECTION: 2. Completion of Director's KYC ================= */}
          <div className="p-6 sm:p-9 lg:p-12 bg-gradient-to-br from-white via-white to-indigo-50/20 hover:bg-indigo-50/15 transition-colors">
            <div className="flex items-center gap-4 mb-4 sm:mb-5">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0 text-amber-600 shadow-sm">
                <UserCheck className="w-7 h-7 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-[26px] font-black text-[#0F172A] tracking-tight leading-snug">
                  2. Completion of Director's KYC as and when required by the Ministry
                </h3>
              </div>
            </div>

            <div className="mt-2">
              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed bg-white/90 p-4 sm:p-5 rounded-2xl border border-amber-100/90 shadow-xs max-w-4xl">
                Annual filing of DIR-3 KYC for all designated partners to maintain an uninterrupted active status for your DPIN (Designated Partner Identification Number) without MCA late fees or penalties.
              </p>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-500">
                <span>Annual Partner Verification</span>
                <span className="text-amber-600 font-extrabold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  Active DPIN Protection
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="mt-10 sm:mt-12 text-center">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#4F46E5] via-[#4338CA] to-[#3730A3] hover:from-[#6366F1] hover:to-[#4338CA] text-white font-extrabold text-base sm:text-lg tracking-wide shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Consult an LLP Compliance Expert</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
