import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { LearningTimeline } from '../components/LearningTimeline';
import { Education } from '../components/Education';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <FeaturedProjects />
        <About />
        <Skills />
        <ExperienceTimeline />
        <LearningTimeline />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
