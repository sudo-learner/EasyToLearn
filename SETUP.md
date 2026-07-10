# EasyToLearn — Setup Guide (Supabase Login + GitHub Pages)

## Part 1 — Fix the 404 error (already done in this zip)

The old `manifest.json` had `"start_url": "/index.html"`. On GitHub Pages,
your site lives at `username.github.io/EasyToLearn/`, not at the root of
`username.github.io/`. So `/index.html` pointed to the wrong place, and
the installed app opened a 404 page. This zip now uses relative paths
(`./index.html`), so it works correctly. Just re-upload these files.

## Part 2 — Connect Supabase (5 steps)

### 1. Create a Supabase project
Go to https://supabase.com → Sign in → New Project. Wait ~2 minutes for it
to finish setting up.

### 2. Get your API keys
Project → Settings (gear icon) → API. Copy:
- **Project URL**
- **anon public** key

### 3. Paste them into the code
Open `js/supabase-config.js` in this project and replace:
```js
const SUPABASE_URL = 'https://YOUR-PROJECT-REF.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR-ANON-PUBLIC-KEY';
```
with your real values.

### 4. Create the progress table
In Supabase → SQL Editor → New query → paste the contents of
`supabase-schema.sql` from this zip → Run.

### 5. Allow your GitHub Pages URL
In Supabase → Authentication → URL Configuration:
- **Site URL**: `https://YOUR-USERNAME.github.io/EasyToLearn/`
- **Redirect URLs**: add the same URL, plus
  `https://YOUR-USERNAME.github.io/EasyToLearn/login.html`

Email sign-in (Magic Link) is on by default in Supabase, so no extra
setup is needed there.

## Part 3 — Deploy

1. Push/upload all files in this zip to your GitHub repo, keeping the
   folder structure exactly as-is.
2. Settings → Pages → Deploy from branch → main / (root).
3. Visit your site, click **Sign In**, enter your name + email.
4. Check your inbox, click the magic link — you'll be signed in and sent
   to the dashboard automatically.

## How the login works now

- No passwords. User enters name + email → Supabase sends a one-time
  sign-in link to their inbox.
- Clicking the link signs them in and redirects back to the site.
- Progress (completed topics) is saved to both `localStorage` (fast,
  offline-friendly) and the Supabase `progress` table (synced across
  devices) once signed in.
- Signed-out visitors still get local-only progress tracking, same as
  before — signing in just adds cross-device sync.

## Testing locally before deploying

Magic links redirect back to whatever URL you configured in Supabase, so
testing on `localhost` won't work unless you also add
`http://localhost:PORT/login.html` to the Redirect URLs list in
Supabase. Easiest: just test directly on your live GitHub Pages URL.
