import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const reviewsList = [
  {
    id: 1,
    name: "Vikram Malhotra",
    role: "Founder & Managing Director",
    company: "Apex Tech Solutions",
    location: "UAE",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    initials: "VM",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200/80",
    quote: "Switching our corporate accounting and multi-country tax compliance to Alphasure was the best operational decision we made. Their team delivers monthly financials with 100% accuracy and zero stress.",
    tag: "Multi-Country Accounting"
  },
  {
    id: 2,
    name: "Eleanor Vance",
    role: "Chief Financial Officer",
    company: "Vanguard Global Logistics",
    location: "United Kingdom",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    initials: "EV",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200/80",
    quote: "Alphasure feels like an internal executive team. They integrated seamlessly into our QuickBooks and NetSuite systems within days. Outstanding communication and proactive tax guidance!",
    tag: "ERP Integration & Tax"
  },
  {
    id: 3,
    name: "Rajesh Kulkarni",
    role: "CEO & Co-Founder",
    company: "Zenith Retail Group",
    location: "India",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    initials: "RK",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    quote: "Before Alphasure, accounting delays were bottlenecking our inventory expansion. Now, books are closed on day 2 of every month with complete audit-ready clarity. Highly recommended!",
    tag: "Month-End Bookkeeping"
  },
  {
    id: 4,
    name: "David Sterling",
    role: "VP of Finance",
    company: "CloudScale Systems",
    location: "USA",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    initials: "DS",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200/80",
    quote: "Exceptional service! Their dedicated senior CA advisory team saved us tens of thousands in international compliance overhead while maintaining flawless financial reporting.",
    tag: "Compliance Advisory"
  },
  {
    id: 5,
    name: "Sophia Al-Maktoum",
    role: "Operations Director",
    company: "Horizon Ventures",
    location: "Bahrain",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    initials: "SA",
    badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200/80",
    quote: "The combination of cutting-edge software integration and real human expertise is unbeatable. Alphasure has given our board complete financial confidence.",
    tag: "Strategic CFO Services"
  },
  {
    id: 6,
    name: "Marcus Thorne",
    role: "Managing Director",
    company: "Pacific Capital",
    location: "Australia",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    initials: "MT",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200/80",
    quote: "Fast, precise, and completely reliable. Their team handles all complex reconciliation and tax filing seamlessly across multiple currencies. Truly a 5-star partner!",
    tag: "Global Tax & Audit"
  }
];

export default function ReviewsSection() {
  // Duplicate list for infinite smooth marquee loop
  const marqueeItems = [...reviewsList, ...reviewsList];

  return (
    <section className="relative w-full py-6 sm:py-8 bg-[#FAF7F2] border-t border-b border-[#E8E2D5] overflow-hidden select-none">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1360px] mx-auto px-3 sm:px-5 lg:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-5 max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Google Review Badge Header */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0EBE1] border border-[#E3DCCF] text-amber-500 text-xs sm:text-sm font-bold shadow-xs mb-3 sm:mb-4">
            <div className="flex items-center text-amber-500 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#F59E0B" className="text-amber-500" />
              ))}
            </div>
            <span className="text-[#062C1E] font-extrabold ml-1">
              5.0 Rating
            </span>
            <span className="text-[#A39B8B]">•</span>
            <span className="text-[#3A4A40] font-medium">
              100+ Verified Client Reviews
            </span>
          </div>

          {/* Editorial Title matching reference image */}
          <h2 className="flex flex-col items-center text-center font-serif text-[#062C1E] alpha-h2 font-normal tracking-tight">
            <span>
              Don’t just take
            </span>
            <span className="mt-1 sm:mt-2">
              <span className="italic relative inline-block mr-2 font-serif">
                our
                {/* Yellow Curved Underline SVG */}
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 9 C30 3, 70 3, 98 8" stroke="#FFC000" strokeWidth="4.5" strokeLinecap="round" />
                </svg>
              </span>
              word for it...
            </span>
          </h2>

        </div>

      </div>

      {/* Full Width Marquee Slider Container (Sliding Right to Left) */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Edge Gradient Shadows for Fade Out */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent z-20 pointer-events-none"></div>

        {/* Marquee Track moving Right-to-Left */}
        <div className="animate-marquee-rtl flex items-center gap-6 sm:gap-8 px-4">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="group relative min-w-[320px] sm:min-w-[400px] max-w-[420px] bg-white border border-[#E8E2D5] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-[#062C1E]/40 hover:shadow-[0_20px_45px_rgba(6,44,30,0.1)] hover:-translate-y-2 cursor-pointer shrink-0"
            >
              {/* Quote Mark Watermark */}
              <Quote className="absolute top-6 right-6 text-slate-200 opacity-60 group-hover:text-emerald-800/20 transition-colors" size={48} />

              <div>
                {/* Top Badge Tag & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                    {item.tag}
                  </span>
                  
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#F59E0B" className="text-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium mb-6 relative z-10">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Profile Meta Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar Photo with Fallback Initials */}
                  <div className="relative">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-slate-200 group-hover:border-[#062C1E] transition-colors"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-11 h-11 rounded-full bg-gradient-to-tr from-[#062C1E] to-[#165B40] text-white font-extrabold text-sm items-center justify-center border-2 border-slate-200">
                      {item.initials}
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-extrabold text-[#062C1E] text-sm sm:text-base tracking-tight group-hover:text-emerald-700 transition-colors">
                        {item.name}
                      </h4>
                      <CheckCircle2 size={14} className="text-emerald-600" />
                    </div>
                    <span className="text-slate-500 text-xs font-semibold">
                      {item.role} • <span className="text-slate-800 font-bold">{item.company}</span>
                    </span>
                  </div>
                </div>

                {/* Country Tag */}
                <span className="text-[10px] font-extrabold text-[#062C1E] uppercase tracking-widest bg-[#F0EBE1] px-2.5 py-1 rounded-md border border-[#E3DCCF]">
                  {item.location}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

