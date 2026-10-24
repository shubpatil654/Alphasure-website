import { createClient } from '@supabase/supabase-js';
import { blogsData } from '../data/blogsData';
import { initialJobsData } from '../data/jobsData';

// Priority: 1. Environment variables, 2. Stored in localStorage
const getEnvUrl = () => import.meta.env.VITE_SUPABASE_URL || localStorage.getItem('alphasure_supabase_url') || '';
const getEnvAnonKey = () => import.meta.env.VITE_SUPABASE_ANON_KEY || localStorage.getItem('alphasure_supabase_anon_key') || '';

let supabaseInstance = null;

export const getSupabase = () => {
  const url = getEnvUrl().trim();
  const key = getEnvAnonKey().trim();

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
  if (url) localStorage.setItem('alphasure_supabase_url', url.trim());
  if (anonKey) localStorage.setItem('alphasure_supabase_anon_key', anonKey.trim());
  supabaseInstance = null; // Reset to recreate
};

export const clearSupabaseCredentials = () => {
  localStorage.removeItem('alphasure_supabase_url');
  localStorage.removeItem('alphasure_supabase_anon_key');
  supabaseInstance = null;
};

// =========================================================================
// BLOGS CRUD SERVICES (with automatic fallback to local seed data)
// =========================================================================

export const fetchAllBlogs = async () => {
  const client = getSupabase();
  
  if (!client) {
    // Return local blogs with any local additions from localStorage
    const localCustomBlogs = JSON.parse(localStorage.getItem('alphasure_custom_blogs') || '[]');
    const deletedIds = JSON.parse(localStorage.getItem('alphasure_deleted_blog_ids') || '[]');
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
      // Fallback gracefully
      return blogsData;
    }

    if (data && data.length > 0) {
      // Normalize contentLines if stored as jsonb array or newline-separated string
      return data.map(item => ({
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

    // If Supabase table is empty, return initial blogs
    return blogsData;
  } catch (err) {
    console.warn('Network error fetching blogs from Supabase:', err);
    return blogsData;
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
    content_lines: Array.isArray(blog.contentLines) ? blog.contentLines : blog.contentLines.split('\n'),
    created_at: new Date().toISOString()
  };

  if (client) {
    const { data, error } = await client
      .from('blogs')
      .insert([newBlog])
      .select()
      .single();

    if (error) {
      console.error('Error creating blog in Supabase:', error);
      throw error;
    }
    return data;
  } else {
    // Save to localStorage simulation
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
  const client = getSupabase();

  if (client) {
    const { error } = await client
      .from('blogs')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting blog in Supabase:', error);
      throw error;
    }
    return true;
  } else {
    // Local simulation
    const local = JSON.parse(localStorage.getItem('alphasure_custom_blogs') || '[]');
    const filtered = local.filter(b => b.id !== id);
    localStorage.setItem('alphasure_custom_blogs', JSON.stringify(filtered));

    // Also track deletion of default seed blogs
    const deletedIds = JSON.parse(localStorage.getItem('alphasure_deleted_blog_ids') || '[]');
    if (!deletedIds.includes(id)) {
      deletedIds.push(id);
      localStorage.setItem('alphasure_deleted_blog_ids', JSON.stringify(deletedIds));
    }
    return true;
  }
};

// =========================================================================
// CAREERS / JOB OPENINGS CRUD SERVICES
// =========================================================================

export const fetchAllJobs = async () => {
  const client = getSupabase();

  if (!client) {
    const localCustomJobs = JSON.parse(localStorage.getItem('alphasure_custom_jobs') || '[]');
    const deletedJobIds = JSON.parse(localStorage.getItem('alphasure_deleted_job_ids') || '[]');
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
      return initialJobsData;
    }

    if (data && data.length > 0) {
      return data.map(item => ({
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

    return initialJobsData;
  } catch (err) {
    console.warn('Network error fetching jobs from Supabase:', err);
    return initialJobsData;
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
      .select()
      .single();

    if (error) {
      console.error('Error creating job opening in Supabase:', error);
      throw error;
    }
    return data;
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
      .select()
      .single();

    if (error) throw error;
    return data;
  } else {
    const local = JSON.parse(localStorage.getItem('alphasure_custom_jobs') || '[]');
    const updated = local.map(j => j.id === id ? { ...j, status } : j);
    localStorage.setItem('alphasure_custom_jobs', JSON.stringify(updated));
    return { id, status };
  }
};

export const deleteJobById = async (id) => {
  const client = getSupabase();

  if (client) {
    const { error } = await client
      .from('job_openings')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting job in Supabase:', error);
      throw error;
    }
    return true;
  } else {
    const local = JSON.parse(localStorage.getItem('alphasure_custom_jobs') || '[]');
    const filtered = local.filter(j => j.id !== id);
    localStorage.setItem('alphasure_custom_jobs', JSON.stringify(filtered));

    const deletedJobIds = JSON.parse(localStorage.getItem('alphasure_deleted_job_ids') || '[]');
    if (!deletedJobIds.includes(id)) {
      deletedJobIds.push(id);
      localStorage.setItem('alphasure_deleted_job_ids', JSON.stringify(deletedJobIds));
    }
    return true;
  }
};

// =========================================================================
// ONE-CLICK SEEDING HELPER TO POPULATE SUPABASE TABLES
// =========================================================================

export const seedDatabaseIfEmpty = async () => {
  const client = getSupabase();
  if (!client) return { success: false, message: 'Supabase client not connected.' };

  try {
    // 1. Check blogs
    const { count: blogCount, error: blogErr } = await client
      .from('blogs')
      .select('*', { count: 'exact', head: true });

    if (!blogErr && (blogCount === 0 || blogCount === null)) {
      const formattedBlogs = blogsData.map(b => ({
        id: b.id,
        title: b.title,
        category: b.category,
        read_time: b.readTime,
        excerpt: b.excerpt,
        content_lines: b.contentLines,
        created_at: new Date().toISOString()
      }));

      await client.from('blogs').insert(formattedBlogs);
    }

    // 2. Check jobs
    const { count: jobCount, error: jobErr } = await client
      .from('job_openings')
      .select('*', { count: 'exact', head: true });

    if (!jobErr && (jobCount === 0 || jobCount === null)) {
      await client.from('job_openings').insert(initialJobsData);
    }

    return { success: true, message: 'Database populated successfully!' };
  } catch (err) {
    console.error('Seeding error:', err);
    return { success: false, message: err.message };
  }
};
