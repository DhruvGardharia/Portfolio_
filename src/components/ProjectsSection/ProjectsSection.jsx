import ScrollStack, { ScrollStackItem } from './ScrollStack';
import './ProjectsSection.css';

const projectsData = [
  {
    title: "EcoTrack Platform",
    category: "Full-Stack Development",
    description: "A comprehensive SaaS application designed to help businesses monitor and reduce their carbon footprint through real-time data integrations and visual analytics.",
    tags: ["React", "Node.js", "PostgreSQL", "Recharts"]
  },
  {
    title: "Aura Design System",
    category: "UI/UX Engineering",
    description: "An accessible, highly customizable component library built for a suite of internal enterprise tools, significantly speeding up development time across teams.",
    tags: ["TypeScript", "Tailwind CSS", "Storybook", "Figma"]
  },
  {
    title: "Quantum API Gateway",
    category: "Backend Architecture",
    description: "A high-performance microservices gateway built to handle thousands of concurrent requests with integrated rate limiting, caching, and robust authentication.",
    tags: ["Go", "Redis", "Docker", "AWS"]
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
                <div className="project-image-placeholder"></div>
                
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span className="card-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  
                  <a href="#" className="project-link">
                    View Project
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
