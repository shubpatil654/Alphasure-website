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
      className="relative w-full pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-18 bg-gradient-to-b from-[#FAF9F6] via-[#F0F5FA] to-[#FAF9F6] overflow-hidden select-none"
      id="annual-compliance-services"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background Soft Blue Ambient Glows matching Logo Blue */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-sky-400/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#003878] uppercase block mb-2 sm:mb-3">
            CORPORATE COMPLIANCE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Annual Compliance Services
          </h2>
          <p className="text-slate-600 font-medium text-sm sm:text-base mt-2.5 sm:mt-3">
            Choose your corporate entity type to explore the compliance coverage.
          </p>

          {/* ================= COMPANY / LLP PILL TOGGLE ================= */}
          <div className="mt-6 sm:mt-7 inline-flex items-center p-1 sm:p-1.5 rounded-full bg-slate-200/70 backdrop-blur-md border border-slate-300/60 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveCycle('Company')}
              className={`px-7 sm:px-9 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                isCompany
                  ? 'bg-gradient-to-r from-[#004B99] via-[#003878] to-[#012551] text-white shadow-md shadow-blue-900/30 scale-[1.02]'
                  : 'bg-white text-slate-700 hover:text-slate-900 shadow-xs'
              }`}
            >
              Company
            </button>
            <button
              type="button"
              onClick={() => setActiveCycle('LLP')}
              className={`px-7 sm:px-9 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                isLlp
                  ? 'bg-gradient-to-r from-[#004B99] via-[#003878] to-[#012551] text-white shadow-md shadow-blue-900/30 scale-[1.02]'
                  : 'bg-white text-slate-700 hover:text-slate-900 shadow-xs'
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
            className={`group relative w-full rounded-3xl sm:rounded-[32px] p-6 sm:p-8 lg:p-9 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer border-2 ${
              isCompany 
                ? 'bg-gradient-to-b from-[#004B99] via-[#003878] to-[#012551] text-white shadow-[0_25px_60px_-15px_rgba(1,43,92,0.45)] border-blue-300/80 ring-4 ring-blue-400/25 scale-[1.01] z-20 block' 
                : 'bg-white text-slate-900 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border-slate-200/90 hover:border-blue-300/80 hover:shadow-[0_16px_45px_rgba(1,43,92,0.12)] z-10 hidden lg:flex'
            }`}
          >
            {/* Top Glowing Glass Rings Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                <circle
                  cx="160"
                  cy="40"
                  r="75"
                  stroke={isCompany ? "#FFFFFF" : "#003878"}
                  strokeWidth="1.5"
                  strokeOpacity={isCompany ? "0.35" : "0.08"}
                />
                <circle
                  cx="160"
                  cy="40"
                  r="45"
                  stroke={isCompany ? "#FFFFFF" : "#003878"}
                  strokeWidth="1.5"
                  strokeOpacity={isCompany ? "0.45" : "0.12"}
                />
              </svg>
            </div>

            {/* Top Left Circular Orbit Dot */}
            <div className={`absolute top-6 left-8 w-3.5 h-3.5 rounded-full border-2 ${
              isCompany 
                ? 'border-white/80 bg-white/40 shadow-[0_0_12px_#ffffff]' 
                : 'border-[#003878]/30 bg-[#003878]/10'
            }`} />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6 sm:mb-7">
                <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm backdrop-blur-md border ${
                  isCompany 
                    ? 'bg-white/20 text-white border-white/30' 
                    : 'bg-blue-50 text-[#003878] border-blue-100 shadow-2xs'
                }`}>
                  <Building2 className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                </div>
                <div>
                  <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug ${
                    isCompany ? 'text-white' : 'text-slate-900'
                  }`}>
                    Company Compliance
                  </h3>
                </div>
              </div>

              {/* Accordion / Content Items */}
              <div className="space-y-3.5">
                
                {/* --- ITEM 1: Preparation and Filing of Annual Filing Documents --- */}
                <div className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                  isCompany 
                    ? 'bg-white shadow-md shadow-blue-950/15 border-white/90' 
                    : 'bg-[#F8FAFC] shadow-xs border-slate-200/90 hover:border-blue-200 hover:bg-white'
                }`}>
                  <button
                    type="button"
                    onClick={(e) => toggleCompany(1, e)}
                    className="w-full p-4 sm:p-4.5 flex items-center justify-between text-left gap-3 transition-colors cursor-pointer hover:bg-slate-50/80"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 ${
                        isCompany ? 'bg-blue-100 text-[#003878]' : 'bg-slate-200/80 text-slate-700'
                      }`}>
                        1
                      </span>
                      <div className="flex items-center gap-2.5">
                        <FileText className={`w-5 h-5 shrink-0 ${isCompany ? 'text-[#003878]' : 'text-slate-600'}`} />
                        <span className="font-bold text-sm sm:text-base leading-snug text-slate-900">
                          Preparation and Filing of Annual Filing Documents
                        </span>
                      </div>
                    </div>
                    <span className="shrink-0 ml-2 text-slate-700 hover:text-[#003878] transition-colors">
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
                            className="p-3 rounded-xl flex items-start gap-2.5 bg-blue-50/50 hover:bg-blue-50/80 border border-blue-100/90 shadow-xs transition-colors"
                          >
                            <CheckCircle2 className="w-4.5 h-4.5 text-[#003878] shrink-0 stroke-[2.3] mt-0.5" />
                            <span className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                              {item.title}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* ROC Filings Highlight Box */}
                      <div className="mt-3.5 p-3.5 rounded-xl flex items-start gap-2.5 bg-gradient-to-r from-blue-50 via-blue-50/60 to-indigo-50/40 border border-blue-200">
                        <CheckCircle2 className="w-5 h-5 text-[#003878] shrink-0 stroke-[2.5] mt-0.5" />
                        <div>
                          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#003878] block">
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
                <div className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                  isCompany 
                    ? 'bg-white shadow-md shadow-blue-950/15 border-white/90' 
                    : 'bg-[#F8FAFC] shadow-xs border-slate-200/90 hover:border-blue-200 hover:bg-white'
                }`}>
                  <button
                    type="button"
                    onClick={(e) => toggleCompany(2, e)}
                    className="w-full p-4 sm:p-4.5 flex items-center justify-between text-left gap-3 transition-colors cursor-pointer hover:bg-slate-50/80"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 ${
                        isCompany ? 'bg-blue-100 text-[#003878]' : 'bg-slate-200/80 text-slate-700'
                      }`}>
                        2
                      </span>
                      <div className="flex items-center gap-2.5">
                        <UserCheck className={`w-5 h-5 shrink-0 ${isCompany ? 'text-[#003878]' : 'text-slate-600'}`} />
                        <span className="font-bold text-sm sm:text-base leading-snug text-slate-900">
                          Completion of Director's KYC
                        </span>
                      </div>
                    </div>
                    <span className="shrink-0 ml-2 text-slate-700 hover:text-[#003878] transition-colors">
                      {companyOpen[2] ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronRight size={20} strokeWidth={2.5} />}
                    </span>
                  </button>

                  {companyOpen[2] && (
                    <div className="p-4 sm:p-5 pt-3 border-t border-slate-100 bg-white">
                      <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100">
                        <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-800">
                          Timely filing of DIR-3 KYC (Web / Form) for all designated directors to keep Director Identification Numbers (DIN) fully active and compliant with MCA regulations.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* --- ITEM 3: Filing of Return of Deposits (Form DPT-3) --- */}
                <div className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                  isCompany 
                    ? 'bg-white shadow-md shadow-blue-950/15 border-white/90' 
                    : 'bg-[#F8FAFC] shadow-xs border-slate-200/90 hover:border-blue-200 hover:bg-white'
                }`}>
                  <button
                    type="button"
                    onClick={(e) => toggleCompany(3, e)}
                    className="w-full p-4 sm:p-4.5 flex items-center justify-between text-left gap-3 transition-colors cursor-pointer hover:bg-slate-50/80"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 ${
                        isCompany ? 'bg-blue-100 text-[#003878]' : 'bg-slate-200/80 text-slate-700'
                      }`}>
                        3
                      </span>
                      <div className="flex items-center gap-2.5">
                        <FileCheck className={`w-5 h-5 shrink-0 ${isCompany ? 'text-[#003878]' : 'text-slate-600'}`} />
                        <span className="font-bold text-sm sm:text-base leading-snug text-slate-900">
                          Filing of Return of Deposits (Form DPT-3)
                        </span>
                      </div>
                    </div>
                    <span className="shrink-0 ml-2 text-slate-700 hover:text-[#003878] transition-colors">
                      {companyOpen[3] ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronRight size={20} strokeWidth={2.5} />}
                    </span>
                  </button>

                  {companyOpen[3] && (
                    <div className="p-4 sm:p-5 pt-3 border-t border-slate-100 bg-white">
                      <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100">
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
            className={`group relative w-full rounded-3xl sm:rounded-[32px] p-6 sm:p-8 lg:p-9 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer border-2 ${
              isLlp 
                ? 'bg-gradient-to-b from-[#004B99] via-[#003878] to-[#012551] text-white shadow-[0_25px_60px_-15px_rgba(1,43,92,0.45)] border-blue-300/80 ring-4 ring-blue-400/25 scale-[1.01] z-20 block' 
                : 'bg-white text-slate-900 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border-slate-200/90 hover:border-blue-300/80 hover:shadow-[0_16px_45px_rgba(1,43,92,0.12)] z-10 hidden lg:flex'
            }`}
          >
            {/* Top Glowing Glass Rings Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                <circle
                  cx="160"
                  cy="40"
                  r="75"
                  stroke={isLlp ? "#FFFFFF" : "#003878"}
                  strokeWidth="1.5"
                  strokeOpacity={isLlp ? "0.35" : "0.08"}
                />
                <circle
                  cx="160"
                  cy="40"
                  r="45"
                  stroke={isLlp ? "#FFFFFF" : "#003878"}
                  strokeWidth="1.5"
                  strokeOpacity={isLlp ? "0.45" : "0.12"}
                />
              </svg>
            </div>

            {/* Top Left Circular Orbit Dot */}
            <div className={`absolute top-6 left-8 w-3.5 h-3.5 rounded-full border-2 ${
              isLlp 
                ? 'border-white/80 bg-white/40 shadow-[0_0_12px_#ffffff]' 
                : 'border-[#003878]/30 bg-[#003878]/10'
            }`} />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6 sm:mb-7">
                <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm backdrop-blur-md border ${
                  isLlp 
                    ? 'bg-white/20 text-white border-white/30' 
                    : 'bg-blue-50 text-[#003878] border-blue-100 shadow-2xs'
                }`}>
                  <Users2 className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                </div>
                <div>
                  <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug ${
                    isLlp ? 'text-white' : 'text-slate-900'
                  }`}>
                    LLP Compliance
                  </h3>
                </div>
              </div>

              {/* Accordion / Content Items */}
              <div className="space-y-3.5">
                
                {/* --- ITEM 1: Preparation and Filing of Annual Filing Documents --- */}
                <div className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                  isLlp 
                    ? 'bg-white shadow-md shadow-blue-950/15 border-white/90' 
                    : 'bg-[#F8FAFC] shadow-xs border-slate-200/90 hover:border-blue-200 hover:bg-white'
                }`}>
                  <button
                    type="button"
                    onClick={(e) => toggleLlp(1, e)}
                    className="w-full p-4 sm:p-4.5 flex items-center justify-between text-left gap-3 transition-colors cursor-pointer hover:bg-slate-50/80"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 ${
                        isLlp ? 'bg-blue-100 text-[#003878]' : 'bg-slate-200/80 text-slate-700'
                      }`}>
                        1
                      </span>
                      <div className="flex items-center gap-2.5">
                        <FileText className={`w-5 h-5 shrink-0 ${isLlp ? 'text-[#003878]' : 'text-slate-600'}`} />
                        <span className="font-bold text-sm sm:text-base leading-snug text-slate-900">
                          Preparation and Filing of Annual Filing Documents
                        </span>
                      </div>
                    </div>
                    <span className="shrink-0 ml-2 text-slate-700 hover:text-[#003878] transition-colors">
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
                            className="p-3 rounded-xl flex items-start gap-2.5 bg-blue-50/50 hover:bg-blue-50/80 border border-blue-100/90 shadow-xs transition-colors"
                          >
                            <CheckCircle2 className="w-4.5 h-4.5 text-[#003878] shrink-0 stroke-[2.3] mt-0.5" />
                            <span className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                              {item.title}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* MCA Returns Highlight Box */}
                      <div className="mt-3.5 p-3.5 rounded-xl flex items-start gap-2.5 bg-gradient-to-r from-blue-50 via-blue-50/60 to-indigo-50/40 border border-blue-200">
                        <CheckCircle2 className="w-5 h-5 text-[#003878] shrink-0 stroke-[2.5] mt-0.5" />
                        <div>
                          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#003878] block">
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
                <div className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                  isLlp 
                    ? 'bg-white shadow-md shadow-blue-950/15 border-white/90' 
                    : 'bg-[#F8FAFC] shadow-xs border-slate-200/90 hover:border-blue-200 hover:bg-white'
                }`}>
                  <button
                    type="button"
                    onClick={(e) => toggleLlp(2, e)}
                    className="w-full p-4 sm:p-4.5 flex items-center justify-between text-left gap-3 transition-colors cursor-pointer hover:bg-slate-50/80"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 ${
                        isLlp ? 'bg-blue-100 text-[#003878]' : 'bg-slate-200/80 text-slate-700'
                      }`}>
                        2
                      </span>
                      <div className="flex items-center gap-2.5">
                        <UserCheck className={`w-5 h-5 shrink-0 ${isLlp ? 'text-[#003878]' : 'text-slate-600'}`} />
                        <span className="font-bold text-sm sm:text-base leading-snug text-slate-900">
                          Completion of Partner KYC as and when required by the Ministry
                        </span>
                      </div>
                    </div>
                    <span className="shrink-0 ml-2 text-slate-700 hover:text-[#003878] transition-colors">
                      {llpOpen[2] ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronRight size={20} strokeWidth={2.5} />}
                    </span>
                  </button>

                  {llpOpen[2] && (
                    <div className="p-4 sm:p-5 pt-3 border-t border-slate-100 bg-white">
                      <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100">
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
            className="inline-flex items-center gap-3 px-8 sm:px-9 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-[#004B99] via-[#003878] to-[#012551] hover:from-[#0055B3] hover:to-[#002B5C] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl hover:shadow-blue-900/35 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Get Complete Secretarial Coverage</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
