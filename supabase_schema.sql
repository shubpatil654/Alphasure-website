-- =========================================================================
-- ALPHASURE WEBSITE - SUPABASE DATABASE SCHEMA
-- Copy and run this script in your Supabase SQL Editor:
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

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_openings ENABLE ROW LEVEL SECURITY;

-- 4. Policies for public reading (allows all website visitors to view blogs & jobs)
CREATE POLICY "Allow public read access to blogs"
  ON public.blogs
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow public read access to active jobs"
  ON public.job_openings
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- 5. Policies for inserting, updating, and deleting
-- Allows write operations using anon key or authenticated users
CREATE POLICY "Allow write operations on blogs"
  ON public.blogs
  FOR ALL
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow write operations on job_openings"
  ON public.job_openings
  FOR ALL
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- Enable Realtime (optional, for live updates)
ALTER PUBLICATION supabase_realtime ADD TABLE public.blogs;
ALTER PUBLICATION supabase_realtime ADD TABLE public.job_openings;
