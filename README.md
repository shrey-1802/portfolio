# Shrey Patel — Personal Portfolio Website

A modern, full-stack personal portfolio website built with **HTML/CSS/JS** (frontend) and **Node.js + Express** (backend), with **Supabase** as the database.

---

## 📁 Project Structure

```
portfolio/
├── index.html          ← Main website (open this in browser)
├── css/
│   └── style.css       ← All styles (dark theme, animations)
├── js/
│   └── main.js         ← All interactivity (navbar, typewriter, form, projects)
├── assets/             ← Images / icons
├── server/             ← Node.js backend
│   ├── index.js        ← Express server entry point
│   ├── routes/         ← API routes
│   ├── controllers/    ← Business logic
│   └── config/
│       └── supabase.js ← Supabase client
└── .env                ← Environment variables (fill in Supabase credentials)
```

---

## 🚀 Getting Started

### 1. Open the Website (Frontend Only)
Just open `index.html` in your browser — it works standalone with fallback project data.

### 2. Run the Backend (Optional — for live DB)

```bash
cd server
npm install
node index.js
```

Server runs at **http://localhost:5000**

### 3. Configure Supabase
Edit `.env` in the project root:
```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
```

### 4. Create Supabase Tables
Run these SQL queries in your Supabase SQL editor:

```sql
-- Projects table
CREATE TABLE projects (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title       text NOT NULL,
  description text,
  tech_stack  text[],
  github_url  text,
  live_url    text,
  image_url   text,
  created_at  timestamptz DEFAULT now()
);

-- Contacts table
CREATE TABLE contacts (
  id         uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name       text NOT NULL,
  email      text NOT NULL,
  subject    text,
  message    text NOT NULL,
  created_at timestamptz DEFAULT now()
);
```

---

## 🌐 Deployment (Vercel)

1. Push the project to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Set **Root Directory** to `/` (the portfolio folder)
4. Add environment variables in Vercel dashboard
5. Deploy!

For the backend, deploy the `server/` folder as a separate Vercel project or use Railway/Render.

---

## ✨ Features

- Dark glassmorphism UI with purple/cyan gradient theme
- Typewriter effect in hero section
- Animated skill progress bars (scroll-triggered)
- Dynamic projects from Supabase (with fallback data)
- Contact form → stores to Supabase
- Fully responsive (mobile, tablet, desktop)
- Scroll-reveal animations throughout
- Mobile hamburger navigation

---

## 📬 Contact

- **Email**: shreyn18007@gmail.com
- **LinkedIn**: [shrey-patel](https://www.linkedin.com/in/shrey-patel)
- **GitHub**: [shrey-1802](https://github.com/shrey-1802)
