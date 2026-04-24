/* ============================================
   main.js — Portfolio Interactivity
   ============================================ */

const API_URL = 'http://localhost:5000/api';

// ── Particles.js Initialization ──
if (document.getElementById('particles-js')) {
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: '#7c3aed' },
      shape: { type: 'circle' },
      opacity: { value: 0.3, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: '#7c3aed', opacity: 0.2, width: 1 },
      move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
      modes: { grab: { distance: 140, line_linked: { opacity: 0.5 } }, push: { particles_nb: 4 } }
    },
    retina_detect: true
  });
}

// ── Typewriter Effect ──
const typewriterEl = document.getElementById('typewriter');
const roles = ['Freelancer', 'Frontend Developer', 'Python Developer', 'UI/UX Designer'];
let roleIdx = 0;
let charIdx = 0;
let isDeleting = false;

function type() {
  const currentRole = roles[roleIdx];
  if (isDeleting) {
    typewriterEl.textContent = currentRole.substring(0, charIdx - 1);
    charIdx--;
  } else {
    typewriterEl.textContent = currentRole.substring(0, charIdx + 1);
    charIdx++;
  }

  let typeSpeed = isDeleting ? 100 : 200;
  if (!isDeleting && charIdx === currentRole.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    roleIdx = (roleIdx + 1) % roles.length;
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
}
type();

// ── Scroll Reveal & Active Links ──
const revealElements = document.querySelectorAll('.reveal-fade, .reveal-up, .reveal-left, .reveal-right, .reveal-scale');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = { threshold: 0.15 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active-reveal');
      
      // If it's a counter, start it
      if (entry.target.classList.contains('counter')) {
        startCounter(entry.target);
      }
    }
  });
}, observerOptions);

revealElements.forEach(el => observer.observe(el));
document.querySelectorAll('.counter').forEach(el => observer.observe(el));

// Active Nav Link on Scroll
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });

  // Navbar background change
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);

  // Back to top
  const backToTop = document.getElementById('back-to-top');
  backToTop.classList.toggle('active', window.scrollY > 500);
});

// ── Counter Animation ──
function startCounter(el) {
  const target = +el.getAttribute('data-target');
  let count = 0;
  const speed = target / 50; // Adjust for speed
  
  const updateCount = () => {
    if (count < target) {
      count += speed;
      el.innerText = Math.ceil(count);
      setTimeout(updateCount, 40);
    } else {
      el.innerText = target;
    }
  };
  updateCount();
}

// ── Dynamic Projects ──
const fallbackProjects = [
  {
    title: 'Air — Gesture Writing',
    description: 'An innovative web app that uses computer vision to turn gestures into digital text. Write notes in thin air using hand movements.',
    tech: ['Python', 'MediaPipe', 'OpenCV'],
    github: 'https://github.com/shrey-1802/airshot',
    live: 'https://lnkd.in/dpEEcfMh',
    icon: '✍️'
  },
  {
    title: 'Bhoomirakshak',
    description: 'AgriTech solution for soil salinity detection and crop recommendation. Helping farmers transition from salty soil to healthy harvests.',
    tech: ['React', 'AI/ML', 'Vercel'],
    github: 'https://github.com/shrey-1802/bhoomirakshak',
    live: 'https://bhoomirakshak.vercel.app/',
    icon: '🌱'
  }
];

function renderProjects(projects) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  
  grid.innerHTML = projects.map((p, i) => `
    <div class="project-card reveal-up" style="transition-delay: ${i * 0.1}s">
      <div class="project-img">
        <span>${p.icon || '🚀'}</span>
        <div class="project-overlay">
          ${p.github ? `<a href="${p.github}" target="_blank" class="overlay-link"><i class="fab fa-github"></i></a>` : ''}
          ${p.live ? `<a href="${p.live}" target="_blank" class="overlay-link"><i class="fas fa-external-link-alt"></i></a>` : ''}
        </div>
      </div>
      <div class="project-info">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-tech">
          ${p.tech.map(t => `<span>#${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
  
  // Re-observe newly added cards
  grid.querySelectorAll('.project-card').forEach(el => observer.observe(el));
}

async function fetchProjects() {
  renderProjects(fallbackProjects);
  try {
    const res = await fetch(`${API_URL}/projects`);
    const data = await res.json();
    if (data.success && data.data.length > 0) renderProjects(data.data);
  } catch (err) {
    console.log('Using fallback project data');
  }
}
fetchProjects();

// Mobile Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
}

// Close mobile menu on link click
document.querySelectorAll('.mobile-links a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});
