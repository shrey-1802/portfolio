import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/projects';

export const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28" style={{ padding: '5.5rem 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container-max">
        {/* Section Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div>
            <div className="badge mb-3" style={{ marginBottom: '0.75rem' }}>
              PRIMARY HIGHLIGHT · 5 DEPLOYED SYSTEMS
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Featured Engineering Projects.
            </h2>
            <p style={{ maxWidth: '640px', color: 'var(--text-secondary)' }}>
              Working software products spanning multi-agent agriculture intelligence, disaster relief supply chains, residential administration, computer vision, and enterprise fleet telemetry.
            </p>
          </div>

          <div style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
            LEVEL 1: ARCHITECTURE OVERVIEWS · CLICK TO INSPECT DETAILED CASE STUDIES
          </div>
        </div>

        {/* 5 Project Cards Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="card-dev"
              style={{
                borderRadius: '20px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: 0
                }}
              >
                {/* Left Side: Project Narrative & Actions */}
                <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    {/* Top Meta Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '1.25rem',
                            fontWeight: 800,
                            color: project.accentColor
                          }}
                        >
                          /{project.number}
                        </span>
                        <span className="badge" style={{ borderColor: `${project.accentColor}40`, color: project.accentColor, background: `${project.accentColor}15` }}>
                          {project.badgeText}
                        </span>
                      </div>

                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                        DEPLOYED & VERIFIED
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                      {project.name}
                    </h3>

                    {/* Category Label */}
                    <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-secondary)', marginBottom: '1.25rem', fontWeight: 600 }}>
                      {project.category}
                    </div>

                    {/* Short Description */}
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                      {project.shortDescription}
                    </p>

                    {/* Verified Technology Tags */}
                    <div style={{ marginBottom: '1.75rem' }}>
                      <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                        CONFIRMED TECH STACK:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {project.techStack.frontend.slice(0, 3).map((t, i) => (
                          <span key={i} className="badge badge-neutral" style={{ fontSize: '0.72rem' }}>
                            {t}
                          </span>
                        ))}
                        {project.techStack.backend.slice(0, 2).map((t, i) => (
                          <span key={i} className="badge badge-neutral" style={{ fontSize: '0.72rem' }}>
                            {t}
                          </span>
                        ))}
                        {project.techStack.database.slice(0, 1).map((t, i) => (
                          <span key={i} className="badge badge-neutral" style={{ fontSize: '0.72rem' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Buttons (Level 1: Case Study, Live Demo, GitHub) */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: '0.75rem',
                      paddingTop: '1.5rem',
                      borderTop: '1px solid var(--border-subtle)'
                    }}
                  >
                    <Link
                      to={`/projects/${project.slug}`}
                      className="btn-primary"
                      style={{
                        background: project.accentColor,
                        padding: '0.65rem 1.25rem',
                        fontSize: '0.875rem'
                      }}
                    >
                      View Case Study <ChevronRight size={16} />
                    </Link>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary"
                      style={{
                        padding: '0.65rem 1.15rem',
                        fontSize: '0.875rem'
                      }}
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-ghost"
                        style={{
                          padding: '0.65rem 0.85rem',
                          fontSize: '0.875rem'
                        }}
                      >
                        <GithubIcon size={16} /> Code
                      </a>
                    ) : (
                      <span
                        className="font-mono text-xs text-[var(--text-muted)] px-2 py-1"
                        style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
                        title="Repository on request"
                      >
                        Repo: Private
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Side: Interactive System Visual & Telemetry Preview */}
                <div
                  style={{
                    background: 'var(--bg-secondary)',
                    padding: '2rem',
                    borderLeft: '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    minHeight: '340px'
                  }}
                >
                  <div
                    style={{
                      background: 'var(--bg-card)',
                      borderRadius: '14px',
                      border: '1px solid var(--border-subtle)',
                      padding: '1.5rem',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    {/* Visual Window Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: project.accentColor }}></span>
                        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                          Operational Architecture
                        </span>
                      </div>
                      <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: project.accentColor }}>
                        STAGE: 100% PRODUCTION-READY
                      </span>
                    </div>

                    {/* Project-specific visual highlight */}
                    {project.slug === 'krishinirnay' && (
                      <div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                          7-STAGE AUTONOMOUS LOOP:
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                          {['MONITOR', 'ANALYZE', 'DETECT', 'DECIDE', 'ACT', 'VERIFY', 'REASSESS'].map((s, i) => (
                            <span key={i} style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', padding: '2px 6px', background: 'var(--bg-secondary)', borderRadius: '4px', border: '1px solid var(--border-subtle)', color: i === 3 ? '#10B981' : 'var(--text-secondary)' }}>
                              {s} {i < 6 && '➔'}
                            </span>
                          ))}
                        </div>
                        <div style={{ background: 'var(--bg-secondary)', padding: '0.75rem', borderRadius: '8px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                          <div style={{ color: '#10B981', marginBottom: '0.25rem' }}>● 9 Domain AI Agents Active</div>
                          <div style={{ color: 'var(--text-muted)' }}>Irrigation, Pest, Weather, Yield, Solenoid Actuators</div>
                        </div>
                      </div>
                    )}

                    {project.slug === 'disista-control' && (
                      <div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                          3 OPERATIONAL ROLES:
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1rem' }}>
                          <div style={{ fontSize: '0.75rem', padding: '0.4rem 0.65rem', background: 'var(--bg-secondary)', borderRadius: '6px', borderLeft: '3px solid #38BDF8', display: 'flex', justifyContent: 'space-between' }}>
                            <span>1. Commander</span>
                            <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Risk Score & Rerouting</span>
                          </div>
                          <div style={{ fontSize: '0.75rem', padding: '0.4rem 0.65rem', background: 'var(--bg-secondary)', borderRadius: '6px', borderLeft: '3px solid #F97316', display: 'flex', justifyContent: 'space-between' }}>
                            <span>2. Warehouse</span>
                            <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Available = Total − Reserved</span>
                          </div>
                          <div style={{ fontSize: '0.75rem', padding: '0.4rem 0.65rem', background: 'var(--bg-secondary)', borderRadius: '6px', borderLeft: '3px solid #10B981', display: 'flex', justifyContent: 'space-between' }}>
                            <span>3. Convoy Driver</span>
                            <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>1-Tap Hazard Logger</span>
                          </div>
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                          Sector Geofence: Indian 6-Digit PIN Code Telemetry
                        </div>
                      </div>
                    )}

                    {project.slug === 'hari-shaurab-hostel' && (
                      <div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                          AUTOMATION PIPELINE:
                        </div>
                        <div style={{ background: 'var(--bg-secondary)', padding: '0.75rem', borderRadius: '8px', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                          <div style={{ color: '#E6A23C', fontWeight: 600, marginBottom: '0.25rem' }}>
                            APScheduler ➔ WhatsApp Cloud API
                          </div>
                          <div style={{ color: 'var(--text-secondary)' }}>
                            24h & 6h Reminders · Scheduled 9:00 AM WhatsApp Greetings
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>
                          <span className="badge badge-neutral">Supabase Postgres RLS</span>
                          <span className="badge badge-neutral">React Context API</span>
                        </div>
                      </div>
                    )}

                    {project.slug === 'airshot' && (
                      <div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                          COMPUTER VISION PIPELINE:
                        </div>
                        <div style={{ background: 'var(--bg-secondary)', padding: '0.75rem', borderRadius: '8px', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                          <div style={{ color: '#38BDF8', fontWeight: 600, marginBottom: '0.25rem' }}>
                            MediaPipe HandLandmarker WebGL
                          </div>
                          <div style={{ color: 'var(--text-secondary)' }}>
                            21 3D Landmarks · Index Tip #8 ➔ Bézier Smooth Canvas
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>
                          <span className="badge badge-cyan">Draw Mode</span>
                          <span className="badge badge-orange">Erase Mode</span>
                          <span className="badge badge-neutral">Zero Server Latency</span>
                        </div>
                      </div>
                    )}

                    {project.slug === 'transitops' && (
                      <div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                          FLEET TWIN & PRE-DISPATCH ENGINE:
                        </div>
                        <div style={{ background: 'var(--bg-secondary)', padding: '0.75rem', borderRadius: '8px', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                          <div style={{ color: '#84CC16', fontWeight: 600, marginBottom: '0.25rem' }}>
                            Pre-Dispatch Safety Matrix
                          </div>
                          <div style={{ color: 'var(--text-secondary)' }}>
                            Cargo &le; Payload · CDL &gt; 30 Days · ROI Analytics
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>
                          <span className="badge badge-neutral">4 RBAC Personas</span>
                          <span className="badge badge-emerald">Capital ROI Math</span>
                        </div>
                      </div>
                    )}

                    {/* Click prompt */}
                    <div style={{ marginTop: '1.25rem', textAlign: 'right' }}>
                      <Link
                        to={`/projects/${project.slug}`}
                        style={{
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-mono)',
                          color: project.accentColor,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          textDecoration: 'none',
                          fontWeight: 600
                        }}
                      >
                        Read Deep Dive Architecture Case Study ➔
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
