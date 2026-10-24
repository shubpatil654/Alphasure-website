-- =========================================================================
-- ALPHASURE WEBSITE - SUPABASE DATABASE SETUP SCRIPT
-- Copy this entire file and run it in your Supabase SQL Editor:
-- (Supabase Dashboard -> Project -> SQL Editor -> New Query -> Paste & Run)
-- =========================================================================

-- 1. Create the blogs table
CREATE TABLE IF NOT EXISTS public.blogs (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'Accounting',
  read_time TEXT DEFAULT '5 min read',
  excerpt TEXT,
  content_lines JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create the job_openings table
CREATE TABLE IF NOT EXISTS public.job_openings (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  department TEXT NOT NULL,
  location TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'Full-time',
  experience TEXT NOT NULL,
  description TEXT,
  responsibilities JSONB DEFAULT '[]'::jsonb,
  requirements JSONB DEFAULT '[]'::jsonb,
  status TEXT NOT NULL DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =========================================================================
-- PERMISSIONS & ROW LEVEL SECURITY (RLS) FIX
-- Why CRUD failed: Supabase blocks ANON key from INSERT/UPDATE/DELETE by default!
-- Choose EITHER Option A (Recommended) OR Option B below:
-- =========================================================================

-- -------------------------------------------------------------------------
-- OPTION A (RECOMMENDED): Disable RLS on these public content tables
-- This guarantees 100% unrestricted CRUD operations via the Anon Key.
-- -------------------------------------------------------------------------
ALTER TABLE public.blogs DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_openings DISABLE ROW LEVEL SECURITY;

-- -------------------------------------------------------------------------
-- OPTION B (ALTERNATIVE): If you must keep RLS enabled, run these explicit policies:
-- (Uncomment below if you want RLS enabled instead of Option A)
-- -------------------------------------------------------------------------
/*
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_openings ENABLE ROW LEVEL SECURITY;

-- Clean up any old policies to avoid duplicate errors
DROP POLICY IF EXISTS "allow_all_blogs_select" ON public.blogs;
DROP POLICY IF EXISTS "allow_all_blogs_insert" ON public.blogs;
DROP POLICY IF EXISTS "allow_all_blogs_update" ON public.blogs;
DROP POLICY IF EXISTS "allow_all_blogs_delete" ON public.blogs;
DROP POLICY IF EXISTS "Allow write operations on blogs" ON public.blogs;
DROP POLICY IF EXISTS "Allow public read access to blogs" ON public.blogs;

CREATE POLICY "allow_all_blogs_select" ON public.blogs FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "allow_all_blogs_insert" ON public.blogs FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "allow_all_blogs_update" ON public.blogs FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "allow_all_blogs_delete" ON public.blogs FOR DELETE TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "allow_all_jobs_select" ON public.job_openings;
DROP POLICY IF EXISTS "allow_all_jobs_insert" ON public.job_openings;
DROP POLICY IF EXISTS "allow_all_jobs_update" ON public.job_openings;
DROP POLICY IF EXISTS "allow_all_jobs_delete" ON public.job_openings;
DROP POLICY IF EXISTS "Allow write operations on job_openings" ON public.job_openings;
DROP POLICY IF EXISTS "Allow public read access to active jobs" ON public.job_openings;

CREATE POLICY "allow_all_jobs_select" ON public.job_openings FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "allow_all_jobs_insert" ON public.job_openings FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "allow_all_jobs_update" ON public.job_openings FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "allow_all_jobs_delete" ON public.job_openings FOR DELETE TO anon, authenticated USING (true);
*/

-- =========================================================================
-- OPTIONAL: SEED INITIAL JOB OPENINGS INTO SUPABASE
-- =========================================================================
INSERT INTO public.job_openings (id, title, department, location, type, experience, description, responsibilities, requirements, status)
VALUES
(
  'job-1',
  'Senior Chartered Accountant (CA) - Advisory',
  'Accounting & Advisory',
  'Mumbai (Hybrid)',
  'Full-time',
  '3-6 Years',
  'Lead client accounting teams, review periodic financial statements, and provide high-level controller guidance.',
  '["Supervise monthly book closings across client portfolios", "Review balance sheets and management MIS reports", "Provide technical guidance on complex accounting treatments", "Interact directly with founders and CFOs"]'::jsonb,
  '["Qualified Chartered Accountant (ICAI member)", "3+ years post-qualification experience", "Proficiency in Zoho Books, Tally, and Excel", "Strong client communication skills"]'::jsonb,
  'active'
),
(
  'job-2',
  'Tax & Compliance Associate (GST & TDS)',
  'Tax & Statutory Compliance',
  'Mumbai / Remote',
  'Full-time',
  '1-3 Years',
  'Manage GST returns, ITC reconciliations, and quarterly TDS compliance for business clients.',
  '["Prepare and file monthly GSTR-1 and GSTR-3B returns", "Reconcile purchase ledgers against GSTR-2B", "Compute monthly TDS withholding and file 24Q/26Q returns", "Assist with departmental audit queries"]'::jsonb,
  '["B.Com, M.Com, or Semi-Qualified CA", "1-3 years practical experience in GST and TDS", "Expertise in GST Portal and TRACES", "High attention to detail"]'::jsonb,
  'active'
),
(
  'job-3',
  'Corporate Secretarial & ROC Executive',
  'Corporate Secretarial',
  'Mumbai (On-site)',
  'Full-time',
  '1-4 Years',
  'Manage company incorporations, LLP formations, and annual secretarial compliance on the MCA V3 portal.',
  '["Manage incorporation of Private Limited Companies and LLPs", "Draft board resolutions, minutes, and registers", "File annual ROC forms (AOC-4, MGT-7, Form 11, Form 8)", "Coordinate DSC and document execution"]'::jsonb,
  '["Qualified CS or CS Executive passed", "1-4 years relevant MCA filing experience", "Familiarity with Companies Act 2013", "Strong organizational skills"]'::jsonb,
  'active'
)
ON CONFLICT (id) DO NOTHING;
