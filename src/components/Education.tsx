import React from 'react';
import { GraduationCap, BookOpen, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28" style={{ padding: '5rem 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)' }}>
      <div className="container-max">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="badge mb-3" style={{ marginBottom: '0.75rem' }}>
            ACADEMIC FOUNDATION
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Education & Engineering Degree.
          </h2>
          <p style={{ maxWidth: '680px', color: 'var(--text-secondary)' }}>
            Undergraduate engineering curriculum emphasizing computer science fundamentals, systems architecture, and algorithmic design.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div
          className="card-dev"
          style={{
            borderRadius: '20px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            padding: '2.5rem'
          }}
        >
          {/* Header Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '1.5rem',
              marginBottom: '2rem',
              paddingBottom: '1.75rem',
              borderBottom: '1px solid var(--border-subtle)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'rgba(139, 92, 246, 0.12)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  {educationData.institution}
                </h3>
                <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--accent-secondary)', marginTop: '0.2rem' }}>
                  {educationData.degree} — {educationData.branch}
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                <Calendar size={15} className="text-emerald-500" />
                {educationData.period}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.825rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                <MapPin size={13} />
                {educationData.location}
              </div>
            </div>
          </div>

          {/* Academic Summary */}
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
            {educationData.academicSummary}
          </p>

          {/* 2-Column Split: Coursework & Academic Highlights */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              marginBottom: '2rem'
            }}
          >
            {/* Relevant Coursework */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <BookOpen size={18} className="text-cyan-400" />
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                  Core Computer Science Coursework:
                </h4>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {educationData.coursework.map((course, idx) => (
                  <span key={idx} className="badge badge-neutral" style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}>
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Academic Highlights & Focus */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Award size={18} className="text-amber-400" />
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                  Academic & Technical Highlights:
                </h4>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {educationData.academicHighlights.map((h, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    <CheckCircle2 size={16} className="text-emerald-500" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CGPA & Semester Score Notice */}
          <div
            style={{
              padding: '1rem 1.25rem',
              borderRadius: '12px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem'
            }}
          >
            <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
              <strong>Semester Grade Tracking:</strong> {educationData.cgpaConfigurableNote}
            </div>
            <span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>
              Academic Integrity: Verified Data Only
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
