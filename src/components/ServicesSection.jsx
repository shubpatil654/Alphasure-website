import React, { useState } from 'react';
import { 
  Building2, 
  Calculator, 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import './ServicesSection.css';

// Pillar configurations with Alphasure logo colors (Orange #FA5A16 & Blue #0084F4)
const SERVICES_DATA = [
  {
    id: 'incorporation',
    number: '01',
    heading: 'INCORPORATION',
    shortTitle: 'Incorporation',
    themeColor: '#FA5A16',
    bgClass: 'bg-[#FFF8F5]',
    borderColor: 'border-[#FA5A16]/30',
    accentColor: '#FA5A16',
    iconColor: 'text-[#FA5A16]',
    badgeBg: 'bg-[#FA5A16]/10 text-[#FA5A16]',
    btnClass: 'bg-[#FA5A16] hover:bg-[#EA4A06]',
    topBarColor: 'bg-[#FA5A16]',
    icon: Building2,
    targetPage: 'pvt-ltd',
    subservices: [
      { name: 'Private limited company', id: 'pvt-ltd' },
      { name: 'Limited liability partnership', id: 'llp' },
      { name: 'One person company', id: 'opc' },
      { name: 'Secretarial compliance', id: 'secretarial' },
    ]
  },
  {
    id: 'accounting',
    number: '02',
    heading: 'ACCOUNTING',
    shortTitle: 'Accounting',
    themeColor: '#0084F4',
    bgClass: 'bg-[#F0F7FF]',
    borderColor: 'border-[#0084F4]/30',
    accentColor: '#0084F4',
    iconColor: 'text-[#0084F4]',
    badgeBg: 'bg-[#0084F4]/10 text-[#0084F4]',
    btnClass: 'bg-[#0084F4] hover:bg-[#0070D6]',
    topBarColor: 'bg-[#0084F4]',
    icon: Calculator,
    targetPage: 'periodic-accounting',
    subservices: [
      { name: 'Periodic accounting', id: 'periodic-accounting' },
      { name: 'Real time accounting', id: 'real-time-accounting' },
      { name: 'Controller services', id: 'controller-services' },
      { name: 'CFO services', id: 'controller-services' },
    ]
  },
  {
    id: 'tax-compliance',
    number: '03',
    heading: 'TAX COMPLIANCE',
    shortTitle: 'Tax Compliance',
    themeColor: '#FA5A16',
    bgClass: 'bg-[#FFF8F5]',
    borderColor: 'border-[#FA5A16]/30',
    accentColor: '#FA5A16',
    iconColor: 'text-[#FA5A16]',
    badgeBg: 'bg-[#FA5A16]/10 text-[#FA5A16]',
    btnClass: 'bg-[#FA5A16] hover:bg-[#EA4A06]',
    topBarColor: 'bg-[#FA5A16]',
    icon: ShieldCheck,
    targetPage: 'gst-tds-compliance',
    subservices: [
      { name: 'GST registration', id: 'gst-tds-compliance' },
      { name: 'GST filing', id: 'gst-tds-compliance' },
      { name: 'TDS filing', id: 'gst-tds-compliance' },
      { name: 'Income tax filing', id: 'gst-tds-compliance' },
    ]
  },
  {
    id: 'other-services',
    number: '04',
    heading: 'OTHER SERVICES',
    shortTitle: 'Other Services',
    themeColor: '#0084F4',
    bgClass: 'bg-[#F0F7FF]',
    borderColor: 'border-[#0084F4]/30',
    accentColor: '#0084F4',
    iconColor: 'text-[#0084F4]',
    badgeBg: 'bg-[#0084F4]/10 text-[#0084F4]',
    btnClass: 'bg-[#0084F4] hover:bg-[#0070D6]',
    topBarColor: 'bg-[#0084F4]',
    icon: Layers,
    targetPage: 'everything-else',
    subservices: [
      { name: 'Payroll', id: 'everything-else' },
      { name: 'Transfer pricing', id: 'everything-else' },
      { name: 'M & A', id: 'everything-else' },
      { name: 'International taxation', id: 'everything-else' },
      { name: 'IFRS and Ind AS', id: 'everything-else' },
      { name: 'Corporate legal', id: 'everything-else' },
    ]
  }
];

export default function ServicesSection({ onOpenModal, onNavigate }) {
  // First container (incorporation) is open by default
  const [activeId, setActiveId] = useState('incorporation');

  const handleCardClick = (serviceId) => {
    setActiveId(serviceId);
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
      onMouseLeave={() => setActiveId('incorporation')}
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
          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-xl mx-auto mt-3 sm:mt-4 leading-relaxed">
            Hover over any pillar to view the services we provide.
          </p>
        </div>

        {/* ================= 4-PILLAR HORIZONTAL EXPANDING ACCORDION ================= */}
        <div className="services-accordion-container">
          {SERVICES_DATA.map((service) => {
            const isExpanded = activeId === service.id;
            const IconComponent = service.icon;

            // Determine card styling state
            const cardStateClass = isExpanded 
              ? `services-card-expanded ${service.bgClass} ${service.borderColor}`
              : 'services-card-collapsed';

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
                {/* Top branded accent bar */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5 transition-opacity"
                  style={{ backgroundColor: service.themeColor }}
                />

                {/* ---------------- EXPANDED VIEW ---------------- */}
                {isExpanded ? (
                  <div className="services-expanded-content flex flex-col justify-between h-full w-full">
                    
                    {/* Header info */}
                    <div>
                      {/* Top Row: Icon */}
                      <div className="mb-4 sm:mb-6 pt-1">
                        <div 
                          className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border"
                          style={{ borderColor: `${service.themeColor}40` }}
                        >
                          <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                        </div>
                      </div>

                      {/* Pillar Title */}
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0B192C] uppercase mb-4">
                        {service.heading}
                      </h3>

                      {/* Services Checklist: Single column line-by-line for pillars 1-3, grid for other-services */}
                      <div className="mb-4">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block mb-3">
                          Services Included:
                        </span>
                        <div 
                          className={
                            service.id === 'other-services' 
                              ? "grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5" 
                              : "flex flex-col gap-2 sm:gap-2.5"
                          }
                        >
                          {service.subservices.map((sub, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={(e) => handleSubserviceClick(e, sub.id)}
                              className="flex items-center justify-between w-full p-2.5 sm:p-3 rounded-xl bg-white hover:bg-slate-50/90 border border-slate-200/90 shadow-2xs hover:shadow-xs text-left transition-all duration-200 group/item cursor-pointer"
                            >
                              <div className="flex items-center gap-2.5">
                                <CheckCircle2 
                                  size={17} 
                                  className="shrink-0 transition-transform group-hover/item:scale-110" 
                                  style={{ color: service.themeColor }}
                                />
                                <span className="text-xs sm:text-[13px] font-bold text-slate-800 transition-colors leading-tight">
                                  {sub.name}
                                </span>
                              </div>
                              <ArrowRight 
                                size={14} 
                                className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all text-slate-400 shrink-0" 
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA Action Button */}
                    <div className="pt-3 flex items-center justify-start border-t border-slate-200/60 mt-2">
                      <button
                        type="button"
                        onClick={(e) => handleSubserviceClick(e, service.targetPage)}
                        className={`inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white ${service.btnClass} px-5 py-2.5 rounded-xl transition-all shadow-md cursor-pointer group/btn`}
                      >
                        <span>Explore {service.shortTitle}</span>
                        <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </div>
                ) : (
                  /* ---------------- COLLAPSED / INITIAL VIEW ---------------- */
                  <div className="services-collapsed-content flex flex-col justify-between h-full w-full">
                    
                    {/* Top: Serial Number */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs font-mono font-bold tracking-widest text-slate-400">
                        {service.number}
                      </span>
                      {/* Mobile Expand Indicator */}
                      <ChevronDown size={16} className="text-slate-400 sm:hidden" />
                    </div>

                    {/* Center / Bottom: Branded Icon + Heading */}
                    <div className="pt-10 flex flex-col items-start gap-3">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                        style={{ backgroundColor: `${service.themeColor}20` }}
                      >
                        <IconComponent 
                          className="w-5 h-5 transition-transform group-hover:scale-110" 
                          style={{ color: service.themeColor }}
                        />
                      </div>

                      <h3 className="text-base sm:text-lg font-black tracking-wider text-white uppercase break-words leading-tight">
                        {service.heading}
                      </h3>

                      <span 
                        className="text-[11px] uppercase font-bold tracking-wider opacity-85 transition-all flex items-center gap-1.5"
                        style={{ color: service.themeColor }}
                      >
                        Hover to reveal <ArrowRight size={12} />
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
