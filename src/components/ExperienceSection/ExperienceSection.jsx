import { useState } from 'react';
import './ExperienceSection.css';

const experiences = [
  {
    id: 1,
    company: "ValetPe",
    logo:"/image.png",
    role: "Full-Stack Developer Intern",
    date: "Aug 2025 – Oct 2025",
    chips: ["Remote", "Intern", "Full-Stack"],
    points: [
      "Developed and optimized Shopify applications leveraging Node.js, React, and PostgreSQL, enhancing merchant efficiency.",
      "Engineered robust OAuth session handling and seamless API integrations; implemented secure workflows using ngrok and cloudflared tunnels.",
      "Collaborated in dynamic Agile/Scrum teams, delivering high-impact features and improving overall system reliability and performance."
    ]
  },
  {
    id: 2,
    company: "Pune Institute of Computer Technology",
    role: "Backend Developer Intern",
    date: "July 2025 – Jan 2026",
    chips: ["ICEI Conference", "Intern"],
    points: [
      "Built and maintained backend features for session and paper assignment between Track Chairs and Session Chairs using Node.js, Express, and MongoDB.",
      "Developed a venue management system with options to add, fetch, and remove venues efficiently.",
      "Improved backend structure with clean API routes and well-defined Mongoose models following the MVC pattern."
    ]
  },
  {
    id: 3,
    company: "Pratik Patil's Academy",
    role: "Software Developer",
    date: "Jan 2026 – April 2026",
    chips: ["Developer", "Platform"],
    points: [
      "Building a centralized management platform to streamline academic and administrative operations for educational institutes.",
      "Developing robust backend APIs and optimizing database models to securely manage academic records and institutional data.",
      "Integrating automated workflows to reduce manual administrative effort and improve overall site efficiency."
    ]
  }
];

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="experience-section">
      <div className="experience-inner">
        <p className="section-label">My Journey</p>
        <h2 className="section-heading">Work Experience</h2>

        <div className="experience-list">
          {experiences.map((exp) => (
            <div key={exp.id} className={`experience-card ${expandedId === exp.id ? 'expanded' : ''}`}>
              <div className="experience-header" onClick={() => toggleExpand(exp.id) }>
                <div className="experience-header-left">
                  <div className="experience-left-content">
                    <h3 className="experience-company">{exp.company}</h3>
                    <div className="experience-chips">
                      {exp.chips.map((chip, idx) => (
                        <span key={idx} className="chip">{chip}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="experience-header-right">
                  <span className="experience-role">{exp.role}</span>
                  <span className="experience-date">{exp.date}</span>
                </div>

                <button className="expand-toggle" aria-label="Toggle details">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>

              <div className={`experience-details ${expandedId === exp.id ? 'visible' : ''}`}>
                <ul className="experience-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
