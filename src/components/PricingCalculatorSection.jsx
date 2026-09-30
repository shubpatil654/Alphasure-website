import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, Calculator, RotateCcw, ChevronDown, MapPin, Layers, CalendarCheck } from 'lucide-react';

export default function PricingCalculatorSection({ onOpenModal }) {
  // Dropdown States
  const [cityTier, setCityTier] = useState('tier1'); // 'tier1' | 'tier2'
  const [transactions, setTransactions] = useState('50'); // '50' | '100' | '200' | '500' | '1000' | 'more-than-1000'
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annually'

  // Submission State - Table & Output are hidden at first
  const [hasCalculated, setHasCalculated] = useState(false);

  // Pricing Data Matrix for Tier 1: Mumbai, Delhi NCR, Bengaluru, Chennai, Hyderabad, Kolkata, Pune (Reference Image 2)
  const tier1Data = {
    '50': { monthly: 5000, annual: 20000, monthlyDisplay: '₹5,000', annualDisplay: '₹20,000', isCustom: false },
    '100': { monthly: 7000, annual: 20000, monthlyDisplay: '₹7,000', annualDisplay: '₹20,000', isCustom: false },
    '200': { monthly: 12000, annual: 20000, monthlyDisplay: '₹12,000', annualDisplay: '₹20,000', isCustom: false },
    '500': { monthly: 17000, annual: 20000, monthlyDisplay: '₹17,000', annualDisplay: '₹20,000', isCustom: false },
    '1000': { monthly: 22000, annual: 25000, monthlyDisplay: '₹22,000', annualDisplay: '₹25,000', isCustom: false },
    'more-than-1000': { monthly: null, annual: null, monthlyDisplay: 'Ask for a quote', annualDisplay: 'Ask for a quote', isCustom: true },
  };

  // Pricing Data Matrix for Tier 2: Any other City (Reference Image 1)
  const tier2Data = {
    '50': { monthly: 3000, annual: 15000, monthlyDisplay: '₹3,000', annualDisplay: '₹15,000', isCustom: false },
    '100': { monthly: 5000, annual: 15000, monthlyDisplay: '₹5,000', annualDisplay: '₹15,000', isCustom: false },
    '200': { monthly: 10000, annual: 15000, monthlyDisplay: '₹10,000', annualDisplay: '₹15,000', isCustom: false },
    '500': { monthly: 15000, annual: 15000, monthlyDisplay: '₹15,000', annualDisplay: '₹15,000', isCustom: false },
    '1000': { monthly: 20000, annual: 20000, monthlyDisplay: '₹20,000', annualDisplay: '₹20,000', isCustom: false },
    'more-than-1000': { monthly: null, annual: null, monthlyDisplay: 'Ask for a quote', annualDisplay: 'Ask for a quote', isCustom: true },
  };

  const currentDataset = cityTier === 'tier1' ? tier1Data : tier2Data;
  const currentPlan = currentDataset[transactions] || currentDataset['50'];
  const isCustomPlan = currentPlan.isCustom;
  const activePrice = isCustomPlan 
    ? 'Ask for a quote' 
    : (billingCycle === 'monthly' ? currentPlan.monthlyDisplay : currentPlan.annualDisplay);
  const activeCycleLabel = isCustomPlan ? '' : (billingCycle === 'monthly' ? '/ month' : '/ year');

  const cityLabel = cityTier === 'tier1' 
    ? 'Tier 1 (Mumbai, Delhi NCR, Bengaluru, Chennai, Hyderabad, Kolkata, Pune)'
    : 'Tier 2 (Any other City across India)';

  const txnLabel = transactions === 'more-than-1000' 
    ? '1000 or more transactions' 
    : `Upto ${transactions} transactions`;

  const frequencyLabel = billingCycle === 'monthly' ? 'Monthly Billing' : 'Annual Billing';

  const includedFeatures = billingCycle === 'monthly' 
    ? [
        'Dedicated Senior Accountant oversight',
        'Continuous monthly bookkeeping & reconciliations',
        'Monthly closing and MIS reporting package',
        'Monthly review call with your accountant',
        'Books ready for seamless GST and TDS filings',
        'Real-time cloud accounting software support',
      ]
    : [
        'Dedicated Senior Accountant oversight',
        'Comprehensive annual bookkeeping & ledger scrubbing',
        'Year-end closing and financial statement package',
        'Annual balance sheet review call with your accountant',
        'Books ready for Income Tax and MCA annual filings',
        'Audit-ready financial documentation package',
      ];

  const handleShowPricing = (e) => {
    e.preventDefault();
    setHasCalculated(true);
    // Smooth scroll down to result
    setTimeout(() => {
      const outputElem = document.getElementById('pricing-results-output');
      if (outputElem) {
        outputElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <section 
      className="relative w-full bg-transparent py-8 sm:py-10 md:py-12 select-none overflow-hidden"
      id="periodic-accounting-pricing"
    >
      {/* Background Soft Accent Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
          <path d="M-100 200 C 350 100, 750 350, 1150 180 C 1300 120, 1400 300, 1550 240" stroke="#E2D8C8" strokeWidth="1.5" />
          <path d="M-100 700 C 400 550, 850 780, 1250 620 C 1380 500, 1450 720, 1550 640" stroke="#ECE2D3" strokeWidth="1.2" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADING: "Periodic accounting" ================= */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A67C52]/10 border border-[#A67C52]/30 text-[#A67C52] alpha-eyebrow mb-2.5">
            <Calculator className="w-4 h-4 text-[#A67C52]" />
            <span>PRICING CALCULATOR</span>
          </div>
          <h2 className="alpha-h2 font-bold text-slate-950 tracking-tight capitalize">
            Periodic accounting
          </h2>
          <p className="mt-2 alpha-large-body text-slate-700 font-normal max-w-3xl mx-auto">
            Select your city tier, transaction volume, and billing frequency to calculate your personalized plan.
          </p>
        </div>

        {/* ================= 3 DROPDOWN FILTERS WITH SUBMIT BUTTON ================= */}
        <div className="w-full max-w-[1200px] mx-auto bg-white rounded-[26px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 shadow-[0_12px_45px_rgba(0,0,0,0.04)] border border-[#E5D8C5] mb-6 transition-all duration-300">
          
          <form onSubmit={handleShowPricing} className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-end">
              
              {/* Dropdown 1: Choose City Type */}
              <div className="flex flex-col space-y-2.5">
                <label className="text-sm sm:text-base font-black text-slate-950 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#FA5A16] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                  <span>Choose City Type</span>
                </label>
                <div className="relative">
                  <select
                    value={cityTier}
                    onChange={(e) => setCityTier(e.target.value)}
                    className="w-full bg-[#FAF7F2] hover:bg-[#F5EFE6] text-slate-950 font-bold text-sm sm:text-base md:text-lg py-3.5 sm:py-4 pl-4 pr-10 rounded-2xl border-2 border-[#E5D8C5] focus:border-[#FA5A16] focus:ring-2 focus:ring-[#FA5A16]/20 outline-none transition-all cursor-pointer appearance-none shadow-xs"
                  >
                    <option value="tier1">Tier 1 (Top Metros)</option>
                    <option value="tier2">Tier 2 (Any other City)</option>
                  </select>
                  <ChevronDown className="w-5 h-5 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                  {cityTier === 'tier1' ? 'Mumbai, Delhi NCR, Bengaluru, Chennai, Hyderabad, Kolkata, Pune' : 'All other regional cities & towns across India'}
                </p>
              </div>

              {/* Dropdown 2: Number of Transactions */}
              <div className="flex flex-col space-y-2.5">
                <label className="text-sm sm:text-base font-black text-slate-950 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#FA5A16] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                  <span>Number of Transactions</span>
                </label>
                <div className="relative">
                  <select
                    value={transactions}
                    onChange={(e) => setTransactions(e.target.value)}
                    className="w-full bg-[#FAF7F2] hover:bg-[#F5EFE6] text-slate-950 font-bold text-sm sm:text-base md:text-lg py-3.5 sm:py-4 pl-4 pr-10 rounded-2xl border-2 border-[#E5D8C5] focus:border-[#FA5A16] focus:ring-2 focus:ring-[#FA5A16]/20 outline-none transition-all cursor-pointer appearance-none shadow-xs"
                  >
                    <option value="50">Upto 50</option>
                    <option value="100">Upto 100</option>
                    <option value="200">Upto 200</option>
                    <option value="500">Upto 500</option>
                    <option value="1000">Upto 1000</option>
                    <option value="more-than-1000">1000 or more</option>
                  </select>
                  <ChevronDown className="w-5 h-5 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                  *Bank + Supplier + Customer invoices
                </p>
              </div>

              {/* Dropdown 3: Annually or Monthly */}
              <div className="flex flex-col space-y-2.5">
                <label className="text-sm sm:text-base font-black text-slate-950 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#FA5A16] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                  <span>Choose Frequency</span>
                </label>
                <div className="relative">
                  <select
                    value={billingCycle}
                    onChange={(e) => setBillingCycle(e.target.value)}
                    className="w-full bg-[#FAF7F2] hover:bg-[#F5EFE6] text-slate-950 font-bold text-sm sm:text-base md:text-lg py-3.5 sm:py-4 pl-4 pr-10 rounded-2xl border-2 border-[#E5D8C5] focus:border-[#FA5A16] focus:ring-2 focus:ring-[#FA5A16]/20 outline-none transition-all cursor-pointer appearance-none shadow-xs"
                  >
                    <option value="monthly">Monthly</option>
                    <option value="annually">Annual (Best Value)</option>
                  </select>
                  <ChevronDown className="w-5 h-5 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                  {billingCycle === 'annually' ? 'Includes comprehensive annual package' : 'Pay as you go monthly'}
                </p>
              </div>

            </div>

            {/* Action Bar with "Show Pricing" Button */}
            <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-[#EFE6DA]/90">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 sm:px-12 sm:py-4.5 rounded-2xl bg-gradient-to-r from-[#FF8A00] via-[#FF7A00] to-[#E66B00] hover:from-[#FF9500] hover:to-[#FF6B00] text-white font-black text-base sm:text-lg tracking-wide shadow-xl hover:shadow-[#FF8A00]/40 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center justify-center gap-2.5"
              >
                <span>Show Pricing</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {hasCalculated && (
                <button
                  type="button"
                  onClick={() => setHasCalculated(false)}
                  className="text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5 py-2 px-3.5 rounded-xl hover:bg-slate-100 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset Selection</span>
                </button>
              )}
            </div>

          </form>

        </div>

        {/* ================= DYNAMIC OUTPUT SHOWCASE (Revealed Only on Submit, Table Hidden) ================= */}
        {hasCalculated && (
          <div id="pricing-results-output" className="animate-fadeIn max-w-[1200px] mx-auto transition-all duration-500">
            
            <div className="w-full bg-white rounded-[26px] sm:rounded-[32px] shadow-[0_16px_55px_rgba(0,0,0,0.06)] border-2 border-[#E5D8C5] overflow-hidden">
              
              {/* Top Banner: Selected Filter Summary Pills */}
              <div className="bg-[#FAF5ED] px-6 sm:px-8 py-4.5 border-b border-[#E8DCCB] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#FA5A16]/15 text-[#FA5A16] flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#A67C52] block">
                      Customized Pricing Summary
                    </span>
                    <span className="text-base sm:text-lg font-black text-slate-950">
                      Your Selected Plan
                    </span>
                  </div>
                </div>

                {/* Filter Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#E5D8C5] text-xs sm:text-sm font-bold text-slate-800 shadow-2xs">
                    <MapPin className="w-3.5 h-3.5 text-[#FA5A16]" />
                    {cityTier === 'tier1' ? 'Tier 1' : 'Tier 2'}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#E5D8C5] text-xs sm:text-sm font-bold text-slate-800 shadow-2xs">
                    <Layers className="w-3.5 h-3.5 text-[#FA5A16]" />
                    {txnLabel}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FA5A16]/10 border border-[#FA5A16]/30 text-xs sm:text-sm font-bold text-[#FA5A16] shadow-2xs">
                    <CalendarCheck className="w-3.5 h-3.5 text-[#FA5A16]" />
                    {frequencyLabel}
                  </span>
                </div>
              </div>

              {/* Main Card Content */}
              <div className="p-7 sm:p-10 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Price Value & Plan Scope */}
                  <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
                      Total Package Investment
                    </span>

                    <div className="flex items-baseline gap-2.5">
                      <span className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight">
                        {activePrice}
                      </span>
                      {activeCycleLabel && (
                        <span className="text-slate-600 font-bold text-lg sm:text-xl">
                          {activeCycleLabel}
                        </span>
                      )}
                    </div>

                    <div className="bg-[#FAF7F2] rounded-2xl p-4 sm:p-5 border border-[#E8DCCB]/80 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium space-y-1.5">
                      <div className="font-bold text-slate-950 text-sm sm:text-base">
                        {cityLabel}
                      </div>
                      <div className="text-slate-600 font-medium">
                        {isCustomPlan 
                          ? 'Tailored enterprise volume with dedicated CA assignment and custom SLA.'
                          : (billingCycle === 'monthly' ? 'Billed monthly. Complete ongoing bookkeeping and monthly closing.' : 'Billed annually. Full annual closing and statutory filing readiness.')}
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={onOpenModal}
                        className="w-full py-4 sm:py-4.5 rounded-2xl bg-gradient-to-r from-[#FF8A00] via-[#FF7A00] to-[#E66B00] hover:from-[#FF9500] hover:to-[#FF6B00] text-white font-extrabold text-base sm:text-lg tracking-wide shadow-xl hover:shadow-[#FF8A00]/40 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center justify-center gap-2.5"
                      >
                        <span>{isCustomPlan ? 'Talk to an Expert for Custom Quote' : 'Get Started with this Plan'}</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: What's Included */}
                  <div className="lg:col-span-7 bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 md:p-9 border border-[#E8DCCB]/90 flex flex-col justify-between">
                    <div>
                      <h4 className="font-black text-slate-950 text-sm sm:text-base uppercase tracking-wider mb-4 sm:mb-5 flex items-center gap-2.5">
                        <Sparkles className="w-5 h-5 text-[#FA5A16]" />
                        <span>What's Included In Your Plan:</span>
                      </h4>

                      <ul className="space-y-3 sm:space-y-3.5">
                        {includedFeatures.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-900 font-medium leading-relaxed">
                            <div className="w-5 h-5 rounded-full bg-[#FA5A16]/15 text-[#FA5A16] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5 text-[#FA5A16] stroke-[3]" />
                            </div>
                            <span>{feat}</span>
                          </li>
                        ))}
                        {isCustomPlan && (
                          <li className="flex items-start gap-3 text-sm sm:text-base text-[#FA5A16] font-bold leading-relaxed">
                            <div className="w-5 h-5 rounded-full bg-[#FA5A16] text-white flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                            <span>Dedicated CA team & customized reporting cadence</span>
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E8DCCB] flex items-center justify-between text-xs sm:text-sm text-slate-600 font-medium">
                      <span>*Prices exclude statutory taxes</span>
                      <button
                        onClick={onOpenModal}
                        className="text-[#FA5A16] font-bold hover:underline cursor-pointer"
                      >
                        Request consultation &rarr;
                      </button>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
