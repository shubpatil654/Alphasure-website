import React, { useState, useEffect, useRef } from 'react';

const leader1Data = {
  name: "Onkar Marathe",
  credentials: "CA, CPA (US)",
  role: "Founder",
  image: "/images/onkar-marathe-new.jpg",
  imagePosition: "left",
  paragraphs: [
    "More than a decade ago, Alphasure was founded with a simple goal—to help businesses succeed through reliable accounting and financial expertise.",
    "Today, we are proud to be trusted by hundreds of businesses, supported by a team of over 100 professionals, and serving clients across 8+ countries.",
    "As we enter our next phase of growth, our focus is clear. We aim to make high-quality accounting and compliance services accessible to thousands of small businesses at an affordable cost. At the same time, we are building a complete business ecosystem where growing companies can access every essential service under one roof, allowing them to focus on what matters most—building and scaling their business.",
    "Thank you for being a part of our journey. We look forward to growing with you."
  ]
};

const leader2Data = {
  name: "Abhijit Atre",
  credentials: "MBA",
  role: "CEO",
  image: "/images/abhijit-atre-new.png",
  imagePosition: "right",
  paragraphs: [
    "Our approach is simple. We don’t believe in merely selling software or providing a service. We believe in delivering a complete solution. As technology and AI continue to transform our industry, we see them as powerful tools to improve speed, accuracy and efficiency.",
    "Our commitment is to combine the best of both worlds—technology that makes accounting smarter and professionals who take responsibility for getting it right.",
    "Whether you are starting your entrepreneurial journey or managing a growing business, our goal is to be more than just your service provider. We want to be a trusted partner in your journey.",
    "Thank you for placing your trust in Alphasure. We look forward to growing with you."
  ]
};

// Sub-component for each Leader row with scroll-triggered photo & staggered sentence slide-in
function LeaderCard({ leader }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isLeftImage = leader.imagePosition === 'left';

  return (
    <div ref={cardRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
      
      {/* Photo Column - Slides from Left (for Leader 1) or Right (for Leader 2) */}
      <div
        className={`lg:col-span-4 flex justify-center ${
          isLeftImage ? 'lg:justify-start lg:order-1' : 'lg:justify-end lg:order-2'
        } transition-all duration-1000 ease-out transform ${
          isVisible
            ? 'translate-x-0 opacity-100'
            : isLeftImage
            ? '-translate-x-32 opacity-0'
            : 'translate-x-32 opacity-0'
        }`}
      >
        {/* Unskewed Original Photo Frame */}
        <div className="relative group w-full max-w-[290px] sm:max-w-[330px] aspect-[1/1.1] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 transition-transform duration-500 hover:scale-[1.02]">
          <img
            src={leader.image}
            alt={`${leader.name} - ${leader.role}`}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>
        </div>
      </div>

      {/* Content Column - Bio Header & Staggered Slide-In Sentences */}
      <div
        className={`lg:col-span-8 flex flex-col justify-center ${
          isLeftImage ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        {/* Bio Header */}
        <div 
          className={`mb-4 sm:mb-5 transition-all duration-700 ease-out transform ${
            isVisible 
              ? 'translate-x-0 opacity-100' 
              : isLeftImage
              ? 'translate-x-12 opacity-0'
              : '-translate-x-12 opacity-0'
          }`}
        >
          <h3 className="alpha-h3 font-semibold text-[#FA5A16] tracking-tight mb-1.5">
            {leader.name}
          </h3>
          <div className="text-slate-500 font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-0.5">
            {leader.credentials}
          </div>
          <div className="text-slate-400 font-semibold text-xs sm:text-sm">
            {leader.role}
          </div>
        </div>

        {/* Staggered Slower Slide-In Paragraph Sentences (From Left for Leader 2, From Right for Leader 1) */}
        <div className="space-y-3 sm:space-y-3.5 text-slate-700">
          {leader.paragraphs.map((para, idx) => (
            <p
              key={idx}
              style={{ transitionDelay: isVisible ? `${(idx + 1) * 350}ms` : '0ms' }}
              className={`text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed font-medium transition-all duration-[1200ms] ease-out transform ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : isLeftImage
                  ? 'translate-x-14 opacity-0'
                  : '-translate-x-14 opacity-0'
              }`}
            >
              {para}
            </p>
          ))}
        </div>
      </div>

    </div>
  );
}

export default function LeaderSection() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full py-10 sm:py-14 md:py-16 bg-white overflow-hidden select-none">
      
      {/* SVG Abstract Side Lines Continuation - Flows 100% seamlessly from PuzzleSection into LeaderSection and gently fades out */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        {/* Left Side Continuing Curved Lines Accent */}
        <svg className="absolute left-0 top-0 w-80 sm:w-96 h-3/4" viewBox="0 0 400 600" fill="none" preserveAspectRatio="none">
          <path d="M 240 0 C 260 200, 180 400, 80 600" stroke="#E2D8C8" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M 200 0 C 220 200, 150 400, 50 600" stroke="#ECE2D3" strokeWidth="1.5" />
          <circle cx="-20" cy="-100" r="280" stroke="#E2D8C8" strokeWidth="1.5" fill="none" />
          <circle cx="-20" cy="-100" r="200" stroke="#ECE2D3" strokeWidth="1.2" strokeDasharray="6 6" fill="none" />
        </svg>

        {/* Right Side Continuing Curved Lines Accent */}
        <svg className="absolute right-0 top-0 w-80 sm:w-96 h-3/4" viewBox="0 0 400 600" fill="none" preserveAspectRatio="none">
          <path d="M 160 0 C 140 200, 220 400, 320 600" stroke="#E2D8C8" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M 200 0 C 180 200, 250 400, 350 600" stroke="#ECE2D3" strokeWidth="1.5" />
          <circle cx="420" cy="-100" r="280" stroke="#E2D8C8" strokeWidth="1.5" fill="none" />
          <circle cx="420" cy="-100" r="200" stroke="#ECE2D3" strokeWidth="1.2" strokeDasharray="6 6" fill="none" />
        </svg>
        
        {/* Soft Fade-Out Gradient Overlay at the bottom of LeaderSection */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        
        {/* Section Main Title with Vertically Flipped Animated Curved Underline (2s Loop) */}
        <div ref={headerRef} className="text-center mb-8 sm:mb-12">
          <h2 className="alpha-h2 font-bold text-[#1B2A4A] tracking-tight">
            Hear from{' '}
            <span className="relative inline-block text-[#FA5A16]">
              Our Leaders
              <svg 
                className="absolute left-0 -bottom-2 sm:-bottom-3.5 w-full h-3.5 sm:h-5 overflow-visible pointer-events-none" 
                viewBox="0 0 200 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M 4 16 Q 100 3, 196 16" 
                  stroke="#FA5A16" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  className="animate-draw-curved-underline"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* Both Leaders Stacked vertically with alternating image positions */}
        <div className="space-y-16 sm:space-y-24 max-w-[1400px] w-full mx-auto">
          <LeaderCard leader={leader1Data} />
          <LeaderCard leader={leader2Data} />
        </div>

      </div>
    </section>
  );
}
