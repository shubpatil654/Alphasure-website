import React, { useState, useMemo } from 'react';
import { 
  BookOpen, Search, ArrowRight, ArrowLeft, Clock, Calendar, 
  Share2, CheckCircle2, Lightbulb, ShieldCheck, HelpCircle, 
  ChevronRight, Sparkles, User, Tag
} from 'lucide-react';
import { blogsData } from '../data/blogsData';

export default function BlogsPage({ onOpenModal, onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticleId, setActiveArticleId] = useState(null);

  // Categories list
  const categories = ['All', 'Accounting & Finance', 'Incorporation & Setup', 'Compliance & Secretarial', 'Financial Strategy', 'Real-Time Accounting', 'Accounting Strategy'];

  // Filtered blogs
  const filteredBlogs = useMemo(() => {
    return blogsData.filter((blog) => {
      const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
      const matchesSearch = 
        searchQuery === '' ||
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.contentLines.some(line => line.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Currently active article for full reader view
  const currentArticle = useMemo(() => {
    if (!activeArticleId) return null;
    return blogsData.find((b) => b.id === activeArticleId) || null;
  }, [activeArticleId]);

  // Open full article view and scroll top
  const handleOpenArticle = (id) => {
    setActiveArticleId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseArticle = () => {
    setActiveArticleId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper to get category badge color
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Accounting & Finance':
        return 'bg-blue-50 text-blue-700 border-blue-200/80';
      case 'Incorporation & Setup':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200/80';
      case 'Compliance & Secretarial':
        return 'bg-purple-50 text-purple-700 border-purple-200/80';
      case 'Financial Strategy':
        return 'bg-amber-50 text-amber-700 border-amber-200/80';
      case 'Real-Time Accounting':
        return 'bg-teal-50 text-teal-700 border-teal-200/80';
      case 'Accounting Strategy':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200/80';
      default:
        return 'bg-orange-50 text-[#FA5A16] border-orange-200/80';
    }
  };

  // Helper to render article body lines with semantic typography and styled callouts
  const renderArticleBody = (lines) => {
    const bodyLines = lines.slice(1); // skip title
    const renderedElements = [];
    let currentBulletList = [];

    const flushBulletList = (key) => {
      if (currentBulletList.length > 0) {
        renderedElements.push(
          <ul key={`ul-${key}`} className="my-4 space-y-2.5 pl-1 sm:pl-2">
            {currentBulletList.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-700 text-base sm:text-lg leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-[#FA5A16] shrink-0 mt-2.5" />
                <span>{item.replace(/^[•\-\*]\s*/, '')}</span>
              </li>
            ))}
          </ul>
        );
        currentBulletList = [];
      }
    };

    bodyLines.forEach((line, index) => {
      const trimmed = line.trim();
      if (!trimmed) return;

      // Check if it's a list item
      const isBullet = 
        trimmed.startsWith('•') || 
        trimmed.startsWith('- ') ||
        (index > 0 && bodyLines[index - 1].endsWith(':') && trimmed.length < 120 && !trimmed.includes('. '));

      if (isBullet) {
        currentBulletList.push(trimmed);
        return;
      }

      // Flush any accumulated bullet list before a regular block
      flushBulletList(index);

      // 1. Callout Boxes
      if (
        trimmed.toLowerCase().startsWith('best suited for:') ||
        trimmed.toLowerCase().startsWith('quick tip:') ||
        trimmed.toLowerCase().startsWith('business benefit:') ||
        trimmed.toLowerCase().startsWith('what to look for:')
      ) {
        renderedElements.push(
          <div 
            key={index} 
            className="my-5 p-4 sm:p-5 rounded-2xl bg-[#FFF8F4] border-l-4 border-[#FA5A16] shadow-xs flex items-start gap-3.5"
          >
            <div className="p-2 rounded-xl bg-orange-100 text-[#FA5A16] shrink-0 mt-0.5">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <p className="text-slate-800 font-semibold text-base sm:text-lg leading-relaxed">
                {trimmed}
              </p>
            </div>
          </div>
        );
      } 
      // 2. Conclusion Banner
      else if (trimmed === 'Conclusion' || trimmed.startsWith('Conclusion:')) {
        renderedElements.push(
          <div key={index} className="mt-8 mb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C] flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full bg-[#FA5A16]" />
              {trimmed}
            </h3>
          </div>
        );
      }
      // 3. Section Headings (Numbered or Questions or Leading Subtitles)
      else if (
        /^[0-9]+\.\s+[A-Z]/.test(trimmed) || 
        /^[A-Z]\.\s+[A-Z]/.test(trimmed) ||
        trimmed.endsWith('?') ||
        trimmed === 'Benefits:' ||
        trimmed === 'Choose an LLP if:' ||
        trimmed === 'Choose a Private Limited Company if:' ||
        trimmed === 'For Directors and Shareholders:' ||
        trimmed === 'For the Registered Office Address:' ||
        trimmed === 'Immediate Compliance After Incorporation' ||
        trimmed === 'Annual Secretarial Compliance' ||
        trimmed === 'Event-Based Compliance' ||
        trimmed === 'Which Accounting Solution Is Right for You?' ||
        trimmed === 'Why Can a Profitable Business Have Cash Flow Problems?'
      ) {
        renderedElements.push(
          <h3 
            key={index} 
            className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0B192C] mt-8 mb-3 pt-2 tracking-tight flex items-center gap-2.5"
          >
            <span className="w-2 h-2 rounded-full bg-[#FA5A16] shrink-0" />
            <span>{trimmed}</span>
          </h3>
        );
      } 
      // 4. Standard Paragraphs
      else {
        renderedElements.push(
          <p key={index} className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4">
            {trimmed}
          </p>
        );
      }
    });

    flushBulletList('final');
    return renderedElements;
  };

  return (
    <div className="w-full min-h-screen bg-[#FAF7F2] select-none text-[#0B192C]">
      
      {/* ================= FULL ARTICLE READER VIEW ================= */}
      {currentArticle ? (
        <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Navigation Bar */}
          <div className="mb-8 flex items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
            <button
              onClick={handleCloseArticle}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-[#FA5A16] transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              <span>Back to all articles</span>
            </button>

            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${getCategoryColor(currentArticle.category)}`}>
                {currentArticle.category}
              </span>
              <span className="text-xs font-medium text-slate-500 hidden sm:inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {currentArticle.readTime}
              </span>
            </div>
          </div>

          {/* Article Main Card Container */}
          <article className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-slate-100 relative">
            
            {/* Header Meta */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 mb-4">
              <span className="inline-flex items-center gap-1.5 font-semibold text-[#0B192C]">
                <User className="w-4 h-4 text-[#FA5A16]" />
                Alphasure Editorial Team
              </span>
              <span>•</span>
              <span>Senior CA & Business Advisory</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 text-slate-500">
                <Clock className="w-3.5 h-3.5" />
                {currentArticle.readTime}
              </span>
            </div>

            {/* Article Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] tracking-tight leading-tight mb-8">
              {currentArticle.title}
            </h1>

            {/* Article Body Content */}
            <div className="prose prose-slate max-w-none">
              {renderArticleBody(currentArticle.contentLines)}
            </div>

            {/* End-of-Article Advisory CTA Box */}
            <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0B192C] to-[#1B2A4A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Personalized Accounting Guidance</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold">
                  Need help applying this to your business?
                </h4>
                <p className="text-slate-300 text-sm max-w-md">
                  Speak directly with our senior chartered accountants for tailored structuring, compliance, or bookkeeping support.
                </p>
              </div>

              <button
                onClick={onOpenModal}
                className="shrink-0 bg-[#FA5A16] hover:bg-[#E04808] text-white text-xs sm:text-sm font-extrabold tracking-wider uppercase px-6 py-3.5 rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                Book a Free Consultation
              </button>
            </div>

            {/* Bottom Back Button */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
              <button
                onClick={handleCloseArticle}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#FA5A16] hover:underline cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to all articles</span>
              </button>
            </div>

          </article>

          {/* Related Articles Strip */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-[#0B192C] mb-6">
              More Recommended Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {blogsData
                .filter(b => b.id !== currentArticle.id)
                .slice(0, 2)
                .map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleOpenArticle(item.id)}
                    className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-[#FA5A16]/50 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                      <h4 className="text-base font-bold text-[#0B192C] group-hover:text-[#FA5A16] transition-colors mt-3 line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-2 leading-relaxed">
                        {item.excerpt}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600">
                      <span>{item.readTime}</span>
                      <span className="text-[#FA5A16] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read Now <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>

        </div>
      ) : (
        /* ================= BLOGS DIRECTORY VIEW ================= */
        <>
          {/* ================= HERO SECTION ================= */}
          <section className="relative w-full pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 bg-[#0e1726] text-white overflow-hidden select-none">
            {/* Ambient Radial Lighting Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#FA5A16]/15 via-blue-500/10 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
              
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-bold text-amber-400 mb-4 sm:mb-6">
                <BookOpen className="w-4 h-4 text-[#FA5A16]" />
                <span className="tracking-wider uppercase">ALPHASURE RESOURCES • BLOGS & GUIDES</span>
              </div>

              {/* Main Headline */}
              <h1 className="alpha-h1 font-bold text-white tracking-tight leading-tight max-w-4xl">
                Expert Financial & Corporate{' '}
                <span className="relative inline-block text-[#FA5A16]">
                  Insights
                  {/* Decorative Animated Curved Underline */}
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
              </h1>

              {/* Subtitle */}
              <p className="alpha-large-body text-slate-300 font-normal leading-relaxed max-w-2xl mt-4 sm:mt-6">
                Practical guides, regulatory updates, and strategic financial advice to help founders and finance leaders scale with complete clarity.
              </p>

              {/* Live Search Bar */}
              <div className="w-full max-w-xl mt-8 sm:mt-10 relative">
                <div className="relative flex items-center">
                  <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles, guides, compliance topics..."
                    className="w-full pl-12 pr-4 py-3.5 sm:py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#FA5A16] focus:border-transparent transition-all shadow-xl"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 text-xs font-bold text-slate-400 hover:text-white"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

            </div>
          </section>

          {/* ================= CATEGORY FILTER TABS ================= */}
          <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3 sm:py-4">
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                        isActive
                          ? 'bg-[#0B192C] text-white shadow-md'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                      }`}
                    >
                      {cat}
                      {cat === 'All' && ` (${blogsData.length})`}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ================= ARTICLES DIRECTORY GRID ================= */}
          <section className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Directory Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 sm:mb-10 pb-4 border-b border-slate-200">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0B192C]">
                    {selectedCategory === 'All' ? 'All Published Articles' : selectedCategory}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Showing {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'}
                  </p>
                </div>

                {searchQuery && (
                  <div className="text-xs sm:text-sm text-slate-500">
                    Search results for: <span className="font-bold text-[#0B192C]">"{searchQuery}"</span>
                  </div>
                )}
              </div>

              {/* Empty State */}
              {filteredBlogs.length === 0 ? (
                <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-200/80 max-w-lg mx-auto">
                  <div className="w-14 h-14 mx-auto rounded-full bg-orange-50 flex items-center justify-center text-[#FA5A16] mb-4">
                    <Search className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B192C]">No articles found</h3>
                  <p className="text-sm text-slate-500 mt-1 mb-6">
                    We couldn't find any articles matching your search query. Try searching for different keywords or clearing your filters.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-[#0B192C] text-white text-xs font-bold hover:bg-[#FA5A16] transition-colors cursor-pointer"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                /* 3-Column Responsive Grid of Blog Cards */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {filteredBlogs.map((blog) => (
                    <div
                      key={blog.id}
                      onClick={() => handleOpenArticle(blog.id)}
                      className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#FA5A16]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
                    >
                      {/* Top Category and Reading Time */}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${getCategoryColor(blog.category)}`}>
                            {blog.category}
                          </span>
                          <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {blog.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-bold text-[#0B192C] group-hover:text-[#FA5A16] transition-colors duration-200 leading-snug line-clamp-2">
                          {blog.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed line-clamp-3">
                          {blog.excerpt}
                        </p>
                      </div>

                      {/* Card Footer with Read Button */}
                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                        <span className="text-slate-400 font-medium">
                          Alphasure Advisory
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[#FA5A16] font-bold group-hover:translate-x-1 transition-transform duration-200">
                          <span>Read Article</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>

                    </div>
                  ))}
                </div>
              )}

            </div>
          </section>

          {/* ================= BOTTOM CTA BANNER ================= */}
          <section className="pb-16 sm:pb-24">
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-3xl bg-gradient-to-r from-[#0B192C] via-[#1B2A4A] to-[#0B192C] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
                <div className="space-y-2 text-center md:text-left z-10 max-w-2xl">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
                    Trusted Accounting & Corporate Advisory
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    Have questions regarding your business finances?
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Our team of experienced CAs, CPAs, and corporate secretarial specialists are ready to guide you.
                  </p>
                </div>

                <div className="z-10 shrink-0">
                  <button
                    onClick={onOpenModal}
                    className="alpha-btn inline-flex items-center justify-center min-h-[48px] px-8 py-3.5 rounded-xl bg-[#FA5A16] hover:bg-[#E04808] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-orange-500/25 transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
                  >
                    Schedule Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

    </div>
  );
}
