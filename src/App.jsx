import { useState, useEffect } from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import AboutSection from './components/AboutSection/AboutSection'
import ExperienceSection from './components/ExperienceSection/ExperienceSection'
import './App.css'

// ─── DATA ─────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    tag: 'Full Stack',
    title: 'FinSight — Alt Credit Scoring',
    description:
      'AI-powered alternative credit scoring platform for micro-finance. Uses income prediction, blockchain verification, and behavioural analysis.',
    tech: ['React', 'Node.js', 'Python', 'MongoDB'],
  },
  {
    id: 2,
    tag: 'ML / AI',
    title: 'Income Predictor API',
    description:
      'A FastAPI + scikit-learn service that predicts income tiers from alternative data sources. Integrated as a microservice.',
    tech: ['Python', 'FastAPI', 'scikit-learn', 'Docker'],
  },
  {
    id: 3,
    tag: 'Frontend',
    title: 'Portfolio — Design System',
    description:
      'This very portfolio, built with React + Vite and a custom CSS design system. Fully dark/light themed with component architecture.',
    tech: ['React', 'Vite', 'CSS Variables'],
  },
  {
    id: 4,
    tag: 'Backend',
    title: 'MicroInsurance Engine',
    description:
      'Rule-based and ML-powered micro-insurance recommendation engine with live premium calculation and risk scoring.',
    tech: ['Node.js', 'Express', 'PostgreSQL'],
  },
  {
    id: 5,
    tag: 'Open Source',
    title: 'DevLog CLI',
    description:
      'A terminal tool for tracking developer work logs with tagging, time tracking, and markdown export.',
    tech: ['Go', 'Cobra CLI', 'SQLite'],
  },
  {
    id: 6,
    tag: 'Design',
    title: 'UI Component Library',
    description:
      'A reusable React component library with dark/light theming, WCAG-compliant colors, and Storybook docs.',
    tech: ['React', 'Storybook', 'Figma'],
  },
]

// ─── APP ──────────────────────────────────────────────────────────
export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark'
  })

  useEffect(() => {
    document.body.className = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <>
      {/* ── NAVBAR ─────────────────────────────────── */}
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="nav-logo">
            Dhruv<span> Gardharia</span>
          </div>

          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#footer">Contact</a></li>
            <li>
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'dark' ? '☀️' : '🌙'}
                <span className="theme-toggle-label">
                  {theme === 'dark' ? 'Light' : 'Dark'}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────── */}
      <HeroSection />

      {/* ── ABOUT ──────────────────────────────────── */}
      <AboutSection />

      {/* ── EXPERIENCE ─────────────────────────────── */}
      <ExperienceSection />

      {/* ── PROJECTS ───────────────────────────────── */}
      <section id="projects" className="projects-section">
        <div className="section-inner">
          <p className="section-label">Selected Work</p>
          <h2 className="section-heading">Projects</h2>

          <div className="projects-grid">
            {projects.map((p) => (
              <div key={p.id} className="project-card">
                <span className="card-tag">{p.tag}</span>
                <h3 className="card-title">{p.title}</h3>
                <p className="card-description">{p.description}</p>
                <div className="card-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────── */}
      <footer id="footer" className="footer">
        <p>
          Designed & built by <span>Dhruv</span> · {new Date().getFullYear()}
        </p>
        <p style={{ marginTop: '6px' }}>
          Made with React & Vite · Open to full-time roles
        </p>
      </footer>
    </>
  )
}
