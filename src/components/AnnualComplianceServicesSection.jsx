import React, { useState } from 'react';
import { 
  FileText, 
  Calendar, 
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

  // Expandable state for Company side items (1, 2, 3)
  const [companyOpen, setCompanyOpen] = useState({ 1: true, 2: false, 3: false });

  // Expandable state for LLP side items (1, 2)
  const [llpOpen, setLlpOpen] = useState({ 1: true, 2: false });

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
                  ? 'bg-gradient-to-r from-[#FA5A16] to-[#EA4B07] text-white shadow-md shadow-orange-500/30 scale-[1.02]'
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
                  ? 'bg-gradient-to-r from-[#FA5A16] to-[#EA4B07] text-white shadow-md shadow-orange-500/30 scale-[1.02]'
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
            className={`group relative w-full rounded-3xl sm:rounded-[32px] p-6 sm:p-8 lg:p-9 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer ${
              isCompany
                ? 'bg-gradient-to-b from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] text-white shadow-[0_25px_60px_-15px_rgba(124,58,237,0.45)] border-2 border-purple-300/60 scale-[1.01] z-20'
                : 'bg-white/95 backdrop-blur-xl text-slate-900 border-2 border-purple-100 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:border-purple-300 hover:shadow-[0_20px_45px_rgba(124,58,237,0.15)] z-10'
            }`}
          >
            {/* Top Glowing Glass Rings Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                <circle
                  cx="160"
                  cy="40"
                  r="75"
                  stroke={isCompany ? '#FFFFFF' : '#8B5CF6'}
                  strokeWidth="1.5"
                  strokeOpacity={isCompany ? '0.35' : '0.18'}
                />
                <circle
                  cx="160"
                  cy="40"
                  r="45"
                  stroke={isCompany ? '#FFFFFF' : '#8B5CF6'}
                  strokeWidth="1.5"
                  strokeOpacity={isCompany ? '0.45' : '0.22'}
                />
              </svg>
            </div>

            {/* Top Left Circular Orbit Dot */}
            <div
              className={`absolute top-6 left-8 w-3.5 h-3.5 rounded-full border-2 transition-colors duration-300 ${
                isCompany
                  ? 'border-white/80 bg-white/40 shadow-[0_0_12px_#ffffff]'
                  : 'border-purple-500/60 bg-purple-400/20'
              }`}
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6 sm:mb-7">
                <div 
                  className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm ${
                    isCompany
                      ? 'bg-white/20 text-white backdrop-blur-md border border-white/30'
                      : 'bg-purple-50 text-purple-600 border border-purple-200/80'
                  }`}
                >
                  <Building2 className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                </div>
                <div>
                  <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug ${
                    isCompany ? 'text-white' : 'text-slate-900'
                  }`}>
                    Company Compliance
                  </h3>
                  <p className={`text-xs sm:text-sm font-medium mt-1 leading-relaxed ${
                    isCompany ? 'text-purple-100' : 'text-slate-500'
                  }`}>
                    Ongoing monthly, quarterly and event-based corporate secretarial requirements.
                  </p>
                </div>
              </div>

              {/* Accordion / Content Items */}
              <div className="space-y-3.5">
                
                {/* --- ITEM 1: Preparation and Filing of Annual Filing Documents --- */}
                <div className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  isCompany
                    ? 'border border-white/25 bg-white/10 backdrop-blur-md shadow-sm'
                    : 'border border-purple-200/80 bg-white shadow-xs'
                }`}>
                  <button
                    type="button"
                    onClick={(e) => toggleCompany(1, e)}
                    className={`w-full p-3.5 sm:p-4 flex items-center justify-between text-left gap-3 transition-colors cursor-pointer ${
                      isCompany ? 'hover:bg-white/15' : 'hover:bg-purple-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 ${
                        isCompany ? 'bg-white/25 text-white' : 'bg-purple-100 text-purple-700'
                      }`}>
                        1
                      </span>
                      <div className="flex items-center gap-2">
                        <FileText className={`w-4.5 h-4.5 shrink-0 ${isCompany ? 'text-white' : 'text-purple-600'}`} />
                        <span className={`font-bold text-sm sm:text-base leading-snug ${isCompany ? 'text-white' : 'text-slate-900'}`}>
                          Preparation and Filing of Annual Filing Documents
                        </span>
                      </div>
                    </div>
                    <span className={`shrink-0 ml-2 ${isCompany ? 'text-white' : 'text-purple-600'}`}>
                      {companyOpen[1] ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronRight size={20} strokeWidth={2.5} />}
                    </span>
                  </button>

                  {/* Expandable Body */}
                  {companyOpen[1] && (
                    <div className={`p-4 pt-0 border-t ${
                      isCompany ? 'border-white/15 bg-black/15' : 'border-purple-100 bg-gradient-to-b from-white to-purple-50/25'
                    }`}>
                      {/* Grid of Micro-deliverables */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                        {companyDeliverables.map((item, idx) => (
                          <div 
                            key={idx}
                            className={`p-3 rounded-xl flex items-start gap-2.5 transition-colors ${
                              isCompany
                                ? 'bg-white/95 text-slate-900 border border-white/40 shadow-xs'
                                : 'bg-white border border-slate-200/80 shadow-xs hover:border-purple-200'
                            }`}
                          >
                            <CheckCircle2 className="w-4.5 h-4.5 text-[#7C3AED] shrink-0 stroke-[2.3] mt-0.5" />
                            <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                              {item.title}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* ROC Filings Highlight Box */}
                      <div className={`mt-3 p-3.5 rounded-xl flex items-start gap-2.5 ${
                        isCompany 
                          ? 'bg-white/20 backdrop-blur-md border border-white/30 text-white' 
                          : 'bg-purple-50/80 border border-purple-200 text-slate-900'
                      }`}>
                        <CheckCircle2 className={`w-5 h-5 shrink-0 stroke-[2.5] mt-0.5 ${isCompany ? 'text-white' : 'text-purple-600'}`} />
                        <div>
                          <span className={`text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider block ${
                            isCompany ? 'text-purple-200' : 'text-purple-700'
                          }`}>
                            ROC FILINGS
                          </span>
                          <span className={`text-xs sm:text-sm font-bold leading-snug block ${
                            isCompany ? 'text-white' : 'text-slate-900'
                          }`}>
                            Annual Filing Forms: Form AOC-4, MGT-7A & ADT-1
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* --- ITEM 2: Completion of Director's KYC --- */}
                <div className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  isCompany
                    ? 'border border-white/25 bg-white/10 backdrop-blur-md shadow-sm'
                    : 'border border-purple-100 bg-purple-50/30 shadow-xs'
                }`}>
                  <button
                    type="button"
                    onClick={(e) => toggleCompany(2, e)}
                    className={`w-full p-3.5 sm:p-4 flex items-center justify-between text-left gap-3 transition-colors cursor-pointer ${
                      isCompany ? 'hover:bg-white/15' : 'hover:bg-purple-50/70'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 ${
                        isCompany ? 'bg-white/25 text-white' : 'bg-purple-100 text-purple-700'
                      }`}>
                        2
                      </span>
                      <div className="flex items-center gap-2">
                        <UserCheck className={`w-4.5 h-4.5 shrink-0 ${isCompany ? 'text-white' : 'text-purple-600'}`} />
                        <span className={`font-bold text-sm sm:text-base leading-snug ${isCompany ? 'text-white' : 'text-slate-900'}`}>
                          Completion of Director's KYC
                        </span>
                      </div>
                    </div>
                    <span className={`shrink-0 ml-2 ${isCompany ? 'text-white' : 'text-slate-500'}`}>
                      {companyOpen[2] ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronRight size={20} strokeWidth={2.5} />}
                    </span>
                  </button>

                  {companyOpen[2] && (
                    <div className={`p-4 pt-1 border-t ${
                      isCompany ? 'border-white/15 bg-black/15 text-purple-100' : 'border-purple-100 bg-white text-slate-600'
                    }`}>
                      <p className="text-xs sm:text-sm font-medium leading-relaxed">
                        Timely filing of DIR-3 KYC (Web / Form) for all designated directors to keep Director Identification Numbers (DIN) fully active and compliant with MCA regulations.
                      </p>
                    </div>
                  )}
                </div>

                {/* --- ITEM 3: Filing of Return of Deposits (Form DPT-3) --- */}
                <div className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  isCompany
                    ? 'border border-white/25 bg-white/10 backdrop-blur-md shadow-sm'
                    : 'border border-purple-100 bg-purple-50/30 shadow-xs'
                }`}>
                  <button
                    type="button"
                    onClick={(e) => toggleCompany(3, e)}
                    className={`w-full p-3.5 sm:p-4 flex items-center justify-between text-left gap-3 transition-colors cursor-pointer ${
                      isCompany ? 'hover:bg-white/15' : 'hover:bg-purple-50/70'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 ${
                        isCompany ? 'bg-white/25 text-white' : 'bg-purple-100 text-purple-700'
                      }`}>
                        3
                      </span>
                      <div className="flex items-center gap-2">
                        <FileCheck className={`w-4.5 h-4.5 shrink-0 ${isCompany ? 'text-white' : 'text-purple-600'}`} />
                        <span className={`font-bold text-sm sm:text-base leading-snug ${isCompany ? 'text-white' : 'text-slate-900'}`}>
                          Filing of Return of Deposits (Form DPT-3)
                        </span>
                      </div>
                    </div>
                    <span className={`shrink-0 ml-2 ${isCompany ? 'text-white' : 'text-slate-500'}`}>
                      {companyOpen[3] ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronRight size={20} strokeWidth={2.5} />}
                    </span>
                  </button>

                  {companyOpen[3] && (
                    <div className={`p-4 pt-1 border-t ${
                      isCompany ? 'border-white/15 bg-black/15 text-purple-100' : 'border-purple-100 bg-white text-slate-600'
                    }`}>
                      <p className="text-xs sm:text-sm font-medium leading-relaxed">
                        Statutory annual reporting of deposits or transactions not considered as deposits, filed before June 30th every financial year to prevent MCA late fee penalties.
                      </p>
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Bottom Meta Footer */}
            <div className={`mt-8 pt-4 border-t flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-bold relative z-10 ${
              isCompany ? 'border-white/20 text-purple-100' : 'border-purple-100 text-slate-500'
            }`}>
              <span>Companies Act, 2013 Mandate</span>
              <span className={`font-extrabold flex items-center gap-1.5 ${
                isCompany ? 'text-white' : 'text-[#7C3AED]'
              }`}>
                <CheckCircle2 className="w-4 h-4" />
                Comprehensive Filings
              </span>
            </div>
          </div>


          {/* ============================================================== */}
          {/* RIGHT CARD: LLP Compliance                                     */}
          {/* ============================================================== */}
          <div 
            onClick={() => setActiveCycle('LLP')}
            className={`group relative w-full rounded-3xl sm:rounded-[32px] p-6 sm:p-8 lg:p-9 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer ${
              isLlp
                ? 'bg-gradient-to-b from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] text-white shadow-[0_25px_60px_-15px_rgba(124,58,237,0.45)] border-2 border-purple-300/60 scale-[1.01] z-20'
                : 'bg-white/95 backdrop-blur-xl text-slate-900 border-2 border-purple-100 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:border-purple-300 hover:shadow-[0_20px_45px_rgba(124,58,237,0.15)] z-10'
            }`}
          >
            {/* Top Glowing Glass Rings Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                <circle
                  cx="160"
                  cy="40"
                  r="75"
                  stroke={isLlp ? '#FFFFFF' : '#8B5CF6'}
                  strokeWidth="1.5"
                  strokeOpacity={isLlp ? '0.35' : '0.18'}
                />
                <circle
                  cx="160"
                  cy="40"
                  r="45"
                  stroke={isLlp ? '#FFFFFF' : '#8B5CF6'}
                  strokeWidth="1.5"
                  strokeOpacity={isLlp ? '0.45' : '0.22'}
                />
              </svg>
            </div>

            {/* Top Left Circular Orbit Dot */}
            <div
              className={`absolute top-6 left-8 w-3.5 h-3.5 rounded-full border-2 transition-colors duration-300 ${
                isLlp
                  ? 'border-white/80 bg-white/40 shadow-[0_0_12px_#ffffff]'
                  : 'border-purple-500/60 bg-purple-400/20'
              }`}
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6 sm:mb-7">
                <div 
                  className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm ${
                    isLlp
                      ? 'bg-white/20 text-white backdrop-blur-md border border-white/30'
                      : 'bg-purple-50 text-purple-600 border border-purple-200/80'
                  }`}
                >
                  <Users2 className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                </div>
                <div>
                  <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug ${
                    isLlp ? 'text-white' : 'text-slate-900'
                  }`}>
                    LLP Compliance
                  </h3>
                  <p className={`text-xs sm:text-sm font-medium mt-1 leading-relaxed ${
                    isLlp ? 'text-purple-100' : 'text-slate-500'
                  }`}>
                    Annual statutory filings, statements of account and partner-specific compliance.
                  </p>
                </div>
              </div>

              {/* Accordion / Content Items */}
              <div className="space-y-3.5">
                
                {/* --- ITEM 1: Preparation and Filing of Annual Filing Documents --- */}
                <div className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  isLlp
                    ? 'border border-white/25 bg-white/10 backdrop-blur-md shadow-sm'
                    : 'border border-purple-200/80 bg-white shadow-xs'
                }`}>
                  <button
                    type="button"
                    onClick={(e) => toggleLlp(1, e)}
                    className={`w-full p-3.5 sm:p-4 flex items-center justify-between text-left gap-3 transition-colors cursor-pointer ${
                      isLlp ? 'hover:bg-white/15' : 'hover:bg-purple-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 ${
                        isLlp ? 'bg-white/25 text-white' : 'bg-purple-100 text-purple-700'
                      }`}>
                        1
                      </span>
                      <div className="flex items-center gap-2">
                        <FileText className={`w-4.5 h-4.5 shrink-0 ${isLlp ? 'text-white' : 'text-purple-600'}`} />
                        <span className={`font-bold text-sm sm:text-base leading-snug ${isLlp ? 'text-white' : 'text-slate-900'}`}>
                          Preparation and Filing of Annual Filing Documents
                        </span>
                      </div>
                    </div>
                    <span className={`shrink-0 ml-2 ${isLlp ? 'text-white' : 'text-purple-600'}`}>
                      {llpOpen[1] ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronRight size={20} strokeWidth={2.5} />}
                    </span>
                  </button>

                  {/* Expandable Body */}
                  {llpOpen[1] && (
                    <div className={`p-4 pt-0 border-t ${
                      isLlp ? 'border-white/15 bg-black/15' : 'border-purple-100 bg-gradient-to-b from-white to-purple-50/25'
                    }`}>
                      {/* Grid of Micro-deliverables */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                        {llpDeliverables.map((item, idx) => (
                          <div 
                            key={idx}
                            className={`p-3 rounded-xl flex items-start gap-2.5 transition-colors ${
                              isLlp
                                ? 'bg-white/95 text-slate-900 border border-white/40 shadow-xs'
                                : 'bg-white border border-slate-200/80 shadow-xs hover:border-purple-200'
                            }`}
                          >
                            <CheckCircle2 className="w-4.5 h-4.5 text-[#7C3AED] shrink-0 stroke-[2.3] mt-0.5" />
                            <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                              {item.title}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* MCA Returns Highlight Box */}
                      <div className={`mt-3 p-3.5 rounded-xl flex items-start gap-2.5 ${
                        isLlp 
                          ? 'bg-white/20 backdrop-blur-md border border-white/30 text-white' 
                          : 'bg-purple-50/80 border border-purple-200 text-slate-900'
                      }`}>
                        <CheckCircle2 className={`w-5 h-5 shrink-0 stroke-[2.5] mt-0.5 ${isLlp ? 'text-white' : 'text-purple-600'}`} />
                        <div>
                          <span className={`text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider block ${
                            isLlp ? 'text-purple-200' : 'text-purple-700'
                          }`}>
                            MCA RETURNS
                          </span>
                          <span className={`text-xs sm:text-sm font-bold leading-snug block ${
                            isLlp ? 'text-white' : 'text-slate-900'
                          }`}>
                            Preparation & Filing of Form LLP-11 & Form LLP-8
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* --- ITEM 2: Completion of Partner KYC as and when required by the Ministry --- */}
                <div className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  isLlp
                    ? 'border border-white/25 bg-white/10 backdrop-blur-md shadow-sm'
                    : 'border border-purple-100 bg-purple-50/30 shadow-xs'
                }`}>
                  <button
                    type="button"
                    onClick={(e) => toggleLlp(2, e)}
                    className={`w-full p-3.5 sm:p-4 flex items-center justify-between text-left gap-3 transition-colors cursor-pointer ${
                      isLlp ? 'hover:bg-white/15' : 'hover:bg-purple-50/70'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 ${
                        isLlp ? 'bg-white/25 text-white' : 'bg-purple-100 text-purple-700'
                      }`}>
                        2
                      </span>
                      <div className="flex items-center gap-2">
                        <UserCheck className={`w-4.5 h-4.5 shrink-0 ${isLlp ? 'text-white' : 'text-purple-600'}`} />
                        <span className={`font-bold text-sm sm:text-base leading-snug ${isLlp ? 'text-white' : 'text-slate-900'}`}>
                          Completion of Partner KYC as and when required by the Ministry
                        </span>
                      </div>
                    </div>
                    <span className={`shrink-0 ml-2 ${isLlp ? 'text-white' : 'text-slate-500'}`}>
                      {llpOpen[2] ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronRight size={20} strokeWidth={2.5} />}
                    </span>
                  </button>

                  {llpOpen[2] && (
                    <div className={`p-4 pt-1 border-t ${
                      isLlp ? 'border-white/15 bg-black/15 text-purple-100' : 'border-purple-100 bg-white text-slate-600'
                    }`}>
                      <p className="text-xs sm:text-sm font-medium leading-relaxed">
                        Annual filing of DIR-3 KYC for all designated partners to maintain an uninterrupted active status for your DPIN (Designated Partner Identification Number) without MCA late fees or penalties.
                      </p>
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Bottom Meta Footer */}
            <div className={`mt-8 pt-4 border-t flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-bold relative z-10 ${
              isLlp ? 'border-white/20 text-purple-100' : 'border-purple-100 text-slate-500'
            }`}>
              <span>Statutory Compliance: LLP Act, 2008</span>
              <span className={`font-extrabold flex items-center gap-1.5 ${
                isLlp ? 'text-white' : 'text-[#7C3AED]'
              }`}>
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
            className="inline-flex items-center gap-3 px-8 sm:px-9 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-[#FA5A16] to-[#EA4B07] hover:from-[#EA4B07] hover:to-[#D43F00] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Get Complete Secretarial Coverage</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
