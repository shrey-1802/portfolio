import React, { useState } from 'react';
import { Code, Server, Database, Wrench, Layers } from 'lucide-react';
import { skillsData } from '../data/skills';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillsData.map(c => c.title)];

  const filteredCategories = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter(c => c.title === selectedCategory);

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Comfortable':
        return 'badge badge-emerald';
      case 'Working Knowledge':
        return 'badge badge-cyan';
      case 'Learning':
        return 'badge badge-orange';
      default:
        return 'badge badge-neutral';
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28" style={{ padding: '5rem 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)' }}>
      <div className="container-max">
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="badge mb-3" style={{ marginBottom: '0.75rem' }}>
            TECHNICAL TOOLBOX & STACK
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Engineering Capabilities & Core Stack.
          </h2>
          <p style={{ maxWidth: '680px', color: 'var(--text-secondary)' }}>
            Categorized by practical application across working software systems. Categorized with authentic proficiency tiers — no arbitrary percentages.
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
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: selectedCategory === cat ? 'var(--accent-primary)' : 'var(--bg-card)',
                color: selectedCategory === cat ? '#FFFFFF' : 'var(--text-secondary)',
                border: selectedCategory === cat ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                borderRadius: '8px',
                padding: '0.45rem 1rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {filteredCategories.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className="card-dev"
              style={{
                padding: '1.75rem',
                borderRadius: '16px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(139, 92, 246, 0.1)',
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {groupIdx === 0 && <Code size={18} />}
                    {groupIdx === 1 && <Server size={18} />}
                    {groupIdx === 2 && <Database size={18} />}
                    {groupIdx === 3 && <Wrench size={18} />}
                    {groupIdx >= 4 && <Layers size={18} />}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                      {group.title}
                    </h3>
                  </div>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  {group.skills.length} VERIFIED TECHNOLOGIES
                </div>
              </div>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                {group.description}
              </p>

              {/* Skills Items Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '1rem'
                }}
              >
                {group.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    style={{
                      background: 'var(--bg-secondary)',
                      borderRadius: '10px',
                      padding: '1rem',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'border-color 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {skill.name}
                      </span>
                      <span className={getLevelBadgeClass(skill.level)} style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem' }}>
                        {skill.level}
                      </span>
                    </div>

                    {skill.note && (
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {skill.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend Callout */}
        <div
          style={{
            marginTop: '2.5rem',
            padding: '1.25rem',
            borderRadius: '12px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            <strong>Proficiency Standard:</strong> Skills are marked by practical building experience in projects rather than self-assigned percentage bars.
          </div>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }}></span> Comfortable
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38BDF8' }}></span> Working Knowledge
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F97316' }}></span> Learning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
