import './ResumeSection.css';

export default function ResumeSection() {
  return (
    <section id="resume" className="resume-section">
      <div className="section-inner">
        <div className="section-divider">
          <div className="divider-line"></div>
          <div className="divider-dot"></div>
          <div className="divider-line"></div>
        </div>

        <div className="resume-header">
          <p className="section-label">Get My Details</p>
          <h2 className="section-heading">Resume</h2>
        </div>
        
        <div className="resume-container">
          <div className="resume-card">
            <div className="resume-card-inner">
              <div className="resume-icon-wrapper">
                <div className="resume-icon-bg"></div>
                <div className="resume-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="12" y1="11" x2="12" y2="17"></line>
                    <line x1="9" y1="14" x2="15" y2="14"></line>
                  </svg>
                </div>
              </div>
              
              <div className="resume-content">
                <h3 className="resume-title">Dhruv Gardharia</h3>
                <p className="resume-subtitle">Full Stack Developer & Designer</p>
                <p className="resume-description">
                  View my comprehensive resume to learn more about my skills, experience, and technical proficiencies.
                </p>
                
                
                <div className="resume-actions">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn preview-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <span>Preview</span>
                  </a>
                  
                  <a href="/resume.pdf" download="DhruvgardhariaResume.pdf" className="resume-btn download-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="resume-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
