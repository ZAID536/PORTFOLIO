import React, { useEffect, useState, useRef } from 'react';

interface CustomCursorProps {
  isDarkMode: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const animFrameId = useRef<number | null>(null);

  const isHoveredRef = useRef(false);
  const cursorTextRef = useRef<string | null>(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Check if device supports fine pointer (mouse) vs touch only
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      // Check if hovering over interactive elements or project cards
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, input, textarea, select, [role="button"], .interactive-hover'
        );
        const cardTarget = target.closest('[data-cursor-text]');

        let nextHovered = false;
        let nextText: string | null = null;

        if (cardTarget) {
          nextHovered = true;
          nextText = cardTarget.getAttribute('data-cursor-text') || 'VIEW';
        } else if (interactive) {
          nextHovered = true;
          nextText = null;
        }

        if (isHoveredRef.current !== nextHovered) {
          isHoveredRef.current = nextHovered;
          setIsHovered(nextHovered);
        }
        if (cursorTextRef.current !== nextText) {
          cursorTextRef.current = nextText;
          setCursorText(nextText);
        }
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth Lerp animation loop for trailing outer ring
    let isRendering = true;
    const render = () => {
      if (!isRendering) return;
      // Lerp ring towards mouse position
      const lerpFactor = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRendering = false;
        if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      } else {
        if (!isRendering) {
          isRendering = true;
          animFrameId.current = requestAnimationFrame(render);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    animFrameId.current = requestAnimationFrame(render);

    return () => {
      isRendering = false;
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[9999] transition-opacity duration-150 ${
          isDarkMode ? 'bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]' : 'bg-slate-900 shadow-[0_0_8px_rgba(15,23,42,0.4)]'
        } ${isHovered ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        style={{ willChange: 'transform' }}
      />

      {/* Trailing Outer Ring / Label Bubble */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] flex items-center justify-center font-heading font-black text-[10px] tracking-widest uppercase transition-all duration-200 ease-out border ${
          cursorText
            ? 'w-14 h-14 bg-teal-600/90 text-white border-teal-400 shadow-lg backdrop-blur-xs scale-100'
            : isHovered
            ? 'w-12 h-12 bg-teal-500/15 border-teal-600 dark:border-teal-400 scale-110 shadow-md backdrop-blur-[2px]'
            : isDarkMode
            ? 'w-8 h-8 bg-transparent border-teal-400/60'
            : 'w-8 h-8 bg-transparent border-slate-900/50'
        }`}
        style={{ willChange: 'transform' }}
      >
        {cursorText && <span className="animate-in fade-in duration-150">{cursorText}</span>}
      </div>
    </>
  );
};
