import React from 'react';
import { Sparkles, HeartHandshake, Compass, Award, Users, ArrowRight } from 'lucide-react';

export default function CareersCultureSection() {
  const pillars = [
    {
      icon: <Award className="w-6 h-6 text-[#FA5A16]" />,
      title: "Continuous Learning & Growth",
      description: "We encourage continuous learning, recognise contributions, celebrate achievements and believe in giving our people opportunities to take on new challenges."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-emerald-600" />,
      title: "Balanced & Fulfilling Life",
      description: "We believe that a successful career should go hand in hand with a healthy and fulfilling life outside work."
    },
    {
      icon: <Compass className="w-6 h-6 text-blue-600" />,
      title: "Ownership & Meaningful Impact",
      description: "Join a team where your ideas matter, your growth is valued, and the work you do makes a difference."
    }
  ];

  return (
    <section id="culture" className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] select-none text-[#0B192C]">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FA5A16] alpha-eyebrow mb-3 sm:mb-4 shadow-xs">
            <Users size={14} className="text-[#FA5A16]" />
            <span className="tracking-wider uppercase font-extrabold text-xs">Our People & Culture</span>
          </div>

          <h2 className="alpha-h2 font-bold text-[#1B2A4A] tracking-tight">
            Great Businesses Are Built by{' '}
            <span className="relative inline-block text-[#FA5A16]">
              Great People
              <svg 
                className="absolute left-0 -bottom-1.5 sm:-bottom-2.5 w-full h-2.5 sm:h-3.5 overflow-visible pointer-events-none" 
                viewBox="0 0 200 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M 4 16 Q 100 3, 196 16" 
                  stroke="#FA5A16" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  className="animate-draw-curved-underline" 
                />
              </svg>
            </span>
          </h2>

          <p className="alpha-large-body text-slate-600 font-normal leading-relaxed mt-4 max-w-2xl mx-auto">
            We invest in our team by creating an environment where people can learn, grow, take ownership and do their best work.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Inspiring Anchor Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0B192C] via-[#152338] to-[#0B192C] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FA5A16]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-4 h-4 text-[#FA5A16]" />
                <span>The Alphasure Commitment</span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-bold leading-snug text-white">
                "At Alphasure, we believe great businesses are built by great people."
              </blockquote>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We invest in our team by creating an environment where people can learn, grow, take ownership and do their best work.
              </p>

              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
                <p className="text-amber-300 font-bold text-sm sm:text-base leading-snug">
                  "As we grow, we want our people to grow with us."
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 relative z-10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">
                Alphasure Leadership & People Team
              </span>
              <a
                href="#job-openings"
                className="text-xs font-bold text-[#FA5A16] hover:text-white inline-flex items-center gap-1 transition-colors"
              >
                <span>Join our team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Structured Cultural Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#FA5A16]/40 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 sm:gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  {pillar.icon}
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-[#0B192C]">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Bottom Join Us Callout */}
            <div className="p-5 sm:p-6 rounded-2xl bg-orange-50/70 border border-orange-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-[#0B192C]">
                  Ready to make an impact with us?
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Explore current job openings across audit, accounting, and compliance.
                </p>
              </div>

              <a
                href="#job-openings"
                className="px-5 py-2.5 rounded-xl bg-[#FA5A16] hover:bg-[#E04808] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-orange-500/25 transition-all whitespace-nowrap text-center"
              >
                View Open Positions
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
