import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, ArrowUpRight, Copy, Check, MessageSquare, ExternalLink } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioConfig } from '../data/portfolio';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'fallback'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format (name@example.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please write a message with at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Build standard mailto URL ensuring 100% genuine message transmission without fake backend mocks
    const encodedSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const encodedBody = encodeURIComponent(
      `Hello Shrey,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\n---\nSent via Shrey Patel Developer Portfolio`
    );

    const targetEmail = portfolioConfig.socials.emailConfig.address;
    const mailtoUrl = `mailto:${targetEmail}?subject=${encodedSubject}&body=${encodedBody}`;

    setTimeout(() => {
      // Trigger canvas confetti celebration for interactive delight
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch (err) {
        // Fallback gracefully if confetti unavailable
      }

      // Open user's default email client with pre-filled content
      window.open(mailtoUrl, '_blank');

      setIsSubmitting(false);
      setSubmitStatus('success');
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioConfig.socials.emailConfig.address);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28" style={{ padding: '5.5rem 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container-max">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="badge mb-3" style={{ marginBottom: '0.75rem' }}>
            INITIATE CONVERSATION
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Let's build something meaningful.
          </h2>
          <p style={{ maxWidth: '640px', color: 'var(--text-secondary)' }}>
            Have an opportunity, an idea, or a project worth exploring? I'd be happy to connect and exchange ideas.
          </p>
        </div>

        {/* 2-Column Split: Connect Channels & Verified Contact Form */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct Professional Channels */}
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Direct Connection Channels
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Feel free to reach out directly through professional social networks or dispatch a pre-formatted message below.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {/* LinkedIn Card */}
              <a
                href={portfolioConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="card-dev"
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  background: 'var(--bg-card)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.1)', color: '#38BDF8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LinkedinIcon size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      LinkedIn Profile
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      shrey-patel-86925b361
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={18} style={{ color: 'var(--text-muted)' }} />
              </a>

              {/* GitHub Card */}
              <a
                href={portfolioConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                className="card-dev"
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  background: 'var(--bg-card)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <GithubIcon size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      GitHub Repository
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      github.com/shrey-1802
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={18} style={{ color: 'var(--text-muted)' }} />
              </a>

              {/* Email Configuration Card */}
              <div
                className="card-dev"
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: '14px',
                  background: 'var(--bg-card)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Mail size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        Email Channel
                      </div>
                      <a 
                        href={`mailto:${portfolioConfig.socials.emailConfig.address}`}
                        style={{ fontSize: '0.85rem', color: '#10B981', fontFamily: 'var(--font-mono)', textDecoration: 'none', fontWeight: 600 }}
                      >
                        {portfolioConfig.socials.emailConfig.address}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <a
                      href={`mailto:${portfolioConfig.socials.emailConfig.address}`}
                      className="btn-ghost"
                      style={{ fontSize: '0.75rem', padding: '0.35rem 0.65rem' }}
                      title="Send email directly"
                    >
                      <ExternalLink size={14} />
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="btn-ghost"
                      style={{ fontSize: '0.75rem', padding: '0.35rem 0.65rem' }}
                      title="Copy Email Address"
                    >
                      {copiedEmail ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>

                <div style={{ fontSize: '0.75rem', color: '#10B981', fontFamily: 'var(--font-mono)', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.5rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
                  Direct verified inbox active
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div
            className="card-dev"
            style={{
              padding: '2.5rem',
              borderRadius: '20px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <MessageSquare size={18} className="text-violet-400" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                Send a Message
              </h3>
            </div>

            {submitStatus === 'success' ? (
              <div
                style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  textAlign: 'center'
                }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#10B981', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                  <CheckCircle2 size={28} />
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#10B981', marginBottom: '0.5rem' }}>
                  Message Drafted Successfully
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  Your email client has been prepared with your message to Shrey Patel. If it did not open automatically, you can also copy Shrey's email or reach out directly on LinkedIn.
                </p>
                <button
                  onClick={() => {
                    setSubmitStatus('idle');
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn-secondary"
                  style={{ fontSize: '0.85rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Name Field */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Maya Sharma / Tech Recruiter"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      background: 'var(--bg-input)',
                      border: errors.name ? '1px solid #EF4444' : '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit'
                    }}
                  />
                  {errors.name && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#EF4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                      <AlertCircle size={12} /> {errors.name}
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    YOUR EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. name@company.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      background: 'var(--bg-input)',
                      border: errors.email ? '1px solid #EF4444' : '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit'
                    }}
                  />
                  {errors.email && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#EF4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                      <AlertCircle size={12} /> {errors.email}
                    </div>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    SUBJECT *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Internship Opportunity / Project Collaboration"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      background: 'var(--bg-input)',
                      border: errors.subject ? '1px solid #EF4444' : '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit'
                    }}
                  />
                  {errors.subject && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#EF4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                      <AlertCircle size={12} /> {errors.subject}
                    </div>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    YOUR MESSAGE *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your note, feedback on my projects, or collaboration proposal..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      background: 'var(--bg-input)',
                      border: errors.message ? '1px solid #EF4444' : '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                  {errors.message && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#EF4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                      <AlertCircle size={12} /> {errors.message}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.85rem',
                    fontSize: '0.95rem',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    'Preparing Message...'
                  ) : (
                    <>
                      Send Message to Shrey <Send size={16} />
                    </>
                  )}
                </button>

                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textAlign: 'center' }}>
                  No false mock delivery · Direct mailto protocol with client pre-fill
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
