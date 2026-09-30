import React, { useState, useRef } from 'react';
import { 
  Menu, X, PhoneCall, Building2, UserCheck, Users, ShieldCheck, 
  ArrowRight, Sparkles, CalendarClock, Activity, Sliders, FileSpreadsheet,
  Calculator, Briefcase
} from 'lucide-react';
import AlphasureLogo from './AlphasureLogo';

export default function Navbar({ onOpenModal, activePage = 'home', onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileRegisterOpen, setMobileRegisterOpen] = useState(false);
  const [mobileAccountingOpen, setMobileAccountingOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isAccountingOpen, setIsAccountingOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  
  const registerTimeoutRef = useRef(null);
  const accountingTimeoutRef = useRef(null);
  const aboutTimeoutRef = useRef(null);

  const handleRegisterEnter = () => {
    if (registerTimeoutRef.current) clearTimeout(registerTimeoutRef.current);
    if (accountingTimeoutRef.current) clearTimeout(accountingTimeoutRef.current);
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setIsAccountingOpen(false);
    setIsAboutOpen(false);
    setIsRegisterOpen(true);
  };

  const handleRegisterLeave = () => {
    registerTimeoutRef.current = setTimeout(() => {
      setIsRegisterOpen(false);
    }, 150);
  };

  const handleAccountingEnter = () => {
    if (accountingTimeoutRef.current) clearTimeout(accountingTimeoutRef.current);
    if (registerTimeoutRef.current) clearTimeout(registerTimeoutRef.current);
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setIsRegisterOpen(false);
    setIsAboutOpen(false);
    setIsAccountingOpen(true);
  };

  const handleAccountingLeave = () => {
    accountingTimeoutRef.current = setTimeout(() => {
      setIsAccountingOpen(false);
    }, 150);
  };

  const handleAboutEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    if (registerTimeoutRef.current) clearTimeout(registerTimeoutRef.current);
    if (accountingTimeoutRef.current) clearTimeout(accountingTimeoutRef.current);
    setIsRegisterOpen(false);
    setIsAccountingOpen(false);
    setIsAboutOpen(true);
  };

  const handleAboutLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setIsAboutOpen(false);
    }, 150);
  };

  // Register a Business Submenu
  const registerSubmenu = [
    { 
      name: 'Private Limited Company', 
      id: 'pvt-ltd',
      subheading: 'The gold standard',
      icon: Building2,
    },
    { 
      name: 'One Person Company', 
      id: 'opc',
      subheading: 'Single founder ownership',
      icon: UserCheck,
    },
    { 
      name: 'Limited Liability Partnership', 
      id: 'llp',
      subheading: 'Flexible partnership',
      icon: Users,
    },
    { 
      name: 'Secretarial Compliance', 
      id: 'secretarial',
      subheading: 'Annual ROC filings',
      icon: ShieldCheck,
    },
  ];

  // Accounting and Compliance Submenu
  const accountingSubmenu = [
    { 
      name: 'Periodic accounting', 
      id: 'periodic-accounting',
      subheading: 'Monthly & yearly balance',
      icon: CalendarClock,
    },
    { 
      name: 'Real time accounting', 
      id: 'real-time-accounting',
      subheading: 'Continuous financial tracking',
      icon: Activity,
    },
    { 
      name: 'Controller services', 
      id: 'controller-services',
      subheading: 'Strategic oversight & CFO',
      icon: Sliders,
    },
    { 
      name: 'TAX compliance', 
      id: 'gst-tds-compliance',
      subheading: 'Accurate tax return filings',
      icon: FileSpreadsheet,
    },
  ];

  // About Submenu
  const aboutSubmenu = [
    { 
      name: 'About us', 
      id: 'about',
      subheading: 'Our story, values & leadership',
      icon: Building2,
    },
    { 
      name: 'Careers', 
      id: 'careers',
      subheading: 'Join our growing team',
      icon: Briefcase,
    },
  ];

  const otherNavLinksBefore = [
    { name: 'EVERYTHING ELSE', page: 'everything-else', href: '#everything-else' },
    { name: 'PRICING', page: 'pricing', href: '#pricing' },
  ];

  const otherNavLinksAfter = [
    { name: 'RESOURCES', page: 'resources', href: '#resources' },
  ];

  const handleNavClick = (e, page) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <header className="relative z-50 w-full pt-4 sm:pt-6 md:pt-7 px-3 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-3">
        
        {/* Alphasure Brand Logo */}
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="transition-transform duration-200 hover:scale-105 flex-shrink-0 cursor-pointer"
        >
          <AlphasureLogo />
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-2.5 xl:gap-5 flex-wrap justify-center">
          
          {/* HOME */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, 'home')}
            className={`text-white text-[11px] xl:text-[12.5px] font-bold tracking-wider transition-all duration-150 py-1 whitespace-nowrap cursor-pointer ${
              activePage === 'home'
                ? 'border-b-2 border-white text-white'
                : 'text-white/90 hover:text-white hover:border-b-2 hover:border-white/60'
            }`}
          >
            HOME
          </a>

          {/* REGISTER A BUSINESS Dropdown */}
          <div 
            className="relative py-2"
            onMouseEnter={handleRegisterEnter}
            onMouseLeave={handleRegisterLeave}
          >
            <button
              onClick={() => {
                setIsAccountingOpen(false);
                setIsAboutOpen(false);
                setIsRegisterOpen(!isRegisterOpen);
              }}
              className={`text-[11px] xl:text-[12.5px] font-bold tracking-wider transition-all duration-150 py-1 whitespace-nowrap cursor-pointer ${
                isRegisterOpen || activePage === 'pvt-ltd' || activePage === 'opc' || activePage === 'llp' || activePage === 'secretarial'
                  ? 'text-white font-black border-b-2 border-white' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              REGISTER A BUSINESS
            </button>

            {/* Register a Business Menu Card */}
            <div 
              style={{
                width: '1240px',
                maxWidth: '95vw',
                left: '-260px',
              }}
              className={`absolute top-full pt-4 z-50 transition-all duration-200 ease-out ${
                isRegisterOpen 
                  ? 'opacity-100 translate-y-0 pointer-events-auto' 
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <div 
                style={{ height: '20px', top: '-20px', left: 0, right: 0 }}
                className="absolute" 
              />

              <div 
                style={{
                  borderRadius: '36px',
                  boxShadow: '0 40px 100px -15px rgba(15, 23, 42, 0.3), 0 0 0 1px rgba(226, 232, 240, 0.9), 0 20px 45px -5px rgba(0, 0, 0, 0.05)',
                  backgroundColor: '#ffffff',
                  padding: '44px 52px',
                }}
                className="select-none"
              >
                {/* Top Header Bar */}
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '24px',
                    marginBottom: '28px',
                    borderBottom: '1.5px solid #f1f5f9',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200/80 flex items-center justify-center shrink-0 shadow-xs">
                      <Sparkles className="w-7 h-7 text-[#FA5A16]" />
                    </div>
                    <div>
                      <span style={{ fontSize: '20px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#1E293B' }}>
                        Corporate Registration & Compliance
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-orange-50/90 border border-orange-200 text-[#EA580C] text-[16px] font-bold tracking-wide shadow-xs">
                    <span className="w-3 h-3 rounded-full bg-[#FA5A16] animate-pulse" />
                    Fast-Track MCA Filing
                  </span>
                </div>

                {/* 2-Column Grid */}
                <div 
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                    gap: '24px 44px',
                  }}
                >
                  {registerSubmenu.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setIsRegisterOpen(false);
                          if (onNavigate) onNavigate(item.id);
                        }}
                        className="group/item flex items-start gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-200 text-left cursor-pointer w-full"
                      >
                        <div className="mt-1 text-[#FA5A16] shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                          <IconComp className="w-10 h-10" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span 
                            style={{ fontSize: '25px', fontWeight: 800, color: '#0f172a', lineHeight: 1.25 }} 
                            className="group-hover/item:text-[#FA5A16] transition-colors"
                          >
                            {item.name}
                          </span>
                          <span 
                            style={{ fontSize: '18px', color: '#64748b', fontWeight: 600, marginTop: '6px' }}
                            className="inline-flex items-center gap-2.5 group-hover/item:text-slate-800 transition-colors"
                          >
                            <span>{item.subheading}</span>
                            <ArrowRight className="w-5 h-5 text-[#FA5A16] transform transition-transform duration-200 group-hover/item:translate-x-2" />
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Guidance Footer Strip */}
                <div 
                  style={{
                    marginTop: '28px',
                    paddingTop: '24px',
                    borderTop: '1.5px solid #f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: '18px', color: '#475569', fontWeight: 600 }}>
                    Not sure which business structure fits you best?
                  </span>
                  <button
                    onClick={() => {
                      setIsRegisterOpen(false);
                      if (onOpenModal) onOpenModal();
                    }}
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-orange-50 hover:bg-orange-100 border border-orange-200/80 text-[#FA5A16] font-extrabold text-[16px] transition-all hover:scale-105 active:scale-95 shadow-xs cursor-pointer"
                  >
                    <span>Talk to an Expert Advisor</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ACCOUNTING AND COMPLIANCE Dropdown */}
          <div 
            className="relative py-2"
            onMouseEnter={handleAccountingEnter}
            onMouseLeave={handleAccountingLeave}
          >
            <button
              onClick={() => {
                setIsRegisterOpen(false);
                setIsAboutOpen(false);
                setIsAccountingOpen(!isAccountingOpen);
              }}
              className={`text-[11px] xl:text-[12.5px] font-bold tracking-wider transition-all duration-150 py-1 whitespace-nowrap cursor-pointer ${
                isAccountingOpen || activePage === 'periodic-accounting' || activePage === 'real-time-accounting' || activePage === 'controller-services' || activePage === 'gst-tds-compliance'
                  ? 'text-white font-black border-b-2 border-white' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              ACCOUNTING AND COMPLIANCE
            </button>

            {/* Accounting and Compliance Menu Card */}
            <div 
              style={{
                width: '1240px',
                maxWidth: '95vw',
                left: '-460px',
              }}
              className={`absolute top-full pt-4 z-50 transition-all duration-200 ease-out ${
                isAccountingOpen 
                  ? 'opacity-100 translate-y-0 pointer-events-auto' 
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <div 
                style={{ height: '20px', top: '-20px', left: 0, right: 0 }}
                className="absolute" 
              />

              <div 
                style={{
                  borderRadius: '36px',
                  boxShadow: '0 40px 100px -15px rgba(15, 23, 42, 0.3), 0 0 0 1px rgba(226, 232, 240, 0.9), 0 20px 45px -5px rgba(0, 0, 0, 0.05)',
                  backgroundColor: '#ffffff',
                  padding: '44px 52px',
                }}
                className="select-none"
              >
                {/* Top Header Bar */}
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '24px',
                    marginBottom: '28px',
                    borderBottom: '1.5px solid #f1f5f9',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0 shadow-xs">
                      <Calculator className="w-7 h-7 text-[#2563EB]" />
                    </div>
                    <div>
                      <span style={{ fontSize: '20px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#1E293B' }}>
                        Accounting, Bookkeeping & Tax Compliance
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-blue-50/90 border border-blue-200 text-[#2563EB] text-[16px] font-bold tracking-wide shadow-xs">
                    <span className="w-3 h-3 rounded-full bg-[#2563EB] animate-pulse" />
                    Dedicated CA & CPA Advisory
                  </span>
                </div>

                {/* 2-Column Grid */}
                <div 
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                    gap: '24px 44px',
                  }}
                >
                  {accountingSubmenu.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setIsAccountingOpen(false);
                          if (onNavigate) onNavigate(item.id);
                        }}
                        className="group/item flex items-start gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-200 text-left cursor-pointer w-full"
                      >
                        <div className="mt-1 text-[#2563EB] shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                          <IconComp className="w-10 h-10" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span 
                            style={{ fontSize: '25px', fontWeight: 800, color: '#0f172a', lineHeight: 1.25 }} 
                            className="group-hover/item:text-[#2563EB] transition-colors"
                          >
                            {item.name}
                          </span>
                          <span 
                            style={{ fontSize: '18px', color: '#64748b', fontWeight: 600, marginTop: '6px' }}
                            className="inline-flex items-center gap-2.5 group-hover/item:text-slate-800 transition-colors"
                          >
                            <span>{item.subheading}</span>
                            <ArrowRight className="w-5 h-5 text-[#2563EB] transform transition-transform duration-200 group-hover/item:translate-x-2" />
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Guidance Footer Strip */}
                <div 
                  style={{
                    marginTop: '28px',
                    paddingTop: '24px',
                    borderTop: '1.5px solid #f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: '18px', color: '#475569', fontWeight: 600 }}>
                    Need a custom bookkeeping & accounting setup for your business?
                  </span>
                  <button
                    onClick={() => {
                      setIsAccountingOpen(false);
                      if (onOpenModal) onOpenModal();
                    }}
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-blue-50 hover:bg-blue-100 border border-blue-200/80 text-[#2563EB] font-extrabold text-[16px] transition-all hover:scale-105 active:scale-95 shadow-xs cursor-pointer"
                  >
                    <span>Schedule Free Accounting Consultation</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Links Before About */}
          {otherNavLinksBefore.map((link) => {
            const isActive = activePage === link.page;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.page)}
                className={`text-white text-[11px] xl:text-[12.5px] font-bold tracking-wider transition-all duration-150 py-1 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'border-b-2 border-white text-white'
                    : 'text-white/90 hover:text-white hover:border-b-2 hover:border-white/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}

          {/* ABOUT Dropdown */}
          <div 
            className="relative py-2"
            onMouseEnter={handleAboutEnter}
            onMouseLeave={handleAboutLeave}
          >
            <button
              onClick={() => {
                setIsRegisterOpen(false);
                setIsAccountingOpen(false);
                setIsAboutOpen(!isAboutOpen);
              }}
              className={`text-[11px] xl:text-[12.5px] font-bold tracking-wider transition-all duration-150 py-1 whitespace-nowrap cursor-pointer ${
                isAboutOpen || activePage === 'about' || activePage === 'careers'
                  ? 'text-white font-black border-b-2 border-white' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              ABOUT
            </button>

            {/* About Dropdown Menu Card */}
            <div 
              style={{
                width: '680px',
                maxWidth: '92vw',
                left: '-260px',
              }}
              className={`absolute top-full pt-4 z-50 transition-all duration-200 ease-out ${
                isAboutOpen 
                  ? 'opacity-100 translate-y-0 pointer-events-auto' 
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <div 
                style={{ height: '20px', top: '-20px', left: 0, right: 0 }}
                className="absolute" 
              />

              <div 
                style={{
                  borderRadius: '32px',
                  boxShadow: '0 40px 100px -15px rgba(15, 23, 42, 0.3), 0 0 0 1px rgba(226, 232, 240, 0.9), 0 20px 45px -5px rgba(0, 0, 0, 0.05)',
                  backgroundColor: '#ffffff',
                  padding: '30px 36px',
                }}
                className="select-none"
              >
                {/* 2 Items Grid */}
                <div 
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                    gap: '20px',
                  }}
                >
                  {aboutSubmenu.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setIsAboutOpen(false);
                          if (onNavigate) onNavigate(item.id);
                        }}
                        className="group/item flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-200 text-left cursor-pointer w-full border border-slate-100 hover:border-slate-200"
                      >
                        <div className="mt-1 text-[#D97706] shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                          <IconComp className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span 
                            style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', lineHeight: 1.25 }} 
                            className="group-hover/item:text-[#D97706] transition-colors"
                          >
                            {item.name}
                          </span>
                          <span 
                            style={{ fontSize: '15px', color: '#64748b', fontWeight: 600, marginTop: '6px' }}
                            className="inline-flex items-center gap-2 group-hover/item:text-slate-800 transition-colors"
                          >
                            <span>{item.subheading}</span>
                            <ArrowRight className="w-4 h-4 text-[#D97706] transform transition-transform duration-200 group-hover/item:translate-x-1.5" />
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Guidance Strip */}
                <div 
                  style={{
                    marginTop: '24px',
                    paddingTop: '20px',
                    borderTop: '1.5px solid #f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: '15px', color: '#475569', fontWeight: 600 }}>
                    Want to learn more about our journey & people?
                  </span>
                  <button
                    onClick={() => {
                      setIsAboutOpen(false);
                      if (onNavigate) onNavigate('about');
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200/80 text-[#D97706] font-extrabold text-[14px] transition-all hover:scale-105 active:scale-95 shadow-xs cursor-pointer"
                  >
                    <span>Explore Our Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Links After About */}
          {otherNavLinksAfter.map((link) => {
            const isActive = activePage === link.page;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.page)}
                className={`text-white text-[11px] xl:text-[12.5px] font-bold tracking-wider transition-all duration-150 py-1 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'border-b-2 border-white text-white'
                    : 'text-white/90 hover:text-white hover:border-b-2 hover:border-white/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button (Desktop) */}
        <div className="hidden lg:block flex-shrink-0">
          <button
            onClick={onOpenModal}
            className="bg-white text-[#2a2a2a] text-xs uppercase font-extrabold tracking-wider px-4 py-2.5 xl:px-6 xl:py-3 rounded-xl shadow-lg shadow-black/10 hover:bg-slate-50 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 whitespace-nowrap"
          >
            TALK TO OUR TEAM
          </button>
        </div>

        {/* Mobile & Tablet Actions */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenModal}
            className="bg-white text-[#2a2a2a] text-[10px] sm:text-xs uppercase font-extrabold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl shadow-md active:scale-95 transition-all"
          >
            TALK TO TEAM
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/15 backdrop-blur-md border border-white/20 hover:bg-white/25 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-4 sm:p-5 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-white/20 shadow-2xl transition-all animate-fadeIn">
          <nav className="flex flex-col gap-2.5">
            {/* HOME */}
            <a
              href="#"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavClick(e, 'home');
              }}
              className="text-xs sm:text-sm font-bold tracking-wider py-2 px-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
            >
              HOME
            </a>

            {/* REGISTER A BUSINESS Accordion in Mobile */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileRegisterOpen(!mobileRegisterOpen)}
                className="text-left text-xs sm:text-sm font-bold tracking-wider py-2.5 px-3 rounded-lg text-white/95 hover:text-white hover:bg-white/10 cursor-pointer flex items-center justify-between"
              >
                <span>REGISTER A BUSINESS</span>
                <span className="text-[10px] text-orange-400 bg-orange-500/20 px-2 py-0.5 rounded-full font-bold">
                  {mobileRegisterOpen ? 'Close' : 'View Options'}
                </span>
              </button>

              {mobileRegisterOpen && (
                <div className="pl-2 py-1.5 flex flex-col gap-1.5 bg-white/5 rounded-xl my-1 border border-white/10">
                  {registerSubmenu.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          if (onNavigate) onNavigate(item.id);
                        }}
                        className="text-left p-2.5 rounded-lg hover:bg-white/10 flex items-start gap-3 cursor-pointer group"
                      >
                        <div className="text-[#FA5A16] shrink-0 mt-0.5">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-[#FA5A16] transition-colors">{item.name}</div>
                          <div className="text-[11px] text-slate-300 flex items-center gap-1.5 mt-0.5">
                            <span>{item.subheading}</span>
                            <ArrowRight className="w-3 h-3 text-[#FA5A16]" />
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* ACCOUNTING AND COMPLIANCE Accordion in Mobile */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileAccountingOpen(!mobileAccountingOpen)}
                className="text-left text-xs sm:text-sm font-bold tracking-wider py-2.5 px-3 rounded-lg text-white/95 hover:text-white hover:bg-white/10 cursor-pointer flex items-center justify-between"
              >
                <span>ACCOUNTING AND COMPLIANCE</span>
                <span className="text-[10px] text-blue-400 bg-blue-500/20 px-2 py-0.5 rounded-full font-bold">
                  {mobileAccountingOpen ? 'Close' : 'View Options'}
                </span>
              </button>

              {mobileAccountingOpen && (
                <div className="pl-2 py-1.5 flex flex-col gap-1.5 bg-white/5 rounded-xl my-1 border border-white/10">
                  {accountingSubmenu.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          if (onNavigate) onNavigate(item.id);
                        }}
                        className="text-left p-2.5 rounded-lg hover:bg-white/10 flex items-start gap-3 cursor-pointer group"
                      >
                        <div className="text-[#2563EB] shrink-0 mt-0.5">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-[#2563EB] transition-colors">{item.name}</div>
                          <div className="text-[11px] text-slate-300 flex items-center gap-1.5 mt-0.5">
                            <span>{item.subheading}</span>
                            <ArrowRight className="w-3 h-3 text-[#2563EB]" />
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Links Before About */}
            {otherNavLinksBefore.map((link) => {
              const isActive = activePage === link.page;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleNavClick(e, link.page);
                  }}
                  className={`text-xs sm:text-sm font-bold tracking-wider py-2 px-3 rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'text-white bg-white/15'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            {/* ABOUT Accordion in Mobile */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="text-left text-xs sm:text-sm font-bold tracking-wider py-2.5 px-3 rounded-lg text-white/95 hover:text-white hover:bg-white/10 cursor-pointer flex items-center justify-between"
              >
                <span>ABOUT</span>
                <span className="text-[10px] text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded-full font-bold">
                  {mobileAboutOpen ? 'Close' : 'View Options'}
                </span>
              </button>

              {mobileAboutOpen && (
                <div className="pl-2 py-1.5 flex flex-col gap-1.5 bg-white/5 rounded-xl my-1 border border-white/10">
                  {aboutSubmenu.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          if (onNavigate) onNavigate(item.id);
                        }}
                        className="text-left p-2.5 rounded-lg hover:bg-white/10 flex items-start gap-3 cursor-pointer group"
                      >
                        <div className="text-[#D97706] shrink-0 mt-0.5">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-[#D97706] transition-colors">{item.name}</div>
                          <div className="text-[11px] text-slate-300 flex items-center gap-1.5 mt-0.5">
                            <span>{item.subheading}</span>
                            <ArrowRight className="w-3 h-3 text-[#D97706]" />
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Links After About */}
            {otherNavLinksAfter.map((link) => {
              const isActive = activePage === link.page;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleNavClick(e, link.page);
                  }}
                  className={`text-xs sm:text-sm font-bold tracking-wider py-2 px-3 rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'text-white bg-white/15'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="w-full bg-white text-[#22272e] text-xs uppercase font-bold tracking-wider py-3 rounded-xl shadow-md text-center flex items-center justify-center gap-2"
              >
                <PhoneCall size={14} />
                TALK TO OUR TEAM
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
