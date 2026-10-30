# Shrey Patel — Personal Developer Portfolio

> **"Turning ideas into intelligent digital experiences."**  
> Computer Engineering Student | Aspiring Software Developer | Project Builder  
> **G H Patel College of Engineering and Technology (GCET) · Class of 2029**

A production-grade, bespoke developer portfolio built with **React 18**, **TypeScript**, **Vite**, and a **Modern Dark Developer** design system. Designed specifically for technical recruiters, engineering managers, and collaborators.

---

## 🚀 Live Links & Highlights

- **Live Deployed Portfolio**: Configured for GitHub Pages deployment (`https://shrey-1802.github.io/portfolio/`)
- **LinkedIn**: [linkedin.com/in/shrey-patel-86925b361/](https://www.linkedin.com/in/shrey-patel-86925b361/)
- **GitHub**: [github.com/shrey-1802](https://github.com/shrey-1802)

---

## 📦 Verified Featured Projects & Dedicated Case Studies

The portfolio features two presentation levels (Overview Cards on the homepage and deep-dive technical case study routes):

| # | Project | Category | Live Demo | Repository | Case Study Route |
|---|---|---|---|---|---|
| **01** | **KrishiNirnay AI** | Precision Agriculture & Multi-Agent AI | [Demo](https://shrey-1802.github.io/farmer_to_field/) | [GitHub](https://github.com/shrey-1802/farmer_to_field) | `/#/projects/krishinirnay` |
| **02** | **Disista Control** | Disaster Management & Emergency Logistics | [Demo](https://disaster-control.vercel.app/) | [GitHub](https://github.com/shrey-1802/disaster_control) | `/#/projects/disista-control` |
| **03** | **Hari-Saurabh Hostel** | Hostel Administration & WhatsApp Cloud API | [Demo](https://hari-shaurab-hostel.vercel.app/) | [GitHub](https://github.com/shrey-1802/hari-shaurab-hostel) | `/#/projects/hari-shaurab-hostel` |
| **04** | **Airshot (airpad)** | Computer Vision & Touchless Gesture Canvas | [Demo](https://airshot.vercel.app/) | *Private / On Request* | `/#/projects/airshot` |
| **05** | **TransitOps** | Enterprise Fleet Intelligence & Pre-Dispatch Matrix | [Demo](https://transit-opt.vercel.app/) | [GitHub](https://github.com/shrey-1802/transit_opt) | `/#/projects/transitops` |

---

## 🎨 Visual Design Direction: Modern Dark Developer

- **Color Palette**:
  - Main Background: `#08090D`
  - Secondary Background: `#10121A`
  - Card Surfaces: `#141722`
  - Accents: Violet (`#8B5CF6`) & Electric Cyan (`#38BDF8`)
  - Semantic Status: Emerald (`#10B981`), Orange (`#F97316`), Amber (`#E6A23C`)
- **Typography**: Inter (Body & Headers) + JetBrains Mono (Code, Telemetry, Badges)
- **Aesthetic Principles**: Natural, tactile micro-animations, zero cheesy AI rainbow gradients, native SP monogram emblem, and dark/light mode toggle with persistent state.

---

## 📁 Project Architecture & Data Customization

All portfolio content is organized into centralized, editable TypeScript data files in `src/data/`:

```bash
src/
├── components/          # Reusable UI components (Navbar, Hero, Skills, FeaturedProjects, Contact, etc.)
│   ├── Icons.tsx        # Zero-dependency SVG icons (GitHub, LinkedIn)
│   ├── Navbar.tsx       # SP Monogram, theme switcher, responsive drawer
│   ├── Hero.tsx         # Rotating keywords, headline, interactive developer terminal
│   ├── About.tsx        # Split narrative, profile panel, configurable hobbies
│   ├── Skills.tsx       # Categorized skills matrix (no fake percentages)
│   ├── FeaturedProjects.tsx  # Level 1 project cards & live links
│   ├── ExperienceTimeline.tsx # Internship timeline & certificate verification
│   ├── LearningTimeline.tsx   # Hackathon milestones & CS coursework
│   ├── Education.tsx    # GCET degree, coursework, and semester tracking
│   ├── Contact.tsx      # Form with live validation & pre-filled mailto
│   └── Footer.tsx       # SP Monogram, quick links, back-to-top button
├── pages/
│   ├── Home.tsx         # Main landing page assembling all sections
│   └── ProjectDetails.tsx # Level 2 full 14-section technical case study
├── data/                # Centralized editable configuration
│   ├── portfolio.ts     # Personal info, headline, email config, values
│   ├── projects.ts      # Comprehensive technical details for all 5 projects
│   ├── skills.ts        # Categorized skills & proficiency tiers
│   ├── experience.ts    # Internship slots ready for company letter/certificate
│   ├── learning.ts      # Hackathons, milestones, and explorations
│   ├── education.ts     # Academic highlights, GCET degree, coursework
│   └── hobbies.ts       # Configurable personal interests area
├── context/
│   └── ThemeContext.tsx # Persistent Dark / Light theme provider
└── index.css            # Custom CSS design system & layout tokens
```

---

## 🛠️ Local Development & Build

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build
```bash
npm run build
```
Generates a production build in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🚢 Deploying to GitHub Pages

This project is pre-configured with:
1. `vite.config.ts`: `base: './'` for relative asset paths
2. `HashRouter`: Ensures direct URLs like `/#/projects/krishinirnay` reload cleanly with zero 404s
3. `.github/workflows/deploy.yml`: Automated GitHub Actions build and deploy

### Steps to deploy:
1. Create a repository on GitHub (e.g. `portfolio` or `porfolio` under `shrey-1802`).
2. In this folder (`c:\Projects\porfolio`), link your remote and push:
```bash
git remote add origin https://github.com/shrey-1802/portfolio.git
git push -u origin main
```
3. In your GitHub repository:
   - Go to **Settings** ➔ **Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. The workflow will run automatically and your portfolio will be live at:
   `https://shrey-1802.github.io/portfolio/`
