-- Supabase Schema for Studio Website (Clean Reset Version)

-- 1. Drop existing tables to start fresh
drop table if exists bookings cascade;
drop table if exists contacts cascade;
drop table if exists profiles cascade;

-- 2. Create Bookings Table with ALL columns
create table bookings (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  service text not null,
  booking_date date not null,
  message text,
  status text default 'pending'
);

-- 3. Create Contacts Table
create table contacts (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  message text not null
);

-- 4. Create Public Profiles Table
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  email text,
  updated_at timestamp with time zone default now()
);

-- 5. Enable Row Level Security (RLS)
alter table bookings enable row level security;
alter table contacts enable row level security;
alter table profiles enable row level security;

-- Policies for Bookings
create policy "Allow public inserts for bookings" on bookings for insert with check (true);

-- Policies for Contacts
create policy "Allow public inserts for contacts" on contacts for insert with check (true);

-- Policies for Profiles
create policy "Public profiles are viewable by everyone." on profiles for select using (true);
create policy "Users can insert their own profile." on profiles for insert with check (auth.uid() = id);

-- 6. Profile Sync Trigger (Auth -> Public Profiles)
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, email)
  values (new.id, new.raw_user_meta_data->>'full_name', new.email);
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
