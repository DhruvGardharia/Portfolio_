import './HeroSection.css';
import HeroTextAnimation from '../HeroTextAnimation/HeroTextAnimation';

export default function HeroSection() {
  return (
    <section className="hero-component">
      <div className="hero-layout">
        <div className="hero-image-placeholder"></div>
        <div className="hero-content">
          <p className="hero-name">
            I’m <span className="hero-name-highlight">Dhruv Gardharia</span>
          </p>
          <HeroTextAnimation />

          <p className="hero-subtitle">
            21 &bull; Engineer &bull; Developer &bull; Builder
          </p>

          <div className="hero-socials">
            <a href="mailto:dhruvgardharia1611@gmail.com" className="social-icon" aria-label="Email" title="Email">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
            <a href="https://github.com/DhruvGardharia" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub" title="GitHub">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/dhruv-gardharia-b3596831b/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn" title="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://leetcode.com/u/Dhruv1611" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LeetCode" title="LeetCode">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
