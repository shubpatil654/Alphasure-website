import React, { useState, useEffect, useMemo } from 'react';
import { 
  ShieldCheck, Lock, LogOut, Plus, Trash2, Edit3, Eye, 
  Search, CheckCircle2, AlertCircle, RefreshCw, Database, 
  Briefcase, FileText, ArrowLeft, ExternalLink, Sparkles, X, ChevronRight, Globe,
  Users, Phone, Mail, Calendar, MapPin, GraduationCap, IndianRupee, BarChart3
} from 'lucide-react';
import { 
  getSupabase, isSupabaseConfigured, saveSupabaseCredentials, 
  clearSupabaseCredentials, fetchAllBlogs, createBlog, deleteBlogById, 
  fetchAllJobs, createJob, updateJobStatus, deleteJobById, seedDatabaseIfEmpty,
  testSupabaseConnection, normalizeUrl,
  fetchAllJobApplications, deleteJobApplicationById
} from '../lib/supabase';
import HiringDashboard from './HiringDashboard';

export default function AdminPage({ onNavigate }) {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('alphasure_admin_logged_in') === 'true';
  });
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Active Admin Tab
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'blogs' | 'jobs' | 'applications' | 'database'

  // Data State
  const [blogs, setBlogs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [notification, setNotification] = useState(null);

  // Search & Filter State
  const [blogSearch, setBlogSearch] = useState('');
  const [blogCategoryFilter, setBlogCategoryFilter] = useState('All');
  const [jobSearch, setJobSearch] = useState('');
  const [jobDeptFilter, setJobDeptFilter] = useState('All');
  const [appSearch, setAppSearch] = useState('');
  const [selectedApp, setSelectedApp] = useState(null);

  // Modal State
  const [isAddBlogOpen, setIsAddBlogOpen] = useState(false);
  const [isAddJobOpen, setIsAddJobOpen] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null); // { type: 'blog' | 'job', id: string, title: string }
  const [isSubmitting, setIsSubmitting] = useState(false);

  // New Blog Form
  const [newBlog, setNewBlog] = useState({
    title: '',
    category: 'Accounting',
    readTime: '5 min read',
    excerpt: '',
    content: ''
  });

  // New Job Form
  const [newJob, setNewJob] = useState({
    title: '',
    department: 'Accounting & Advisory',
    location: 'Mumbai (Hybrid)',
    type: 'Full-time',
    experience: '2-4 Years',
    description: '',
    responsibilities: '',
    requirements: ''
  });

  // Supabase Credentials Settings
  const [supabaseUrl, setSupabaseUrl] = useState(
    import.meta.env.VITE_SUPABASE_URL || localStorage.getItem('alphasure_supabase_url') || ''
  );
  const [supabaseAnonKey, setSupabaseAnonKey] = useState(
    import.meta.env.VITE_SUPABASE_ANON_KEY || localStorage.getItem('alphasure_supabase_anon_key') || ''
  );
  const [isSeeding, setIsSeeding] = useState(false);
  const [diagnosticResult, setDiagnosticResult] = useState(null);
  const [isRunningDiagnostics, setIsRunningDiagnostics] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);

  // Trigger Notification helper
  const showNotification = (msg, type = 'success') => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 4000);
  };

  // Run Supabase Diagnostics
  const handleRunDiagnostics = async () => {
    setIsRunningDiagnostics(true);
    setDiagnosticResult(null);
    try {
      const res = await testSupabaseConnection(supabaseUrl, supabaseAnonKey);
      setDiagnosticResult(res);
      if (res.success) {
        showNotification('Diagnostics passed! Full CRUD permissions verified.');
      } else {
        showNotification(res.message, 'error');
      }
    } catch (err) {
      setDiagnosticResult({ success: false, message: err.message });
      showNotification(err.message, 'error');
    } finally {
      setIsRunningDiagnostics(false);
    }
  };

  // Load Data
  const loadAllData = async () => {
    setLoadingData(true);
    try {
      const [fetchedBlogs, fetchedJobs, fetchedApps] = await Promise.all([
        fetchAllBlogs(),
        fetchAllJobs(),
        fetchAllJobApplications()
      ]);
      setBlogs(fetchedBlogs || []);
      setJobs(fetchedJobs || []);
      setApplications(fetchedApps || []);
    } catch (err) {
      console.error('Error fetching admin data:', err);
      showNotification('Error loading records', 'error');
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadAllData();
    }
  }, [isAuthenticated]);

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');

    try {
      const client = getSupabase();
      
      // If Supabase is connected, attempt Supabase Auth first
      if (client) {
        const { data, error } = await client.auth.signInWithPassword({
          email: loginEmail.trim(),
          password: loginPassword
        });

        if (!error && data?.session) {
          setIsAuthenticated(true);
          localStorage.setItem('alphasure_admin_logged_in', 'true');
          showNotification('Logged in successfully via Supabase Auth!');
          setIsLoggingIn(false);
          return;
        }
      }

      // Default Admin Credentials check as immediate master fallback
      // (admin@alphasure.in / alphasure2026)
      if (
        (loginEmail.trim().toLowerCase() === 'admin@alphasure.in' && loginPassword === 'alphasure2026') ||
        (loginEmail.trim().toLowerCase() === 'admin' && loginPassword === 'admin')
      ) {
        setIsAuthenticated(true);
        localStorage.setItem('alphasure_admin_logged_in', 'true');
        showNotification('Welcome to Alphasure Admin Console!');
      } else {
        setLoginError('Invalid credentials. Use admin@alphasure.in / alphasure2026 or your Supabase user.');
      }
    } catch (err) {
      setLoginError(err.message || 'Authentication error.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    const client = getSupabase();
    if (client) {
      try { await client.auth.signOut(); } catch (e) {}
    }
    setIsAuthenticated(false);
    localStorage.removeItem('alphasure_admin_logged_in');
  };

  // Handle Save Supabase Credentials
  const handleSaveSupabaseConfig = async (e) => {
    e.preventDefault();
    if (!supabaseUrl.trim() || !supabaseAnonKey.trim()) {
      showNotification('Please provide both Project URL and Anon Public Key', 'error');
      return;
    }
    saveSupabaseCredentials(supabaseUrl, supabaseAnonKey);
    showNotification('Supabase configuration saved! Running connection test...');
    await handleRunDiagnostics();
    loadAllData();
  };

  // Handle Database Seeding
  const handleSeedDatabase = async () => {
    setIsSeeding(true);
    try {
      const res = await seedDatabaseIfEmpty();
      if (res.success) {
        showNotification(res.message, 'success');
        loadAllData();
      } else {
        showNotification(res.message, 'error');
      }
    } catch (err) {
      showNotification(err.message, 'error');
    } finally {
      setIsSeeding(false);
    }
  };

  // Create Blog
  const handleCreateBlog = async (e) => {
    e.preventDefault();
    if (!newBlog.title.trim() || !newBlog.content.trim()) {
      showNotification('Please enter title and content', 'error');
      return;
    }

    setIsSubmitting(true);
    try {
      const lines = newBlog.content.split('\n').filter(line => line.trim().length > 0);
      const blogToInsert = {
        title: newBlog.title.trim(),
        category: newBlog.category,
        readTime: newBlog.readTime.trim() || '5 min read',
        excerpt: newBlog.excerpt.trim() || lines[0].substring(0, 160) + '...',
        contentLines: [newBlog.title, ...lines]
      };

      await createBlog(blogToInsert);
      showNotification('Blog published successfully!');
      setIsAddBlogOpen(false);
      setNewBlog({
        title: '',
        category: 'Accounting',
        readTime: '5 min read',
        excerpt: '',
        content: ''
      });
      loadAllData();
    } catch (err) {
      showNotification(`Failed to create blog: ${err.message}`, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete Blog
  const handleDeleteBlog = async (id) => {
    try {
      await deleteBlogById(id);
      showNotification('Blog removed successfully');
      setDeleteConfirmation(null);
      loadAllData();
    } catch (err) {
      showNotification(`Failed to delete blog: ${err.message}`, 'error');
    }
  };

  // Create Job
  const handleCreateJob = async (e) => {
    e.preventDefault();
    if (!newJob.title.trim() || !newJob.description.trim()) {
      showNotification('Please enter job title and description', 'error');
      return;
    }

    setIsSubmitting(true);
    try {
      const responsibilitiesArray = newJob.responsibilities
        .split('\n')
        .map(r => r.trim())
        .filter(Boolean);

      const requirementsArray = newJob.requirements
        .split('\n')
        .map(r => r.trim())
        .filter(Boolean);

      const jobToInsert = {
        title: newJob.title.trim(),
        department: newJob.department.trim(),
        location: newJob.location.trim(),
        type: newJob.type,
        experience: newJob.experience.trim(),
        description: newJob.description.trim(),
        responsibilities: responsibilitiesArray,
        requirements: requirementsArray,
        status: 'active'
      };

      await createJob(jobToInsert);
      showNotification('Job opening posted successfully!');
      setIsAddJobOpen(false);
      setNewJob({
        title: '',
        department: 'Accounting & Advisory',
        location: 'Mumbai (Hybrid)',
        type: 'Full-time',
        experience: '2-4 Years',
        description: '',
        responsibilities: '',
        requirements: ''
      });
      loadAllData();
    } catch (err) {
      showNotification(`Failed to create job opening: ${err.message}`, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Toggle Job Status
  const handleToggleJobStatus = async (id, currentStatus) => {
    const nextStatus = currentStatus === 'active' ? 'closed' : 'active';
    try {
      await updateJobStatus(id, nextStatus);
      showNotification(`Job marked as ${nextStatus}`);
      loadAllData();
    } catch (err) {
      showNotification(`Failed to update status: ${err.message}`, 'error');
    }
  };

  // Delete Job
  const handleDeleteJob = async (id) => {
    try {
      await deleteJobById(id);
      showNotification('Job opening deleted successfully');
      setDeleteConfirmation(null);
      loadAllData();
    } catch (err) {
      showNotification(`Failed to delete job: ${err.message}`, 'error');
    }
  };

  // Filtered Blogs
  const filteredBlogs = useMemo(() => {
    return blogs.filter((b) => {
      const matchCat = blogCategoryFilter === 'All' || b.category === blogCategoryFilter;
      const q = blogSearch.toLowerCase().trim();
      const matchQ = !q || b.title.toLowerCase().includes(q) || (b.excerpt && b.excerpt.toLowerCase().includes(q));
      return matchCat && matchQ;
    });
  }, [blogs, blogCategoryFilter, blogSearch]);

  // Filtered Jobs
  const filteredJobs = useMemo(() => {
    return jobs.filter((j) => {
      const matchDept = jobDeptFilter === 'All' || j.department === jobDeptFilter;
      const q = jobSearch.toLowerCase().trim();
      const matchQ = !q || j.title.toLowerCase().includes(q) || (j.location && j.location.toLowerCase().includes(q));
      return matchDept && matchQ;
    });
  }, [jobs, jobDeptFilter, jobSearch]);

  // Unique departments for filter
  const departmentsList = useMemo(() => {
    const set = new Set();
    jobs.forEach(j => { if (j.department) set.add(j.department); });
    return ['All', ...Array.from(set)];
  }, [jobs]);

  // =========================================================================
  // LOGIN SCREEN (WHEN NOT LOGGED IN)
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen w-full bg-[#0e1726] text-white flex items-center justify-center p-4 relative overflow-hidden select-none">
        
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#FA5A16]/20 via-blue-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl relative z-10">
          
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#FA5A16] to-[#FF8A00] flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-orange-500/25">
              <Lock className="w-8 h-8" />
            </div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FA5A16]">
              Alphasure Portal
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Admin Console
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Sign in to manage blogs, careers, and job openings
            </p>
          </div>

          {loginError && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Admin Email
              </label>
              <input
                type="text"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="admin@alphasure.in"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#FA5A16] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#FA5A16] transition-all"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full py-3.5 rounded-xl bg-[#FA5A16] hover:bg-[#E04808] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isLoggingIn ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Signing In...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In to Admin</span>
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Demo helper tip */}
          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-slate-400">
              Master credentials: <span className="text-white font-bold">admin@alphasure.in</span> / <span className="text-[#FA5A16] font-bold">alphasure2026</span>
            </p>
            <button
              onClick={() => onNavigate && onNavigate('home')}
              className="mt-3 text-xs text-slate-400 hover:text-white inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to main website</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  // =========================================================================
  // AUTHENTICATED ADMIN DASHBOARD
  // =========================================================================
  return (
    <div className="min-h-screen w-full bg-[#FAF7F2] text-[#0B192C] select-none flex flex-col">
      
      {/* Toast Notification */}
      {notification && (
        <div className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl shadow-2xl border text-sm font-bold flex items-center gap-2.5 animate-fadeIn ${
          notification.type === 'error'
            ? 'bg-red-600 text-white border-red-700'
            : 'bg-[#0B192C] text-white border-slate-700'
        }`}>
          {notification.type === 'error' ? (
            <AlertCircle className="w-4 h-4 text-red-300" />
          ) : (
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          )}
          <span>{notification.msg}</span>
        </div>
      )}

      {/* ================= TOP ADMIN NAVIGATION BAR ================= */}
      <header className="bg-[#0e1726] text-white border-b border-slate-800 sticky top-0 z-40 shadow-lg">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FA5A16] to-[#FF8A00] flex items-center justify-center text-white font-bold shadow-md">
              A
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-extrabold tracking-tight">
                  Alphasure Admin
                </span>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-orange-500/20 text-[#FA5A16] border border-orange-500/30">
                  Console
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <span className={`w-2 h-2 rounded-full ${isSupabaseConfigured() ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                <span>{isSupabaseConfigured() ? 'Supabase Connected' : 'Local Storage Mode'}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate && onNavigate('home')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-[#FA5A16]" />
              <span>View Website</span>
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-xs font-bold text-red-400 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>

        </div>

        {/* Sub-Navigation Tabs */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 border-t border-slate-800/80 overflow-x-auto no-scrollbar py-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'dashboard'
                ? 'bg-[#FA5A16] text-white shadow-md'
                : 'text-slate-300 hover:bg-white/10'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Hiring Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab('blogs')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'blogs'
                ? 'bg-[#FA5A16] text-white shadow-md'
                : 'text-slate-300 hover:bg-white/10'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Blogs Management</span>
            <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${activeTab === 'blogs' ? 'bg-black/25 text-white' : 'bg-white/10 text-slate-300'}`}>
              {blogs.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('jobs')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'jobs'
                ? 'bg-[#FA5A16] text-white shadow-md'
                : 'text-slate-300 hover:bg-white/10'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Careers &amp; Openings</span>
            <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${activeTab === 'jobs' ? 'bg-black/25 text-white' : 'bg-white/10 text-slate-300'}`}>
              {jobs.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('applications')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'applications'
                ? 'bg-[#FA5A16] text-white shadow-md'
                : 'text-slate-300 hover:bg-white/10'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Job Applications</span>
            <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${activeTab === 'applications' ? 'bg-black/25 text-white' : 'bg-white/10 text-slate-300'}`}>
              {applications.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('database')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'database'
                ? 'bg-[#FA5A16] text-white shadow-md'
                : 'text-slate-300 hover:bg-white/10'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Supabase Connection</span>
          </button>
        </div>
      </header>

      {/* ================= MAIN DASHBOARD BODY ================= */}
      <main className="flex-1 py-8 sm:py-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ================= TAB 0: HIRING DASHBOARD ================= */}
          {activeTab === 'dashboard' && (
            <HiringDashboard
              applications={applications}
              setApplications={setApplications}
              jobs={jobs}
              onRefresh={loadAllData}
              showNotification={showNotification}
            />
          )}

          {/* ================= TAB 1: BLOGS MANAGEMENT ================= */}
          {activeTab === 'blogs' && (
            <div className="space-y-6">
              
              {/* Action Bar */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                <div className="flex items-center gap-3 flex-wrap">
                  {/* Category Filter */}
                  <select
                    value={blogCategoryFilter}
                    onChange={(e) => setBlogCategoryFilter(e.target.value)}
                    className="px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-bold text-[#0B192C] bg-white focus:outline-none focus:ring-2 focus:ring-[#FA5A16]"
                  >
                    <option value="All">All Categories ({blogs.length})</option>
                    <option value="Incorporation">Incorporation</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Compliance">Compliance</option>
                  </select>

                  {/* Search Input */}
                  <div className="relative w-64 sm:w-72">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      value={blogSearch}
                      onChange={(e) => setBlogSearch(e.target.value)}
                      placeholder="Search blogs..."
                      className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FA5A16]"
                    />
                  </div>

                  <button
                    onClick={loadAllData}
                    disabled={loadingData}
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                    title="Reload data"
                  >
                    <RefreshCw className={`w-4 h-4 ${loadingData ? 'animate-spin' : ''}`} />
                  </button>
                </div>

                <button
                  onClick={() => setIsAddBlogOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-[#FA5A16] hover:bg-[#E04808] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md hover:shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Blog</span>
                </button>

              </div>

              {/* Blogs Table / List */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-bold text-[#0B192C]">
                    Published Articles ({filteredBlogs.length})
                  </h3>
                  <span className="text-xs text-slate-500">
                    Live updates automatically reflect on the public Blogs page
                  </span>
                </div>

                {filteredBlogs.length === 0 ? (
                  <div className="text-center py-16 px-4">
                    <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                    <p className="text-slate-500 text-sm font-semibold">No blogs found matching your filters.</p>
                  </div>
                ) : (
                  <div className="divide-y divide-slate-100">
                    {filteredBlogs.map((b) => (
                      <div key={b.id} className="p-5 sm:p-6 hover:bg-slate-50/70 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-1.5 max-w-2xl">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-orange-50 text-[#FA5A16] border border-orange-200">
                              {b.category}
                            </span>
                            <span className="text-xs text-slate-400">
                              • {b.readTime}
                            </span>
                          </div>
                          <h4 className="text-base font-bold text-[#0B192C] leading-snug">
                            {b.title}
                          </h4>
                          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                            {b.excerpt}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => {
                              if (onNavigate) onNavigate('blogs');
                            }}
                            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Preview</span>
                          </button>

                          <button
                            onClick={() => setDeleteConfirmation({ type: 'blog', id: b.id, title: b.title })}
                            className="px-3.5 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          )}

          {/* ================= TAB 2: CAREERS & JOB OPENINGS ================= */}
          {activeTab === 'jobs' && (
            <div className="space-y-6">
              
              {/* Action Bar */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                <div className="flex items-center gap-3 flex-wrap">
                  {/* Department Filter */}
                  <select
                    value={jobDeptFilter}
                    onChange={(e) => setJobDeptFilter(e.target.value)}
                    className="px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-bold text-[#0B192C] bg-white focus:outline-none focus:ring-2 focus:ring-[#FA5A16]"
                  >
                    {departmentsList.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>

                  {/* Search Input */}
                  <div className="relative w-64 sm:w-72">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      value={jobSearch}
                      onChange={(e) => setJobSearch(e.target.value)}
                      placeholder="Search job titles..."
                      className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FA5A16]"
                    />
                  </div>

                  <button
                    onClick={loadAllData}
                    disabled={loadingData}
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                    title="Reload data"
                  >
                    <RefreshCw className={`w-4 h-4 ${loadingData ? 'animate-spin' : ''}`} />
                  </button>
                </div>

                <button
                  onClick={() => setIsAddJobOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-[#FA5A16] hover:bg-[#E04808] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md hover:shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Post Job Opening</span>
                </button>

              </div>

              {/* Job Openings Table / List */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-bold text-[#0B192C]">
                    Current Job Postings ({filteredJobs.length})
                  </h3>
                  <span className="text-xs text-slate-500">
                    Active roles are published on the Careers page
                  </span>
                </div>

                {filteredJobs.length === 0 ? (
                  <div className="text-center py-16 px-4">
                    <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                    <p className="text-slate-500 text-sm font-semibold">No job openings found matching your filters.</p>
                  </div>
                ) : (
                  <div className="divide-y divide-slate-100">
                    {filteredJobs.map((j) => (
                      <div key={j.id} className="p-5 sm:p-6 hover:bg-slate-50/70 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-1.5 max-w-2xl">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-orange-50 text-[#FA5A16] border border-orange-200">
                              {j.department}
                            </span>
                            <span className="text-xs text-slate-500 font-medium">
                              • {j.location}
                            </span>
                            <span className="text-xs text-slate-500 font-medium">
                              • {j.type}
                            </span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              j.status === 'active' 
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                                : 'bg-slate-100 text-slate-500 border border-slate-200'
                            }`}>
                              {j.status.toUpperCase()}
                            </span>
                          </div>

                          <h4 className="text-base font-bold text-[#0B192C] leading-snug">
                            {j.title}
                          </h4>
                          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                            {j.description}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => handleToggleJobStatus(j.id, j.status)}
                            className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                              j.status === 'active'
                                ? 'bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200'
                                : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200'
                            }`}
                          >
                            {j.status === 'active' ? 'Close Posting' : 'Reactivate'}
                          </button>

                          <button
                            onClick={() => {
                              if (onNavigate) onNavigate('careers');
                            }}
                            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Preview</span>
                          </button>

                          <button
                            onClick={() => setDeleteConfirmation({ type: 'job', id: j.id, title: j.title })}
                            className="px-3.5 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          )}

          {/* ================= TAB 3: APPLICATIONS MANAGEMENT ================= */}
          {activeTab === 'applications' && (
            <div className="space-y-6">
              {/* Header and Search */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C]">
                    Candidate Applications ({applications.length})
                  </h3>
                  <p className="text-slate-500 text-sm mt-0.5">
                    Review candidate profiles submitted through the careers application form.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative w-full sm:w-72">
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search candidates, roles, cities..."
                      value={appSearch}
                      onChange={(e) => setAppSearch(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-[#FA5A16] focus:border-transparent outline-none"
                    />
                  </div>

                  <button
                    onClick={loadAllData}
                    className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer"
                    title="Refresh Applications"
                  >
                    <RefreshCw className={`w-4 h-4 ${loadingData ? 'animate-spin text-[#FA5A16]' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Applications List */}
              {applications.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-orange-50 text-[#FA5A16] flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0B192C]">No candidate applications yet</h4>
                  <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
                    When candidates click "Apply Now" on any job opening on the Careers page and submit their details, their full profile will appear here.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {applications
                    .filter(app => {
                      const q = appSearch.toLowerCase();
                      const name = `${app.first_name || ''} ${app.last_name || ''}`.toLowerCase();
                      const title = (app.job_title || '').toLowerCase();
                      const city = (app.city || '').toLowerCase();
                      const qual = (app.qualification || '').toLowerCase();
                      const employer = (app.current_employer || '').toLowerCase();
                      return name.includes(q) || title.includes(q) || city.includes(q) || qual.includes(q) || employer.includes(q);
                    })
                    .map((app) => (
                      <div
                        key={app.id}
                        className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="text-lg font-bold text-[#0B192C]">
                                {app.first_name} {app.last_name}
                              </h4>
                              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-[#FA5A16]">
                                {app.job_title}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5">
                              Applied on {new Date(app.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            {app.email && (
                              <a
                                href={`mailto:${app.email}`}
                                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                              >
                                <Mail size={13} />
                                <span>{app.email}</span>
                              </a>
                            )}
                            {app.phone && (
                              <a
                                href={`tel:${app.phone}`}
                                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                              >
                                <Phone size={13} />
                                <span>{app.phone}</span>
                              </a>
                            )}
                            <button
                              onClick={async () => {
                                if (window.confirm(`Delete application for ${app.first_name} ${app.last_name}?`)) {
                                  await deleteJobApplicationById(app.id);
                                  setApplications(prev => prev.filter(a => a.id !== app.id));
                                  showNotification('Application deleted');
                                }
                              }}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                              title="Delete Application"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>

                        {/* Candidate Key Details Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs bg-[#FAF7F2] p-3.5 rounded-xl border border-[#EBD6B8]/50">
                          <div>
                            <span className="text-slate-400 block font-medium">City</span>
                            <span className="font-bold text-[#0B192C]">{app.city || '—'}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block font-medium">Date of Birth</span>
                            <span className="font-bold text-[#0B192C]">{app.date_of_birth || '—'}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block font-medium">Qualification</span>
                            <span className="font-bold text-[#0B192C]">{app.qualification || '—'}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block font-medium">Work Experience</span>
                            <span className="font-bold text-[#0B192C]">{app.experience_years ? `${app.experience_years} Yrs` : '—'}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block font-medium">Current Employer</span>
                            <span className="font-bold text-[#0B192C] truncate block" title={app.current_employer}>{app.current_employer || '—'}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block font-medium">Annual CTC</span>
                            <span className="font-bold text-[#FA5A16]">{app.current_ctc ? `₹${app.current_ctc} Lakhs` : '—'}</span>
                          </div>
                        </div>

                        {/* Notice Period & Resume / Cover Note */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2 py-0.5 rounded-md bg-slate-100 font-semibold text-slate-700">
                              Notice Period: <strong className="text-[#0B192C]">{app.notice_period || 'Not specified'}</strong>
                            </span>
                            {app.resume_url && (
                              <a
                                href={app.resume_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[#FA5A16] hover:underline font-semibold"
                              >
                                <ExternalLink size={12} />
                                <span>View Resume / Profile Link</span>
                              </a>
                            )}
                          </div>

                          {app.cover_note && (
                            <p className="text-slate-500 italic max-w-xl truncate">
                              "{app.cover_note}"
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          )}

          {/* ================= TAB 4: SUPABASE CONNECTION & TOOLS ================= */}
          {activeTab === 'database' && (
            <div className="max-w-3xl mx-auto space-y-6">
              
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#FA5A16] mb-1">
                    <Database className="w-4 h-4" />
                    <span>Supabase Backend Integration</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C]">
                    Project Credentials
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">
                    Paste your Supabase project URL and anon public key below. Your credentials are securely preserved so your changes sync seamlessly to the live cloud database.
                  </p>
                </div>

                <form onSubmit={handleSaveSupabaseConfig} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Supabase Project URL
                    </label>
                    <input
                      type="text"
                      required
                      value={supabaseUrl}
                      onChange={(e) => setSupabaseUrl(e.target.value)}
                      placeholder="https://abcdefghijklmnopqrst.supabase.co"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] focus:border-transparent outline-none font-mono"
                    />
                    <p className="text-[11px] text-slate-500 mt-1">
                      Must be formatted like <span className="text-[#FA5A16] font-bold font-mono">https://&lt;project-id&gt;.supabase.co</span> (from Supabase &rarr; Project Settings &rarr; API &rarr; Project URL).
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Supabase Anon Public API Key
                    </label>
                    <textarea
                      rows="3"
                      required
                      value={supabaseAnonKey}
                      onChange={(e) => setSupabaseAnonKey(e.target.value)}
                      placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] focus:border-transparent outline-none font-mono"
                    />
                    <p className="text-[11px] text-slate-500 mt-1">
                      Found in Supabase &rarr; Project Settings &rarr; API &rarr; Project API keys &rarr; <span className="text-[#FA5A16] font-bold">anon public</span>.
                    </p>
                  </div>

                  {supabaseUrl && (
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <span className="text-slate-500 font-semibold">Resolved API Endpoint:</span>
                      <span className="font-mono font-bold text-[#FA5A16] break-all">{normalizeUrl(supabaseUrl)}</span>
                    </div>
                  )}

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={handleRunDiagnostics}
                        disabled={isRunningDiagnostics || !supabaseUrl || !supabaseAnonKey}
                        className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${isRunningDiagnostics ? 'animate-spin' : ''}`} />
                        <span>{isRunningDiagnostics ? 'Testing...' : 'Test Connection & Permissions'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          clearSupabaseCredentials();
                          setSupabaseUrl('');
                          setSupabaseAnonKey('');
                          setDiagnosticResult(null);
                          showNotification('Cleared Supabase credentials. Reverted to Local Storage mode.');
                        }}
                        className="text-xs font-bold text-red-500 hover:text-red-700 cursor-pointer"
                      >
                        Clear
                      </button>
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-[#FA5A16] hover:bg-[#E04808] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-orange-500/25 transition-all cursor-pointer"
                    >
                      Save & Connect
                    </button>
                  </div>
                </form>

                {/* Diagnostics Results Display */}
                {diagnosticResult && (
                  <div className={`p-4 sm:p-5 rounded-2xl border ${
                    diagnosticResult.success 
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                      : 'bg-red-50 border-red-200 text-red-800'
                  }`}>
                    <div className="flex items-start gap-3">
                      {diagnosticResult.success ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      )}
                      <div className="space-y-1 text-xs sm:text-sm">
                        <p className="font-bold">
                          {diagnosticResult.success ? 'Supabase Connection Verified!' : 'Supabase Permission / Connection Error'}
                        </p>
                        <p className="leading-relaxed opacity-90">
                          {diagnosticResult.message}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* RLS Fix & Schema Helper Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0B192C]">
                      Why CRUD operations fail on Supabase (RLS Issue)
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                      By default, Supabase activates <strong>Row Level Security (RLS)</strong> which blocks the public <code>anon</code> key from adding, editing, or deleting rows. Run this simple SQL command in your Supabase SQL Editor to grant full CRUD permissions:
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      const sql = "ALTER TABLE public.blogs DISABLE ROW LEVEL SECURITY;\nALTER TABLE public.job_openings DISABLE ROW LEVEL SECURITY;";
                      navigator.clipboard.writeText(sql);
                      setCopiedSql(true);
                      setTimeout(() => setCopiedSql(false), 3000);
                      showNotification('SQL fix copied to clipboard!');
                    }}
                    className="shrink-0 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-[#0B192C] transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    {copiedSql ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <FileText className="w-3.5 h-3.5" />}
                    <span>{copiedSql ? 'Copied!' : 'Copy SQL Fix'}</span>
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto select-all leading-relaxed border border-slate-800">
                  <span className="text-amber-400">-- Run in Supabase SQL Editor:</span><br />
                  <span className="text-emerald-400">ALTER TABLE</span> public.blogs <span className="text-orange-400">DISABLE ROW LEVEL SECURITY</span>;<br />
                  <span className="text-emerald-400">ALTER TABLE</span> public.job_openings <span className="text-orange-400">DISABLE ROW LEVEL SECURITY</span>;
                </div>
              </div>

              {/* Seed Database Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-1">
                  <h4 className="text-base sm:text-lg font-bold text-[#0B192C]">
                    Initial Data Seed Helper
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-md">
                    Insert all default blogs and job openings into your Supabase database with a single click.
                  </p>
                </div>

                <button
                  onClick={handleSeedDatabase}
                  disabled={isSeeding || !isSupabaseConfigured()}
                  className="shrink-0 px-6 py-3 rounded-xl bg-[#0B192C] hover:bg-[#FA5A16] text-white font-bold text-xs uppercase tracking-wider transition-colors disabled:opacity-40 cursor-pointer"
                >
                  {isSeeding ? 'Seeding Tables...' : 'Seed Initial Data'}
                </button>
              </div>

            </div>
          )}

        </div>
      </main>

      {/* ================= ADD BLOG MODAL ================= */}
      {isAddBlogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setIsAddBlogOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 text-sm font-bold cursor-pointer"
            >
              ✕
            </button>

            <div className="mb-6">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#FA5A16]">
                Content Publishing
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C] mt-1">
                Create New Blog Article
              </h3>
            </div>

            <form onSubmit={handleCreateBlog} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Article Title *
                </label>
                <input
                  type="text"
                  required
                  value={newBlog.title}
                  onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                  placeholder="e.g. Navigating Corporate Advance Tax for Startups"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Category *
                  </label>
                  <select
                    value={newBlog.category}
                    onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none bg-white"
                  >
                    <option value="Accounting">Accounting</option>
                    <option value="Incorporation">Incorporation</option>
                    <option value="Compliance">Compliance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Read Time
                  </label>
                  <input
                    type="text"
                    value={newBlog.readTime}
                    onChange={(e) => setNewBlog({ ...newBlog, readTime: e.target.value })}
                    placeholder="e.g. 5 min read"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Short Excerpt / Teaser
                </label>
                <textarea
                  rows="2"
                  value={newBlog.excerpt}
                  onChange={(e) => setNewBlog({ ...newBlog, excerpt: e.target.value })}
                  placeholder="Brief 1-2 sentence preview shown in directory cards..."
                  className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Article Body (Separate paragraphs with blank lines) *
                </label>
                <textarea
                  rows="8"
                  required
                  value={newBlog.content}
                  onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                  placeholder="Write or paste your article content here. Use bullet points (- item) for lists..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none font-sans"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddBlogOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-xl bg-[#FA5A16] hover:bg-[#E04808] text-white text-xs font-extrabold uppercase tracking-wider shadow-md hover:shadow-orange-500/25 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Publishing...' : 'Publish Blog'}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* ================= ADD JOB MODAL ================= */}
      {isAddJobOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setIsAddJobOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 text-sm font-bold cursor-pointer"
            >
              ✕
            </button>

            <div className="mb-6">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#FA5A16]">
                Talent Acquisition
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C] mt-1">
                Post New Job Opening
              </h3>
            </div>

            <form onSubmit={handleCreateJob} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Job Position Title *
                </label>
                <input
                  type="text"
                  required
                  value={newJob.title}
                  onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                  placeholder="e.g. Senior Tax Consultant (Direct Tax)"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Department *
                  </label>
                  <input
                    type="text"
                    required
                    value={newJob.department}
                    onChange={(e) => setNewJob({ ...newJob, department: e.target.value })}
                    placeholder="e.g. Accounting & Advisory"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={newJob.location}
                    onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                    placeholder="e.g. Mumbai (Hybrid) or Remote"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Employment Type
                  </label>
                  <select
                    value={newJob.type}
                    onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none bg-white"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Experience Required
                  </label>
                  <input
                    type="text"
                    value={newJob.experience}
                    onChange={(e) => setNewJob({ ...newJob, experience: e.target.value })}
                    placeholder="e.g. 2-5 Years"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Role Overview / Description *
                </label>
                <textarea
                  rows="3"
                  required
                  value={newJob.description}
                  onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                  placeholder="Summary of what this role entails..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Key Responsibilities (One item per line)
                </label>
                <textarea
                  rows="4"
                  value={newJob.responsibilities}
                  onChange={(e) => setNewJob({ ...newJob, responsibilities: e.target.value })}
                  placeholder="Prepare monthly financial statements&#10;Conduct ledger reconciliations&#10;Communicate directly with founders"
                  className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Qualifications & Requirements (One item per line)
                </label>
                <textarea
                  rows="4"
                  value={newJob.requirements}
                  onChange={(e) => setNewJob({ ...newJob, requirements: e.target.value })}
                  placeholder="Qualified CA or Semi-Qualified&#10;2+ years in client accounting&#10;Proficiency in Tally Prime and Zoho Books"
                  className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm text-[#0B192C] focus:ring-2 focus:ring-[#FA5A16] outline-none font-sans"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddJobOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-xl bg-[#FA5A16] hover:bg-[#E04808] text-white text-xs font-extrabold uppercase tracking-wider shadow-md hover:shadow-orange-500/25 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Posting...' : 'Post Job Opening'}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* ================= DELETE CONFIRMATION MODAL ================= */}
      {deleteConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 text-center">
            
            <div className="w-14 h-14 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-7 h-7" />
            </div>

            <h3 className="text-lg font-bold text-[#0B192C]">
              Delete this {deleteConfirmation.type === 'blog' ? 'Blog Article' : 'Job Opening'}?
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 mt-2 mb-6">
              Are you sure you want to delete <span className="font-bold text-[#0B192C]">"{deleteConfirmation.title}"</span>? This action cannot be undone.
            </p>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setDeleteConfirmation(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  if (deleteConfirmation.type === 'blog') {
                    handleDeleteBlog(deleteConfirmation.id);
                  } else {
                    handleDeleteJob(deleteConfirmation.id);
                  }
                }}
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md transition-colors cursor-pointer"
              >
                Yes, Delete
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
