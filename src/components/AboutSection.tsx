import React, { useState } from 'react';
import { SKILLS } from '../data/projects';
import { Download, Sparkles, FileText } from 'lucide-react';
import { generateResumeDownload } from '../utils/pdfGenerator';
import { getOptimizedImageUrl } from '../utils/cloudinary';

import zaidZamanPortrait from '../assets/images/user_gdrive_portrait.png';
import studioPortrait from '../assets/images/zaid_zaman_studio_portrait_1784964629942.jpg';
import rawPortrait from '../assets/images/zaid_zaman_portrait_1784963871964.jpg';

const userPortrait = new URL('../assets/images/user_gdrive_portrait.png', import.meta.url).href;
const defaultPortrait = new URL('../assets/images/zaid_zaman_studio_portrait_1784964629942.jpg', import.meta.url).href;

const cloudPortrait = getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1786426827/zaid.png", 600);

interface AboutSectionProps {
  onOpenResumeModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResumeModal }) => {
  const gdriveId = "1FQ0NiMhtxpoOwPS1Wm6GQ1NMnfvIP4r-";
  
  const sources = [
    cloudPortrait,
    zaidZamanPortrait,
    studioPortrait,
    rawPortrait,
    defaultPortrait,
    userPortrait,
    `https://drive.google.com/thumbnail?id=${gdriveId}&sz=w1000`,
    `https://lh3.googleusercontent.com/d/${gdriveId}`,
  ];

  const [currentSrcIdx, setCurrentSrcIdx] = useState(0);

  const handleDownload = () => {
    generateResumeDownload();
    onOpenResumeModal();
  };

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#5E5963] dark:text-slate-300 font-sans block mb-2">
          About Zaid Zaman
        </span>
        <h2 className="font-heading text-4xl sm:text-6xl font-black text-[#16141A] dark:text-white tracking-[-0.04em] leading-[0.92] mb-4">
          Crafting Through <span className="italic font-serif font-normal text-[#E8502F]">Form</span>
        </h2>
        <p className="text-base sm:text-lg text-[#5E5963] dark:text-slate-200 leading-[1.7] font-medium">
          Specializing in minimalist brand identities and 3D visual storytelling for modern technology firms.
        </p>
      </div>

      {/* Main Grid: Bio Profile + Skills Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Left Profile Card */}
        <div className="lg:col-span-5 glass-card p-6 sm:p-8 border border-[#DCCFE8] dark:border-white/10 shadow-xl">
          <div className="relative mb-6 group">
            {/* Ambient Background Gradient Glow matching warm accent */}
            <div className="absolute -inset-1.5 rounded-[26px] bg-gradient-to-tr from-[#E8502F]/30 via-[#DCCFE8]/40 to-[#B9A6C9]/40 blur-xl opacity-80 pointer-events-none transition-all duration-500 group-hover:opacity-100 group-hover:scale-[1.02]" />

            <div className="relative aspect-square rounded-[20px] overflow-hidden bg-gradient-to-br from-[#1E1912] via-[#2A2216] to-[#14100B] shadow-2xl border border-[#E8502F]/30">
              {/* Subtle Aura Glow effect centered behind the head */}
              <div 
                className="absolute top-[4%] left-1/2 -translate-x-1/2 w-[65%] h-[65%] rounded-full bg-gradient-to-b from-[#FFA767]/45 via-[#E8502F]/25 to-transparent blur-2xl pointer-events-none z-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div 
                className="absolute top-[2%] left-1/2 -translate-x-1/2 w-[40%] h-[40%] rounded-full bg-[#FFE5D4]/30 blur-xl pointer-events-none z-0"
                aria-hidden="true"
              />
              <img
                src={sources[currentSrcIdx]}
                onError={() => {
                  if (currentSrcIdx < sources.length - 1) {
                    setCurrentSrcIdx(prev => prev + 1);
                  }
                }}
                alt="Zaid Zaman Graphic Designer"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top relative z-10"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 right-4 z-20 bg-[#16141A] text-white dark:bg-slate-900 px-4 py-2 rounded-2xl border border-[#E8502F]/50 shadow-xl flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E8502F]" />
              <span className="text-xs font-heading font-black text-white">
                Art Director &amp; 3D Artist
              </span>
            </div>
          </div>

          <h3 className="font-heading font-black text-2xl text-[#16141A] dark:text-white mb-2">
            Zaid Zaman
          </h3>
          <p className="text-xs font-mono font-bold text-[#5E5963] dark:text-slate-300 mb-4 uppercase tracking-wider">
            Based in Karachi, Pakistan | Available Globally
          </p>
          <p className="text-sm text-[#16141A] dark:text-slate-100 leading-relaxed mb-6 font-medium">
            Design is not merely how a surface looks. It's the invisible mathematical lattice that guides human perception. I craft visual identities that command attention while standing the test of time.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleDownload}
              className="w-full btn-primary py-3.5 px-5 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#FFFFFF]" />
              <span>Download CV / Resume</span>
            </button>
            <button
              onClick={onOpenResumeModal}
              className="w-full btn-secondary py-3.5 px-4 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#E8502F]" />
              <span>View Full CV</span>
            </button>
          </div>
        </div>

        {/* Right Column: Skills Matrix */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-card p-6 sm:p-8 border border-[#DCCFE8] dark:border-white/10 shadow-xl">
            <h3 className="font-heading font-black text-xl mb-6 text-[#16141A] dark:text-white flex items-center justify-between">
              <span>Capabilities &amp; Mastery</span>
              <span className="text-xs font-mono text-[#5E5963] dark:text-slate-400 font-bold">8 Core Domains</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILLS.map((skill, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-[#EAE3EF]/60 dark:bg-slate-800/80 border border-[#DCCFE8] dark:border-white/10 hover:border-[#E8502F]/60 transition-all shadow-xs"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-heading font-black text-sm text-[#16141A] dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono font-black text-[#E8502F]">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Level Bar */}
                  <div className="w-full h-1.5 rounded-full bg-[#DCCFE8] dark:bg-slate-700 overflow-hidden mb-2">
                    <div
                      className="h-full rounded-full bg-[#E8502F]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <p className="text-xs text-[#5E5963] dark:text-slate-300 leading-normal font-medium">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
