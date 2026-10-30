import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useTheme } from '../context/ThemeContext';
import { portfolioConfig } from '../data/portfolio';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isCaseStudyPage = location.pathname.startsWith('/projects/');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isCaseStudyPage) {
        const sections = ['contact', 'education', 'learning', 'experience', 'skills', 'about', 'projects'];
        for (const sec of sections) {
          const el = document.getElementById(sec);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200) {
              setActiveSection(sec);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCaseStudyPage]);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (isCaseStudyPage) {
      navigate('/#' + sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { label: 'Projects', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Learning', id: 'learning' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#08090D]/90 dark:bg-[#08090D]/90 light:bg-[#F8FAFC]/90 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-sm'
            : 'py-5 bg-transparent'
        }`}
        style={{
          backgroundColor: scrolled ? 'var(--bg-overlay)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border-subtle)' : 'none'
        }}
      >
        <div className="container-max flex items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Custom SP Monogram Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 text-decoration-none group"
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white transition-transform group-hover:scale-105"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #8B5CF6 0%, #38BDF8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1rem',
                letterSpacing: '-0.02em',
                boxShadow: '0 2px 10px rgba(139, 92, 246, 0.35)',
                color: '#FFFFFF'
              }}
            >
              SP
            </div>
            <div>
              <div className="font-bold text-sm tracking-tight text-[var(--text-primary)] leading-tight" style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.95rem' }}>
                Shrey Patel
              </div>
              <div className="text-[11px] font-mono text-[var(--text-muted)] leading-tight" style={{ color: 'var(--text-muted)', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>
                Computer Engineering · 2029
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1" style={{ display: 'none' }}>
            <div className="flex items-center gap-1" id="desktop-nav-items">
              {navLinks.map(link => {
                const isActive = !isCaseStudyPage && activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                    style={{
                      background: isActive ? 'var(--bg-card)' : 'transparent',
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      border: isActive ? '1px solid var(--border-subtle)' : '1px solid transparent',
                      cursor: 'pointer',
                      borderRadius: '8px',
                      padding: '0.4rem 0.75rem',
                      fontSize: '0.875rem'
                    }}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Action Tools: Resume, Theme Toggle, Mobile Menu Button */}
          <div className="flex items-center gap-2.5" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            {/* Quick Resume Button */}
            <button
              onClick={() => setResumeModalOpen(true)}
              className="btn-secondary"
              style={{
                padding: '0.45rem 0.85rem',
                fontSize: '0.8rem',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
              title="View Resume / CV"
            >
              <FileText size={14} />
              <span className="hidden sm:inline">Resume</span>
            </button>

            {/* Dark/Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              aria-label="Toggle Dark / Light Theme"
              title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {theme === 'dark' ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-violet-600" />}
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="md:hidden p-2 rounded-lg"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Responsive Desktop Nav Media Queries via Inline Styles Injection */}
        <style>{`
          @media (min-width: 768px) {
            #desktop-nav-items { display: flex !important; }
            .hidden.md\\:flex { display: flex !important; }
            .md\\:hidden { display: none !important; }
          }
        `}</style>
      </header>

      {/* Mobile Animated Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden flex flex-col justify-end"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 40,
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            paddingTop: '5rem'
          }}
        >
          <div
            className="card-dev m-4 p-5"
            onClick={e => e.stopPropagation()}
            style={{
              background: 'var(--bg-card)',
              borderRadius: '16px',
              border: '1px solid var(--border-subtle)',
              padding: '1.25rem',
              margin: '1rem',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
            }}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border-subtle)]" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem', marginBottom: '0.75rem' }}>
              <span className="font-mono text-xs uppercase text-[var(--text-muted)]" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Navigation Menu
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="btn-ghost"
                style={{ padding: '0.2rem 0.5rem', cursor: 'pointer' }}
              >
                Close
              </button>
            </div>

            <div className="flex flex-col gap-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    padding: '0.65rem 1rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between" style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between' }}>
              <a
                href={portfolioConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost text-xs"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem' }}
              >
                <GithubIcon size={14} /> GitHub
              </a>
              <a
                href={portfolioConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost text-xs"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem' }}
              >
                <LinkedinIcon size={14} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Resume Download / Preview Modal */}
      {resumeModalOpen && (
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
          onClick={() => setResumeModalOpen(false)}
        >
          <div
            className="card-dev max-w-md w-full p-6 text-left"
            style={{
              maxWidth: '480px',
              width: '100%',
              padding: '1.75rem',
              background: 'var(--bg-card)',
              borderRadius: '18px',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6)'
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div className="flex items-center gap-2.5" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(139, 92, 246, 0.15)', color: '#8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FileText size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Resume & Profile</h3>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>Shrey Patel · Computer Engineering</p>
                </div>
              </div>
              <button onClick={() => setResumeModalOpen(false)} className="btn-ghost" style={{ padding: '0.25rem 0.5rem', cursor: 'pointer' }}>
                <X size={18} />
              </button>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: '1.55' }}>
              Shrey's technical curriculum vitae documents his practical software development projects, coursework at G H Patel College of Engineering and Technology (Class of 2029), and technical competencies in full-stack engineering.
            </p>

            <div style={{ background: 'var(--bg-secondary)', borderRadius: '12px', padding: '1rem', border: '1px solid var(--border-subtle)', marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                DOCUMENT STATUS:
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }}></span>
                Verified Portfolio & Interactive Case Studies Active
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                To receive Shrey's latest official PDF resume or review reference letters, connect directly via LinkedIn or email.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.65rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <a
                href="#experience"
                onClick={() => setResumeModalOpen(false)}
                className="btn-secondary"
                style={{ fontSize: '0.825rem', padding: '0.5rem 0.85rem', textDecoration: 'none' }}
              >
                Experience & Credentials
              </a>
              <a
                href="./credentials/finlatics-recommendation-letter.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
                style={{ fontSize: '0.825rem', padding: '0.5rem 0.85rem', textDecoration: 'none' }}
              >
                Recommendation Letter
              </a>
              <a
                href={portfolioConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ fontSize: '0.825rem', padding: '0.5rem 0.95rem' }}
              >
                LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
