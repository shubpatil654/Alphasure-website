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
      badgeX: '70.8%',
      badgeY: '15.5%',
      hitbox: { top: '8%', left: '68%', width: '28%', height: '17%' },
    },
    {
      id: 'reliability',
      title: 'Reliability',
      icon: Handshake,
      description: 'People we know and are comfortable putting in front of our clients.',
      badgeX: '77.2%',
      badgeY: '34.5%',
      hitbox: { top: '26%', left: '74%', width: '25%', height: '18%' },
    },
    {
      id: 'quality',
      title: 'Quality',
      icon: Award,
      description: 'A standard of work that meets the expectations we set for ourselves.',
      badgeX: '81.2%',
      badgeY: '56.5%',
      hitbox: { top: '48%', left: '78%', width: '22%', height: '18%' },
    },
    {
      id: 'accountability',
      title: 'Accountability',
      icon: Users,
      description: 'We remain involved rather than simply passing your requirement to someone else.',
      badgeX: '80.5%',
      badgeY: '80.5%',
      hitbox: { top: '71%', left: '77%', width: '23%', height: '19%' },
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
          {/* Main Visual Display matching Image 2 */}
          <div className="why-partners-artwork-frame relative rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(15,36,25,0.09)] border border-[#EADBCA]/80 bg-[#FAF7F2]">
            <img
              src="/images/why-partners-aerial-hero-retina.jpg"
              alt="Why We Work with Partners - Collaboration with Specialists"
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
                        ? 'opacity-100 scale-125 bg-amber-400/20 ring-4 ring-amber-400/40 shadow-[0_0_24px_rgba(184,134,72,0.5)]' 
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
              <span>STRONGER TOGETHER FOR BETTER OUTCOMES</span>
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
              <span className="title-gold block">with Partners</span>
            </h2>

            <div className="why-partners-title-bar" />

            <div className="why-partners-copy-block">
              <p>
                We don’t believe that every service needs to be performed by Alphasure itself.
              </p>
              <p>
                <strong className="text-[#0F241C] font-bold">We believe it needs to be done by the right people.</strong>
              </p>
              <p>
                For services outside our core expertise, we work with carefully selected specialists rather than outsourcing work to multiple low-cost service providers.
              </p>
            </div>
          </div>

          {/* Collaborative Meeting Visual */}
          <div className="my-8 rounded-2xl overflow-hidden border border-[#EADBCA] shadow-md relative bg-[#F7F2E9]">
            <img
              src="/images/why-partners-meeting-circle.jpg"
              alt="Alphasure collaborative partner network meeting"
              className="w-full h-auto object-cover"
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
                  className="bg-white/90 backdrop-blur-xs p-5 sm:p-6 rounded-2xl border border-[#EADBCA] shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#F5EDE1] border border-[#DFC8A5] flex items-center justify-center shrink-0 shadow-xs">
                    <IconComp className="w-6 h-6 text-[#9A7036]" strokeWidth={1.9} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-serif font-bold text-xl text-[#0F241C] mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#4A5568] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Dark Green Tag: Stronger Together For Better Outcomes */}
          <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-[#10241B] via-[#142E23] to-[#10241B] text-center shadow-md">
            <span className="text-xs sm:text-sm font-bold tracking-[0.14em] text-[#C3DAC0] uppercase">
              Stronger Together For Better Outcomes
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
