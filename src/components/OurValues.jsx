import React, { useState } from 'react';
import './OurValues.css';

export default function OurValues() {
  const [activeValue, setActiveValue] = useState(null);

  const values = [
    {
      id: 'client-centric',
      title: 'Client-Centric',
      color: '#D8285D',
      position: 'top-left',
      description: 'We listen, understand and tailor our solutions to what our clients truly need—building relationships that last.'
    },
    {
      id: 'employee-focused',
      title: 'Employee-Focused',
      color: '#E5A922',
      position: 'top-right',
      description: 'We invest in our people, foster their growth, recognise their contributions and create an environment where they can thrive.'
    },
    {
      id: 'integrity',
      title: 'Integrity',
      color: '#1E4E79',
      position: 'bottom-left',
      description: 'We do the right thing—always. We operate with honesty, transparency and accountability.'
    },
    {
      id: 'continuous-improvement',
      title: 'Continuous Improvement',
      color: '#70A328',
      position: 'bottom-right',
      description: 'We never settle. We learn, adapt and continuously improve how we work and the value we deliver.'
    }
  ];

  return (
    <section className="our-values-section" id="our-values">
      
      {/* Background Subtle Elegant Arcs & Golden Circles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-35">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
          <circle cx="100" cy="450" r="380" stroke="#DFD1BE" strokeWidth="1.2" strokeDasharray="6 6" fill="none" opacity="0.6" />
          <circle cx="100" cy="450" r="260" stroke="#E5DAC9" strokeWidth="1" fill="none" opacity="0.5" />
          <circle cx="1340" cy="480" r="380" stroke="#DFD1BE" strokeWidth="1.2" strokeDasharray="8 6" fill="none" opacity="0.6" />
          <circle cx="1340" cy="480" r="260" stroke="#E5DAC9" strokeWidth="1" fill="none" opacity="0.5" />
        </svg>
      </div>

      <div className="our-values-container">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="our-values-header">
          <div className="our-values-tag-row">
            <span className="our-values-tag-line" />
            <span className="our-values-tag-text">OUR VALUES</span>
            <span className="our-values-tag-line" />
          </div>
          <h2 className="our-values-main-title">
            Our Values
          </h2>
          <div className="our-values-title-bar" />
        </div>

        {/* ================= DESKTOP STAGE (2x2 Interlocking Jigsaw Puzzle Canvas) ================= */}
        <div className="hidden lg:block our-values-canvas-wrap">
          <div className="relative w-full max-w-[1240px] mx-auto select-none">
            
            {/* Unified Canvas SVG: 4 Interlocking Puzzle Pieces + Connector Lines + Descriptions */}
            <svg 
              viewBox="0 0 1200 800" 
              className="w-full h-auto overflow-visible select-none drop-shadow-sm"
            >
              <defs>
                {/* Multi-layer 3D Realistic Soft Drop Shadow */}
                <filter id="puzzle3DShadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="18" stdDeviation="22" floodColor="#081426" floodOpacity="0.28" />
                  <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#081426" floodOpacity="0.14" />
                </filter>

                {/* 1. Rose Gradient (Top-Left) */}
                <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E2285E" />
                  <stop offset="40%" stopColor="#D8285D" />
                  <stop offset="100%" stopColor="#B31744" />
                </linearGradient>

                {/* 2. Gold Gradient (Top-Right) */}
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5B92A" />
                  <stop offset="40%" stopColor="#E5A922" />
                  <stop offset="100%" stopColor="#C4840A" />
                </linearGradient>

                {/* 3. Navy Gradient (Bottom-Left) */}
                <linearGradient id="navyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#256296" />
                  <stop offset="40%" stopColor="#1E4E79" />
                  <stop offset="100%" stopColor="#103254" />
                </linearGradient>

                {/* 4. Green Gradient (Bottom-Right) */}
                <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#84C033" />
                  <stop offset="40%" stopColor="#70A328" />
                  <stop offset="100%" stopColor="#4E7C14" />
                </linearGradient>
              </defs>

              {/* ================= 4 THIN CONNECTOR LINES & BULLET DOTS ================= */}
              
              {/* Connector 1: Top-Left (Rose) - Terminates with dot in front of Client-Centric */}
              <g className={`transition-opacity duration-300 ${activeValue && activeValue !== 'client-centric' ? 'opacity-40' : 'opacity-100'}`}>
                <path 
                  d="M 104 235 H 78 Q 62 235 62 218 V 172 Q 62 155 78 155 H 350 Q 375 155 398 178 L 488 220" 
                  fill="none" 
                  stroke="#D8285D" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <circle cx="110" cy="235" r="5" fill="#D8285D" />
              </g>

              {/* Connector 2: Top-Right (Gold) - Terminates with dot at right end of the line */}
              <g className={`transition-opacity duration-300 ${activeValue && activeValue !== 'employee-focused' ? 'opacity-40' : 'opacity-100'}`}>
                <path 
                  d="M 685 260 V 195 Q 685 175 708 175 H 1125 Q 1145 175 1145 195 V 225" 
                  fill="none" 
                  stroke="#E5A922" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <circle cx="1145" cy="225" r="5" fill="#E5A922" />
              </g>

              {/* Connector 3: Bottom-Left (Navy) - Terminates with dot in front of Integrity */}
              <g className={`transition-opacity duration-300 ${activeValue && activeValue !== 'integrity' ? 'opacity-40' : 'opacity-100'}`}>
                <path 
                  d="M 104 588 H 78 Q 62 588 62 571 V 552 Q 62 535 78 535 H 290 Q 320 535 340 520 L 386 515" 
                  fill="none" 
                  stroke="#1E4E79" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <circle cx="110" cy="588" r="5" fill="#1E4E79" />
              </g>

              {/* Connector 4: Bottom-Right (Green) - Terminates with dot at right end of the line */}
              <g className={`transition-opacity duration-300 ${activeValue && activeValue !== 'continuous-improvement' ? 'opacity-40' : 'opacity-100'}`}>
                <path 
                  d="M 814 515 Q 845 515 870 545 L 895 575 Q 915 595 940 595 H 1125 Q 1145 595 1145 615 V 645" 
                  fill="none" 
                  stroke="#70A328" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <circle cx="1145" cy="645" r="5" fill="#70A328" />
              </g>

              {/* ================= 4 INTERLOCKING JIGSAW PUZZLE PIECES ================= */}

              {/* ----------------- PIECE 1: TOP-LEFT (Client-Centric / Rose) ----------------- */}
              <g 
                className="puzzle-interactive-piece"
                onMouseEnter={() => setActiveValue('client-centric')}
                onMouseLeave={() => setActiveValue(null)}
              >
                <path
                  d="
                    M 430 260
                    L 490 260 C 493 263, 495 252, 488 240 C 480 226, 498 216, 515 216 C 532 216, 550 226, 542 240 C 535 252, 537 263, 540 260 L 600 260
                    L 600 320 C 597 323, 608 325, 620 318 C 634 310, 644 328, 644 345 C 644 362, 634 380, 620 372 C 608 365, 597 367, 600 370 L 600 430
                    L 540 430 C 537 433, 535 422, 542 410 C 550 396, 532 386, 515 386 C 498 386, 480 396, 488 410 C 495 422, 493 433, 490 430 L 430 430
                    L 430 370 C 433 367, 422 365, 410 372 C 396 380, 386 362, 386 345 C 386 328, 396 310, 410 318 C 422 325, 433 323, 430 320 L 430 260
                    Z
                  "
                  fill="url(#roseGrad)"
                  stroke="rgba(255,255,255,0.42)"
                  strokeWidth="1.5"
                  filter="url(#puzzle3DShadow)"
                />
                
                {/* 3D Top Bevel Lighting Curve */}
                <path
                  d="M 430 260 L 490 260 C 493 263, 495 252, 488 240 C 480 226, 498 216, 515 216 C 532 216, 550 226, 542 240 C 535 252, 537 263, 540 260 L 600 260"
                  fill="none"
                  stroke="rgba(255,255,255,0.55)"
                  strokeWidth="2.2"
                />

                {/* Inner Icon Circle Badge */}
                <circle cx="515" cy="310" r="25" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.45)" strokeWidth="1.6" />
                
                {/* 3 People Icon */}
                <g transform="translate(502, 297) scale(1.08)" stroke="#ffffff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </g>

                {/* Title Text: Client-Centric */}
                <text 
                  x="515" 
                  y="360" 
                  textAnchor="middle" 
                  fill="#ffffff" 
                  fontFamily="'Playfair Display', Georgia, serif" 
                  fontWeight="bold" 
                  fontSize="14.5" 
                  letterSpacing="0.2"
                >
                  Client-Centric
                </text>
              </g>

              {/* ----------------- PIECE 2: TOP-RIGHT (Employee-Focused / Gold) ----------------- */}
              <g 
                className="puzzle-interactive-piece"
                onMouseEnter={() => setActiveValue('employee-focused')}
                onMouseLeave={() => setActiveValue(null)}
              >
                <path
                  d="
                    M 600 260
                    L 660 260 C 663 257, 665 268, 658 280 C 650 294, 668 304, 685 304 C 702 304, 720 294, 712 280 C 705 268, 707 257, 710 260 L 770 260
                    L 770 320 C 767 323, 778 325, 790 318 C 804 310, 814 328, 814 345 C 814 362, 804 380, 790 372 C 778 365, 767 367, 770 370 L 770 430
                    L 710 430 C 707 427, 705 438, 712 450 C 720 464, 702 474, 685 474 C 668 474, 650 464, 658 450 C 665 438, 663 427, 660 430 L 600 430
                    L 600 370 C 597 367, 608 365, 620 372 C 634 380, 644 362, 644 345 C 644 328, 634 310, 620 318 C 608 325, 597 323, 600 320 L 600 260
                    Z
                  "
                  fill="url(#goldGrad)"
                  stroke="rgba(255,255,255,0.42)"
                  strokeWidth="1.5"
                  filter="url(#puzzle3DShadow)"
                />
                
                {/* 3D Top Bevel Lighting Curve */}
                <path
                  d="M 600 260 L 660 260 C 663 257, 665 268, 658 280 C 650 294, 668 304, 685 304 C 702 304, 720 294, 712 280 C 705 268, 707 257, 710 260 L 770 260"
                  fill="none"
                  stroke="rgba(255,255,255,0.55)"
                  strokeWidth="2.2"
                />

                {/* Inner Icon Circle Badge */}
                <circle cx="685" cy="342" r="25" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.6" />
                
                {/* User with Gear Icon */}
                <g transform="translate(672, 329) scale(1.08)" stroke="#ffffff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <circle cx="19" cy="11" r="2" />
                  <path d="M19 8v1" /><path d="M19 13v1" /><path d="M16.5 9.5l.9.5" /><path d="M20.6 11.9l.9.5" />
                </g>

                {/* Title Text: Employee-Focused */}
                <text 
                  x="685" 
                  y="392" 
                  textAnchor="middle" 
                  fill="#ffffff" 
                  fontFamily="'Playfair Display', Georgia, serif" 
                  fontWeight="bold" 
                  fontSize="13.5" 
                  letterSpacing="0.2"
                >
                  Employee-Focused
                </text>
              </g>

              {/* ----------------- PIECE 3: BOTTOM-LEFT (Integrity / Navy) ----------------- */}
              <g 
                className="puzzle-interactive-piece"
                onMouseEnter={() => setActiveValue('integrity')}
                onMouseLeave={() => setActiveValue(null)}
              >
                <path
                  d="
                    M 430 430
                    L 490 430 C 493 433, 495 422, 488 410 C 480 396, 498 386, 515 386 C 532 386, 550 396, 542 410 C 535 422, 537 433, 540 430 L 600 430
                    L 600 490 C 597 493, 608 495, 620 488 C 634 480, 644 498, 644 515 C 644 532, 634 550, 620 542 C 608 535, 597 537, 600 540 L 600 600
                    L 540 600 C 537 603, 535 592, 542 580 C 550 566, 532 556, 515 556 C 498 556, 480 566, 488 580 C 495 592, 493 603, 490 600 L 430 600
                    L 430 540 C 433 537, 422 535, 410 542 C 396 550, 386 532, 386 515 C 386 498, 396 480, 410 488 C 422 495, 433 493, 430 490 L 430 430
                    Z
                  "
                  fill="url(#navyGrad)"
                  stroke="rgba(255,255,255,0.38)"
                  strokeWidth="1.5"
                  filter="url(#puzzle3DShadow)"
                />

                {/* Inner Icon Circle Badge */}
                <circle cx="515" cy="480" r="25" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.45)" strokeWidth="1.6" />
                
                {/* Shield Check Icon */}
                <g transform="translate(502, 467) scale(1.08)" stroke="#ffffff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </g>

                {/* Title Text: Integrity */}
                <text 
                  x="515" 
                  y="530" 
                  textAnchor="middle" 
                  fill="#ffffff" 
                  fontFamily="'Playfair Display', Georgia, serif" 
                  fontWeight="bold" 
                  fontSize="15" 
                  letterSpacing="0.2"
                >
                  Integrity
                </text>
              </g>

              {/* ----------------- PIECE 4: BOTTOM-RIGHT (Continuous Improvement / Green) ----------------- */}
              <g 
                className="puzzle-interactive-piece"
                onMouseEnter={() => setActiveValue('continuous-improvement')}
                onMouseLeave={() => setActiveValue(null)}
              >
                <path
                  d="
                    M 600 430
                    L 660 430 C 663 427, 665 438, 658 450 C 650 464, 668 474, 685 474 C 702 474, 720 464, 712 450 C 705 438, 707 427, 710 430 L 770 430
                    L 770 490 C 767 493, 778 495, 790 488 C 804 480, 814 498, 814 515 C 814 532, 804 550, 790 542 C 778 535, 767 537, 770 540 L 770 600
                    L 710 600 C 707 597, 705 608, 712 620 C 720 634, 702 644, 685 644 C 668 644, 650 634, 658 620 C 665 608, 663 597, 660 600 L 600 600
                    L 600 540 C 597 537, 608 535, 620 542 C 634 550, 644 532, 644 515 C 644 498, 634 480, 620 488 C 608 495, 597 493, 600 490 L 600 430
                    Z
                  "
                  fill="url(#greenGrad)"
                  stroke="rgba(255,255,255,0.38)"
                  strokeWidth="1.5"
                  filter="url(#puzzle3DShadow)"
                />

                {/* Inner Icon Circle Badge */}
                <circle cx="685" cy="512" r="25" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.48)" strokeWidth="1.6" />
                
                {/* Growth Chart Icon */}
                <g transform="translate(672, 499) scale(1.08)" stroke="#ffffff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 20V10" />
                  <path d="M12 20V4" />
                  <path d="M6 20V14" />
                  <path d="M3 20h18" />
                  <path d="M14 4l4-2 2 4" />
                </g>

                {/* Title Text: Continuous Improvement (2 lines) */}
                <text 
                  x="685" 
                  y="558" 
                  textAnchor="middle" 
                  fill="#ffffff" 
                  fontFamily="'Playfair Display', Georgia, serif" 
                  fontWeight="bold" 
                  fontSize="13.5" 
                  letterSpacing="0.2"
                >
                  Continuous
                </text>
                <text 
                  x="685" 
                  y="576" 
                  textAnchor="middle" 
                  fill="#ffffff" 
                  fontFamily="'Playfair Display', Georgia, serif" 
                  fontWeight="bold" 
                  fontSize="13.5" 
                  letterSpacing="0.2"
                >
                  Improvement
                </text>
              </g>

              {/* ================= 4 SVG-INTEGRATED DESCRIPTIONS ================= */}
              
              {/* 1. Top-Left: Client-Centric */}
              <foreignObject 
                x="115" 
                y="220" 
                width="260" 
                height="190" 
                className={`svg-desc-fo ${activeValue === 'client-centric' ? 'svg-desc-active' : ''}`}
                onMouseEnter={() => setActiveValue('client-centric')}
                onMouseLeave={() => setActiveValue(null)}
              >
                <div xmlns="http://www.w3.org/1999/xhtml" className="svg-desc-content">
                  <h3 className="svg-desc-title">Client-Centric</h3>
                  <div className="svg-desc-line bg-[#D8285D]" />
                  <p className="svg-desc-body">
                    We listen, understand and tailor our solutions to what our clients truly need—building relationships that last.
                  </p>
                </div>
              </foreignObject>

              {/* 2. Top-Right: Employee-Focused */}
              <foreignObject 
                x="855" 
                y="220" 
                width="285" 
                height="190" 
                className={`svg-desc-fo ${activeValue === 'employee-focused' ? 'svg-desc-active' : ''}`}
                onMouseEnter={() => setActiveValue('employee-focused')}
                onMouseLeave={() => setActiveValue(null)}
              >
                <div xmlns="http://www.w3.org/1999/xhtml" className="svg-desc-content">
                  <h3 className="svg-desc-title">Employee-Focused</h3>
                  <div className="svg-desc-line bg-[#E5A922]" />
                  <p className="svg-desc-body">
                    We invest in our people, foster their growth, recognise their contributions and create an environment where they can thrive.
                  </p>
                </div>
              </foreignObject>

              {/* 3. Bottom-Left: Integrity */}
              <foreignObject 
                x="115" 
                y="573" 
                width="260" 
                height="190" 
                className={`svg-desc-fo ${activeValue === 'integrity' ? 'svg-desc-active' : ''}`}
                onMouseEnter={() => setActiveValue('integrity')}
                onMouseLeave={() => setActiveValue(null)}
              >
                <div xmlns="http://www.w3.org/1999/xhtml" className="svg-desc-content">
                  <h3 className="svg-desc-title">Integrity</h3>
                  <div className="svg-desc-line bg-[#1E4E79]" />
                  <p className="svg-desc-body">
                    We do the right thing—always. We operate with honesty, transparency and accountability.
                  </p>
                </div>
              </foreignObject>

              {/* 4. Bottom-Right: Continuous Improvement */}
              <foreignObject 
                x="855" 
                y="613" 
                width="285" 
                height="190" 
                className={`svg-desc-fo ${activeValue === 'continuous-improvement' ? 'svg-desc-active' : ''}`}
                onMouseEnter={() => setActiveValue('continuous-improvement')}
                onMouseLeave={() => setActiveValue(null)}
              >
                <div xmlns="http://www.w3.org/1999/xhtml" className="svg-desc-content">
                  <h3 className="svg-desc-title">Continuous Improvement</h3>
                  <div className="svg-desc-line bg-[#70A328]" />
                  <p className="svg-desc-body">
                    We never settle. We learn, adapt and continuously improve how we work and the value we deliver.
                  </p>
                </div>
              </foreignObject>

            </svg>

          </div>
        </div>

        {/* ================= MOBILE / TABLET STACKED FALLBACK ================= */}
        <div className="block lg:hidden mobile-values-stack">
          
          {/* Scaled Center Puzzle */}
          <div className="mobile-puzzle-box">
            <svg 
              viewBox="380 210 440 440" 
              className="w-full h-auto overflow-visible select-none drop-shadow-xl"
            >
              <defs>
                <linearGradient id="mRoseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E2285E" />
                  <stop offset="100%" stopColor="#B31744" />
                </linearGradient>
                <linearGradient id="mGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5B92A" />
                  <stop offset="100%" stopColor="#C4840A" />
                </linearGradient>
                <linearGradient id="mNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#256296" />
                  <stop offset="100%" stopColor="#103254" />
                </linearGradient>
                <linearGradient id="mGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#84C033" />
                  <stop offset="100%" stopColor="#4E7C14" />
                </linearGradient>
              </defs>

              {/* Piece 1: Rose */}
              <path
                d="M 430 260 L 490 260 C 493 263, 495 252, 488 240 C 480 226, 498 216, 515 216 C 532 216, 550 226, 542 240 C 535 252, 537 263, 540 260 L 600 260 L 600 320 C 597 323, 608 325, 620 318 C 634 310, 644 328, 644 345 C 644 362, 634 380, 620 372 C 608 365, 597 367, 600 370 L 600 430 L 540 430 C 537 433, 535 422, 542 410 C 550 396, 532 386, 515 386 C 498 386, 480 396, 488 410 C 495 422, 493 433, 490 430 L 430 430 L 430 370 C 433 367, 422 365, 410 372 C 396 380, 386 362, 386 345 C 386 328, 396 310, 410 318 C 422 325, 433 323, 430 320 L 430 260 Z"
                fill="url(#mRoseGrad)"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1.2"
              />
              <circle cx="515" cy="310" r="22" fill="rgba(255,255,255,0.2)" />
              <text x="515" y="360" textAnchor="middle" fill="#ffffff" fontFamily="'Playfair Display', Georgia, serif" fontWeight="bold" fontSize="14">Client-Centric</text>

              {/* Piece 2: Gold */}
              <path
                d="M 600 260 L 660 260 C 663 257, 665 268, 658 280 C 650 294, 668 304, 685 304 C 702 304, 720 294, 712 280 C 705 268, 707 257, 710 260 L 770 260 L 770 320 C 767 323, 778 325, 790 318 C 804 310, 814 328, 814 345 C 814 362, 804 380, 790 372 C 778 365, 767 367, 770 370 L 770 430 L 710 430 C 707 427, 705 438, 712 450 C 720 464, 702 474, 685 474 C 668 474, 650 464, 658 450 C 665 438, 663 427, 660 430 L 600 430 L 600 370 C 597 367, 608 365, 620 372 C 634 380, 644 362, 644 345 C 644 328, 634 310, 620 318 C 608 325, 597 323, 600 320 L 600 260 Z"
                fill="url(#mGoldGrad)"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1.2"
              />
              <circle cx="685" cy="342" r="22" fill="rgba(255,255,255,0.2)" />
              <text x="685" y="392" textAnchor="middle" fill="#ffffff" fontFamily="'Playfair Display', Georgia, serif" fontWeight="bold" fontSize="13">Employee-Focused</text>

              {/* Piece 3: Navy */}
              <path
                d="M 430 430 L 490 430 C 493 433, 495 422, 488 410 C 480 396, 498 386, 515 386 C 532 386, 550 396, 542 410 C 535 422, 537 433, 540 430 L 600 430 L 600 490 C 597 493, 608 495, 620 488 C 634 480, 644 498, 644 515 C 644 532, 634 550, 620 542 C 608 535, 597 537, 600 540 L 600 600 L 540 600 C 537 603, 535 592, 542 580 C 550 566, 532 556, 515 556 C 498 556, 480 566, 488 580 C 495 592, 493 603, 490 600 L 430 600 L 430 540 C 433 537, 422 535, 410 542 C 396 550, 386 532, 386 515 C 386 498, 396 480, 410 488 C 422 495, 433 493, 430 490 L 430 430 Z"
                fill="url(#mNavyGrad)"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1.2"
              />
              <circle cx="515" cy="480" r="22" fill="rgba(255,255,255,0.2)" />
              <text x="515" y="530" textAnchor="middle" fill="#ffffff" fontFamily="'Playfair Display', Georgia, serif" fontWeight="bold" fontSize="14">Integrity</text>

              {/* Piece 4: Green */}
              <path
                d="M 600 430 L 660 430 C 663 427, 665 438, 658 450 C 650 464, 668 474, 685 474 C 702 474, 720 464, 712 450 C 705 438, 707 427, 710 430 L 770 430 L 770 490 C 767 493, 778 495, 790 488 C 804 480, 814 498, 814 515 C 814 532, 804 550, 790 542 C 778 535, 767 537, 770 540 L 770 600 L 710 600 C 707 597, 705 608, 712 620 C 720 634, 702 644, 685 644 C 668 644, 650 634, 658 620 C 665 608, 663 597, 660 600 L 600 600 L 600 540 C 597 537, 608 535, 620 542 C 634 550, 644 532, 644 515 C 644 498, 634 480, 620 488 C 608 495, 597 493, 600 490 L 600 430 Z"
                fill="url(#mGreenGrad)"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1.2"
              />
              <circle cx="685" cy="512" r="22" fill="rgba(255,255,255,0.2)" />
              <text x="685" y="558" textAnchor="middle" fill="#ffffff" fontFamily="'Playfair Display', Georgia, serif" fontWeight="bold" fontSize="13">Continuous</text>
              <text x="685" y="576" textAnchor="middle" fill="#ffffff" fontFamily="'Playfair Display', Georgia, serif" fontWeight="bold" fontSize="13">Improvement</text>
            </svg>
          </div>

          {/* Cards List */}
          <div className="mobile-cards-grid">
            {values.map((val) => (
              <div key={val.id} className="mobile-card-item">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: val.color }} />
                  <h3 className="font-serif font-black text-lg text-[#0B192C]">
                    {val.title}
                  </h3>
                </div>
                <div className="w-8 h-[2px] rounded-full mb-2.5" style={{ backgroundColor: val.color }} />
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
