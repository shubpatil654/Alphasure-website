import React from 'react';
import { Handshake } from 'lucide-react';
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

export default function TrustedPartnersSection() {
  // Duplicate partner list for a seamless, continuous left-to-right marquee loop
  const marqueeItems = [
    ...TRUSTED_PARTNERS, 
    ...TRUSTED_PARTNERS, 
    ...TRUSTED_PARTNERS, 
    ...TRUSTED_PARTNERS
  ];

  return (
    <section className="trusted-partners-section" id="trusted-partners">
      
      {/* ================= SECTION HEADER ================= */}
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14">
        
        {/* Subtle Top Category Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/70 border border-orange-200/80 text-[#FA5A16] text-[11px] sm:text-xs font-extrabold uppercase tracking-widest mb-3">
          <Handshake className="w-3.5 h-3.5 text-[#FA5A16]" />
          <span>Strategic Collaborations</span>
        </div>

        {/* Requested Heading: "Our Trusted Partners" */}
        <h2 className="alpha-h2 font-black text-[#0B192C] tracking-tight">
          Our Trusted Partners
        </h2>

        {/* Centered Orange Accent Line */}
        <div className="w-16 h-1 bg-[#FA5A16] rounded-full mx-auto mt-3 shadow-xs" />

        {/* Short Subtitle */}
        <p className="max-w-2xl mx-auto text-slate-500 text-xs sm:text-sm md:text-base mt-3.5 font-medium leading-relaxed">
          Partnering with leading specialist advisory, legal, tax, and payroll firms to deliver comprehensive, world-class expertise to your business.
        </p>
      </div>

      {/* ================= CONTINUOUS LEFT-TO-RIGHT MARQUEE ================= */}
      <div className="relative w-full overflow-hidden py-2">
        
        {/* Left & Right Soft Fade Masks */}
        <div className="partners-fade-edge-left" aria-hidden="true" />
        <div className="partners-fade-edge-right" aria-hidden="true" />

        {/* Sliding Track (Left to Right Animation) */}
        <div className="partners-marquee-track flex items-center gap-5 sm:gap-7">
          {marqueeItems.map((partner, idx) => (
            <div
              key={`${partner.id}-${idx}`}
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
