import React, { useState } from 'react';
import { GraduationCap, Handshake, Award, Users } from 'lucide-react';
import './WhyPartnersSection.css';

export default function WhyPartnersSection() {
  const [activePillar, setActivePillar] = useState(null);

  const pillars = [
    {
      id: 'expertise',
      title: 'Expertise',
      icon: GraduationCap,
      description: 'Specialists with demonstrated knowledge in their field.',
      badgeX: '75.1%',
      badgeY: '17.6%',
      hitbox: { top: '2%', left: '71%', width: '28%', height: '23%' },
      iconBg: 'bg-[#FFF0E6]',
      iconBorder: 'border-[#FED7AA]',
      iconColor: 'text-[#FA5A16]',
      glowColor: 'bg-orange-500/20 ring-4 ring-orange-500/35 shadow-[0_0_24px_rgba(250,90,22,0.4)]',
    },
    {
      id: 'reliability',
      title: 'Reliability',
      icon: Handshake,
      description: 'People we know and are comfortable putting in front of our clients.',
      badgeX: '75.2%',
      badgeY: '40.0%',
      hitbox: { top: '26%', left: '71%', width: '28%', height: '23%' },
      iconBg: 'bg-[#EFF6FF]',
      iconBorder: 'border-[#BFDBFE]',
      iconColor: 'text-[#2563EB]',
      glowColor: 'bg-blue-500/20 ring-4 ring-blue-500/35 shadow-[0_0_24px_rgba(37,99,235,0.4)]',
    },
    {
      id: 'quality',
      title: 'Quality',
      icon: Award,
      description: 'A standard of work that meets the expectations we set for ourselves.',
      badgeX: '75.1%',
      badgeY: '63.1%',
      hitbox: { top: '50%', left: '71%', width: '28%', height: '23%' },
      iconBg: 'bg-[#F1F5F9]',
      iconBorder: 'border-[#E2E8F0]',
      iconColor: 'text-[#64748B]',
      glowColor: 'bg-slate-400/20 ring-4 ring-slate-400/35 shadow-[0_0_24px_rgba(100,116,139,0.4)]',
    },
    {
      id: 'accountability',
      title: 'Accountability',
      icon: Users,
      description: 'We remain involved rather than simply passing your requirement to someone else.',
      badgeX: '75.2%',
      badgeY: '85.2%',
      hitbox: { top: '74%', left: '71%', width: '28%', height: '24%' },
      iconBg: 'bg-[#FFF5ED]',
      iconBorder: 'border-[#FDBA74]',
      iconColor: 'text-[#EA580C]',
      glowColor: 'bg-amber-500/20 ring-4 ring-amber-500/35 shadow-[0_0_24px_rgba(234,88,12,0.4)]',
    }
  ];

  return (
    <section className="why-partners-section" id="why-partners">
      {/* Background Ambient SVG curves */}
      <div className="why-partners-bg-curves pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <path d="M-100 240 C 250 160, 500 80, 800 120" stroke="#DFD1BE" strokeWidth="1.2" opacity="0.35" />
          <path d="M-50 480 C 350 420, 750 560, 1200 480" stroke="#EAE0D2" strokeWidth="1" strokeDasharray="6 6" opacity="0.45" />
        </svg>
      </div>

      <div className="why-partners-container">
        
        {/* ================= DESKTOP STAGE (Screens >= 1024px) ================= */}
        <div className="hidden lg:block why-partners-desktop-stage">
          {/* Main Visual Display matching Image */}
          <div className="why-partners-artwork-frame relative rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(11,25,44,0.08)] border border-slate-200/80 bg-white">
            <img
              src="/images/why-partners-approach-v1.png"
              srcSet="/images/why-partners-approach-v1.png 1x, /images/why-partners-approach-v1-2x.png 2x"
              alt="Why We Work with Partners - Our Approach: Expertise, Reliability, Quality, Accountability"
              className="w-full h-auto block select-none"
              loading="eager"
            />

            {/* Interactive Pulse & Glow Hotspots over the 4 Pillars */}
            {pillars.map((pillar) => {
              const isActive = activePillar === pillar.id;
              return (
                <div
                  key={pillar.id}
                  className="absolute cursor-pointer transition-all duration-300 rounded-2xl"
                  style={{
                    top: pillar.hitbox.top,
                    left: pillar.hitbox.left,
                    width: pillar.hitbox.width,
                    height: pillar.hitbox.height,
                  }}
                  onMouseEnter={() => setActivePillar(pillar.id)}
                  onMouseLeave={() => setActivePillar(null)}
                >
                  {/* Subtle interactive hover highlight aura around the badge */}
                  <div 
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full transition-all duration-300 pointer-events-none ${
                      isActive 
                        ? `opacity-100 scale-125 ${pillar.glowColor}` 
                        : 'opacity-0 scale-95'
                    }`}
                    style={{
                      left: `${(parseFloat(pillar.badgeX) - parseFloat(pillar.hitbox.left)) / parseFloat(pillar.hitbox.width) * 100}%`,
                      top: `${(parseFloat(pillar.badgeY) - parseFloat(pillar.hitbox.top)) / parseFloat(pillar.hitbox.height) * 100}%`,
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Accessible Semantic Content (Accessible to Screen Readers & Search Engines) */}
          <div className="sr-only">
            <span>OUR APPROACH</span>
            <h2>Why We Work with Partners</h2>
            <p>We don’t believe that every service needs to be performed by Alphasure itself.</p>
            <p><strong>We believe it needs to be done by the right people.</strong></p>
            <p>For services outside our core expertise, we work with carefully selected specialists rather than outsourcing work to multiple low-cost service providers.</p>
            <div>
              {pillars.map((p) => (
                <div key={p.id}>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= MOBILE / TABLET STAGE (Screens < 1024px) ================= */}
        <div className="block lg:hidden why-partners-mobile-stage">
          {/* Header Block */}
          <div className="why-partners-mobile-header">
            <div className="why-partners-eyebrow-row">
              <span className="why-partners-eyebrow-text">OUR APPROACH</span>
              <span className="why-partners-eyebrow-line" />
            </div>

            <h2 className="why-partners-main-title">
              <span className="title-navy block">Why We Work</span>
              <span className="title-orange block">with Partners</span>
            </h2>

            <div className="why-partners-title-bar" />

            <div className="why-partners-copy-block">
              <p>
                We don’t believe that every service needs to be performed by Alphasure itself.
              </p>
              <p>
                <strong className="text-[#0B192C] font-bold">We believe it needs to be done by the right people.</strong>
              </p>
              <p>
                For services outside our core expertise, we work with carefully selected specialists rather than outsourcing work to multiple low-cost service providers.
              </p>
            </div>
          </div>

          {/* Collaborative Meeting Visual */}
          <div className="my-8 rounded-2xl overflow-hidden border border-slate-200/90 shadow-md relative bg-white">
            <img
              src="/images/why-partners-meeting-v2.jpg"
              alt="Alphasure collaborative partner network meeting"
              className="w-full max-h-[360px] object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* 4 Pillars Card Grid */}
          <div className="space-y-4 sm:space-y-5">
            {pillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4"
                >
                  <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full ${pillar.iconBg} border ${pillar.iconBorder} flex items-center justify-center shrink-0 shadow-xs`}>
                    <IconComp className={`w-6 h-6 ${pillar.iconColor}`} strokeWidth={2} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-sans font-bold text-xl text-[#0B192C] mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
