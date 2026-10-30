import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Award, 
  FileCheck, 
  CheckCircle2, 
  ExternalLink, 
  Quote, 
  Building2, 
  ShieldCheck, 
  X, 
  Sprout, 
  Leaf, 
  ZoomIn, 
  Copy, 
  Check, 
  Download,
  Eye
} from 'lucide-react';
import { experienceData } from '../data/experience';
import type { ExperienceDocument } from '../types';
import { SpotlightCard } from './SpotlightCard';

export const ExperienceTimeline: React.FC = () => {
  // Collect all documents across all experience items for seamless tab switching in modal
  const allDocuments: { doc: ExperienceDocument; company: string }[] = experienceData.flatMap(item => 
    (item.documents || []).map(d => ({ doc: d, company: item.company }))
  );

  const [activeDoc, setActiveDoc] = useState<ExperienceDocument | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<boolean>(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(text);
    setTimeout(() => setCopiedId(null), 2200);
  };

  const openDocumentModal = (doc: ExperienceDocument) => {
    setActiveDoc(doc);
    setZoomLevel(false);
  };

  return (
    <section id="experience" className="nature-experience-section py-20 md:py-28" style={{ padding: '5.5rem 0' }}>
      {/* Organic Nature Background Matrix */}
      <div className="nature-organic-bg" aria-hidden="true" />

      <div className="container-max" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header with Nature Badge */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="nature-badge" style={{ marginBottom: '0.85rem' }}>
            <Sprout size={14} className="text-emerald-400" />
            PRACTICAL INDUSTRY & ACADEMIC IMMERSIONS
          </div>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.8vw, 2.75rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.85rem', letterSpacing: '-0.025em' }}>
            Real-World Industry & Academic Growth.
          </h2>
          <p style={{ maxWidth: '720px', color: 'var(--nature-text-muted)', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Practical engineering experience translating complex datasets into actionable statistical solutions, alongside international immersion in sustainable technology and enterprise digital ecosystems.
          </p>

          {/* Natural Organic Highlights Strip */}
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '1rem', 
              marginTop: '1.5rem',
              padding: '1rem 1.25rem',
              background: 'var(--nature-bg-card)',
              borderRadius: '12px',
              border: '1px solid var(--nature-border)',
              maxWidth: '820px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
              DPIIT Recognized Start-Up Experience
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34D399', display: 'inline-block' }} />
              Atal Incubation Centre (NMIMS / NITI Aayog)
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F59E0B', display: 'inline-block' }} />
              SUSS Singapore International Masterclass
            </div>
          </div>
        </div>

        {/* Nature Timeline Branch Container */}
        <div className="nature-timeline-container">
          <div className="nature-timeline-vine" aria-hidden="true" />

          {experienceData.map((item, idx) => (
            <SpotlightCard
              key={item.id}
              tilt={false}
              spotlightColor="rgba(16, 185, 129, 0.16)"
              className="nature-card"
              style={{
                marginLeft: '0',
                position: 'relative'
              }}
            >
              {/* Nature Sprout Node Indicator (desktop left side) */}
              <div 
                style={{
                  position: 'absolute',
                  top: '2.5rem',
                  left: '-44px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--nature-bg-deep)',
                  border: '2px solid #10B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#34D399',
                  boxShadow: '0 0 12px rgba(16, 185, 129, 0.4)'
                }}
                className="hidden md:flex"
              >
                {idx === 0 ? <Sprout size={16} /> : <Leaf size={16} />}
              </div>

              {/* Card Header: Role, Badges, Company, Duration */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1.25rem',
                  marginBottom: '1.75rem',
                  paddingBottom: '1.5rem',
                  borderBottom: '1px solid var(--nature-border)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
                    <span className="nature-badge" style={{ fontSize: '0.75rem' }}>
                      <Leaf size={12} className="inline mr-1" />
                      {item.internshipType}
                    </span>
                    <span className="nature-badge-amber" style={{ fontSize: '0.72rem' }}>
                      <CheckCircle2 size={12} className="inline mr-1" /> Verified Credentials & Recommendation
                    </span>
                  </div>

                  <h3 style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                    {item.position}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.45rem' }}>
                    <Building2 size={16} style={{ color: 'var(--nature-sprout)' }} />
                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {item.company}
                    </span>
                  </div>

                  {item.growthFocus && (
                    <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--nature-mint)', fontFamily: 'var(--font-mono)' }}>
                      Focus: {item.growthFocus}
                    </div>
                  )}
                </div>

                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    <Calendar size={15} style={{ color: 'var(--nature-sprout)' }} />
                    {item.dates}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.825rem', color: 'var(--nature-text-muted)' }}>
                    <MapPin size={13} />
                    {item.location} ({item.duration})
                  </div>
                </div>
              </div>

              {/* Responsibilities & Endorsements Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '2rem',
                  marginBottom: '2rem'
                }}
              >
                {/* Engineering Responsibilities */}
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--nature-mint)', marginBottom: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Core Engineering Scope & Deliverables:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {item.responsibilities.map((r, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        <span style={{ color: 'var(--nature-sprout)', marginTop: '2px', fontWeight: 700 }}>🌱</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Practical Skills Gained */}
                  <div style={{ marginTop: '1.5rem' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--nature-text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                      Competencies Mastered:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                      {item.skillsGained.map((s, i) => (
                        <span key={i} className="nature-badge" style={{ fontSize: '0.72rem', background: 'rgba(52, 211, 153, 0.08)' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Supervisor Recommendation / Quote & Official Seal */}
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--nature-mint)', marginBottom: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Supervisor Endorsement & Verification:
                  </div>

                  {item.recommendationExcerpt && (
                    <div
                      style={{
                        background: 'var(--nature-bg-surface)',
                        padding: '1.4rem',
                        borderRadius: '14px',
                        border: '1px solid var(--nature-border)',
                        borderLeft: '4px solid #10B981',
                        marginBottom: '1.25rem',
                        position: 'relative'
                      }}
                    >
                      <Quote size={22} style={{ color: 'rgba(16, 185, 129, 0.25)', position: 'absolute', top: '12px', right: '14px' }} />
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1rem' }}>
                        "{item.recommendationExcerpt}"
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem', borderTop: '1px solid var(--nature-border)', paddingTop: '0.65rem' }}>
                        <div>
                          <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                            — {item.supervisorName}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--nature-text-muted)' }}>
                            {item.supervisorTitle}
                          </div>
                        </div>
                        <span className="nature-badge" style={{ fontSize: '0.7rem' }}>
                          <CheckCircle2 size={12} className="inline mr-1" /> Official Seal
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Technologies Used */}
                  <div>
                    <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--nature-text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                      Applied Technologies:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {item.technologies.map((tech, i) => (
                        <span key={i} className="badge" style={{ fontSize: '0.75rem', background: 'var(--nature-bg-surface)', border: '1px solid var(--nature-border)' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* VERIFIED DOCUMENTS GALLERY (Authentic Certificates & Recommendation Letter) */}
              {item.documents && item.documents.length > 0 && (
                <div 
                  style={{
                    paddingTop: '1.75rem',
                    borderTop: '1px solid var(--nature-border)',
                    marginTop: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FileCheck size={18} style={{ color: 'var(--nature-sprout)' }} />
                      <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                        VERIFIED DOCUMENTS & CERTIFICATIONS ({item.documents.length})
                      </span>
                    </div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--nature-text-muted)' }}>
                      Click any document to inspect full-resolution credential
                    </span>
                  </div>

                  {/* Document Thumbnail Cards Grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                      gap: '1.25rem'
                    }}
                  >
                    {item.documents.map((doc) => (
                      <div
                        key={doc.id}
                        className="nature-doc-thumb"
                        onClick={() => openDocumentModal(doc)}
                      >
                        <div style={{ position: 'relative', overflow: 'hidden' }}>
                          <img 
                            src={doc.imagePath} 
                            alt={doc.title} 
                            loading="lazy" 
                          />
                          <div 
                            style={{ 
                              position: 'absolute', 
                              inset: 0, 
                              background: 'rgba(0,0,0,0.4)', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              opacity: 0,
                              transition: 'opacity 0.2s ease',
                              color: '#fff',
                              fontSize: '0.85rem',
                              fontWeight: 600,
                              gap: '0.4rem'
                            }}
                            className="hover:opacity-100"
                          >
                            <ZoomIn size={18} /> Inspect Document
                          </div>
                        </div>

                        <div style={{ padding: '0.9rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', flexGrow: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                            <span 
                              style={{ 
                                fontSize: '0.68rem', 
                                fontFamily: 'var(--font-mono)', 
                                color: doc.category === 'recommendation' ? '#F59E0B' : '#10B981',
                                textTransform: 'uppercase',
                                fontWeight: 700
                              }}
                            >
                              {doc.category === 'recommendation' ? 'Recommendation Letter' : doc.category === 'certificate' ? 'Verified Certificate' : 'Participation'}
                            </span>
                            {doc.credentialId && (
                              <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--nature-text-muted)' }}>
                                {doc.credentialId.slice(0, 10)}...
                              </span>
                            )}
                          </div>

                          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.35 }}>
                            {doc.title}
                          </div>

                          {doc.signer && (
                            <div style={{ fontSize: '0.75rem', color: 'var(--nature-text-muted)', marginTop: 'auto', paddingTop: '0.35rem' }}>
                              Signer: {doc.signer}
                            </div>
                          )}

                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.5rem', marginTop: '0.25rem', borderTop: '1px solid var(--nature-border)' }}>
                            <span style={{ fontSize: '0.75rem', color: 'var(--nature-sprout)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                              <Eye size={13} /> View Full
                            </span>
                            <span style={{ fontSize: '0.72rem', color: 'var(--nature-text-muted)' }}>
                              {doc.issueDate}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Credential Verification & Links */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  paddingTop: '1.25rem',
                  marginTop: '1.5rem',
                  borderTop: '1px solid var(--nature-border)',
                  fontSize: '0.85rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {item.credentialIds && item.credentialIds.map((cred, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                      <span style={{ color: 'var(--nature-text-muted)', fontSize: '0.75rem' }}>{cred.label}:</span>
                      <code style={{ background: 'var(--nature-bg-surface)', padding: '2px 8px', borderRadius: '6px', color: 'var(--nature-mint)', border: '1px solid var(--nature-border)', fontSize: '0.75rem' }}>
                        {cred.id}
                      </code>
                      <button 
                        onClick={() => handleCopy(cred.id)}
                        className="btn-ghost"
                        title="Copy Credential ID"
                        style={{ padding: '2px 6px', cursor: 'pointer', borderRadius: '4px' }}
                      >
                        {copiedId === cred.id ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                      </button>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  {item.verificationUrl && (
                    <a
                      href={item.verificationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                      style={{
                        padding: '0.55rem 1rem',
                        fontSize: '0.85rem',
                        borderRadius: '8px',
                        background: '#10B981',
                        color: '#08090D',
                        fontWeight: 700
                      }}
                    >
                      <ShieldCheck size={15} />
                      Verify on Finlatics Portal <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* ==========================================================================
            NATURE DOCUMENT VIEWER & LIGHTBOX MODAL
            ========================================================================== */}
        {activeDoc && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 70,
              background: 'rgba(5, 10, 8, 0.88)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem'
            }}
            onClick={() => setActiveDoc(null)}
          >
            <div
              className="nature-card w-full p-4 md:p-6 text-left"
              style={{
                maxWidth: '920px',
                width: '100%',
                background: 'var(--nature-bg-card)',
                borderRadius: '20px',
                border: '1px solid var(--nature-border)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85)',
                maxHeight: '92vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  paddingBottom: '1rem', 
                  borderBottom: '1px solid var(--nature-border)' 
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div 
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '10px', 
                      background: 'rgba(16, 185, 129, 0.15)', 
                      color: '#10B981', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}
                  >
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                      {activeDoc.title}
                    </h3>
                    <div style={{ fontSize: '0.78rem', color: 'var(--nature-text-muted)' }}>
                      {activeDoc.signer || 'Official Verified Credential'} · {activeDoc.issueDate}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button 
                    onClick={() => setActiveDoc(null)} 
                    className="btn-ghost" 
                    style={{ padding: '0.4rem', cursor: 'pointer', borderRadius: '8px' }}
                    aria-label="Close document viewer"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Document Switcher Tabs */}
              <div 
                style={{ 
                  display: 'flex', 
                  overflowX: 'auto', 
                  gap: '0.5rem', 
                  padding: '0.75rem 0', 
                  borderBottom: '1px solid var(--nature-border)',
                  scrollbarWidth: 'none'
                }}
              >
                {allDocuments.map(({ doc, company }) => (
                  <button
                    key={doc.id}
                    onClick={() => { setActiveDoc(doc); setZoomLevel(false); }}
                    style={{
                      padding: '0.4rem 0.85rem',
                      borderRadius: '8px',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                      border: activeDoc.id === doc.id ? '1px solid #10B981' : '1px solid var(--nature-border)',
                      background: activeDoc.id === doc.id ? 'rgba(16, 185, 129, 0.15)' : 'var(--nature-bg-surface)',
                      color: activeDoc.id === doc.id ? '#34D399' : 'var(--nature-text-muted)',
                      fontWeight: activeDoc.id === doc.id ? 700 : 500,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: activeDoc.id === doc.id ? '#10B981' : 'transparent', border: '1px solid #10B981' }} />
                    {doc.title.split(':')[0]} ({company.split(' ')[0]})
                  </button>
                ))}
              </div>

              {/* Main Document Display with Zoom capability */}
              <div 
                style={{ 
                  flexGrow: 1, 
                  overflowY: 'auto', 
                  padding: '1.25rem 0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: 'rgba(0,0,0,0.25)',
                  borderRadius: '12px',
                  margin: '0.75rem 0',
                  position: 'relative'
                }}
              >
                <div 
                  style={{
                    position: 'relative',
                    cursor: zoomLevel ? 'zoom-out' : 'zoom-in',
                    maxWidth: zoomLevel ? '100%' : '760px',
                    transition: 'all 0.25s ease'
                  }}
                  onClick={() => setZoomLevel(!zoomLevel)}
                  title="Click to toggle zoom"
                >
                  <img
                    src={activeDoc.imagePath}
                    alt={activeDoc.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
                      border: '1px solid var(--nature-border)'
                    }}
                  />
                  
                  {/* Subtle click to zoom hint */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      background: 'rgba(0,0,0,0.7)',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#E5E7EB',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <ZoomIn size={12} /> {zoomLevel ? 'Click to reset zoom' : 'Click to zoom in'}
                  </div>
                </div>
              </div>

              {/* Modal Footer Controls */}
              <div 
                style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '0.75rem', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--nature-border)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {activeDoc.credentialId && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                      <span style={{ color: 'var(--nature-text-muted)' }}>Auth Credential:</span>
                      <code style={{ background: 'var(--nature-bg-surface)', padding: '3px 8px', borderRadius: '6px', color: '#34D399', border: '1px solid var(--nature-border)' }}>
                        {activeDoc.credentialId}
                      </code>
                      <button
                        onClick={() => activeDoc.credentialId && handleCopy(activeDoc.credentialId)}
                        className="btn-ghost"
                        style={{ padding: '4px 8px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem' }}
                      >
                        {copiedId === activeDoc.credentialId ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      </button>
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {activeDoc.pdfPath && (
                    <a
                      href={activeDoc.pdfPath}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary"
                      style={{ fontSize: '0.825rem', padding: '0.5rem 0.9rem', borderRadius: '8px' }}
                    >
                      <Download size={14} /> Open Original PDF
                    </a>
                  )}

                  {activeDoc.verificationUrl && (
                    <a
                      href={activeDoc.verificationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                      style={{
                        fontSize: '0.825rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        background: '#10B981',
                        color: '#08090D',
                        fontWeight: 700
                      }}
                    >
                      <ShieldCheck size={14} />
                      Verify on finlatics.com <ExternalLink size={13} />
                    </a>
                  )}

                  <button
                    onClick={() => setActiveDoc(null)}
                    className="btn-ghost"
                    style={{ fontSize: '0.825rem', padding: '0.5rem 0.9rem', borderRadius: '8px' }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
