import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Mail, User, Building, ArrowRight } from 'lucide-react';

export default function RequestCallModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Accounting & Compliance',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // keep message for 2 seconds then close
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-slate-900/95 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-white/60 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-8 flex flex-col items-center text-center">
            <CheckCircle2 size={56} className="text-emerald-400 mb-3 animate-bounce" />
            <h3 className="text-2xl font-bold">Request Received!</h3>
            <p className="text-white/70 text-sm mt-2">
              Our experts will get in touch with you shortly.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="alpha-eyebrow text-[#FA5A16] block">Connect with Alphasure</span>
              <h3 className="alpha-h3 text-white mt-1">Request A Call</h3>
              <p className="alpha-small text-white/70 mt-1">
                Let our corporate & accounting advisors guide your business growth.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1">Full Name</label>
                <div className="relative">
                  <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="alpha-input w-full min-h-[48px] bg-white/10 border border-white/20 rounded-xl py-3 pl-11 pr-4 text-[16px] text-white placeholder-white/40 focus:outline-none focus:border-[#FA5A16] focus:ring-1 focus:ring-[#FA5A16] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1">Phone Number</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="alpha-input w-full min-h-[48px] bg-white/10 border border-white/20 rounded-xl py-3 pl-11 pr-4 text-[16px] text-white placeholder-white/40 focus:outline-none focus:border-[#FA5A16] focus:ring-1 focus:ring-[#FA5A16] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1">Work Email</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="alpha-input w-full min-h-[48px] bg-white/10 border border-white/20 rounded-xl py-3 pl-11 pr-4 text-[16px] text-white placeholder-white/40 focus:outline-none focus:border-[#FA5A16] focus:ring-1 focus:ring-[#FA5A16] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1">Service Interest</label>
                <div className="relative">
                  <Building size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="alpha-input w-full min-h-[48px] bg-slate-800 border border-white/20 rounded-xl py-3 pl-11 pr-4 text-[16px] text-white focus:outline-none focus:border-[#FA5A16] transition-all cursor-pointer"
                  >
                    <option value="Accounting & Compliance">Accounting & Compliance</option>
                    <option value="Company Incorporation">Company Incorporation</option>
                    <option value="Tax Advisory & Audit">Tax Advisory & Audit</option>
                    <option value="CFO Services">Virtual CFO Services</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="alpha-btn w-full min-h-[48px] mt-2 bg-gradient-to-r from-[#FA5A16] to-[#ff7336] hover:from-[#EA4B07] hover:to-[#FA5A16] text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Confirm Call Request</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
