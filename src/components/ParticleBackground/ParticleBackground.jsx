import './ParticleBackground.css';

export default function ParticleBackground() {
  // Generate particles with subtle randomization
  const generateParticles = () => {
    return Array.from({ length: 80 }).map((_, i) => {
      const size = Math.random() * 3 + 1; // 1-4px - small and subtle
      const duration = Math.random() * 15 + 20; // 20-35 seconds
      const delay = Math.random() * -20; // Random negative delay
      const xOffset = Math.random() * 100 - 50; // Random X movement -50 to 50
      const yOffset = Math.random() * 150 - 75; // Random Y movement -75 to 75
      
      return {
        id: i,
        size,
        duration,
        delay,
        xOffset,
        yOffset,
        startLeft: Math.random() * 100,
        startTop: Math.random() * 100,
      };
    });
  };

  const particles = generateParticles();

  return (
    <div className="particle-background">
      {/* Floating Particles - Subtle background effect */}
      <div className="particles-container">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.startLeft}%`,
              top: `${particle.startTop}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              '--x-offset': `${particle.xOffset}px`,
              '--y-offset': `${particle.yOffset}px`,
            }}
          ></div>
        ))}
      </div>

      {/* Glow Orbs */}
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>
      <div className="glow-orb glow-orb-3"></div>
    </div>
  );
}
