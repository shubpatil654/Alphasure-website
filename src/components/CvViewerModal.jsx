import React from 'react';
import { 
  X, Download, ExternalLink, FileText, Upload, Mail, Phone, 
  MapPin, Calendar, Briefcase, GraduationCap, IndianRupee, AlertCircle
} from 'lucide-react';

export default function CvViewerModal({
  isOpen,
  onClose,
  candidate,
  onOpenUploadForCandidate
}) {
  if (!isOpen || !candidate) return null;

  const resumeUrl = candidate.resume_data_url || candidate.resume_url || '';
  const fileName = candidate.resume_file_name || `${candidate.first_name}_${candidate.last_name}_Resume.pdf`;
  const fileSize = candidate.resume_file_size || '';
  const isPdf = resumeUrl.startsWith('data:application/pdf') || resumeUrl.toLowerCase().includes('.pdf');
  const isImage = resumeUrl.startsWith('data:image/') || /\.(png|jpg|jpeg|webp)$/i.test(resumeUrl);
  const isExternalUrl = /^https?:\/\//i.test(resumeUrl) && !resumeUrl.includes('.pdf');

  // Trigger file download
  const handleDownload = () => {
    if (!resumeUrl) return;

    if (resumeUrl.startsWith('data:')) {
      const a = document.createElement('a');
      a.href = resumeUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      window.open(resumeUrl, '_blank');
    }
  };

  const handleOpenNewTab = () => {
    if (!resumeUrl) return;
    if (resumeUrl.startsWith('data:')) {
      const win = window.open();
      if (win) {
        win.document.write(
          `<iframe src="${resumeUrl}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`
        );
      }
    } else {
      window.open(resumeUrl, '_blank');
    }
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-5 bg-black/75 backdrop-blur-md animate-fadeIn overflow-y-auto"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-4xl w-full h-[92vh] shadow-2xl relative border border-slate-200 flex flex-col overflow-hidden my-auto"
      >
        {/* Top Header */}
        <div className="px-5 py-4 bg-[#0B192C] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FA5A16] text-white flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg font-bold text-white">
                  {candidate.first_name} {candidate.last_name}
                </h3>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#FA5A16] text-white">
                  {candidate.job_title}
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                  {candidate.stage || 'New CVs'}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-3 flex-wrap">
                {candidate.city && <span>📍 {candidate.city}</span>}
                {candidate.experience_years && <span>💼 {candidate.experience_years} Yrs Exp</span>}
                {candidate.current_ctc && <span>💰 ₹{candidate.current_ctc}L CTC</span>}
                {fileSize && <span>📄 {fileSize}</span>}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            {resumeUrl && (
              <>
                <button
                  onClick={handleDownload}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Download Resume"
                >
                  <Download className="w-3.5 h-3.5 text-[#FA5A16]" />
                  <span className="hidden sm:inline">Download</span>
                </button>
                <button
                  onClick={handleOpenNewTab}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Open in new window"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
                  <span className="hidden sm:inline">Open Tab</span>
                </button>
              </>
            )}

            {onOpenUploadForCandidate && (
              <button
                onClick={() => {
                  onClose();
                  onOpenUploadForCandidate(candidate);
                }}
                className="px-3 py-1.5 rounded-xl bg-[#FA5A16] hover:bg-[#E04808] text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                title="Replace or upload a new CV document"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>{resumeUrl ? 'Replace CV' : 'Upload CV'}</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-sm font-bold transition-colors cursor-pointer ml-1"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Candidate Detail Bar */}
        <div className="bg-[#FAF7F2] border-b border-[#EBD6B8]/60 px-5 py-2.5 text-xs text-slate-700 flex items-center justify-between gap-4 flex-wrap shrink-0">
          <div className="flex items-center gap-4 flex-wrap">
            {candidate.email && (
              <a href={`mailto:${candidate.email}`} className="flex items-center gap-1.5 text-slate-700 hover:text-[#FA5A16] font-semibold">
                <Mail className="w-3.5 h-3.5 text-[#FA5A16]" />
                <span>{candidate.email}</span>
              </a>
            )}
            {candidate.phone && (
              <a href={`tel:${candidate.phone}`} className="flex items-center gap-1.5 text-slate-700 hover:text-[#FA5A16] font-semibold">
                <Phone className="w-3.5 h-3.5 text-[#FA5A16]" />
                <span>{candidate.phone}</span>
              </a>
            )}
            {candidate.current_employer && (
              <span className="text-slate-500">
                Employer: <strong className="text-slate-800">{candidate.current_employer}</strong>
              </span>
            )}
            {candidate.notice_period && (
              <span className="text-slate-500">
                Notice: <strong className="text-slate-800">{candidate.notice_period}</strong>
              </span>
            )}
          </div>

          <div className="text-[11px] text-slate-400 flex items-center gap-1.5 flex-wrap">
            <span>Source: <strong className="text-slate-600">{candidate.source || 'Admin Upload'}</strong></span>
            {candidate.referred_by && (
              <span className="px-2 py-0.5 rounded-full bg-orange-100 text-[#FA5A16] font-bold border border-orange-200">
                By: {candidate.referred_by}
              </span>
            )}
          </div>
        </div>

        {/* Main Content Preview Area */}
        <div className="flex-1 bg-slate-100 p-3 sm:p-4 overflow-hidden flex flex-col">
          {!resumeUrl ? (
            <div className="flex-1 bg-white rounded-2xl border border-slate-200 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-3xl bg-orange-50 text-[#FA5A16] flex items-center justify-center mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-[#0B192C]">No CV Document Uploaded</h4>
              <p className="text-xs text-slate-500 max-w-sm mt-1">
                There is no resume file attached to {candidate.first_name} {candidate.last_name}'s profile yet.
              </p>
              {onOpenUploadForCandidate && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenUploadForCandidate(candidate);
                  }}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-[#FA5A16] hover:bg-[#E04808] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-orange-500/25 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload Candidate CV Now</span>
                </button>
              )}
            </div>
          ) : isPdf ? (
            <div className="flex-1 w-full h-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
              <iframe
                src={resumeUrl}
                title={`${candidate.first_name} Resume`}
                className="w-full flex-1 border-0 rounded-2xl"
              />
            </div>
          ) : isImage ? (
            <div className="flex-1 w-full h-full bg-slate-900 rounded-2xl overflow-auto p-4 flex items-center justify-center">
              <img
                src={resumeUrl}
                alt={`${candidate.first_name} Resume`}
                className="max-h-full max-w-full object-contain rounded-lg shadow-xl"
              />
            </div>
          ) : (
            <div className="flex-1 bg-white rounded-2xl border border-slate-200 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-3xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-[#0B192C]">{fileName}</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-sm">
                This document is formatted as a Word / external file or external web profile.
              </p>
              <div className="flex items-center gap-3 mt-5">
                <button
                  onClick={handleDownload}
                  className="px-5 py-2.5 rounded-xl bg-[#FA5A16] hover:bg-[#E04808] text-white text-xs font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Document</span>
                </button>
                {isExternalUrl && (
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open External Profile</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Notes if any */}
        {candidate.cover_note && (
          <div className="px-5 py-2.5 bg-white border-t border-slate-200 text-xs text-slate-600 shrink-0">
            <span className="font-bold text-[#0B192C]">Remarks / Note:</span> {candidate.cover_note}
          </div>
        )}

      </div>
    </div>
  );
}
