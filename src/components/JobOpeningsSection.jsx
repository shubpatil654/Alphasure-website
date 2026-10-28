import React, { useState, useEffect, useMemo } from 'react';
import { 
  Briefcase, MapPin, Clock, ChevronDown, ChevronUp, 
  Send, CheckCircle2, ArrowRight, Sparkles, Filter, Building2,
  User, Mail, Phone, Calendar, GraduationCap, IndianRupee,
  FileText, Link2, X, AlertCircle, Loader2
} from 'lucide-react';
import { fetchAllJobs, submitJobApplication } from '../lib/supabase';

const INITIAL_APPLICANT_DATA = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  city: '',
  qualification: '',
  experienceYears: '',
  dob: '',
  currentCtc: '',
  currentEmployer: '',
  noticePeriod: '',
  resumeUrl: '',
  coverNote: ''
};

const NOTICE_PERIOD_OPTIONS = [
  'Immediate / Serving Notice',
  '15 Days',
  '30 Days (1 Month)',
  '45 Days',
  '60 Days (2 Months)',
  '90 Days (3 Months)',
  'More than 90 Days'
];

const QUALIFICATION_SUGGESTIONS = [
  'Chartered Accountant (CA)',
  'Semi-Qualified CA / CA Inter',
  'Company Secretary (CS)',
  'Cost & Management Accountant (CMA)',
  'MBA (Finance)',
  'B.Com / B.Com (Hons)',
  'M.Com',
  'BBA / BMS (Finance)',
  'CFA / ACCA / CPA',
  'LLB / Corporate Law',
  'Other Graduate / Post-Graduate'
];

export default function JobOpeningsSection({ onOpenModal }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDept, setSelectedDept] = useState('All');
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [applicationModalJob, setApplicationModalJob] = useState(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [applicantData, setApplicantData] = useState(INITIAL_APPLICANT_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dobError, setDobError] = useState('');

  useEffect(() => {
    let isMounted = true;
    const loadJobs = async () => {
      try {
        const data = await fetchAllJobs();
        if (isMounted) {
          setJobs(data.filter(j => j.status === 'active'));
          setLoading(false);
        }
      } catch (err) {
        console.warn('Failed to load jobs:', err);
        if (isMounted) setLoading(false);
      }
    };

    loadJobs();
    return () => { isMounted = false; };
  }, []);

  // Department list
  const departments = useMemo(() => {
    const set = new Set();
    jobs.forEach(j => {
      if (j.department) set.add(j.department);
    });
    return ['All', ...Array.from(set)];
  }, [jobs]);

  // Filtered jobs
  const filteredJobs = useMemo(() => {
    if (selectedDept === 'All') return jobs;
    return jobs.filter(j => j.department === selectedDept);
  }, [jobs, selectedDept]);

  const toggleExpand = (id) => {
    setExpandedJobId(prev => prev === id ? null : id);
  };

  const handleOpenApply = (job, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setApplicationModalJob(job);
    setApplicationSubmitted(false);
    setApplicantData(INITIAL_APPLICANT_DATA);
    setDobError('');
    setIsSubmitting(false);
  };

  const handleCloseApply = () => {
    setApplicationModalJob(null);
    setApplicationSubmitted(false);
    setIsSubmitting(false);
  };

  const handleDobChange = (e) => {
    const raw = e.target.value;
    const digits = raw.replace(/\D/g, '').slice(0, 8);
    let formatted = digits;
    if (digits.length >= 5) {
      formatted = `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
    } else if (digits.length >= 3) {
      formatted = `${digits.slice(0, 2)}/${digits.slice(2)}`;
    }
    setApplicantData(prev => ({ ...prev, dob: formatted }));

    if (formatted.length === 10) {
      const [d, m, y] = formatted.split('/').map(Number);
      const currentYear = new Date().getFullYear();
      if (d < 1 || d > 31 || m < 1 || m > 12 || y < 1940 || y > currentYear - 16) {
        setDobError('Please enter a valid date in DD/MM/YYYY format');
      } else {
        setDobError('');
      }
    } else {
      setDobError('');
    }
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();

    // Validate DOB format (DD/MM/YYYY)
    if (applicantData.dob && applicantData.dob.length === 10) {
      const [d, m, y] = applicantData.dob.split('/').map(Number);
      const currentYear = new Date().getFullYear();
      if (d < 1 || d > 31 || m < 1 || m > 12 || y < 1940 || y > currentYear - 16) {
        setDobError('Please enter a valid date of birth (DD/MM/YYYY)');
        return;
      }
    } else {
      setDobError('Please enter Date of Birth in DD/MM/YYYY format');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitJobApplication({
        ...applicantData,
        jobId: applicationModalJob?.id || null,
        jobTitle: applicationModalJob?.title || 'General Opening'
      });
      setApplicationSubmitted(true);
    } catch (err) {
      console.error('Error submitting application:', err);
      setApplicationSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="job-openings" className="relative w-full py-16 sm:py-20 lg:py-24 select-none">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FA5A16] alpha-eyebrow mb-3 sm:mb-4 shadow-xs">
            <Briefcase size={14} className="text-[#FA5A16]" />
            <span className="tracking-wider uppercase font-extrabold text-xs">Join Our Growing Team</span>
          </div>

          <h2 className="alpha-h2 font-bold text-[#1B2A4A] tracking-tight">
            Current{' '}
            <span className="relative inline-block text-[#FA5A16]">
              Job Openings
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
          </h2>

          <div className="mt-4 max-w-2xl mx-auto space-y-2.5">
            <p className="alpha-large-body text-slate-600 font-normal leading-relaxed">
              As we grow, we want our people to grow with us.
            </p>
            <p className="alpha-large-body text-slate-600 font-normal leading-relaxed">
              Join a team where your ideas matter, your growth is valued, and the work you do makes a difference.
            </p>
          </div>
        </div>

        {/* Department Filter Tabs */}
        {departments.length > 2 && (
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
            {departments.map((dept) => {
              const isActive = selectedDept === dept;
              const count = dept === 'All' ? jobs.length : jobs.filter(j => j.department === dept).length;
              return (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#FA5A16] text-white shadow-md shadow-orange-500/25 scale-[1.02]'
                      : 'bg-white text-slate-600 hover:text-[#FA5A16] border border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <span>{dept}</span>
                  <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-black/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-16">
            <div className="w-10 h-10 border-4 border-[#FA5A16] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-slate-500 text-sm font-medium">Loading open positions...</p>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="text-center py-16 px-6 bg-white rounded-3xl border border-slate-200/80 max-w-lg mx-auto shadow-sm">
            <div className="w-14 h-14 mx-auto rounded-full bg-orange-50 text-[#FA5A16] flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B192C]">No active openings right now</h3>
            <p className="text-sm text-slate-500 mt-1 mb-6">
              We are constantly seeking brilliant accounting and compliance minds. Submit an open inquiry and we'll reach out when a matching role opens.
            </p>
            <button
              onClick={(e) => handleOpenApply({ id: 'general-opening', title: 'Open Application (General)', department: 'General', location: 'India (Hybrid / Remote)' }, e)}
              className="px-6 py-2.5 rounded-xl bg-[#FA5A16] hover:bg-[#E04808] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
            >
              Send Open Application
            </button>
          </div>
        ) : (
          /* Job Cards Grid */
          <div className="space-y-5 max-w-4xl mx-auto">
            {filteredJobs.map((job) => {
              const isExpanded = expandedJobId === job.id;

              return (
                <div
                  key={job.id}
                  onClick={() => toggleExpand(job.id)}
                  className={`bg-white rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                    isExpanded 
                      ? 'border-[#FA5A16]/50 shadow-xl ring-1 ring-[#FA5A16]/20' 
                      : 'border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300'
                  }`}
                >
                  {/* Card Main Row */}
                  <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-50 text-[#FA5A16] border border-orange-200/70">
                          {job.department}
                        </span>
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/70">
                          {job.type}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-[#0B192C] group-hover:text-[#FA5A16] transition-colors">
                        {job.title}
                      </h3>

                      {/* Meta Tags */}
                      <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-500 flex-wrap">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#FA5A16]" />
                          {job.location}
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {job.experience} Experience
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                      <button
                        onClick={(e) => handleOpenApply(job, e)}
                        className="px-5 py-2.5 rounded-xl bg-[#FA5A16] hover:bg-[#E04808] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md hover:shadow-orange-500/25 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        Apply Now
                      </button>

                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </div>
                  </div>

                  {/* Expandable Details Drawer */}
                  {isExpanded && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-2 border-t border-slate-100 bg-[#FFFDFB]/60 space-y-5 animate-fadeIn">
                      {job.description && (
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                            Role Overview
                          </h4>
                          <p className="text-slate-700 text-sm leading-relaxed">
                            {job.description}
                          </p>
                        </div>
                      )}

                      {/* Responsibilities */}
                      {job.responsibilities && job.responsibilities.length > 0 && (
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-1.5">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FA5A16] shrink-0 mt-2" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Requirements */}
                      {job.requirements && job.requirements.length > 0 && (
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                            Qualifications & Skills
                          </h4>
                          <ul className="space-y-1.5">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Bottom Apply CTA */}
                      <div className="pt-3 flex items-center justify-between border-t border-slate-200/60">
                        <span className="text-xs text-slate-500">
                          Direct questions to <a href="mailto:careers@alphasure.in" className="text-[#FA5A16] font-semibold underline">careers@alphasure.in</a>
                        </span>
                        <button
                          onClick={(e) => handleOpenApply(job, e)}
                          className="px-6 py-2 rounded-xl bg-[#0B192C] hover:bg-[#FA5A16] text-white text-xs font-bold transition-colors cursor-pointer"
                        >
                          Submit Your Application
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* ================= APPLICATION MODAL ================= */}
      {applicationModalJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto">
            
            <button
              type="button"
              onClick={handleCloseApply}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 text-sm font-bold cursor-pointer transition-colors"
            >
              ✕
            </button>

            {applicationSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0B192C]">Application Received!</h3>
                <p className="text-slate-600 text-sm mt-2 mb-4">
                  Thank you, <span className="font-bold text-[#0B192C]">{applicantData.firstName} {applicantData.lastName}</span>, for applying for <span className="font-semibold text-[#0B192C]">{applicationModalJob.title}</span>. Our HR and talent acquisition team will review your profile and reach out shortly.
                </p>

                {/* Brief Summary */}
                <div className="bg-[#FAF7F2] border border-[#EBD6B8]/70 rounded-2xl p-4 text-left grid grid-cols-2 gap-2.5 text-xs text-slate-600 mb-6">
                  <div><span className="text-slate-400">City:</span> <strong className="text-[#0B192C]">{applicantData.city}</strong></div>
                  <div><span className="text-slate-400">Qualification:</span> <strong className="text-[#0B192C]">{applicantData.qualification}</strong></div>
                  <div><span className="text-slate-400">Experience:</span> <strong className="text-[#0B192C]">{applicantData.experienceYears} Yrs</strong></div>
                  <div><span className="text-slate-400">Notice Period:</span> <strong className="text-[#0B192C]">{applicantData.noticePeriod}</strong></div>
                </div>

                <button
                  type="button"
                  onClick={handleCloseApply}
                  className="px-6 py-2.5 rounded-xl bg-[#0B192C] text-white text-xs font-bold hover:bg-[#FA5A16] transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#FA5A16]">
                    Apply For Position
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C] mt-1">
                    {applicationModalJob.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {applicationModalJob.department} • {applicationModalJob.location}
                  </p>
                </div>

                <form onSubmit={handleSubmitApplication} className="space-y-4">
                  <datalist id="qualifications-list">
                    {QUALIFICATION_SUGGESTIONS.map((q) => (
                      <option key={q} value={q} />
                    ))}
                  </datalist>

                  {/* 1. First Name & 2. Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={applicantData.firstName}
                        onChange={(e) => setApplicantData({ ...applicantData, firstName: e.target.value })}
                        placeholder="e.g. Rahul"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={applicantData.lastName}
                        onChange={(e) => setApplicantData({ ...applicantData, lastName: e.target.value })}
                        placeholder="e.g. Sharma"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  {/* 3. Phone Number & 4. Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={applicantData.phone}
                        onChange={(e) => setApplicantData({ ...applicantData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={applicantData.email}
                        onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  {/* 5. City & 6. Qualification */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        value={applicantData.city}
                        onChange={(e) => setApplicantData({ ...applicantData, city: e.target.value })}
                        placeholder="e.g. Mumbai"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Qualification *
                      </label>
                      <input
                        type="text"
                        required
                        list="qualifications-list"
                        value={applicantData.qualification}
                        onChange={(e) => setApplicantData({ ...applicantData, qualification: e.target.value })}
                        placeholder="e.g. CA, Semi-Qualified CA, MBA, B.Com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  {/* 7. Work Experience (In Yrs) & 8. Date of Birth (DD/MM/YYYY) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Work Experience (In Yrs) *
                      </label>
                      <input
                        type="number"
                        step="0.5"
                        min="0"
                        max="40"
                        required
                        value={applicantData.experienceYears}
                        onChange={(e) => setApplicantData({ ...applicantData, experienceYears: e.target.value })}
                        placeholder="e.g. 3.5"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Date of Birth (DD/MM/YYYY) *
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={10}
                        value={applicantData.dob}
                        onChange={handleDobChange}
                        placeholder="DD/MM/YYYY (e.g. 15/08/1996)"
                        className={`w-full px-4 py-2.5 rounded-xl border ${
                          dobError ? 'border-red-400 focus:ring-red-400' : 'border-slate-300 focus:ring-[#FA5A16]'
                        } text-sm text-[#0B192C] focus:ring-2 focus:border-transparent outline-none`}
                      />
                      {dobError && (
                        <p className="text-[11px] text-red-500 font-medium mt-1">{dobError}</p>
                      )}
                    </div>
                  </div>

                  {/* 9. Current/Last Drawn Annual CTC (In Lakhs) & 11. Current Notice Period */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Current/Last Drawn Annual CTC (In Lakhs) *
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="500"
                        required
                        value={applicantData.currentCtc}
                        onChange={(e) => setApplicantData({ ...applicantData, currentCtc: e.target.value })}
                        placeholder="e.g. 8.5 (₹ Lakhs)"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Current Notice Period *
                      </label>
                      <select
                        required
                        value={applicantData.noticePeriod}
                        onChange={(e) => setApplicantData({ ...applicantData, noticePeriod: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] bg-white focus:ring-2 focus:ring-[#FA5A16] focus:border-transparent outline-none cursor-pointer"
                      >
                        <option value="" disabled>Select Notice Period</option>
                        {NOTICE_PERIOD_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* 10. Current Employer */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Current Employer *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantData.currentEmployer}
                      onChange={(e) => setApplicantData({ ...applicantData, currentEmployer: e.target.value })}
                      placeholder="e.g. Current Company / Firm or 'Fresher'"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] focus:border-transparent outline-none"
                    />
                  </div>

                  {/* LinkedIn Profile or Resume Link (Optional) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      LinkedIn Profile or Resume Link <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="url"
                      value={applicantData.resumeUrl}
                      onChange={(e) => setApplicantData({ ...applicantData, resumeUrl: e.target.value })}
                      placeholder="https://linkedin.com/in/profile or Google Drive link"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] focus:border-transparent outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-[#FA5A16] hover:bg-[#E04808] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-orange-500/25 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Submitting Application...' : 'Submit Application'}</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
}
