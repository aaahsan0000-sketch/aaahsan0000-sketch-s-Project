-- Run this in your Supabase project's SQL Editor
-- (Dashboard > SQL Editor > New Query > paste this > Run)

create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  created_at timestamp with time zone default now()
);

-- Enable Row Level Security
alter table contact_messages enable row level security;

-- Allow anyone (anon key) to INSERT new contact messages from the website form
create policy "Allow public insert on contact_messages"
  on contact_messages
  for insert
  to anon
  with check (true);

-- (Optional) Allow only authenticated/admin users to read messages.
-- By default, no SELECT policy means the anon key cannot read messages back,
-- which is what you want for a public contact form.
