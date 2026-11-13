import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-8 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs font-semibold text-[#5E5963] dark:text-slate-400">
      {/* Soft Divider Top Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#DCCFE8] dark:bg-white/10" />

      <div className="flex items-center gap-3">
        <div className="tracking-widest uppercase font-bold text-[#5E5963] dark:text-slate-400">
          © 2026 ZAID ZAMAN — ALL RIGHTS RESERVED
        </div>
      </div>

      {/* Quick Links */}
      <div className="flex items-center gap-6 sm:gap-8 tracking-widest uppercase font-bold text-[#5E5963] dark:text-slate-400">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E8502F] transition-colors">
          INSTAGRAM
        </a>
        <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-[#E8502F] transition-colors">
          BEHANCE
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E8502F] transition-colors">
          LINKEDIN
        </a>
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="p-2.5 rounded-full bg-[#16141A] text-white hover:bg-[#E8502F] transition-all cursor-pointer border border-[#16141A] shadow-md ml-2 animate-heartbeat"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};
