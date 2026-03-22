import { useState, useEffect } from 'react'
import ParticleBackground from './components/ParticleBackground/ParticleBackground'
import Particles from './components/Particles/Particles'
import CursorParticles from './components/CursorParticles/CursorParticles'
import LightRays from './components/LightRays/LightRays'
import HeroSection from './components/HeroSection/HeroSection'
import AboutSection from './components/AboutSection/AboutSection'
import ExperienceSection from './components/ExperienceSection/ExperienceSection'
import SkillsSection from './components/SkillsSection/SkillsSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import AchievementsSection from './components/AchievementsSection/AchievementsSection'
import LeadershipSection from './components/LeadershipSection/LeadershipSection'
import ResumeSection from './components/ResumeSection/ResumeSection'
import GetInTouchSection from './components/GetInTouchSection/GetInTouchSection'
import './App.css'

// ─── APP ──────────────────────────────────────────────────────────
export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.body.className = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <ParticleBackground />
      <Particles
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={80}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={1}
      />
      <CursorParticles />
      {/* ── NAVBAR ─────────────────────────────────── */}
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="nav-logo">
            PORT<span>FOLIO</span>
          </div>

          <ul className="nav-links">
            <li><a href="#hero" onClick={scrollToTop}>Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#footer">Contact</a></li>
            <li>
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────── */}
      <div style={{ position: 'relative', width: '100%' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '800px', zIndex: 3, display: 'flex', pointerEvents: 'none' }}>
          {/* Rays from left */}
          <div style={{ flex: 1, position: 'relative' }}>
            <LightRays
              raysOrigin="top-left"
              raysColor={theme === 'dark' ? '#D4AF37' : '#4F46E5'}
              raysSpeed={0.8}
              lightSpread={0.5}
              rayLength={3}
              followMouse={true}
              mouseInfluence={0.08}
              noiseAmount={0}
              distortion={0}
              fadeDistance={0.8}
              pulsating={false}
            />
          </div>
          
          {/* Rays from right */}
          <div style={{ flex: 1, position: 'relative' }}>
            <LightRays
              raysOrigin="top-right"
              raysColor={theme === 'dark' ? '#D4AF37' : '#4F46E5'}
              raysSpeed={0.8}
              lightSpread={0.5}
              rayLength={3}
              followMouse={true}
              mouseInfluence={0.08}
              noiseAmount={0}
              distortion={0}
              fadeDistance={0.8}
              pulsating={false}
            />
          </div>
        </div>
        <HeroSection />
      </div>

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

      {/* ── GET IN TOUCH ───────────────────────────── */}
      <GetInTouchSection />

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
