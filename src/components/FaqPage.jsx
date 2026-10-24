import React, { useState, useMemo } from 'react';
import { 
  Search, Plus, Minus, HelpCircle, ArrowRight, 
  Sparkles, ShieldCheck, CheckCircle2, ChevronDown, ChevronUp
} from 'lucide-react';
import { faqsData } from '../data/faqsData';

const GreenChatIcon = () => (
  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-[#00C853] to-[#00E676] flex items-center justify-center text-white shrink-0 shadow-md">
    <svg className="w-5 h-5 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" />
    </svg>
  </div>
);

export default function FaqPage({ onOpenModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState(['inc-1', 'acc-1']); // First item open for delightful initial state

  // Categories derived from data
  const categories = [
    'All',
    'Incorporation',
    'Accounting',
    'Controller & CFO',
    'Compliance & Tax',
    'General & Security'
  ];

  // Category counts
  const getCategoryCount = (cat) => {
    if (cat === 'All') return faqsData.length;
    return faqsData.filter((item) => item.category === cat).length;
  };

  // Category badge colors
  const getCategoryBadgeClass = (cat) => {
    switch (cat) {
      case 'Incorporation':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200/80';
      case 'Accounting':
        return 'bg-blue-50 text-blue-700 border-blue-200/80';
      case 'Controller & CFO':
        return 'bg-amber-50 text-amber-800 border-amber-200/80';
      case 'Compliance & Tax':
        return 'bg-purple-50 text-purple-700 border-purple-200/80';
      case 'General & Security':
        return 'bg-sky-50 text-sky-800 border-sky-200/80';
      default:
        return 'bg-orange-50 text-[#FA5A16] border-orange-200/80';
    }
  };

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    return faqsData.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        (item.sourcePage && item.sourcePage.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Accordion toggle
  const toggleFaq = (id) => {
    setOpenItems((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Expand / Collapse all
  const allFilteredOpen = filteredFaqs.length > 0 && filteredFaqs.every(item => openItems.includes(item.id));
  const toggleAll = () => {
    if (allFilteredOpen) {
      setOpenItems([]);
    } else {
      setOpenItems(filteredFaqs.map(item => item.id));
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FAF7F2] select-none text-[#0B192C]">
      
      {/* ================= COMPACT TOP BAR (SIMILAR TO BLOGS PAGE) ================= */}
      <header className="relative w-full bg-[#0e1726] pt-28 sm:pt-32 lg:pt-36 pb-6 sm:pb-8 border-b border-slate-800/80 select-none shadow-md">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Category Filter Pills with Item Count Badges */}
            <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar py-1">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                const count = getCategoryCount(cat);
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 shrink-0 ${
                      isActive
                        ? 'bg-[#FA5A16] text-white shadow-lg shadow-orange-500/25 scale-[1.02]'
                        : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/10'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                      isActive ? 'bg-black/25 text-white' : 'bg-white/10 text-slate-300'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Live Keyword Search Input */}
            <div className="relative w-full lg:w-80 shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions or keywords..."
                className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FA5A16] focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-white cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

          </div>

        </div>
      </header>

      {/* ================= FAQ DIRECTORY CONTENT ================= */}
      <main className="py-10 sm:py-14 lg:py-16">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Directory Status Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-slate-200/80">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-[#0B192C]">
                {selectedCategory === 'All' ? 'All Questions' : `${selectedCategory} Questions`}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Showing {filteredFaqs.length} {filteredFaqs.length === 1 ? 'question' : 'questions'} across our service guides
              </p>
            </div>

            <div className="flex items-center gap-3">
              {searchQuery && (
                <div className="text-xs sm:text-sm text-slate-500">
                  Results for: <span className="font-bold text-[#0B192C]">"{searchQuery}"</span>
                </div>
              )}

              {filteredFaqs.length > 0 && (
                <button
                  onClick={toggleAll}
                  className="text-xs font-bold text-[#FA5A16] hover:text-[#E04808] px-3 py-1.5 rounded-lg bg-orange-50 hover:bg-orange-100/80 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  {allFilteredOpen ? (
                    <>
                      <ChevronUp className="w-3.5 h-3.5" />
                      <span>Collapse All</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3.5 h-3.5" />
                      <span>Expand All</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Empty Search State */}
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-200/80 max-w-lg mx-auto shadow-sm">
              <div className="w-14 h-14 mx-auto rounded-full bg-orange-50 flex items-center justify-center text-[#FA5A16] mb-4">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#0B192C]">No questions found</h3>
              <p className="text-sm text-slate-500 mt-1 mb-6">
                We couldn't find any questions matching "{searchQuery}". Try searching with different terms or reset your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-5 py-2.5 rounded-xl bg-[#0B192C] text-white text-xs font-bold hover:bg-[#FA5A16] transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            /* 2-Column Responsive Staggered Grid of Accordion Cards */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">
              {filteredFaqs.map((item) => {
                const isOpen = openItems.includes(item.id);

                return (
                  <div
                    key={item.id}
                    onClick={() => toggleFaq(item.id)}
                    className={`group relative w-full bg-white/95 hover:bg-white rounded-2xl p-4 sm:p-5 border transition-all duration-300 ease-out cursor-pointer ${
                      isOpen
                        ? 'border-[#FA5A16]/50 shadow-[0_12px_32px_rgba(250,90,22,0.10)] bg-white'
                        : 'border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-3.5">
                      
                      {/* Brand Signature Green Chat Icon */}
                      <div className="transition-transform duration-300 group-hover:scale-105 shrink-0 mt-0.5">
                        <GreenChatIcon />
                      </div>

                      {/* Question, Meta & Expandable Answer */}
                      <div className="flex-1 min-w-0">
                        
                        {/* Category & Source Badges */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${getCategoryBadgeClass(item.category)}`}>
                            {item.category}
                          </span>
                          {item.sourcePage && (
                            <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 truncate">
                              • {item.sourcePage}
                            </span>
                          )}
                        </div>

                        {/* Question Title & Expand Icon */}
                        <div className="flex items-start justify-between gap-3">
                          <h3 className={`text-sm sm:text-base font-bold tracking-tight transition-colors leading-snug ${
                            isOpen ? 'text-[#FA5A16]' : 'text-[#1B2A4A] group-hover:text-[#FA5A16]'
                          }`}>
                            {item.question}
                          </h3>

                          {/* Plus / Minus Expand Circle Button */}
                          <div 
                            aria-label={isOpen ? "Collapse answer" : "Expand answer"}
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                              isOpen 
                                ? 'bg-[#FA5A16] text-white shadow-md rotate-180' 
                                : 'bg-slate-100 text-slate-600 group-hover:bg-[#FA5A16] group-hover:text-white border border-slate-200 rotate-0'
                            }`}
                          >
                            {isOpen ? <Minus size={15} strokeWidth={2.5} /> : <Plus size={15} strokeWidth={2.5} />}
                          </div>
                        </div>

                        {/* Expandable Answer Content with Smooth Grid Height Transition */}
                        <div 
                          className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                            isOpen ? 'grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-slate-100' : 'grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0'
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="text-slate-600 font-medium text-xs sm:text-sm leading-relaxed">
                              {item.answerParts ? (
                                item.answerParts.map((part, idx) => (
                                  <span
                                    key={idx}
                                    className={part.highlight ? "text-[#FA5A16] font-extrabold" : ""}
                                  >
                                    {part.text}
                                  </span>
                                ))
                              ) : (
                                <span>{item.answer}</span>
                              )}
                            </p>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </main>

      {/* ================= BOTTOM CTA BANNER ================= */}
      <section className="pb-16 sm:pb-24 bg-[#FAF7F2]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#0B192C] via-[#1B2A4A] to-[#0B192C] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="space-y-2 text-center md:text-left z-10 max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
                Have a Specific Query?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Can't find the answer you're looking for?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Our support and CA advisory team is available to answer any questions about your unique business scenario.
              </p>
            </div>

            <div className="z-10 shrink-0">
              <button
                onClick={onOpenModal}
                className="alpha-btn inline-flex items-center justify-center min-h-[48px] px-8 py-3.5 rounded-xl bg-[#FA5A16] hover:bg-[#E04808] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-orange-500/25 transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                Ask an Expert
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
