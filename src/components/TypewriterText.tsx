import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, animate, useTransform } from 'motion/react';

interface TypewriterTextProps {
  englishText?: string;
  arabicText?: string;
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  englishText = "Zaid Zaman",
  arabicText = "زيد زمان",
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Start search lens progress at 20% (start of "Zaid Zaman")
  const progress = useMotionValue(20); 
  const [isPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(true);

  // Bounds constrained strictly to the width of the name text (20% to 80%)
  const MIN_BOUND = 20;
  const MAX_BOUND = 80;

  // Track viewport visibility
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);

    const handleVisibility = () => {
      if (document.hidden) {
        setIsInView(false);
      } else if (el) {
        const rect = el.getBoundingClientRect();
        setIsInView(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  // Continuous sweeping animation strictly bounded over the name "Zaid Zaman"
  useEffect(() => {
    if (!isPlaying || isHovered || !isInView) return;

    let isMounted = true;

    const runSweepLoop = async () => {
      while (isMounted && isPlaying && !isHovered && isInView) {
        // Sweep Left to Right across the name (20% to 80%) - Smooth Search Scan
        await animate(progress, MAX_BOUND, {
          duration: 4.2,
          ease: [0.42, 0, 0.28, 1],
        });

        if (!isMounted || isHovered || !isInView) break;
        // Pause gently at the end of the name
        await new Promise((r) => setTimeout(r, 700));

        if (!isMounted || isHovered || !isInView) break;
        // Sweep Right to Left across the name (80% to 20%) - Smooth Search Scan
        await animate(progress, MIN_BOUND, {
          duration: 4.2,
          ease: [0.42, 0, 0.28, 1],
        });

        if (!isMounted || isHovered || !isInView) break;
        // Pause gently at the start of the name
        await new Promise((r) => setTimeout(r, 700));
      }
    };

    runSweepLoop();

    return () => {
      isMounted = false;
    };
  }, [isPlaying, isHovered, isInView, progress]);

  // Mouse move handler for interactive search icon tracking (clamped to name bounds)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const rawP = (x / rect.width) * 100;
    const clampedP = Math.max(MIN_BOUND, Math.min(MAX_BOUND, rawP));
    progress.set(clampedP);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const rawP = (x / rect.width) * 100;
    const clampedP = Math.max(MIN_BOUND, Math.min(MAX_BOUND, rawP));
    progress.set(clampedP);
  };

  // Split names into first and last name for dual-color styling
  const englishParts = englishText.split(" ");
  const englishFirst = englishParts[0] || "Zaid";
  const englishLast = englishParts.slice(1).join(" ") || "Zaman";

  const arabicParts = arabicText.split(" ");
  const arabicFirst = arabicParts[0] || "زيد";
  const arabicLast = arabicParts.slice(1).join(" ") || "زمان";

  // Dynamic Clip Paths for the sweeping circular reveal (size 75px radius)
  const lensClipPath = useTransform(progress, (p) => `circle(75px at ${p}% 50%)`);

  return (
    <div className={`w-full max-w-xl mx-auto my-4 select-none ${className}`}>
      {/* Outer Card Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full h-36 sm:h-44 md:h-52 rounded-3xl bg-transparent border-0 flex items-center justify-center overflow-hidden cursor-crosshair group transition-all duration-300"
      >
        {/* Container */}

        {/* LAYER 1: BASE TEXT - English Name centered */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <h2
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-none whitespace-nowrap text-center transition-transform duration-200 group-hover:scale-[1.01]"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            <span className="text-white mr-2 sm:mr-3">{englishFirst}</span>
            <span className="text-[#E8440A]">{englishLast}</span>
          </h2>
        </div>

        {/* LAYER 2: REVEALED ARABIC TEXT INSIDE SWEEPING METALLIC GLASS CIRCLE */}
        <motion.div
          style={{
            clipPath: lensClipPath,
            background: 'linear-gradient(90deg, #F8F8F8 0%, #E8E8E8 20%, #C0C0C0 50%, #E8E8E8 80%, #FFFFFF 100%)',
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
        >
          <h2
            dir="rtl"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-normal leading-none whitespace-nowrap text-center relative z-10"
            style={{
              fontFamily: "'Amiri', 'Noto Nastaliq Urdu', 'Tajawal', serif",
              paddingBottom: '0.1em',
            }}
          >
            <span className="text-slate-950 ml-2 sm:ml-3">{arabicFirst}</span>
            <span className="text-[#E8440A]">{arabicLast}</span>
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default TypewriterText;
