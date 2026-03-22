import { useEffect, useRef } from 'react';
import './CursorParticles.css';

const CursorParticles = () => {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement('canvas');
    canvasRef.current = canvas;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.className = 'cursor-particles-canvas';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;

    // Get theme and return appropriate color
    const getParticleColor = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      if (theme === 'light') {
        return { r: 99, g: 102, b: 241 }; // indigo
      }
      return { r: 167, g: 139, b: 250 }; // light purple
    };

    const createParticle = (x, y) => {
      const baseColor = getParticleColor();
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 3;
      
      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: 1,
        size: 2 + Math.random() * 4,
        color: baseColor
      };
    };

    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 2;
    let lastSpawnTime = 0;
    // Adaptive spawn interval: mobile 80ms, tablet 50ms, desktop 30ms
    const spawnInterval = window.innerWidth < 768 ? 80 : window.innerWidth < 1024 ? 50 : 30;
    const particleCount = window.innerWidth < 768 ? 1 : 2; // Spawn 1 particle on mobile, 2 on desktop

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Spawn particles at intervals along cursor path
      const now = Date.now();
      if (now - lastSpawnTime > spawnInterval) {
        // Create multiple particles for smooth trail (adaptive count)
        for (let i = 0; i < particleCount; i++) {
          // Slightly offset position along the movement path
          const t = i / Math.max(particleCount, 1);
          const spawnX = lastX + (e.clientX - lastX) * t;
          const spawnY = lastY + (e.clientY - lastY) * t;
          particlesRef.current.push(createParticle(spawnX, spawnY));
        }
        lastSpawnTime = now;
      }
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const handleWindowResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const particle = particlesRef.current[i];

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.1; // gravity
        particle.vx *= 0.98; // friction
        particle.vy *= 0.98;

        // Update life
        particle.life -= 0.015;

        // Draw particle
        const alpha = particle.life;
        ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Remove dead particles
        if (particle.life <= 0) {
          particlesRef.current.splice(i, 1);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleWindowResize);
    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleWindowResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, []);

  return <div ref={containerRef} className="cursor-particles-container" />;
};

export default CursorParticles;
