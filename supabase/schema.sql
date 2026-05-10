-- Supabase Schema for Studio Website

-- Create a table for Bookings if it doesn't exist
create table if not exists bookings (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  service text not null,
  booking_date date not null,
  message text,
  status text default 'pending' -- pending, confirmed, cancelled
);

-- Create a table for Contact Inquiries if it doesn't exist
create table if not exists contacts (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  message text not null
);

-- Enable Row Level Security (RLS)
alter table bookings enable row level security;
alter table contacts enable row level security;

-- Allow public anonymous inserts (for the contact/booking forms)
drop policy if exists "Allow public inserts for bookings" on bookings;
create policy "Allow public inserts for bookings" on bookings for insert with check (true);

drop policy if exists "Allow public inserts for contacts" on contacts;
create policy "Allow public inserts for contacts" on contacts for insert with check (true);
