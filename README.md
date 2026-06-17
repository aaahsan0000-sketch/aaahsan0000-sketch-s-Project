# IronCore Gym Website

A professional, responsive 3-page gym website built with **Next.js 14**, **Tailwind CSS**, and **Supabase**.

## Pages
- **Home (`/`)** — Hero section, stats, features, training programs, call-to-action
- **About (`/about`)** — Gym story, mission/values, trainer profiles
- **Contact Us (`/contact`)** — Contact form connected to Supabase, contact info, map

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Supabase (database for contact form submissions)
- Lucide React (icons)
- Deployed via GitHub + Vercel

---

## 1. Local Setup

```bash
# Install dependencies
npm install

# Copy env file and fill in your Supabase credentials
cp .env.local.example .env.local
```

Open `.env.local` and fill in:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key-here
```

You'll find these values in your Supabase dashboard under **Settings > API**.

```bash
# Run the dev server
npm run dev
```

Visit `http://localhost:3000`.

---

## 2. Supabase Setup

1. Go to [supabase.com](https://supabase.com) and create a free account/project.
2. Open the **SQL Editor** in your project dashboard.
3. Paste and run the contents of `supabase_schema.sql` (included in this project) — this creates the `contact_messages` table and the security policy needed for the contact form to work.
4. Go to **Settings > API** and copy your `Project URL` and `anon public` key into `.env.local`.

That's it — your contact form will now save submissions directly into Supabase.

---

## 3. Connecting to GitHub

```bash
git init
git add .
git commit -m "Initial commit: IronCore Gym website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

---

## 4. Deploying (Vercel - Free Plan)

1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account.
2. Click **New Project** and import your GitHub repo.
3. In the **Environment Variables** section, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Click **Deploy**. Your site goes live on a free `*.vercel.app` URL.

---

## 5. Customizing

- **Gym name/branding:** Search for "IronCore" / "IRONCORE" across `app/` and `components/` and replace.
- **Colors:** Edit `tailwind.config.js` → `theme.extend.colors` (primary = red, accent = orange).
- **Images:** Currently using free Unsplash images. Replace `src` URLs in `app/page.js`, `app/about/page.js`, and `app/contact/page.js` with your own gym photos (place real images in `/public` and reference as `/your-image.jpg`).
- **Contact info / address / hours:** Edit `components/Footer.js` and `app/contact/page.js`.

## Project Structure
```
gym-website/
├── app/
│   ├── layout.js          # Root layout (fonts, navbar, footer)
│   ├── globals.css        # Global styles
│   ├── page.js             # Home page
│   ├── about/page.js       # About page
│   └── contact/page.js     # Contact page
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   └── ContactForm.js      # Supabase-connected form
├── lib/
│   └── supabaseClient.js   # Supabase client init
├── supabase_schema.sql     # Run this in Supabase SQL Editor
└── .env.local.example
```
