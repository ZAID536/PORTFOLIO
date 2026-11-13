import React, { useEffect, useRef } from 'react';
import { getOptimizedImageUrl } from '../utils/cloudinary';

interface HeroParticlesCanvasProps {
  isDarkMode: boolean;
}

interface Star {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  twinkleSpeed: number;
  phase: number;
  color: string;
  isSparkle?: boolean;
}

interface RealPlanet {
  name: string;
  imgUrl: string;
  imgElement?: HTMLImageElement;
  loaded: boolean;
  x: number; // proportional 0..1
  y: number; // proportional 0..1
  radius: number;
  rotationAngle: number;
  rotationSpeed: number;
  floatSpeed: number;
  floatPhase: number;
  floatAmplitude: number;
  glowColor: string;
  atmosphereColor: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
}

// Photorealistic Planet Images (Real Space Photography with optimized dimensions)
const PLANET_DATA: Omit<RealPlanet, 'loaded' | 'imgElement'>[] = [
  {
    name: 'Jupiter',
    imgUrl: getOptimizedImageUrl('https://images.unsplash.com/photo-1614728894747-a83421e2b9c9', 300),
    x: 0.83,
    y: 0.24,
    radius: 46,
    rotationAngle: 0,
    rotationSpeed: 0.003,
    floatSpeed: 0.6,
    floatPhase: 0,
    floatAmplitude: 14,
    glowColor: 'rgba(232, 68, 10, 0.45)',
    atmosphereColor: 'rgba(251, 146, 60, 0.3)',
  },
  {
    name: 'Earth',
    imgUrl: getOptimizedImageUrl('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4', 300),
    x: 0.15,
    y: 0.68,
    radius: 38,
    rotationAngle: 0.5,
    rotationSpeed: 0.002,
    floatSpeed: 0.5,
    floatPhase: 2,
    floatAmplitude: 12,
    glowColor: 'rgba(56, 189, 248, 0.5)',
    atmosphereColor: 'rgba(14, 165, 233, 0.35)',
  },
  {
    name: 'Saturn',
    imgUrl: getOptimizedImageUrl('https://images.unsplash.com/photo-1614732414444-096e5f1122d5', 300),
    x: 0.82,
    y: 0.76,
    radius: 40,
    rotationAngle: 0.2,
    rotationSpeed: 0.0015,
    floatSpeed: 0.7,
    floatPhase: 1,
    floatAmplitude: 16,
    glowColor: 'rgba(245, 158, 11, 0.45)',
    atmosphereColor: 'rgba(217, 119, 6, 0.3)',
  },
  {
    name: 'Moon',
    imgUrl: getOptimizedImageUrl('https://images.unsplash.com/photo-1532693322450-2cb5c511067d', 200),
    x: 0.18,
    y: 0.22,
    radius: 26,
    rotationAngle: 0,
    rotationSpeed: 0.001,
    floatSpeed: 0.8,
    floatPhase: 4,
    floatAmplitude: 10,
    glowColor: 'rgba(248, 250, 252, 0.5)',
    atmosphereColor: 'rgba(203, 213, 225, 0.25)',
  },
];

export const HeroParticlesCanvas: React.FC<HeroParticlesCanvasProps> = ({ isDarkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number | null = null;
    let isVisible = true;
    const isMobile = window.innerWidth < 768;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 750);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 750;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Mouse parallax movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = (e.clientX - rect.left - width / 2) / (width / 2);
      mouseRef.current.targetY = (e.clientY - rect.top - height / 2) / (height / 2);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 1. Initialize Real Photographic Celestial Bodies
    const planets: RealPlanet[] = PLANET_DATA.map((p) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = p.imgUrl;

      const item: RealPlanet = {
        ...p,
        imgElement: img,
        loaded: false,
      };

      img.onload = () => {
        item.loaded = true;
      };

      return item;
    });

    // 2. Generate Starfield (responsive count)
    const starCount = isMobile ? 65 : 120;
    const stars: Star[] = [];
    const starColors = ['#E8440A', '#38BDF8', '#F59E0B', '#FFFFFF', '#A855F7'];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() < 0.2 ? Math.random() * 2.5 + 1.5 : Math.random() * 1.5 + 0.8,
        baseOpacity: Math.random() * 0.65 + 0.25,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        phase: Math.random() * Math.PI * 2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        isSparkle: Math.random() < 0.16,
      });
    }

    // 3. Shooting Stars / Comets
    const shootingStars: ShootingStar[] = [];
    const spawnShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width * 0.85,
        y: Math.random() * height * 0.4,
        length: Math.random() * 80 + 60,
        speed: Math.random() * 8 + 5,
        angle: Math.PI / 4,
        opacity: 1,
        active: true,
      });
    };

    let time = 0;

    // Sparkle star renderer
    const drawSparkle = (cx: number, cy: number, size: number, color: string, alpha: number) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;

      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        ctx.rotate(Math.PI / 2);
        ctx.lineTo(0, size);
        ctx.quadraticCurveTo(0, 0, size * 0.25, 0);
      }
      ctx.fill();
      ctx.restore();
    };

    // Main Animation Loop
    const render = () => {
      if (!isVisible) return;

      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Smooth Mouse Easing
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.04;

      const mx = mouseRef.current.x * 24;
      const my = mouseRef.current.y * 24;

      // --- LAYER 1: Constellation Grid Lines ---
      ctx.strokeStyle = isDarkMode ? 'rgba(232, 68, 10, 0.15)' : 'rgba(232, 68, 10, 0.1)';
      ctx.lineWidth = 0.8;
      const constellationLimit = isMobile ? 18 : 28;
      for (let i = 0; i < constellationLimit; i++) {
        for (let j = i + 1; j < constellationLimit; j++) {
          const s1 = stars[i];
          const s2 = stars[j];
          const dx = s1.x - s2.x;
          const dy = s1.y - s2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(s1.x + mx * 0.2, s1.y + my * 0.2);
            ctx.lineTo(s2.x + mx * 0.2, s2.y + my * 0.2);
            ctx.stroke();
          }
        }
      }

      // --- LAYER 2: Twinkling 2D Stars ---
      stars.forEach((star) => {
        star.phase += star.twinkleSpeed;
        const currentOpacity = Math.max(0.15, star.baseOpacity + Math.sin(star.phase) * 0.35);
        const px = star.x + mx * (star.size * 0.15);
        const py = star.y + my * (star.size * 0.15);

        if (star.isSparkle) {
          drawSparkle(px, py, star.size * 3.5, star.color, currentOpacity);
        } else {
          ctx.save();
          ctx.globalAlpha = currentOpacity;
          ctx.fillStyle = star.color;
          ctx.shadowColor = star.color;
          ctx.shadowBlur = star.size > 2 ? 6 : 0;

          ctx.beginPath();
          ctx.arc(px, py, star.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });

      // --- LAYER 3: Photorealistic Floating Celestial Bodies ---
      planets.forEach((planet) => {
        planet.rotationAngle += planet.rotationSpeed;
        const floatY = Math.sin(time * planet.floatSpeed + planet.floatPhase) * planet.floatAmplitude;
        const px = planet.x * width + mx * 0.45;
        const py = planet.y * height + floatY + my * 0.45;
        const r = isMobile ? planet.radius * 0.85 : planet.radius;

        ctx.save();

        // 1. Atmosphere / Outer Glow Halo
        const glowGrad = ctx.createRadialGradient(px, py, r * 0.8, px, py, r * 2.2);
        glowGrad.addColorStop(0, planet.glowColor);
        glowGrad.addColorStop(0.5, planet.atmosphereColor);
        glowGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = glowGrad;
        ctx.globalAlpha = 0.85;
        ctx.beginPath();
        ctx.arc(px, py, r * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // 2. Real Photographic Sphere Rendering
        if (planet.loaded && planet.imgElement) {
          ctx.save();

          // Circular Clip for Sphere
          ctx.beginPath();
          ctx.arc(px, py, r, 0, Math.PI * 2);
          ctx.clip();

          // Translate to center for rotation & tilt
          ctx.translate(px, py);
          ctx.rotate(planet.rotationAngle);

          // Draw real photography image
          ctx.globalAlpha = 0.95;
          ctx.drawImage(planet.imgElement, -r * 1.1, -r * 1.1, r * 2.2, r * 2.2);

          // Restore rotation transform to apply 3D Spherical Lighting
          ctx.restore();

          // 3D Spherical Light & Shadow Depth Overlay
          ctx.save();
          ctx.beginPath();
          ctx.arc(px, py, r, 0, Math.PI * 2);
          ctx.clip();

          const shadowGrad = ctx.createRadialGradient(
            px - r * 0.35,
            py - r * 0.35,
            r * 0.1,
            px,
            py,
            r
          );
          shadowGrad.addColorStop(0, 'rgba(255, 255, 255, 0.12)');
          shadowGrad.addColorStop(0.5, 'transparent');
          shadowGrad.addColorStop(0.85, 'rgba(0, 0, 0, 0.45)');
          shadowGrad.addColorStop(1, 'rgba(0, 0, 0, 0.85)');

          ctx.fillStyle = shadowGrad;
          ctx.beginPath();
          ctx.arc(px, py, r, 0, Math.PI * 2);
          ctx.fill();

          // Atmospheric Rayleigh edge ring glow
          ctx.strokeStyle = planet.glowColor;
          ctx.lineWidth = 2.5;
          ctx.globalAlpha = 0.6;
          ctx.beginPath();
          ctx.arc(px, py, r - 1, 0, Math.PI * 2);
          ctx.stroke();

          ctx.restore();
        } else {
          // Fallback during initial load
          const fallbackGrad = ctx.createRadialGradient(px - r * 0.3, py - r * 0.3, r * 0.1, px, py, r);
          fallbackGrad.addColorStop(0, planet.glowColor);
          fallbackGrad.addColorStop(1, '#0F172A');
          ctx.fillStyle = fallbackGrad;
          ctx.beginPath();
          ctx.arc(px, py, r, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      // --- LAYER 4: Shooting Stars / Comets ---
      if (Math.random() < 0.015 && shootingStars.length < 2) {
        spawnShootingStar();
      }

      shootingStars.forEach((star) => {
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= 0.012;

        if (star.opacity <= 0 || star.x > width || star.y > height) {
          star.active = false;
        }

        if (star.active) {
          ctx.save();
          const tailX = star.x - Math.cos(star.angle) * star.length;
          const tailY = star.y - Math.sin(star.angle) * star.length;

          const grad = ctx.createLinearGradient(star.x, star.y, tailX, tailY);
          grad.addColorStop(0, '#E8440A');
          grad.addColorStop(0.3, '#38BDF8');
          grad.addColorStop(1, 'transparent');

          ctx.strokeStyle = grad;
          ctx.lineWidth = 2.5;
          ctx.globalAlpha = star.opacity;

          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(tailX, tailY);
          ctx.stroke();

          // Glowing Head
          ctx.fillStyle = '#FFFFFF';
          ctx.shadowColor = '#E8440A';
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(star.x, star.y, 2.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.restore();
        }
      });

      // Filter inactive shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        if (!shootingStars[i].active) shootingStars.splice(i, 1);
      }

      animId = requestAnimationFrame(render);
    };

    // IntersectionObserver to pause loop when not in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isVisible) {
              isVisible = true;
              animId = requestAnimationFrame(render);
            }
          } else {
            isVisible = false;
            if (animId) cancelAnimationFrame(animId);
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);

    // Pause when browser tab is inactive
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isVisible = false;
        if (animId) cancelAnimationFrame(animId);
      } else {
        const rect = canvas.getBoundingClientRect();
        const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (inViewport && !isVisible) {
          isVisible = true;
          animId = requestAnimationFrame(render);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    animId = requestAnimationFrame(render);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDarkMode]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-80 dark:opacity-95" />;
};

