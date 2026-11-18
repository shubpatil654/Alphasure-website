import React, { useState } from 'react';
import { 
  Building2, 
  Calculator, 
  Users, 
  ShieldCheck, 
  Compass, 
  ArrowRight, 
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import './ServicesSection.css';

// Signature Paper Airplane Icon from Reference Design
const AirplaneIcon = ({ className = "w-5 h-5" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 2L11 13" />
    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
  </svg>
);

const SERVICES_DATA = [
  {
    id: 'incorporation',
    number: '01',
    heading: 'INCORPORATION',
    shortTitle: 'Incorporation',
    tagline: 'Guidance that goes beyond registration. Seamless entity incorporation and regulatory setup to launch with total clarity.',
    bgClass: 'bg-[#E6FAF8]',
    borderColor: 'border-[#B2EFE9]',
    accentColor: '#0D9488',
    iconColor: 'text-[#0D9488]',
    targetPage: 'pvt-ltd',
    subservices: [
      { name: 'Private Limited Company (Pvt Ltd)', id: 'pvt-ltd' },
      { name: 'Limited Liability Partnership (LLP)', id: 'llp' },
      { name: 'One Person Company (OPC)', id: 'opc' },
      { name: 'Secretarial & Annual ROC Compliance', id: 'secretarial' },
    ]
  },
  {
    id: 'accounting',
    number: '02',
    heading: 'ACCOUNTING',
    shortTitle: 'Accounting',
    tagline: 'Audit-ready, accurate bookkeeping and continuous financial tracking tailored to your day-to-day business operations.',
    bgClass: 'bg-[#EBF3FE]',
    borderColor: 'border-[#BFDBFE]',
    accentColor: '#2563EB',
    iconColor: 'text-[#2563EB]',
    targetPage: 'periodic-accounting',
    subservices: [
      { name: 'Periodic Accounting & Bookkeeping', id: 'periodic-accounting' },
      { name: 'Real-Time Continuous Accounting', id: 'real-time-accounting' },
      { name: 'Bank Reconciliations & Ledger Audit', id: 'periodic-accounting' },
      { name: 'Monthly MIS & Profit/Loss Statements', id: 'periodic-accounting' },
    ]
  },
  {
    id: 'payroll',
    number: '03',
    heading: 'PAYROLL',
    shortTitle: 'Payroll',
    tagline: 'End-to-end monthly salary disbursement, automated payslips, and 100% compliant statutory withholdings for your team.',
    bgClass: 'bg-[#F4EFFE]',
    borderColor: 'border-[#DDD6FE]',
    accentColor: '#7C3AED',
    iconColor: 'text-[#7C3AED]',
    targetPage: 'everything-else',
    subservices: [
      { name: 'Monthly Payroll Computation & Slips', id: 'everything-else' },
      { name: 'PF, ESI & Professional Tax Filings', id: 'everything-else' },
      { name: 'TDS on Salaries (Form 24Q Filing)', id: 'everything-else' },
      { name: 'Full & Final Settlements (FnF)', id: 'everything-else' },
    ]
  },
  {
    id: 'compliance',
    number: '04',
    heading: 'COMPLIANCE',
    shortTitle: 'Compliance',
    tagline: 'Proactive tax filings, reconciliations, and regulatory oversight so your business never faces penalties or deadlines.',
    bgClass: 'bg-[#EDF9F0]',
    borderColor: 'border-[#BBF7D0]',
    accentColor: '#059669',
    iconColor: 'text-[#059669]',
    targetPage: 'gst-tds-compliance',
    subservices: [
      { name: 'GST Filings, Returns & 2B Reconciliation', id: 'gst-tds-compliance' },
      { name: 'TDS Computations & Quarterly Filings', id: 'gst-tds-compliance' },
      { name: 'Advance Tax & Corporate Income Tax', id: 'gst-tds-compliance' },
      { name: 'Department Notices & Scrutiny Support', id: 'gst-tds-compliance' },
    ]
  },
  {
    id: 'advisory',
    number: '05',
    heading: 'ADVISORY',
    shortTitle: 'Advisory',
    tagline: 'Guidance that goes beyond the numbers. Practical, data-driven financial leadership to unlock sustainable business growth.',
    bgClass: 'bg-[#FFF2EA]',
    borderColor: 'border-[#FED7AA]',
    accentColor: '#EA580C',
    iconColor: 'text-[#EA580C]',
    targetPage: 'controller-services',
    subservices: [
      { name: 'Fractional CFO & Controller Services', id: 'controller-services' },
      { name: 'Transfer Pricing & Cross-Border Advisory', id: 'everything-else' },
      { name: 'M&A Due Diligence & Valuation', id: 'everything-else' },
      { name: 'IFRS and Ind AS Convergence', id: 'everything-else' },
    ]
  }
];

export default function ServicesSection({ onOpenModal, onNavigate }) {
  // activeId is null by default so all 5 service headings are visible at first glance
  const [activeId, setActiveId] = useState(null);

  const handleCardClick = (serviceId) => {
    setActiveId((prev) => (prev === serviceId ? null : serviceId));
  };

  const handleSubserviceClick = (e, pageId) => {
    e.stopPropagation();
    if (onNavigate && pageId) {
      onNavigate(pageId);
    } else if (onOpenModal) {
      onOpenModal();
    }
  };

  return (
    <section 
      className="services-accordion-wrapper border-t border-slate-100" 
      id="services"
      onMouseLeave={() => setActiveId(null)}
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="alpha-h2 font-black text-[#0B192C] tracking-tight uppercase">
            Business Made Lighter with{' '}
            <span className="relative inline-block text-[#FA5A16]">
              Alphasure.
              {/* Signature Curved Underline */}
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
          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto mt-3 sm:mt-4 leading-relaxed">
            Hover over any service pillar to explore how we support your company at every stage of growth.
          </p>
        </div>

        {/* ================= 5-COLUMN HORIZONTAL EXPANDING ACCORDION ================= */}
        <div className="services-accordion-container">
          {SERVICES_DATA.map((service) => {
            const isExpanded = activeId === service.id;
            const isAnyActive = activeId !== null;

            // Determine card styling state
            let cardStateClass = 'services-card-default';
            if (isExpanded) {
              cardStateClass = `services-card-expanded ${service.bgClass} ${service.borderColor}`;
            } else if (isAnyActive) {
              cardStateClass = 'services-card-collapsed';
            }

            return (
              <div
                key={service.id}
                className={`services-accordion-card ${cardStateClass}`}
                onMouseEnter={() => setActiveId(service.id)}
                onClick={() => handleCardClick(service.id)}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                aria-label={`${service.heading} Services`}
              >
                {/* ---------------- EXPANDED VIEW ---------------- */}
                {isExpanded ? (
                  <div className="services-expanded-content flex flex-col justify-between h-full w-full">
                    
                    {/* Top Row: Icon + Number */}
                    <div>
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <div 
                          className="w-12 h-12 rounded-2xl bg-white/90 shadow-sm flex items-center justify-center border"
                          style={{ borderColor: service.borderColor }}
                        >
                          <AirplaneIcon className={`w-5 h-5 ${service.iconColor}`} />
                        </div>
                        <span className="text-xs font-mono font-bold tracking-widest text-slate-400">
                          {service.number} / 05
                        </span>
                      </div>

                      {/* Main Service Heading */}
                      <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-black tracking-tight text-[#0B192C] uppercase mb-3">
                        {service.heading}
                      </h3>

                      {/* Tagline / Description */}
                      <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed mb-6 font-medium max-w-lg">
                        {service.tagline}
                      </p>

                      {/* Services Revealed Checklist */}
                      <div className="mb-6">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block mb-3">
                          What Comes Under {service.shortTitle}:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.subservices.map((sub, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={(e) => handleSubserviceClick(e, sub.id)}
                              className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 hover:bg-white border border-slate-200/80 hover:border-[#FA5A16]/50 shadow-xs hover:shadow-sm text-left transition-all duration-200 group/item cursor-pointer"
                            >
                              <CheckCircle2 
                                size={16} 
                                className="shrink-0 text-[#FA5A16] group-hover/item:scale-110 transition-transform" 
                              />
                              <span className="text-xs sm:text-[13px] font-bold text-slate-800 group-hover/item:text-[#FA5A16] transition-colors leading-tight">
                                {sub.name}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA Action Button */}
                    <div className="pt-2 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={(e) => handleSubserviceClick(e, service.targetPage)}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white bg-[#0B192C] hover:bg-[#FA5A16] px-5 py-2.5 rounded-xl transition-colors shadow-md cursor-pointer group/btn"
                      >
                        <span>Explore {service.shortTitle}</span>
                        <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      <span className="text-xs text-slate-400 font-bold hidden sm:inline-block">
                        Click any service to view details
                      </span>
                    </div>

                  </div>
                ) : (
                  /* ---------------- COLLAPSED / INITIAL VIEW ---------------- */
                  <div className="services-collapsed-content flex flex-col justify-between h-full w-full">
                    
                    {/* Top: Serial Number */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold tracking-widest text-slate-400 group-hover:text-white transition-colors">
                        {service.number}
                      </span>
                      {/* Mobile Expand Indicator */}
                      <ChevronDown size={16} className="text-slate-400 sm:hidden" />
                    </div>

                    {/* Center / Bottom: Signature Airplane Icon + Heading */}
                    <div className="pt-10 flex flex-col items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white/90 group-hover:text-[#FA5A16] transition-colors">
                        <AirplaneIcon className="w-4 h-4 text-white" />
                      </div>

                      <h3 className="text-sm sm:text-base font-black tracking-wider text-white uppercase break-words leading-tight">
                        {service.heading}
                      </h3>

                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 opacity-80 group-hover:text-[#FA5A16] group-hover:opacity-100 transition-all flex items-center gap-1">
                        Hover to reveal <ArrowRight size={11} />
                      </span>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
