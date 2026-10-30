import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioConfig } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-card)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '4rem 0 2.5rem 0'
      }}
    >
      <div className="container-max">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: '2rem'
          }}
        >
          {/* Brand info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #8B5CF6 0%, #38BDF8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1.15rem',
                color: '#FFFFFF'
              }}
            >
              SP
            </div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Shrey Patel
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                G H Patel College of Engineering and Technology · Class of 2029
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={portfolioConfig.socials.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '0.5rem 0.85rem', fontSize: '0.85rem', borderRadius: '8px' }}
              title="GitHub Profile"
            >
              <GithubIcon size={16} /> GitHub
            </a>
            <a
              href={portfolioConfig.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '0.5rem 0.85rem', fontSize: '0.85rem', borderRadius: '8px' }}
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="btn-secondary"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.85rem',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>

        {/* Bottom Sub-row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Shrey Patel. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>Architected with React 18 & TypeScript</span>
            <span>·</span>
            <span>Zero-AI Gimmick Aesthetics</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
