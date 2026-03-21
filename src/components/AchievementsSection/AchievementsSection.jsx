import './AchievementsSection.css';

const achievementsData = [
  {
    title: "COEP Inspiron Hackathon",
    year: "2025",
    achievements: [
      "1st Runner-Up",
      "Best UI Design Award"
    ],
    description: "Recognized for exceptional front-end execution"
  },
  {
    title: "TechFiesta",
    year: "2025",
    achievements: [
      "Finalist (Top 60/400+ teams)"
    ],
    description: "National-level product development competition"
  }
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="section-inner">
        <div className="section-divider">
          <div className="divider-line"></div>
          <div className="divider-dot"></div>
          <div className="divider-line"></div>
        </div>

        <div className="achievements-header">
          <p className="section-label">Recognition</p>
          <h2 className="section-heading">Achievements</h2>
        </div>
        
        <div className="achievements-grid">
          {achievementsData.map((item, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-header">
                <h3 className="achievement-title">{item.title}</h3>
                <span className="achievement-year">{item.year}</span>
              </div>
              
              <div className="achievement-badges">
                {item.achievements.map((badge, idx) => (
                  <span key={idx} className="badge">{badge}</span>
                ))}
              </div>
              
              <p className="achievement-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
