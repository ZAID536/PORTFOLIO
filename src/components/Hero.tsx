import React from 'react';
import { ArrowDownRight, Compass, Download } from 'lucide-react';
import { HeroParticlesCanvas } from './HeroParticlesCanvas';
import { AnimatedCounter } from './AnimatedCounter';
import { TypewriterText } from './TypewriterText';

interface HeroProps {
  isDarkMode: boolean;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isDarkMode, onOpenResumeModal }) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPlayground = () => {
    const el = document.getElementById('playground');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Interactive Particle & 3D Shapes Canvas */}
      <HeroParticlesCanvas isDarkMode={isDarkMode} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Typewriter Text Animation */}
        <TypewriterText />

        {/* Main Bold Typography Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] text-[#16141A] dark:text-white leading-[1.02] mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          Where Strategy <br className="hidden sm:block" />
          <span className="text-[#E8502F] font-extrabold">Meets </span>
          <span className="text-[#16141A] dark:text-white font-black">Visual Design</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#5E5963] dark:text-slate-200 leading-[1.7] font-medium mb-10" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          Specializing in minimalist brand identities, 3D kinetic storytelling, and tactile visual architectures for modern technology firms.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={scrollToProjects}
            className="group btn-primary px-8 py-4 font-heading font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-3 cursor-pointer"
          >
            <span>Explore Projects</span>
            <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
          </button>

          <button
            onClick={scrollToPlayground}
            className="btn-secondary px-7 py-4 font-heading font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2.5 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#E8502F]" />
            <span>Launch Design Lab</span>
          </button>

          <button
            onClick={onOpenResumeModal}
            className="btn-secondary px-6 py-4 font-heading font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#E8502F]" />
            <span>CV / Resume</span>
          </button>
        </div>

        {/* Highlight Stats Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="glass-card p-5 border border-[#DCCFE8] dark:border-white/10 text-center hover:border-[#E8502F] transition-all duration-300">
            <div className="font-heading font-black text-2xl sm:text-3xl text-[#16141A] dark:text-white mb-1">
              <AnimatedCounter target={8} suffix="+" duration={1600} />
            </div>
            <div className="text-xs text-[#5E5963] dark:text-slate-300 font-bold">Years Experience</div>
          </div>
          <div className="glass-card p-5 border border-[#DCCFE8] dark:border-white/10 text-center hover:border-[#E8502F] transition-all duration-300">
            <div className="font-heading font-black text-2xl sm:text-3xl text-[#16141A] dark:text-white mb-1">
              <AnimatedCounter target={45} suffix="+" duration={1800} />
            </div>
            <div className="text-xs text-[#5E5963] dark:text-slate-300 font-bold">Brand Identity Systems</div>
          </div>
          <div className="glass-card p-5 border border-[#DCCFE8] dark:border-white/10 text-center hover:border-[#E8502F] transition-all duration-300">
            <div className="font-heading font-black text-2xl sm:text-3xl text-[#16141A] dark:text-white mb-1">
              <AnimatedCounter target={12} duration={1600} />
            </div>
            <div className="text-xs text-[#5E5963] dark:text-slate-300 font-bold">Design &amp; Red Dot Awards</div>
          </div>
          <div className="glass-card p-5 border border-[#DCCFE8] dark:border-white/10 text-center hover:border-[#E8502F] transition-all duration-300">
            <div className="font-heading font-black text-2xl sm:text-3xl text-[#16141A] dark:text-white mb-1">
              <AnimatedCounter target={100} suffix="%" duration={2000} />
            </div>
            <div className="text-xs text-[#5E5963] dark:text-slate-300 font-bold">Vector &amp; 3D Precision</div>
          </div>
        </div>
      </div>
    </section>
  );
};
