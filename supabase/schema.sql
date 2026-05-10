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

-- Create a table for public profiles if it doesn't exist
create table if not exists profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  email text,
  updated_at timestamp with time zone default now()
);

-- Set up Row Level Security (RLS) for profiles
alter table profiles enable row level security;
drop policy if exists "Public profiles are viewable by everyone." on profiles;
create policy "Public profiles are viewable by everyone." on profiles for select using (true);

drop policy if exists "Users can insert their own profile." on profiles;
create policy "Users can insert their own profile." on profiles for insert with check (auth.uid() = id);

-- Function to handle new user signup and sync to profiles
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, email)
  values (new.id, new.raw_user_meta_data->>'full_name', new.email);
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to call the function on signup
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
