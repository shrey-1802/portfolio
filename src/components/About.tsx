import React from 'react';
import { Compass, Cpu, Workflow, Zap, GraduationCap, MapPin, Calendar, Building, Sparkles, Code2, BrainCircuit } from 'lucide-react';
import { portfolioConfig } from '../data/portfolio';
import { hobbiesData } from '../data/hobbies';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28" style={{ padding: '5rem 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container-max">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="badge mb-3" style={{ marginBottom: '0.75rem' }}>
            ABOUT THE DEVELOPER
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Curiosity, Practical Engineering, & System Building.
          </h2>
          <p style={{ maxWidth: '680px', color: 'var(--text-secondary)' }}>
            Bridging theoretical computer engineering fundamentals with working software products that solve concrete operational problems.
          </p>
        </div>

        {/* Split Layout: Narrative & Compact Profile Panel */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
            marginBottom: '4rem'
          }}
        >
          {/* Left Column: Natural Narrative */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              {portfolioConfig.aboutParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: '1.025rem',
                    lineHeight: 1.75,
                    color: index === 0 ? 'var(--text-primary)' : 'var(--text-secondary)'
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Values Cards Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1rem',
                marginTop: '1.5rem'
              }}
            >
              {portfolioConfig.coreValues.map((value, idx) => (
                <div
                  key={idx}
                  className="card-dev"
                  style={{
                    padding: '1.25rem',
                    borderRadius: '12px',
                    background: 'var(--bg-card)'
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(139, 92, 246, 0.1)',
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '0.75rem'
                    }}
                  >
                    {idx === 0 && <Compass size={18} />}
                    {idx === 1 && <Cpu size={18} />}
                    {idx === 2 && <Workflow size={18} />}
                    {idx === 3 && <Zap size={18} />}
                  </div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    {value.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Compact Personal Profile Panel */}
          <div
            className="card-dev"
            style={{
              padding: '2rem',
              borderRadius: '18px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #38BDF8 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.35rem',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 16px rgba(139, 92, 246, 0.35)'
                }}
              >
                SP
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  Shrey Patel
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', fontWeight: 600 }}>
                  Aspiring Software Developer & Engineer
                </div>
              </div>
            </div>

            {/* Profile Spec Rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Building size={18} style={{ color: 'var(--accent-primary)', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    INSTITUTION
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {portfolioConfig.institution}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <GraduationCap size={18} style={{ color: 'var(--accent-secondary)', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    DEGREE & BRANCH
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    B.E. in {portfolioConfig.branch}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Calendar size={18} style={{ color: '#10B981', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    CLASS & GRADUATION
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Class of {portfolioConfig.graduationYear} (Undergraduate)
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={18} style={{ color: '#F97316', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    LOCATION
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Gujarat, India
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Status Box */}
            <div
              style={{
                marginTop: '1.75rem',
                padding: '1rem',
                borderRadius: '12px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }}></span>
                <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-primary)', fontWeight: 600 }}>
                  CURRENT STATUS: OPEN FOR INTERNSHIPS
                </span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Actively seeking summer internships, hackathon collaborations, and engineering projects where I can contribute code and learn from seasoned engineering mentors.
              </p>
            </div>
          </div>
        </div>

        {/* Hobbies & Interests Area (Editable & Configurable) */}
        <div
          className="card-dev"
          style={{
            padding: '2rem',
            borderRadius: '18px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
            <div>
              <div className="badge badge-neutral mb-1" style={{ fontSize: '0.7rem' }}>
                PERSONAL EXPLORATIONS & HOBBIES
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                Beyond the Code Editor
              </h3>
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              CONFIGURABLE SECTION · NO FABRICATED CLAIMS
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {hobbiesData.items.map(item => (
              <div
                key={item.id}
                style={{
                  background: 'var(--bg-secondary)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  {item.iconName === 'Code2' && <Code2 size={16} className="text-violet-400" />}
                  {item.iconName === 'BrainCircuit' && <BrainCircuit size={16} className="text-cyan-400" />}
                  {item.iconName === 'Cpu' && <Cpu size={16} className="text-emerald-400" />}
                  {item.iconName === 'Sparkles' && <Sparkles size={16} className="text-amber-400" />}
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    {item.category}
                  </span>
                </div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
