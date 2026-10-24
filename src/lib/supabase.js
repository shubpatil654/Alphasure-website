import { createClient } from '@supabase/supabase-js';
import { blogsData } from '../data/blogsData';
import { initialJobsData } from '../data/jobsData';

// URL normalizer: handles project IDs, dashboard URLs, database strings, and cleans protocols
export const normalizeUrl = (raw) => {
  let url = (raw || '').trim();
  if (!url) return '';

  // Case 1: User pasted the Supabase Dashboard URL:
  // e.g. https://supabase.com/dashboard/project/abcdefghijklmnopqrst
  const dashboardMatch = url.match(/supabase\.com\/dashboard\/project\/([a-zA-Z0-9_-]+)/);
  if (dashboardMatch && dashboardMatch[1]) {
    return `https://${dashboardMatch[1]}.supabase.co`;
  }

  // Case 2: User pasted postgres connection string:
  // e.g. postgresql://postgres:...@db.abcdefghijklmnopqrst.supabase.co:5432/...
  const dbMatch = url.match(/@db\.([a-zA-Z0-9_-]+)\.supabase\.co/);
  if (dbMatch && dbMatch[1]) {
    return `https://${dbMatch[1]}.supabase.co`;
  }

  // Case 3: User pasted just the project ID (e.g. abcdefghijklmnopqrst)
  if (/^[a-zA-Z0-9]{15,25}$/.test(url) && !url.includes('.')) {
    return `https://${url}.supabase.co`;
  }

  // Case 4: Ensure https:// and strip trailing slashes
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = `https://${url}`;
  }
  return url.replace(/\/+$/, '');
};

// Priority: 1. Environment variables, 2. Stored in localStorage
const getEnvUrl = () => normalizeUrl(import.meta.env.VITE_SUPABASE_URL || localStorage.getItem('alphasure_supabase_url') || '');
const getEnvAnonKey = () => (import.meta.env.VITE_SUPABASE_ANON_KEY || localStorage.getItem('alphasure_supabase_anon_key') || '').trim();

let supabaseInstance = null;

export const getSupabase = () => {
  const url = getEnvUrl();
  const key = getEnvAnonKey();

  if (!url || !key) {
    return null;
  }

  if (!supabaseInstance || supabaseInstance.supabaseUrl !== url) {
    try {
      supabaseInstance = createClient(url, key, {
        auth: {
          persistSession: true,
          autoRefreshToken: true
        }
      });
    } catch (err) {
      console.warn('Failed to initialize Supabase client:', err);
      return null;
    }
  }

  return supabaseInstance;
};

export const isSupabaseConfigured = () => {
  return Boolean(getEnvUrl() && getEnvAnonKey());
};

export const saveSupabaseCredentials = (url, anonKey) => {
  const cleanUrl = normalizeUrl(url);
  const cleanKey = (anonKey || '').trim();
  if (cleanUrl) localStorage.setItem('alphasure_supabase_url', cleanUrl);
  if (cleanKey) localStorage.setItem('alphasure_supabase_anon_key', cleanKey);
  supabaseInstance = null; // Force recreation on next call
};

export const clearSupabaseCredentials = () => {
  localStorage.removeItem('alphasure_supabase_url');
  localStorage.removeItem('alphasure_supabase_anon_key');
  supabaseInstance = null;
};

// =========================================================================
// COMPREHENSIVE CONNECTION & PERMISSIONS DIAGNOSTIC TEST
// =========================================================================

export const testSupabaseConnection = async () => {
  const client = getSupabase();
  if (!client) {
    return {
      success: false,
      step: 'init',
      message: 'Supabase URL or Anon Public Key is missing.'
    };
  }

  try {
    // Step 1: Check blogs table SELECT
    const { data: blogSample, error: blogErr } = await client
      .from('blogs')
      .select('id')
      .limit(1);

    if (blogErr) {
      if (blogErr.message && (blogErr.message.includes('Failed to fetch') || blogErr.message.includes('NetworkError'))) {
        const attemptedUrl = getEnvUrl();
        return {
          success: false,
          step: 'failed_to_fetch',
          message: `Network Error: The browser failed to reach "${attemptedUrl}". This usually means:\n` +
                   `1. Incorrect URL: Make sure it is your Project URL (https://<project-ref>.supabase.co), NOT the supabase.com dashboard URL or postgres connection string.\n` +
                   `2. Project Paused: If your Supabase project was inactive, it may be paused. Check your Supabase dashboard and click "Restore project".\n` +
                   `3. Adblocker / Shields: Disable Brave Shields or adblock extensions that might block requests to supabase.co.`,
          error: blogErr
        };
      }
      if (blogErr.code === '42P01') {
        return {
          success: false,
          step: 'blogs_table',
          message: 'Table "blogs" does not exist in your Supabase database. Please copy and run supabase_schema.sql in your Supabase SQL Editor.',
          error: blogErr
        };
      }
      return {
        success: false,
        step: 'blogs_read',
        message: `Failed to read from "blogs" table: ${blogErr.message} (Code: ${blogErr.code || 'None'}). Check RLS policies in Supabase SQL Editor.`,
        error: blogErr
      };
    }

    // Step 2: Check job_openings table SELECT
    const { data: jobSample, error: jobErr } = await client
      .from('job_openings')
      .select('id')
      .limit(1);

    if (jobErr) {
      if (jobErr.code === '42P01') {
        return {
          success: false,
          step: 'jobs_table',
          message: 'Table "job_openings" does not exist in your Supabase database. Please run supabase_schema.sql in your Supabase SQL Editor.',
          error: jobErr
        };
      }
      return {
        success: false,
        step: 'jobs_read',
        message: `Failed to read from "job_openings" table: ${jobErr.message} (Code: ${jobErr.code}).`,
        error: jobErr
      };
    }

    // Step 3: Test INSERT and DELETE permission (RLS Check)
    const testId = `_test_ping_${Date.now()}`;
    const { error: insertErr } = await client
      .from('blogs')
      .insert([{
        id: testId,
        title: 'Diagnostic Test',
        category: 'Accounting',
        content_lines: ['test']
      }]);

    if (insertErr) {
      return {
        success: false,
        step: 'rls_write',
        message: `Write test failed: ${insertErr.message} (Code: ${insertErr.code}). Row Level Security (RLS) is blocking the Anon key! Please run OPTION A in supabase_schema.sql (ALTER TABLE public.blogs DISABLE ROW LEVEL SECURITY;) to enable writes.`,
        error: insertErr
      };
    }

    // Step 4: Test DELETE permission
    const { error: deleteErr } = await client
      .from('blogs')
      .delete()
      .eq('id', testId);

    if (deleteErr) {
      return {
        success: false,
        step: 'rls_delete',
        message: `Delete test failed: ${deleteErr.message}. RLS policy is blocking delete.`,
        error: deleteErr
      };
    }

    return {
      success: true,
      message: 'Connection verified! Read, Insert, and Delete permissions are working properly.'
    };
  } catch (err) {
    return {
      success: false,
      step: 'network',
      message: `Network/CORS error connecting to Supabase: ${err.message}. Ensure your project URL starts with https://.`,
      error: err
    };
  }
};

// =========================================================================
// BLOGS CRUD SERVICES
// =========================================================================

export const fetchAllBlogs = async () => {
  const client = getSupabase();
  const deletedIds = JSON.parse(localStorage.getItem('alphasure_deleted_blog_ids') || '[]');

  if (!client) {
    const localCustomBlogs = JSON.parse(localStorage.getItem('alphasure_custom_blogs') || '[]');
    const base = blogsData.filter(b => !deletedIds.includes(b.id));
    return [...localCustomBlogs, ...base];
  }

  try {
    const { data, error } = await client
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Supabase fetch blogs error:', error);
      const base = blogsData.filter(b => !deletedIds.includes(b.id));
      return base;
    }

    if (data && data.length > 0) {
      return data
        .filter(item => !deletedIds.includes(item.id))
        .map(item => ({
          id: item.id,
          title: item.title,
          category: item.category || 'General',
          readTime: item.read_time || item.readTime || '5 min read',
          excerpt: item.excerpt || '',
          contentLines: Array.isArray(item.content_lines) 
            ? item.content_lines 
            : typeof item.content_lines === 'string'
              ? item.content_lines.split('\n').filter(Boolean)
              : [item.title, item.excerpt || ''],
          created_at: item.created_at
        }));
    }

    // If Supabase table is empty, filter out deleted items from initial blogs
    return blogsData.filter(b => !deletedIds.includes(b.id));
  } catch (err) {
    console.warn('Network error fetching blogs from Supabase:', err);
    return blogsData.filter(b => !deletedIds.includes(b.id));
  }
};

export const createBlog = async (blog) => {
  const client = getSupabase();
  const newBlog = {
    id: blog.id || `blog-${Date.now()}`,
    title: blog.title,
    category: blog.category || 'Accounting',
    read_time: blog.readTime || '5 min read',
    excerpt: blog.excerpt,
    content_lines: Array.isArray(blog.contentLines) ? blog.contentLines : (blog.contentLines || '').split('\n'),
    created_at: new Date().toISOString()
  };

  if (client) {
    const { data, error } = await client
      .from('blogs')
      .insert([newBlog])
      .select();

    if (error) {
      console.error('Error creating blog in Supabase:', error);
      throw new Error(error.message || `Postgres Error ${error.code}: RLS policy or table issue`);
    }
    return data && data[0] ? data[0] : newBlog;
  } else {
    const local = JSON.parse(localStorage.getItem('alphasure_custom_blogs') || '[]');
    const formatted = {
      ...newBlog,
      readTime: newBlog.read_time,
      contentLines: newBlog.content_lines
    };
    local.unshift(formatted);
    localStorage.setItem('alphasure_custom_blogs', JSON.stringify(local));
    return formatted;
  }
};

export const deleteBlogById = async (id) => {
  // Always mark as deleted locally so it never resurfaces in view
  const deletedIds = JSON.parse(localStorage.getItem('alphasure_deleted_blog_ids') || '[]');
  if (!deletedIds.includes(id)) {
    deletedIds.push(id);
    localStorage.setItem('alphasure_deleted_blog_ids', JSON.stringify(deletedIds));
  }

  // Remove from local custom blogs if present
  const local = JSON.parse(localStorage.getItem('alphasure_custom_blogs') || '[]');
  const filtered = local.filter(b => b.id !== id);
  localStorage.setItem('alphasure_custom_blogs', JSON.stringify(filtered));

  const client = getSupabase();
  if (client) {
    const { error } = await client
      .from('blogs')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting blog in Supabase:', error);
      throw new Error(error.message || `Postgres Error ${error.code}: Check DELETE RLS policy`);
    }
  }
  return true;
};

// =========================================================================
// CAREERS / JOB OPENINGS CRUD SERVICES
// =========================================================================

export const fetchAllJobs = async () => {
  const client = getSupabase();
  const deletedJobIds = JSON.parse(localStorage.getItem('alphasure_deleted_job_ids') || '[]');

  if (!client) {
    const localCustomJobs = JSON.parse(localStorage.getItem('alphasure_custom_jobs') || '[]');
    const base = initialJobsData.filter(j => !deletedJobIds.includes(j.id));
    return [...localCustomJobs, ...base];
  }

  try {
    const { data, error } = await client
      .from('job_openings')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Supabase fetch jobs error:', error);
      return initialJobsData.filter(j => !deletedJobIds.includes(j.id));
    }

    if (data && data.length > 0) {
      return data
        .filter(item => !deletedJobIds.includes(item.id))
        .map(item => ({
          id: item.id,
          title: item.title,
          department: item.department || 'General',
          location: item.location || 'Mumbai',
          type: item.type || 'Full-time',
          experience: item.experience || '1-3 Years',
          description: item.description || '',
          responsibilities: Array.isArray(item.responsibilities) 
            ? item.responsibilities 
            : typeof item.responsibilities === 'string'
              ? item.responsibilities.split('\n').filter(Boolean)
              : [],
          requirements: Array.isArray(item.requirements) 
            ? item.requirements 
            : typeof item.requirements === 'string'
              ? item.requirements.split('\n').filter(Boolean)
              : [],
          status: item.status || 'active',
          created_at: item.created_at
        }));
    }

    return initialJobsData.filter(j => !deletedJobIds.includes(j.id));
  } catch (err) {
    console.warn('Network error fetching jobs from Supabase:', err);
    return initialJobsData.filter(j => !deletedJobIds.includes(j.id));
  }
};

export const createJob = async (job) => {
  const client = getSupabase();
  const newJob = {
    id: job.id || `job-${Date.now()}`,
    title: job.title,
    department: job.department,
    location: job.location,
    type: job.type || 'Full-time',
    experience: job.experience,
    description: job.description,
    responsibilities: Array.isArray(job.responsibilities) 
      ? job.responsibilities 
      : (job.responsibilities || '').split('\n').filter(Boolean),
    requirements: Array.isArray(job.requirements) 
      ? job.requirements 
      : (job.requirements || '').split('\n').filter(Boolean),
    status: job.status || 'active',
    created_at: new Date().toISOString()
  };

  if (client) {
    const { data, error } = await client
      .from('job_openings')
      .insert([newJob])
      .select();

    if (error) {
      console.error('Error creating job opening in Supabase:', error);
      throw new Error(error.message || `Postgres Error ${error.code}: RLS policy or table issue`);
    }
    return data && data[0] ? data[0] : newJob;
  } else {
    const local = JSON.parse(localStorage.getItem('alphasure_custom_jobs') || '[]');
    local.unshift(newJob);
    localStorage.setItem('alphasure_custom_jobs', JSON.stringify(local));
    return newJob;
  }
};

export const updateJobStatus = async (id, status) => {
  const client = getSupabase();

  if (client) {
    const { data, error } = await client
      .from('job_openings')
      .update({ status })
      .eq('id', id)
      .select();

    if (error) throw new Error(error.message);
    return data && data[0] ? data[0] : { id, status };
  } else {
    const local = JSON.parse(localStorage.getItem('alphasure_custom_jobs') || '[]');
    const updated = local.map(j => j.id === id ? { ...j, status } : j);
    localStorage.setItem('alphasure_custom_jobs', JSON.stringify(updated));
    return { id, status };
  }
};

export const deleteJobById = async (id) => {
  const deletedJobIds = JSON.parse(localStorage.getItem('alphasure_deleted_job_ids') || '[]');
  if (!deletedJobIds.includes(id)) {
    deletedJobIds.push(id);
    localStorage.setItem('alphasure_deleted_job_ids', JSON.stringify(deletedJobIds));
  }

  const local = JSON.parse(localStorage.getItem('alphasure_custom_jobs') || '[]');
  const filtered = local.filter(j => j.id !== id);
  localStorage.setItem('alphasure_custom_jobs', JSON.stringify(filtered));

  const client = getSupabase();
  if (client) {
    const { error } = await client
      .from('job_openings')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting job in Supabase:', error);
      throw new Error(error.message);
    }
  }
  return true;
};

// =========================================================================
// SEEDING HELPER TO POPULATE SUPABASE TABLES
// =========================================================================

export const seedDatabaseIfEmpty = async () => {
  const client = getSupabase();
  if (!client) return { success: false, message: 'Supabase client not connected.' };

  try {
    // 1. Seed blogs
    const formattedBlogs = blogsData.map(b => ({
      id: b.id,
      title: b.title,
      category: b.category,
      read_time: b.readTime,
      excerpt: b.excerpt,
      content_lines: b.contentLines,
      created_at: new Date().toISOString()
    }));

    const { error: blogInsertErr } = await client
      .from('blogs')
      .upsert(formattedBlogs, { onConflict: 'id' });

    if (blogInsertErr) {
      return { success: false, message: `Blog seed error: ${blogInsertErr.message}. Ensure RLS is disabled or allows inserts.` };
    }

    // 2. Seed jobs
    const { error: jobInsertErr } = await client
      .from('job_openings')
      .upsert(initialJobsData, { onConflict: 'id' });

    if (jobInsertErr) {
      return { success: false, message: `Job seed error: ${jobInsertErr.message}` };
    }

    return { success: true, message: 'Successfully seeded blogs and job openings into your Supabase database!' };
  } catch (err) {
    console.error('Seeding error:', err);
    return { success: false, message: err.message };
  }
};
