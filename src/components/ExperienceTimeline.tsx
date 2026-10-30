import React, { useState } from 'react';
import { Calendar, MapPin, Award, FileCheck, CheckCircle2, ExternalLink, Quote, Building2, ShieldCheck, X } from 'lucide-react';
import { experienceData } from '../data/experience';

export const ExperienceTimeline: React.FC = () => {
  const [activeLetterModal, setActiveLetterModal] = useState<boolean>(false);

  return (
    <section id="experience" className="py-20 md:py-28" style={{ padding: '5rem 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)' }}>
      <div className="container-max">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="badge mb-3" style={{ marginBottom: '0.75rem' }}>
            PROFESSIONAL EXPERIENCE & INTERNSHIPS
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Industry Experience & Research.
          </h2>
          <p style={{ maxWidth: '680px', color: 'var(--text-secondary)' }}>
            Practical engineering experience applying data science, statistical modeling, and machine learning on real-world datasets.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="card-dev"
              style={{
                borderRadius: '20px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                padding: '2.5rem',
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
                  gap: '1.25rem',
                  marginBottom: '1.75rem',
                  paddingBottom: '1.5rem',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span className="badge badge-cyan" style={{ fontSize: '0.75rem' }}>
                      {item.internshipType}
                    </span>
                    <span className="badge badge-emerald" style={{ fontSize: '0.72rem' }}>
                      <CheckCircle2 size={12} className="inline mr-1" /> Verified by Founder & Supervisor
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                    {item.position}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.35rem' }}>
                    <Building2 size={16} className="text-violet-400" />
                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                      {item.company}
                    </span>
                  </div>
                </div>

                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    <Calendar size={15} className="text-emerald-500" />
                    {item.dates}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                    <MapPin size={13} />
                    {item.location} ({item.duration})
                  </div>
                </div>
              </div>

              {/* Responsibilities & Contributions Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '2rem',
                  marginBottom: '2rem'
                }}
              >
                {/* Responsibilities */}
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.85rem', textTransform: 'uppercase' }}>
                    Technical Engineering Scope & Execution:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {item.responsibilities.map((r, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        <span style={{ color: 'var(--accent-secondary)', marginTop: '3px', fontWeight: 700 }}>▹</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Supervisor Endorsement & Key Contributions */}
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.85rem', textTransform: 'uppercase' }}>
                    Supervisor Endorsement & Recommendation:
                  </div>

                  {item.recommendationExcerpt && (
                    <div
                      style={{
                        background: 'var(--bg-secondary)',
                        padding: '1.25rem',
                        borderRadius: '12px',
                        border: '1px solid var(--border-subtle)',
                        borderLeft: '4px solid #10B981',
                        marginBottom: '1rem',
                        position: 'relative'
                      }}
                    >
                      <Quote size={20} style={{ color: 'var(--border-subtle)', position: 'absolute', top: '10px', right: '12px' }} />
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '0.75rem' }}>
                        "{item.recommendationExcerpt}"
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.5rem' }}>
                        <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                          — {item.supervisorName}
                        </span>
                        <span style={{ color: 'var(--text-muted)' }}>
                          {item.supervisorTitle}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Skills Gained Tags */}
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                      PRACTICAL COMPETENCIES MASTERED:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {item.skillsGained.map((s, i) => (
                        <span key={i} className="badge badge-neutral" style={{ fontSize: '0.72rem' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Credentials & Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1.25rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--border-subtle)',
                  background: 'rgba(255, 255, 255, 0.01)',
                  borderRadius: '12px',
                  padding: '1.25rem'
                }}
              >
                {/* Tech Badges & Credential IDs */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.65rem' }}>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      TECHNOLOGIES:
                    </span>
                    {item.technologies.map((tech, i) => (
                      <span key={i} className="badge" style={{ fontSize: '0.72rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {item.credentialIds && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                      {item.credentialIds.map((cred, i) => (
                        <div key={i} style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
                          <span style={{ color: 'var(--text-muted)' }}>{cred.label}:</span>{' '}
                          <code style={{ background: 'var(--bg-secondary)', padding: '2px 6px', borderRadius: '4px', color: '#38BDF8', border: '1px solid var(--border-subtle)' }}>
                            {cred.id}
                          </code>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Verification Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <button
                    onClick={() => setActiveLetterModal(true)}
                    className="btn-secondary"
                    style={{
                      padding: '0.55rem 1rem',
                      fontSize: '0.85rem',
                      borderRadius: '8px',
                      cursor: 'pointer'
                    }}
                  >
                    <FileCheck size={15} className="text-violet-400" />
                    Read Recommendation Letter
                  </button>

                  {item.verificationUrl && (
                    <a
                      href={item.verificationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                      style={{
                        padding: '0.55rem 1rem',
                        fontSize: '0.85rem',
                        borderRadius: '8px'
                      }}
                    >
                      <ShieldCheck size={15} />
                      Verify On Finlatics Portal <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Official Recommendation Letter Modal */}
        {activeLetterModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 60,
              background: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(6px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.25rem'
            }}
            onClick={() => setActiveLetterModal(false)}
          >
            <div
              className="card-dev max-w-2xl w-full p-6 text-left"
              style={{
                maxWidth: '680px',
                width: '100%',
                padding: '2rem',
                background: 'var(--bg-card)',
                borderRadius: '20px',
                border: '1px solid var(--border-subtle)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.7)',
                maxHeight: '90vh',
                overflowY: 'auto'
              }}
              onClick={e => e.stopPropagation()}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(139, 92, 246, 0.15)', color: '#8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Award size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>Letter of Experience & Recommendation</h3>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      Finlatics · Fincrux Technologies (AIC-NMIMS / NITI Aayog)
                    </div>
                  </div>
                </div>
                <button onClick={() => setActiveLetterModal(false)} className="btn-ghost" style={{ padding: '0.25rem 0.5rem', cursor: 'pointer' }}>
                  <X size={20} />
                </button>
              </div>

              <div style={{ background: 'var(--bg-secondary)', borderRadius: '12px', padding: '1.5rem', border: '1px solid var(--border-subtle)', marginBottom: '1.5rem', lineHeight: 1.75, fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  TO WHOM IT MAY CONCERN:
                </div>
                <p style={{ marginBottom: '1rem' }}>
                  This is to state that I have known <strong>SHREY NIKHILKUMAR PATEL</strong> for past 2 months, working with Python on the <strong>Finlatics Data Science Experience Program</strong>.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  Fincrux is recognised as a 'Start - Up' by Department of Industry & Internal Trade (DPIIT), Ministry of Commerce & Industry, Government of India. It is one of start-ups selected for the prestigious incubation program at Atal Incubation Centre - NMIMS, supported by the Atal Innovation Mission, under the aegis of NITI Aayog, Government of India.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  I was supervising <strong>SHREY NIKHILKUMAR PATEL</strong> for the Finlatics Data Science Experience Program. During their time with us, SHREY NIKHILKUMAR PATEL has successfully completed several data analysis projects, showcasing their ability to translate business objectives into actionable data-driven solutions.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  SHREY NIKHILKUMAR PATEL's adeptness at navigating complex datasets and extracting meaningful insights has been instrumental in driving informed decision-making. Their proficiency in utilizing various statistical techniques, coupled with a robust understanding of Python, has enabled them to develop valuable data insights. Their attention to detail, critical thinking skills, and keen interest in statistical methods have consistently led to high-quality deliverables and innovative approaches to problem-solving.
                </p>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', marginTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Nisant Mohta</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Founder, Finlatics</div>
                  </div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#10B981' }}>
                    ● Official Seal & Stamp Verified
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'space-between', alignItems: 'center' }}>
                <a
                  href="https://finlatics.com/credentialscheck"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '0.85rem' }}
                >
                  Verify Credential on finlatics.com <ExternalLink size={14} />
                </a>

                <button
                  onClick={() => setActiveLetterModal(false)}
                  className="btn-secondary"
                  style={{ fontSize: '0.85rem' }}
                >
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
