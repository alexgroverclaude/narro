-- Narro waitlist table
-- Run this in your Supabase SQL Editor: https://app.supabase.com/project/_/sql

create table if not exists waitlist (
  id         uuid        default gen_random_uuid() primary key,
  email      text        unique not null,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table waitlist enable row level security;

-- No public policies — all access goes through the API routes
-- using the service role key, which bypasses RLS.
-- This keeps emails private and inaccessible via the anon key.
