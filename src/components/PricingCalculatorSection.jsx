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
      className="relative w-full bg-[#0B132A] text-white py-16 sm:py-20 lg:py-24 select-none overflow-hidden border-t border-b border-slate-800/80"
      id="periodic-accounting-pricing"
    >
      {/* Background Decorative Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Dark Grid Background Photo Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <img
          src="/images/dark-grid-bg.png"
          alt="Dark Grid Background"
          className="w-full h-full object-cover filter brightness-105"
        />
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADING: "Periodic accounting" ================= */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-[#FA5A16] alpha-eyebrow mb-3 sm:mb-4 shadow-xs">
            <Calculator className="w-4 h-4 text-[#FA5A16]" />
            <span>PRICING CALCULATOR</span>
          </div>
          <h2 className="alpha-h2 font-bold text-white tracking-tight capitalize">
            Periodic accounting
          </h2>
          <p className="mt-3 sm:mt-4 alpha-large-body text-slate-300 font-normal max-w-3xl mx-auto">
            Select your city tier, transaction volume, and billing frequency to calculate your personalized plan.
          </p>
        </div>

        {/* ================= 3 DROPDOWN FILTERS WITH SUBMIT BUTTON ================= */}
        <div className="w-full max-w-[1200px] mx-auto bg-[#131E3A]/90 backdrop-blur-xl rounded-[26px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-slate-700/80 mb-6 transition-all duration-300">
          
          <form onSubmit={handleShowPricing} className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
              
              {/* Dropdown 1: Choose City Type */}
              <div className="flex flex-col space-y-3">
                <label className="text-sm sm:text-base font-black text-white uppercase tracking-wider flex items-center gap-2 h-7">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#FA5A16] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                  <span>Choose City Type</span>
                </label>
                <div className="relative">
                  <select
                    value={cityTier}
                    onChange={(e) => setCityTier(e.target.value)}
                    className="w-full bg-[#0D1527] hover:bg-[#111C35] text-white font-bold text-sm sm:text-base md:text-lg py-3.5 sm:py-4 pl-4 pr-10 rounded-2xl border-2 border-slate-700 hover:border-slate-500 focus:border-[#FA5A16] focus:ring-2 focus:ring-[#FA5A16]/20 outline-none transition-all cursor-pointer appearance-none shadow-xs"
                  >
                    <option value="tier1" className="bg-[#0D1527] text-white">Tier 1 (Top Metros)</option>
                    <option value="tier2" className="bg-[#0D1527] text-white">Tier 2 (Any other City)</option>
                  </select>
                  <ChevronDown className="w-5 h-5 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                <div className="min-h-[42px] sm:min-h-[46px] flex items-start">
                  <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
                    {cityTier === 'tier1' ? 'Mumbai, Delhi NCR, Bengaluru, Chennai, Hyderabad, Kolkata, Pune' : 'All other regional cities & towns across India'}
                  </p>
                </div>
              </div>

              {/* Dropdown 2: Number of Transactions */}
              <div className="flex flex-col space-y-3">
                <label className="text-sm sm:text-base font-black text-white uppercase tracking-wider flex items-center gap-2 h-7">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#FA5A16] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                  <span>Number of Transactions</span>
                </label>
                <div className="relative">
                  <select
                    value={transactions}
                    onChange={(e) => setTransactions(e.target.value)}
                    className="w-full bg-[#0D1527] hover:bg-[#111C35] text-white font-bold text-sm sm:text-base md:text-lg py-3.5 sm:py-4 pl-4 pr-10 rounded-2xl border-2 border-slate-700 hover:border-slate-500 focus:border-[#FA5A16] focus:ring-2 focus:ring-[#FA5A16]/20 outline-none transition-all cursor-pointer appearance-none shadow-xs"
                  >
                    <option value="50" className="bg-[#0D1527] text-white">Upto 50</option>
                    <option value="100" className="bg-[#0D1527] text-white">Upto 100</option>
                    <option value="200" className="bg-[#0D1527] text-white">Upto 200</option>
                    <option value="500" className="bg-[#0D1527] text-white">Upto 500</option>
                    <option value="1000" className="bg-[#0D1527] text-white">Upto 1000</option>
                    <option value="more-than-1000" className="bg-[#0D1527] text-white">1000 or more</option>
                  </select>
                  <ChevronDown className="w-5 h-5 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                <div className="min-h-[42px] sm:min-h-[46px] flex items-start">
                  <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
                    *Bank + Supplier + Customer invoices
                  </p>
                </div>
              </div>

              {/* Dropdown 3: Annually or Monthly */}
              <div className="flex flex-col space-y-3">
                <label className="text-sm sm:text-base font-black text-white uppercase tracking-wider flex items-center gap-2 h-7">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#FA5A16] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                  <span>Choose Frequency</span>
                </label>
                <div className="relative">
                  <select
                    value={billingCycle}
                    onChange={(e) => setBillingCycle(e.target.value)}
                    className="w-full bg-[#0D1527] hover:bg-[#111C35] text-white font-bold text-sm sm:text-base md:text-lg py-3.5 sm:py-4 pl-4 pr-10 rounded-2xl border-2 border-slate-700 hover:border-slate-500 focus:border-[#FA5A16] focus:ring-2 focus:ring-[#FA5A16]/20 outline-none transition-all cursor-pointer appearance-none shadow-xs"
                  >
                    <option value="monthly" className="bg-[#0D1527] text-white">Monthly</option>
                    <option value="annually" className="bg-[#0D1527] text-white">Annual (Best Value)</option>
                  </select>
                  <ChevronDown className="w-5 h-5 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                <div className="min-h-[42px] sm:min-h-[46px] flex items-start">
                  <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
                    {billingCycle === 'annually' ? 'Includes comprehensive annual package' : 'Pay as you go monthly'}
                  </p>
                </div>
              </div>

            </div>

            {/* Action Bar with "Show Pricing" Button */}
            <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-slate-700/70">
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
                  className="text-xs sm:text-sm font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 py-2 px-3.5 rounded-xl hover:bg-slate-800/80 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset Selection</span>
                </button>
              )}
            </div>

          </form>

        </div>

        {/* ================= DYNAMIC OUTPUT SHOWCASE (Revealed Only on Submit) ================= */}
        {hasCalculated && (
          <div id="pricing-results-output" className="animate-fadeIn max-w-[1200px] mx-auto transition-all duration-500">
            
            <div className="w-full bg-[#131E3A] rounded-[26px] sm:rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] border-2 border-slate-700 overflow-hidden">
              
              {/* Top Banner: Selected Filter Summary Pills */}
              <div className="bg-[#0D1527] px-6 sm:px-8 py-4.5 border-b border-slate-700/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#FA5A16]/20 text-[#FA5A16] flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-orange-400 block">
                      Customized Pricing Summary
                    </span>
                    <span className="text-base sm:text-lg font-black text-white">
                      Your Selected Plan
                    </span>
                  </div>
                </div>

                {/* Filter Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs sm:text-sm font-bold text-slate-200 shadow-2xs">
                    <MapPin className="w-3.5 h-3.5 text-[#FA5A16]" />
                    {cityTier === 'tier1' ? 'Tier 1' : 'Tier 2'}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs sm:text-sm font-bold text-slate-200 shadow-2xs">
                    <Layers className="w-3.5 h-3.5 text-[#FA5A16]" />
                    {txnLabel}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FA5A16]/15 border border-[#FA5A16]/40 text-xs sm:text-sm font-bold text-[#FA5A16] shadow-2xs">
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
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400">
                      Total Package Investment
                    </span>

                    <div className="flex items-baseline gap-2.5">
                      <span className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
                        {activePrice}
                      </span>
                      {activeCycleLabel && (
                        <span className="text-slate-400 font-bold text-lg sm:text-xl">
                          {activeCycleLabel}
                        </span>
                      )}
                    </div>

                    <div className="bg-[#0D1527] rounded-2xl p-4 sm:p-5 border border-slate-700/80 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium space-y-1.5">
                      <div className="font-bold text-white text-sm sm:text-base">
                        {cityLabel}
                      </div>
                      <div className="text-slate-400 font-medium">
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
                  <div className="lg:col-span-7 bg-[#0D1527] rounded-2xl p-6 sm:p-8 md:p-9 border border-slate-700/90 flex flex-col justify-between">
                    <div>
                      <h4 className="font-black text-white text-sm sm:text-base uppercase tracking-wider mb-4 sm:mb-5 flex items-center gap-2.5">
                        <Sparkles className="w-5 h-5 text-[#FA5A16]" />
                        <span>What's Included In Your Plan:</span>
                      </h4>

                      <ul className="space-y-3 sm:space-y-3.5">
                        {includedFeatures.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                            <div className="w-5 h-5 rounded-full bg-[#FA5A16]/20 text-[#FA5A16] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5 text-[#FA5A16] stroke-[3]" />
                            </div>
                            <span>{feat}</span>
                          </li>
                        ))}
                        {isCustomPlan && (
                          <li className="flex items-start gap-3 text-sm sm:text-base text-orange-400 font-bold leading-relaxed">
                            <div className="w-5 h-5 rounded-full bg-[#FA5A16] text-white flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                            <span>Dedicated CA team & customized reporting cadence</span>
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-700 flex items-center justify-between text-xs sm:text-sm text-slate-400 font-medium">
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
