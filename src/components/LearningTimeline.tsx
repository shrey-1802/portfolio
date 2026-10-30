import React, { useState } from 'react';
import { Award, Flame } from 'lucide-react';
import { learningData } from '../data/learning';

export const LearningTimeline: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [certAlert, setCertAlert] = useState<string | null>(null);

  const filterOptions = ['All', 'Hackathon', 'Technical Milestone', 'Course', 'Currently Exploring'];

  const filteredItems = selectedFilter === 'All'
    ? learningData
    : learningData.filter(item => item.category === selectedFilter);

  return (
    <section id="learning" className="py-20 md:py-28" style={{ padding: '5rem 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container-max">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="badge mb-3" style={{ marginBottom: '0.75rem' }}>
            CONTINUOUS LEARNING & HACKATHONS
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Learning Journey & Milestones.
          </h2>
          <p style={{ maxWidth: '680px', color: 'var(--text-secondary)' }}>
            Documenting competitive hackathons, academic engineering courses, architecture milestones, and active areas of technical exploration.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2.5rem'
          }}
        >
          {filterOptions.map((f, i) => (
            <button
              key={i}
              onClick={() => setSelectedFilter(f)}
              style={{
                background: selectedFilter === f ? 'var(--accent-primary)' : 'var(--bg-card)',
                color: selectedFilter === f ? '#FFFFFF' : 'var(--text-secondary)',
                border: selectedFilter === f ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                borderRadius: '8px',
                padding: '0.45rem 1rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Timeline Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="card-dev"
              style={{
                borderRadius: '16px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                padding: '1.75rem',
                position: 'relative'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <span
                      className="badge"
                      style={{
                        background: item.category === 'Hackathon' ? 'rgba(249, 115, 22, 0.15)' : 'rgba(139, 92, 246, 0.15)',
                        borderColor: item.category === 'Hackathon' ? 'rgba(249, 115, 22, 0.35)' : 'rgba(139, 92, 246, 0.35)',
                        color: item.category === 'Hackathon' ? '#F97316' : '#A78BFA',
                        fontSize: '0.72rem'
                      }}
                    >
                      {item.category === 'Hackathon' && <Flame size={12} className="mr-1 inline" />}
                      {item.category}
                    </span>

                    {item.highlightBadge && (
                      <span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>
                        {item.highlightBadge}
                      </span>
                    )}

                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        background: item.status === 'Completed' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(56, 189, 248, 0.1)',
                        color: item.status === 'Completed' ? '#10B981' : '#38BDF8',
                        border: item.status === 'Completed' ? '1px solid rgba(16, 185, 129, 0.25)' : '1px solid rgba(56, 189, 248, 0.25)'
                      }}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                    {item.title}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', marginTop: '0.2rem', fontWeight: 600 }}>
                    {item.providerOrEvent}
                  </div>
                </div>

                <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  {item.date}
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {item.description}
              </p>

              {/* Key Takeaways */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  Core Technical Takeaways:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {item.keyTakeaways.map((k, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: '#10B981', marginTop: '2px' }}>✓</span>
                      <span>{k}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificate Action Footer */}
              {item.certificateUrl && (
                <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    onClick={() => setCertAlert(item.title)}
                    className="btn-ghost"
                    style={{ fontSize: '0.78rem', color: 'var(--accent-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                  >
                    <Award size={14} /> Certificate Verification Ready
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Certificate Alert Banner */}
        {certAlert && (
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
            onClick={() => setCertAlert(null)}
          >
            <div
              className="card-dev max-w-md w-full p-6 text-left"
              style={{
                maxWidth: '460px',
                width: '100%',
                padding: '1.75rem',
                background: 'var(--bg-card)',
                borderRadius: '16px',
                border: '1px solid var(--border-subtle)'
              }}
              onClick={e => e.stopPropagation()}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Certificate Verification: {certAlert}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                Shrey's hackathon exposure and completion certificate will be linked here directly. Submit your verified certificate document to embed the live preview.
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={() => setCertAlert(null)} className="btn-primary" style={{ fontSize: '0.85rem' }}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
