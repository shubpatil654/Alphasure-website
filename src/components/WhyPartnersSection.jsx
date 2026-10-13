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
          <div className="why-partners-stage-wrapper relative w-full overflow-hidden select-none">
            {/* Clean Aerial Photographic Background */}
            <img
              src="/images/why-partners-aerial-clean.jpg"
              srcSet="/images/why-partners-aerial-clean-retina.jpg 2x"
              alt="Alphasure collaborative partner network meeting"
              className="w-full h-auto block select-none pointer-events-none"
              loading="eager"
            />

            {/* Left Column: Real Editorial HTML Text, Narrative & Grounding Tag */}
            <div className="absolute top-0 left-0 bottom-0 w-[42%] flex flex-col justify-between py-[4.5%] pl-[4%] pr-[1%] z-20">
              <div className="space-y-4">
                {/* Eyebrow */}
                <div className="flex items-center gap-3">
                  <span className="text-[12.5px] font-semibold text-[#A07B43] tracking-[0.14em] uppercase font-sans">
                    OUR APPROACH
                  </span>
                  <span className="w-10 h-[1.5px] bg-[#C5A059]" />
                </div>

                {/* Main Headline Title */}
                <h2 className="font-serif text-[clamp(28px,2.9vw,46px)] leading-[1.14] tracking-tight">
                  <span className="text-[#0F241C] block">Why We Work</span>
                  <span className="text-[#B88648] block">with Partners</span>
                </h2>

                {/* Accent Divider Bar */}
                <div className="w-11 h-[2.5px] bg-[#C5A059] rounded-xs" />

                {/* Body Copy */}
                <div className="space-y-3.5 text-[clamp(13.5px,1vw,15.5px)] leading-[1.68] text-[#3D4852] max-w-[430px]">
                  <p>
                    We don’t believe that every service needs to be performed by Alphasure itself.
                  </p>
                  <p className="text-[#0F241C] font-bold">
                    We believe it needs to be done by the right people.
                  </p>
                  <p>
                    For services outside our core expertise, we work with carefully selected specialists rather than outsourcing work to multiple low-cost service providers.
                  </p>
                </div>
              </div>

              {/* Bottom Grounding Accent Tag */}
              <div className="pt-3">
                <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#10241B] shadow-sm border border-[#224434]">
                  <span className="w-[3px] h-5 bg-[#C5A059] rounded-full" />
                  <span className="text-[11.5px] font-bold tracking-[0.15em] text-[#C3DAC0] uppercase">
                    Stronger Together For Better Outcomes
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Real HTML 4 Strategic Pillars with Arc Alignment */}
            <div className="absolute top-0 right-0 bottom-0 w-[38%] flex flex-col justify-center py-[3%] pr-[4%] z-20">
              {/* Connecting Arc Line (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 400 700" fill="none" preserveAspectRatio="none">
                <path
                  d="M 50 80 Q 110 350 70 620"
                  stroke="#DFC8A5"
                  strokeWidth="1.5"
                  opacity="0.8"
                />
              </svg>

              <div className="space-y-5 lg:space-y-6 relative z-20">
                {pillars.map((pillar, idx) => {
                  const IconComp = pillar.icon;
                  const isActive = activePillar === pillar.id;
                  
                  // Graceful curved offsets matching the circular rug arc:
                  const offsets = ['translate-x-0', 'translate-x-4', 'translate-x-6', 'translate-x-2'];
                  const offsetClass = offsets[idx] || '';

                  return (
                    <div
                      key={pillar.id}
                      className={`flex items-start gap-4 transition-all duration-300 cursor-pointer ${offsetClass}`}
                      onMouseEnter={() => setActivePillar(pillar.id)}
                      onMouseLeave={() => setActivePillar(null)}
                    >
                      {/* Circular Pillar Badge */}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 shadow-xs ${
                        isActive
                          ? 'bg-[#FAF5EE] border-[#B88648] scale-110 shadow-[0_0_20px_rgba(184,134,72,0.4)] ring-2 ring-[#B88648]/40'
                          : 'bg-white/95 border-[#DFC8A5] hover:border-[#B88648]'
                      }`}>
                        <IconComp className={`w-5 h-5 transition-colors duration-200 ${isActive ? 'text-[#0F241C]' : 'text-[#8C6239]'}`} strokeWidth={1.9} />
                      </div>

                      {/* Pillar Narrative */}
                      <div className="text-left">
                        <h3 className={`font-serif font-bold text-base lg:text-lg transition-colors duration-200 ${
                          isActive ? 'text-[#B88648]' : 'text-[#0F241C]'
                        }`}>
                          {pillar.title}
                        </h3>
                        <p className="text-xs lg:text-[13.5px] text-[#4A5568] leading-relaxed max-w-[240px]">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
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
              src="/images/why-partners-aerial-clean.jpg"
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
