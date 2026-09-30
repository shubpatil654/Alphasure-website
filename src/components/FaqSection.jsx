import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';

const GreenChatIcon = () => (
  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[#00C853] to-[#00E676] flex items-center justify-center text-white shrink-0 shadow-md">
    <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" />
    </svg>
  </div>
);

const faqList = [
  {
    id: 1,
    question: "1. How does Alphasure help small businesses?",
    answerParts: [
      { text: "Small businesses get access to the same professional expertise and technology used by larger businesses, with flexible plans designed to deliver accurate books and compliance " },
      { text: "at an affordable cost.", highlight: true }
    ],
    tiltClass: "sm:-rotate-1.5 sm:-translate-x-2",
    position: "left"
  },
  {
    id: 2,
    question: "2. Can Alphasure grow with my business?",
    answerParts: [
      { text: "Our services scale with your business—from " },
      { text: "Monthly Accounting to Real-Time Accounting, Controller Services, and more.", highlight: true }
    ],
    tiltClass: "sm:rotate-2 sm:translate-x-3",
    position: "right"
  },
  {
    id: 3,
    question: "3. Is my financial data secure?",
    answerParts: [
      { text: "We use a secure cloud environment with strict access controls and established information-security processes. " },
      { text: "Alphasure is ISO 27001 certified.", highlight: true }
    ],
    tiltClass: "sm:-rotate-2 sm:-translate-x-1",
    position: "left"
  },
  {
    id: 4,
    question: "4. Will I have a dedicated team?",
    answerParts: [
      { text: "Yes. You get a " },
      { text: "dedicated Alphasure team", highlight: true },
      { text: " that understands your business and works as an extension of your organisation." }
    ],
    tiltClass: "sm:rotate-1.5 sm:translate-x-4",
    position: "right"
  },
  {
    id: 5,
    question: "5. Why Alphasure instead of a local accountant?",
    answerParts: [
      { text: "You get more than an individual accountant—you get a " },
      { text: "team of accounting professionals, structured processes, technology, quality checks, continuity, and accountability.", highlight: true }
    ],
    tiltClass: "sm:-rotate-1 sm.translate-y-1",
    position: "center"
  }
];

export const pvtLtdFaqList = [
  {
    id: 1,
    question: "1. Where can I register my company?",
    answerParts: [
      { text: "You can register your company " },
      { text: "completely online with Alphasure", highlight: true },
      { text: "—from name approval to incorporation." }
    ],
    tiltClass: "sm:-rotate-1.5 sm:-translate-x-2"
  },
  {
    id: 2,
    question: "2. What if my preferred company name is unavailable?",
    answerParts: [
      { text: "If your chosen name is already taken or doesn't meet MCA guidelines, we'll help you " },
      { text: "select and apply for an alternative.", highlight: true }
    ],
    tiltClass: "sm:rotate-2 sm:translate-x-3"
  },
  {
    id: 3,
    question: "3. Can a foreigner be a director in an Indian company?",
    answerParts: [
      { text: "Yes. However, every Indian company must have " },
      { text: "at least one resident director", highlight: true },
      { text: " as required under the Companies Act." }
    ],
    tiltClass: "sm:-rotate-2 sm:-translate-x-1"
  },
  {
    id: 4,
    question: "4. How long does company registration take?",
    answerParts: [
      { text: "Typically, " },
      { text: "10–18 working days,", highlight: true },
      { text: " depending on document readiness." }
    ],
    tiltClass: "sm:rotate-1.5 sm:translate-x-4"
  },
  {
    id: 5,
    question: "5. Do I need a physical office to register a company?",
    answerParts: [
      { text: "Yes. A " },
      { text: "registered office address is mandatory,", highlight: true },
      { text: " but it can be your home or rented premises with valid address proof." }
    ],
    tiltClass: "sm:-rotate-1.5 sm:-translate-x-2"
  },
  {
    id: 6,
    question: "6. How do I obtain a Digital Signature Certificate (DSC)?",
    answerParts: [
      { text: "We handle the entire " },
      { text: "DSC application process,", highlight: true },
      { text: " making it quick and hassle-free." }
    ],
    tiltClass: "sm:rotate-2 sm:translate-x-3"
  },
  {
    id: 7,
    question: "7. What is included in post incorporation compliance?",
    answerParts: [
      { text: "Post-incorporation compliance includes " },
      { text: "intimation of registered address, commencement of business declaration and appointment of the first auditor.", highlight: true }
    ],
    tiltClass: "sm:-rotate-1 sm.translate-y-1"
  }
];

export const opcFaqList = [
  {
    id: 1,
    question: "1. Where can I register my company?",
    answerParts: [
      { text: "You can register your company " },
      { text: "completely online with Alphasure", highlight: true },
      { text: "—from name approval to incorporation." }
    ],
    tiltClass: "sm:-rotate-1.5 sm:-translate-x-2"
  },
  {
    id: 2,
    question: "2. What if my preferred company name is unavailable?",
    answerParts: [
      { text: "If your chosen name is already taken or doesn't meet MCA guidelines, we'll help you " },
      { text: "select and apply for an alternative.", highlight: true }
    ],
    tiltClass: "sm:rotate-2 sm:translate-x-3"
  },
  {
    id: 3,
    question: "3. Can a foreigner be a director in an Indian company?",
    answerParts: [
      { text: "Yes. However, every Indian company must have " },
      { text: "at least one resident director", highlight: true },
      { text: " as required under the Companies Act." }
    ],
    tiltClass: "sm:-rotate-2 sm:-translate-x-1"
  },
  {
    id: 4,
    question: "4. How long does company registration take?",
    answerParts: [
      { text: "Typically, " },
      { text: "10–18 working days,", highlight: true },
      { text: " depending on document readiness." }
    ],
    tiltClass: "sm:rotate-1.5 sm:translate-x-4"
  },
  {
    id: 5,
    question: "5. Do I need a physical office to register a company?",
    answerParts: [
      { text: "Yes. A " },
      { text: "registered office address is mandatory,", highlight: true },
      { text: " but it can be your home or rented premises with valid address proof." }
    ],
    tiltClass: "sm:-rotate-1.5 sm:-translate-x-2"
  },
  {
    id: 6,
    question: "6. How do I obtain a Digital Signature Certificate (DSC)?",
    answerParts: [
      { text: "We handle the entire " },
      { text: "DSC application process,", highlight: true },
      { text: " making it quick and hassle-free." }
    ],
    tiltClass: "sm:rotate-2 sm:translate-x-3"
  },
  {
    id: 7,
    question: "7. What is included in post incorporation compliance?",
    answerParts: [
      { text: "Post-incorporation compliance includes " },
      { text: "intimation of registered address, commencement of business declaration and appointment of the first auditor.", highlight: true }
    ],
    tiltClass: "sm:-rotate-1 sm.translate-y-1"
  }
];

export const llpFaqList = [
  {
    id: 1,
    question: "1. Where can I register my LLP?",
    answerParts: [
      { text: "You can register your LLP " },
      { text: "completely online with Alphasure", highlight: true },
      { text: "—from name approval to incorporation." }
    ],
    tiltClass: "sm:-rotate-1.5 sm:-translate-x-2"
  },
  {
    id: 2,
    question: "2. What if my preferred LLP name is unavailable?",
    answerParts: [
      { text: "If your chosen name is already taken or doesn't meet MCA guidelines, we'll help you " },
      { text: "select and apply for an alternative.", highlight: true }
    ],
    tiltClass: "sm:rotate-2 sm:translate-x-3"
  },
  {
    id: 3,
    question: "3. Can a foreigner be a director in an Indian LLP?",
    answerParts: [
      { text: "Yes. However, every Indian LLP must have " },
      { text: "at least one resident director", highlight: true },
      { text: " as required under the Companies Act." }
    ],
    tiltClass: "sm:-rotate-2 sm:-translate-x-1"
  },
  {
    id: 4,
    question: "4. How long does LLP registration take?",
    answerParts: [
      { text: "Typically, " },
      { text: "7–20 working days,", highlight: true },
      { text: " depending on document readiness." }
    ],
    tiltClass: "sm:rotate-1.5 sm:translate-x-4"
  },
  {
    id: 5,
    question: "5. Do I need a physical office to register an LLP?",
    answerParts: [
      { text: "Yes. A " },
      { text: "registered office address is mandatory,", highlight: true },
      { text: " but it can be your home or rented premises with valid address proof." }
    ],
    tiltClass: "sm:-rotate-1.5 sm:-translate-x-2"
  },
  {
    id: 6,
    question: "6. How do I obtain a Digital Signature Certificate (DSC)?",
    answerParts: [
      { text: "We handle the entire " },
      { text: "DSC application process,", highlight: true },
      { text: " making it quick and hassle-free." }
    ],
    tiltClass: "sm:rotate-2 sm:translate-x-3"
  },
  {
    id: 7,
    question: "7. What is included in post incorporation compliance?",
    answerParts: [
      { text: "Preparation and filing of " },
      { text: "LLP Deed", highlight: true }
    ],
    tiltClass: "sm:-rotate-1 sm.translate-y-1"
  }
];

export const periodicAccountingFaqList = [
  {
    id: 1,
    question: "1. My books are in a bad state. Can Alphasure still take over?",
    answerParts: [
      { text: "Absolutely. We'll " },
      { text: "review your existing books, identify gaps, and help rectify them", highlight: true },
      { text: " while taking over your accounting immediately, ensuring your records are accurate going forward." }
    ],
    tiltClass: "sm:-rotate-1.5 sm:-translate-x-2"
  },
  {
    id: 2,
    question: "2. How does Alphasure help small businesses?",
    answerParts: [
      { text: "Many small businesses rely on part-time accountants, leading to inconsistent quality and lack of continuity. Alphasure provides " },
      { text: "expert accounting, reliable support, and a dedicated team", highlight: true },
      { text: "—so you can focus on growing your business." }
    ],
    tiltClass: "sm:rotate-2 sm:translate-x-3"
  },
  {
    id: 3,
    question: "3. Is my data safe with Alphasure?",
    answerParts: [
      { text: "Yes. Your data is stored in a secure cloud environment with strict access controls. We are " },
      { text: "ISO 27001 certified,", highlight: true },
      { text: " ensuring the highest standards of information security." }
    ],
    tiltClass: "sm:-rotate-2 sm:-translate-x-1"
  },
  {
    id: 4,
    question: "4. Do I really need monthly accounting?",
    answerParts: [
      { text: "Yes. Monthly accounting keeps your business compliant and provides timely financial insights. " },
      { text: "Statutory filings like GST and TDS should be based on up-to-date books", highlight: true },
      { text: " and not the other way around." }
    ],
    tiltClass: "sm:rotate-1.5 sm:translate-x-4"
  },
  {
    id: 5,
    question: "5. How do I bill my customers?",
    answerParts: [
      { text: "You can continue using your existing billing software. We use the " },
      { text: "reports generated from your billing system", highlight: true },
      { text: " to accurately record revenue in your books each month." }
    ],
    tiltClass: "sm:-rotate-1.5 sm:-translate-x-2"
  },
  {
    id: 6,
    question: "6. Is inventory management included in the Monthly Accounting service?",
    answerParts: [
      { text: "No. Inventory management is not included in our Monthly Accounting service. If your business requires inventory accounting, we can recommend a more suitable solution, such as our " },
      { text: "Real-Time Accounting service.", highlight: true }
    ],
    tiltClass: "sm:rotate-2 sm:translate-x-3"
  },
  {
    id: 7,
    question: "7. How do I compute the number of transactions?",
    answerParts: [
      { text: "It is simply the sum of: " },
      { text: "Bank transactions + Supplier invoices + Customer invoices", highlight: true }
    ],
    tiltClass: "sm:-rotate-2 sm:-translate-x-1"
  },
  {
    id: 8,
    question: "8. If revenue is recorded in the books based on customer billing report, without recording individual customer invoices, how do I compute the number of transactions?",
    answerParts: [
      { text: "It is simply the sum of: " },
      { text: "Bank transactions + Supplier invoices", highlight: true }
    ],
    tiltClass: "sm:rotate-1.5 sm:translate-x-4"
  }
];

export const realTimeAccountingFaqList = [
  {
    id: 1,
    question: "1. Who is Real-Time Accounting best suited for?",
    answerParts: [
      { text: "It is ideal for " },
      { text: "businesses with high transaction volumes, multiple stakeholders, or those that require up-to-date financial information", highlight: true },
      { text: " for operational and strategic decision-making." }
    ],
    tiltClass: "sm:-rotate-1.5 sm:-translate-x-2"
  },
  {
    id: 2,
    question: "2. Can you work with our existing accounting software?",
    answerParts: [
      { text: "Yes. We work with a wide range of accounting platforms, including " },
      { text: "Tally, Zoho Books, QuickBooks Online, Xero, and custom-built accounting systems.", highlight: true },
      { text: " Our team adapts to your existing software and processes, ensuring a smooth transition and uninterrupted operations." }
    ],
    tiltClass: "sm:rotate-2 sm:translate-x-3"
  },
  {
    id: 3,
    question: "3. Will I receive financial reports?",
    answerParts: [
      { text: "Yes. You'll receive timely " },
      { text: "financial statements, MIS reports, reconciliations, and other management reports", highlight: true },
      { text: " tailored to your business needs." }
    ],
    tiltClass: "sm:-rotate-2 sm:-translate-x-1"
  },
  {
    id: 4,
    question: "4. Will I have a dedicated accountant?",
    answerParts: [
      { text: "Yes. You'll have a " },
      { text: "dedicated Alphasure accounting team", highlight: true },
      { text: " that works as an extension of your business." }
    ],
    tiltClass: "sm:rotate-1.5 sm:translate-x-4"
  }
];

export const controllerServicesFaqList = [
  {
    id: 1,
    question: "1. Who are Controller Services suitable for?",
    answerParts: [
      { text: "They are ideal for " },
      { text: "growing businesses that have an accounting team but need experienced financial oversight, stronger controls, and better management reporting.", highlight: true }
    ],
    tiltClass: "sm:-rotate-1.5 sm:-translate-x-2"
  },
  {
    id: 2,
    question: "2. Will you replace our accounting team?",
    answerParts: [
      { text: "No. We work " },
      { text: "alongside your existing team, providing supervision, guidance, and process improvements", highlight: true },
      { text: " to help them perform more effectively." }
    ],
    tiltClass: "sm:rotate-2 sm:translate-x-3"
  },
  {
    id: 3,
    question: "3. How are Controller Services different from CFO Services?",
    answerParts: [
      { text: "A Controller focuses on " },
      { text: "financial operations, reporting, compliance, and internal controls.", highlight: true },
      { text: " A CFO focuses on " },
      { text: "strategy, fundraising, business planning, and long-term financial direction.", highlight: true }
    ],
    tiltClass: "sm:-rotate-2 sm:-translate-x-1"
  },
  {
    id: 4,
    question: "4. Do we need a full-time Financial Controller?",
    answerParts: [
      { text: "Not necessarily. Our outsourced Controller Services provide the " },
      { text: "expertise of an experienced Financial Controller without the cost of a full-time hire.", highlight: true }
    ],
    tiltClass: "sm:rotate-1.5 sm:translate-x-4"
  }
];

export default function FaqSection({ 
  onOpenModal, 
  faqs = faqList, 
  subtitle = "Everything you need to know about partnering with Alphasure." 
}) {
  const [openItems, setOpenItems] = useState(() => faqs.map(item => item.id));

  const toggleFaq = (id) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const renderFaqCard = (item) => {
    const isOpen = openItems.includes(item.id);

    return (
      <div
        key={item.id}
        onClick={() => toggleFaq(item.id)}
        className={`group relative w-full bg-white/90 hover:bg-white backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-200/90 hover:border-[#FF1E43]/40 shadow-md hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out cursor-pointer transform-gpu ${item.tiltClass || ''} hover:rotate-0 hover:scale-[1.03] hover:-translate-y-1.5 hover:z-30`}
      >
        <div className="flex items-start gap-3 sm:gap-3.5">
          
          {/* Green Speech Bubble Badge */}
          <div className="transition-transform duration-300 group-hover:scale-110">
            <GreenChatIcon />
          </div>

          {/* Question Content */}
          <div className="flex-1 min-w-0 pt-0.5">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm sm:text-base font-bold text-[#1B2A4A] tracking-tight group-hover:text-[#FF1E43] transition-colors leading-snug">
                {item.question}
              </h3>

              {/* Plus / Minus Expand Circle Button */}
              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                isOpen ? 'bg-[#FF1E43] text-white shadow-md' : 'bg-slate-100 text-slate-600 group-hover:bg-[#FF1E43] group-hover:text-white border border-slate-200'
              }`}>
                {isOpen ? <Minus size={15} strokeWidth={2.5} /> : <Plus size={15} strokeWidth={2.5} />}
              </div>
            </div>

            {/* Expandable Answer Content */}
            {isOpen && (
              <p className="text-slate-600 font-medium text-xs sm:text-sm leading-relaxed mt-2.5 pt-2.5 border-t border-slate-200/80 animate-fadeIn">
                {item.answerParts ? (
                  item.answerParts.map((part, idx) => (
                    <span
                      key={idx}
                      className={part.highlight ? "text-[#FF1E43] font-extrabold" : ""}
                    >
                      {part.text}
                    </span>
                  ))
                ) : (
                  <span>{item.answer}</span>
                )}
              </p>
            )}
          </div>

        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full py-6 sm:py-8 md:py-9 overflow-hidden select-none">
      
      {/* Modern Corporate Office Background Photo Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/corporate-bg.jpg"
          alt="Modern Corporate Office Background"
          className="w-full h-full object-cover filter brightness-[1.02] opacity-75"
        />
        {/* Soft Light Overlay for Optimal Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/85"></div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-5 sm:mb-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#FF1E43] alpha-eyebrow mb-3 shadow-xs">
            <HelpCircle size={14} className="text-[#FF1E43]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="alpha-h2 font-bold text-[#1B2A4A] tracking-tight">
            Frequently{' '}
            <span className="whitespace-nowrap">
              <span className="text-[#1B2A4A]">Asked</span>{' '}
              <span className="relative inline-block text-[#FF1E43]">
                Questions
                <svg 
                  className="absolute left-0 -bottom-1.5 sm:-bottom-2.5 w-full h-3 sm:h-4 overflow-visible pointer-events-none" 
                  viewBox="0 0 200 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M 4 16 Q 100 3, 196 16" 
                    stroke="#FF1E43" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    className="animate-draw-curved-underline"
                  />
                </svg>
              </span>
            </span>
          </h2>
          <p className="alpha-body text-slate-600 font-normal mt-2 sm:mt-3">
            {subtitle}
          </p>
        </div>

        {/* Full-Width Staggered Alternating Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start w-full max-w-[1360px] mx-auto">
          {faqs.map((item, index) => {
            const isLastOdd = faqs.length % 2 !== 0 && index === faqs.length - 1;
            if (isLastOdd) {
              return (
                <div key={item.id} className="lg:col-span-8 lg:col-start-3 flex justify-center">
                  {renderFaqCard(item)}
                </div>
              );
            }
            const isLeft = index % 2 === 0;
            return (
              <div
                key={item.id}
                className={isLeft ? "lg:col-span-6 lg:col-start-1" : "lg:col-span-6 lg:col-start-7"}
              >
                {renderFaqCard(item)}
              </div>
            );
          })}
        </div>

        {/* Light Contact Action Banner Below */}
        <div className="mt-6 sm:mt-8 max-w-3xl mx-auto">
          <div className="w-full rounded-2xl p-4 sm:p-5 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg hover:shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300">
            <div className="flex items-center gap-3.5 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#FF1E43] shrink-0">
                <HelpCircle size={22} />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1B2A4A] leading-tight">Have any questions?</h4>
                <p className="text-slate-600 text-xs sm:text-sm mt-0.5 font-medium">Our dedicated team is ready to analyze your accounting needs.</p>
              </div>
            </div>
            <button
              onClick={onOpenModal}
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-[#FF1E43] hover:bg-[#E00028] text-white font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 shadow-md hover:shadow-lg transition-all transform hover:scale-105 shrink-0 cursor-pointer"
            >
              <span>TALK TO OUR EXPERTS</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
