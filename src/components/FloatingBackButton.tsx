import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface FloatingBackButtonProps {
  onClick?: () => void;
  label?: string;
  className?: string;
}

export const FloatingBackButton: React.FC<FloatingBackButtonProps> = ({
  onClick,
  label = 'Back to Projects',
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back();
    }
  };

  return (
    <div
      className={`fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-[9999] pointer-events-auto transition-all duration-300 ${className}`}
    >
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 min-h-[42px] sm:min-h-[44px] rounded-full text-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.4),0_8px_10px_-6px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out cursor-pointer select-none border border-white/25 backdrop-blur-xl ${
          isHovered
            ? 'bg-slate-950 scale-105 shadow-[0_15px_30px_-5px_rgba(255,107,74,0.4)] border-[#ff6b4a] px-6 py-3 ring-2 ring-[#ff6b4a]/30'
            : 'bg-slate-900/80 opacity-90 hover:opacity-100 scale-95 hover:scale-100'
        }`}
        aria-label="Back to projects"
      >
        <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#ff6b4a] flex items-center justify-center transition-colors duration-300 flex-shrink-0">
          <ArrowLeft className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover:-translate-x-1" />
        </div>
        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white whitespace-nowrap transition-all duration-300">
          {label}
        </span>
        <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-mono font-bold text-white/90 ml-1 transition-opacity duration-300">
          ESC
        </span>
      </button>
    </div>
  );
};

