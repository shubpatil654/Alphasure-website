import React from 'react';

export default function GstTdsWhyChooseUsSection({ onOpenModal }) {
  const points = [
    {
      number: '01',
      title: 'Qualified accounting professionals',
      badgeColor: 'bg-[#A67C52]', // Golden brown / Ochre
    },
    {
      number: '02',
      title: 'Accurate and timely filings',
      badgeColor: 'bg-[#363C42]', // Dark charcoal
    },
    {
      number: '03',
      title: 'Dedicated compliance experts',
      badgeColor: 'bg-[#A67C52]',
    },
    {
      number: '04',
      title: 'Deadline reminders',
      badgeColor: 'bg-[#363C42]',
    },
    {
      number: '05',
      title: 'Transparent pricing',
      badgeColor: 'bg-[#A67C52]',
    },
    {
      number: '06',
      title: 'Secure document management',
      badgeColor: 'bg-[#363C42]',
    },
  ];

  return (
    <section 
      className="relative w-full bg-[#FAF7F2] py-10 sm:py-12 md:py-16 select-none overflow-hidden"
      id="gst-tds-why-choose-us"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* ================= LEFT COLUMN: Headline & Branding ================= */}
          <div className="lg:col-span-5 flex flex-col items-start justify-center space-y-6 lg:space-y-8">
            
            {/* Eyebrow: WHY CHOOSE US with horizontal accent line */}
            <div className="flex items-center gap-4">
              <span className="text-[#A67C52] font-bold text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase">
                WHY CHOOSE US
              </span>
              <div className="h-[1.5px] w-16 sm:w-20 bg-[#A67C52]/70" />
            </div>

            {/* Main Headline Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[62px] font-black text-[#111827] tracking-tight leading-[1.08]">
              Compliance <br />
              Made <span className="text-[#A67C52]">Simple.</span>
            </h2>

            {/* Subheading Paragraph */}
            <p className="text-[#555C66] font-semibold text-lg sm:text-xl md:text-[22px] leading-relaxed max-w-md">
              Accurate Books, Accurate filings, <br className="hidden sm:inline" />
              One Connected process
            </p>

          </div>

          {/* ================= RIGHT COLUMN: 6 Pill Cards (Single Line Text) ================= */}
          <div className="lg:col-span-7 flex flex-col space-y-3 sm:space-y-3.5 w-full max-w-xl lg:max-w-none mx-auto">
            {points.map((item) => (
              <div
                key={item.number}
                onClick={onOpenModal}
                className="group relative flex items-center bg-[#EFEAE1] hover:bg-[#E8E2D7] rounded-full p-2 sm:p-2.5 pr-6 sm:pr-8 transition-all duration-300 transform hover:scale-[1.015] hover:shadow-md cursor-pointer select-none"
              >
                {/* Round Number Badge */}
                <div
                  className={`w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full ${item.badgeColor} text-white font-extrabold text-base sm:text-lg md:text-xl flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105`}
                >
                  {item.number}
                </div>

                {/* Vertical Gold Divider Line */}
                <div className="h-6 sm:h-7 w-[1.5px] bg-[#A67C52]/70 mx-3.5 sm:mx-4.5 flex-shrink-0" />

                {/* Point Text - Single Line */}
                <span className="text-[#1A1F26] font-bold text-base sm:text-lg md:text-[18.5px] leading-none whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-[#A67C52] transition-colors duration-200">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
