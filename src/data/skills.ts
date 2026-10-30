import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, accessible interfaces and client-side web applications with modern standards.",
    skills: [
      { name: "HTML5", level: "Comfortable", highlight: true, note: "Semantic structure & accessibility" },
      { name: "CSS3", level: "Comfortable", highlight: true, note: "Custom design systems & flex/grid layouts" },
      { name: "JavaScript (ES6+)", level: "Comfortable", highlight: true, note: "Asynchronous workflows & DOM interaction" },
      { name: "React 18", level: "Working Knowledge", highlight: true, note: "Component hierarchy & state hooks" },
      { name: "TypeScript", level: "Working Knowledge", note: "Type safety & interface contracts" },
      { name: "Tailwind CSS", level: "Working Knowledge", note: "Utility-first design architecture" }
    ]
  },
  {
    title: "Backend Development & APIs",
    description: "Developing RESTful microservices, asynchronous task runners, and clean API endpoints.",
    skills: [
      { name: "Python", level: "Comfortable", highlight: true, note: "Core algorithms, scripting, and backend development" },
      { name: "FastAPI", level: "Working Knowledge", highlight: true, note: "High-performance Python asynchronous APIs" },
      { name: "RESTful API Design", level: "Working Knowledge", note: "Clean endpoint contracts and HTTP semantics" },
      { name: "Background Schedulers", level: "Working Knowledge", note: "APScheduler & automated reminder cron jobs" }
    ]
  },
  {
    title: "Databases & Data Management",
    description: "Relational data modeling, schema organization, query design, and cloud database integration.",
    skills: [
      { name: "SQL", level: "Working Knowledge", highlight: true, note: "Relational querying and schema definitions" },
      { name: "PostgreSQL", level: "Working Knowledge", highlight: true, note: "Relational tables and constraints" },
      { name: "Supabase", level: "Working Knowledge", highlight: true, note: "Managed Postgres with Row Level Security (RLS)" },
      { name: "MySQL", level: "Working Knowledge", note: "Relational database concepts & queries" },
      { name: "SQLAlchemy", level: "Working Knowledge", note: "Python ORM object mapping" }
    ]
  },
  {
    title: "Engineering Tools & DevOps",
    description: "Version control, build automation, local development environments, and cloud deployment pipelines.",
    skills: [
      { name: "Git", level: "Comfortable", highlight: true, note: "Branching, commit hygiene, and version history" },
      { name: "GitHub", level: "Comfortable", highlight: true, note: "Repository hosting, releases, and collaboration" },
      { name: "Vite", level: "Working Knowledge", note: "Fast ES module bundling & dev server" },
      { name: "GitHub Pages", level: "Comfortable", note: "Static web deployment & SPA hosting" },
      { name: "Vercel", level: "Comfortable", note: "Cloud edge deployments" },
      { name: "Render", level: "Working Knowledge", note: "Backend container & API hosting" }
    ]
  },
  {
    title: "Architectural & Exploration Concepts",
    description: "Architectural patterns and domain concepts explored across practical project builds.",
    skills: [
      { name: "Role-Based Access Control (RBAC)", level: "Working Knowledge", note: "Multi-persona operational permissions" },
      { name: "Virtual IoT & Telemetry Simulation", level: "Working Knowledge", note: "Simulated sensor streams & threshold monitoring" },
      { name: "Multi-Agent Decision Orchestration", level: "Working Knowledge", note: "Autonomous domain agent consensus workflows" },
      { name: "Computer Vision & Gesture Tracking", level: "Learning", note: "MediaPipe hand landmarks & touchless UI" },
      { name: "State Architecture (Context API)", level: "Working Knowledge", note: "Global auth, telemetry, and notification stores" }
    ]
  }
];
