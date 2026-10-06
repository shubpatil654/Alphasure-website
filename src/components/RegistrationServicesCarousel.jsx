import React from 'react';

export default function RegistrationServicesCarousel({ onOpenModal }) {
  const quadrants = [
    {
      id: 'incorporate-remotely',
      title: 'Incorporate Remotely',
      description: 'Complete the entire process online',
      image: '/images/service-incorporate-remotely-faded.png',
      alt: 'Remote digital entrepreneur workspace with laptop and coffee',
    },
    {
      id: 'beyond-incorporation',
      title: 'Beyond Incorporation',
      description: 'We guide you through all post incorporation filing',
      image: '/images/service-beyond-incorporation-faded.png',
      alt: 'Founders and team discussing startup strategy and documents',
    },
    {
      id: 'stay-compliant',
      title: 'Stay Compliant',
      description: 'Annual ROC compliances managed for you',
      image: '/images/service-stay-compliant-faded.png',
      alt: 'Corporate compliance documents and official records on executive desk',
    },
    {
      id: 'business-changes',
      title: 'Business Changes',
      description: 'Support for director changes, capital changes and other event-based filing.',
      image: '/images/service-business-changes-faded.png',
      alt: 'Executives shaking hands on corporate changes and agreements',
    },
  ];

  return (
    <section 
      className="relative w-full overflow-hidden select-none bg-white py-16 sm:py-20 lg:py-24"
      id="services-quadrants"
    >
      {/* SVG Abstract Running Lines Background - Flows seamlessly into surrounding sections */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        {/* Left Side Running Lines Accent */}
        <svg className="absolute left-0 top-0 w-80 sm:w-[480px] md:w-[560px] h-full" viewBox="0 0 400 800" fill="none" preserveAspectRatio="none">
          <path d="M -40 60 C 140 200, 220 480, 200 800" stroke="#E2D8C8" strokeWidth="1.8" strokeDasharray="6 6" />
          <path d="M -40 140 C 100 280, 180 540, 160 800" stroke="#ECE2D3" strokeWidth="1.2" />
          <circle cx="-30" cy="450" r="260" stroke="#E2D8C8" strokeWidth="1.2" fill="none" />
          <circle cx="-30" cy="450" r="190" stroke="#ECE2D3" strokeWidth="1" strokeDasharray="6 6" fill="none" />
        </svg>

        {/* Right Side Running Lines Accent */}
        <svg className="absolute right-0 top-0 w-80 sm:w-[480px] md:w-[560px] h-full" viewBox="0 0 400 800" fill="none" preserveAspectRatio="none">
          <path d="M 440 60 C 260 200, 180 480, 200 800" stroke="#E2D8C8" strokeWidth="1.8" strokeDasharray="6 6" />
          <path d="M 440 140 C 300 280, 220 540, 240 800" stroke="#ECE2D3" strokeWidth="1.2" />
          <circle cx="430" cy="450" r="260" stroke="#E2D8C8" strokeWidth="1.2" fill="none" />
          <circle cx="430" cy="450" r="190" stroke="#ECE2D3" strokeWidth="1" strokeDasharray="6 6" fill="none" />
        </svg>
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center">
        
        {/* Section Heading Area */}
        <div className="text-center max-w-5xl mx-auto mb-6 sm:mb-8 px-2">
          <h2 className="alpha-h2 font-bold text-slate-900 tracking-tight mb-3">
            Everything you need{' '}
            <span className="whitespace-nowrap">
              <span className="text-slate-900">for your</span>{' '}
              <span className="relative inline-block text-[#FA5A16]">
                business
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
            </span>
          </h2>
          <p className="alpha-large-body text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed">
            From initial registration to seamless compliance and post-incorporation filings, we have you covered at every milestone.
          </p>
        </div>

        {/* ================= 4-Quadrant Container with Faded Background Images & Faded-End Crosshairs ================= */}
        <div className="relative w-full max-w-[1180px] mx-auto min-h-[340px] sm:min-h-[400px] md:min-h-[460px] flex items-center justify-center px-2 sm:px-6">
          
          {/* Central Crosshair Lines with Faded Ends */}
          {/* Horizontal Line: Fading out to transparent on left and right */}
          <div 
            className="absolute left-0 sm:left-4 md:left-8 right-0 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 h-[1px] sm:h-[1.5px] pointer-events-none z-20"
            style={{
              background: 'linear-gradient(90deg, rgba(30,41,59,0) 0%, rgba(30,41,59,0.06) 6%, rgba(30,41,59,0.85) 24%, rgba(30,41,59,0.85) 76%, rgba(30,41,59,0.06) 94%, rgba(30,41,59,0) 100%)',
            }}
          />

          {/* Vertical Line: Fading out to transparent on top and bottom */}
          <div 
            className="absolute top-0 sm:top-2 md:top-4 bottom-0 sm:bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 w-[1px] sm:w-[1.5px] pointer-events-none z-20"
            style={{
              background: 'linear-gradient(180deg, rgba(30,41,59,0) 0%, rgba(30,41,59,0.06) 6%, rgba(30,41,59,0.85) 24%, rgba(30,41,59,0.85) 76%, rgba(30,41,59,0.06) 94%, rgba(30,41,59,0) 100%)',
            }}
          />

          {/* 4 Quadrants Grid */}
          <div className="grid grid-cols-2 w-full h-full relative z-10">
            {quadrants.map((item, idx) => (
              <div
                key={item.id}
                onClick={onOpenModal}
                className={`
                  relative flex flex-col items-center justify-center text-center 
                  px-4 sm:px-8 md:px-12 py-8 sm:py-10 md:py-14
                  cursor-pointer group select-none transition-all duration-300
                  overflow-hidden
                  ${idx === 0 ? 'pb-8 sm:pb-12 md:pb-14 pr-4 sm:pr-8 md:pr-10' : ''}
                  ${idx === 1 ? 'pb-8 sm:pb-12 md:pb-14 pl-4 sm:pl-8 md:pl-10' : ''}
                  ${idx === 2 ? 'pt-8 sm:pt-12 md:pt-14 pr-4 sm:pr-8 md:pr-10' : ''}
                  ${idx === 3 ? 'pt-8 sm:pt-12 md:pt-14 pl-4 sm:pl-8 md:pl-10' : ''}
                `}
              >
                {/* Background Contextual Image Faded Out Through Its Edges */}
                <div 
                  className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
                  style={{
                    maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 82%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 82%)',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center opacity-25 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700 ease-out filter contrast-[1.05]"
                    loading="lazy"
                  />
                </div>

                {/* Content Container (Layered above background image) */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  {/* Quadrant Title */}
                  <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[36px] font-bold text-black tracking-tight leading-tight mb-2.5 sm:mb-4 group-hover:text-[#FA5A16] group-hover:scale-[1.015] transition-all duration-200 drop-shadow-sm">
                    {item.title}
                  </h3>

                  {/* Quadrant Description */}
                  <p className="text-xs sm:text-base md:text-lg lg:text-[19px] text-[#1E293B] font-medium leading-relaxed max-w-[260px] sm:max-w-[360px] md:max-w-[420px] group-hover:text-black transition-colors duration-200 drop-shadow-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
