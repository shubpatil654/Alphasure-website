import React from 'react';
import { ShieldCheck, Brain, Mountain, Lightbulb } from 'lucide-react';
import './ThreeIPhilosophySection.css';

export default function ThreeIPhilosophySection() {
  const pillars = [
    {
      id: 'integrity',
      title: 'Integrity',
      icon: ShieldCheck,
      description: 'You do the right thing, even when no one is watching.',
      pedestalImg: '/images/philosophy/pedestal-1.png'
    },
    {
      id: 'intelligence',
      title: 'Intelligence',
      icon: Brain,
      description: 'You are curious, willing to learn and able to think beyond the obvious.',
      pedestalImg: '/images/philosophy/pedestal-2.png'
    },
    {
      id: 'initiative',
      title: 'Initiative',
      icon: Mountain,
      description: "You don't wait to be told what to do.",
      pedestalImg: '/images/philosophy/pedestal-3.png'
    }
  ];

  return (
    <section className="three-i-section" id="philosophy">
      
      {/* Background Subtle Elegant Curved Arcs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-35">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
          <circle cx="80" cy="300" r="280" stroke="#DFD1BE" strokeWidth="1.2" strokeDasharray="6 6" fill="none" opacity="0.6" />
          <circle cx="80" cy="300" r="180" stroke="#E5DAC9" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M-80 500 Q 300 350 650 500 T 1450 450" stroke="#E5DAC9" strokeWidth="1" fill="none" opacity="0.4" />
        </svg>
      </div>

      <div className="three-i-container">
        
        {/* ================= TOP ROW: INTRO & 3 ARCH PILLARS ================= */}
        <div className="three-i-top-grid">
          
          {/* Left Column: Heading & Intro */}
          <div className="three-i-left-col">
            <div className="three-i-tag-row">
              <span className="three-i-tag-line" />
              <span className="three-i-tag-text">OUR PHILOSOPHY</span>
              <span className="three-i-tag-line" />
            </div>

            <h2 className="three-i-main-title">
              <span className="title-dark">The 3 I</span>
              <br />
              <span className="title-gold">Philosophy</span>
            </h2>

            <div className="three-i-title-bar" />

            <div className="three-i-intro-stack">
              <p className="three-i-intro-p">
                At Alphasure, we believe great work starts with the right mindset.
              </p>
              <p className="three-i-intro-p">
                Before you apply, ask yourself:
                <br />
                <strong className="font-extrabold text-[#0B192C]">
                  Do you have the 3 I's?
                </strong>
              </p>
            </div>
          </div>

          {/* Right Column: 3 Architectural Arch Pillars */}
          <div className="three-i-pillars-grid">
            {pillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div key={pillar.id} className="three-i-arch-card">
                  
                  {/* Top Content: Badge, Title & Bio */}
                  <div className="three-i-arch-top">
                    <div className="three-i-icon-badge">
                      <IconComp className="w-5 h-5 text-[#A67C52]" strokeWidth={1.8} />
                    </div>

                    <h3 className="three-i-pillar-title">
                      {pillar.title}
                    </h3>
                    <div className="three-i-pillar-line" />

                    <p className="three-i-pillar-desc">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom 3D Golden Roman 'I' on Stone Pedestal */}
                  <div className="three-i-pedestal-wrap">
                    <img
                      src={pillar.pedestalImg}
                      alt={`The 3 I Philosophy - ${pillar.title}`}
                      className="three-i-pedestal-img"
                    />
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* ================= BOTTOM HIGHLIGHT BANNER: One Important Rule ================= */}
        <div className="three-i-rule-banner">
          
          {/* Left Block: Icon & Title */}
          <div className="three-i-rule-left">
            <div className="three-i-rule-icon-badge">
              <Lightbulb className="w-5 h-5 text-[#A67C52]" strokeWidth={2} />
            </div>
            <h4 className="three-i-rule-heading">
              One Important Rule
            </h4>
          </div>

          {/* Vertical Divider */}
          <div className="three-i-rule-divider" />

          {/* Right Block: Core Principle Description */}
          <div className="three-i-rule-right">
            <p className="three-i-rule-lead">
              If you don't have the first I, the other two don't count.
            </p>
            <p className="three-i-rule-sub">
              Because intelligence without integrity can be dangerous, and initiative without integrity can be worse.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
