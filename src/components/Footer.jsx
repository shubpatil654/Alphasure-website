import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import AlphasureLogo from './AlphasureLogo';

// Clean SVG Social Icons
const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default function Footer({ onOpenModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070D1B] text-slate-300 pt-16 pb-8 border-t border-slate-800/80 overflow-hidden select-none">
      {/* Background Subtle Radial Glow & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-blue-500/10 via-orange-500/5 to-transparent blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= Top CTA Callout Banner ================= */}
        <div className="mb-16 p-8 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-r from-[#111C35] via-[#1B2A4A] to-[#111C35] border border-slate-700/60 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#FA5A16]/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="text-center md:text-left z-10 max-w-2xl">
            <h3 className="alpha-h3 font-semibold text-white tracking-tight">
              Ready to elevate your financial operations?
            </h3>
            <p className="alpha-body text-slate-300 font-normal mt-2">
              Join hundreds of growing businesses backed by expert CA & CPA leadership across 8+ countries.
            </p>
          </div>

          <div className="z-10 flex-shrink-0">
            <button
              onClick={onOpenModal}
              className="alpha-btn inline-flex items-center justify-center min-h-[48px] px-7 py-3.5 sm:px-9 rounded-xl bg-gradient-to-r from-[#FA5A16] to-[#E04808] hover:from-[#E04808] hover:to-[#C83A00] text-white tracking-wider uppercase shadow-xl hover:shadow-[#FA5A16]/20 transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              Get Free Consultation
            </button>
          </div>
        </div>

        {/* ================= Main 4-Column Footer Content ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info & Bio (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="inline-block transition-transform hover:scale-105">
              <AlphasureLogo className="h-10 sm:h-12 w-auto" />
            </a>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal max-w-sm">
              Alphasure provides end-to-end accounting, compliance, tax advisory, and virtual CFO services for growing enterprises worldwide. Technology-driven with human expertise at heart.
            </p>

            <div className="space-y-3 pt-1 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail size={16} className="text-[#FA5A16] shrink-0" />
                <span>contact@alphasure.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone size={16} className="text-[#00C853] shrink-0" />
                <span>+1 (800) 555-ALPH</span>
              </div>
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin size={16} className="text-[#3B82F6] shrink-0 mt-0.5" />
                <span>Global Offices: US • UK • Canada • Australia • UAE • India</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#0A66C2] hover:border-transparent transition-all duration-200">
                <LinkedInIcon />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#1DA1F2] hover:border-transparent transition-all duration-200">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#1877F2] hover:border-transparent transition-all duration-200">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#E4405F] hover:border-transparent transition-all duration-200">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Our Services (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-extrabold text-sm sm:text-base tracking-wider uppercase border-l-2 border-[#FA5A16] pl-3">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors duration-150 flex items-center gap-1.5"><span className="text-slate-600">›</span> Business Registration</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-150 flex items-center gap-1.5"><span className="text-slate-600">›</span> Accounting & Financial Reporting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-150 flex items-center gap-1.5"><span className="text-slate-600">›</span> Statutory Compliance & Tax</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-150 flex items-center gap-1.5"><span className="text-slate-600">›</span> Payroll & HR Advisory</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-150 flex items-center gap-1.5"><span className="text-slate-600">›</span> Corporate Legal Solutions</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-150 flex items-center gap-1.5"><span className="text-slate-600">›</span> Virtual CFO & Advisory</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-extrabold text-sm sm:text-base tracking-wider uppercase border-l-2 border-[#3B82F6] pl-3">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors duration-150 flex items-center gap-1.5"><span className="text-slate-600">›</span> About Alphasure</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-150 flex items-center gap-1.5"><span className="text-slate-600">›</span> Our Leadership Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-150 flex items-center gap-1.5"><span className="text-slate-600">›</span> What Sets Us Apart</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-150 flex items-center gap-1.5"><span className="text-slate-600">›</span> Seamless Software Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-150 flex items-center gap-1.5"><span className="text-slate-600">›</span> Client Reviews & Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-150 flex items-center gap-1.5"><span className="text-slate-600">›</span> Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Column 4: Compliance & Global Presence (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-extrabold text-sm sm:text-base tracking-wider uppercase border-l-2 border-[#00C853] pl-3">
              Global Presence
            </h4>
            <div className="space-y-2 text-xs font-semibold text-slate-400">
              <div className="flex items-center gap-2 py-1 px-2.5 rounded-lg bg-slate-800/40 border border-slate-700/40">
                <span>🇺🇸 United States</span>
              </div>
              <div className="flex items-center gap-2 py-1 px-2.5 rounded-lg bg-slate-800/40 border border-slate-700/40">
                <span>🇬🇧 United Kingdom</span>
              </div>
              <div className="flex items-center gap-2 py-1 px-2.5 rounded-lg bg-slate-800/40 border border-slate-700/40">
                <span>🇨🇦 Canada</span>
              </div>
              <div className="flex items-center gap-2 py-1 px-2.5 rounded-lg bg-slate-800/40 border border-slate-700/40">
                <span>🇦🇺 Australia</span>
              </div>
              <div className="flex items-center gap-2 py-1 px-2.5 rounded-lg bg-slate-800/40 border border-slate-700/40">
                <span>🇦🇪 UAE & Gulf</span>
              </div>
              <div className="flex items-center gap-2 py-1 px-2.5 rounded-lg bg-slate-800/40 border border-slate-700/40">
                <span>🇮🇳 India</span>
              </div>
            </div>
          </div>

        </div>

        {/* ================= Bottom Bar: Copyright & Back to Top ================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#00C853]" />
            <span>© {new Date().getFullYear()} Alphasure Financial Advisory Services. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Security</a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-[#FA5A16] text-slate-300 hover:text-white border border-slate-700/60 transition-all duration-200 flex items-center justify-center cursor-pointer"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
