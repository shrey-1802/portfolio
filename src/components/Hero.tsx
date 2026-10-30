import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { portfolioConfig } from '../data/portfolio';

export const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [activeTab, setActiveTab] = useState<'terminal' | 'telemetry' | 'architecture'>('terminal');
  const [uptimeSeconds, setUptimeSeconds] = useState(148);

  const keywords = portfolioConfig.animatedKeywords;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentWordIndex(prev => (prev + 1) % keywords.length);
        setIsFading(false);
      }, 300);
    }, 2800);

    return () => clearInterval(interval);
  }, [keywords.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptimeSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-subtle"
      style={{
        paddingTop: '8.5rem',
        paddingBottom: '5.5rem',
        position: 'relative'
      }}
    >
      <div className="container-max">
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Personal Brand & Headlines */}
          <div style={{ maxWidth: '640px' }}>
            {/* Small Class Heading Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 font-mono text-xs"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.25)',
                color: '#A78BFA',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                marginBottom: '1.5rem',
                letterSpacing: '0.04em'
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }}></span>
              COMPUTER ENGINEERING STUDENT · CLASS OF 2029
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.03em'
              }}
            >
              Building ideas into{' '}
              <span
                style={{
                  color: 'var(--accent-secondary)',
                  borderBottom: '2px solid rgba(56, 189, 248, 0.4)'
                }}
              >
                real-world
              </span>{' '}
              digital experiences.
            </h1>

            {/* Rotating Dynamic Keywords Tag */}
            <div
              className="flex items-center gap-2 mb-6 font-mono text-sm"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.95rem'
              }}
            >
              <span style={{ color: 'var(--text-muted)' }}>Focused on:</span>
              <span
                className="font-semibold transition-opacity duration-300"
                style={{
                  color: 'var(--accent-primary)',
                  opacity: isFading ? 0 : 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'rgba(139, 92, 246, 0.08)',
                  padding: '0.2rem 0.65rem',
                  borderRadius: '6px',
                  border: '1px solid rgba(139, 92, 246, 0.2)'
                }}
              >
                {keywords[currentWordIndex]}
                <span className="animate-cursor ml-1" style={{ color: 'var(--accent-secondary)' }}>_</span>
              </span>
            </div>

            {/* Introduction Narrative */}
            <p
              className="text-base sm:text-lg text-[var(--text-secondary)] mb-8 leading-relaxed"
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '2rem'
              }}
            >
              {portfolioConfig.heroIntro}
            </p>

            {/* Call To Action Buttons */}
            <div
              className="flex flex-wrap items-center gap-3 mb-8"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
                style={{ cursor: 'pointer' }}
              >
                Explore Projects <ArrowDown size={16} />
              </button>

              <button
                onClick={() => scrollToSection('about')}
                className="btn-secondary"
                style={{ cursor: 'pointer' }}
              >
                About Me
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
                style={{ cursor: 'pointer' }}
              >
                Let's Connect
              </button>

              <a
                href={portfolioConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.75rem 1rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)'
                }}
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={16} /> LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Secondary Professional Tagline & Verification pill */}
            <div
              className="flex items-center gap-4 text-xs font-mono text-[var(--text-muted)] pt-4 border-t border-[var(--border-subtle)]"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                "{portfolioConfig.secondaryTagline}"
              </span>
              <span>·</span>
              <span className="flex items-center gap-1" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                <CheckCircle2 size={13} className="text-emerald-500" style={{ color: '#10B981' }} /> 5 Deployed Systems
              </span>
            </div>
          </div>

          {/* Right Column: Abstract Developer Terminal & System Telemetry Visual */}
          <div style={{ width: '100%' }}>
            <div
              className="card-dev terminal-block overflow-hidden"
              style={{
                background: 'var(--bg-card)',
                borderRadius: '16px',
                border: '1px solid var(--border-subtle)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.45)'
              }}
            >
              {/* Terminal Window Header */}
              <div
                className="terminal-header"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  background: 'var(--bg-secondary)',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div className="terminal-dot dot-red" style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#EF4444' }}></div>
                  <div className="terminal-dot dot-yellow" style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#F59E0B' }}></div>
                  <div className="terminal-dot dot-green" style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10B981' }}></div>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
                    shrey-patel@gcet: ~/workspace/systems
                  </span>
                </div>

                {/* Tab Switcher */}
                <div style={{ display: 'flex', gap: '4px' }}>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    style={{
                      background: activeTab === 'terminal' ? 'var(--bg-card)' : 'transparent',
                      color: activeTab === 'terminal' ? 'var(--text-primary)' : 'var(--text-muted)',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '2px 8px',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      cursor: 'pointer'
                    }}
                  >
                    Terminal
                  </button>
                  <button
                    onClick={() => setActiveTab('telemetry')}
                    style={{
                      background: activeTab === 'telemetry' ? 'var(--bg-card)' : 'transparent',
                      color: activeTab === 'telemetry' ? 'var(--text-primary)' : 'var(--text-muted)',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '2px 8px',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      cursor: 'pointer'
                    }}
                  >
                    Telemetry
                  </button>
                  <button
                    onClick={() => setActiveTab('architecture')}
                    style={{
                      background: activeTab === 'architecture' ? 'var(--bg-card)' : 'transparent',
                      color: activeTab === 'architecture' ? 'var(--text-primary)' : 'var(--text-muted)',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '2px 8px',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      cursor: 'pointer'
                    }}
                  >
                    Pipeline
                  </button>
                </div>
              </div>

              {/* Terminal Content Body */}
              <div style={{ padding: '1.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', minHeight: '320px' }}>
                {activeTab === 'terminal' && (
                  <div>
                    <div style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                      # Initializing developer profile telemetry...
                    </div>
                    <div style={{ color: '#38BDF8', marginBottom: '0.75rem' }}>
                      $ whoami --verbose
                    </div>
                    <div style={{ color: 'var(--text-secondary)', paddingLeft: '0.75rem', borderLeft: '2px solid #8B5CF6', marginBottom: '1rem', lineHeight: '1.6' }}>
                      <div><span style={{ color: 'var(--text-muted)' }}>Name:</span> Shrey Patel</div>
                      <div><span style={{ color: 'var(--text-muted)' }}>Role:</span> Computer Engineering Student & Project Builder</div>
                      <div><span style={{ color: 'var(--text-muted)' }}>College:</span> G H Patel College of Engineering and Technology (GCET)</div>
                      <div><span style={{ color: 'var(--text-muted)' }}>Graduation:</span> Class of 2029</div>
                      <div><span style={{ color: 'var(--text-muted)' }}>Core Mindset:</span> "Think. Build. Experiment. Improve."</div>
                    </div>

                    <div style={{ color: '#38BDF8', marginBottom: '0.75rem' }}>
                      $ git status --deployed-applications
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem', marginBottom: '1rem' }}>
                      <div style={{ background: 'var(--bg-secondary)', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                        <span style={{ color: '#10B981', fontWeight: 600 }}>01. KrishiNirnay AI</span>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Precision Agriculture · 9 Agents</div>
                      </div>
                      <div style={{ background: 'var(--bg-secondary)', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                        <span style={{ color: '#F97316', fontWeight: 600 }}>02. Disista Control</span>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Emergency Logistics · 3 Roles</div>
                      </div>
                      <div style={{ background: 'var(--bg-secondary)', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                        <span style={{ color: '#E6A23C', fontWeight: 600 }}>03. Hari-Saurabh</span>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Hostel ERP & WhatsApp Cloud API</div>
                      </div>
                      <div style={{ background: 'var(--bg-secondary)', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                        <span style={{ color: '#38BDF8', fontWeight: 600 }}>04. Airshot (airpad)</span>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>MediaPipe Touchless Air-Canvas</div>
                      </div>
                      <div style={{ background: 'var(--bg-secondary)', padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                        <span style={{ color: '#84CC16', fontWeight: 600 }}>05. TransitOps</span>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Fleet Operations & Pre-Dispatch Matrix</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10B981' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }}></span>
                      All systems compiled and operational. Ready for review.
                    </div>
                  </div>
                )}

                {activeTab === 'telemetry' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>ENVIRONMENT TELEMETRY</span>
                      <span style={{ color: '#38BDF8', fontSize: '0.75rem' }}>UPTIME: {uptimeSeconds}s</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.75rem' }}>
                          <span style={{ color: 'var(--text-primary)' }}>Full-Stack Architecture</span>
                          <span style={{ color: '#8B5CF6' }}>Python / FastAPI + React 18 / Vite</span>
                        </div>
                        <div style={{ height: '4px', background: 'var(--bg-secondary)', borderRadius: '2px', overflow: 'hidden' }}>
                          <div style={{ width: '92%', height: '100%', background: '#8B5CF6' }}></div>
                        </div>
                      </div>

                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.75rem' }}>
                          <span style={{ color: 'var(--text-primary)' }}>Relational Systems (PostgreSQL / Supabase / SQL)</span>
                          <span style={{ color: '#38BDF8' }}>Active Schemas</span>
                        </div>
                        <div style={{ height: '4px', background: 'var(--bg-secondary)', borderRadius: '2px', overflow: 'hidden' }}>
                          <div style={{ width: '85%', height: '100%', background: '#38BDF8' }}></div>
                        </div>
                      </div>

                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.75rem' }}>
                          <span style={{ color: 'var(--text-primary)' }}>Real-Time Inference (MediaPipe Tasks Vision)</span>
                          <span style={{ color: '#10B981' }}>WebGL Client Acceleration</span>
                        </div>
                        <div style={{ height: '4px', background: 'var(--bg-secondary)', borderRadius: '2px', overflow: 'hidden' }}>
                          <div style={{ width: '90%', height: '100%', background: '#10B981' }}></div>
                        </div>
                      </div>

                      <div style={{ background: 'var(--bg-secondary)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', marginTop: '0.5rem' }}>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                          VERIFIED INTEGRATIONS:
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', fontSize: '0.7rem' }}>
                          <span className="badge badge-emerald">Open-Meteo REST</span>
                          <span className="badge badge-cyan">MediaPipe HandLandmarker</span>
                          <span className="badge badge-orange">Meta WhatsApp Cloud</span>
                          <span className="badge">APScheduler Cron</span>
                          <span className="badge badge-neutral">Supabase RLS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'architecture' && (
                  <div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '0.75rem' }}>
                      ENGINEERING FEEDBACK LOOP (CLOSED-LOOP CYCLE):
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.78rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: '#8B5CF6', fontWeight: 700 }}>1. MONITOR:</span>
                        <span style={{ color: 'var(--text-secondary)' }}>Ingest telemetry (sensors, weather, logistics)</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: '#38BDF8', fontWeight: 700 }}>2. ANALYZE:</span>
                        <span style={{ color: 'var(--text-secondary)' }}>Domain agent evaluation & threshold checks</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: '#F97316', fontWeight: 700 }}>3. DETECT:</span>
                        <span style={{ color: 'var(--text-secondary)' }}>Flag anomalies, risk scores, or expirations</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: '#E6A23C', fontWeight: 700 }}>4. DECIDE:</span>
                        <span style={{ color: 'var(--text-secondary)' }}>Synthesize structured action plan for operator review</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: '#10B981', fontWeight: 700 }}>5. ACT:</span>
                        <span style={{ color: 'var(--text-secondary)' }}>Execute approved action (solenoid, reroute, dispatch)</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: '#8B5CF6', fontWeight: 700 }}>6. VERIFY:</span>
                        <span style={{ color: 'var(--text-secondary)' }}>Poll post-execution delta & confirm resolution</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal Footer Status Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.5rem 1rem',
                  background: 'var(--bg-secondary)',
                  borderTop: '1px solid var(--border-subtle)',
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)'
                }}
              >
                <span>UTF-8 · TypeScript 5 · Vite 6</span>
                <span style={{ color: '#10B981' }}>● G H Patel College of Engineering and Technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
