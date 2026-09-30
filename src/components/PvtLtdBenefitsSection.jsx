import React, { useState } from 'react';

export default function PvtLtdBenefitsSection() {
  const [hoveredId, setHoveredId] = useState(null);

  const CARDS = [
    {
      id: 1,
      name: '01 Trusted Structure',
      image: '/images/pvt-card-01.jpg',
      left: '13.48%',
      top: '1.47%',
      width: '35.16%',
      height: '38.12%',
      hoverTransform: 'translateY(-12px) scale(1.06)',
      hoverShadow: 'drop-shadow(0 22px 35px rgba(59, 130, 246, 0.35))',
    },
    {
      id: 2,
      name: '02 Personal Protection',
      image: '/images/pvt-card-02.jpg',
      left: '51.37%',
      top: '1.47%',
      width: '35.16%',
      height: '38.12%',
      hoverTransform: 'translateY(-12px) scale(1.06)',
      hoverShadow: 'drop-shadow(0 22px 35px rgba(217, 119, 6, 0.35))',
    },
    {
      id: 3,
      name: '03 Investor Friendly',
      image: '/images/pvt-card-03.jpg',
      left: '7.81%',
      top: '42.52%',
      width: '25.39%',
      height: '48.39%',
      hoverTransform: 'translate(-10px, -6px) scale(1.06)',
      hoverShadow: 'drop-shadow(0 22px 35px rgba(16, 185, 129, 0.35))',
    },
    {
      id: 4,
      name: '04 Built to Last',
      image: '/images/pvt-card-04.jpg',
      left: '66.80%',
      top: '42.52%',
      width: '25.39%',
      height: '48.39%',
      hoverTransform: 'translate(10px, -6px) scale(1.06)',
      hoverShadow: 'drop-shadow(0 22px 35px rgba(139, 92, 246, 0.35))',
    },
  ];

  return (
    <section 
      style={{
        width: '100%',
        paddingTop: '60px',
        paddingBottom: '90px',
        backgroundColor: '#ffffff',
        position: 'relative',
        userSelect: 'none',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 16px', position: 'relative', zIndex: 10 }}>
        
        {/* Tagline / Headline matching requested design */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 40px auto' }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Benefits of{' '}
            <span className="relative inline-block text-[#10B981]">
              Pvt Ltd Company:
              <svg 
                className="absolute left-0 -bottom-2 sm:-bottom-3.5 w-full h-3.5 sm:h-5 overflow-visible pointer-events-none" 
                viewBox="0 0 200 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M 4 16 Q 100 3, 196 16" 
                  stroke="#10B981" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  className="animate-draw-curved-underline"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* Interactive Diagram Stage (100% Identical Shapes, Placements & Dimensions with Interactive Pop-Up) */}
        <div 
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '960px',
            aspectRatio: '1024 / 682',
            margin: '0 auto',
          }}
        >
          {/* Base Connected Diagram Background (Center circle, rings, connector nodes, intact composition) */}
          <img
            src="/images/pvt-ltd-benefits-diagram.jpg"
            alt="Benefits of Pvt Ltd Company"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              pointerEvents: 'none',
              display: 'block',
            }}
          />

          {/* Interactive Center Hub Glow Hotspot */}
          <div
            onMouseEnter={() => setHoveredId('center')}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              position: 'absolute',
              left: '35%',
              top: '36%',
              width: '30%',
              height: '45%',
              borderRadius: '50%',
              cursor: 'pointer',
              zIndex: 20,
              transition: 'all 350ms cubic-bezier(0.2, 0.8, 0.2, 1)',
              transform: hoveredId === 'center' ? 'scale(1.05)' : 'scale(1)',
            }}
          />

          {/* 4 Custom Fan Container Cards with Mouse Hover Pop-Up */}
          {CARDS.map((card) => {
            const isHovered = hoveredId === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredId(card.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  position: 'absolute',
                  left: card.left,
                  top: card.top,
                  width: card.width,
                  height: card.height,
                  cursor: 'pointer',
                  zIndex: isHovered ? 40 : 15,
                  transition: 'transform 320ms cubic-bezier(0.2, 0.8, 0.2, 1), filter 320ms ease',
                  transform: isHovered ? card.hoverTransform : 'translate(0px, 0px) scale(1)',
                  filter: isHovered ? card.hoverShadow : 'none',
                }}
              >
                <img
                  src={card.image}
                  alt={card.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    pointerEvents: 'none',
                    display: 'block',
                  }}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
