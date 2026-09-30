import React, { useState } from 'react';
import { ArrowRight, Shield, BarChart3, Users } from 'lucide-react';
import './TransparencySection.css';

export default function TransparencySection() {
  const [activePartner, setActivePartner] = useState(null);

  const partners = [
    {
      id: 'partner-a',
      name: 'Partner A',
      role: 'Advisory & Compliance Support',
      icon: Shield,
      hitbox: { top: '15.5%', left: '75.5%', width: '19%', height: '20%' },
    },
    {
      id: 'partner-b',
      name: 'Partner B',
      role: 'Technology Implementation',
      icon: BarChart3,
      hitbox: { top: '37%', left: '79%', width: '18%', height: '19%' },
    },
    {
      id: 'partner-c',
      name: 'Partner C',
      role: 'Specialist Services',
      icon: Users,
      hitbox: { top: '56.5%', left: '79.5%', width: '18%', height: '19%' },
    },
  ];

  const handleScrollToApproach = (e) => {
    e.preventDefault();
    const target = document.getElementById('why-partners');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="transparency-section" id="transparency">
      <div className="transparency-container">
        
        {/* ================= DESKTOP STAGE (Screens >= 1024px) ================= */}
        <div className="hidden lg:block transparency-desktop-stage">
          <div className="transparency-artwork-frame relative rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(15,26,45,0.08)] border border-[#EADBCA]/80 bg-[#FAF7F2]">
            <img
              src="/images/transparency-chess-hero-retina.png"
              alt="Transparency matters to us - Open Communication, Clear Roles, Trusted Partners"
              className="w-full h-auto block select-none"
              loading="eager"
            />

            {/* Interactive Clickable 'OUR APPROACH' Button Hotspot */}
            <a
              href="#why-partners"
              onClick={handleScrollToApproach}
              className="absolute cursor-pointer transition-all duration-300 rounded-full group"
              style={{
                top: '77%',
                left: '5.2%',
                width: '16.5%',
                height: '10.5%',
              }}
              title="Navigate to Our Approach"
            >
              <div className="w-full h-full rounded-full ring-2 ring-transparent group-hover:ring-[#8C6239]/50 group-hover:bg-amber-500/10 transition-all duration-200" />
            </a>

            {/* Interactive Hotspots over the 3 Partner Cards */}
            {partners.map((partner) => {
              const isActive = activePartner === partner.id;
              return (
                <div
                  key={partner.id}
                  className="absolute cursor-pointer transition-all duration-300 rounded-xl"
                  style={{
                    top: partner.hitbox.top,
                    left: partner.hitbox.left,
                    width: partner.hitbox.width,
                    height: partner.hitbox.height,
                  }}
                  onMouseEnter={() => setActivePartner(partner.id)}
                  onMouseLeave={() => setActivePartner(null)}
                >
                  <div
                    className={`w-full h-full rounded-xl transition-all duration-300 pointer-events-none ${
                      isActive
                        ? 'opacity-100 ring-2 ring-white/80 bg-white/15 shadow-[0_8px_30px_rgba(255,255,255,0.35)] backdrop-blur-xs'
                        : 'opacity-0'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Accessible Semantic Content for SEO & Screen Readers */}
          <div className="sr-only">
            <span>OUR COMMITMENT</span>
            <h2>Transparency matters to us.</h2>
            <p>
              When a service is delivered by a partner, we will tell you who the partner is and what role they play.
            </p>
            <p>
              There is no attempt to make every service appear as though it is performed by Alphasure.
            </p>
            <div>
              <span>OPEN COMMUNICATION</span>
              <span>CLEAR ROLES</span>
              <span>TRUSTED PARTNERS</span>
              {partners.map((p) => (
                <div key={p.id}>
                  <h3>{p.name}</h3>
                  <p>{p.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= MOBILE / TABLET STAGE (Screens < 1024px) ================= */}
        <div className="block lg:hidden transparency-mobile-stage">
          <div className="transparency-mobile-header">
            <div className="transparency-eyebrow-row">
              <span className="transparency-eyebrow-text">OUR COMMITMENT</span>
              <span className="transparency-eyebrow-line" />
            </div>

            <h2 className="transparency-main-title">
              <span className="text-[#0A0D14] block font-extrabold">Transparency</span>
              <span className="text-[#9B7038] block font-extrabold">matters to us.</span>
            </h2>

            <div className="transparency-title-bar" />

            <div className="transparency-copy-block">
              <p>
                When a service is delivered by a partner, we will tell you who the partner is and what role they play.
              </p>
              <p>
                There is no attempt to make every service appear as though it is performed by Alphasure.
              </p>
            </div>

            {/* Button: Our Approach */}
            <div className="pt-2 pb-6">
              <a
                href="#why-partners"
                onClick={handleScrollToApproach}
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/90 border border-[#E8DCCB] shadow-xs hover:shadow-md hover:bg-white transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-[#8C6239] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold tracking-[0.14em] text-[#0A0D14] uppercase">
                  Our Approach
                </span>
              </a>
            </div>
          </div>

          {/* Crystal Chess King & Orbital Visual */}
          <div className="my-6 rounded-2xl overflow-hidden border border-[#EADBCA] shadow-md bg-white">
            <img
              src="/images/transparency-chess-visual.png"
              alt="Crystal Chess King - Transparency, Clear Roles, and Trusted Partners"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* 3 Frosted Partner Cards */}
          <div className="space-y-3.5 sm:space-y-4">
            {partners.map((partner) => {
              const IconComp = partner.icon;
              return (
                <div
                  key={partner.id}
                  className="bg-white/85 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#EADBCA] shadow-xs flex items-center gap-3.5 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FAF5EE] to-[#F2E7D5] border border-[#DFC8A5] flex items-center justify-center shrink-0 shadow-xs">
                    <IconComp className="w-5 h-5 text-[#8C6239]" strokeWidth={2} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-base text-[#0A0D14] tracking-tight">
                      {partner.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#55606E] font-medium">
                      {partner.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Orbital Tags Pill Strip */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {['Open Communication', 'Clear Roles', 'Trusted Partners'].map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#8C6239] bg-[#F7F2E9] border border-[#DFC8A5]"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
