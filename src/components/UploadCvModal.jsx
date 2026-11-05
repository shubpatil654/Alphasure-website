import React, { useState, useRef, useEffect } from 'react';
import { 
  UploadCloud, FileText, CheckCircle2, AlertCircle, X, Trash2, 
  Sparkles, User, Briefcase, Mail, Phone, MapPin, IndianRupee, 
  GraduationCap, Calendar, Clock, ArrowRight, Layers, FileUp, Loader2, UserCheck
} from 'lucide-react';
import { 
  fileToBase64, 
  formatFileSize, 
  parseCandidateFromFileName, 
  uploadResumeToSupabaseStorage, 
  submitJobApplication,
  attachCvToCandidate
} from '../lib/supabase';
import { PIPELINE_STAGES, PIPELINE_SOURCES, INITIAL_HIRING_POSITIONS } from '../data/hiringData';

export default function UploadCvModal({
  isOpen,
  onClose,
  onSuccess,
  jobs = [],
  existingCandidate = null,
  showNotification
}) {
  const fileInputRef = useRef(null);
  const multiFileInputRef = useRef(null);

  // Mode: 'single' (Add Candidate + CV) or 'batch' (Bulk CVs) or 'attach' (existing candidate)
  const isAttachMode = Boolean(existingCandidate);
  const [activeMode, setActiveMode] = useState(isAttachMode ? 'attach' : 'single');

  // Single Upload State
  const [cvFile, setCvFile] = useState(null);
  const [cvDataUrl, setCvDataUrl] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [autoFilledNotice, setAutoFilledNotice] = useState(false);

  // Candidate Form Fields
  const [candidateForm, setCandidateForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: 'Accountant',
    customJobTitle: '',
    stage: 'New CVs',
    source: 'Admin Upload',
    referredBy: '',
    city: 'Mumbai',
    experienceYears: '2.5',
    currentCtc: '6.5',
    qualification: 'Chartered Accountant (CA)',
    currentEmployer: '',
    noticePeriod: '30 Days (1 Month)',
    coverNote: '',
    resumeUrl: ''
  });

  // Batch Upload State
  const [batchFiles, setBatchFiles] = useState([]); // array of { file, name, size, type, dataUrl, candidateName, jobTitle }
  const [batchJobTitle, setBatchJobTitle] = useState('Accountant');
  const [batchSource, setBatchSource] = useState('Admin Upload');
  const [batchReferredBy, setBatchReferredBy] = useState('');
  const [batchStage, setBatchStage] = useState('New CVs');
  const [batchProgress, setBatchProgress] = useState({ current: 0, total: 0 });

  // Source checks for conditional "By Whom" field (available in render and handlers)
  const isReferralOrWhatsapp = Boolean(
    candidateForm.source && (
      candidateForm.source.toLowerCase().includes('referral') || 
      candidateForm.source.toLowerCase().includes('whatsapp')
    )
  );

  const isBatchReferralOrWhatsapp = Boolean(
    batchSource && (
      batchSource.toLowerCase().includes('referral') || 
      batchSource.toLowerCase().includes('whatsapp')
    )
  );

  // Pre-fill if editing / attaching to an existing candidate
  useEffect(() => {
    if (existingCandidate) {
      setCandidateForm({
        firstName: existingCandidate.first_name || '',
        lastName: existingCandidate.last_name || '',
        email: existingCandidate.email || '',
        phone: existingCandidate.phone || '',
        jobTitle: existingCandidate.job_title || 'Accountant',
        customJobTitle: '',
        stage: existingCandidate.stage || 'New CVs',
        source: existingCandidate.source || 'Admin Upload',
        referredBy: existingCandidate.referred_by || existingCandidate.referredBy || '',
        city: existingCandidate.city || 'Mumbai',
        experienceYears: existingCandidate.experience_years || '2.5',
        currentCtc: existingCandidate.current_ctc || '6.5',
        qualification: existingCandidate.qualification || 'Chartered Accountant (CA)',
        currentEmployer: existingCandidate.current_employer || '',
        noticePeriod: existingCandidate.notice_period || '30 Days (1 Month)',
        coverNote: existingCandidate.cover_note || '',
        resumeUrl: existingCandidate.resume_url || ''
      });
      setActiveMode('attach');
    } else {
      setActiveMode('single');
      setCvFile(null);
      setCvDataUrl('');
    }
  }, [existingCandidate, isOpen]);

  // Combine roles from DB jobs + initial positions
  const availablePositions = React.useMemo(() => {
    const list = [...(INITIAL_HIRING_POSITIONS || []).map(p => p.title)];
    (jobs || []).forEach(j => {
      if (j && j.title && !list.includes(j.title)) list.push(j.title);
    });
    // Add common professional accounting roles
    const standard = [
      'Accountant',
      'Senior Chartered Accountant (CA) - Advisory',
      'Tax & Compliance Associate (GST & TDS)',
      'Corporate Secretarial & ROC Executive',
      'Senior Accountant - US Accounting',
      'Junior Accountant & Bookkeeper',
      'Financial Controller & MIS Specialist',
      'Audit & Assurance Manager',
      'Other (Specify Custom)'
    ];
    standard.forEach(r => {
      if (!list.includes(r)) list.push(r);
    });
    return list;
  }, [jobs]);

  if (!isOpen) return null;

  // Handle file drop / selection
  const handleFileProcess = async (file) => {
    if (!file) return;

    // Check size limit: 15MB
    if (file.size > 15 * 1024 * 1024) {
      if (showNotification) showNotification('File too large. Maximum supported size is 15MB.', 'error');
      return;
    }

    try {
      const dataUrl = await fileToBase64(file);
      setCvFile(file);
      setCvDataUrl(dataUrl);

      // Smart Name & Title extraction if fields are empty
      if (!isAttachMode && (!candidateForm.firstName.trim() || !candidateForm.lastName.trim())) {
        const parsed = parseCandidateFromFileName(file.name);
        if (parsed.firstName) {
          setCandidateForm(prev => ({
            ...prev,
            firstName: prev.firstName || parsed.firstName,
            lastName: prev.lastName || parsed.lastName,
            jobTitle: parsed.jobTitle && availablePositions.includes(parsed.jobTitle) 
              ? parsed.jobTitle 
              : prev.jobTitle
          }));
          setAutoFilledNotice(true);
          setTimeout(() => setAutoFilledNotice(false), 4500);
        }
      }
    } catch (err) {
      console.error('File reading error:', err);
      if (showNotification) showNotification('Could not read file. Please try another document.', 'error');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileProcess(e.dataTransfer.files[0]);
    }
  };

  // Batch files processing
  const handleBatchFilesAdd = async (files) => {
    const validFiles = Array.from(files).filter(f => f.size <= 15 * 1024 * 1024);
    if (validFiles.length < files.length && showNotification) {
      showNotification('Some files exceeded the 15MB limit and were skipped.', 'error');
    }

    const processedList = [];
    for (const f of validFiles) {
      try {
        const dataUrl = await fileToBase64(f);
        const parsed = parseCandidateFromFileName(f.name);
        processedList.push({
          file: f,
          name: f.name,
          size: formatFileSize(f.size),
          type: f.type,
          dataUrl,
          candidateFirstName: parsed.firstName || 'Candidate',
          candidateLastName: parsed.lastName || '',
          id: `batch-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`
        });
      } catch (err) {
        console.warn('Failed to read file in batch:', f.name, err);
      }
    }

    setBatchFiles(prev => [...prev, ...processedList]);
  };

  const handleBatchDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleBatchFilesAdd(e.dataTransfer.files);
    }
  };

  // Submit Single Candidate + CV
  const handleSingleSubmit = async (e) => {
    e.preventDefault();

    if (!candidateForm.firstName.trim() || !candidateForm.lastName.trim()) {
      if (showNotification) showNotification('Please enter candidate first and last name.', 'error');
      return;
    }

    if (isReferralOrWhatsapp && !candidateForm.referredBy.trim()) {
      if (showNotification) showNotification('Please enter the name of the person who referred or sent the CV (By Whom).', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const chosenTitle = candidateForm.jobTitle === 'Other (Specify Custom)' && candidateForm.customJobTitle.trim()
        ? candidateForm.customJobTitle.trim()
        : candidateForm.jobTitle;

      let storageUrl = null;
      if (cvFile) {
        // Attempt Supabase storage upload for a permanent public URL
        storageUrl = await uploadResumeToSupabaseStorage(cvFile);
      }

      const finalResumeUrl = storageUrl || cvDataUrl || candidateForm.resumeUrl || '';

      if (isAttachMode && existingCandidate) {
        // Update existing candidate
        const updates = {
          resume_url: finalResumeUrl,
          resume_file_name: cvFile ? cvFile.name : existingCandidate.resume_file_name || '',
          resume_file_size: cvFile ? formatFileSize(cvFile.size) : existingCandidate.resume_file_size || '',
          resume_file_type: cvFile ? cvFile.type : existingCandidate.resume_file_type || '',
          resume_data_url: cvDataUrl || existingCandidate.resume_data_url || '',
          cover_note: candidateForm.coverNote || existingCandidate.cover_note || '',
          stage: candidateForm.stage || existingCandidate.stage || 'New CVs',
          source: candidateForm.source || existingCandidate.source || 'Admin Upload',
          referred_by: isReferralOrWhatsapp ? candidateForm.referredBy.trim() : (existingCandidate.referred_by || '')
        };

        await attachCvToCandidate(existingCandidate.id, {
          file: cvFile,
          resumeUrl: finalResumeUrl,
          fileName: updates.resume_file_name,
          fileSize: updates.resume_file_size,
          fileType: updates.resume_file_type,
          dataUrl: cvDataUrl,
          referredBy: updates.referred_by,
          source: updates.source,
          coverNote: updates.cover_note,
          stage: updates.stage
        });

        if (showNotification) showNotification(`CV attached to ${existingCandidate.first_name} ${existingCandidate.last_name} successfully!`);
        if (onSuccess) onSuccess({ ...existingCandidate, ...updates });
        onClose();
        return;
      }

      // Add New Candidate
      const newCandidatePayload = {
        firstName: candidateForm.firstName.trim(),
        lastName: candidateForm.lastName.trim(),
        email: candidateForm.email.trim() || `${candidateForm.firstName.toLowerCase()}.${candidateForm.lastName.toLowerCase()}@candidate.in`,
        phone: candidateForm.phone.trim() || '+91 98000 00000',
        jobTitle: chosenTitle,
        stage: candidateForm.stage,
        source: candidateForm.source,
        referred_by: isReferralOrWhatsapp ? candidateForm.referredBy.trim() : '',
        city: candidateForm.city,
        experienceYears: candidateForm.experienceYears,
        currentCtc: candidateForm.currentCtc,
        qualification: candidateForm.qualification,
        currentEmployer: candidateForm.currentEmployer,
        noticePeriod: candidateForm.noticePeriod,
        coverNote: candidateForm.coverNote,
        resumeUrl: finalResumeUrl,
        resumeFileName: cvFile ? cvFile.name : '',
        resumeFileSize: cvFile ? formatFileSize(cvFile.size) : '',
        resumeFileType: cvFile ? cvFile.type : '',
        resumeDataUrl: cvDataUrl
      };

      const created = await submitJobApplication(newCandidatePayload);
      if (showNotification) showNotification(`Candidate ${created.first_name} ${created.last_name} added with CV!`);
      if (onSuccess) onSuccess(created);
      onClose();
    } catch (err) {
      console.error('Error saving candidate:', err);
      if (showNotification) showNotification(err.message || 'Error uploading candidate CV', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Submit Batch Upload
  const handleBatchSubmit = async () => {
    if (batchFiles.length === 0) {
      if (showNotification) showNotification('Please add at least one CV file to upload.', 'error');
      return;
    }

    if (isBatchReferralOrWhatsapp && !batchReferredBy.trim()) {
      if (showNotification) showNotification('Please enter the name of the person who referred or sent the CVs (By Whom).', 'error');
      return;
    }

    setIsSubmitting(true);
    setBatchProgress({ current: 0, total: batchFiles.length });

    const addedList = [];
    for (let i = 0; i < batchFiles.length; i++) {
      const item = batchFiles[i];
      setBatchProgress({ current: i + 1, total: batchFiles.length });

      try {
        let storageUrl = null;
        if (item.file) {
          storageUrl = await uploadResumeToSupabaseStorage(item.file);
        }

        const finalResumeUrl = storageUrl || item.dataUrl || '';

        const payload = {
          firstName: item.candidateFirstName,
          lastName: item.candidateLastName || 'Candidate',
          email: `${item.candidateFirstName.toLowerCase()}.${Date.now().toString().slice(-4)}@candidate.in`,
          phone: '+91 98000 00000',
          jobTitle: batchJobTitle,
          stage: batchStage,
          source: batchSource,
          referred_by: isBatchReferralOrWhatsapp ? batchReferredBy.trim() : '',
          city: 'Mumbai',
          experienceYears: '2.0',
          currentCtc: '5.0',
          qualification: 'Chartered Accountant / B.Com',
          currentEmployer: 'Accounting Firm',
          noticePeriod: '30 Days',
          coverNote: `Direct batch uploaded CV from file: ${item.name}${isBatchReferralOrWhatsapp && batchReferredBy ? ` (Referred/Sent By: ${batchReferredBy})` : ''}`,
          resumeUrl: finalResumeUrl,
          resumeFileName: item.name,
          resumeFileSize: item.size,
          resumeFileType: item.type,
          resumeDataUrl: item.dataUrl
        };

        const created = await submitJobApplication(payload);
        addedList.push(created);
      } catch (err) {
        console.warn('Error processing batch item:', item.name, err);
      }
    }

    setIsSubmitting(false);
    if (showNotification) {
      showNotification(`Successfully uploaded and added ${addedList.length} candidate CVs to ${batchStage}!`);
    }
    if (onSuccess && addedList.length > 0) {
      onSuccess(addedList[0]);
    }
    onClose();
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-md animate-fadeIn overflow-y-auto"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-2xl w-full p-5 sm:p-7 shadow-2xl relative border border-slate-100 max-h-[92vh] flex flex-col my-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 text-sm font-bold transition-all cursor-pointer z-10"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="mb-4 pr-10">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FA5A16] px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200/60 inline-flex items-center gap-1">
              <FileUp className="w-3 h-3" />
              <span>Admin Talent Center</span>
            </span>
            {isAttachMode && (
              <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                Updating CV for {existingCandidate?.first_name} {existingCandidate?.last_name}
              </span>
            )}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C] mt-1.5 flex items-center gap-2">
            {isAttachMode ? 'Upload / Replace Candidate CV' : 'Upload CV & Add Candidate'}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {isAttachMode 
              ? 'Attach a new CV or resume document for this candidate profile.'
              : 'Upload candidate resumes (PDF / Word) directly into your talent pipeline.'}
          </p>
        </div>

        {/* Mode Switcher Tabs (Only if not in existing candidate attach mode) */}
        {!isAttachMode && (
          <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-2xl mb-4 shrink-0">
            <button
              type="button"
              onClick={() => setActiveMode('single')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeMode === 'single'
                  ? 'bg-white text-[#0B192C] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <User className="w-3.5 h-3.5 text-[#FA5A16]" />
              <span>Single Candidate + CV</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveMode('batch')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeMode === 'batch'
                  ? 'bg-white text-[#0B192C] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#FA5A16]" />
              <span>Quick Batch CV Upload</span>
            </button>
          </div>
        )}

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-4">

          {/* ================= MODE: SINGLE CANDIDATE + CV ================= */}
          {(activeMode === 'single' || activeMode === 'attach') && (
            <form onSubmit={handleSingleSubmit} className="space-y-4">
              
              {/* Drag & Drop File Zone */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700">
                  Candidate CV / Resume File *
                </label>

                {!cvFile ? (
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                      isDragOver
                        ? 'border-[#FA5A16] bg-orange-50/70 scale-[1.01]'
                        : 'border-slate-300 hover:border-[#FA5A16] hover:bg-orange-50/30'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          handleFileProcess(e.target.files[0]);
                        }
                      }}
                    />
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FA5A16] flex items-center justify-center mx-auto mb-2 shadow-xs">
                      <UploadCloud className="w-6 h-6" />
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-[#0B192C]">
                      Drag & Drop CV file here, or <span className="text-[#FA5A16] underline">browse</span>
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Supports PDF, DOC, DOCX, PNG, JPG (up to 15MB)
                    </p>
                  </div>
                ) : (
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FA5A16] flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-[#0B192C] truncate" title={cvFile.name}>
                          {cvFile.name}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          {formatFileSize(cvFile.size)} • {cvFile.type.split('/')[1]?.toUpperCase() || 'DOCUMENT'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="px-2.5 py-1 text-xs font-bold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors cursor-pointer"
                      >
                        Change
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setCvFile(null);
                          setCvDataUrl('');
                        }}
                        className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                        title="Remove File"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          handleFileProcess(e.target.files[0]);
                        }
                      }}
                    />
                  </div>
                )}

                {/* Auto-fill notification alert */}
                {autoFilledNotice && (
                  <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs text-emerald-800 animate-fadeIn">
                    <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Auto-extracted candidate name from resume filename!</span>
                  </div>
                )}
              </div>

              {/* Candidate Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    required
                    value={candidateForm.firstName}
                    onChange={(e) => setCandidateForm({ ...candidateForm, firstName: e.target.value })}
                    placeholder="e.g. Rahul"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={candidateForm.lastName}
                    onChange={(e) => setCandidateForm({ ...candidateForm, lastName: e.target.value })}
                    placeholder="e.g. Verma"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Target Position *</label>
                  <select
                    value={candidateForm.jobTitle}
                    onChange={(e) => setCandidateForm({ ...candidateForm, jobTitle: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#0B192C] bg-white focus:ring-2 focus:ring-[#FA5A16] outline-none cursor-pointer"
                  >
                    {availablePositions.map(pos => (
                      <option key={pos} value={pos}>{pos}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Initial Pipeline Stage</label>
                  <select
                    value={candidateForm.stage}
                    onChange={(e) => setCandidateForm({ ...candidateForm, stage: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#0B192C] bg-white focus:ring-2 focus:ring-[#FA5A16] outline-none cursor-pointer"
                  >
                    {PIPELINE_STAGES.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {candidateForm.jobTitle === 'Other (Specify Custom)' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Specify Custom Position *</label>
                  <input
                    type="text"
                    required
                    value={candidateForm.customJobTitle}
                    onChange={(e) => setCandidateForm({ ...candidateForm, customJobTitle: e.target.value })}
                    placeholder="e.g. International Tax Manager"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={candidateForm.email}
                    onChange={(e) => setCandidateForm({ ...candidateForm, email: e.target.value })}
                    placeholder="e.g. rahul@example.com"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={candidateForm.phone}
                    onChange={(e) => setCandidateForm({ ...candidateForm, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Location / City</label>
                  <input
                    type="text"
                    value={candidateForm.city}
                    onChange={(e) => setCandidateForm({ ...candidateForm, city: e.target.value })}
                    placeholder="Mumbai"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Experience (Yrs)</label>
                  <input
                    type="number"
                    step="0.5"
                    min="0"
                    value={candidateForm.experienceYears}
                    onChange={(e) => setCandidateForm({ ...candidateForm, experienceYears: e.target.value })}
                    placeholder="3.0"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Current CTC (₹ Lakhs)</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    value={candidateForm.currentCtc}
                    onChange={(e) => setCandidateForm({ ...candidateForm, currentCtc: e.target.value })}
                    placeholder="7.5"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Source</label>
                  <select
                    value={candidateForm.source}
                    onChange={(e) => setCandidateForm({ ...candidateForm, source: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#0B192C] bg-white focus:ring-2 focus:ring-[#FA5A16] outline-none cursor-pointer"
                  >
                    <option value="Admin Upload">Admin Upload (Direct)</option>
                    <option value="Referral">Referral</option>
                    <option value="WhatsApp / Email CV">WhatsApp / Email CV</option>
                    {PIPELINE_SOURCES.filter(s => s !== 'Referral').map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                    <option value="Direct Walk-in">Direct Walk-in</option>
                  </select>
                </div>

                {isReferralOrWhatsapp ? (
                  <div className="animate-fadeIn">
                    <label className="block text-xs font-bold text-[#FA5A16] mb-1 flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5 text-[#FA5A16]" />
                      <span>By Whom *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={candidateForm.referredBy}
                      onChange={(e) => setCandidateForm({ ...candidateForm, referredBy: e.target.value })}
                      placeholder={(candidateForm.source || '').toLowerCase().includes('whatsapp') ? "Person who sent via WhatsApp (e.g. Ramesh Patel)" : "Person who referred (e.g. Anand Sharma - Director)"}
                      className="w-full px-3.5 py-2 rounded-xl border-2 border-orange-400 bg-orange-50/60 text-xs sm:text-sm text-[#0B192C] font-semibold focus:ring-2 focus:ring-[#FA5A16] focus:bg-white outline-none transition-all shadow-xs"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Current Employer</label>
                    <input
                      type="text"
                      value={candidateForm.currentEmployer}
                      onChange={(e) => setCandidateForm({ ...candidateForm, currentEmployer: e.target.value })}
                      placeholder="e.g. KPMG, Local CA Firm"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                    />
                  </div>
                )}
              </div>

              {isReferralOrWhatsapp && (
                <div className="animate-fadeIn">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Current Employer</label>
                  <input
                    type="text"
                    value={candidateForm.currentEmployer}
                    onChange={(e) => setCandidateForm({ ...candidateForm, currentEmployer: e.target.value })}
                    placeholder="e.g. KPMG, Local CA Firm"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Interviewer / Admin Remarks</label>
                <textarea
                  rows="2"
                  value={candidateForm.coverNote}
                  onChange={(e) => setCandidateForm({ ...candidateForm, coverNote: e.target.value })}
                  placeholder="e.g. Strong in GST filings, recommended by senior partner, available for immediate interview..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FA5A16] to-[#FF7A3D] hover:from-[#E04808] hover:to-[#FA5A16] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-orange-500/25 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Saving Candidate &amp; Uploading CV...</span>
                    </>
                  ) : (
                    <>
                      <FileUp className="w-4 h-4" />
                      <span>{isAttachMode ? 'Save & Attach CV' : 'Save Candidate with CV'}</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

          {/* ================= MODE: BATCH MULTI-CV UPLOAD ================= */}
          {activeMode === 'batch' && !isAttachMode && (
            <div className="space-y-4">
              
              <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-3.5 text-xs text-amber-900 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Rapid Multi-CV Ingestion</p>
                  <p className="text-amber-800/90 text-[11px] mt-0.5">
                    Drop multiple PDF or Word resumes at once. Candidate names are automatically parsed from filenames and added directly to the selected pipeline stage.
                  </p>
                </div>
              </div>

              {/* Batch Settings */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Target Position</label>
                  <select
                    value={batchJobTitle}
                    onChange={(e) => setBatchJobTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold text-[#0B192C] bg-white focus:ring-2 focus:ring-[#FA5A16] outline-none"
                  >
                    {availablePositions.filter(p => p !== 'Other (Specify Custom)').map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Pipeline Stage</label>
                  <select
                    value={batchStage}
                    onChange={(e) => setBatchStage(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold text-[#0B192C] bg-white focus:ring-2 focus:ring-[#FA5A16] outline-none"
                  >
                    {PIPELINE_STAGES.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Source</label>
                  <select
                    value={batchSource}
                    onChange={(e) => setBatchSource(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold text-[#0B192C] bg-white focus:ring-2 focus:ring-[#FA5A16] outline-none"
                  >
                    <option value="Admin Upload">Admin Upload</option>
                    <option value="Referral">Referral</option>
                    <option value="WhatsApp / Email CV">WhatsApp / Email CV</option>
                    <option value="Agency">Agency</option>
                    <option value="Job Portal">Job Portal</option>
                  </select>
                </div>
              </div>

              {/* If batch source is Referral or WhatsApp */}
              {isBatchReferralOrWhatsapp && (
                <div className="animate-fadeIn">
                  <label className="block text-xs font-bold text-[#FA5A16] mb-1 flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-[#FA5A16]" />
                    <span>By Whom (Referred By / Sent By) *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={batchReferredBy}
                    onChange={(e) => setBatchReferredBy(e.target.value)}
                    placeholder={(batchSource || '').toLowerCase().includes('whatsapp') ? "Name of person who sent via WhatsApp (e.g. Ramesh Patel)" : "Name of person who referred (e.g. Anand Sharma - Director)"}
                    className="w-full px-3.5 py-2 rounded-xl border-2 border-orange-400 bg-orange-50/60 text-xs sm:text-sm text-[#0B192C] font-semibold focus:ring-2 focus:ring-[#FA5A16] focus:bg-white outline-none"
                  />
                </div>
              )}

              {/* Multi-file Dropzone */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleBatchDrop}
                onClick={() => multiFileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                  isDragOver
                    ? 'border-[#FA5A16] bg-orange-50/70 scale-[1.01]'
                    : 'border-slate-300 hover:border-[#FA5A16] hover:bg-orange-50/30'
                }`}
              >
                <input
                  ref={multiFileInputRef}
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      handleBatchFilesAdd(e.target.files);
                    }
                  }}
                />
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FA5A16] flex items-center justify-center mx-auto mb-2 shadow-xs">
                  <Layers className="w-6 h-6" />
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#0B192C]">
                  Drop multiple CV files here, or <span className="text-[#FA5A16] underline">browse files</span>
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Supports multiple PDFs, Word documents at once
                </p>
              </div>

              {/* Batch Files List */}
              {batchFiles.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                    <span>Selected Resumes ({batchFiles.length})</span>
                    <button
                      type="button"
                      onClick={() => setBatchFiles([])}
                      className="text-red-500 hover:underline font-normal cursor-pointer"
                    >
                      Clear All
                    </button>
                  </div>

                  <div className="max-h-48 overflow-y-auto space-y-1.5 divide-y divide-slate-100 bg-slate-50 p-2.5 rounded-2xl border border-slate-200">
                    {batchFiles.map((item, idx) => (
                      <div key={item.id} className="pt-1.5 first:pt-0 flex items-center justify-between gap-2 text-xs">
                        <div className="flex items-center gap-2 min-w-0">
                          <FileText className="w-4 h-4 text-[#FA5A16] shrink-0" />
                          <span className="font-semibold text-slate-800 truncate" title={item.name}>
                            {item.name}
                          </span>
                          <span className="text-[10px] text-slate-400 shrink-0">
                            ({item.size})
                          </span>
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded shrink-0">
                            Candidate: {item.candidateFirstName} {item.candidateLastName}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setBatchFiles(prev => prev.filter(f => f.id !== item.id))}
                          className="text-slate-400 hover:text-red-500 p-1 cursor-pointer shrink-0"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleBatchSubmit}
                    className="w-full py-3 rounded-xl bg-[#FA5A16] hover:bg-[#E04808] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-orange-500/25 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Processing {batchProgress.current} of {batchProgress.total} CVs...</span>
                      </>
                    ) : (
                      <>
                        <FileUp className="w-4 h-4" />
                        <span>Add All {batchFiles.length} Candidates to Pipeline</span>
                      </>
                    )}
                  </button>
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
