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
    heading: 'Register your Business',
    shortTitle: 'Business Registration',
    image: '/images/services/incorporation-plane.jpg',
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
    heading: 'Accounting',
    shortTitle: 'Accounting',
    image: '/images/services/accounting-hand.jpg',
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
      { name: 'Controller and CFO services', id: 'controller-services' },
    ]
  },
  {
    id: 'tax-compliance',
    number: '03',
    heading: 'Compliance',
    shortTitle: 'Compliance',
    image: '/images/services/compliance-hourglass.jpg',
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
    heading: 'Everything else',
    shortTitle: 'Everything Else',
    image: '/images/services/everything-else-knife.png',
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
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center mb-5 sm:mb-7">
          <h2 className="alpha-h2 font-bold text-[#0B192C] tracking-tight">
            Our{' '}
            <span className="relative inline-block text-[#FA5A16]">
              Services
              {/* Signature Curved Underline */}
              <svg 
                className="absolute left-0 -bottom-1.5 sm:-bottom-2.5 w-full h-3 sm:h-4 overflow-visible pointer-events-none" 
                viewBox="0 0 200 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M 4 16 Q 100 3, 196 16" 
                  stroke="#FA5A16" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  className="animate-draw-curved-underline"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* ================= 4-PILLAR HORIZONTAL EXPANDING ACCORDION ================= */}
        <div className="services-accordion-container">
          {SERVICES_DATA.map((service) => {
            const isExpanded = activeId === service.id;
            const IconComponent = service.icon;

            // Determine card styling state
            const cardStateClass = isExpanded 
              ? `services-card-expanded ${service.bgClass} ${service.borderColor}`
              : 'services-card-collapsed group';

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
                  className="absolute top-0 left-0 right-0 h-1 transition-opacity z-20"
                  style={{ backgroundColor: service.themeColor }}
                />

                {/* Full-Card Background Image: Crisp full-bleed when closed, Softly blurred when expanded */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[1.25rem] z-0">
                  <img 
                    src={service.image} 
                    alt="" 
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isExpanded 
                        ? 'filter blur-md sm:blur-lg scale-105 opacity-35' 
                        : 'filter brightness-[0.80] contrast-[1.05] group-hover:scale-108 group-hover:brightness-[0.90]'
                    }`}
                  />
                  <div 
                    className={`absolute inset-0 transition-all duration-500 ${
                      isExpanded 
                        ? 'bg-white/70 backdrop-blur-[1px]' 
                        : 'bg-gradient-to-t from-[#0B192C]/95 via-[#0B192C]/30 to-[#0B192C]/40'
                    }`} 
                  />
                </div>

                {/* ---------------- EXPANDED VIEW ---------------- */}
                {isExpanded ? (
                  <div className="services-expanded-content relative z-10 flex flex-col justify-between h-full w-full">
                    
                    {/* Header info */}
                    <div>
                      {/* Top Row: Icon */}
                      <div className="mb-3 sm:mb-4 pt-0.5">
                        <div 
                          className="w-10 h-10 rounded-xl bg-white shadow-2xs flex items-center justify-center border"
                          style={{ borderColor: `${service.themeColor}35` }}
                        >
                          <IconComponent className={`w-5 h-5 ${service.iconColor}`} />
                        </div>
                      </div>

                      {/* Pillar Title */}
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0B192C] mb-2.5">
                        {service.heading}
                      </h3>

                      {/* Services Checklist: Single column line-by-line for pillars 1-3, grid for other-services */}
                      <div className="mb-3">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                          Services Included:
                        </span>
                        <div 
                          className={
                            service.id === 'other-services' 
                              ? "grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2" 
                              : "flex flex-col gap-1.5 sm:gap-2"
                          }
                        >
                          {service.subservices.map((sub, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={(e) => handleSubserviceClick(e, sub.id)}
                              className="flex items-center justify-between w-full px-3 py-2 rounded-lg bg-white hover:bg-slate-50/90 border border-slate-200/80 shadow-2xs hover:shadow-xs text-left transition-all duration-200 group/item cursor-pointer"
                            >
                              <div className="flex items-center gap-2.5">
                                <CheckCircle2 
                                  size={15} 
                                  className="shrink-0 transition-transform group-hover/item:scale-110" 
                                  style={{ color: service.themeColor }}
                                />
                                <span className="text-xs sm:text-[13px] font-medium text-slate-800 transition-colors leading-tight">
                                  {sub.name}
                                </span>
                              </div>
                              <ArrowRight 
                                size={13} 
                                className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all text-slate-400 shrink-0" 
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                ) : (
                  /* ---------------- COLLAPSED / CLOSED VIEW ---------------- */
                  <div className="services-collapsed-content relative z-10 flex flex-col justify-between h-full w-full">
                    
                    {/* Top: Serial Number Badge */}
                    <div className="flex items-center justify-between pt-0.5">
                      <span className="text-xs font-mono font-bold tracking-widest text-white/90 drop-shadow-sm px-2 py-0.5 rounded-md bg-black/30 backdrop-blur-xs">
                        {service.number}
                      </span>
                      {/* Mobile Expand Indicator */}
                      <ChevronDown size={15} className="text-white/80 sm:hidden" />
                    </div>

                    {/* Bottom: Branded Icon + Heading */}
                    <div className="pt-4 flex flex-col items-start gap-2.5">
                      <div 
                        className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md backdrop-blur-xs group-hover:scale-110"
                        style={{ 
                          backgroundColor: `${service.themeColor}35`, 
                          border: `1px solid ${service.themeColor}70` 
                        }}
                      >
                        <IconComponent 
                          className="w-5 h-5 text-white" 
                        />
                      </div>

                      <h3 className="text-sm sm:text-base font-bold tracking-tight text-white leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                        {service.heading}
                      </h3>
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
