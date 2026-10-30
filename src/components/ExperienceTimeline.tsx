import React, { useState } from 'react';
import { Calendar, MapPin, Award, FileCheck } from 'lucide-react';
import { experienceData } from '../data/experience';

export const ExperienceTimeline: React.FC = () => {
  const [activeCertModal, setActiveCertModal] = useState<string | null>(null);

  return (
    <section id="experience" className="py-20 md:py-28" style={{ padding: '5rem 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)' }}>
      <div className="container-max">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="badge mb-3" style={{ marginBottom: '0.75rem' }}>
            PROFESSIONAL TIMELINE & INTERNSHIPS
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Internship & Industry Experience.
          </h2>
          <p style={{ maxWidth: '680px', color: 'var(--text-secondary)' }}>
            Practical engineering exposure, collaborative agile workflows, and production software contributions.
          </p>
        </div>

        {/* User Configuration Notice & Certificate Readiness Banner */}
        <div
          className="card-dev mb-8"
          style={{
            padding: '1.25rem 1.5rem',
            borderRadius: '14px',
            background: 'var(--bg-card)',
            borderLeft: '4px solid var(--accent-primary)',
            marginBottom: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
            <FileCheck size={22} className="text-violet-400" style={{ color: 'var(--accent-primary)', marginTop: '2px', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                Internship Completion Certificate & Experience Letter Integration Ready
              </div>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Structured to host Shrey's official completion certificate, company experience letter, and specific project milestones upon submission.
              </p>
            </div>
          </div>
          <span className="badge" style={{ fontSize: '0.72rem' }}>
            Awaiting Verification Upload
          </span>
        </div>

        {/* Experience Timeline Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="card-dev"
              style={{
                borderRadius: '16px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Top Row: Role, Company, Dates */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <span className="badge badge-cyan" style={{ fontSize: '0.72rem' }}>
                      {item.internshipType}
                    </span>
                    {item.isConfigurablePlaceholder && (
                      <span className="badge badge-neutral" style={{ fontSize: '0.68rem' }}>
                        Editable Placeholder
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                    {item.position}
                  </h3>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent-primary)', marginTop: '0.2rem' }}>
                    {item.company}
                  </div>
                </div>

                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                    <Calendar size={14} />
                    {item.dates}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <MapPin size={13} />
                    {item.location} ({item.duration})
                  </div>
                </div>
              </div>

              {/* Responsibilities & Contributions Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.75rem',
                  marginBottom: '1.75rem'
                }}
              >
                {/* Responsibilities */}
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                    Key Engineering Responsibilities:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {item.responsibilities.map((r, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--accent-secondary)', marginTop: '4px' }}>▹</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Contributions & Skills */}
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                    Contributions & Competencies Gained:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ background: 'var(--bg-secondary)', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>
                        CONTRIBUTIONS:
                      </div>
                      <div style={{ fontSize: '0.825rem', color: 'var(--text-primary)' }}>
                        {item.contributions.join(' · ')}
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
                        SKILLS GAINED:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {item.skillsGained.map((s, i) => (
                          <span key={i} className="badge badge-neutral" style={{ fontSize: '0.7rem' }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies & Certificate Footer */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    STACK:
                  </span>
                  {item.technologies.map((tech, i) => (
                    <span key={i} className="badge" style={{ fontSize: '0.72rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div>
                  <button
                    onClick={() => setActiveCertModal(item.id)}
                    className="btn-secondary"
                    style={{
                      padding: '0.45rem 0.85rem',
                      fontSize: '0.8rem',
                      borderRadius: '8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <Award size={14} className="text-violet-400" />
                    Verify Experience Letter / Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal Dialog */}
        {activeCertModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 60,
              background: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(6px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem'
            }}
            onClick={() => setActiveCertModal(null)}
          >
            <div
              className="card-dev max-w-md w-full p-6 text-left"
              style={{
                maxWidth: '460px',
                width: '100%',
                padding: '1.75rem',
                background: 'var(--bg-card)',
                borderRadius: '16px',
                border: '1px solid var(--border-subtle)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6)'
              }}
              onClick={e => e.stopPropagation()}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(139, 92, 246, 0.15)', color: '#8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Award size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Certificate Verification</h3>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Experience ID: {activeCertModal}</div>
                </div>
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.55 }}>
                Official certificate of completion and experience letter will be displayed here once verified. Shrey will provide the exact document credentials and issuer verification link.
              </p>

              <div style={{ background: 'var(--bg-secondary)', borderRadius: '10px', padding: '0.85rem', border: '1px solid var(--border-subtle)', marginBottom: '1.25rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Status: Ready to link official scanned PDF / digital badge.
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setActiveCertModal(null)}
                  className="btn-primary"
                  style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
