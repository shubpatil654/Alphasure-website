import React, { useState, useMemo } from 'react';
import { 
  Users, Briefcase, Plus, Search, ChevronRight, X, Phone, Mail, 
  ExternalLink, Trash2, RefreshCw, CheckCircle2, UserCheck, ArrowRight,
  Filter, Sparkles, Building2, MapPin, Calendar, Clock, IndianRupee, GraduationCap
} from 'lucide-react';
import { 
  PIPELINE_STAGES, 
  PIPELINE_SOURCES, 
  INITIAL_HIRING_POSITIONS, 
  generateInitialCandidates 
} from '../data/hiringData';
import { 
  updateJobApplicationStage, 
  deleteJobApplicationById, 
  submitJobApplication 
} from '../lib/supabase';

export default function HiringDashboard({ 
  applications = [], 
  setApplications, 
  jobs = [], 
  onRefresh, 
  showNotification 
}) {
  // Filter state
  const [selectedStage, setSelectedStage] = useState(null);
  const [selectedSource, setSelectedSource] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Modals
  const [isAddCandidateOpen, setIsAddCandidateOpen] = useState(false);
  const [candidateDetail, setCandidateDetail] = useState(null);

  // New Candidate Form State
  const [newCandidate, setNewCandidate] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    city: 'Mumbai',
    qualification: 'Chartered Accountant (CA)',
    experienceYears: '3.0',
    dob: '15/08/1996',
    currentCtc: '8.5',
    currentEmployer: '',
    noticePeriod: '30 Days (1 Month)',
    resumeUrl: '',
    coverNote: '',
    stage: 'New CVs',
    source: 'Referral',
    jobTitle: 'Accountant'
  });

  // Combine default positions with database jobs
  const allPositions = useMemo(() => {
    const list = [...INITIAL_HIRING_POSITIONS];
    jobs.forEach(j => {
      if (!list.some(p => p.title.toLowerCase() === j.title.toLowerCase())) {
        list.push({
          id: j.id,
          title: j.title,
          company: 'Alphasure',
          division: j.department || 'Advisory',
          location: j.location || 'Mumbai',
          openCount: 1
        });
      }
    });
    return list;
  }, [jobs]);

  // Stage counts calculation
  const stageCounts = useMemo(() => {
    const counts = {};
    PIPELINE_STAGES.forEach(s => { counts[s] = 0; });
    counts['Dropped'] = 0;

    applications.forEach(app => {
      const stage = app.stage || 'New CVs';
      if (counts[stage] !== undefined) {
        counts[stage]++;
      } else {
        counts['New CVs']++;
      }
    });
    return counts;
  }, [applications]);

  // Source counts calculation
  const sourceCounts = useMemo(() => {
    const counts = {};
    PIPELINE_SOURCES.forEach(s => { counts[s] = 0; });

    applications.forEach(app => {
      const src = app.source || 'Website Application';
      if (counts[src] !== undefined) {
        counts[src]++;
      } else if (counts['Website Application'] !== undefined) {
        counts['Website Application']++;
      }
    });
    return counts;
  }, [applications]);

  // Active + joined vs dropped counts
  const totalDropped = stageCounts['Dropped'] || 0;
  const activeAndJoined = applications.length - totalDropped;
  const totalCount = applications.length;

  // Max pipeline count for relative progress bar width
  const maxPipelineCount = useMemo(() => {
    let max = 1;
    PIPELINE_STAGES.forEach(s => {
      if (stageCounts[s] > max) max = stageCounts[s];
    });
    return max;
  }, [stageCounts]);

  const maxSourceCount = useMemo(() => {
    let max = 1;
    PIPELINE_SOURCES.forEach(s => {
      if (sourceCounts[s] > max) max = sourceCounts[s];
    });
    return max;
  }, [sourceCounts]);

  // Position breakdown counts
  const positionStats = useMemo(() => {
    return allPositions.map(pos => {
      const posApps = applications.filter(app => {
        if (app.job_id && app.job_id === pos.id) return true;
        if (app.job_title && app.job_title.toLowerCase().includes(pos.title.toLowerCase())) return true;
        return false;
      });

      const inPipeline = posApps.filter(a => {
        const s = a.stage || 'New CVs';
        return s !== 'Joined' && s !== 'Dropped' && s !== 'Parked';
      }).length;

      const joined = posApps.filter(a => a.stage === 'Joined').length;
      const dropped = posApps.filter(a => a.stage === 'Dropped').length;

      return {
        ...pos,
        inPipeline,
        joined,
        dropped
      };
    });
  }, [allPositions, applications]);

  // Filtered candidate list based on bar tap or search
  const filteredCandidates = useMemo(() => {
    return applications.filter(app => {
      if (selectedStage && (app.stage || 'New CVs') !== selectedStage) {
        return false;
      }
      if (selectedSource && (app.source || 'Website Application') !== selectedSource) {
        return false;
      }
      if (selectedPosition) {
        const matchesId = app.job_id === selectedPosition.id;
        const matchesTitle = app.job_title && app.job_title.toLowerCase().includes(selectedPosition.title.toLowerCase());
        if (!matchesId && !matchesTitle) return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const fullName = `${app.first_name || ''} ${app.last_name || ''}`.toLowerCase();
        const city = (app.city || '').toLowerCase();
        const qual = (app.qualification || '').toLowerCase();
        const role = (app.job_title || '').toLowerCase();
        const employer = (app.current_employer || '').toLowerCase();
        return fullName.includes(q) || city.includes(q) || qual.includes(q) || role.includes(q) || employer.includes(q);
      }
      return true;
    });
  }, [applications, selectedStage, selectedSource, selectedPosition, searchQuery]);

  // Handle stage change
  const handleStageChange = async (candidateId, newStage) => {
    try {
      await updateJobApplicationStage(candidateId, newStage);
      setApplications(prev => prev.map(a => a.id === candidateId ? { ...a, stage: newStage } : a));
      if (showNotification) showNotification(`Candidate stage updated to "${newStage}"`);
    } catch (err) {
      if (showNotification) showNotification('Failed to update stage', 'error');
    }
  };

  // Handle delete candidate
  const handleDeleteCandidate = async (candidateId, candidateName) => {
    if (window.confirm(`Are you sure you want to delete ${candidateName}?`)) {
      try {
        await deleteJobApplicationById(candidateId);
        setApplications(prev => prev.filter(a => a.id !== candidateId));
        if (candidateDetail?.id === candidateId) setCandidateDetail(null);
        if (showNotification) showNotification('Candidate removed');
      } catch (err) {
        if (showNotification) showNotification('Failed to delete candidate', 'error');
      }
    }
  };

  // Reset to initial 79 sample candidates
  const handleResetSampleData = () => {
    if (window.confirm('Reset candidate pool to the 79 demo candidates from the hiring dashboard screenshot?')) {
      const demo = generateInitialCandidates();
      localStorage.setItem('alphasure_job_applications', JSON.stringify(demo));
      setApplications(demo);
      setSelectedStage(null);
      setSelectedSource(null);
      setSelectedPosition(null);
      if (showNotification) showNotification('Reset candidate pipeline to 79 demo candidates');
    }
  };

  // Handle Add Candidate submit
  const handleAddCandidateSubmit = async (e) => {
    e.preventDefault();
    try {
      const created = await submitJobApplication({
        ...newCandidate,
        id: `app-custom-${Date.now()}`
      });
      setApplications(prev => [created, ...prev]);
      setIsAddCandidateOpen(false);
      setNewCandidate({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        city: 'Mumbai',
        qualification: 'Chartered Accountant (CA)',
        experienceYears: '3.0',
        dob: '15/08/1996',
        currentCtc: '8.5',
        currentEmployer: '',
        noticePeriod: '30 Days (1 Month)',
        resumeUrl: '',
        coverNote: '',
        stage: 'New CVs',
        source: 'Referral',
        jobTitle: 'Accountant'
      });
      if (showNotification) showNotification('New candidate added to pipeline');
    } catch (err) {
      if (showNotification) showNotification('Failed to add candidate', 'error');
    }
  };

  const clearAllFilters = () => {
    setSelectedStage(null);
    setSelectedSource(null);
    setSelectedPosition(null);
    setSearchQuery('');
  };

  const isFiltered = Boolean(selectedStage || selectedSource || selectedPosition || searchQuery);

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* ================= HEADER SECTION ================= */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B192C] tracking-tight">
            Hiring Dashboard
          </h2>
          <p className="text-slate-500 font-medium text-sm sm:text-base mt-1">
            Open positions and candidate status across every stage.
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            onClick={onRefresh}
            className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
            title="Refresh Data"
          >
            <RefreshCw size={14} className="text-slate-500" />
            <span>Refresh</span>
          </button>

          <button
            onClick={handleResetSampleData}
            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
            title="Reset to 79 sample candidates"
          >
            Reset Demo Data
          </button>

          <button
            onClick={() => setIsAddCandidateOpen(true)}
            className="px-4 py-2 rounded-xl bg-[#FA5A16] hover:bg-[#E04808] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-orange-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Plus size={16} />
            <span>Add Candidate</span>
          </button>
        </div>
      </div>

      {/* ================= 2-COLUMN HIRING DASHBOARD GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* ---------------- LEFT CARD: CANDIDATE PIPELINE & SOURCES ---------------- */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-8">
          
          {/* Section 1: Candidate Pipeline */}
          <div>
            <div className="mb-4">
              <h3 className="text-base sm:text-lg font-bold text-[#0B192C]">
                Candidate Pipeline
              </h3>
              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                Each candidate counted once at their current stage — tap a bar to see who.
              </p>
            </div>

            {/* Stages Stack */}
            <div className="space-y-2.5">
              {PIPELINE_STAGES.map((stage) => {
                const count = stageCounts[stage] || 0;
                const isSelected = selectedStage === stage;
                // Calculate relative bar percentage width (min 8% if count > 0)
                const widthPercent = count > 0 
                  ? Math.max(8, Math.round((count / maxPipelineCount) * 100)) 
                  : 0;

                return (
                  <div
                    key={stage}
                    onClick={() => {
                      setSelectedStage(prev => prev === stage ? null : stage);
                      setSelectedSource(null);
                      setSelectedPosition(null);
                    }}
                    className={`flex items-center gap-3 group cursor-pointer p-1 rounded-xl transition-all ${
                      isSelected ? 'bg-orange-50/80 ring-1 ring-orange-400/50' : 'hover:bg-slate-50'
                    }`}
                  >
                    {/* Stage Name */}
                    <span className={`w-24 text-xs font-semibold shrink-0 transition-colors ${
                      isSelected ? 'text-[#FA5A16] font-bold' : 'text-slate-600 group-hover:text-slate-900'
                    }`}>
                      {stage}
                    </span>

                    {/* Bar Track */}
                    <div className="h-8 bg-[#F1F5F9]/90 rounded-lg flex items-center relative overflow-hidden flex-1 border border-slate-100">
                      {count > 0 && (
                        <div
                          style={{ width: `${widthPercent}%` }}
                          className={`h-full bg-[#F59E0B] rounded-lg transition-all duration-500 flex items-center justify-end px-2.5 shadow-xs ${
                            isSelected ? 'ring-2 ring-orange-500' : ''
                          }`}
                        >
                          <span className="text-xs font-bold text-white leading-none">
                            {count}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Summary Line */}
            <p className="text-xs text-slate-400 font-medium mt-3.5 pl-1">
              {activeAndJoined} active/joined + {totalDropped} dropped = {totalCount} total
            </p>
          </div>

          {/* Section 2: Candidates by Source */}
          <div className="pt-2 border-t border-slate-100">
            <h3 className="text-base font-bold text-[#0B192C] mb-4">
              Candidates by Source
            </h3>

            <div className="space-y-2.5">
              {PIPELINE_SOURCES.map((source) => {
                const count = sourceCounts[source] || 0;
                const isSelected = selectedSource === source;
                const widthPercent = count > 0 
                  ? Math.max(8, Math.round((count / maxSourceCount) * 100)) 
                  : 0;

                return (
                  <div
                    key={source}
                    onClick={() => {
                      setSelectedSource(prev => prev === source ? null : source);
                      setSelectedStage(null);
                      setSelectedPosition(null);
                    }}
                    className={`flex items-center gap-3 group cursor-pointer p-1 rounded-xl transition-all ${
                      isSelected ? 'bg-indigo-50/80 ring-1 ring-indigo-400/50' : 'hover:bg-slate-50'
                    }`}
                  >
                    {/* Source Name */}
                    <span className={`w-24 text-xs font-semibold shrink-0 transition-colors ${
                      isSelected ? 'text-indigo-600 font-bold' : 'text-slate-600 group-hover:text-slate-900'
                    }`}>
                      {source}
                    </span>

                    {/* Bar Track */}
                    <div className="h-8 bg-[#F1F5F9]/90 rounded-lg flex items-center relative overflow-hidden flex-1 border border-slate-100">
                      {count > 0 && (
                        <div
                          style={{ width: `${widthPercent}%` }}
                          className={`h-full bg-[#6366F1] rounded-lg transition-all duration-500 flex items-center justify-end px-2.5 shadow-xs ${
                            isSelected ? 'ring-2 ring-indigo-500' : ''
                          }`}
                        >
                          <span className="text-xs font-bold text-white leading-none">
                            {count}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* ---------------- RIGHT CARD: POSITIONS — LIVE STATUS ---------------- */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm flex flex-col">
          
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-bold text-[#0B192C]">
              Positions — Live Status
            </h3>
            <span className="text-xs text-slate-400 font-medium">
              {positionStats.length} Roles Active
            </span>
          </div>

          {/* Position Rows */}
          <div className="divide-y divide-slate-100 flex-1">
            {positionStats.map((pos) => {
              const isSelected = selectedPosition?.id === pos.id;

              return (
                <div
                  key={pos.id}
                  onClick={() => {
                    setSelectedPosition(prev => prev?.id === pos.id ? null : pos);
                    setSelectedStage(null);
                    setSelectedSource(null);
                  }}
                  className={`py-4 transition-all cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    isSelected ? 'bg-orange-50/70 -mx-3 px-3 rounded-2xl ring-1 ring-orange-300' : 'hover:bg-slate-50/80 -mx-3 px-3 rounded-2xl'
                  }`}
                >
                  {/* Position Title & Subtitle */}
                  <div className="space-y-0.5">
                    <h4 className={`text-sm sm:text-base font-bold transition-colors ${
                      isSelected ? 'text-[#FA5A16]' : 'text-[#0B192C] group-hover:text-[#FA5A16]'
                    }`}>
                      {pos.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium">
                      {pos.company} • {pos.division} • {pos.location}
                    </p>
                  </div>

                  {/* Right Status Counters */}
                  <div className="flex items-center gap-3 sm:gap-4 text-xs font-bold shrink-0">
                    <span className="text-slate-800">
                      {pos.openCount} open
                    </span>
                    <span className="text-[#0284C7]">
                      {pos.inPipeline} in pipeline
                    </span>
                    <span className="text-[#16A34A]">
                      {pos.joined} joined
                    </span>
                    <span className="text-[#DC2626]">
                      {pos.dropped} dropped
                    </span>
                    <ChevronRight 
                      size={16} 
                      className={`text-slate-300 transition-transform ${
                        isSelected ? 'text-[#FA5A16] translate-x-0.5' : 'group-hover:text-slate-600'
                      }`} 
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* ================= INTERACTIVE CANDIDATE INSPECTION DRAWER/PANE ================= */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-5">
        
        {/* Inspector Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg font-bold text-[#0B192C]">
                Candidate Directory
              </h3>
              
              {/* Filter Badges */}
              {selectedStage && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">
                  Stage: {selectedStage}
                  <button onClick={() => setSelectedStage(null)} className="hover:text-amber-950">✕</button>
                </span>
              )}
              {selectedSource && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200 text-xs font-bold">
                  Source: {selectedSource}
                  <button onClick={() => setSelectedSource(null)} className="hover:text-indigo-950">✕</button>
                </span>
              )}
              {selectedPosition && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-[#FA5A16] border border-orange-200 text-xs font-bold">
                  Role: {selectedPosition.title}
                  <button onClick={() => setSelectedPosition(null)} className="hover:text-orange-950">✕</button>
                </span>
              )}
            </div>

            <p className="text-xs text-slate-500 mt-1">
              Showing {filteredCandidates.length} of {applications.length} candidates. Move candidates through stages with the dropdown.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search candidates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#FA5A16] focus:border-transparent outline-none"
              />
            </div>

            {isFiltered && (
              <button
                onClick={clearAllFilters}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer whitespace-nowrap"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Candidate Cards Grid */}
        {filteredCandidates.length === 0 ? (
          <div className="text-center py-12">
            <Users className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-700">No candidates found</h4>
            <p className="text-xs text-slate-400 mt-1">Try selecting another stage or clearing your search filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredCandidates.slice(0, 30).map((cand) => (
              <div
                key={cand.id}
                className="bg-[#FAF7F2]/50 hover:bg-white rounded-2xl p-4 border border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                {/* Top Row: Name & Stage Select */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-[#0B192C]">
                      {cand.first_name} {cand.last_name}
                    </h4>
                    <p className="text-xs font-medium text-[#FA5A16]">
                      {cand.job_title || 'General Opening'}
                    </p>
                  </div>

                  {/* Stage Dropdown */}
                  <select
                    value={cand.stage || 'New CVs'}
                    onChange={(e) => handleStageChange(cand.id, e.target.value)}
                    className="text-[11px] font-bold px-2 py-1 rounded-lg border border-slate-200 bg-white text-slate-700 focus:ring-1 focus:ring-[#FA5A16] outline-none cursor-pointer"
                  >
                    {PIPELINE_STAGES.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                    <option value="Dropped">Dropped</option>
                  </select>
                </div>

                {/* Candidate Specs Pills */}
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 bg-white/80 p-2.5 rounded-xl border border-slate-100">
                  <div>
                    <span className="text-slate-400 block font-normal">Source:</span>
                    <strong className="text-slate-800">{cand.source || 'Referral'}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-normal">City:</span>
                    <strong className="text-slate-800">{cand.city || '—'}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-normal">Experience:</span>
                    <strong className="text-slate-800">{cand.experience_years ? `${cand.experience_years} Yrs` : '—'}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-normal">Annual CTC:</span>
                    <strong className="text-slate-800">{cand.current_ctc ? `₹${cand.current_ctc}L` : '—'}</strong>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    {cand.phone && (
                      <a 
                        href={`tel:${cand.phone}`} 
                        className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                        title={cand.phone}
                      >
                        <Phone size={13} />
                      </a>
                    )}
                    {cand.email && (
                      <a 
                        href={`mailto:${cand.email}`} 
                        className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                        title={cand.email}
                      >
                        <Mail size={13} />
                      </a>
                    )}
                    {cand.resume_url && (
                      <a 
                        href={cand.resume_url} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-1 rounded-md text-[#FA5A16] hover:bg-orange-50"
                        title="Resume Link"
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCandidateDetail(cand)}
                      className="text-[11px] font-bold text-slate-600 hover:text-[#FA5A16] cursor-pointer"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleDeleteCandidate(cand.id, `${cand.first_name} ${cand.last_name}`)}
                      className="p-1 text-slate-300 hover:text-red-500 transition-colors cursor-pointer"
                      title="Delete Candidate"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredCandidates.length > 30 && (
          <p className="text-center text-xs text-slate-400 pt-2">
            Showing first 30 of {filteredCandidates.length} candidates. Use search or stage filters to narrow down.
          </p>
        )}

      </div>

      {/* ================= MODAL: ADD CANDIDATE ================= */}
      {isAddCandidateOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setIsAddCandidateOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 text-sm font-bold cursor-pointer"
            >
              ✕
            </button>

            <div className="mb-6">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#FA5A16]">
                Talent Pipeline
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C] mt-1">
                Add Candidate
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Manually record a candidate from referrals, walk-ins, agencies, or external portals.
              </p>
            </div>

            <form onSubmit={handleAddCandidateSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    required
                    value={newCandidate.firstName}
                    onChange={(e) => setNewCandidate({ ...newCandidate, firstName: e.target.value })}
                    placeholder="e.g. Rahul"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={newCandidate.lastName}
                    onChange={(e) => setNewCandidate({ ...newCandidate, lastName: e.target.value })}
                    placeholder="e.g. Sharma"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Target Position *</label>
                  <select
                    value={newCandidate.jobTitle}
                    onChange={(e) => setNewCandidate({ ...newCandidate, jobTitle: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] bg-white focus:ring-2 focus:ring-[#FA5A16] outline-none cursor-pointer"
                  >
                    {allPositions.map(p => (
                      <option key={p.id} value={p.title}>{p.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Initial Stage *</label>
                  <select
                    value={newCandidate.stage}
                    onChange={(e) => setNewCandidate({ ...newCandidate, stage: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] bg-white focus:ring-2 focus:ring-[#FA5A16] outline-none cursor-pointer"
                  >
                    {PIPELINE_STAGES.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Source *</label>
                  <select
                    value={newCandidate.source}
                    onChange={(e) => setNewCandidate({ ...newCandidate, source: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] bg-white focus:ring-2 focus:ring-[#FA5A16] outline-none cursor-pointer"
                  >
                    {PIPELINE_SOURCES.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">City *</label>
                  <input
                    type="text"
                    required
                    value={newCandidate.city}
                    onChange={(e) => setNewCandidate({ ...newCandidate, city: e.target.value })}
                    placeholder="e.g. Mumbai"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={newCandidate.email}
                    onChange={(e) => setNewCandidate({ ...newCandidate, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={newCandidate.phone}
                    onChange={(e) => setNewCandidate({ ...newCandidate, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Experience (In Yrs) *</label>
                  <input
                    type="number"
                    step="0.5"
                    min="0"
                    required
                    value={newCandidate.experienceYears}
                    onChange={(e) => setNewCandidate({ ...newCandidate, experienceYears: e.target.value })}
                    placeholder="3.5"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Annual CTC (In Lakhs) *</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    required
                    value={newCandidate.currentCtc}
                    onChange={(e) => setNewCandidate({ ...newCandidate, currentCtc: e.target.value })}
                    placeholder="8.5"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#FA5A16] hover:bg-[#E04808] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-orange-500/25 transition-all cursor-pointer"
                >
                  Save to Pipeline
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= MODAL: CANDIDATE DETAIL VIEW ================= */}
      {candidateDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto space-y-5"
          >
            <button
              onClick={() => setCandidateDetail(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 text-sm font-bold cursor-pointer"
            >
              ✕
            </button>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FA5A16]">
                Candidate Profile
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C] mt-1">
                {candidateDetail.first_name} {candidateDetail.last_name}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Applied for <span className="font-semibold text-slate-800">{candidateDetail.job_title}</span> • Source: {candidateDetail.source || 'Referral'}
              </p>
            </div>

            {/* Stage Selector */}
            <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#EBD6B8]/60 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">Pipeline Stage:</span>
              <select
                value={candidateDetail.stage || 'New CVs'}
                onChange={(e) => {
                  const newStage = e.target.value;
                  handleStageChange(candidateDetail.id, newStage);
                  setCandidateDetail(prev => ({ ...prev, stage: newStage }));
                }}
                className="text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-300 bg-white text-[#FA5A16] focus:ring-2 focus:ring-[#FA5A16] outline-none cursor-pointer"
              >
                {PIPELINE_STAGES.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
                <option value="Dropped">Dropped</option>
              </select>
            </div>

            {/* Detail Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-2xl">
              <div>
                <span className="text-slate-400 block font-medium">City:</span>
                <span className="font-bold text-[#0B192C]">{candidateDetail.city || '—'}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Date of Birth:</span>
                <span className="font-bold text-[#0B192C]">{candidateDetail.date_of_birth || '—'}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Qualification:</span>
                <span className="font-bold text-[#0B192C]">{candidateDetail.qualification || '—'}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Work Experience:</span>
                <span className="font-bold text-[#0B192C]">{candidateDetail.experience_years ? `${candidateDetail.experience_years} Years` : '—'}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Current Employer:</span>
                <span className="font-bold text-[#0B192C]">{candidateDetail.current_employer || '—'}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Annual CTC:</span>
                <span className="font-bold text-[#FA5A16]">{candidateDetail.current_ctc ? `₹${candidateDetail.current_ctc} Lakhs` : '—'}</span>
              </div>
              <div className="col-span-2">
                <span className="text-slate-400 block font-medium">Notice Period:</span>
                <span className="font-bold text-[#0B192C]">{candidateDetail.notice_period || '—'}</span>
              </div>
            </div>

            {/* Contact Actions */}
            <div className="space-y-2 pt-1">
              {candidateDetail.email && (
                <a
                  href={`mailto:${candidateDetail.email}`}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail size={14} className="text-[#FA5A16]" />
                  <span>Email: {candidateDetail.email}</span>
                </a>
              )}
              {candidateDetail.phone && (
                <a
                  href={`tel:${candidateDetail.phone}`}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone size={14} className="text-[#FA5A16]" />
                  <span>Call: {candidateDetail.phone}</span>
                </a>
              )}
              {candidateDetail.resume_url && (
                <a
                  href={candidateDetail.resume_url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-orange-50 hover:bg-orange-100 text-[#FA5A16] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <ExternalLink size={14} />
                  <span>View Resume / LinkedIn Link</span>
                </a>
              )}
            </div>

            <button
              onClick={() => setCandidateDetail(null)}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-[#FA5A16] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
