import './LeadershipSection.css';

const leadershipData = [
  {
    role: "Sponsorship & Marketing Lead",
    organization: "PICT Robotics",
    description: "Led sponsorship outreach and secured partnerships, strengthening leadership and communication skills."
  },
  {
    role: "Volunteer",
    organization: "PICT IEEE Technical Events",
    description: "Assisted in organizing technical events, promoting teamwork and collaboration."
  }
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="leadership-section">
      <div className="section-inner">
        <div className="section-divider">
          <div className="divider-line"></div>
          <div className="divider-dot"></div>
          <div className="divider-line"></div>
        </div>

        <div className="leadership-header">
          <p className="section-label">Involvement</p>
          <h2 className="section-heading">Leadership & Involvement</h2>
        </div>
        
        <div className="leadership-list">
          {leadershipData.map((item, index) => (
            <div key={index} className="leadership-item">
              <div className="leadership-indicator"></div>
              
              <div className="leadership-content">
                <h3 className="leadership-role">{item.role}</h3>
                <p className="leadership-org">{item.organization}</p>
                <p className="leadership-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
