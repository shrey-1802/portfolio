import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, ExternalLink, ChevronRight, ChevronLeft, 
  CheckCircle2, AlertTriangle, Activity, Workflow, X 
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { projectsData } from '../data/projects';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const ProjectDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeGalleryModal, setActiveGalleryModal] = useState<number | null>(null);

  const currentIndex = projectsData.findIndex(p => p.slug === slug);
  const project = projectsData[currentIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!project) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
        <Navbar />
        <div className="container-max" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '8rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Case Study Not Found</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>The requested project slug "{slug}" does not match our verified case studies.</p>
          <Link to="/" className="btn-primary">
            <ArrowLeft size={16} /> Return to Portfolio Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: '7rem', paddingBottom: '6rem' }}>
        {/* Breadcrumb Navigation */}
        <div className="container-max" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
            <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
              Home
            </Link>
            <span>/</span>
            <Link to="/#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
              Projects
            </Link>
            <span>/</span>
            <span style={{ color: project.accentColor }}>{project.slug}</span>
          </div>
        </div>

        {/* SECTION 1: PROJECT HERO */}
        <section className="container-max" style={{ marginBottom: '4rem' }}>
          <div
            className="card-dev"
            style={{
              padding: '3rem',
              borderRadius: '24px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Ambient accent flare */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '300px',
                height: '300px',
                background: `radial-gradient(circle, ${project.accentColor}20 0%, transparent 70%)`,
                filter: 'blur(50px)',
                pointerEvents: 'none'
              }}
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', fontWeight: 800, color: project.accentColor }}>
                /{project.number}
              </span>
              <span className="badge" style={{ borderColor: `${project.accentColor}40`, color: project.accentColor, background: `${project.accentColor}15` }}>
                {project.badgeText}
              </span>
              <span className="badge badge-neutral">VERIFIED APPLICATION</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem', letterSpacing: '-0.03em' }}>
              {project.name}
            </h1>

            <div style={{ fontSize: '1.05rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-secondary)', marginBottom: '1.5rem', fontWeight: 600 }}>
              {project.category}
            </div>

            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '840px', marginBottom: '2.5rem' }}>
              {project.shortDescription}
            </p>

            {/* Hero Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ background: project.accentColor, padding: '0.8rem 1.6rem', fontSize: '0.95rem' }}
              >
                Launch Live Application <ExternalLink size={16} />
              </a>

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.8rem 1.6rem', fontSize: '0.95rem' }}
                >
                  <GithubIcon size={18} /> View GitHub Source
                </a>
              ) : (
                <span className="btn-secondary" style={{ opacity: 0.7, cursor: 'default', padding: '0.8rem 1.6rem', fontSize: '0.95rem' }}>
                  Repository Access Upon Request
                </span>
              )}

              <Link to="/#projects" className="btn-ghost" style={{ padding: '0.8rem 1.25rem', fontSize: '0.95rem' }}>
                <ArrowLeft size={16} /> Back to All Projects
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2: EXECUTIVE OVERVIEW */}
        <section className="container-max" style={{ marginBottom: '4rem' }}>
          <div
            className="card-dev"
            style={{
              padding: '2.5rem',
              borderRadius: '20px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderLeft: `5px solid ${project.accentColor}`
            }}
          >
            <div className="badge badge-neutral mb-3" style={{ marginBottom: '0.75rem' }}>
              SECTION 02 · EXECUTIVE SUMMARY
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Executive Overview
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              {project.executiveOverview}
            </p>
          </div>
        </section>

        {/* SECTION 3: PROBLEM AND OPPORTUNITY (Split Layout) */}
        <section className="container-max" style={{ marginBottom: '4rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem'
            }}
          >
            {/* The Problem Card */}
            <div
              className="card-dev"
              style={{
                padding: '2.5rem',
                borderRadius: '20px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <AlertTriangle size={20} className="text-amber-500" />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  The Problem & Inefficiencies
                </h3>
              </div>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                {project.problem.statement}
              </p>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                Why it matters: {project.problem.whyItMatters}
              </div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                CORE PAIN POINTS:
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {project.problem.painPoints.map((pt, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: '#EF4444', marginTop: '2px' }}>✕</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Approach Card */}
            <div
              className="card-dev"
              style={{
                padding: '2.5rem',
                borderRadius: '20px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Workflow size={20} style={{ color: project.accentColor }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  The Engineering Approach
                </h3>
              </div>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {project.approach}
              </p>
              <div style={{ background: 'var(--bg-secondary)', borderRadius: '12px', padding: '1.25rem', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  TARGET OPERATIONAL USERS:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {project.solution.targetUsers.map((u, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                      <CheckCircle2 size={14} style={{ color: project.accentColor }} />
                      <span>{u}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: THE SOLUTION & PRIMARY WORKFLOW */}
        <section className="container-max" style={{ marginBottom: '4rem' }}>
          <div
            className="card-dev"
            style={{
              padding: '2.5rem',
              borderRadius: '20px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div className="badge badge-neutral mb-3" style={{ marginBottom: '0.75rem' }}>
              SECTION 04 · PROPOSED SOLUTION
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Architected Solution
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              {project.solution.summary}
            </p>
            <div style={{ background: 'var(--bg-card)', padding: '1.25rem 1.5rem', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                PRIMARY END-TO-END WORKFLOW:
              </div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.6, fontWeight: 500 }}>
                {project.solution.primaryWorkflow}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: FEATURE DEEP DIVE */}
        <section className="container-max" style={{ marginBottom: '4rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="badge mb-3" style={{ marginBottom: '0.75rem' }}>
              SECTION 05 · FEATURE-BY-FEATURE EXPLANATIONS
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Feature Deep Dive
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Detailed operational mechanisms, implementation mechanics, and architectural importance.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="card-dev"
                style={{
                  padding: '1.75rem',
                  borderRadius: '16px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span className="badge" style={{ borderColor: `${project.accentColor}40`, color: project.accentColor, background: `${project.accentColor}10`, fontSize: '0.7rem' }}>
                      {feat.badge || `Feature ${idx + 1}`}
                    </span>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {feat.name}
                  </h3>

                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', marginBottom: '1rem', fontWeight: 600 }}>
                    {feat.purpose}
                  </div>

                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>How It Works: </strong>
                    {feat.howItWorks}
                  </div>
                </div>

                <div style={{ background: 'var(--bg-secondary)', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--text-secondary)' }}>Why It Matters: </strong>
                  {feat.whyItMatters}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: USER JOURNEY / WORKFLOW */}
        <section className="container-max" style={{ marginBottom: '4rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="badge mb-3" style={{ marginBottom: '0.75rem' }}>
              SECTION 06 · OPERATIONAL STEPS
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Step-by-Step User Journey
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              How users transition across the operational lifecycle from initial entry to verified resolution.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {project.userJourney.map((step, idx) => (
              <div
                key={idx}
                className="card-dev"
                style={{
                  padding: '1.5rem 2rem',
                  borderRadius: '16px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.5rem'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: `${project.accentColor}20`,
                    color: project.accentColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    fontFamily: 'var(--font-mono)',
                    flexShrink: 0
                  }}
                >
                  0{step.step}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: SYSTEM ARCHITECTURE (Interactive Visual Diagram) */}
        <section className="container-max" style={{ marginBottom: '4rem' }}>
          <div
            className="card-dev"
            style={{
              padding: '2.5rem',
              borderRadius: '24px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div style={{ marginBottom: '2rem' }}>
              <div className="badge mb-3" style={{ marginBottom: '0.75rem' }}>
                SECTION 07 · SYSTEM ARCHITECTURE & DATA FLOW
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Technical Architecture & Operational Loop
              </h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '720px' }}>
                {project.architecture.description}
              </p>
            </div>

            {/* Architecture Node Map */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem'
              }}
            >
              {project.architecture.components.map((node, i) => (
                <div
                  key={i}
                  style={{
                    background: 'var(--bg-secondary)',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    border: '1px solid var(--border-subtle)',
                    borderTop: `3px solid ${node.type === 'frontend' ? '#38BDF8' : node.type === 'backend' ? '#8B5CF6' : node.type === 'database' ? '#10B981' : '#F59E0B'}`
                  }}
                >
                  <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    {node.type}
                  </div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    {node.title}
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {node.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Continuous Operational Stages */}
            <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '1rem', textTransform: 'uppercase' }}>
                Operational Pipeline Sequence:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {project.architecture.flowStages.map((stage, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}>
                    <span style={{ color: project.accentColor, fontWeight: 700 }}>➔ [{idx + 1}]</span>
                    <span>{stage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: TECHNOLOGY STACK BREAKDOWN */}
        <section className="container-max" style={{ marginBottom: '4rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="badge mb-3" style={{ marginBottom: '0.75rem' }}>
              SECTION 08 · VERIFIED IMPLEMENTATION STACK
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Technology Stack Breakdown
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Categorized technologies confirmed by repository package files and actual code modules.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {/* Frontend */}
            <div className="card-dev" style={{ padding: '1.5rem', borderRadius: '14px', background: 'var(--bg-card)' }}>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                FRONTEND & UI
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {project.techStack.frontend.map((t, i) => (
                  <span key={i} className="badge badge-cyan" style={{ fontSize: '0.75rem' }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="card-dev" style={{ padding: '1.5rem', borderRadius: '14px', background: 'var(--bg-card)' }}>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                BACKEND & SERVICES
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {project.techStack.backend.map((t, i) => (
                  <span key={i} className="badge" style={{ fontSize: '0.75rem' }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="card-dev" style={{ padding: '1.5rem', borderRadius: '14px', background: 'var(--bg-card)' }}>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                DATABASE & PERSISTENCE
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {project.techStack.database.map((t, i) => (
                  <span key={i} className="badge badge-emerald" style={{ fontSize: '0.75rem' }}>{t}</span>
                ))}
              </div>
            </div>

            {/* External APIs */}
            <div className="card-dev" style={{ padding: '1.5rem', borderRadius: '14px', background: 'var(--bg-card)' }}>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                EXTERNAL APIS & INTEGRATIONS
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {project.techStack.externalApis.map((t, i) => (
                  <span key={i} className="badge badge-orange" style={{ fontSize: '0.75rem' }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Deployment */}
            <div className="card-dev" style={{ padding: '1.5rem', borderRadius: '14px', background: 'var(--bg-card)' }}>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                DEPLOYMENT PLATFORMS
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {project.techStack.deployment.map((t, i) => (
                  <span key={i} className="badge badge-neutral" style={{ fontSize: '0.75rem' }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="card-dev" style={{ padding: '1.5rem', borderRadius: '14px', background: 'var(--bg-card)' }}>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                ENGINEERING TOOLS
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {project.techStack.tools.map((t, i) => (
                  <span key={i} className="badge badge-neutral" style={{ fontSize: '0.75rem' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: ENGINEERING DECISIONS */}
        <section className="container-max" style={{ marginBottom: '4rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="badge mb-3" style={{ marginBottom: '0.75rem' }}>
              SECTION 09 · ARCHITECTURAL TRADEOFFS
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Important Engineering Decisions
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Why specific technical decisions were chosen over alternatives and how they impacted reliability.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {project.engineeringDecisions.map((item, idx) => (
              <div
                key={idx}
                className="card-dev"
                style={{
                  padding: '2rem',
                  borderRadius: '16px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  {item.decision}
                </h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '0.75rem' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Rationale: </strong>
                  {item.rationale}
                </div>
                <div style={{ background: 'var(--bg-secondary)', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '0.825rem', color: 'var(--accent-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Measurable Impact: </strong>
                  {item.impact}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 10: CHALLENGES AND SOLUTIONS */}
        <section className="container-max" style={{ marginBottom: '4rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="badge mb-3" style={{ marginBottom: '0.75rem' }}>
              SECTION 10 · PROBLEM-SOLVING IN PRACTICE
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Challenges & Solutions
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Authentic hurdles encountered during development and how they were systematically resolved.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {project.challengesAndSolutions.map((item, idx) => (
              <div
                key={idx}
                className="card-dev"
                style={{
                  padding: '2rem',
                  borderRadius: '16px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#EF4444', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                  <AlertTriangle size={15} /> CHALLENGE 0{idx + 1}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  {item.challenge}
                </h3>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Solution: </strong>
                  {item.solution}
                </div>
                <div style={{ background: 'var(--bg-secondary)', padding: '0.75rem 1rem', borderRadius: '8px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--text-secondary)' }}>Engineering Takeaway: </strong>
                  {item.takeaway}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 11 & 12: LEARNING OUTCOMES & FUTURE SCOPE (Split Layout) */}
        <section className="container-max" style={{ marginBottom: '4rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem'
            }}
          >
            {/* Learning Outcomes */}
            <div
              className="card-dev"
              style={{
                padding: '2.5rem',
                borderRadius: '20px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div className="badge mb-3" style={{ marginBottom: '0.75rem' }}>
                SECTION 11 · KEY LEARNINGS
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
                What Building This Taught Me
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {project.learningOutcomes.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <CheckCircle2 size={18} className="text-emerald-500" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Scope */}
            <div
              className="card-dev"
              style={{
                padding: '2.5rem',
                borderRadius: '20px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div className="badge badge-neutral mb-3" style={{ marginBottom: '0.75rem' }}>
                SECTION 12 · PROPOSED ENHANCEMENTS
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
                Proposed Improvements
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {project.futureScope.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <span style={{ color: project.accentColor, marginTop: '2px', fontWeight: 700 }}>▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
                Clearly labeled as planned future research, not currently deployed features.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 13: GALLERY & INTERFACE SHOWCASE */}
        <section className="container-max" style={{ marginBottom: '4rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="badge mb-3" style={{ marginBottom: '0.75rem' }}>
              SECTION 13 · INTERFACE PREVIEWS
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Application Interface Gallery
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Interactive previews representing the actual production interfaces deployed at {project.liveUrl}.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {project.galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="card-dev cursor-pointer group"
                onClick={() => setActiveGalleryModal(idx)}
                style={{
                  borderRadius: '16px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
              >
                {/* Simulated interface view */}
                <div
                  style={{
                    height: '180px',
                    background: 'var(--bg-secondary)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '1.5rem',
                    position: 'relative'
                  }}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${project.accentColor}20`, color: project.accentColor, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                    <Activity size={24} />
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', textAlign: 'center' }}>
                    {img.alt}
                  </div>
                  <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    CLICK TO EXPAND PREVIEW
                  </div>
                </div>

                <div style={{ padding: '1.25rem' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {img.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Dialog */}
          {activeGalleryModal !== null && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 60,
                background: 'rgba(0, 0, 0, 0.85)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem'
              }}
              onClick={() => setActiveGalleryModal(null)}
            >
              <div
                className="card-dev max-w-2xl w-full p-6 text-left"
                style={{
                  maxWidth: '680px',
                  width: '100%',
                  background: 'var(--bg-card)',
                  borderRadius: '20px',
                  border: '1px solid var(--border-subtle)'
                }}
                onClick={e => e.stopPropagation()}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>
                    {project.galleryImages[activeGalleryModal].alt}
                  </h3>
                  <button onClick={() => setActiveGalleryModal(null)} className="btn-ghost">
                    <X size={20} />
                  </button>
                </div>

                <div style={{ background: 'var(--bg-secondary)', borderRadius: '12px', padding: '2.5rem', textAlign: 'center', marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: project.accentColor, marginBottom: '0.5rem' }}>
                    {project.galleryImages[activeGalleryModal].caption}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
                    This module is active and accessible on the production site. Experience the complete live interactions directly in the browser:
                  </p>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                    style={{ background: project.accentColor, fontSize: '0.875rem' }}
                  >
                    Open Live Interface on {project.slug} <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* SECTION 14: FINAL CTA */}
        <section className="container-max" style={{ marginBottom: '4rem' }}>
          <div
            className="card-dev"
            style={{
              padding: '3rem',
              borderRadius: '24px',
              background: 'linear-gradient(180deg, var(--bg-card) 0%, var(--bg-secondary) 100%)',
              border: '1px solid var(--border-subtle)',
              textAlign: 'center'
            }}
          >
            <div className="badge mb-3" style={{ marginBottom: '0.75rem' }}>
              READY TO EXPLORE?
            </div>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Interested in exploring {project.name}?
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 2rem auto' }}>
              Test the live deployed application, inspect the codebase architecture, or discuss potential collaborations and engineering roles.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ background: project.accentColor, padding: '0.8rem 1.6rem', fontSize: '0.95rem' }}
              >
                Launch Application <ExternalLink size={16} />
              </a>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.8rem 1.6rem', fontSize: '0.95rem' }}
                >
                  <GithubIcon size={16} /> Source Code
                </a>
              )}

              <Link to="/#contact" className="btn-secondary" style={{ padding: '0.8rem 1.6rem', fontSize: '0.95rem' }}>
                Contact Shrey
              </Link>
            </div>
          </div>
        </section>

        {/* PREVIOUS & NEXT PROJECT NAVIGATION */}
        <section className="container-max">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--border-subtle)'
            }}
          >
            <Link
              to={`/projects/${prevProject.slug}`}
              className="card-dev"
              style={{
                flex: 1,
                minWidth: '240px',
                padding: '1.25rem 1.5rem',
                borderRadius: '14px',
                textDecoration: 'none',
                background: 'var(--bg-card)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <ChevronLeft size={24} style={{ color: 'var(--text-muted)' }} />
              <div>
                <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  PREVIOUS CASE STUDY
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {prevProject.name}
                </div>
              </div>
            </Link>

            <Link
              to={`/projects/${nextProject.slug}`}
              className="card-dev"
              style={{
                flex: 1,
                minWidth: '240px',
                padding: '1.25rem 1.5rem',
                borderRadius: '14px',
                textDecoration: 'none',
                background: 'var(--bg-card)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                textAlign: 'right',
                gap: '1rem'
              }}
            >
              <div>
                <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  NEXT CASE STUDY
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {nextProject.name}
                </div>
              </div>
              <ChevronRight size={24} style={{ color: 'var(--text-muted)' }} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
