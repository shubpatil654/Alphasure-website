import React, { useState } from 'react';
import { 
  FileText, 
  Calendar, 
  ChevronUp, 
  ChevronRight, 
  CheckCircle2, 
  UserCheck, 
  FileCheck,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export default function AnnualComplianceServicesSection({ onOpenModal }) {
  const [activeCycle, setActiveCycle] = useState('Monthly'); // 'Monthly' or 'Yearly'

  // Expandable state for Monthly side items (1, 2, 3)
  const [monthlyOpen, setMonthlyOpen] = useState({ 1: true, 2: false, 3: false });

  // Expandable state for Yearly side items (1, 2)
  const [yearlyOpen, setYearlyOpen] = useState({ 1: true, 2: false });

  const toggleMonthly = (idx) => {
    setMonthlyOpen(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleYearly = (idx) => {
    setYearlyOpen(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Company / Monthly Compliance Deliverables
  const monthlyDeliverables = [
    { title: 'Notice of Annual General Meetings' },
    { title: "Director's Report and its Annexures" },
    { title: 'Annual Return and its Annexures' },
    { title: 'Documents relating to re-appointment of Auditors' },
    { title: 'Board Meeting Minutes as per Companies Act, 2013' },
    { title: 'Annual General Meeting Minutes as per Companies Act' },
    { title: 'Specific Departmental Meeting Minutes Drafting' },
  ];

  // LLP / Yearly Compliance Deliverables
  const yearlyDeliverables = [
    { title: 'Annual Report and its Annexures' },
    { title: 'Annual Return and its Annexures' },
    { title: 'Declarations as required under the Act' },
    { title: 'Documents for Auditor Appointment / Re-appointment' },
    { title: 'Board / Partner Meeting Minutes (if required)' },
    { title: 'Departmental Meeting Minutes Drafting' },
  ];

  return (
    <section 
      className="relative w-full pt-14 sm:pt-18 lg:pt-20 pb-16 sm:pb-20 bg-gradient-to-b from-[#F5F8FF]/60 via-[#F9FBFF]/80 to-white overflow-hidden select-none"
      id="annual-compliance-services"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background Soft Wave Graphic Curves */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-35">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
          <path d="M-100 160 C 350 90, 750 320, 1150 180 C 1320 110, 1420 280, 1550 220" stroke="#DBEAFE" strokeWidth="1.5" />
          <path d="M-80 640 C 360 520, 820 720, 1220 540 C 1360 480, 1460 620, 1560 560" stroke="#E2E8F0" strokeWidth="1.2" strokeDasharray="5 5" />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-9 sm:mb-11">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase block mb-2 sm:mb-3">
            CORPORATE COMPLIANCE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1E48] tracking-tight leading-tight">
            Annual Compliance Services
          </h2>
          <p className="text-slate-600 font-medium text-sm sm:text-base mt-2.5 sm:mt-3">
            Choose your filing cycle to explore the compliance coverage.
          </p>

          {/* ================= CYCLE TOGGLE PILL BUTTON ================= */}
          <div className="mt-6 sm:mt-7 inline-flex items-center p-1 sm:p-1.5 rounded-full bg-slate-100 border border-slate-200/90 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveCycle('Monthly')}
              className={`px-7 sm:px-9 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeCycle === 'Monthly'
                  ? 'bg-[#FA5A16] text-white shadow-md shadow-orange-500/25 scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setActiveCycle('Yearly')}
              className={`px-7 sm:px-9 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeCycle === 'Yearly'
                  ? 'bg-[#FA5A16] text-white shadow-md shadow-orange-500/25 scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* ================= 2-COLUMN COMPARISON CARDS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start w-full">

          {/* ============================================================== */}
          {/* LEFT CARD: Monthly Compliance                                  */}
          {/* ============================================================== */}
          <div className={`w-full bg-white rounded-3xl sm:rounded-[32px] p-5 sm:p-7 lg:p-8 border transition-all duration-300 shadow-[0_15px_45px_-10px_rgba(15,23,42,0.06)] flex flex-col justify-between ${
            activeCycle === 'Monthly' 
              ? 'border-orange-300 ring-2 ring-orange-400/20 shadow-orange-500/10' 
              : 'border-slate-200/90'
          }`}>
            <div>
              {/* Header */}
              <div className="flex items-start gap-4 mb-5 sm:mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/80 flex items-center justify-center shrink-0 text-[#FA5A16] shadow-xs">
                  <FileText className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight leading-snug">
                    Monthly Compliance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                    Ongoing monthly, quarterly and event-based compliance requirements.
                  </p>
                </div>
              </div>

              {/* Accordion / Content Items */}
              <div className="space-y-3 sm:space-y-3.5">
                
                {/* --- ITEM 1: Preparation and Filing of Annual Filing Documents --- */}
                <div className="rounded-2xl border border-orange-200/80 bg-white overflow-hidden shadow-xs transition-all">
                  <button
                    type="button"
                    onClick={() => toggleMonthly(1)}
                    className="w-full p-3.5 sm:p-4 flex items-center justify-between text-left gap-3 hover:bg-orange-50/40 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-orange-100/70 text-[#FA5A16] font-bold text-xs sm:text-sm flex items-center justify-center shrink-0">
                        1
                      </span>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4.5 h-4.5 text-[#FA5A16] shrink-0" />
                        <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                          Preparation and Filing of Annual Filing Documents
                        </span>
                      </div>
                    </div>
                    <span className="text-[#FA5A16] shrink-0 ml-2">
                      {monthlyOpen[1] ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronRight size={20} strokeWidth={2.5} />}
                    </span>
                  </button>

                  {/* Expandable Body */}
                  {monthlyOpen[1] && (
                    <div className="p-3.5 sm:p-4 pt-0 border-t border-orange-100/80 bg-gradient-to-b from-white to-orange-50/20">
                      {/* Grid of Micro-deliverables */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mt-3">
                        {monthlyDeliverables.map((item, idx) => (
                          <div 
                            key={idx}
                            className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-start gap-2.5 shadow-xs hover:border-orange-200 transition-colors"
                          >
                            <CheckCircle2 className="w-4.5 h-4.5 text-[#FA5A16] shrink-0 stroke-[2.3] mt-0.5" />
                            <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                              {item.title}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* ROC Filings Highlight Box */}
                      <div className="mt-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/90 flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-[#FA5A16] shrink-0 stroke-[2.5] mt-0.5" />
                        <div>
                          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#FA5A16] block">
                            ROC FILINGS
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug block">
                            Annual Filing Forms: Form AOC-4, MGT-7A & ADT-1
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* --- ITEM 2: Completion of Director's KYC --- */}
                <div className="rounded-2xl border border-amber-200/70 bg-amber-50/30 overflow-hidden shadow-xs transition-all">
                  <button
                    type="button"
                    onClick={() => toggleMonthly(2)}
                    className="w-full p-3.5 sm:p-4 flex items-center justify-between text-left gap-3 hover:bg-amber-50/80 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 font-bold text-xs sm:text-sm flex items-center justify-center shrink-0">
                        2
                      </span>
                      <div className="flex items-center gap-2">
                        <UserCheck className="w-4.5 h-4.5 text-amber-600 shrink-0" />
                        <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                          Completion of Director's KYC
                        </span>
                      </div>
                    </div>
                    <span className="text-slate-500 shrink-0 ml-2">
                      {monthlyOpen[2] ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronRight size={20} strokeWidth={2.5} />}
                    </span>
                  </button>

                  {monthlyOpen[2] && (
                    <div className="p-4 pt-1 border-t border-amber-200/50 bg-white">
                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        Timely filing of DIR-3 KYC (Web / Form) for all designated directors to keep Director Identification Numbers (DIN) fully active and compliant with MCA regulations.
                      </p>
                    </div>
                  )}
                </div>

                {/* --- ITEM 3: Filing of Return of Deposits (Form DPT-3) --- */}
                <div className="rounded-2xl border border-blue-200/70 bg-blue-50/30 overflow-hidden shadow-xs transition-all">
                  <button
                    type="button"
                    onClick={() => toggleMonthly(3)}
                    className="w-full p-3.5 sm:p-4 flex items-center justify-between text-left gap-3 hover:bg-blue-50/80 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs sm:text-sm flex items-center justify-center shrink-0">
                        3
                      </span>
                      <div className="flex items-center gap-2">
                        <FileCheck className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                        <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                          Filing of Return of Deposits (Form DPT-3)
                        </span>
                      </div>
                    </div>
                    <span className="text-slate-500 shrink-0 ml-2">
                      {monthlyOpen[3] ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronRight size={20} strokeWidth={2.5} />}
                    </span>
                  </button>

                  {monthlyOpen[3] && (
                    <div className="p-4 pt-1 border-t border-blue-200/50 bg-white">
                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        Statutory annual reporting of deposits or transactions not considered as deposits, filed before June 30th every financial year to prevent MCA late fee penalties.
                      </p>
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Bottom Meta Footer */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-bold text-slate-500">
              <span>Companies Act, 2013 Mandate</span>
              <span className="text-[#FA5A16] font-extrabold flex items-center gap-1">
                Comprehensive Filings
              </span>
            </div>
          </div>


          {/* ============================================================== */}
          {/* RIGHT CARD: Yearly Compliance                                   */}
          {/* ============================================================== */}
          <div className={`w-full bg-white rounded-3xl sm:rounded-[32px] p-5 sm:p-7 lg:p-8 border transition-all duration-300 shadow-[0_15px_45px_-10px_rgba(15,23,42,0.06)] flex flex-col justify-between ${
            activeCycle === 'Yearly' 
              ? 'border-blue-400 ring-2 ring-blue-500/20 shadow-blue-500/10' 
              : 'border-slate-200/90'
          }`}>
            <div>
              {/* Header */}
              <div className="flex items-start gap-4 mb-5 sm:mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0 text-[#2563EB] shadow-xs">
                  <Calendar className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight leading-snug">
                    Yearly Compliance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                    Annual statutory filings and partner-specific compliance.
                  </p>
                </div>
              </div>

              {/* Accordion / Content Items */}
              <div className="space-y-3 sm:space-y-3.5">
                
                {/* --- ITEM 1: Preparation and Filing of Annual Filing Documents --- */}
                <div className="rounded-2xl border border-blue-200/80 bg-white overflow-hidden shadow-xs transition-all">
                  <button
                    type="button"
                    onClick={() => toggleYearly(1)}
                    className="w-full p-3.5 sm:p-4 flex items-center justify-between text-left gap-3 hover:bg-blue-50/40 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-blue-100/70 text-[#2563EB] font-bold text-xs sm:text-sm flex items-center justify-center shrink-0">
                        1
                      </span>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4.5 h-4.5 text-[#2563EB] shrink-0" />
                        <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                          Preparation and Filing of Annual Filing Documents
                        </span>
                      </div>
                    </div>
                    <span className="text-[#2563EB] shrink-0 ml-2">
                      {yearlyOpen[1] ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronRight size={20} strokeWidth={2.5} />}
                    </span>
                  </button>

                  {/* Expandable Body */}
                  {yearlyOpen[1] && (
                    <div className="p-3.5 sm:p-4 pt-0 border-t border-blue-100/80 bg-gradient-to-b from-white to-blue-50/20">
                      {/* Grid of Micro-deliverables */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mt-3">
                        {yearlyDeliverables.map((item, idx) => (
                          <div 
                            key={idx}
                            className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-start gap-2.5 shadow-xs hover:border-blue-200 transition-colors"
                          >
                            <CheckCircle2 className="w-4.5 h-4.5 text-[#2563EB] shrink-0 stroke-[2.3] mt-0.5" />
                            <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                              {item.title}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* MCA Returns Highlight Box */}
                      <div className="mt-3 p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/90 flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 stroke-[2.5] mt-0.5" />
                        <div>
                          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#2563EB] block">
                            MCA RETURNS
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug block">
                            Preparation & Filing of Form LLP-11 & Form LLP-8
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* --- ITEM 2: Completion of Director's KYC as and when required by the Ministry --- */}
                <div className="rounded-2xl border border-amber-200/70 bg-amber-50/30 overflow-hidden shadow-xs transition-all">
                  <button
                    type="button"
                    onClick={() => toggleYearly(2)}
                    className="w-full p-3.5 sm:p-4 flex items-center justify-between text-left gap-3 hover:bg-amber-50/80 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 font-bold text-xs sm:text-sm flex items-center justify-center shrink-0">
                        2
                      </span>
                      <div className="flex items-center gap-2">
                        <UserCheck className="w-4.5 h-4.5 text-amber-600 shrink-0" />
                        <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                          Completion of Director's KYC as and when required by the Ministry
                        </span>
                      </div>
                    </div>
                    <span className="text-slate-500 shrink-0 ml-2">
                      {yearlyOpen[2] ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronRight size={20} strokeWidth={2.5} />}
                    </span>
                  </button>

                  {yearlyOpen[2] && (
                    <div className="p-4 pt-1 border-t border-amber-200/50 bg-white">
                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        Annual filing of DIR-3 KYC for all designated partners to maintain an uninterrupted active status for your DPIN (Designated Partner Identification Number) without MCA late fees or penalties.
                      </p>
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Bottom Meta Footer */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-bold text-slate-500">
              <span>Statutory Compliance: LLP Act, 2008</span>
              <span className="text-[#2563EB] font-extrabold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Form 8 & Form 11 Complete Coverage
              </span>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM CTA BUTTON ================= */}
        <div className="mt-12 sm:mt-14 text-center">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-3 px-8 sm:px-9 py-3.5 sm:py-4 rounded-2xl bg-[#FA5A16] hover:bg-[#EA4B07] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Get Complete Secretarial Coverage</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
