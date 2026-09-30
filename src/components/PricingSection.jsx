import React, { useState, useEffect, useRef } from 'react';

// Pricing Data by Structure Type - exactly matched to specification table
export const PRICING_DATA = {
  'pvt-ltd': {
    items: [
      {
        id: '01',
        number: '01',
        title: 'Incorporation',
        price: '₹ 11,000',
        priceColor: '#172B4D',
        iconType: 'document',
        bgColor: '#E5ECE4',
        borderColor: 'rgba(180, 195, 175, 0.55)',
        dividerColor: '#8FA88D',
        iconBg: 'rgba(205, 222, 202, 0.75)',
        nodeColor: '#4A6B53',
        nodePos: { cx: 315, cy: 385 },
        pathD: 'M 368.5 259.8 L 249.8 73.4 A 22 22 0 0 0 219.7 67.1 A 510 510 0 0 0 19.3 353.2 A 32 32 0 0 0 42.0 397.9 L 236.8 453.6 A 32 32 0 0 0 272.0 435.5 A 245 245 0 0 1 362.4 291.0 A 22 22 0 0 0 368.5 259.8 Z',
        foCoords: { x: 30, y: 105, width: 310, height: 295 },
        hoverTransform: 'translate(-8px, -6px) scale(1.015)',
      },
      {
        id: '02',
        number: '02',
        title: 'Post-Incorporation\ncompliance',
        price: '₹ 7,000',
        priceColor: '#8A6B42', // Warm bronze/gold accent matching reference
        iconType: 'clipboard',
        bgColor: '#F7EFE4',
        borderColor: 'rgba(215, 200, 180, 0.55)',
        dividerColor: '#D4AF37',
        iconBg: 'rgba(235, 218, 198, 0.75)',
        nodeColor: '#A67C48',
        nodePos: { cx: 512, cy: 261 },
        pathD: 'M 304.6 43.3 A 488 488 0 0 1 719.4 43.3 A 20 20 0 0 1 727.8 69.9 L 631.7 254.5 A 20 20 0 0 1 604.8 263.8 A 240 240 0 0 0 419.2 263.8 A 20 20 0 0 1 392.3 254.5 L 296.2 69.9 A 20 20 0 0 1 304.6 43.3 Z',
        foCoords: { x: 350, y: 18, width: 324, height: 230 },
        hoverTransform: 'translateY(-10px) scale(1.015)',
      },
      {
        id: '03',
        number: '03',
        title: 'Annual Compliance\nPackage',
        price: '₹ 12,000',
        priceColor: '#172B4D',
        iconType: 'calendar',
        bgColor: '#E8EEF5',
        borderColor: 'rgba(185, 200, 215, 0.55)',
        dividerColor: '#8CAEC9',
        iconBg: 'rgba(210, 226, 240, 0.75)',
        nodeColor: '#4A657E',
        nodePos: { cx: 709, cy: 385 },
        pathD: 'M 655.5 259.8 L 774.2 73.4 A 22 22 0 0 1 804.3 67.1 A 510 510 0 0 1 1004.7 353.2 A 32 32 0 0 1 982.0 397.9 L 787.2 453.6 A 32 32 0 0 1 752.0 435.5 A 245 245 0 0 0 661.6 291.0 A 22 22 0 0 1 655.5 259.8 Z',
        foCoords: { x: 684, y: 105, width: 310, height: 295 },
        hoverTransform: 'translate(8px, -6px) scale(1.015)',
      },
    ],
    total: {
      label: 'Total',
      amount: '₹ 30,000',
      line1: 'Complete Package.',
      line2: 'Greater Possibilities.',
    },
  },
  'opc': {
    items: [
      {
        id: '01',
        number: '01',
        title: 'Incorporation',
        price: '₹ 10,000',
        priceColor: '#172B4D',
        iconType: 'document',
        bgColor: '#E5ECE4',
        borderColor: 'rgba(180, 195, 175, 0.55)',
        dividerColor: '#8FA88D',
        iconBg: 'rgba(205, 222, 202, 0.75)',
        nodeColor: '#4A6B53',
        nodePos: { cx: 315, cy: 385 },
        pathD: 'M 368.5 259.8 L 249.8 73.4 A 22 22 0 0 0 219.7 67.1 A 510 510 0 0 0 19.3 353.2 A 32 32 0 0 0 42.0 397.9 L 236.8 453.6 A 32 32 0 0 0 272.0 435.5 A 245 245 0 0 1 362.4 291.0 A 22 22 0 0 0 368.5 259.8 Z',
        foCoords: { x: 30, y: 105, width: 310, height: 295 },
        hoverTransform: 'translate(-8px, -6px) scale(1.015)',
      },
      {
        id: '02',
        number: '02',
        title: 'Post-Incorporation\ncompliance',
        price: '₹ 7,000',
        priceColor: '#8A6B42',
        iconType: 'clipboard',
        bgColor: '#F7EFE4',
        borderColor: 'rgba(215, 200, 180, 0.55)',
        dividerColor: '#D4AF37',
        iconBg: 'rgba(235, 218, 198, 0.75)',
        nodeColor: '#A67C48',
        nodePos: { cx: 512, cy: 261 },
        pathD: 'M 304.6 43.3 A 488 488 0 0 1 719.4 43.3 A 20 20 0 0 1 727.8 69.9 L 631.7 254.5 A 20 20 0 0 1 604.8 263.8 A 240 240 0 0 0 419.2 263.8 A 20 20 0 0 1 392.3 254.5 L 296.2 69.9 A 20 20 0 0 1 304.6 43.3 Z',
        foCoords: { x: 350, y: 18, width: 324, height: 230 },
        hoverTransform: 'translateY(-10px) scale(1.015)',
      },
      {
        id: '03',
        number: '03',
        title: 'Annual Compliance\nPackage',
        price: '₹ 12,000',
        priceColor: '#172B4D',
        iconType: 'calendar',
        bgColor: '#E8EEF5',
        borderColor: 'rgba(185, 200, 215, 0.55)',
        dividerColor: '#8CAEC9',
        iconBg: 'rgba(210, 226, 240, 0.75)',
        nodeColor: '#4A657E',
        nodePos: { cx: 709, cy: 385 },
        pathD: 'M 655.5 259.8 L 774.2 73.4 A 22 22 0 0 1 804.3 67.1 A 510 510 0 0 1 1004.7 353.2 A 32 32 0 0 1 982.0 397.9 L 787.2 453.6 A 32 32 0 0 1 752.0 435.5 A 245 245 0 0 0 661.6 291.0 A 22 22 0 0 1 655.5 259.8 Z',
        foCoords: { x: 684, y: 105, width: 310, height: 295 },
        hoverTransform: 'translate(8px, -6px) scale(1.015)',
      },
    ],
    total: {
      label: 'Total',
      amount: '₹ 29,000',
      line1: 'Complete Package.',
      line2: 'Greater Possibilities.',
    },
  },
  'llp': {
    items: [
      {
        id: '01',
        number: '01',
        title: 'Incorporation',
        price: '₹ 10,000',
        priceColor: '#172B4D',
        iconType: 'document',
        bgColor: '#E5ECE4',
        borderColor: 'rgba(180, 195, 175, 0.55)',
        dividerColor: '#8FA88D',
        iconBg: 'rgba(205, 222, 202, 0.75)',
        nodeColor: '#4A6B53',
        nodePos: { cx: 315, cy: 385 },
        pathD: 'M 368.5 259.8 L 249.8 73.4 A 22 22 0 0 0 219.7 67.1 A 510 510 0 0 0 19.3 353.2 A 32 32 0 0 0 42.0 397.9 L 236.8 453.6 A 32 32 0 0 0 272.0 435.5 A 245 245 0 0 1 362.4 291.0 A 22 22 0 0 0 368.5 259.8 Z',
        foCoords: { x: 30, y: 105, width: 310, height: 295 },
        hoverTransform: 'translate(-8px, -6px) scale(1.015)',
      },
      {
        id: '02',
        number: '02',
        title: 'Post-Incorporation\ncompliance',
        price: '₹ 6,000',
        priceColor: '#8A6B42',
        iconType: 'clipboard',
        bgColor: '#F7EFE4',
        borderColor: 'rgba(215, 200, 180, 0.55)',
        dividerColor: '#D4AF37',
        iconBg: 'rgba(235, 218, 198, 0.75)',
        nodeColor: '#A67C48',
        nodePos: { cx: 512, cy: 261 },
        pathD: 'M 304.6 43.3 A 488 488 0 0 1 719.4 43.3 A 20 20 0 0 1 727.8 69.9 L 631.7 254.5 A 20 20 0 0 1 604.8 263.8 A 240 240 0 0 0 419.2 263.8 A 20 20 0 0 1 392.3 254.5 L 296.2 69.9 A 20 20 0 0 1 304.6 43.3 Z',
        foCoords: { x: 350, y: 18, width: 324, height: 230 },
        hoverTransform: 'translateY(-10px) scale(1.015)',
      },
      {
        id: '03',
        number: '03',
        title: 'Annual Compliance\nPackage',
        price: '₹ 10,000',
        priceColor: '#172B4D',
        iconType: 'calendar',
        bgColor: '#E8EEF5',
        borderColor: 'rgba(185, 200, 215, 0.55)',
        dividerColor: '#8CAEC9',
        iconBg: 'rgba(210, 226, 240, 0.75)',
        nodeColor: '#4A657E',
        nodePos: { cx: 709, cy: 385 },
        pathD: 'M 655.5 259.8 L 774.2 73.4 A 22 22 0 0 1 804.3 67.1 A 510 510 0 0 1 1004.7 353.2 A 32 32 0 0 1 982.0 397.9 L 787.2 453.6 A 32 32 0 0 1 752.0 435.5 A 245 245 0 0 0 661.6 291.0 A 22 22 0 0 1 655.5 259.8 Z',
        foCoords: { x: 684, y: 105, width: 310, height: 295 },
        hoverTransform: 'translate(8px, -6px) scale(1.015)',
      },
    ],
    total: {
      label: 'Total',
      amount: '₹ 26,000',
      line1: 'Complete Package.',
      line2: 'Greater Possibilities.',
    },
  },
  'secretarial': {
    showLogoCenter: true,
    items: [
      {
        id: '01',
        number: null,
        title: 'Pvt Ltd Co.',
        price: '₹ 12,000',
        priceColor: '#172B4D',
        iconType: 'document',
        bgColor: '#E5ECE4',
        borderColor: 'rgba(180, 195, 175, 0.55)',
        dividerColor: '#8FA88D',
        iconBg: 'rgba(205, 222, 202, 0.75)',
        nodeColor: '#4A6B53',
        nodePos: { cx: 315, cy: 385 },
        pathD: 'M 368.5 259.8 L 249.8 73.4 A 22 22 0 0 0 219.7 67.1 A 510 510 0 0 0 19.3 353.2 A 32 32 0 0 0 42.0 397.9 L 236.8 453.6 A 32 32 0 0 0 272.0 435.5 A 245 245 0 0 1 362.4 291.0 A 22 22 0 0 0 368.5 259.8 Z',
        foCoords: { x: 30, y: 105, width: 310, height: 295 },
        hoverTransform: 'translate(-8px, -6px) scale(1.015)',
      },
      {
        id: '02',
        number: null,
        title: 'OPC',
        price: '₹ 12,000',
        priceColor: '#8A6B42',
        iconType: 'clipboard',
        bgColor: '#F7EFE4',
        borderColor: 'rgba(215, 200, 180, 0.55)',
        dividerColor: '#D4AF37',
        iconBg: 'rgba(235, 218, 198, 0.75)',
        nodeColor: '#A67C48',
        nodePos: { cx: 512, cy: 261 },
        pathD: 'M 304.6 43.3 A 488 488 0 0 1 719.4 43.3 A 20 20 0 0 1 727.8 69.9 L 631.7 254.5 A 20 20 0 0 1 604.8 263.8 A 240 240 0 0 0 419.2 263.8 A 20 20 0 0 1 392.3 254.5 L 296.2 69.9 A 20 20 0 0 1 304.6 43.3 Z',
        foCoords: { x: 350, y: 18, width: 324, height: 230 },
        hoverTransform: 'translateY(-10px) scale(1.015)',
      },
      {
        id: '03',
        number: null,
        title: 'LLP',
        price: '₹ 10,000',
        priceColor: '#172B4D',
        iconType: 'calendar',
        bgColor: '#E8EEF5',
        borderColor: 'rgba(185, 200, 215, 0.55)',
        dividerColor: '#8CAEC9',
        iconBg: 'rgba(210, 226, 240, 0.75)',
        nodeColor: '#4A657E',
        nodePos: { cx: 709, cy: 385 },
        pathD: 'M 655.5 259.8 L 774.2 73.4 A 22 22 0 0 1 804.3 67.1 A 510 510 0 0 1 1004.7 353.2 A 32 32 0 0 1 982.0 397.9 L 787.2 453.6 A 32 32 0 0 1 752.0 435.5 A 245 245 0 0 0 661.6 291.0 A 22 22 0 0 1 655.5 259.8 Z',
        foCoords: { x: 684, y: 105, width: 310, height: 295 },
        hoverTransform: 'translate(8px, -6px) scale(1.015)',
      },
    ],
    total: {
      label: 'Alphasure',
      amount: '',
      line1: 'Your Trusted Compliance Partner',
      line2: '',
    },
  },
};

// Default backwards-compatibility exports
export const PRICING_ITEMS = PRICING_DATA['pvt-ltd'].items;
export const TOTAL_INFO = PRICING_DATA['pvt-ltd'].total;

// Outline Icon Component
function OutlineIcon({ type }) {
  if (type === 'document') {
    return (
      <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#172B4D" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    );
  }
  if (type === 'clipboard') {
    return (
      <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#172B4D" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    );
  }
  if (type === 'calendar') {
    return (
      <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#172B4D" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    );
  }
  return null;
}

// 1. Semicircular Connecting Arc & 3 Colored Nodes
export function PricingArc({ items, hoveredId }) {
  return (
    <g className="pricing-arc-layer pointer-events-none">
      {/* Semicircular Connecting Arc */}
      <path
        d="M 288 526 A 224 224 0 0 1 736 526"
        fill="none"
        stroke="#C5A880"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* 3 Circular Nodes */}
      {items.map((item) => {
        const isHovered = hoveredId === item.id;
        return (
          <g key={`node-${item.id}`} className="transition-all duration-300">
            {/* Subtle outer halo ring */}
            <circle
              cx={item.nodePos.cx}
              cy={item.nodePos.cy}
              r={isHovered ? 11 : 9}
              fill="none"
              stroke={item.nodeColor}
              strokeWidth="1.2"
              opacity={isHovered ? 0.65 : 0.4}
              className="transition-all duration-300"
            />
            {/* Center solid node */}
            <circle
              cx={item.nodePos.cx}
              cy={item.nodePos.cy}
              r={isHovered ? 7.5 : 6.5}
              fill={item.nodeColor}
              className="transition-all duration-300"
            />
          </g>
        );
      })}
    </g>
  );
}

// 2. Individual Organic Curved Pricing Panel
export function PricingCard({ item, isHovered, onHover, onLeave, onClick }) {
  return (
    <g
      className="pricing-card-group cursor-pointer select-none"
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={{
        transition: 'transform 320ms cubic-bezier(0.2, 0.8, 0.2, 1), filter 320ms ease',
        transform: isHovered ? item.hoverTransform : 'translate(0, 0) scale(1)',
        filter: isHovered 
          ? 'drop-shadow(0 20px 32px rgba(15, 23, 42, 0.12))' 
          : 'drop-shadow(0 14px 26px rgba(15, 23, 42, 0.06))',
      }}
    >
      {/* Organic Wedge Vector Shape */}
      <path
        d={item.pathD}
        fill={item.bgColor}
        stroke={item.borderColor}
        strokeWidth="1"
      />

      {/* Embedded High-Fidelity HTML Typography and Icon Container */}
      <foreignObject
        x={item.foCoords.x}
        y={item.foCoords.y}
        width={item.foCoords.width}
        height={item.foCoords.height}
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            fontFamily: "'Roboto', sans-serif",
            userSelect: 'none',
          }}
        >
          {/* Number (Rendered only when present) */}
          {item.number && (
            <>
              <span
                style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#172B4D',
                  letterSpacing: '0.5px',
                  lineHeight: 1,
                }}
              >
                {item.number}
              </span>

              {/* Under-Number Short Divider */}
              <div
                style={{
                  width: '28px',
                  height: '1.5px',
                  backgroundColor: item.dividerColor,
                  margin: '7px 0 11px 0',
                  opacity: 0.85,
                }}
              />
            </>
          )}

          {/* Icon Circle */}
          <div
            style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              backgroundColor: item.iconBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '11px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
            }}
          >
            <OutlineIcon type={item.iconType} />
          </div>

          {/* Service Title */}
          <h3
            style={{
              fontSize: '23px',
              fontWeight: 600,
              color: '#172B4D',
              margin: 0,
              lineHeight: 1.25,
              whiteSpace: 'pre-line',
            }}
          >
            {item.title}
          </h3>

          {/* Price */}
          <div
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: item.priceColor,
              marginTop: '11px',
              letterSpacing: '-0.5px',
              lineHeight: 1,
            }}
          >
            {item.price}
          </div>
        </div>
      </foreignObject>
    </g>
  );
}

// 3. Central Focal Total Circle
export function TotalCircle({ total = TOTAL_INFO, showLogoCenter = false, onClick }) {
  return (
    <g
      className="total-circle-group cursor-pointer select-none"
      onClick={onClick}
      style={{
        filter: 'drop-shadow(0 18px 36px rgba(15, 23, 42, 0.08))',
      }}
    >
      {/* Circle Body - Reduced Diameter */}
      <circle
        cx="512"
        cy="465"
        r="135"
        fill="#FFFFFF"
        stroke="rgba(0,0,0,0.06)"
        strokeWidth="1"
      />

      {/* Real HTML Content */}
      <foreignObject x="377" y="330" width="270" height="270">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            fontFamily: "'Roboto', sans-serif",
            userSelect: 'none',
          }}
        >
          {showLogoCenter ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 20px',
                textAlign: 'center',
              }}
            >
              <span
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#64748B',
                  letterSpacing: '-0.2px',
                  lineHeight: 1.2,
                }}
              >
                Incorporated Already?
              </span>

              {/* Accent Divider */}
              <div
                style={{
                  width: '32px',
                  height: '2px',
                  backgroundColor: '#C5A880',
                  margin: '8px 0 10px 0',
                }}
              />

              <span
                style={{
                  fontSize: '25px',
                  fontWeight: 900,
                  color: '#172B4D',
                  letterSpacing: '-0.5px',
                  lineHeight: 1.15,
                }}
              >
                Stay Compliant with Us
              </span>
            </div>
          ) : (
            <>
              {/* Label */}
              <span
                style={{
                  fontSize: '23px',
                  fontWeight: 600,
                  color: '#172B4D',
                  letterSpacing: '0.2px',
                  lineHeight: 1,
                }}
              >
                {total.label}
              </span>

              {/* Short Divider */}
              <div
                style={{
                  width: '32px',
                  height: '2px',
                  backgroundColor: '#C5A880',
                  margin: '7px 0 9px 0',
                }}
              />

              {/* Amount Focal Point */}
              <div
                style={{
                  fontSize: '46px',
                  fontWeight: 800,
                  color: '#172B4D',
                  letterSpacing: '-0.8px',
                  lineHeight: 1.05,
                }}
              >
                {total.amount}
              </div>
            </>
          )}
        </div>
      </foreignObject>
    </g>
  );
}

// 4. Combined Radial Graphic Composition
export function RadialPricingGraphic({ onOpenModal, structureType = 'pvt-ltd', items, total, showLogoCenter }) {
  const [hoveredId, setHoveredId] = useState(null);

  const activeData = PRICING_DATA[structureType] || PRICING_DATA['pvt-ltd'];
  const activeItems = items || activeData.items;
  const activeTotal = total || activeData.total;
  const isLogoCenter = showLogoCenter !== undefined ? showLogoCenter : Boolean(activeData.showLogoCenter);

  return (
    <div className="w-full relative select-none">
      
      {/* ================= DESKTOP / TABLET: 100% Vector Radial Composition ================= */}
      <div className="hidden md:block w-full max-w-[1040px] mx-auto">
        <div 
          className="relative w-full" 
          style={{ aspectRatio: '1024 / 580' }}
        >
          <svg
            viewBox="0 0 1024 580"
            className="w-full h-full overflow-visible"
            style={{ display: 'block' }}
          >
            {/* Radial Connecting Arc & Colored Nodes */}
            <PricingArc items={activeItems} hoveredId={hoveredId} />

            {/* Three Curved Organic Panels */}
            {activeItems.map((item) => (
              <PricingCard
                key={item.id}
                item={item}
                isHovered={hoveredId === item.id}
                onHover={setHoveredId}
                onLeave={() => setHoveredId(null)}
                onClick={onOpenModal}
              />
            ))}

            {/* Central Focal Total Circle / Company Logo */}
            <TotalCircle 
              total={activeTotal} 
              showLogoCenter={isLogoCenter} 
              onClick={onOpenModal} 
            />
          </svg>
        </div>
      </div>

      {/* ================= MOBILE: Compact Radial / Vertical Arrangement ================= */}
      <div className="block md:hidden w-full max-w-[440px] mx-auto px-2 space-y-4">
        {activeItems.map((item) => (
          <div
            key={`mobile-${item.id}`}
            onClick={onOpenModal}
            className="rounded-[24px] p-6 text-center border shadow-[0_8px_20px_rgba(0,0,0,0.04)] cursor-pointer transition-transform duration-200 active:scale-95"
            style={{
              backgroundColor: item.bgColor,
              borderColor: item.borderColor,
            }}
          >
            {item.number && (
              <>
                <span className="text-xl font-semibold text-[#172B4D] tracking-wide block">
                  {item.number}
                </span>
                <div 
                  className="w-7 h-[1.5px] mx-auto my-2 opacity-80" 
                  style={{ backgroundColor: item.dividerColor }} 
                />
              </>
            )}
            <div 
              className="w-12 h-12 rounded-full mx-auto my-3 flex items-center justify-center shadow-sm"
              style={{ backgroundColor: item.iconBg }}
            >
              <OutlineIcon type={item.iconType} />
            </div>
            <h3 className="text-xl font-semibold text-[#172B4D] leading-snug whitespace-pre-line">
              {item.title}
            </h3>
            <div 
              className="text-2xl font-bold mt-2.5"
              style={{ color: item.priceColor }}
            >
              {item.price}
            </div>
          </div>
        ))}

        {/* Mobile Total Circle / Center Message */}
        <div
          onClick={onOpenModal}
          className="w-full max-w-[260px] mx-auto aspect-square rounded-full bg-white border border-slate-200/80 shadow-[0_14px_30px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center text-center p-5 cursor-pointer transition-transform duration-200 active:scale-95 mt-4"
        >
          {isLogoCenter ? (
            <div className="flex flex-col items-center justify-center px-3 text-center">
              <span className="text-base sm:text-lg font-bold text-slate-500 leading-tight mb-1.5">
                Incorporated Already?
              </span>
              <div className="w-7 h-[2px] bg-[#C5A880] my-1.5" />
              <span className="text-xl sm:text-2xl font-black text-[#172B4D] leading-snug">
                Stay Compliant with Us
              </span>
            </div>
          ) : (
            <>
              <span className="text-lg font-semibold text-[#172B4D]">
                {activeTotal.label}
              </span>
              <div className="w-8 h-[2px] bg-[#C5A880] my-1.5" />
              <div className="text-3xl font-extrabold text-[#172B4D] tracking-tight">
                {activeTotal.amount}
              </div>
            </>
          )}
        </div>
      </div>

    </div>
  );
}

// 5. Main Pricing Section Component
export default function PricingSection({ onOpenModal, structureType = 'pvt-ltd', items, total }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

  if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-8 sm:py-10 md:py-12 bg-[#FCFBF9] overflow-hidden select-none"
      id="package-pricing"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      {/* Background Soft Curved Continuity Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-35">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <path d="M-60 160 C 350 70, 750 300, 1150 160 C 1300 110, 1400 220, 1500 200" stroke="#E6DEC9" strokeWidth="1.2" strokeDasharray="5 5" />
          <path d="M-60 580 C 400 460, 850 660, 1250 500 C 1380 450, 1450 560, 1520 520" stroke="#DDD4BD" strokeWidth="1.2" />
        </svg>
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Header (Clean without extra subtitle text) */}
        <div className="text-center max-w-4xl mx-auto mb-3 sm:mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAB308]/15 text-[#A16207] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 border border-[#EAB308]/30">
            ALL-INCLUSIVE PRICING
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-[#0F172A] tracking-tight leading-tight whitespace-normal sm:whitespace-nowrap">
            Transparent Pricing.{' '}
            <span className="whitespace-nowrap">
              <span className="text-[#0F172A]">No</span>{' '}
              <span className="relative inline-block text-[#EAB308]">
                Surprises
                <svg 
                  className="absolute left-0 -bottom-2 sm:-bottom-3.5 w-full h-3.5 sm:h-5 overflow-visible pointer-events-none" 
                  viewBox="0 0 200 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M 4 16 Q 100 3, 196 16" 
                    stroke="#EAB308" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    className="animate-draw-curved-underline"
                  />
                </svg>
              </span>
            </span>
          </h2>
        </div>

        {/* Subtle Entrance Animation Wrapper */}
        <div 
          className={`w-full transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.98]'
          }`}
        >
          {/* Reusable Radial Pricing Graphic Component */}
          <RadialPricingGraphic onOpenModal={onOpenModal} structureType={structureType} items={items} total={total} />
        </div>

      </div>
    </section>
  );
}
