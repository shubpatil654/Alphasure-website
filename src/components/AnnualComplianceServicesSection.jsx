import React, { useState } from 'react';
import { 
  FileText, 
  ChevronUp, 
  ChevronRight, 
  CheckCircle2, 
  UserCheck, 
  FileCheck,
  Building2,
  Users2,
  ArrowRight
} from 'lucide-react';

export default function AnnualComplianceServicesSection({ onOpenModal }) {
  const [activeCycle, setActiveCycle] = useState('Company'); // 'Company' or 'LLP'

  // Expandable state for Company side items (1, 2, 3) - Closed by default
  const [companyOpen, setCompanyOpen] = useState({ 1: false, 2: false, 3: false });

  // Expandable state for LLP side items (1, 2) - Closed by default
  const [llpOpen, setLlpOpen] = useState({ 1: false, 2: false });

  const toggleCompany = (idx, e) => {
    e.stopPropagation();
    setCompanyOpen(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleLlp = (idx, e) => {
    e.stopPropagation();
    setLlpOpen(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Company Compliance Deliverables
  const companyDeliverables = [
    { title: 'Notice of Annual General Meetings' },
    { title: "Director's Report and its Annexures" },
    { title: 'Annual Return and its Annexures' },
    { title: 'Documents relating to re-appointment of Auditors' },
    { title: 'Board Meeting Minutes as per Companies Act, 2013' },
    { title: 'Annual General Meeting Minutes as per Companies Act' },
    { title: 'Specific Departmental Meeting Minutes Drafting' },
  ];

  // LLP Compliance Deliverables
  const llpDeliverables = [
    { title: 'Annual Report and its Annexures' },
    { title: 'Annual Return and its Annexures' },
    { title: 'Declarations as required under the Act' },
    { title: 'Documents for Auditor Appointment / Re-appointment' },
    { title: 'Board / Partner Meeting Minutes (if required)' },
    { title: 'Departmental Meeting Minutes Drafting' },
  ];

  const isCompany = activeCycle === 'Company';
  const isLlp = activeCycle === 'LLP';

  return (
    <section 
      className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-18 bg-gradient-to-b from-[#FAF8FD] via-[#F5EEFB] to-[#FAF8FD] overflow-hidden select-none"
      id="annual-compliance-services"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background Soft Purple / Lavender Ambient Glows matching Periodic Pricing */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-400/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-300/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-fuchsia-300/15 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-purple-700 uppercase block mb-2 sm:mb-3">
            CORPORATE COMPLIANCE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Annual Compliance Services
          </h2>
          <p className="text-slate-600 font-medium text-sm sm:text-base mt-2.5 sm:mt-3">
            Choose your corporate entity type to explore the compliance coverage.
          </p>

          {/* ================= COMPANY / LLP PILL TOGGLE ================= */}
          <div className="mt-6 sm:mt-7 inline-flex items-center p-1 sm:p-1.5 rounded-full bg-slate-200/80 backdrop-blur-md border border-slate-300/60 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveCycle('Company')}
              className={`px-7 sm:px-9 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                isCompany
                  ? 'bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] text-white shadow-md shadow-purple-500/35 scale-[1.02]'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Company
            </button>
            <button
              type="button"
              onClick={() => setActiveCycle('LLP')}
              className={`px-7 sm:px-9 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                isLlp
                  ? 'bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] text-white shadow-md shadow-purple-500/35 scale-[1.02]'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              LLP
            </button>
          </div>
        </div>

        {/* ================= 2-COLUMN COMPARISON CARDS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch w-full max-w-6xl mx-auto">

          {/* ============================================================== */}
          {/* LEFT CARD: Company Compliance                                  */}
          {/* ============================================================== */}
          <div 
            onClick={() => setActiveCycle('Company')}
            className={`group relative w-full rounded-3xl sm:rounded-[32px] p-6 sm:p-8 lg:p-9 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer bg-gradient-to-b from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] text-white shadow-[0_25px_60px_-15px_rgba(124,58,237,0.45)] border-2 ${
              isCompany 
                ? 'border-purple-200/90 ring-4 ring-purple-300/30 scale-[1.01] z-20' 
                : 'border-purple-300/50 hover:border-purple-200 z-10'
            } ${isCompany ? 'block' : 'hidden lg:flex'}`}
          >
            {/* Top Glowing Glass Rings Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                <circle
                  cx="160"
                  cy="40"
                  r="75"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeOpacity="0.35"
                />
                <circle
                  cx="160"
                  cy="40"
                  r="45"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeOpacity="0.45"
                />
              </svg>
            </div>

            {/* Top Left Circular Orbit Dot */}
            <div className="absolute top-6 left-8 w-3.5 h-3.5 rounded-full border-2 border-white/80 bg-white/40 shadow-[0_0_12px_#ffffff]" />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6 sm:mb-7">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm bg-white/20 text-white backdrop-blur-md border border-white/30">
                  <Building2 className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug text-white">
                    Company Compliance
                  </h3>
                </div>
              </div>

              {/* Accordion / Content Items */}
              <div className="space-y-3.5">
                
                {/* --- ITEM 1: Preparation and Filing of Annual Filing Documents --- */}
                <div className="rounded-2xl overflow-hidden transition-all duration-300 bg-white shadow-md shadow-purple-950/15 border border-white/90">
                  <button
                    type="button"
                    onClick={(e) => toggleCompany(1, e)}
                    className="w-full p-4 sm:p-4.5 flex items-center justify-between text-left gap-3 transition-colors cursor-pointer bg-white hover:bg-slate-50"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 bg-purple-100 text-[#7C3AED]">
                        1
                      </span>
                      <div className="flex items-center gap-2.5">
                        <FileText className="w-5 h-5 shrink-0 text-[#7C3AED]" />
                        <span className="font-bold text-sm sm:text-base leading-snug text-slate-900">
                          Preparation and Filing of Annual Filing Documents
                        </span>
                      </div>
                    </div>
                    <span className="shrink-0 ml-2 text-slate-700 hover:text-purple-600 transition-colors">
                      {companyOpen[1] ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronRight size={20} strokeWidth={2.5} />}
                    </span>
                  </button>

                  {/* Expandable Body */}
                  {companyOpen[1] && (
                    <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 bg-white">
                      {/* Grid of Micro-deliverables */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3.5">
                        {companyDeliverables.map((item, idx) => (
                          <div 
                            key={idx}
                            className="p-3 rounded-xl flex items-start gap-2.5 bg-purple-50/50 hover:bg-purple-50/80 border border-purple-100/90 shadow-xs transition-colors"
                          >
                            <CheckCircle2 className="w-4.5 h-4.5 text-[#7C3AED] shrink-0 stroke-[2.3] mt-0.5" />
                            <span className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                              {item.title}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* ROC Filings Highlight Box */}
                      <div className="mt-3.5 p-3.5 rounded-xl flex items-start gap-2.5 bg-gradient-to-r from-purple-50 via-purple-50/60 to-indigo-50/40 border border-purple-200">
                        <CheckCircle2 className="w-5 h-5 text-[#7C3AED] shrink-0 stroke-[2.5] mt-0.5" />
                        <div>
                          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#7C3AED] block">
                            ROC FILINGS
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug block mt-0.5">
                            Annual Filing Forms: Form AOC-4, MGT-7A & ADT-1
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* --- ITEM 2: Completion of Director's KYC --- */}
                <div className="rounded-2xl overflow-hidden transition-all duration-300 bg-white shadow-md shadow-purple-950/15 border border-white/90">
                  <button
                    type="button"
                    onClick={(e) => toggleCompany(2, e)}
                    className="w-full p-4 sm:p-4.5 flex items-center justify-between text-left gap-3 transition-colors cursor-pointer bg-white hover:bg-slate-50"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 bg-purple-100 text-[#7C3AED]">
                        2
                      </span>
                      <div className="flex items-center gap-2.5">
                        <UserCheck className="w-5 h-5 shrink-0 text-[#7C3AED]" />
                        <span className="font-bold text-sm sm:text-base leading-snug text-slate-900">
                          Completion of Director's KYC
                        </span>
                      </div>
                    </div>
                    <span className="shrink-0 ml-2 text-slate-700 hover:text-purple-600 transition-colors">
                      {companyOpen[2] ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronRight size={20} strokeWidth={2.5} />}
                    </span>
                  </button>

                  {companyOpen[2] && (
                    <div className="p-4 sm:p-5 pt-3 border-t border-slate-100 bg-white">
                      <div className="p-3.5 rounded-xl bg-purple-50/50 border border-purple-100">
                        <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-800">
                          Timely filing of DIR-3 KYC (Web / Form) for all designated directors to keep Director Identification Numbers (DIN) fully active and compliant with MCA regulations.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* --- ITEM 3: Filing of Return of Deposits (Form DPT-3) --- */}
                <div className="rounded-2xl overflow-hidden transition-all duration-300 bg-white shadow-md shadow-purple-950/15 border border-white/90">
                  <button
                    type="button"
                    onClick={(e) => toggleCompany(3, e)}
                    className="w-full p-4 sm:p-4.5 flex items-center justify-between text-left gap-3 transition-colors cursor-pointer bg-white hover:bg-slate-50"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 bg-purple-100 text-[#7C3AED]">
                        3
                      </span>
                      <div className="flex items-center gap-2.5">
                        <FileCheck className="w-5 h-5 shrink-0 text-[#7C3AED]" />
                        <span className="font-bold text-sm sm:text-base leading-snug text-slate-900">
                          Filing of Return of Deposits (Form DPT-3)
                        </span>
                      </div>
                    </div>
                    <span className="shrink-0 ml-2 text-slate-700 hover:text-purple-600 transition-colors">
                      {companyOpen[3] ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronRight size={20} strokeWidth={2.5} />}
                    </span>
                  </button>

                  {companyOpen[3] && (
                    <div className="p-4 sm:p-5 pt-3 border-t border-slate-100 bg-white">
                      <div className="p-3.5 rounded-xl bg-purple-50/50 border border-purple-100">
                        <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-800">
                          Statutory annual reporting of deposits or transactions not considered as deposits, filed before June 30th every financial year to prevent MCA late fee penalties.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>


          {/* ============================================================== */}
          {/* RIGHT CARD: LLP Compliance                                     */}
          {/* ============================================================== */}
          <div 
            onClick={() => setActiveCycle('LLP')}
            className={`group relative w-full rounded-3xl sm:rounded-[32px] p-6 sm:p-8 lg:p-9 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer bg-gradient-to-b from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] text-white shadow-[0_25px_60px_-15px_rgba(124,58,237,0.45)] border-2 ${
              isLlp 
                ? 'border-purple-200/90 ring-4 ring-purple-300/30 scale-[1.01] z-20' 
                : 'border-purple-300/50 hover:border-purple-200 z-10'
            } ${isLlp ? 'block' : 'hidden lg:flex'}`}
          >
            {/* Top Glowing Glass Rings Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                <circle
                  cx="160"
                  cy="40"
                  r="75"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeOpacity="0.35"
                />
                <circle
                  cx="160"
                  cy="40"
                  r="45"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeOpacity="0.45"
                />
              </svg>
            </div>

            {/* Top Left Circular Orbit Dot */}
            <div className="absolute top-6 left-8 w-3.5 h-3.5 rounded-full border-2 border-white/80 bg-white/40 shadow-[0_0_12px_#ffffff]" />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6 sm:mb-7">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm bg-white/20 text-white backdrop-blur-md border border-white/30">
                  <Users2 className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug text-white">
                    LLP Compliance
                  </h3>
                </div>
              </div>

              {/* Accordion / Content Items */}
              <div className="space-y-3.5">
                
                {/* --- ITEM 1: Preparation and Filing of Annual Filing Documents --- */}
                <div className="rounded-2xl overflow-hidden transition-all duration-300 bg-white shadow-md shadow-purple-950/15 border border-white/90">
                  <button
                    type="button"
                    onClick={(e) => toggleLlp(1, e)}
                    className="w-full p-4 sm:p-4.5 flex items-center justify-between text-left gap-3 transition-colors cursor-pointer bg-white hover:bg-slate-50"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 bg-purple-100 text-[#7C3AED]">
                        1
                      </span>
                      <div className="flex items-center gap-2.5">
                        <FileText className="w-5 h-5 shrink-0 text-[#7C3AED]" />
                        <span className="font-bold text-sm sm:text-base leading-snug text-slate-900">
                          Preparation and Filing of Annual Filing Documents
                        </span>
                      </div>
                    </div>
                    <span className="shrink-0 ml-2 text-slate-700 hover:text-purple-600 transition-colors">
                      {llpOpen[1] ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronRight size={20} strokeWidth={2.5} />}
                    </span>
                  </button>

                  {/* Expandable Body */}
                  {llpOpen[1] && (
                    <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 bg-white">
                      {/* Grid of Micro-deliverables */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3.5">
                        {llpDeliverables.map((item, idx) => (
                          <div 
                            key={idx}
                            className="p-3 rounded-xl flex items-start gap-2.5 bg-purple-50/50 hover:bg-purple-50/80 border border-purple-100/90 shadow-xs transition-colors"
                          >
                            <CheckCircle2 className="w-4.5 h-4.5 text-[#7C3AED] shrink-0 stroke-[2.3] mt-0.5" />
                            <span className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                              {item.title}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* MCA Returns Highlight Box */}
                      <div className="mt-3.5 p-3.5 rounded-xl flex items-start gap-2.5 bg-gradient-to-r from-purple-50 via-purple-50/60 to-indigo-50/40 border border-purple-200">
                        <CheckCircle2 className="w-5 h-5 text-[#7C3AED] shrink-0 stroke-[2.5] mt-0.5" />
                        <div>
                          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#7C3AED] block">
                            MCA RETURNS
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug block mt-0.5">
                            Preparation & Filing of Form LLP-11 & Form LLP-8
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* --- ITEM 2: Completion of Partner KYC as and when required by the Ministry --- */}
                <div className="rounded-2xl overflow-hidden transition-all duration-300 bg-white shadow-md shadow-purple-950/15 border border-white/90">
                  <button
                    type="button"
                    onClick={(e) => toggleLlp(2, e)}
                    className="w-full p-4 sm:p-4.5 flex items-center justify-between text-left gap-3 transition-colors cursor-pointer bg-white hover:bg-slate-50"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 bg-purple-100 text-[#7C3AED]">
                        2
                      </span>
                      <div className="flex items-center gap-2.5">
                        <UserCheck className="w-5 h-5 shrink-0 text-[#7C3AED]" />
                        <span className="font-bold text-sm sm:text-base leading-snug text-slate-900">
                          Completion of Partner KYC as and when required by the Ministry
                        </span>
                      </div>
                    </div>
                    <span className="shrink-0 ml-2 text-slate-700 hover:text-purple-600 transition-colors">
                      {llpOpen[2] ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronRight size={20} strokeWidth={2.5} />}
                    </span>
                  </button>

                  {llpOpen[2] && (
                    <div className="p-4 sm:p-5 pt-3 border-t border-slate-100 bg-white">
                      <div className="p-3.5 rounded-xl bg-purple-50/50 border border-purple-100">
                        <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-800">
                          Annual filing of DIR-3 KYC for all designated partners to maintain an uninterrupted active status for your DPIN (Designated Partner Identification Number) without MCA late fees or penalties.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM CTA BUTTON ================= */}
        <div className="mt-12 sm:mt-14 text-center">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-3 px-8 sm:px-9 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] hover:from-[#7C3AED] hover:to-[#5B21B6] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl hover:shadow-purple-500/35 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Get Complete Secretarial Coverage</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
