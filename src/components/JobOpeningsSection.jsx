import React, { useState, useEffect, useMemo } from 'react';
import { 
  Briefcase, MapPin, Clock, ChevronDown, ChevronUp, 
  Send, CheckCircle2, ArrowRight, Sparkles, Filter, Building2
} from 'lucide-react';
import { fetchAllJobs } from '../lib/supabase';

export default function JobOpeningsSection({ onOpenModal }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDept, setSelectedDept] = useState('All');
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [applicationModalJob, setApplicationModalJob] = useState(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [applicantData, setApplicantData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    note: ''
  });

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
    e.stopPropagation();
    setApplicationModalJob(job);
    setApplicationSubmitted(false);
    setApplicantData({ name: '', email: '', phone: '', linkedin: '', note: '' });
  };

  const handleCloseApply = () => {
    setApplicationModalJob(null);
    setApplicationSubmitted(false);
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    setApplicationSubmitted(true);
    setTimeout(() => {
      handleCloseApply();
    }, 2500);
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
              onClick={onOpenModal}
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
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={handleCloseApply}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 text-sm font-bold cursor-pointer"
            >
              ✕
            </button>

            {applicationSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0B192C]">Application Received!</h3>
                <p className="text-slate-600 text-sm mt-2 mb-6">
                  Thank you for applying for <span className="font-semibold text-[#0B192C]">{applicationModalJob.title}</span>. Our HR and talent acquisition team will review your profile and reach out shortly.
                </p>
                <button
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
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantData.name}
                      onChange={(e) => setApplicantData({ ...applicantData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] focus:border-transparent outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
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
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      LinkedIn Profile or Resume Link *
                    </label>
                    <input
                      type="url"
                      required
                      value={applicantData.linkedin}
                      onChange={(e) => setApplicantData({ ...applicantData, linkedin: e.target.value })}
                      placeholder="https://linkedin.com/in/profile or Google Drive link"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Brief Cover Note or Experience Summary
                    </label>
                    <textarea
                      rows="3"
                      value={applicantData.note}
                      onChange={(e) => setApplicantData({ ...applicantData, note: e.target.value })}
                      placeholder="Tell us briefly about your background and why you'd be a great fit..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] focus:border-transparent outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#FA5A16] hover:bg-[#E04808] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-orange-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Application</span>
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
