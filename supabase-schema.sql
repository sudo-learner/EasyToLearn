-- EasyToLearn — Supabase schema
-- Run this once in your Supabase project: Dashboard → SQL Editor → New query → Run

create table if not exists progress (
  user_id      uuid references auth.users(id) on delete cascade not null,
  track        text not null,
  topic_id     text not null,
  completed_at timestamptz not null default now(),
  primary key (user_id, track, topic_id)
);

alter table progress enable row level security;

-- Each user can only see and edit their own rows
create policy "Users can view their own progress"
  on progress for select
  using (auth.uid() = user_id);

create policy "Users can insert their own progress"
  on progress for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own progress"
  on progress for update
  using (auth.uid() = user_id);
