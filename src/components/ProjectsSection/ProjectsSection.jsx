import ScrollStack, { ScrollStackItem } from './ScrollStack';
import creditflowImage from '../../assets/projects/creditscoring.png';
import nexjobImage from '../../assets/projects/Nexjob.jpg';
import dailyvegiesImage from '../../assets/projects/Dailyvegies.jpg';
import './ProjectsSection.css';

const projectsData = [
  {
    title: "CreditFlow",
    subtitle: "Alternative Credit Scoring Platform",
    oneLiner: "AI-powered alternative credit scoring for gig workers with blockchain-verified snapshots, micro-insurance, and emergency microloans.",
    image: creditflowImage,
    tags: [ "Blockchain","React", "Node.js", "MongoDB", "Python", "FastAPI", "SHA-256"],
    liveDemo: "https://alternative-credit-scoring.onrender.com/",
    github: "https://github.com/DhruvGardharia/Alternative-credit-scoring"
  },
  {
    title: "NeXJob",
    subtitle: "AI-Powered Job Portal",
    oneLiner: "AI-powered job portal enabling seamless hiring with real-time interviews, resume analysis, and smart recommendations.",
    image: nexjobImage,
    tags: ["React","Socket.io", "Node.js", "Express","MongoDB", "JitsMeet"],
    liveDemo: "https://nexjob-1ioj.onrender.com",
    github: "https://github.com/DhruvGardharia/NeXJob"
  },
  {
    title: "DailyVegies",
    subtitle: "Smart Farm-to-Fork E-commerce",
    oneLiner: "Smart farm-to-fork platform connecting farmers and consumers with crop tracking, weather insights, and market analytics.",
    image: dailyvegiesImage,
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Flask"],
    liveDemo: "https://dailyvegies.onrender.com",
    github: "https://github.com/DhruvGardharia/DailyVegies"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-inner">
        <div className="projects-header">
          <p className="section-label">Selected Work</p>
          <h2 className="section-heading">Featured Projects</h2>
        </div>
        
        <ScrollStack 
          itemDistance={30}
          itemScale={0.04}
          baseScale={0.9}
          itemStackDistance={30}
          stackPosition="15%"
        >
          {projectsData.map((project, index) => (
            <ScrollStackItem key={index}>
              <div className="project-card">
                <div className="project-image-wrapper">
                  <div className="project-image-placeholder">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="project-image" />
                    ) : (
                      <div className="image-placeholder-text">Image coming soon</div>
                    )}
                  </div>
                </div>
                
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  {project.subtitle && (
                    <p className="project-subtitle">{project.subtitle}</p>
                  )}
                  <p className="project-description">{project.oneLiner}</p>
                  
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span className="card-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    {project.liveDemo && (
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                        </svg>
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V21"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
