import { useState, useEffect } from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import AboutSection from './components/AboutSection/AboutSection'
import ExperienceSection from './components/ExperienceSection/ExperienceSection'
import SkillsSection from './components/SkillsSection/SkillsSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import AchievementsSection from './components/AchievementsSection/AchievementsSection'
import LeadershipSection from './components/LeadershipSection/LeadershipSection'
import ResumeSection from './components/ResumeSection/ResumeSection'
import './App.css'

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

      {/* ── SKILLS ─────────────────────────────────── */}
      <SkillsSection />

      {/* ── PROJECTS ───────────────────────────────── */}
      <ProjectsSection />

      {/* ── ACHIEVEMENTS ───────────────────────────── */}
      <AchievementsSection />

      {/* ── LEADERSHIP ─────────────────────────────── */}
      <LeadershipSection />

      {/* ── RESUME ─────────────────────────────────── */}
      <ResumeSection />

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
