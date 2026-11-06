import React from 'react';
import { GraduationCap, Handshake, Award, ShieldCheck } from 'lucide-react';
import './TrustedPartnersSection.css';

export const TRUSTED_PARTNERS = [
  {
    id: 'paysquare',
    name: 'Paysquare',
    subtitle: 'Payroll Management made easy',
    logo: '/images/partners/paysquare-logo.png'
  },
  {
    id: 'transedge',
    name: 'Transedge Advisory',
    subtitle: 'Tax & Transfer Pricing Advisory',
    logo: '/images/partners/transedge-logo.png'
  },
  {
    id: 'stride-legal',
    name: 'Stride Legal',
    subtitle: 'Corporate Legal & Governance',
    logo: '/images/partners/stride-legal-logo.png'
  },
  {
    id: 'finpro',
    name: 'FinPro Consulting',
    subtitle: 'Financial & Accounting Advisory',
    logo: '/images/partners/finpro-consulting-logo.png'
  },
  {
    id: 'optitax',
    name: "Optitax's",
    subtitle: 'Tax Planning & Compliance',
    logo: '/images/partners/optitax-logo.png'
  }
];

export const CORE_VALUES = [
  {
    number: '01',
    title: 'Expertise',
    icon: GraduationCap,
    description: 'Specialists with demonstrated knowledge in their field.',
    iconColor: 'text-[#FA5A16]',
    iconBg: 'bg-[#FFF0E6]',
    borderColor: 'border-[#FED7AA]'
  },
  {
    number: '02',
    title: 'Reliability',
    icon: Handshake,
    description: 'People we know and are comfortable putting in front of our clients.',
    iconColor: 'text-[#2563EB]',
    iconBg: 'bg-[#EFF6FF]',
    borderColor: 'border-[#BFDBFE]'
  },
  {
    number: '03',
    title: 'Quality',
    icon: Award,
    description: 'A standard of work that meets the expectations we set for ourselves.',
    iconColor: 'text-[#059669]',
    iconBg: 'bg-[#ECFDF5]',
    borderColor: 'border-[#A7F3D0]'
  },
  {
    number: '04',
    title: 'Accountability',
    icon: ShieldCheck,
    description: 'We remain involved rather than simply passing your requirement to someone else.',
    iconColor: 'text-[#7C3AED]',
    iconBg: 'bg-[#F5F3FF]',
    borderColor: 'border-[#DDD6FE]'
  }
];

export default function TrustedPartnersSection() {
  return (
    <section className="trusted-partners-section" id="why-partners">
      
      {/* ================= SECTION HEADER ================= */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14">
        
        {/* Eyebrow Label */}
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#FA5A16] bg-[#FA5A16]/10 px-3.5 py-1.5 rounded-full border border-[#FA5A16]/20 inline-block mb-3">
          OUR APPROACH
        </span>

        {/* Requested Heading: "Why We Work with Partners" with animated underline */}
        <h2 className="alpha-h2 font-black text-[#0B192C] tracking-tight">
          Why We Work with{' '}
          <span className="relative inline-block text-[#FA5A16]">
            Partners
            <svg 
              className="absolute left-0 -bottom-1.5 sm:-bottom-2.5 w-full h-3 sm:h-4 overflow-visible pointer-events-none" 
              viewBox="0 0 120 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path 
                d="M 2 12 Q 60 2, 118 12" 
                stroke="#FA5A16" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
                className="animate-draw-curved-underline"
              />
            </svg>
          </span>
        </h2>

        {/* ================= SUBCONTENT COPY ================= */}
        <div className="max-w-3xl mx-auto mt-6 sm:mt-7 space-y-3.5 text-center">
          <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
            We don’t believe that every service needs to be performed by Alphasure itself.
          </p>
          <p className="text-lg sm:text-xl font-bold text-[#0B192C] leading-snug">
            We believe it needs to be done by the right people.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto pt-1 font-normal">
            For services outside our core expertise, we work with carefully selected specialists rather than outsourcing work to multiple low-cost service providers.
          </p>
        </div>

      </div>

      {/* ================= OUR CORE VALUES ================= */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        
        {/* Core Values Subheading */}
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-black text-[#0B192C] tracking-tight">
            Our Core Values
          </h3>
        </div>

        {/* 4 Core Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {CORE_VALUES.map((val) => {
            const IconComponent = val.icon;
            return (
              <div key={val.number} className="partner-value-card">
                <div>
                  {/* Top Bar: Icon + Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`partner-value-icon-box ${val.iconBg} border ${val.borderColor}`}>
                      <IconComponent className={`w-6 h-6 ${val.iconColor}`} />
                    </div>
                    <span className="partner-value-number">{val.number}</span>
                  </div>

                  {/* Title */}
                  <h4 className="partner-value-title">
                    {val.title}
                  </h4>

                  {/* Description */}
                  <p className="partner-value-desc">
                    {val.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* ================= STATIC SPECIALIST PARTNER LOGOS ================= */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-2">
        
        {/* Sub-label above logos */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Our Specialist Partner Network
          </span>
        </div>

        {/* Static Centered Partner Logos */}
        <div className="partners-static-grid">
          {TRUSTED_PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="partner-logo-card"
              title={`${partner.name} - ${partner.subtitle}`}
            >
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="partner-logo-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
