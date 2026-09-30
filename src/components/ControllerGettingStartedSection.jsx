import React from 'react';
import { ArrowRight, Settings } from 'lucide-react';

export default function ControllerGettingStartedSection({ onOpenModal }) {
  const steps = [
    {
      stepNumber: '01',
      title: '1. Understand',
      description: 'We take the time to understand your business, existing finance function, and management reporting needs.',
      icon: (
        <svg
          className="w-8 h-8 sm:w-9 sm:h-9 text-slate-700"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Rounded speech bubble with 3 dots */}
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <circle cx="9" cy="11.5" r="0.8" fill="currentColor" />
          <circle cx="12.5" cy="11.5" r="0.8" fill="currentColor" />
          <circle cx="16" cy="11.5" r="0.8" fill="currentColor" />
        </svg>
      ),
    },
    {
      stepNumber: '02',
      title: '2. Evaluate',
      description: 'Our experts conduct a comprehensive review of your accounting processes, internal controls, and financial reporting.',
      icon: (
        <div className="relative flex items-center justify-center">
          {/* Document review / analysis icon */}
          <svg
            className="w-8 h-8 sm:w-9 sm:h-9 text-slate-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="8" y1="13" x2="16" y2="13" />
            <line x1="8" y1="17" x2="12" y2="17" />
          </svg>
          <Settings className="w-3.5 h-3.5 text-[#FA2448] absolute bottom-0 right-0 animate-spin-slow stroke-[2]" />
        </div>
      ),
    },
    {
      stepNumber: '03',
      title: '3. Elevate',
      description: 'Your dedicated Controller partners with your team to improve processes, strengthen controls, and provide strategic financial insights.',
      icon: (
        <div className="relative flex items-center justify-center">
          {/* Dedicated team partner / growth icon */}
          <svg
            className="w-8 h-8 sm:w-9 sm:h-9 text-slate-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          {/* Radiance energy lines */}
          <div className="absolute -top-1.5 flex gap-1 items-center justify-center">
            <span className="w-0.5 h-1.5 bg-[#FA2448] rounded-full transform -rotate-25" />
            <span className="w-0.5 h-2 bg-[#FA2448] rounded-full" />
            <span className="w-0.5 h-1.5 bg-[#FA2448] rounded-full transform rotate-25" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#fafafa] py-8 sm:py-10 md:py-14 select-none"
      id="controller-getting-started"
    >
      {/* ================= Left & Right Pink Faceted Geometric Wireframe Background ================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Left Side Faceted Wireframes */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 sm:w-[420px] md:w-[500px] h-[500px] opacity-35">
          <svg
            className="w-full h-full"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="20,80 180,20 280,160 120,220"
              stroke="#FA2448"
              strokeWidth="1.2"
              fill="url(#leftPinkGrad)"
            />
            <polygon
              points="120,220 280,160 380,300 220,360"
              stroke="#FA2448"
              strokeWidth="1.2"
              fill="url(#leftPinkGrad)"
            />
            <polygon
              points="20,80 120,220 60,380 -40,240"
              stroke="#FA2448"
              strokeWidth="1.2"
              fill="url(#leftPinkGrad)"
            />
            <defs>
              <linearGradient id="leftPinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FA2448" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#FA2448" stopOpacity="0.01" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Right Side Faceted Wireframes */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 sm:w-[420px] md:w-[500px] h-[500px] opacity-35">
          <svg
            className="w-full h-full"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="380,80 220,20 120,160 280,220"
              stroke="#FA2448"
              strokeWidth="1.2"
              fill="url(#rightPinkGrad)"
            />
            <polygon
              points="280,220 120,160 20,300 180,360"
              stroke="#FA2448"
              strokeWidth="1.2"
              fill="url(#rightPinkGrad)"
            />
            <polygon
              points="380,80 280,220 340,380 440,240"
              stroke="#FA2448"
              strokeWidth="1.2"
              fill="url(#rightPinkGrad)"
            />
            <defs>
              <linearGradient id="rightPinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FA2448" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#FA2448" stopOpacity="0.01" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* ================= Main Heading ================= */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-[#1E293B] tracking-tight">
            Getting Started{' '}
            <span className="whitespace-nowrap">
              <span className="text-[#1E293B]">is</span>{' '}
              <span className="relative inline-block text-[#FA2448] font-black">
                Easy
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 overflow-visible pointer-events-none"
                  viewBox="0 0 100 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 12 Q 50 3, 98 12"
                    stroke="#FA2448"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h2>
        </div>

        {/* ================= 3-Step Timeline with Pink Connecting Line ================= */}
        <div className="relative w-full max-w-5xl mx-auto mb-6 sm:mb-8">
          {/* Continuous Red/Pink Connecting Line through Centers (Desktop / Tablet) */}
          <div
            className="hidden md:block absolute top-[52px] left-[14%] right-[14%] h-[2px] pointer-events-none z-0"
            style={{
              background: 'linear-gradient(90deg, #FA2448 0%, #FA2448 100%)',
              opacity: 0.65,
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10 items-start">
            {steps.map((step) => (
              <div
                key={step.stepNumber}
                onClick={onOpenModal}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Step Circle Container */}
                <div className="relative mb-6">
                  {/* White Circular Card with Soft Shadow */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center justify-center transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-[0_12px_35px_rgba(250,36,72,0.15)] group-hover:border-[#FA2448]/30">
                    {step.icon}
                  </div>

                  {/* Red Circular Step Badge on Top Right */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FA2448] text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-md shadow-[#FA2448]/40 transition-transform duration-300 group-hover:scale-110">
                    {step.stepNumber}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 tracking-tight group-hover:text-[#FA2448] transition-colors duration-200">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-[280px] font-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= Red Gradient CTA Button ================= */}
        <div className="pt-2">
          <button
            onClick={onOpenModal}
            className="group relative inline-flex items-center justify-center px-8 py-3.5 sm:px-10 sm:py-4 rounded-xl font-extrabold text-white text-sm sm:text-base tracking-wider uppercase transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_8px_25px_rgba(250,36,72,0.4)] hover:shadow-[0_12px_32px_rgba(250,36,72,0.55)] cursor-pointer"
            style={{
              background: 'linear-gradient(90deg, #FA2448 0%, #E61638 100%)',
            }}
          >
            <span>START YOUR JOURNEY</span>
            <ArrowRight className="w-5 h-5 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
